import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
              {/* Basic Plan section - elevated copy */}
              <div className="mt-0 max-w-4xl mx-auto bg-[#0b0b10] p-8 rounded-2xl border border-white/6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-extrabold">Basic Plan — ₹3,000 / month</h3>
                  <div className="text-sm text-muted-foreground mt-2">Up to 30 employees</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Employee Communication</h4>
                    <p className="text-sm text-muted-foreground">Mass communication via email and SMS, social feed-style employee messaging, group targeting, automated reminders and alerts, and configurable notifications to keep your workforce informed and engaged.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Payroll</h4>
                    <p className="text-sm text-muted-foreground">Flexible salary configurations, multiple pay structures, payroll inputs and processing, payslip generation and secure distribution (PDF/email), comprehensive payroll reporting, and bank transfer letters.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Statutory Compliance</h4>
                    <p className="text-sm text-muted-foreground">Built-in statutory calculations (PF with ECR, ESI, Professional Tax per state rules), labour welfare fund handling, robust TDS computations, and digitally signed Form 16 / Form 24Q support for simplified statutory filing.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Leave & Attendance</h4>
                    <p className="text-sm text-muted-foreground">Multiple leave types and policies, location-based holiday calendars, flexible shift support, mobile and online attendance, manager rostering, and configurable rules for late/early/absent handling including flex-hours support.</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">Helpdesk & Support</h4>
                  <p className="text-sm text-muted-foreground">Ticket categories, SLA-driven ticketing, queue management, and resolution workflows backed by our support team to ensure timely response and operational continuity.</p>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/company/contact">
                    <Button className="bg-gradient-to-br from-amber-400 to-yellow-400 text-slate-900 px-5 py-2 font-semibold">Get Basic Plan</Button>
                  </Link>
                </div>
              </div>

              

              {/* Premium Plan section */}
              <div className="mt-8 max-w-4xl mx-auto bg-[#06060a] p-8 rounded-2xl border border-white/6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-extrabold">Premium Plan — ₹6,000 / month</h3>
                  <div className="text-sm text-muted-foreground mt-2">Up to 30 employees</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Employee Information Management</h4>
                    <p className="text-sm text-muted-foreground">A comprehensive employee system of record with 100+ data points, reporting hierarchy and org charts, employee directory, HR & CXO dashboards, and asset tracking.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Employee Communication</h4>
                    <p className="text-sm text-muted-foreground">Mass communication via email/SMS, social feedboard messaging, group-wise targeting, reminders, and configurable notifications to keep teams aligned.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Company Policies</h4>
                    <p className="text-sm text-muted-foreground">Publish company policies, employee handbook, common forms and templates with group-level targeting for controlled distribution.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Payroll</h4>
                    <p className="text-sm text-muted-foreground">Configurable salary structures, multiple payroll inputs, payslip generation/distribution (PDF/email), comprehensive reporting, and bank transfer letters.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Statutory Compliance</h4>
                    <p className="text-sm text-muted-foreground">PF (with ECR), ESI, Professional Tax (state rules), labour welfare fund handling, TDS computations, digitally signed Form 16 and Form 24Q generation, and bonus reporting.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Leave & Attendance</h4>
                    <p className="text-sm text-muted-foreground">Real-time biometric/device integrations, multi-shift support, manager rostering, flexible work rules, selfie attendance, and configurable penalties for exceptions.</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">Exit Management</h4>
                  <p className="text-sm text-muted-foreground">Online resignation workflows with multi-department clearance, configurable exit approvals, exit dashboards, and integration with full-final settlement processes.</p>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/company/contact">
                    <Button className="bg-gradient-to-br from-amber-400 to-yellow-400 text-slate-900 px-5 py-2 font-semibold">Get Premium Plan</Button>
                  </Link>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">Employee onboarding</h4>
                  <p className="text-sm text-muted-foreground mb-3">Onboarding of employees, workflows for admin review, alerts and reminders for employees and admins, and electronic acceptance of company policy.</p>

                  <h4 className="text-lg font-semibold mt-4 mb-2">Help desk</h4>
                  <p className="text-sm text-muted-foreground mb-3">Define ticket categories, create & resolve tickets, SLA-driven queues and escalation, and reporting to ensure timely response and operational continuity.</p>

                  <h4 className="text-lg font-semibold mt-4 mb-2">Employee travel expense management</h4>
                  <p className="text-sm text-muted-foreground mb-3">Set eligibility grade-wise, request advances, single-click upload of receipts, streamline approvals and reimbursements.</p>

                  <h4 className="text-lg font-semibold mt-4 mb-2">Applicant tracking system</h4>
                  <p className="text-sm text-muted-foreground mb-3">Requisition management, resume bank, interview scheduling, interviewer review tracking, and offer letter generation.</p>

                  <h4 className="text-lg font-semibold mt-4 mb-2">Performance management</h4>
                  <p className="text-sm text-muted-foreground">Objectives & goal management, competencies management, appraisal workflows, and 360-degree reviews.</p>
                </div>
              </div>

              {/* Popular Plan section */}
              <div className="mt-8 max-w-4xl mx-auto bg-[#0b0710] p-8 rounded-2xl border border-white/6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-extrabold">Popular Plan — ₹4,500 / month</h3>
                  <div className="text-sm text-muted-foreground mt-2">Up to 30 employees</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Employee Information Management</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive employee system of record with 100+ data points, reporting hierarchy and org charts, employee directory, HR & CXO dashboards, and asset tracking.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Employee Communication</h4>
                    <p className="text-sm text-muted-foreground">Mass communication via email/SMS, social feedboard messaging, group-wise targeting, reminders, and configurable notifications to keep teams aligned.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Company Policies</h4>
                    <p className="text-sm text-muted-foreground">Publish company policies, employee handbook, common forms and templates with targeted distribution by group.</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Payroll</h4>
                    <p className="text-sm text-muted-foreground">Configurable salary structures, multiple payroll inputs, payslip generation and distribution (PDF/email), comprehensive payroll reporting, and bank transfer letters.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Statutory Compliance</h4>
                    <p className="text-sm text-muted-foreground">PF with ECR, ESI, Professional Tax (state rules), labour welfare fund handling, robust TDS computations, digitally signed Form 16 and Form 24Q generation, and bonus reporting.</p>

                    <h4 className="text-lg font-semibold mt-4 mb-2">Leave Management</h4>
                    <p className="text-sm text-muted-foreground">Supports multiple leave types, location-wise holiday lists, optional restricted holidays, multiple leave policies per group, and customizable leave policies per leave type.</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/company/contact">
                    <Button className="bg-gradient-to-br from-amber-400 to-yellow-400 text-slate-900 px-5 py-2 font-semibold">Get Popular Plan</Button>
                  </Link>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">Attendance tracking</h4>
                  <p className="text-sm text-muted-foreground mb-3">Real-time integration with biometric or any attendance capturing device, support for multiple shifts, easy shift rostering by line managers for their teams, penalties for unauthorized absence / late-in / early-out / shortfall, flexi-hours support, and selfie attendance marking.</p>

                  <h4 className="text-lg font-semibold mt-4 mb-2">Exit management</h4>
                  <p className="text-sm text-muted-foreground mb-3">Online resignation application & approval, customizable multi-department clearance workflows, an exit dashboard for visibility, and integration with full-final settlement processes.</p>

                  <h4 className="text-lg font-semibold mt-4 mb-2">Employee onboarding</h4>
                  <p className="text-sm text-muted-foreground mb-3">Streamlined onboarding workflows, admin review steps, alerts and reminders for employees and admins, and electronic acceptance of company policies to ensure a fast, compliant new-hire experience.</p>

                  <h4 className="text-lg font-semibold mt-4 mb-2">Help desk</h4>
                  <p className="text-sm text-muted-foreground">Define ticket categories, create & resolve tickets, SLA-driven queues and escalation, and reporting to ensure timely response and operational continuity.</p>
                </div>
              </div>

              <div className="mt-12 max-w-4xl mx-auto text-center bg-background p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Custom Pricing</h3>
                <p className="text-muted-foreground mb-6">
                  We tailor pricing to your organization's size and requirements. For a personalized quote,
                  contact our sales team and we'll design a plan that fits your needs — whether you're a small
                  business or an enterprise.
                </p>
                <div className="flex justify-center">
                  <Link to="/company/contact">
                    <Button size="lg" className="bg-gradient-to-br from-amber-400 to-yellow-400 text-slate-900 px-6 py-3 font-semibold">Contact Sales</Button>
                  </Link>
                </div>
              </div>

          <div className="mt-20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is there a setup fee?",
                  a: "No, there are no setup fees. You only pay the monthly base rate plus per-employee charges.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time with no penalties or cancellation fees.",
                },
                {
                  q: "What's included in the per-employee cost?",
                  a: "The per-employee cost covers payroll processing, tax filing, direct deposit, and employee self-service access.",
                },
                {
                  q: "Do you offer discounts for annual payments?",
                  a: "Yes, we offer a 15% discount when you pay annually instead of monthly.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
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

export default Pricing;
