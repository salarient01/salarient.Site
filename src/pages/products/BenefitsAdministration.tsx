import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, PiggyBank, Umbrella, Calendar, Users } from "lucide-react";

const BenefitsAdministration = () => {
  return (
  <div className="min-h-screen flex flex-col bg-rose-900 text-white">
      <Navbar />
      
  <section className="py-20 bg-rose-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Benefits Administration Simplified
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Manage health insurance, retirement plans, and employee benefits with automated 
              enrollment, deductions, and carrier integrations—all in one platform.
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
                End-to-End Benefits Management
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From open enrollment to ongoing administration, our platform streamlines the entire 
                benefits lifecycle. Employees get the coverage they need, HR saves time, and 
                everything syncs seamlessly with payroll.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Health, dental, vision, and life insurance management</span>
                </li>
                <li className="flex items-start">
                  <PiggyBank className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>401(k) and retirement plan administration</span>
                </li>
                <li className="flex items-start">
                  <Umbrella className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>FSA, HSA, and commuter benefits tracking</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>COBRA administration and carrier EDI connections</span>
                </li>
              </ul>
            </div>
              <div className="rounded-2xl p-8 bg-background text-foreground">
              <h3 className="text-2xl font-bold mb-6">Benefits Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <div className="text-white/80">Reduction in enrollment errors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">20 hrs</div>
                  <div className="text-white/80">Saved per open enrollment period</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-white/80">Employee satisfaction with benefits portal</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Benefits Platform
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Health Insurance",
                  description: "Manage medical, dental, and vision plans with automated carrier feeds, eligibility tracking, and dependent verification. Support for multiple plan options and contribution strategies.",
                },
                {
                  icon: PiggyBank,
                  title: "Retirement Plans",
                  description: "Administer 401(k), 403(b), and other retirement plans with automatic deferral calculations, employer match processing, and loan management. Direct integration with major providers.",
                },
                {
                  icon: Shield,
                  title: "Life & Disability",
                  description: "Manage basic and supplemental life insurance, AD&D, short-term disability, and long-term disability coverage. Automated beneficiary management and enrollment workflows.",
                },
                {
                  icon: Umbrella,
                  title: "Flexible Spending",
                  description: "Administer FSA, HSA, HRA, and dependent care accounts with automated deductions, contribution limits, and compliance tracking. Support for mid-year changes and qualifying events.",
                },
                {
                  icon: Calendar,
                  title: "Open Enrollment",
                  description: "Streamline annual enrollment with decision support tools, plan comparison features, and automated reminders. Track participation rates and generate ACA compliance reports.",
                },
                {
                  icon: Users,
                  title: "COBRA Management",
                  description: "Automate COBRA administration including qualifying event notices, premium calculations, and payment tracking. Ensure compliance with federal and state continuation coverage requirements.",
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

          <div className="rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8">Carrier Integrations</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Automated EDI Connections</h3>
                <p className="text-muted-foreground mb-4">
                  Connect directly with insurance carriers through electronic data interchange (EDI). 
                  Automatic enrollment file generation, eligibility updates, and premium reconciliation 
                  eliminate manual data entry and reduce errors.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time eligibility updates</li>
                  <li>• Automated enrollment files (834 EDI)</li>
                  <li>• Premium billing reconciliation</li>
                  <li>• Carrier portal single sign-on</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Supported Carriers</h3>
                <p className="text-muted-foreground mb-4">
                  We integrate with hundreds of insurance carriers and retirement plan providers. 
                  Pre-built connections with major carriers, plus custom integration support for 
                  regional and specialty providers.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Major medical carriers (UnitedHealthcare, Anthem, Cigna, Aetna)</li>
                  <li>• 401(k) providers (Fidelity, Vanguard, Schwab, Principal)</li>
                  <li>• Dental/Vision carriers (Delta, VSP, MetLife)</li>
                  <li>• Supplemental benefit providers</li>
                </ul>
              </div>
            </div>
            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">ACA Compliance</h3>
              <p className="text-muted-foreground">
                Stay compliant with Affordable Care Act requirements including measurement periods, 
                affordability testing, and 1095-C form generation. Automatic tracking of hours for 
                variable hour employees and new hire waiting periods.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Employee Benefits Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Decision Support Tools</h3>
                  <p className="text-muted-foreground mb-6">
                    Help employees make informed decisions with plan comparison tools, cost calculators, 
                    and personalized recommendations based on their family situation and healthcare needs.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Side-by-side plan comparison</li>
                    <li>• Out-of-pocket cost estimators</li>
                    <li>• Provider network search</li>
                    <li>• Benefits value calculator</li>
                    <li>• Mobile-friendly enrollment</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Ongoing Management</h3>
                  <p className="text-muted-foreground mb-6">
                    Employees can view coverage details, manage beneficiaries, and handle qualifying 
                    life events all from their self-service portal. 24/7 access to benefits information 
                    and documentation.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Current coverage overview</li>
                    <li>• Beneficiary management</li>
                    <li>• Qualifying event changes</li>
                    <li>• Benefits statements and summaries</li>
                    <li>• Direct carrier portal access</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20 bg-rose-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simplify Benefits for Everyone
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Better benefits experience for employees, less work for HR
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BenefitsAdministration;
