import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ServicesSnippet from "@/components/ServicesSnippet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, AlertCircle, CheckCircle2, Scale, Lock } from "lucide-react";

const Compliance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grape-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Built-In Compliance & Tax Management
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Stay compliant with federal, state, and local regulations automatically. Our system 
              handles tax calculations, filings, and compliance updates so you don't have to worry.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              Explore Compliance Features
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Compliance Peace of Mind
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Employment law is complex and constantly changing. Our platform is updated in real-time 
                with the latest tax rates, regulations, and compliance requirements across all 50 states 
                and thousands of local jurisdictions.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "Tax Compliance", desc: "Automatic calculations and filings for all tax jurisdictions" },
                  { icon: FileCheck, title: "Labor Law Updates", desc: "Real-time updates when regulations change" },
                  { icon: Scale, title: "Multi-State Support", desc: "Compliant payroll across all 50 states" },
                  { icon: Lock, title: "Audit Protection", desc: "Complete audit trails and penalty-free guarantee" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <item.icon className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 bg-background text-foreground">
              <h3 className="text-2xl font-bold mb-6">Compliance Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">50</div>
                  <div className="text-white/80">States supported with local compliance</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">10K+</div>
                  <div className="text-white/80">Tax jurisdictions covered</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Accuracy guarantee with penalty protection</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Compliance Coverage
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileCheck,
                  title: "Tax Filing",
                  description: "Automatic preparation and filing of federal 941, 940, state withholding, unemployment, and local taxes. Quarterly and annual filings handled on time, every time, with electronic submission.",
                },
                {
                  icon: Shield,
                  title: "FLSA Compliance",
                  description: "Fair Labor Standards Act compliance including overtime rules, minimum wage tracking, exempt vs non-exempt classification, and recordkeeping requirements. Automatic alerts for violations.",
                },
                {
                  icon: AlertCircle,
                  title: "ACA Reporting",
                  description: "Affordable Care Act compliance with measurement period tracking, affordability testing, and automatic 1095-C generation. Full-time equivalent calculations and offer of coverage reporting.",
                },
                {
                  icon: CheckCircle2,
                  title: "New Hire Reporting",
                  description: "Automatic submission of new hire reports to state agencies within required timeframes. W-4 and state withholding certificate processing with verification of form completeness.",
                },
                {
                  icon: Scale,
                  title: "Garnishment Processing",
                  description: "Compliant processing of wage garnishments, child support orders, tax levies, and student loan withholdings. Priority ordering, calculation of disposable income, and creditor payment tracking.",
                },
                {
                  icon: Lock,
                  title: "Data Security",
                  description: "SOC 2 Type II certified data centers with encryption at rest and in transit. Role-based access controls, audit logging, and compliance with GDPR, CCPA, and privacy regulations.",
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

          <div className="rounded-2xl p-8 md:p-12 mb-20 bg-background text-foreground">
            <h2 className="text-3xl font-bold mb-8">Multi-State Compliance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Complex State Requirements</h3>
                <p className="text-muted-foreground mb-4">
                  Every state has unique payroll tax requirements, wage laws, and filing deadlines. 
                  Our system automatically applies the correct rules based on where your employees work, 
                  handling reciprocal agreements, credit allowances, and nexus determination.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• State income tax withholding</li>
                  <li>• State unemployment insurance (SUI)</li>
                  <li>• State disability insurance (SDI, TDI, etc.)</li>
                  <li>• Local wage taxes (cities, counties, school districts)</li>
                  <li>• Paid family leave (CA, NY, NJ, etc.)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Work Location vs. Residence</h3>
                <p className="text-muted-foreground mb-4">
                  For remote workers and employees working across state lines, we handle the complexity 
                  of determining which state's laws apply. Support for convenience rules, reciprocal 
                  agreements, and multi-state allocation.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Remote worker tax compliance</li>
                  <li>• Multi-state income allocation</li>
                  <li>• Reciprocal state agreements</li>
                  <li>• Non-resident withholding</li>
                  <li>• Work from home policies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Year-End Tax Forms</h3>
                <p className="text-muted-foreground mb-6">
                  We handle all year-end tax form preparation and filing, including W-2s for employees 
                  and 1099s for contractors. Forms are automatically generated, printed, and mailed to 
                  employees, with electronic filing to SSA and IRS included.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• W-2 preparation and filing</li>
                  <li>• 1099-NEC and 1099-MISC for contractors</li>
                  <li>• Electronic filing to SSA (W-2s) and IRS (1099s)</li>
                  <li>• Employee copies mailed or available electronically</li>
                  <li>• State and local wage reporting</li>
                  <li>• Reconciliation reports and correction process</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Audit Support & Protection</h3>
                <p className="text-muted-foreground mb-6">
                  In the unlikely event of an audit, we provide full support with documentation, 
                  representation, and penalty protection. Our accuracy guarantee means we cover 
                  penalties and interest if an error is our fault.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Complete audit trail of all transactions</li>
                  <li>• Tax notice review and response assistance</li>
                  <li>• Representation during agency audits</li>
                  <li>• Penalty and interest protection guarantee</li>
                  <li>• Historical data access and reporting</li>
                  <li>• Amended return filing if corrections needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Compliance Guarantee</h2>
              <p className="text-xl text-white/90 mb-6">
                We're so confident in our compliance capabilities that we offer a 100% accuracy guarantee. 
                If we make an error that results in penalties or interest, we pay them—not you.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <CheckCircle2 className="h-10 w-10 mb-3" />
                  <h3 className="font-bold mb-2">Tax Accuracy</h3>
                  <p className="text-white/80 text-sm">We cover tax calculation errors and filing penalties</p>
                </div>
                <div>
                  <CheckCircle2 className="h-10 w-10 mb-3" />
                  <h3 className="font-bold mb-2">Penalty Protection</h3>
                  <p className="text-white/80 text-sm">We pay IRS/state penalties caused by our mistakes</p>
                </div>
                <div>
                  <CheckCircle2 className="h-10 w-10 mb-3" />
                  <h3 className="font-bold mb-2">Filing Guarantee</h3>
                  <p className="text-white/80 text-sm">On-time filing of all required returns and forms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <ServicesSnippet />

  <section className="py-20 bg-grape-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Worrying About Compliance
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts and automated systems handle the complexity
          </p>
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;
