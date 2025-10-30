import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import ServicesHighlight from "@/components/ServicesHighlight";
import ITSolutions from "@/components/ITSolutions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, DollarSign, Calendar, Users, FileText, Shield } from "lucide-react";

const PayrollProcessing = () => {
  return (
  <div className="min-h-screen flex flex-col bg-rose-900 text-white">
      <Navbar />
      
  <section className="py-20 bg-rose-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Payroll Processing Made Simple
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Process payroll in minutes, not hours. Our automated platform handles calculations, 
              tax filings, and direct deposits with 99.9% accuracy.
            </p>
            <Link to="/services">
              <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
                Explore our services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automated Payroll That Just Works
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our intelligent payroll engine automates every aspect of payroll processing, from 
                calculating wages and deductions to generating pay stubs and filing taxes. Say goodbye 
                to manual calculations and human errors.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatic wage calculations based on hours worked, overtime, and bonuses",
                  "Real-time tax withholding for federal, state, and local requirements",
                  "Direct deposit processing with same-day or next-day delivery options",
                  "Unlimited pay runs and off-cycle payments at no additional cost",
                  "Multi-state payroll support for distributed workforces",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Process Times</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">3 min</div>
                  <div className="text-white/80">Average payroll run time</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">99.9%</div>
                  <div className="text-white/80">Calculation accuracy rate</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">$12K</div>
                  <div className="text-white/80">Average annual savings per company</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Payroll Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "Flexible Pay Options",
                  description: "Support for hourly, salaried, commission-based, and contract workers. Handle multiple pay rates, shift differentials, and complex compensation structures with ease.",
                },
                {
                  icon: Calendar,
                  title: "Multiple Pay Schedules",
                  description: "Run weekly, bi-weekly, semi-monthly, or monthly payrolls. Set up different schedules for different employee groups and automate recurring payments.",
                },
                {
                  icon: Users,
                  title: "Multi-Location Support",
                  description: "Manage payroll across multiple locations, departments, and cost centers. Automatically apply local tax rates and compliance requirements for each jurisdiction.",
                },
                {
                  icon: FileText,
                  title: "Comprehensive Reporting",
                  description: "Generate detailed payroll reports including wage summaries, tax liability reports, labor cost analysis, and custom reports for accounting and budgeting.",
                },
                {
                  icon: Shield,
                  title: "Tax Compliance",
                  description: "Automatic calculation and filing of federal, state, and local payroll taxes. We handle quarterly filings, year-end forms (W-2s, 1099s), and new hire reporting.",
                },
                {
                  icon: CheckCircle2,
                  title: "Audit Trail",
                  description: "Complete audit history of all payroll transactions with time-stamped records, user tracking, and detailed logs for compliance and internal auditing purposes.",
                },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

            <div className="rounded-2xl p-8 md:p-12 bg-background text-foreground">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Import Time Data",
                  description: "Automatically sync time and attendance data from your time tracking system or manually enter hours.",
                },
                {
                  step: "2",
                  title: "Review & Approve",
                  description: "Our system calculates wages, taxes, and deductions. Review the preview and make any necessary adjustments.",
                },
                {
                  step: "3",
                  title: "Process Payroll",
                  description: "Hit submit and we handle everything: direct deposits, tax filings, and generating pay stubs for employees.",
                },
                {
                  step: "4",
                  title: "Reports & Records",
                  description: "Access comprehensive reports and maintain complete records for accounting, compliance, and analysis.",
                },
              ].map((step, index) => (
                <div key={index}>
                  <div className="w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  <ITSolutions />

  <ServicesHighlight />

  <section className="py-20 bg-rose-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Payroll?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses processing payroll in minutes
          </p>
          <Link to="/services">
            <Button size="lg" variant="secondary">
              Explore our services
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayrollProcessing;
