import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ServicesSnippet from "@/components/ServicesSnippet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, FileText, Download, Eye } from "lucide-react";

const Reporting = () => {
  return (
    <div className="min-h-screen flex flex-col bg-grape-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reporting & Analytics That Drive Decisions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transform your payroll data into actionable insights. Real-time dashboards, custom 
              reports, and predictive analytics help you optimize labor costs and workforce planning.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              Explore Reports
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Data-Driven Workforce Management
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Access 100+ pre-built reports covering payroll, labor costs, tax liability, and workforce 
                analytics. Create custom reports with our drag-and-drop builder or schedule automated 
                delivery to stakeholders.
              </p>
              <div className="space-y-6">
                {[
                  { icon: BarChart3, title: "Real-Time Dashboards", desc: "Live visibility into labor costs and payroll metrics" },
                  { icon: TrendingUp, title: "Predictive Analytics", desc: "Forecast costs and identify trends before they impact budget" },
                  { icon: FileText, title: "Custom Reports", desc: "Build reports tailored to your business needs" },
                  { icon: Download, title: "Automated Distribution", desc: "Schedule reports to be emailed automatically" },
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
              <h3 className="text-2xl font-bold mb-6">Reporting Power</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">100+</div>
                  <div className="text-white/80">Pre-built report templates</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">Real-time</div>
                  <div className="text-white/80">Data updates as events happen</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">Unlimited</div>
                  <div className="text-white/80">Custom reports you can create</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comprehensive Reporting Suite
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Payroll Reports",
                  description: "Detailed payroll registers, summary reports, tax liability reports, and employee earnings statements. View by pay period, employee, department, or location with drill-down capabilities.",
                },
                {
                  icon: TrendingUp,
                  title: "Labor Cost Analytics",
                  description: "Track labor costs as a percentage of revenue, compare actual vs. budgeted costs, and identify cost drivers. Department-level profitability analysis and cost per unit metrics.",
                },
                {
                  icon: PieChart,
                  title: "Workforce Analytics",
                  description: "Headcount reports, turnover analysis, demographics, and tenure distribution. Track diversity metrics, compensation equity, and workforce composition trends over time.",
                },
                {
                  icon: FileText,
                  title: "Tax Reports",
                  description: "Federal, state, and local tax liability summaries. Quarterly tax reports, annual reconciliation, and tax deposit history. Prepare for tax filings with pre-submission validation.",
                },
                {
                  icon: Eye,
                  title: "Compliance Reports",
                  description: "ACA measurement period reports, FLSA overtime analysis, and break compliance tracking. EEO-1 reporting support, OSHA recordkeeping, and VETS-4212 reporting capabilities.",
                },
                {
                  icon: Download,
                  title: "General Ledger",
                  description: "GL summary and detail reports with customizable account mapping. Export to QuickBooks, Xero, or other accounting systems. Automated journal entry generation and posting.",
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
            <h2 className="text-3xl font-bold mb-8">Custom Report Builder</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Drag-and-Drop Interface</h3>
                <p className="text-muted-foreground mb-4">
                  Build custom reports without IT help using our intuitive report builder. Select data 
                  fields, apply filters, add calculations, and format output—all with simple drag-and-drop.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Choose from 200+ data fields</li>
                  <li>• Apply filters and date ranges</li>
                  <li>• Group and sort data</li>
                  <li>• Add calculated fields and formulas</li>
                  <li>• Format and style output</li>
                  <li>• Save templates for reuse</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
                <p className="text-muted-foreground mb-4">
                  Power users can leverage advanced report capabilities including SQL access, API 
                  integration, and custom dashboards built with BI tools like Tableau or Power BI.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SQL query builder for complex reports</li>
                  <li>• API access for data extraction</li>
                  <li>• Export to Excel, PDF, CSV</li>
                  <li>• Schedule automatic generation</li>
                  <li>• Email distribution lists</li>
                  <li>• Embed reports in other applications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Real-Time Dashboards</h3>
                <p className="text-muted-foreground mb-6">
                  Monitor key metrics with live dashboards that update as payroll and time data changes. 
                  Customize widgets, set up alerts, and drill down into details with a single click.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold mb-1">Executive Dashboard</div>
                    <div className="text-sm text-muted-foreground">High-level KPIs for leadership including headcount, labor costs, and budget variance</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold mb-1">Payroll Dashboard</div>
                    <div className="text-sm text-muted-foreground">Upcoming payrolls, tax liabilities, and processing status</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-semibold mb-1">Manager Dashboard</div>
                    <div className="text-sm text-muted-foreground">Team labor costs, overtime trends, and approval queues</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Benchmarking & Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  Compare your metrics against industry benchmarks and historical trends. Identify 
                  outliers, track progress toward goals, and make data-driven decisions.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="font-semibold mb-1">Industry Comparison</div>
                    <div className="text-sm text-muted-foreground">See how your costs and ratios compare to industry averages</div>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="font-semibold mb-1">Trend Analysis</div>
                    <div className="text-sm text-muted-foreground">View historical trends and seasonal patterns in your data</div>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="font-semibold mb-1">What-If Scenarios</div>
                    <div className="text-sm text-muted-foreground">Model the impact of wage increases, headcount changes, or policy modifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Popular Report Templates</h2>
              <p className="text-xl text-white/90 mb-8">
                Get started quickly with our most popular pre-built reports
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">Payroll & Tax</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Payroll Register by Period</li>
                    <li>• Tax Liability Summary</li>
                    <li>• Direct Deposit Detail</li>
                    <li>• Deduction Summary</li>
                    <li>• W-2 Reconciliation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Labor & Analytics</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Labor Distribution Report</li>
                    <li>• Overtime Analysis</li>
                    <li>• Turnover Analysis</li>
                    <li>• Headcount by Department</li>
                    <li>• Budget vs. Actual</li>
                  </ul>
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
            Turn Data Into Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start making better decisions with powerful reporting
          </p>
          <Button size="lg" variant="secondary">
            See Reports Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reporting;
