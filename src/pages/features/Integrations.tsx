import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ServicesSnippet from "@/components/ServicesSnippet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link2, Zap, Code, Cloud, Database, Workflow } from "lucide-react";

const Integrations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grape-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Seamless Integrations
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Connect your payroll system with accounting software, time clocks, HR tools, and 
              hundreds of other business applications. One unified ecosystem.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              Browse Integrations
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Systems, Connected
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stop manually entering data across multiple systems. Our integration marketplace 
                includes 500+ pre-built connections plus a robust API for custom integrations.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Link2, title: "Pre-Built Integrations", desc: "500+ ready-to-use connections with popular apps" },
                  { icon: Zap, title: "Real-Time Sync", desc: "Data flows automatically between systems" },
                  { icon: Code, title: "Open API", desc: "Build custom integrations with full documentation" },
                  { icon: Cloud, title: "Cloud-Native", desc: "No servers or VPNs required" },
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
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Available Integrations" },
                { value: "Real-time", label: "Data Synchronization" },
                { value: "99.9%", label: "Integration Uptime" },
                { value: "24/7", label: "API Support" },
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
              Popular Integration Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Accounting Software",
                  description: "Sync payroll data directly to QuickBooks, Xero, Sage, NetSuite, or any accounting platform. Automatic journal entries, GL mapping, and reconciliation. Two-way sync ensures consistency.",
                },
                {
                  icon: Workflow,
                  title: "Time & Attendance",
                  description: "Connect time clocks, scheduling systems, and time tracking apps. Automatic import of hours worked, overtime calculations, and PTO accruals. Support for biometric devices and mobile apps.",
                },
                {
                  icon: Cloud,
                  title: "HRIS & Benefits",
                  description: "Integrate with HR systems, benefits platforms, and ATS solutions. Employee data flows seamlessly, reducing manual entry and ensuring data accuracy across all systems.",
                },
                {
                  icon: Link2,
                  title: "Banking & Financial",
                  description: "Direct bank integrations for payroll funding, direct deposits, and tax payments. Real-time balance monitoring, automated clearing house (ACH) processing, and payment verification.",
                },
                {
                  icon: Code,
                  title: "Business Intelligence",
                  description: "Connect to Tableau, Power BI, Looker, or other BI tools. Real-time data feeds for custom dashboards, advanced analytics, and cross-system reporting capabilities.",
                },
                {
                  icon: Zap,
                  title: "Project Management",
                  description: "Sync with project management and professional services automation tools. Track labor costs by project, allocate time to clients, and generate profitability reports.",
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
            <h2 className="text-3xl font-bold mb-8">Featured Integrations</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "QuickBooks", category: "Accounting" },
                { name: "Xero", category: "Accounting" },
                { name: "ADP Workforce", category: "Time Tracking" },
                { name: "BambooHR", category: "HRIS" },
                { name: "Gusto", category: "Benefits" },
                { name: "Workday", category: "HRIS" },
                { name: "When I Work", category: "Scheduling" },
                { name: "Deputy", category: "Time Tracking" },
                { name: "Greenhouse", category: "Recruiting" },
                { name: "Lattice", category: "Performance" },
                { name: "Expensify", category: "Expense Management" },
                { name: "Bill.com", category: "AP/AR" },
              ].map((integration, index) => (
                <div key={index} className="bg-background rounded-lg p-4 border border-border">
                  <div className="font-semibold mb-1">{integration.name}</div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">View All 500+ Integrations</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">REST API</h3>
                <p className="text-muted-foreground mb-6">
                  Build custom integrations with our comprehensive REST API. Full documentation, code 
                  samples, and SDKs available for popular programming languages. Webhook support for 
                  real-time event notifications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-3" />
                    <span>Complete API documentation</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-3" />
                    <span>SDKs for Python, Node.js, Ruby, PHP</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-3" />
                    <span>Postman collection and sandbox</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-3" />
                    <span>Webhook notifications for events</span>
                  </div>
                </div>
                <Button className="mt-6" variant="outline">View API Docs</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Zapier & Make</h3>
                <p className="text-muted-foreground mb-6">
                  No code? No problem. Connect SALARIENT HR solutions to thousands of apps using Zapier or Make 
                  (formerly Integromat). Create automated workflows without writing a single line of code.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-3" />
                    <span>3,000+ apps via Zapier</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-3" />
                    <span>Pre-built workflow templates</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-3" />
                    <span>Multi-step automation sequences</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-3" />
                    <span>Conditional logic and filtering</span>
                  </div>
                </div>
                <Button className="mt-6" variant="outline">Explore Workflows</Button>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Integration Support</h2>
              <p className="text-xl text-white/90 mb-8">
                Our integration specialists help you connect your systems quickly and correctly
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Implementation Help</h3>
                  <p className="text-white/80 text-sm">Guided setup and configuration of pre-built integrations</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Custom Development</h3>
                  <p className="text-white/80 text-sm">Build unique integrations with our API team's support</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Ongoing Maintenance</h3>
                  <p className="text-white/80 text-sm">We monitor integrations and handle updates automatically</p>
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
            Connect Your Business Systems
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with pre-built integrations or build your own
          </p>
          <Button size="lg" variant="secondary">
            Explore Integrations
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;
