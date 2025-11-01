import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Instagram, Headphones, FileText, ShieldCheck, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050511] text-white border-t border-white/6">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 shadow-[0_8px_30px_-12px_rgba(250,204,21,0.35)] flex items-center justify-center">
                <span className="text-[#1f1b0d] font-bold">S</span>
              </div>
              <div>
                <div className="text-xl font-semibold">SALARIENT HR solutions</div>
                <div className="text-sm text-white/60">Enterprise payroll, refined.</div>
              </div>
            </div>

            <p className="text-white/60 mb-4 max-w-md">
              Simplifying payroll and HR management for businesses of all sizes. Trusted by thousands of companies worldwide.
            </p>

            {/* Elevated Services mini-section */}
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-[#07060a]/40 to-transparent border border-amber-500/10">
              <h4 className="text-lg font-semibold text-white mb-2">Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Headphones className="h-5 w-5 text-amber-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Customer Experience</div>
                    <div className="text-xs">Omnichannel support, VIP routing, and CX analytics.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-amber-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Back Office</div>
                    <div className="text-xs">Payroll reconciliation, invoice processing, and workflows.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-amber-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Trust & Safety</div>
                    <div className="text-xs">Content moderation, fraud detection, and policy enforcement.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-amber-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">AI & IT</div>
                    <div className="text-xs">Custom AI, automation, integrations and managed services.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/salarient_hr_solutions?igsh=MXE1d24xY2dsdHZodw==" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/salarient25?s=21" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/salarient-hr-software-solutions-967405379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:salarienthrsolutions@outlook.com" className="text-white/60 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/payroll-processing" className="text-white/60 hover:text-white">Payroll Processing</Link></li>
              <li><Link to="/products/time-tracking" className="text-white/60 hover:text-white">Time & Attendance</Link></li>
              <li><Link to="/products/hr-management" className="text-white/60 hover:text-white">HR Management</Link></li>
              <li><Link to="/products/benefits-administration" className="text-white/60 hover:text-white">Benefits Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/guides" className="text-white/60 hover:text-white">Guides</Link></li>
              <li><Link to="/resources/case-studies" className="text-white/60 hover:text-white">Case Studies</Link></li>
              <li><Link to="/resources/blog" className="text-white/60 hover:text-white">Blog</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/company/about" className="text-white/60 hover:text-white">About Us</Link></li>
              <li><Link to="/company/careers" className="text-white/60 hover:text-white">Careers</Link></li>
              <li><Link to="/company/contact" className="text-white/60 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm text-white/60 border-t border-white/6">
          <p>&copy; {new Date().getFullYear()} SALARIENT HR solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
