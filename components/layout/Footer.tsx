import { Mail, Phone, MapPin, Zap } from "lucide-react";
import Logo from "@/components/icons/Logo";
import {
  NAV_LINKS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  OFFICES,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-bg-surface-border bg-bg-surface/30 py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="text-text-muted text-sm mt-4 leading-relaxed">
              Trusted electrical contractors delivering turnkey solutions, panel
              manufacturing, and maintenance services across India since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {BUSINESS_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-muted text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {OFFICES.head.street}, {OFFICES.head.city},{" "}
                  {OFFICES.head.state} — {OFFICES.head.zip}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-bg-surface-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; 2025 Synergy Projects. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <Zap className="text-accent-amber w-4 h-4" /> by Synergy
            Projects
          </p>
        </div>
      </div>
    </footer>
  );
}
