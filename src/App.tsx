import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Products
import PayrollProcessing from "./pages/products/PayrollProcessing";
import TimeTracking from "./pages/products/TimeTracking";
import HRManagement from "./pages/products/HRManagement";
import BenefitsAdministration from "./pages/products/BenefitsAdministration";

// Features
import Automation from "./pages/features/Automation";
import Compliance from "./pages/features/Compliance";
import Reporting from "./pages/features/Reporting";
import Integrations from "./pages/features/Integrations";

// Industries
import Retail from "./pages/industries/Retail";
import Healthcare from "./pages/industries/Healthcare";
import Manufacturing from "./pages/industries/Manufacturing";
import Technology from "./pages/industries/Technology";

// Resources
import Guides from "./pages/resources/Guides";
import CaseStudies from "./pages/resources/CaseStudies";
import Blog from "./pages/resources/Blog";
// Services
import Services from "./pages/services/Index";

// Other
import Pricing from "./pages/Pricing";
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Global page wrapper: applies the semi-dark background and foreground tokens */}
      <div className="min-h-screen bg-background text-foreground">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Products */}
          <Route path="/products/payroll-processing" element={<PayrollProcessing />} />
          <Route path="/products/time-tracking" element={<TimeTracking />} />
          <Route path="/products/hr-management" element={<HRManagement />} />
          <Route path="/products/benefits-administration" element={<BenefitsAdministration />} />
          
          {/* Features */}
          <Route path="/features/automation" element={<Automation />} />
          <Route path="/features/compliance" element={<Compliance />} />
          <Route path="/features/reporting" element={<Reporting />} />
          <Route path="/features/integrations" element={<Integrations />} />
          
          {/* Industries */}
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/technology" element={<Technology />} />
          
          {/* Resources */}
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/blog" element={<Blog />} />
          
          {/* Other */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
    </div>
  </TooltipProvider>
  </QueryClientProvider>
);

export default App;
