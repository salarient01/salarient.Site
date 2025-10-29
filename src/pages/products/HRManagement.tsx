import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, Award, TrendingUp, Bell, Shield } from "lucide-react";

const HRManagement = () => {
  return (
  <div className="min-h-screen flex flex-col bg-rose-900 text-white">
      <Navbar />
      
  <section className="py-20 bg-rose-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete HR Management Platform
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Streamline your entire HR workflow from onboarding to offboarding. Centralize employee 
              data, automate processes, and empower your workforce with self-service tools.
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
                All Your HR Tools in One Place
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From hire to retire, manage every aspect of the employee lifecycle with our comprehensive 
                HR platform. Digital onboarding, document management, performance reviews, and employee 
                self-service—all integrated seamlessly with payroll.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Employee Database", desc: "Centralized hub for all employee information" },
                  { title: "Digital Onboarding", desc: "Paperless new hire workflows with e-signatures" },
                  { title: "Document Management", desc: "Secure storage and organization of HR files" },
                  { title: "Self-Service Portal", desc: "Empower employees with 24/7 access" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "75%", label: "Faster Onboarding" },
                { value: "60%", label: "Less Admin Time" },
                { value: "90%", label: "Employee Satisfaction" },
                { value: "100%", label: "Paperless HR" },
              ].map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              HR Features That Scale
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Employee Management",
                  description: "Maintain comprehensive employee records with custom fields, org charts, and relationship tracking. Track job history, salary changes, and promotions with complete audit trails.",
                },
                {
                  icon: FileText,
                  title: "Document Management",
                  description: "Store and organize all HR documents securely in the cloud. E-signature support, automatic reminders for document renewals, and customizable folder structures for easy retrieval.",
                },
                {
                  icon: Award,
                  title: "Performance Management",
                  description: "Create and track goals, conduct performance reviews, and manage feedback cycles. 360-degree reviews, continuous feedback, and performance improvement plans all in one system.",
                },
                {
                  icon: TrendingUp,
                  title: "Succession Planning",
                  description: "Identify high-potential employees, create development plans, and ensure business continuity. Skills matrix, replacement charts, and talent pool management for strategic workforce planning.",
                },
                {
                  icon: Bell,
                  title: "Automated Workflows",
                  description: "Streamline HR processes with automated workflows for onboarding, offboarding, and employee changes. Set up approval chains, send automatic notifications, and eliminate manual tasks.",
                },
                {
                  icon: Shield,
                  title: "Compliance & Security",
                  description: "Stay compliant with GDPR, CCPA, and employment laws. Role-based access controls, audit logs, and data encryption ensure your employee information stays secure and private.",
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
            <h2 className="text-3xl font-bold mb-8">Employee Self-Service Portal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">For Employees</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• View and download pay stubs and W-2s</li>
                  <li>• Update personal information and emergency contacts</li>
                  <li>• Request time off and view leave balances</li>
                  <li>• Enroll in benefits and make changes during open enrollment</li>
                  <li>• Access company policies and employee handbook</li>
                  <li>• Submit expense reports and reimbursement requests</li>
                  <li>• View org chart and company directory</li>
                  <li>• Participate in performance reviews and goal setting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">For Managers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Approve time-off requests and timesheets</li>
                  <li>• View team schedules and availability</li>
                  <li>• Conduct performance reviews and provide feedback</li>
                  <li>• Access labor cost reports and budget tracking</li>
                  <li>• Initiate employee changes and promotions</li>
                  <li>• View team analytics and turnover metrics</li>
                  <li>• Manage requisitions and hiring workflows</li>
                  <li>• Generate custom reports for their department</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Onboarding & Offboarding Made Easy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Onboarding Workflow</h3>
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Pre-Hire", desc: "Send offer letters and gather new hire paperwork before day one" },
                      { step: "2", title: "Day 1", desc: "Complete I-9 verification, tax forms, and benefits enrollment" },
                      { step: "3", title: "First Week", desc: "Assign training modules, set up equipment, and introduce team" },
                      { step: "4", title: "30/60/90 Days", desc: "Schedule check-ins, review goals, and collect feedback" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start">
                        <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Offboarding Workflow</h3>
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Notice Period", desc: "Trigger automated workflow, assign tasks to stakeholders" },
                      { step: "2", title: "Knowledge Transfer", desc: "Document handoff procedures and reassign responsibilities" },
                      { step: "3", title: "Final Day", desc: "Collect company property, disable access, conduct exit interview" },
                      { step: "4", title: "Post-Exit", desc: "Process final paycheck, COBRA notifications, and alumni network" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start">
                        <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20 bg-rose-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Modernize Your HR Operations
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Empower your team with the tools they need
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

export default HRManagement;
