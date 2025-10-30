import React from "react";
import { Headphones, FileText, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function ServicesHighlight() {
  return (
    <section className="py-16 bg-[#040412] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold mb-4">BPO & IT Services</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We provide end-to-end business process outsourcing and IT services that streamline
            operations, elevate customer experience, and accelerate digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-background text-foreground border border-border">
            <div className="flex items-start gap-4">
              <Headphones className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Customer Experience Management</h3>
                <p className="text-muted-foreground">
                  Omnichannel contact center (voice, chat, email, social), intelligent routing, VIP support,
                  CX analytics, and quality management. We help reduce handle time while improving CSAT and NPS.
                </p>
                <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                  <li>• Omnichannel support & automated chatflows</li>
                  <li>• CX analytics, QA & coaching</li>
                  <li>• SLA-driven VIP routing and escalation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-background text-foreground border border-border">
            <div className="flex items-start gap-4">
              <FileText className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Back Office Processing</h3>
                <p className="text-muted-foreground">
                  Payroll reconciliation, invoice processing, HR admin, and document workflows — automated and
                  monitored for accuracy. Designed to reduce cycle times and lower operating costs.
                </p>
                <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                  <li>• Payroll reconciliation & reporting</li>
                  <li>• Invoice & AP automation</li>
                  <li>• Document digitization & secure records</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-background text-foreground border border-border">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Trust &amp; Safety Solutions</h3>
                <p className="text-muted-foreground">
                  Scalable content moderation, fraud detection, appeals workflows and policy enforcement to
                  protect platforms and users while maintaining high throughput.
                </p>
                <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                  <li>• Moderation (human + ML)</li>
                  <li>• Fraud & risk detection</li>
                  <li>• Escalation & appeals management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-background text-foreground border border-border">
            <div className="flex items-start gap-4">
              <Cpu className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Services &amp; IT Solutions</h3>
                <p className="text-muted-foreground">
                  Custom AI models, RPA, systems integration, and managed IT services. We build production-ready
                  models and integrations that reduce manual work and unlock new automation opportunities.
                </p>
                <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                  <li>• Custom ML & NLP solutions</li>
                  <li>• RPA and workflow automation</li>
                  <li>• Systems integration & managed services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/services" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-amber-400 to-yellow-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_12px_40px_-10px_rgba(250,204,21,0.25)]">
            Explore our services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
