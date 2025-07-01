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
          host: process.env.SMTP_HOST || "smtp.titan.email",
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER || "",
            pass: process.env.SMTP_PASS || "",
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

  const httpServer = createServer(app);
  return httpServer;
}
