import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Clock, CheckCircle2, TrendingUp, Bot, Sparkles } from "lucide-react";

const Automation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grape-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent Payroll Automation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Eliminate manual work with AI-powered automation that handles calculations, tax filings, 
              and compliance—reducing payroll processing time by 95%.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              See Automation in Action
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Hours to Minutes
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our automation engine eliminates 95% of manual payroll tasks. What used to take days 
                now happens in minutes, with greater accuracy and complete audit trails.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Instant Calculations", desc: "Wages, taxes, and deductions calculated automatically" },
                  { icon: Clock, title: "Scheduled Processing", desc: "Set it and forget it with automated payroll runs" },
                  { icon: CheckCircle2, title: "Error Prevention", desc: "AI catches mistakes before they become problems" },
                  { icon: Bot, title: "Smart Workflows", desc: "Intelligent routing and approval automation" },
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
              <h3 className="text-2xl font-bold mb-6">Time Savings</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-white/80">Reduction in manual tasks</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">3 min</div>
                  <div className="text-white/80">Average payroll run time</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">40 hrs</div>
                  <div className="text-white/80">Saved per month per company</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Gets Automated
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Wage Calculations",
                  description: "Automatic calculation of regular pay, overtime, double time, bonuses, commissions, and tips. Multi-state wage rules, shift differentials, and complex pay structures handled instantly.",
                },
                {
                  icon: TrendingUp,
                  title: "Tax Withholding",
                  description: "Real-time tax calculations for federal, state, and local jurisdictions. Automatic updates when tax laws change. W-4 processing and tax credit optimization built-in.",
                },
                {
                  icon: CheckCircle2,
                  title: "Deduction Processing",
                  description: "Automated pre-tax and post-tax deductions including benefits, garnishments, and retirement contributions. Priority ordering, limits, and catch-up contributions all handled automatically.",
                },
                {
                  icon: Clock,
                  title: "Time Integration",
                  description: "Seamless import of hours from time clocks, scheduling systems, or timesheets. Automatic overtime calculations, meal break deductions, and PTO accruals based on hours worked.",
                },
                {
                  icon: Bot,
                  title: "Direct Deposits",
                  description: "Automatic ACH file generation and bank submission. Split deposits, percentage-based allocations, and multiple accounts per employee. Same-day or next-day funding options.",
                },
                {
                  icon: Sparkles,
                  title: "Tax Filing",
                  description: "Automatic preparation and filing of 941, 940, state withholding, unemployment, and local tax forms. Year-end W-2 and 1099 processing with electronic filing to SSA and IRS.",
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
            <h2 className="text-3xl font-bold mb-8">Automated Workflows</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">New Hire Automation</h3>
                <p className="text-muted-foreground mb-4">
                  When you add a new employee, our system automatically triggers a complete onboarding 
                  workflow. Tax forms are sent for e-signature, benefits enrollment opens, time clock 
                  access is created, and the employee is added to the next payroll—all without manual 
                  intervention.
                </p>
                <div className="grid md:grid-cols-4 gap-4 mt-4">
                  {["Send Tax Forms", "Enroll Benefits", "Create Time Clock", "Add to Payroll"].map((step, i) => (
                    <div key={i} className="bg-background rounded-lg p-4 text-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        {i + 1}
                      </div>
                      <div className="text-sm font-medium">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Approval Workflows</h3>
                <p className="text-muted-foreground mb-4">
                  Smart routing sends time-off requests, expense reports, and payroll changes to the 
                  right approvers based on your org structure and approval rules. Automatic escalation 
                  if requests aren't approved within defined timeframes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Compliance Automation</h3>
                <p className="text-muted-foreground">
                  New hire reporting, unemployment claims, garnishment orders, and verification of 
                  employment requests are handled automatically. The system monitors deadlines and 
                  ensures timely compliance with federal and state requirements.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              AI-Powered Intelligence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <Sparkles className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Smart Error Detection</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI engine analyzes every payroll run and flags potential issues before processing. 
                    Unusual overtime, missing time entries, benefit deduction errors, and tax calculation 
                    anomalies are caught and corrected automatically.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Overtime threshold alerts</li>
                    <li>• Missing punch detection</li>
                    <li>• Duplicate payment prevention</li>
                    <li>• Benefit deduction validation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Machine learning models predict cash flow needs, identify turnover risks, and 
                    forecast labor costs. Get early warnings about budget overruns and optimization 
                    recommendations based on your historical data.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Labor cost forecasting</li>
                    <li>• Turnover risk scoring</li>
                    <li>• Budget variance alerts</li>
                    <li>• Seasonal trend analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20 bg-grape-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Payroll?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stop wasting time on manual tasks—let automation handle it
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

export default Automation;
