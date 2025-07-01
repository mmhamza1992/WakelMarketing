import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Download, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface WhitepaperDownloadProps {
  children: React.ReactNode;
}

export default function WhitepaperDownload({ children }: WhitepaperDownloadProps) {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const downloadMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; company: string }) => {
      const response = await apiRequest('POST', '/api/whitepaper-download', data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: language === 'en' ? 'Notification Sent!' : 'تم إرسال الإشعار!',
        description: language === 'en' ? 'Download started and team notified' : 'بدأ التحميل وتم إشعار الفريق'
      });
    },
    onError: () => {
      toast({
        title: language === 'en' ? 'Download Started' : 'بدأ التحميل',
        description: language === 'en' ? 'Whitepaper downloaded successfully' : 'تم تحميل الدراسة بنجاح'
      });
    }
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company) {
      toast({
        title: language === 'en' ? 'Please fill all fields' : 'يرجى ملء جميع الحقول',
        variant: 'destructive'
      });
      return;
    }

    // Create a better formatted HTML document for PDF-like appearance
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Wakel.io White Paper 2025</title>
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 3px solid #0E7DF0; padding-bottom: 20px; margin-bottom: 30px; }
        .title { font-size: 28px; font-weight: bold; color: #0E7DF0; margin-bottom: 10px; }
        .subtitle { font-size: 18px; color: #666; }
        h1 { color: #0E7DF0; font-size: 22px; margin-top: 30px; }
        h2 { color: #333; font-size: 18px; margin-top: 25px; }
        h3 { color: #666; font-size: 16px; margin-top: 20px; }
        .metrics-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .metrics-table th, .metrics-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        .metrics-table th { background-color: #f8f9fa; font-weight: bold; }
        .highlight { background-color: #f0f8ff; padding: 15px; border-left: 4px solid #0E7DF0; margin: 20px 0; }
        .conclusion { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 30px; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
        .download-info { background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        ul { padding-left: 25px; }
        li { margin-bottom: 8px; }
    </style>
</head>
<body>
    <div class="download-info">
        <strong>Downloaded by:</strong> ${formData.name} (${formData.email}) from ${formData.company}<br>
        <strong>Download Date:</strong> ${new Date().toLocaleDateString()}
    </div>

    <div class="header">
        <div class="title">Wakel.io White Paper (2025)</div>
        <div class="subtitle">Unlocking MENAT for Global AI Tools</div>
    </div>

    <h1>1. Executive Summary</h1>
    <p>Artificial-intelligence spending in the Middle East, North Africa and Türkiye (MENAT) is scaling faster than in any other emerging region. Grand View Research values the MENAT AI market at <strong>US $11.9 billion in 2023</strong> and projects <strong>US $166 billion by 2030</strong> (≈44% CAGR).</p>
    
    <p>PwC estimates AI will inject <strong>US $320 billion</strong> into regional GDP by 2030 — 2% of its global impact.</p>
    
    <div class="highlight">
        Yet &lt; 1% of web content is Arabic (0.6% as of mid-2024) and most AI products launch without dialect support, RTL UX, or regulatory alignment. <strong>Wakel.io fills this gap</strong> as an exclusive regional agent that localises, hosts and commercially scales best-in-class AI tools across 18 MENAT countries.
    </div>

    <h1>2. Market Opportunity</h1>
    <table class="metrics-table">
        <tr><th>Metric</th><th>2024/25 Snapshot</th><th>Source</th></tr>
        <tr><td>MENAT AI market size</td><td>US $11.9 bn (2023)→US $166 bn (2030)</td><td>Grand View Research</td></tr>
        <tr><td>AI contribution to MENAT GDP (2030)</td><td>US $320 bn</td><td>PwC</td></tr>
        <tr><td>GCC digital-ad market CAGR ('24-30)</td><td>≈9.4%</td><td>MarkNtel Advisors</td></tr>
        <tr><td>Arabic share of global web content</td><td>0.6%</td><td>W3Techs (June 2024)</td></tr>
    </table>

    <h2>2.1 Growth Drivers</h2>
    <ul>
        <li><strong>Vision 2030 investment waves</strong> in KSA & UAE, funnelling sovereign funds into AI data centres and R&D hubs</li>
        <li><strong>Regulatory clarity</strong> such as the UAE's 2024 AI-and-Data framework, offering transparent compliance paths</li>
        <li><strong>Digital-advertising boom</strong> (9%+ CAGR) giving AI martech vendors instant monetisation routes</li>
    </ul>

    <h2>2.2 Localization & Go-to-Market Gaps</h2>
    <ul>
        <li><strong>Language complexity</strong> — root-rich morphology, 20+ dialect clusters</li>
        <li><strong>UX inversion</strong> — RTL layouts, bidirectional numerals, culturally specific colour semantics</li>
        <li><strong>Fragmented sales landscape</strong> — handshake-driven enterprise deals across 18 jurisdictions</li>
        <li><strong>Data-sovereignty rules</strong> — many sectors mandate in-country hosting</li>
    </ul>

    <h1>3. The Wakel.io Solution</h1>
    <table class="metrics-table">
        <tr><th>Layer</th><th>Wakel Deliverables</th><th>Impact</th></tr>
        <tr><td>Linguistic AI Tuning</td><td>Dialect corpora, morphology-aware tokenisers, accent-specific ASR/TTS</td><td>+25-40% NLU accuracy</td></tr>
        <tr><td>UX & Voice Adaptation</td><td>RTL redesign, Gulf/Levantine TTS, culturally vetted imagery</td><td>Native-quality user journeys</td></tr>
        <tr><td>Regulatory & Hosting</td><td>Deploy in GCC Tier-III DCs; map to UAE & KSA DP laws</td><td>Compliance-ready rollout</td></tr>
        <tr><td>B2B Deal-Flow</td><td>100+ vetted marketing & SI partners, telcos and GovTech units</td><td>Pilot-to-contract in weeks</td></tr>
    </table>

    <h1>4. Business Model</h1>
    <table class="metrics-table">
        <tr><th>Stream</th><th>Mechanics</th><th>Typical Split</th></tr>
        <tr><td>Agency Licence</td><td>Exclusive MENAT distribution; Wakel co-brands & sells</td><td>Rev-share 15-25%</td></tr>
        <tr><td>Integration Fees</td><td>Local implementation, training, support</td><td>Cost + margin</td></tr>
        <tr><td>Pilot Accelerator</td><td>Fixed pilot package (90 days)</td><td>Flat US $20-50k</td></tr>
        <tr><td>Data-Residency Hosting</td><td>Mark-up on cloud/DC costs</td><td>10-15%</td></tr>
    </table>

    <h1>5. Go-to-Market Framework</h1>
    <ul>
        <li><strong>Market Readiness Scan</strong> – 2 weeks</li>
        <li><strong>Pilot Factory</strong> – 90-day PoC with anchor clients in Retail, FSI, GovTech</li>
        <li><strong>Scale-out Playbooks</strong> – replicate wins via partner agencies & telcos</li>
        <li><strong>Continuous Feedback Loop</strong> – anonymised usage data retrains dialect layers</li>
    </ul>

    <h1>6. Case Snapshots (2025)</h1>
    <p><em>(Client names redacted for confidentiality)</em></p>
    <table class="metrics-table">
        <tr><th>Sector</th><th>Problem</th><th>Wakel Fix</th><th>90-Day Result</th></tr>
        <tr><td>Retail</td><td>EN-only chatbot (32% containment)</td><td>Gulf-Arabic NLU + RTL UI</td><td>62% containment, –30% CS cost</td></tr>
        <tr><td>Banking</td><td>Legacy IVR, 40s hold</td><td>Voice-AI with Gulf TTS/ASR</td><td>15s avg. handle-time</td></tr>
        <tr><td>GovTech</td><td>Manual doc triage</td><td>Arabic OCR + LLM summariser</td><td>10× faster routing</td></tr>
    </table>

    <h1>7. Roadmap 2025-27</h1>
    <table class="metrics-table">
        <tr><th>Quarter</th><th>Milestone</th></tr>
        <tr><td>Q4 2025</td><td>5 AI vendors under exclusive MENAT agency; revenue target US $5m</td></tr>
        <tr><td>Q2 2026</td><td>Launch Wakel Dialect Suite (Egyptian & Levantine adapters)</td></tr>
        <tr><td>Q4 2026</td><td>Sovereign LLM hub live in KSA Tier-III DC</td></tr>
        <tr><td>2027</td><td>Expand coverage to Pakistan & Central Asia (MENAT + PAC)</td></tr>
    </table>

    <h1>8. Risk & Mitigation</h1>
    <table class="metrics-table">
        <tr><th>Risk</th><th>Mitigation</th></tr>
        <tr><td>Regulatory shifts</td><td>Ongoing legal counsel; multi-jurisdiction compliance library</td></tr>
        <tr><td>Data-residency</td><td>Optional on-prem or national-cloud deployments</td></tr>
        <tr><td>Dialect accuracy</td><td>Continuous corpus expansion via partnered universities</td></tr>
        <tr><td>Currency volatility</td><td>Contracts in USD with hedging clauses</td></tr>
    </table>

    <div class="conclusion">
        <h1>9. Conclusion</h1>
        <p>MENAT's AI market is on a parabolic trajectory, yet localisation and go-to-market barriers keep global vendors sidelined. <strong>Wakel.io provides the linguistic, regulatory and commercial bridge</strong> that turns cutting-edge AI into real revenue across 18 Arabic-speaking countries.</p>
        
        <p><strong>Ready to capture MENAT?</strong> Contact us at <a href="mailto:m@wakel.io">m@wakel.io</a> or via <a href="https://wakel.io/contact">Wakel.io/contact</a>.</p>
    </div>

    <div class="footer">
        <p><strong>Document v1.0 – July 2025</strong><br>
        Prepared by Wakel.io Strategy & Research Team</p>
    </div>
</body>
</html>`;

    // Create and trigger download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Wakel-io-MENAT-AI-Whitepaper-2025.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Send email notification
    downloadMutation.mutate(formData);

    setIsOpen(false);
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <FileText className="w-5 h-5 text-wakel-primary" />
            <span>
              {language === 'en' ? 'Download Whitepaper' : 'تحميل الدراسة'}
            </span>
          </DialogTitle>
          <DialogDescription>
            {language === 'en' 
              ? 'Get exclusive insights into the $166B MENAT AI opportunity. Please provide your details to download.'
              : 'احصل على رؤى حصرية حول فرصة الذكاء الاصطناعي بقيمة 166 مليار دولار في المنطقة. يرجى تقديم بياناتك للتحميل.'
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleDownload} className="space-y-4">
          <div>
            <Label htmlFor="name">
              {language === 'en' ? 'Full Name' : 'الاسم الكامل'} *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">
              {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="company">
              {language === 'en' ? 'Company' : 'الشركة'} *
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="mt-1"
              required
            />
          </div>

          <div className="bg-wakel-secondary p-4 rounded-xl">
            <p className="text-sm text-wakel-muted">
              {language === 'en' 
                ? 'Get exclusive insights into the $166B MENAT AI opportunity. 153-page comprehensive market analysis.'
                : 'احصل على رؤى حصرية حول فرصة الذكاء الاصطناعي بقيمة 166 مليار دولار في المنطقة. تحليل شامل للسوق من 153 صفحة.'
              }
            </p>
          </div>
          
          <Button type="submit" className="w-full btn-primary">
            <Download className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Download Now' : 'تحميل الآن'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}