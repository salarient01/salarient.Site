import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Products",
    items: [
      { label: "Payroll Processing", href: "/products/payroll-processing" },
      { label: "Time & Attendance", href: "/products/time-tracking" },
      { label: "HR Management", href: "/products/hr-management" },
      { label: "Benefits Administration", href: "/products/benefits-administration" },
    ],
  },
  {
    label: "Features",
    items: [
      { label: "Automation", href: "/features/automation" },
      { label: "Compliance", href: "/features/compliance" },
      { label: "Reporting & Analytics", href: "/features/reporting" },
      { label: "Integrations", href: "/features/integrations" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Retail", href: "/industries/retail" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Technology", href: "/industries/technology" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Guides & Tutorials", href: "/resources/guides" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Blog", href: "/resources/blog" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* logo / wordmark */}
          {/* Use the provided raster logo directly */}
      <div className="flex flex-col items-center leading-none">
  {/* Logo + Brand Name */}
  <Link
    to="/"
    className="flex items-center space-x-2 transform translate-x-4"
    aria-label="Home"
  >
    <img
      src="/logo.svg"
      alt="SALARIENT logo"
      className="h-12 md:h-14 w-auto object-contain"
    />
    <span
  className="text-xl md:text-2xl font-extrabold tracking-wider text-blue-700 drop-shadow-sm uppercase"
      style={{
        fontFamily:
          'Futura, "Futura PT", "Futura Std", "Trebuchet MS", Arial, sans-serif',
        letterSpacing: "0.08em",
      }}
    >
      SALARIENT
    </span>
  </Link>

  {/* Subtitles */}
  <p
    className="text-xs md:text-sm font-medium text-center transform -translate-y-1"
    style={{
      fontFamily:
        'Futura, "Futura PT", "Futura Std", "Trebuchet MS", Arial, sans-serif',
      fontWeight: 200,
    }}
  >
    Payroll management &
  </p>
  <p
    className="text-xs md:text-sm font-medium text-center transform -translate-y-2"
    style={{
      fontFamily:
        'Futura, "Futura PT", "Futura Std", "Trebuchet MS", Arial, sans-serif',
      fontWeight: 200,
    }}
  >
    IT services
  </p>
</div>





          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link to={item.href}>
                    <Button variant="ghost" className="font-medium">
                      {item.label}
                    </Button>
                  </Link>
                ) : (
                  <Button variant="ghost" className="font-medium">
                    {item.label}
                    {item.items && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Button>
                )}

                {item.items && openDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-lg border border-border bg-card shadow-elegant">
                    <div className="p-2">
                      {item.items.map((subItem) => (
                        <Link key={subItem.href} to={subItem.href}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start font-normal hover:bg-muted"
                          >
                            {subItem.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/company/contact">
              <Button className="bg-gradient-primary hover:shadow-hover transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            {navItems.map((item) => (
              <div key={item.label} className="mb-2">
                {item.href ? (
                  <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      {item.label}
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-semibold"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-auto h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                    {openDropdown === item.label && item.items && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-sm"
                            >
                              {subItem.label}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Link to="/company/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-primary">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
