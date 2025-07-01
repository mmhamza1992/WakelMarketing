import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const leadData = insertLeadSchema.parse(req.body);
      
      // Store lead in database
      const lead = await storage.createLead(leadData);
      
      // Send email notification
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.titan.email",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: "m@wakel.io",
            pass: "Hamada12345@ge",
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_USER || "noreply@wakel.io",
          to: "m@wakel.io",
          subject: "New Lead – Wakel.io",
          text: `Name: ${lead.name}\nCompany: ${lead.company}\nEmail: ${lead.email}\n---\n${lead.message}`,
          html: `
            <h2>New Lead from Wakel.io</h2>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Company:</strong> ${lead.company}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Message:</strong></p>
            <p>${lead.message.replace(/\n/g, '<br>')}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails
      }

      res.json({ ok: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid request data" 
      });
    }
  });

  // Whitepaper download notification endpoint
  app.post("/api/whitepaper-download", async (req, res) => {
    try {
      const { name, email, company } = req.body;
      
      if (!name || !email || !company) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, company" 
        });
      }

      // Send email notification about whitepaper download
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.titan.email",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: "m@wakel.io",
            pass: "Hamada12345@ge",
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_USER || "noreply@wakel.io",
          to: "m@wakel.io",
          subject: "Whitepaper Downloaded – MENAT AI Market Report",
          html: `
            <h2>Whitepaper Download Notification</h2>
            <p>Someone has downloaded the MENAT AI Market Whitepaper:</p>
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            
            <hr>
            <p><strong>Document:</strong> Wakel.io White Paper (2025) - Unlocking MENAT for Global AI Tools</p>
            <p><strong>Downloaded on:</strong> ${new Date().toLocaleString()}</p>
            
            <p><em>This is a high-value lead interested in MENAT AI market entry. Consider following up within 24 hours.</em></p>
          `,
        });
        
        res.json({ success: true, message: "Download notification sent" });
      } catch (emailError) {
        console.error("Whitepaper email sending failed:", emailError);
        res.status(500).json({ error: "Failed to send notification email" });
      }
    } catch (error) {
      console.error("Whitepaper download error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
