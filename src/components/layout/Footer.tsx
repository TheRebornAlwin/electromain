'use client';

/**
 * ElectroMain Editorial Footer
 * PREMIUM multi-column footer inspired by luxury brands
 * Features:
 * - Editorial layout with generous spacing
 * - Electrical circuit pattern accents
 * - Premium typography treatment
 * - Gradient dividers
 * - Sophisticated hover states
 */

import { motion } from 'framer-motion';
import { Zap, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { track } from '@/lib/analytics';

const footerSections = {
  services: {
    title: 'Services',
    links: [
      { label: 'Electrical Installations', href: '/services/electrical' },
      { label: 'EV Chargers', href: '/services/ev-chargers' },
      { label: 'CCTV & Access Control', href: '/services/cctv' },
      { label: 'Fire Alarm Systems', href: '/services/fire-alarms' },
      { label: 'Plumbing & Heating', href: '/services/plumbing-heating' },
      { label: 'Facilities Maintenance', href: '/services/facilities' },
      { label: '24/7 Emergency', href: '/emergency' },
    ],
  },
  sectors: {
    title: 'Sectors',
    links: [
      { label: 'Residential', href: '/sectors/residential' },
      { label: 'Commercial', href: '/sectors/commercial' },
      { label: 'Industrial', href: '/sectors/industrial' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About ElectroMain', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'How We Work', href: '/process' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  compliance: {
    title: 'Compliance',
    links: [
      { label: 'Safety & Standards', href: '/compliance' },
      { label: 'NICEIC Certification', href: '/compliance#niceic' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
};

export function Footer() {
  const handleLinkClick = (label: string, href: string) => {
    track.navClick({ label, destination: href });
  };

  const handlePhoneClick = () => {
    track.phoneClick({
      location: 'footer',
      phone_number: '+442012345678',
    });
  };

  const handleEmailClick = () => {
    track.emailClick({
      location: 'footer',
      email_address: 'hello@electromain.co.uk',
    });
  };

  return (
    <footer className="relative bg-ink-900 text-white overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-pattern opacity-[0.03]" />

      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-amber/50 to-transparent" />

      <div className="container relative z-10">

        {/* Main footer content */}
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

            {/* Brand column - spans 2 on large screens */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-sun-yellow via-brand-amber to-brand-burnt-orange flex items-center justify-center shadow-card">
                  <Zap className="w-6 h-6 text-white" fill="white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-semibold tracking-tight">
                    <span className="text-white">Electro</span>
                    <span className="gradient-text">Main</span>
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/50 font-medium">
                    Precision Engineering
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-xs">
                NICEIC-certified electrical contractor serving London and the South East with precision installations and uncompromising safety standards.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                <a
                  href="tel:+442012345678"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-sun-yellow transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-amber/10 transition-colors">
                    <Phone className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-medium tabular-nums">020 1234 5678</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@electromain.co.uk"
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-sun-yellow transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-amber/10 transition-colors">
                    <Mail className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-medium">hello@electromain.co.uk</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                    <Clock className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Mon-Fri 7AM-8PM • Sat 8AM-6PM</div>
                    <div className="text-xs font-semibold text-brand-sun-yellow">24/7 Emergency</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-white/80">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 leading-relaxed">
                      ElectroMain Ltd<br />
                      123 High Street<br />
                      London SE1 1AA<br />
                      United Kingdom
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
                {footerSections.services.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.services.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.label, link.href)}
                      className="text-sm text-white/60 hover:text-brand-sun-yellow transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sectors column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
                {footerSections.sectors.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.sectors.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.label, link.href)}
                      className="text-sm text-white/60 hover:text-brand-sun-yellow transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
                {footerSections.company.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.company.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.label, link.href)}
                      className="text-sm text-white/60 hover:text-brand-sun-yellow transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Compliance column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
                {footerSections.compliance.title}
              </h3>
              <ul className="space-y-3">
                {footerSections.compliance.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.label, link.href)}
                      className="text-sm text-white/60 hover:text-brand-sun-yellow transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              className="text-xs text-white/40"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              © {new Date().getFullYear()} ElectroMain Ltd. All rights reserved. • Company No. 12345678 • VAT GB123456789
            </motion.p>

            {/* Made with Claude Code badge */}
            <motion.div
              className="flex items-center gap-2 text-xs text-white/40"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span>Built with precision by</span>
              <a
                href="https://claude.com/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-sun-yellow hover:text-brand-amber transition-colors font-medium"
              >
                Claude Code
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </footer>
  );
}
