import Link from "next/link";

const footerLinks = {
  services: [
    { label: "AI Engineering", href: "/services/ai-engineering" },
    { label: "Product Engineering", href: "/services/product-engineering" },
    { label: "AI Security", href: "/services/ai-security" },
    { label: "Design", href: "/services/design" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "AI Playbooks", href: "/playbooks" },
    { label: "Tech Radar", href: "/tech-radar" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-text-primary">
              Procedure
            </Link>
            <p className="mt-4 text-sm text-text-secondary max-w-xs">
              Forward-deployed AI engineers building production-grade systems with security built in.
            </p>
            {/* Security badge */}
            <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated w-fit">
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="text-xs font-medium text-accent-teal-light">Secure by design</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Procedure. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-text-muted">SOC 2 Type II</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-xs text-text-muted">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
