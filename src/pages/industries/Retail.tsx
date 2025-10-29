import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Users, Clock, TrendingUp } from "lucide-react";

const Retail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sea-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Payroll Solutions for Retail
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Manage hourly employees, seasonal workers, and complex scheduling across multiple 
              locations. Payroll built for the unique challenges of retail businesses.
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
                Built for Retail Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From single stores to national chains, our payroll solution handles the complexities 
                of retail workforce management including hourly employees, tips, commissions, and 
                fluctuating schedules.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShoppingBag className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Multi-location payroll with centralized management</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Seasonal hiring workflows and onboarding automation</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Time clock integration and schedule management</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Sales commission tracking and tip reporting</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl p-8 bg-background text-foreground">
              <h3 className="text-2xl font-bold mb-6">Retail Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">50%</div>
                  <div className="text-white/80">Faster seasonal onboarding</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">30 hrs</div>
                  <div className="text-white/80">Saved per month managing schedules</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Accurate tip allocation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Features for Retail
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Tip & Commission Management",
                  description: "Track and process tips (pooled or individual), sales commissions, and bonuses. Automatic allocation, tax withholding, and reporting for tip credit compliance. Support for both reported and allocated tips with IRS Form 8027 preparation.",
                },
                {
                  title: "Multi-Location Management",
                  description: "Run payroll across unlimited stores with location-specific tax rates, labor rules, and reporting. Transfer employees between locations, track labor costs by store, and compare performance metrics across your entire retail network.",
                },
                {
                  title: "Seasonal Workforce",
                  description: "Quickly hire and onboard seasonal employees with bulk import tools and automated workflows. Manage varying schedules, track temporary worker hours, and handle end-of-season offboarding efficiently. ACA tracking for seasonal employees included.",
                },
                {
                  title: "Schedule Integration",
                  description: "Connect scheduling software to automatically import shifts and hours worked. Employees clock in/out from POS systems or mobile apps, and data flows directly to payroll. Labor law compliance with automatic break tracking and overtime alerts.",
                },
                {
                  title: "Labor Cost Control",
                  description: "Monitor labor costs as a percentage of sales in real-time. Set budgets by location and get alerts when approaching limits. Optimize scheduling based on historical sales patterns and forecasted demand to maintain profitability.",
                },
                {
                  title: "PTO & Sick Leave",
                  description: "Automate PTO accrual based on hours worked or tenure. Comply with state and local sick leave laws with automatic tracking and employee self-service requests. Blackout dates for holiday seasons and approval workflows.",
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
            <h2 className="text-3xl font-bold mb-8 text-center">Trusted by Leading Retailers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">Retail businesses served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">150K</div>
                <div className="text-muted-foreground">Retail employees paid monthly</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Customer satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Retail Payroll?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of retail businesses that trust us
          </p>
          <Button size="lg" variant="secondary">
            Schedule Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retail;
