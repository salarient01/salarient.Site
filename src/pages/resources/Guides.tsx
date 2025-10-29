import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, Clock } from "lucide-react";

const Guides = () => {
  return (
    <div className="min-h-screen flex flex-col bg-egyptian-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Payroll Guides & Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert guides, tutorials, and best practices to help you master payroll and HR management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Getting Started",
                title: "Complete Guide to Payroll Setup",
                description: "Everything you need to know about setting up payroll for your business, from tax registration to first payroll run.",
                readTime: "15 min read",
              },
              {
                category: "Compliance",
                title: "2024 Payroll Tax Guide",
                description: "Updated tax rates, filing deadlines, and compliance requirements for federal, state, and local payroll taxes.",
                readTime: "20 min read",
              },
              {
                category: "Best Practices",
                title: "10 Ways to Reduce Payroll Errors",
                description: "Learn proven strategies to eliminate common payroll mistakes and improve accuracy.",
                readTime: "12 min read",
              },
              {
                category: "Advanced",
                title: "Multi-State Payroll Compliance",
                description: "Navigate the complexity of running payroll across multiple states with this comprehensive guide.",
                readTime: "25 min read",
              },
              {
                category: "HR Management",
                title: "Employee Onboarding Checklist",
                description: "Step-by-step guide to creating an effective onboarding process that sets new hires up for success.",
                readTime: "10 min read",
              },
              {
                category: "Technology",
                title: "Payroll Automation Benefits",
                description: "Discover how automation can save time, reduce errors, and improve your payroll process.",
                readTime: "15 min read",
              },
            ].map((guide, index) => (
        <Card key={index} className="hover:shadow-hover transition-all">
          <CardContent className="p-6 bg-background text-foreground">
                  <div className="text-sm text-primary font-semibold mb-2">{guide.category}</div>
                  <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {guide.readTime}
                    </div>
                    <Button variant="ghost" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Download className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Download Our Complete Payroll Guide</h2>
              <p className="text-xl text-white/90 mb-6">
                Get our comprehensive 50-page guide covering everything from payroll basics to advanced compliance topics.
              </p>
              <Button size="lg" variant="secondary">
                Download Free Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
