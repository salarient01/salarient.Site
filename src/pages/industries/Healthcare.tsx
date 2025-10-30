import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Clock, FileText } from "lucide-react";

const Healthcare = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sea-900 text-white">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Payroll Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HIPAA-compliant payroll for hospitals, clinics, and healthcare organizations. Manage 
              shifts, certifications, and complex compensation with confidence.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Designed for Healthcare
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Healthcare organizations have unique payroll needs. Our solution handles shift 
                differentials, on-call pay, certification tracking, and HIPAA compliance requirements 
                specific to the healthcare industry.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>24/7 shift management with differential pay calculations</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>HIPAA-compliant data security and privacy controls</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>On-call scheduling and standby pay tracking</span>
                </li>
                <li className="flex items-start">
                  <FileText className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>License and certification expiration management</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl p-8 bg-background text-foreground">
              <h3 className="text-2xl font-bold mb-6">Healthcare Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">1,200+</div>
                  <div className="text-white/80">Healthcare organizations served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">HIPAA compliance rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="text-white/80">Reduction in payroll errors</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Healthcare-Specific Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Shift Differential Pay",
                  description: "Automatically calculate and apply shift differentials for evening, night, weekend, and holiday shifts. Support for multiple differential rates and complex pay rules specific to healthcare facilities. Seamless integration with scheduling systems.",
                },
                {
                  title: "Credential Tracking",
                  description: "Monitor licenses, certifications, and continuing education requirements. Automated alerts before expiration dates, digital credential storage, and compliance reporting. Integration with state licensing boards for verification.",
                },
                {
                  title: "On-Call Management",
                  description: "Track on-call schedules and automatically calculate standby pay. Differentiate between regular on-call pay and callback pay when staff are called in. Compliance with union contracts and labor agreements for on-call compensation.",
                },
                {
                  title: "Union Compliance",
                  description: "Support for multiple union contracts with varying pay rates, benefits, and work rules. Automatic application of union dues, shift differentials, and seniority-based pay scales. Generate union-specific reports for contract compliance.",
                },
                {
                  title: "Travel Nurse Support",
                  description: "Manage temporary and travel healthcare workers with per diem rates, housing stipends, and multi-state tax compliance. Track assignments, calculate tax home rules, and handle end-of-assignment payments efficiently.",
                },
                {
                  title: "Acuity-Based Costing",
                  description: "Track labor costs by patient acuity level or department. Allocate nursing hours to specific units or care levels for accurate cost accounting. Support budgeting and staffing decisions with detailed labor analytics.",
                },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 md:p-12 bg-background text-foreground">
            <h2 className="text-3xl font-bold mb-8">Security & Compliance</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">HIPAA Compliance</h3>
                <p className="text-muted-foreground mb-4">
                  Our platform is fully HIPAA compliant with encrypted data storage, secure transmission, 
                  and comprehensive audit trails. Business Associate Agreements (BAA) available upon request.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end data encryption</li>
                  <li>• Role-based access controls</li>
                  <li>• Complete audit logging</li>
                  <li>• BAA agreements provided</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Generate reports required by CMS, Joint Commission, and state health departments. 
                  Track mandatory reporting metrics and maintain compliance with healthcare regulations.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• CMS wage index reporting</li>
                  <li>• Joint Commission compliance</li>
                  <li>• State health department reports</li>
                  <li>• Medicare cost reporting support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Healthcare Payroll Made Easy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Focus on patient care, not payroll complexity
          </p>
          <Link to="/features/compliance">
            <Button size="lg" variant="secondary">
              Learn more
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;
