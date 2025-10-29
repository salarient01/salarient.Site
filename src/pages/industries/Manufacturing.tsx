import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Wrench, Clock, DollarSign } from "lucide-react";

const Manufacturing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sea-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Manufacturing Payroll Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Handle production shifts, job costing, and union requirements with payroll built for 
              manufacturing operations. Track labor costs accurately and optimize productivity.
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
                Built for Production Environments
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Manufacturing operations require precise labor tracking, job costing, and compliance 
                with complex union agreements. Our solution handles it all while integrating with your 
                ERP and production systems.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Factory className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Multi-shift scheduling with automatic differential calculations</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Job costing and labor allocation by production order</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Time clock integration with badge readers and biometrics</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Piece rate and production bonus calculations</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl p-8 bg-background text-foreground">
              <h3 className="text-2xl font-bold mb-6">Manufacturing Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">800+</div>
                  <div className="text-white/80">Manufacturing facilities served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">25%</div>
                  <div className="text-white/80">Improvement in labor cost accuracy</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Union contract compliance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Manufacturing-Specific Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Job Costing & Labor Allocation",
                  description: "Track labor hours and costs by job, project, production order, or work center. Allocate employee time to multiple jobs or operations with detailed reporting for profitability analysis. Real-time visibility into labor costs versus estimates.",
                },
                {
                  title: "Shift Premium Management",
                  description: "Automatically calculate and apply shift differentials for second shift, third shift, weekend, and holiday work. Support for multiple differential rates based on time of day, day of week, or specific facility. Union contract compliance built-in.",
                },
                {
                  title: "Piece Rate & Incentive Pay",
                  description: "Calculate piece rate compensation based on units produced or tasks completed. Production bonuses, efficiency bonuses, and quality incentives automatically calculated. Guarantee minimum wage compliance with automatic makeup calculations.",
                },
                {
                  title: "Union & Prevailing Wage",
                  description: "Support for multiple union contracts with varying pay rates, benefits, and work rules. Certified payroll for prevailing wage jobs with WH-347 form generation. Davis-Bacon compliance for government contracts with fringe benefit tracking.",
                },
                {
                  title: "ERP Integration",
                  description: "Seamlessly integrate with SAP, Oracle, Microsoft Dynamics, and other ERP systems. Bidirectional sync of employee data, time entries, and labor costs. Real-time cost accounting with general ledger integration.",
                },
                {
                  title: "Safety & Training Tracking",
                  description: "Monitor safety certifications, OSHA training requirements, and equipment operation credentials. Automated alerts for expiring certifications. Compliance reporting for workplace safety programs and training records.",
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
            <h2 className="text-3xl font-bold mb-8">Industry-Specific Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Complex Pay Structures</h3>
                <p className="text-muted-foreground mb-4">
                  Handle multiple pay rates for different operations, piece rates, production bonuses, 
                  and quality incentives. Automatic calculation ensures accuracy and compliance with 
                  minimum wage requirements even in piece rate scenarios.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multiple pay rates per employee</li>
                  <li>• Piece rate with wage makeup</li>
                  <li>• Production and quality bonuses</li>
                  <li>• Skilled vs. unskilled wage differentials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Labor Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Gain insights into labor efficiency, overtime trends, and cost variance. Compare 
                  actual labor costs to estimates, analyze productivity by shift or operation, and 
                  identify opportunities for cost optimization.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Labor efficiency reporting</li>
                  <li>• Overtime trend analysis</li>
                  <li>• Actual vs. standard cost variance</li>
                  <li>• Production per labor hour metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Optimize Manufacturing Labor Costs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Accurate job costing and efficient payroll processing
          </p>
          <Button size="lg" variant="secondary">
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;
