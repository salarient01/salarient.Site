import React from "react";
import { ArrowRight, Cloud, ServerCog, GitPullRequest, ShieldCheck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  description?: string;
};

export default function ITSolutions({ title = "IT Solutions", description }: Props) {
  const desc =
    description ||
    `Our IT Solutions complement every product we offer — from secure infrastructure and integrations to managed services and AI-powered automation. We build reliable, production-ready systems so your HR and payroll platforms scale securely.`;

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-background border border-border">
            <Cloud className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-sm text-muted-foreground">
              Managed cloud deployments, CI/CD pipelines, container orchestration, and
              cost-optimized infrastructure for high availability and fast deployments.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-background border border-border">
            <ServerCog className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Managed Infrastructure</h3>
            <p className="text-sm text-muted-foreground">
              24/7 monitoring, managed backups, disaster recovery planning, and platform hardening
              to keep your payroll systems resilient and secure.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-background border border-border">
            <GitPullRequest className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Integrations & APIs</h3>
            <p className="text-sm text-muted-foreground">
              Pre-built and custom integrations with HRIS, benefits carriers, banks, and time systems.
              Secure APIs and webhooks for bi-directional data flow.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-background border border-border">
            <ShieldCheck className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Security & Compliance</h3>
            <p className="text-sm text-muted-foreground">
              SOC2-ready practices, encryption at rest and in transit, role-based access,
              and regular vulnerability scanning to meet audit requirements.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-background border border-border">
            <Headphones className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Managed Support</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated support teams, SLA-backed response windows, and proactive system health
              management so your operations run smoothly.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-background border border-border">
            <ArrowRight className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">AI & Automation</h3>
            <p className="text-sm text-muted-foreground">
              RPA, ML models for anomaly detection, and automation pipelines that reduce manual work
              and improve accuracy across payroll and HR processes.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="/services" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-amber-400 to-yellow-400 px-5 py-3 text-slate-900 font-semibold">
            Learn more about our IT solutions
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
