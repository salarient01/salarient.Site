import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-teal-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About SALARIENT HR solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to simplify payroll and HR for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2015, SALARIENT HR solutions was born from a simple frustration: payroll shouldn't 
                  be this complicated. Our founders, former CFOs at growing companies, experienced 
                  firsthand the challenges of managing payroll with outdated, inflexible systems.
                </p>
                <p>
                  They envisioned a modern payroll platform that would be powerful enough for 
                  enterprise needs yet simple enough for small businesses. Today, SALARIENT HR solutions serves 
                  over 50,000 businesses and processes more than 2 million payrolls annually.
                </p>
                <p>
                  We've grown from a small startup to a leading payroll provider, but we've never 
                  lost sight of our core mission: making payroll and HR management effortless for 
                  businesses everywhere.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <Card>
                <CardContent className="p-8 bg-background text-foreground">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with intelligent, automated payroll solutions that save 
                    time, reduce errors, and ensure compliance—so they can focus on what matters most: 
                    growing their business and taking care of their people.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 bg-background text-foreground">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Customer success is our success</li>
                    <li>• Innovation drives everything we do</li>
                    <li>• Transparency builds trust</li>
                    <li>• Simplicity is sophistication</li>
                    <li>• Compliance is non-negotiable</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-2xl p-8 md:p-12 mb-20 bg-background text-foreground">
              <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: Users, value: "50,000+", label: "Businesses Served" },
                  { icon: TrendingUp, value: "2M+", label: "Payrolls Processed" },
                  { icon: Award, value: "99.9%", label: "Accuracy Rate" },
                  { icon: Target, value: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're a diverse team of payroll experts, engineers, designers, and customer success 
                professionals united by a common goal: making payroll better. With decades of combined 
                experience in payroll, accounting, and software development, we bring deep expertise 
                to every product we build.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Sarah Johnson", role: "CEO & Co-Founder" },
                  { name: "Michael Chen", role: "CTO & Co-Founder" },
                  { name: "Emily Rodriguez", role: "VP of Operations" },
                  { name: "David Thompson", role: "VP of Engineering" },
                  { name: "Jennifer Lee", role: "VP of Customer Success" },
                  { name: "Robert Martinez", role: "VP of Compliance" },
                ].map((member, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center bg-background text-foreground">
                      <div className="w-20 h-20 rounded-full bg-background mx-auto mb-4" />
                      <h3 className="font-bold mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
