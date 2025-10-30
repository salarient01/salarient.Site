import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServicesSnippet() {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-3">BPO & IT Services</h3>
          <p className="text-muted-foreground mb-4">
            We offer end-to-end BPO and IT services to streamline operations and accelerate digital
            transformation — from omnichannel contact centers and back-office processing to
            custom AI, RPA and managed infrastructure.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4 text-left">
            <div>
              <h4 className="font-semibold">Customer Experience</h4>
              <p className="text-sm text-muted-foreground">Omnichannel support, intelligent routing, QA and CX analytics that improve CSAT and reduce handle time.</p>
            </div>
            <div>
              <h4 className="font-semibold">Back Office & Automation</h4>
              <p className="text-sm text-muted-foreground">Payroll reconciliation, invoice automation, RPA and workflow orchestration to cut cycle times and errors.</p>
            </div>
          </div>

          <div className="inline-flex items-center justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-amber-400 to-yellow-400 px-4 py-2 text-slate-900 font-semibold shadow-sm">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
