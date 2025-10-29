import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-egyptian-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how businesses like yours have transformed their payroll operations with SALARIENT HR solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "RetailChain Inc.",
                industry: "Retail",
                employees: 2500,
                icon: Building2,
                challenge: "Managing payroll across 150 retail locations with high employee turnover and complex scheduling.",
                solution: "Implemented automated payroll processing with integrated time tracking and multi-location management.",
                results: [
                  "75% reduction in payroll processing time",
                  "50% fewer payroll errors",
                  "$180K annual cost savings",
                ],
              },
              {
                company: "TechStartup Co.",
                industry: "Technology",
                employees: 350,
                icon: Users,
                challenge: "Scaling from 50 to 350 employees in 18 months while managing equity compensation and remote workers.",
                solution: "Leveraged automated onboarding, equity tracking, and global payroll capabilities for rapid growth.",
                results: [
                  "Onboarded 300 employees in 12 months",
                  "90% faster new hire processing",
                  "Zero compliance issues during scale",
                ],
              },
              {
                company: "HealthCare Systems",
                industry: "Healthcare",
                employees: 1800,
                icon: TrendingUp,
                challenge: "Complex shift differentials, union contracts, and HIPAA compliance requirements across 3 hospitals.",
                solution: "Deployed HIPAA-compliant payroll with automated shift premium calculations and union contract management.",
                results: [
                  "100% union contract compliance",
                  "40% reduction in payroll errors",
                  "$250K annual savings on labor costs",
                ],
              },
              {
                company: "Manufacturing Plus",
                industry: "Manufacturing",
                employees: 850,
                icon: Building2,
                challenge: "Accurate job costing, piece rate calculations, and prevailing wage compliance for government contracts.",
                solution: "Integrated payroll with ERP system for real-time job costing and automated prevailing wage tracking.",
                results: [
                  "25% improvement in cost accuracy",
                  "100% prevailing wage compliance",
                  "Real-time labor cost visibility",
                ],
              },
            ].map((study, index) => (
        <Card key={index} className="hover:shadow-hover transition-all">
          <CardContent className="p-8 bg-background text-foreground">
                  <div className="flex items-center mb-6">
                    <study.icon className="h-12 w-12 text-primary mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold">{study.company}</h3>
                      <div className="text-muted-foreground">{study.industry} • {study.employees} employees</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full mt-6" variant="outline">
                    Read Full Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Payroll?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses
          </p>
          <Button size="lg" variant="secondary">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
