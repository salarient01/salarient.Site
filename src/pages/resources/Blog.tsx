import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-egyptian-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SALARIENT HR solutions Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Latest insights, news, and updates from the world of payroll and HR management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "2024 Payroll Tax Updates: What You Need to Know",
                excerpt: "Stay ahead of the curve with our comprehensive guide to payroll tax changes for 2024, including new rates and compliance requirements.",
                author: "Sarah Johnson",
                date: "March 15, 2024",
                category: "Compliance",
              },
              {
                title: "5 Signs It's Time to Upgrade Your Payroll System",
                excerpt: "Is your current payroll process holding your business back? Here are five indicators that it's time for a change.",
                author: "Michael Chen",
                date: "March 12, 2024",
                category: "Technology",
              },
              {
                title: "The Complete Guide to Remote Employee Payroll",
                excerpt: "Navigate the complexities of paying remote workers across different states and countries with our expert guide.",
                author: "Emily Rodriguez",
                date: "March 10, 2024",
                category: "Remote Work",
              },
              {
                title: "How to Calculate Overtime Pay: A Step-by-Step Guide",
                excerpt: "Master overtime calculations with this comprehensive guide covering FLSA regulations and common scenarios.",
                author: "David Thompson",
                date: "March 8, 2024",
                category: "Payroll Basics",
              },
              {
                title: "Benefits Administration Best Practices for 2024",
                excerpt: "Streamline your benefits enrollment and administration with these proven strategies and tips.",
                author: "Jennifer Lee",
                date: "March 5, 2024",
                category: "Benefits",
              },
              {
                title: "Understanding Payroll Metrics That Matter",
                excerpt: "Learn which payroll and labor metrics you should be tracking to optimize your workforce management.",
                author: "Robert Martinez",
                date: "March 1, 2024",
                category: "Analytics",
              },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-hover transition-all cursor-pointer">
                <CardContent className="p-6 bg-background text-foreground">
                  <div className="text-sm text-primary font-semibold mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
