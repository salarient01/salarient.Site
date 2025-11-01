import React from "react";
import { Headphones, FileText, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ServicesHighlight() {
  const location = useLocation();
  return (
    <section className="py-20 bg-gradient-to-br from-[#07060a] to-[#040412] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold mb-3">BPO &amp; IT Services</h2>
          <div className="mx-auto mb-6 w-24 h-1 rounded-full bg-amber-400/90" />
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end business process outsourcing and IT services that streamline operations,
            elevate customer experience, and accelerate digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Headphones className="h-10 w-10 text-amber-400 flex-shrink-0 mt-0.5" />,
              title: "Customer Experience Management",
              desc: "Omnichannel contact center (voice, chat, email, social), intelligent routing, VIP support, CX analytics, and quality management. We help reduce handle time while improving CSAT and NPS.",
              bullets: ["Omnichannel support & automated chatflows", "CX analytics, QA & coaching", "SLA-driven VIP routing and escalation"],
            },
            {
              icon: <FileText className="h-10 w-10 text-amber-400 flex-shrink-0 mt-0.5" />,
              title: "Back Office Processing",
              desc: "Payroll reconciliation, invoice processing, HR admin, and document workflows — automated and monitored for accuracy. Designed to reduce cycle times and lower operating costs.",
              bullets: ["Payroll reconciliation & reporting", "Invoice & AP automation", "Document digitization & secure records"],
            },
            {
              icon: <ShieldCheck className="h-10 w-10 text-amber-400 flex-shrink-0 mt-0.5" />,
              title: "Trust & Safety Solutions",
              desc: "Scalable content moderation, fraud detection, appeals workflows and policy enforcement to protect platforms and users while maintaining high throughput.",
              bullets: ["Moderation (human + ML)", "Fraud & risk detection", "Escalation & appeals management"],
            },
            {
              icon: <Cpu className="h-10 w-10 text-amber-400 flex-shrink-0 mt-0.5" />,
              title: "AI Services & IT Solutions",
              desc: "Custom AI models, RPA, systems integration, and managed IT services. We build production-ready models and integrations that reduce manual work and unlock new automation opportunities.",
              bullets: ["Custom ML & NLP solutions", "RPA and workflow automation", "Systems integration & managed services"],
            },
          ].map((card, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#0b0a0e] border border-amber-500/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
              <div className="flex items-start gap-4">
                {card.icon}
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{card.title}</h3>
                  <p className="text-muted-foreground mb-3">{card.desc}</p>
                  <ul className="mt-3 text-sm text-muted-foreground space-y-2">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {location.pathname !== "/services" && (
          <div className="mt-10 text-center">
            <a href="/services" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-amber-400 to-yellow-400 px-6 py-3 text-slate-900 font-semibold shadow-[0_14px_50px_-16px_rgba(250,204,21,0.28)]">
              Explore our services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
