import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ServicesHighlight from "@/components/ServicesHighlight";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-teal-900 text-white">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <Card>
                  <CardContent className="p-6 flex items-start bg-background text-foreground">
                    <Phone className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 6281576979</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday, 8am-8pm ET</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start bg-background text-foreground">
                    <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:salarienthrsolutions@outlook.com" className="underline hover:text-white">salarienthrsolutions@outlook.com</a>
                      </p>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start bg-background text-foreground">
                    <MessageCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-muted-foreground">Available on our website</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday, 8am-8pm ET</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start bg-background text-foreground">
                    <MapPin className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Headquarters</h3>
                      <p className="text-muted-foreground">
                        123 Payroll Street<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-2xl p-8 bg-background text-foreground">
                <h3 className="text-xl font-bold mb-4">Sales Inquiries</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in SALARIENT HR solutions for your business? Our sales team is ready to help you 
                  find the perfect solution.
                </p>
                <div className="space-y-4 text-sm text-muted-foreground mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Attendance tracking</h4>
                    <p>
                      Real-time integration with biometric or any attendance capturing device, support for multiple shifts, easy shift rostering by line managers, configurable penalties for unauthorized absence / late-in / early-out / shortfall, flexi-hours support, and selfie attendance marking.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Exit management</h4>
                    <p>
                      Online resignation application & approval, customizable multi-department clearance workflows, an exit dashboard for visibility, and integration with full-final settlement processes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Employee onboarding</h4>
                    <p>
                      Streamlined onboarding workflows, admin review steps, alerts and reminders for employees and admins, and electronic acceptance of company policies to ensure a fast, compliant new-hire experience.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Help desk</h4>
                    <p>
                      Define ticket categories, create and resolve tickets, SLA-driven queues and escalation, and reporting to ensure timely response and operational continuity.
                    </p>
                  </div>
                </div>

                <Button className="w-full">Schedule a Demo</Button>
              </div>
            </div>

            <div>
        <Card>
          <CardContent className="p-8 bg-background text-foreground">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input placeholder="Your company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                      <Input type="tel" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="How can we help you?" 
                        rows={6}
                      />
                    </div>
                    <Button className="w-full bg-gradient-primary hover:shadow-hover transition-all">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Right Away?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 for existing customers
          </p>
          <Button size="lg" variant="secondary">
            Access Support Portal
          </Button>
        </div>
      </section>

  <Footer />
    </div>
  );
};

export default Contact;
