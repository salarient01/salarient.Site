import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Smartphone, Calendar, TrendingUp, UserCheck } from "lucide-react";

const TimeTracking = () => {
  return (
  <div className="min-h-screen flex flex-col bg-rose-900 text-white">
      <Navbar />
      
  <section className="py-20 bg-rose-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Time & Attendance Tracking
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Accurate time tracking that integrates seamlessly with payroll. Track hours, 
              manage schedules, and ensure compliance with labor laws.
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
                Flexible Time Tracking for Every Business
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether your team works in an office, remotely, or in the field, our time tracking 
                solution adapts to your needs. Multiple clock-in options, GPS verification, and 
                real-time tracking ensure accuracy and accountability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Multiple Clock-In Methods</h3>
                    <p className="text-muted-foreground">Web, mobile app, kiosk, biometric, or badge readers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">GPS & Geofencing</h3>
                    <p className="text-muted-foreground">Verify employee locations and create virtual boundaries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Mobile Time Tracking</h3>
                    <p className="text-muted-foreground">iOS and Android apps for on-the-go time entry</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Time Tracking Benefits</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-white/80">Reduction in time theft and buddy punching</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">15 hrs</div>
                  <div className="text-white/80">Saved per month on timesheet management</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">FLSA and labor law compliance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comprehensive Time Management
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Scheduling",
                  description: "Create and manage employee schedules with drag-and-drop simplicity. Set recurring shifts, manage shift swaps, and send automatic notifications. Handle multiple locations and departments with ease.",
                },
                {
                  icon: TrendingUp,
                  title: "Overtime Management",
                  description: "Automatically track and calculate overtime based on federal and state regulations. Set up alerts for approaching overtime thresholds and manage daily, weekly, and California-style overtime calculations.",
                },
                {
                  icon: UserCheck,
                  title: "Time-Off Requests",
                  description: "Streamline PTO, vacation, and sick leave management. Employees can request time off through the mobile app, managers approve with one click, and balances update automatically in real-time.",
                },
                {
                  icon: Clock,
                  title: "Break Compliance",
                  description: "Ensure compliance with meal and rest break requirements. Automatic reminders for mandated breaks, tracking of break durations, and alerts for missed breaks to avoid labor law violations.",
                },
                {
                  icon: MapPin,
                  title: "Job Costing",
                  description: "Track time by project, department, or cost center for accurate job costing. Allocate labor costs to specific jobs or clients and generate detailed profitability reports for better project management.",
                },
                {
                  icon: Smartphone,
                  title: "Real-Time Tracking",
                  description: "Monitor who's working in real-time with live dashboards. See current clock-ins, attendance patterns, and labor costs as they happen. Receive instant alerts for late arrivals or missed punches.",
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

          <div className="rounded-2xl p-8 md:p-12 bg-background text-foreground">
            <h2 className="text-3xl font-bold mb-8">Advanced Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Biometric Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Eliminate buddy punching with fingerprint, facial recognition, or iris scanning. 
                  Our system integrates with leading biometric hardware providers for maximum security 
                  and accuracy.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fingerprint scanners</li>
                  <li>• Facial recognition cameras</li>
                  <li>• Iris scanning systems</li>
                  <li>• RFID badge readers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Labor Forecasting</h3>
                <p className="text-muted-foreground mb-4">
                  Use AI-powered analytics to predict labor needs based on historical data, seasonal 
                  trends, and business patterns. Optimize staffing levels and reduce labor costs.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Predictive scheduling</li>
                  <li>• Demand forecasting</li>
                  <li>• Budget vs. actual analysis</li>
                  <li>• Labor cost optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Compliance Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Stay compliant with complex labor laws including FLSA, ACA, and state-specific 
                  regulations. Automatic alerts and comprehensive audit trails protect your business.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• FLSA overtime rules</li>
                  <li>• ACA hour tracking</li>
                  <li>• State break laws</li>
                  <li>• Complete audit trails</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Seamless Payroll Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Time data flows automatically into payroll with zero manual entry. Review and approve 
                  hours before processing, with full visibility into regular time, overtime, and PTO.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automatic data sync</li>
                  <li>• Pre-payroll review tools</li>
                  <li>• Exception reporting</li>
                  <li>• One-click approval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20 bg-rose-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Tracking Time More Accurately
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reduce time theft, improve accuracy, and ensure compliance
          </p>
          <Button size="lg" variant="secondary">
            Get Started Free
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TimeTracking;
