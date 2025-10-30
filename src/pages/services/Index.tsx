import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    id: "monthly-payroll-processing",
    title: "Monthly payroll processing",
    description:
      "Full-service monthly payroll runs: gross-to-net calculations, tax withholdings, direct deposits and reconciliations.",
    bullets: [
      "Accurate wage calculations and deductions",
      "Automated direct deposits and payment files",
      "Multi-state payroll and tax handling",
    ],
  },
  {
    id: "payslip-salary",
    title: "Payslip & salary statement generation",
    description: "Generate compliant, branded payslips and detailed salary statements for employees.",
    bullets: ["Customizable payslip templates", "PDF export and secure delivery", "Historical payslip access"],
  },
  {
    id: "pf-esi-tds",
    title: "PF / ESI / TDS compliance",
    description: "Ensure statutory compliance with Provident Fund, ESI and TDS filing and remittance support.",
    bullets: ["Filing assistance and reminders", "Automated contribution calculations", "Statutory report generation"],
  },
  {
    id: "attendance-leave",
    title: "Employee attendance & leave management",
    description: "Track attendance, manage leave requests, and integrate with time-clocks for accurate pay.",
    bullets: ["Clock-in/out integrations", "Flexible leave policies", "Accruals and approvals workflow"],
  },
  {
    id: "statutory-mis",
    title: "Statutory reports & MIS support",
    description: "Comprehensive statutory reporting and management information systems (MIS) for leadership and auditors.",
    bullets: ["Pre-built statutory report packages", "Custom MIS dashboards", "Exportable reports (CSV/PDF)"]
  },
  {
    id: "hr-support-smes",
    title: "End-to-End HR support for SMEs",
    description: "Outsourced HR services for small and medium businesses including onboarding, policies, and employee relations.",
    bullets: ["Onboarding & offboarding support", "HR policy templates and advisory", "Employee relations and helpdesk"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive payroll and HR services tailored to your business. Choose the
              services you need and let our experts take care of the rest.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {services.map((svc, idx) => (
              <article key={svc.id} id={svc.id} className="p-6 rounded-2xl bg-card">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">{`Service ${idx + 1}`}</div>
                    <h3 className="text-2xl font-semibold mt-1 mb-2">{svc.title}</h3>
                    <p className="text-muted-foreground mb-3">{svc.description}</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {svc.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">Learn more or contact our sales team to discuss a custom plan.</p>
          <Link to="/features/automation">
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">Learn more</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
