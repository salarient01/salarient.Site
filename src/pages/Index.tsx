import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Users,
  BarChart3,
  Clock,
  FileCheck,
} from "lucide-react";

const Index = () => {
  const features = [
    { icon: Zap, title: "Automated Processing", description: "Run payroll in minutes with intelligent automation that eliminates manual calculations and reduces errors by 95%.", link: "/features/automation" },
    { icon: Shield, title: "Compliance Guaranteed", description: "Stay compliant with automatic tax calculations, filing, and updates for federal, state, and local regulations.", link: "/features/compliance" },
    { icon: BarChart3, title: "Advanced Analytics", description: "Make data-driven decisions with real-time reporting, custom dashboards, and predictive workforce insights.", link: "/features/reporting" },
    { icon: Users, title: "Employee Self-Service", description: "Empower your team with 24/7 access to pay stubs, tax documents, benefits enrollment, and time-off requests.", link: "/products/hr-management" },
    { icon: Clock, title: "Time Tracking", description: "Seamlessly track hours, manage schedules, and integrate time data directly into payroll processing.", link: "/products/time-tracking" },
    { icon: FileCheck, title: "Benefits Management", description: "Simplify benefits administration with automated enrollment, deductions, and carrier integrations.", link: "/products/benefits-administration" },
    { icon: TrendingUp, title: "Scalable Platform", description: "Grow from 5 to 5,000 employees without changing systems. Our platform scales with your business needs.", link: "/pricing" },
    { icon: CheckCircle2, title: "Expert Support", description: "Get help when you need it with 24/7 phone, chat, and email support from certified payroll specialists.", link: "/company/contact" },
  ];

  const heroStats = [
    { value: "99.9%", label: "Uptime" },
    { value: "50,000+", label: "Trusted customers" },
    { value: "24/7", label: "Dedicated support" },
  ];

  const statsRow = [
    { value: "50,000+", label: "Trusted Customers" },
    { value: "99.9%", label: "Uptime" },
    { value: "2M+", label: "Payrolls Processed" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#060814] text-white py-24 md:py-36">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-300 mix-blend-screen"></div>
          <div className="absolute right-0 bottom-0 w-[40rem] h-[40rem] rounded-full blur-2xl opacity-10 bg-gradient-to-tr from-indigo-900 to-slate-800"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-white/6 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-white/10">
              <span className="text-sm text-amber-200 font-medium">Trusted by enterprise teams</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight leading-tight mb-6">
              Elevate Payroll to a Luxurious Experience
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Precision payroll, refined design — built for teams that demand reliability and a premium experience. Secure, compliant, and delightful to use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-br from-amber-400 to-yellow-400 text-slate-900 px-8 py-4 font-semibold shadow-[0_12px_40px_-10px_rgba(250,204,21,0.25)] transform hover:-translate-y-0.5 transition">
                  Explore our services
                </Button>
              </Link>

              <Button size="lg" variant="outline" className="text-white bg-white/5 border-white/20 hover:bg-white/10 px-8 py-4">
                Request a Demo
              </Button>
            </div>

            {/* hero stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroStats.map((s, i) => (
                <div key={i} className="rounded-xl p-5 backdrop-blur-sm border border-white/8 bg-white/3">
                  <div className="text-2xl font-bold mb-1 text-white">{s.value}</div>
                  <div className="text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row - neutralized */}
      <section className="py-12 bg-[#070716]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 items-stretch">
            {statsRow.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/8 bg-white/3">
                <div className="text-2xl md:text-3xl font-extrabold mb-1 text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - neutralized colors */}
      <section className="py-20 bg-[#050512]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold mb-4 text-white">Everything You Need to Manage Payroll</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">From automated calculations to compliance management — everything is designed to work beautifully together.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="h-full cursor-pointer group bg-white/3 border border-white/6 backdrop-blur-sm hover:shadow-hover transition-all">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform text-white/80" />
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#060814] to-[#0b0720] border-t border-white/4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white mb-4">Ready for a Premium Payroll Experience?</h2>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">Move to a platform that combines enterprise reliability with elegant design. Fast onboarding, transparent pricing, and dedicated support.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-br from-amber-400 to-yellow-400 text-slate-900 px-8 py-4 font-semibold shadow-[0_12px_40px_-10px_rgba(250,204,21,0.25)]">Explore our services</Button>
            <Button size="lg" variant="outline" className="text-white bg-white/5 border-white/20 hover:bg-white/10 px-8 py-4">Request a Demo</Button>
          </div>

          <div className="mt-8 text-sm text-white/60">
            <span className="mr-2">No credit card required</span>
            <span className="mx-2">•</span>
            <span className="mr-2">14-day free trial</span>
            <span className="mx-2">•</span>
            <span>Enterprise-grade security</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
