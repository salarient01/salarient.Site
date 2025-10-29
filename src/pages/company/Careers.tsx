import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Briefcase } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-teal-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us build the future of payroll and HR technology. We're always looking for 
              talented, passionate people to join our growing team.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work at SALARIENT HR solutions?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Competitive Benefits",
                  description: "Health, dental, vision insurance, 401(k) matching, and unlimited PTO.",
                },
                {
                  title: "Remote-Friendly",
                  description: "Work from anywhere with flexible hours and a results-oriented culture.",
                },
                {
                  title: "Growth Opportunities",
                  description: "Continuous learning budget, mentorship programs, and clear career paths.",
                },
                {
                  title: "Cutting-Edge Tech",
                  description: "Work with modern technologies and tools. We invest in the best.",
                },
                {
                  title: "Impactful Work",
                  description: "Build products that help thousands of businesses and millions of employees.",
                },
                {
                  title: "Inclusive Culture",
                  description: "Diverse team, equal opportunities, and a welcoming environment for all.",
                },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 bg-background text-foreground">
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Senior Full Stack Engineer",
                  department: "Engineering",
                  location: "Remote",
                  type: "Full-time",
                },
                {
                  title: "Product Designer",
                  department: "Product",
                  location: "San Francisco, CA or Remote",
                  type: "Full-time",
                },
                {
                  title: "Customer Success Manager",
                  department: "Customer Success",
                  location: "Remote",
                  type: "Full-time",
                },
                {
                  title: "Payroll Compliance Specialist",
                  department: "Compliance",
                  location: "Remote",
                  type: "Full-time",
                },
                {
                  title: "Sales Development Representative",
                  department: "Sales",
                  location: "New York, NY or Remote",
                  type: "Full-time",
                },
                {
                  title: "Technical Writer",
                  department: "Product",
                  location: "Remote",
                  type: "Full-time",
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-hover transition-all">
                  <CardContent className="p-6 bg-background text-foreground">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto bg-background text-foreground">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
              <p className="text-xl text-white/90 mb-6">
                We're always interested in hearing from talented people. Send us your resume and 
                let us know what you're passionate about.
              </p>
              <Button size="lg" variant="secondary">
                Send General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
