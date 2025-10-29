import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
  <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$39",
                period: "per month + $6/employee",
                description: "Perfect for small businesses just getting started",
                features: [
                  "Unlimited payroll runs",
                  "Direct deposit",
                  "Tax filing and payments",
                  "Employee self-service",
                  "Basic reporting",
                  "Email support",
                ],
                cta: "Explore our services",
                popular: false,
              },
              {
                name: "Professional",
                price: "$79",
                period: "per month + $8/employee",
                description: "For growing businesses with advanced needs",
                features: [
                  "Everything in Starter",
                  "Time & attendance",
                  "HR management",
                  "Benefits administration",
                  "Advanced reporting",
                  "Priority phone support",
                  "API access",
                  "Custom integrations",
                ],
                cta: "Explore our services",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For large organizations with complex requirements",
                features: [
                  "Everything in Professional",
                  "Dedicated account manager",
                  "Custom workflows",
                  "SLA guarantees",
                  "Advanced security features",
                  "Onboarding & training",
                  "24/7 priority support",
                  "White-glove implementation",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary shadow-elegant" : ""}>
                <CardContent className="p-8">
                  {plan.popular && (
                    <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  {plan.cta === "Explore our services" ? (
                    <Link to="/services">
                      <Button className={`w-full mb-6`} variant={plan.popular ? "default" : "outline"}>
                        {plan.cta}
                      </Button>
                    </Link>
                  ) : (
                    <Button className={`w-full mb-6`} variant={plan.popular ? "default" : "outline"}>
                      {plan.cta}
                    </Button>
                  )}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is there a setup fee?",
                  a: "No, there are no setup fees. You only pay the monthly base rate plus per-employee charges.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time with no penalties or cancellation fees.",
                },
                {
                  q: "What's included in the per-employee cost?",
                  a: "The per-employee cost covers payroll processing, tax filing, direct deposit, and employee self-service access.",
                },
                {
                  q: "Do you offer discounts for annual payments?",
                  a: "Yes, we offer a 15% discount when you pay annually instead of monthly.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button size="lg" variant="secondary">
            Explore our services
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
