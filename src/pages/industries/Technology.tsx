import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Globe, TrendingUp } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sea-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Payroll for Tech Companies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Modern payroll for fast-growing startups and established tech companies. Handle equity 
              compensation, remote teams, and contractor payments with ease.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for Modern Tech Teams
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tech companies need payroll that moves as fast as they do. From pre-seed startups to 
                public companies, we handle equity grants, multi-country payroll, and complex contractor 
                relationships.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Code className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Stock options, RSUs, and equity compensation tracking</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Fast onboarding for rapid hiring and team scaling</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Global payroll for distributed and remote teams</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Contractor management and 1099 processing</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl p-8 bg-background text-foreground">
              <h3 className="text-2xl font-bold mb-6">Tech Company Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">3,500+</div>
                  <div className="text-white/80">Tech companies served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <div className="text-white/80">Reduction in onboarding time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Countries supported</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tech-Focused Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Equity Compensation",
                  description: "Track stock options (ISOs and NSOs), RSUs, and equity grants. Automatic vesting schedules, exercise tracking, and tax withholding for equity events. Integration with cap table management tools like Carta and Shareworks.",
                },
                {
                  title: "Contractor Management",
                  description: "Manage 1099 contractors alongside W-2 employees. Automated 1099-NEC generation and filing, payment processing, and compliance monitoring. Track contractor expenses and project-based payments efficiently.",
                },
                {
                  title: "Global Payroll",
                  description: "Pay employees and contractors in 50+ countries with local currency and compliance. Automatic tax calculations for international employees, foreign exchange handling, and country-specific labor law compliance built-in.",
                },
                {
                  title: "API-First Platform",
                  description: "Integrate payroll data with your HRIS, accounting software, and internal tools using our comprehensive API. Webhooks for real-time event notifications, custom integrations, and automated workflows.",
                },
                {
                  title: "Rapid Onboarding",
                  description: "Onboard new hires in minutes with automated workflows and e-signature support. Bulk hiring tools for scaling teams quickly. New hire reporting and I-9 verification integrated into the onboarding process.",
                },
                {
                  title: "R&D Tax Credits",
                  description: "Track qualifying R&D activities and calculate tax credit eligibility. Generate reports to support R&D tax credit claims. Integration with accounting systems for seamless credit processing and documentation.",
                },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 bg-background text-foreground">
            <h2 className="text-3xl font-bold mb-8">Startup to Scale</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Early Stage</h3>
                <p className="text-muted-foreground mb-4">
                  Startup-friendly pricing and features. Quick setup, contractor payments, and equity 
                  tracking from day one.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Free for first 5 employees</li>
                  <li>• Stock option tracking</li>
                  <li>• Contractor payments</li>
                  <li>• Basic reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Growth Stage</h3>
                <p className="text-muted-foreground mb-4">
                  Scale your team with advanced features. Multi-state payroll, benefits administration, 
                  and global hiring.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Unlimited employees</li>
                  <li>• Benefits integration</li>
                  <li>• Global payroll</li>
                  <li>• Advanced analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade features for established tech companies. Custom integrations, 
                  dedicated support, and SLA guarantees.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Custom integrations</li>
                  <li>• Dedicated CSM</li>
                  <li>• 99.99% uptime SLA</li>
                  <li>• White-glove support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Payroll That Scales With You
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From startup to unicorn, we grow with your team
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

export default Technology;
