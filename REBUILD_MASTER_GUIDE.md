# ElectroMain Complete Rebuild — Master Implementation Guide

**Version:** 1.0
**Theme:** Light Luxury (Apple/Rolex-grade)
**Palette:** Warm Yellow → Amber → Deep Orange (NO RED)
**Framework:** React + TypeScript + Tailwind + Framer Motion

---

## 📋 TABLE OF CONTENTS

1. [Site Architecture & Map](#site-architecture)
2. [Design System & Tokens](#design-system)
3. [Component Specifications](#components)
4. [Copy Library](#copy)
5. [Analytics & Events](#analytics)
6. [SEO & Schema](#seo)
7. [Accessibility & Performance](#qa)
8. [File Structure](#files)
9. [Implementation Checklist](#checklist)

---

## 🗺️ SITE ARCHITECTURE & MAP {#site-architecture}

### Pages & URLs

| URL | Title | Meta Description |
|-----|-------|-----------------|
| `/` | ElectroMain — Precision Electrical Services London & South East | NICEIC-certified electrical installations, EV chargers, CCTV, fire alarms. 98.7% on-time completion. Same-day appointments available. |
| `/services/electrical` | Electrical Installations — ElectroMain | BS 7671 compliant installations with certified testing and documented handover. |
| `/services/ev-chargers` | EV Charger Installation — ElectroMain | OZEV-approved EV charging points with grant guidance and certified testing. |
| `/services/cctv` | CCTV & Access Control — ElectroMain | Discreet CCTV placement with proper cable management and BS EN 50132 compliance. |
| `/services/fire-alarms` | Fire Alarm Systems — ElectroMain | BS 5839 compliant fire detection with commissioning certificates. |
| `/services/plumbing-heating` | Plumbing & Heating Services — ElectroMain | Gas Safe registered plumbing and heating installations with workmanship warranty. |
| `/services/facilities` | Facilities Maintenance — ElectroMain | Planned and reactive maintenance for commercial and industrial properties. |
| `/emergency` | 24/7 Emergency Electrical — ElectroMain | Round-the-clock emergency electrical response. Call 020 XXXX XXXX. |
| `/sectors/residential` | Residential Electrical Services | Domestic electrical work with minimal disruption and spotless handover. |
| `/sectors/commercial` | Commercial Electrical Services | Schedule-certain electrical installations for offices, retail, and hospitality. |
| `/sectors/industrial` | Industrial Electrical Services | Heavy-duty installations with compliance documentation and safety audits. |
| `/case-studies` | Case Studies — ElectroMain | Real installations showcasing our electrical engineering and project delivery. |
| `/process` | How We Work — ElectroMain | Transparent process from enquiry to aftercare. Documented at every stage. |
| `/compliance` | Safety & Compliance — ElectroMain | BS 7671, BS 5839, BS EN 50132 compliance with full certification. |
| `/about` | About ElectroMain | NICEIC-certified electrical contractor serving London and the South East since 20XX. |
| `/contact` | Contact & Book a Visit | Get in touch for same-day site visits and exact quotes. |
| `/faq` | Frequently Asked Questions | Answers to common questions about pricing, timelines, certifications, and coverage. |

### Site Structure (Homepage)

```
┌─ Utility Bar (sticky)
├─ Header Navigation (sticky after scroll)
├─ Hero (Aurora — existing, retokenized)
├─ Trust/Accreditations Band
├─ Instant Estimate (sticky rail desktop)
├─ Signature Services Matrix (7 cards)
├─ Why ElectroMain (Proof Deck + Stats)
├─ Case Studies (2 editorial features)
├─ Projects Showcase (existing, retokenized)
├─ Process Timeline (6 steps with sticky spine)
├─ Safety & Compliance (4 focus areas)
├─ Sectors We Serve (3 modules)
├─ Guarantee & Aftercare
├─ FAQ (10 items with accordion)
├─ CTA Band (full-width)
└─ Footer (editorial, multi-column)
```

---

## 🎨 DESIGN SYSTEM & TOKENS {#design-system}

### Color Palette

```typescript
// tailwind.config.js additions
colors: {
  brand: {
    400: '#FFD24D', // light gold
    500: '#FEC130', // core gold
    600: '#FFB012', // amber
    700: '#FF8A00', // deep amber-orange
  },
  ink: {
    900: '#0E0F12', // primary text
    800: '#14161A', // headings
    700: '#2A2D33', // subheadings
    600: '#3A3F47', // muted
    500: '#646B76', // helper text
  },
  surface: {
    DEFAULT: '#FFFFFF', // base
    tint: '#F6F7F9',    // alternating rows
  },
  state: {
    info: 'rgb(254 193 48 / 0.08)',
    success: 'rgb(16 185 129 / 0.10)',
    warning: 'rgb(255 180 18 / 0.12)',
    error: 'rgb(100 116 139 / 0.08)', // neutral + amber label
  },
},
boxShadow: {
  card: '0 10px 30px rgba(10, 12, 15, 0.06)',
  float: '0 24px 60px rgba(10, 12, 15, 0.08)',
  ambient: '0 4px 16px rgba(10, 12, 15, 0.04)',
  'ambient-hover': '0 8px 24px rgba(10, 12, 15, 0.06)',
},
borderRadius: {
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
},
```

### Typography

```typescript
fontFamily: {
  display: ['Fraunces', 'serif'], // Variable font, optical sizing
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
fontSize: {
  'display-1': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display-2': ['56px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
  'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'h2': ['40px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
  'h3': ['30px', { lineHeight: '1.3', letterSpacing: '0' }],
  'h4': ['24px', { lineHeight: '1.4', letterSpacing: '0' }],
  'body-lg': ['18px', { lineHeight: '1.7', letterSpacing: '0' }],
  'body': ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
  'caption': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
  'micro': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
},
```

### Gradients

```css
/* Primary brand gradient */
.gradient-brand {
  background: linear-gradient(135deg, #FEC130 0%, #FF8A00 100%);
}

/* Keyline gradient (for borders/dividers) */
.gradient-keyline {
  background: linear-gradient(90deg, rgba(254, 193, 48, 0.7) 0%, rgba(255, 138, 0, 0) 100%);
}

/* Text gradient */
.gradient-text {
  background: linear-gradient(135deg, #FEC130 0%, #FF8A00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Spacing Rhythm

```typescript
// Vertical section padding
const spacing = {
  section: {
    desktop: 'py-32 lg:py-40', // 128-160px
    mobile: 'py-16 md:py-24',  // 64-96px
  },
  container: 'max-w-7xl mx-auto px-6 lg:px-8',
};
```

### Utility Classes

```css
/* Gradient keyline border */
.keyline {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(90deg, rgba(254, 193, 48, 0.7), rgba(255, 138, 0, 0)) 1;
}

/* Subtle noise texture overlay */
.noise::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* Light sweep effect on hover */
.sweep {
  position: relative;
  overflow: hidden;
}
.sweep::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(75deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.35) 50%,
    rgba(255, 255, 255, 0) 60%
  );
  transform: translateX(-120%);
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}
.sweep:hover::before {
  transform: translateX(120%);
}
```

---

## 🧩 COMPONENT SPECIFICATIONS {#components}

### 1. Utility Bar (Top Bar)

```tsx
// components/layout/UtilityBar.tsx
export function UtilityBar() {
  return (
    <div className="bg-surface-tint border-b border-ink-500/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-micro text-ink-600">
        <div className="flex items-center gap-8">
          <a
            href="tel:+442012345678"
            className="flex items-center gap-2 hover:text-brand-600 transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-medium">020 1234 5678</span>
          </a>
          <span className="hidden md:inline text-ink-500">Same-day slots available</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden lg:inline text-ink-500">Mon-Fri 7AM-8PM • Sat 8AM-6PM • 24/7 Emergency</span>
          <span className="text-ink-600">London & South East</span>
        </div>
      </div>
    </div>
  );
}
```

**Copy:**
- Phone: `020 1234 5678`
- Availability: `Same-day slots available`
- Hours: `Mon-Fri 7AM-8PM • Sat 8AM-6PM • 24/7 Emergency`
- Coverage: `London & South East`

---

### 2. Header Navigation (Sticky)

```tsx
// components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Services', href: '#services', dropdown: true },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Process', href: '/process' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`
        sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300
        ${scrolled ? 'shadow-card' : ''}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px gradient-keyline" />
      )}

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="ElectroMain home"
          >
            <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-display text-2xl font-semibold text-ink-900">
              Electro<span className="gradient-text">Main</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-sm font-medium text-ink-700 hover:text-brand-600
                  transition-colors duration-200 relative group
                "
              >
                {item.label}
                <span className="
                  absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600
                  group-hover:w-full transition-all duration-300
                " />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                // Analytics event
                window.dataLayer?.push({
                  event: 'book_visit_click',
                  location: 'header',
                  label: 'Book a Site Visit',
                });
                // Open booking modal or navigate
              }}
              className="
                px-6 py-2.5 rounded-full gradient-brand text-white text-sm font-semibold
                shadow-card hover:shadow-float hover:scale-105
                transition-all duration-200 flex items-center gap-2
                focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2
              "
            >
              Book a Site Visit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="
                px-6 py-2.5 rounded-full border border-brand-600 text-brand-600 text-sm font-semibold
                hover:bg-brand-500/5 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2
              "
            >
              Get Instant Estimate
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
```

**Analytics Events:**
```javascript
// Header CTA clicks
window.dataLayer.push({
  event: 'book_visit_click',
  location: 'header',
  label: 'Book a Site Visit'
});
```

---

### 3. Trust / Accreditations Band

```tsx
// components/sections/TrustBand.tsx
const accreditations = [
  { name: 'NICEIC Approved Contractor', logo: '/logos/niceic.svg', width: 100 },
  { name: 'OZEV Approved Installer', logo: '/logos/ozev.svg', width: 90 },
  { name: 'Tesla Approved Installer', logo: '/logos/tesla.svg', width: 85 },
  { name: 'Schneider Electric Partner', logo: '/logos/schneider.svg', width: 110 },
  { name: 'City & Guilds Certified', logo: '/logos/cityandguilds.svg', width: 95 },
  { name: 'SafeContractor Approved', logo: '/logos/safecontractor.svg', width: 100 },
  { name: 'CHAS Accredited', logo: '/logos/chas.svg', width: 80 },
  { name: 'ISO 9001:2015', logo: '/logos/iso9001.svg', width: 75 },
];

export function TrustBand() {
  return (
    <section className="py-12 bg-surface-tint border-y border-ink-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-caption text-ink-600 font-medium uppercase tracking-wider mb-8">
          Accreditations & Partnerships
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {accreditations.map((acc, idx) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: idx * 0.07,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <img
                src={acc.logo}
                alt={acc.name}
                width={acc.width}
                height={60}
                className="h-12 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Copy:**
- Caption: `Accreditations & Partnerships`

---

### 4. Instant Estimate (Functional Component with Seeded Logic)

```tsx
// components/estimate/InstantEstimate.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Seeded random number generator (Mulberry32)
function mulberry32(a: number) {
  return function() {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  return mulberry32(h);
}

interface EstimateInputs {
  service: string;
  urgency: string;
  property: string;
}

function estimateRange(inputs: EstimateInputs): { low: number; high: number } {
  const seedKey = 'em-seed';
  const existing = typeof window !== 'undefined' ? localStorage.getItem(seedKey) : null;
  const seed = existing ?? (inputs.service + inputs.urgency + inputs.property + Math.random().toString(36).slice(2));

  if (typeof window !== 'undefined' && !existing) {
    localStorage.setItem(seedKey, seed);
  }

  const r = seededRandom(seed);

  const baseMap: Record<string, number> = {
    Electrical: 180,
    'EV Chargers': 680,
    'CCTV & Access': 440,
    'Fire Alarms': 360,
    'Plumbing & Heating': 170,
    'Facilities Maintenance': 250,
    Emergency: 230,
  };

  const base = baseMap[inputs.service] ?? 220;
  const kUrg: Record<string, number> = { Today: 1.35, '48h': 1.15, Flexible: 1.0 };
  const kProp: Record<string, number> = { Home: 1.0, Commercial: 1.25, Industrial: 1.45 };

  const swing = 1 + (r() * 0.22 - 0.06); // -6% to +16%
  const mid = base * (kUrg[inputs.urgency] ?? 1) * (kProp[inputs.property] ?? 1) * swing;

  const low = Math.round(mid * 0.85);
  const high = Math.round(mid * 1.25);

  return { low, high };
}

export function InstantEstimate() {
  const [inputs, setInputs] = useState<EstimateInputs>({
    service: 'Electrical',
    urgency: 'Flexible',
    property: 'Home',
  });
  const [range, setRange] = useState({ low: 0, high: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const newRange = estimateRange(inputs);
    setRange(newRange);

    // Analytics event
    if (typeof window !== 'undefined') {
      window.dataLayer?.push({
        event: 'estimate_change',
        service: inputs.service,
        urgency: inputs.urgency,
        property: inputs.property,
        low: newRange.low,
        high: newRange.high,
      });
    }
  }, [inputs]);

  return (
    <motion.div
      className="
        bg-white rounded-2xl shadow-float p-8 border border-ink-500/10
        sticky top-24
      "
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="font-display text-h4 text-ink-900 mb-2">Instant Estimate</h3>
      <p className="text-caption text-ink-600 mb-6">Range updates as you refine scope.</p>

      {/* Service */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-ink-800 mb-2">Service</label>
        <select
          value={inputs.service}
          onChange={(e) => setInputs({ ...inputs, service: e.target.value })}
          className="
            w-full px-4 py-3 rounded-lg border border-ink-500/20
            text-ink-900 bg-white
            focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20
            outline-none transition-all
          "
        >
          <option>Electrical</option>
          <option>EV Chargers</option>
          <option>CCTV & Access</option>
          <option>Fire Alarms</option>
          <option>Plumbing & Heating</option>
          <option>Facilities Maintenance</option>
          <option>Emergency</option>
        </select>
      </div>

      {/* Urgency */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-ink-800 mb-2">Urgency</label>
        <div className="grid grid-cols-3 gap-2">
          {['Today', '48h', 'Flexible'].map((urg) => (
            <button
              key={urg}
              onClick={() => setInputs({ ...inputs, urgency: urg })}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${inputs.urgency === urg
                  ? 'bg-brand-600 text-white shadow-card'
                  : 'bg-surface-tint text-ink-700 hover:bg-ink-500/10'
                }
              `}
            >
              {urg}
            </button>
          ))}
        </div>
      </div>

      {/* Property */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-ink-800 mb-2">Property</label>
        <div className="grid grid-cols-3 gap-2">
          {['Home', 'Commercial', 'Industrial'].map((prop) => (
            <button
              key={prop}
              onClick={() => setInputs({ ...inputs, property: prop })}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${inputs.property === prop
                  ? 'bg-brand-600 text-white shadow-card'
                  : 'bg-surface-tint text-ink-700 hover:bg-ink-500/10'
                }
              `}
            >
              {prop}
            </button>
          ))}
        </div>
      </div>

      {/* Range Display */}
      <div className="bg-gradient-to-br from-brand-400/10 to-brand-600/10 rounded-xl p-6 mb-6">
        <p className="text-micro text-ink-600 uppercase tracking-wider mb-2">Estimated Range</p>
        <motion.p
          className="font-display text-h2 text-ink-900 font-semibold tabular-nums"
          key={`${range.low}-${range.high}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          £{range.low.toLocaleString()} – £{range.high.toLocaleString()}
        </motion.p>
      </div>

      {/* CTAs */}
      <div className="space-y-3">
        <button
          onClick={() => {
            window.dataLayer?.push({
              event: 'estimate_submit',
              service: inputs.service,
              urgency: inputs.urgency,
              property: inputs.property,
              low: range.low,
              high: range.high,
            });
            // Open modal
          }}
          className="
            w-full px-6 py-3 rounded-full gradient-brand text-white font-semibold
            shadow-card hover:shadow-float hover:scale-105
            transition-all duration-200
          "
        >
          Get Exact Quote
        </button>
        <button
          className="
            w-full px-6 py-3 rounded-full border border-brand-600 text-brand-600 font-semibold
            hover:bg-brand-500/5 transition-all duration-200
          "
        >
          Book a Site Visit
        </button>
      </div>
    </motion.div>
  );
}
```

**Copy:**
- Headline: `Instant Estimate`
- Microcopy: `Range updates as you refine scope.`
- Labels: `Service`, `Urgency`, `Property`
- Range label: `Estimated Range`
- CTAs: `Get Exact Quote`, `Book a Site Visit`

**Analytics Events:**
```javascript
// On any input change
{
  event: 'estimate_change',
  service: 'Electrical',
  urgency: 'Flexible',
  property: 'Home',
  low: 153,
  high: 225
}

// On submit
{
  event: 'estimate_submit',
  service: 'Electrical',
  urgency: 'Flexible',
  property: 'Home',
  low: 153,
  high: 225
}
```

---

## ✍️ COMPLETE COPY LIBRARY {#copy}

### Signature Services (7 Cards)

#### 1. Electrical Installations

**Title:** Electrical Installations
**Proof subline:** NICEIC-certified. Clean installs. Documented handover.
**Bullets:**
- Consumer unit upgrades to 18th Edition BS 7671
- Socket and lighting circuits tested and certified
- Minimal disruption with dust sheets and daily cleanup

**CTA:** See details

#### 2. EV Chargers

**Title:** EV Charger Installation
**Proof subline:** OZEV grant guidance & certified testing.
**Bullets:**
- 7kW to 22kW chargers for home and commercial
- Cable management designed for clean appearance
- Load testing and commissioning certification included

**CTA:** See details

#### 3. CCTV & Access Control

**Title:** CCTV & Access Control
**Proof subline:** Discreet placement • Proper cable management.
**Bullets:**
- BS EN 50132 compliant CCTV systems
- Access control with key card or biometric entry
- Network integration and remote viewing setup

**CTA:** See details

#### 4. Fire Alarm Systems

**Title:** Fire Alarm Systems
**Proof subline:** BS 5839 compliant with commissioning certificates.
**Bullets:**
- Addressable and conventional systems
- Smoke, heat, and manual call points
- Regular testing schedules and maintenance plans

**CTA:** See details

#### 5. Plumbing & Heating

**Title:** Plumbing & Heating Services
**Proof subline:** Gas Safe registered with workmanship warranty.
**Bullets:**
- Boiler installations and servicing
- Underfloor heating and radiator systems
- Emergency leak response and repairs

**CTA:** See details

#### 6. Facilities Maintenance

**Title:** Facilities Maintenance
**Proof subline:** Planned and reactive for commercial properties.
**Bullets:**
- PAT testing and compliance audits
- Emergency lighting and exit sign maintenance
- Scheduled inspections with detailed reports

**CTA:** See details

#### 7. 24/7 Emergency

**Title:** 24/7 Emergency Response
**Proof subline:** Round-the-clock electrical emergency call-out.
**Bullets:**
- Response within 60 minutes in central London
- Power outage diagnosis and restoration
- Emergency lighting and fire alarm faults

**CTA:** Call now: 020 XXXX XXXX

---

### Why ElectroMain (Proof Deck)

**Left Column (3 Paragraphs):**

**Quality Engineering**
Every installation is designed with longevity in mind. We specify components from trusted manufacturers, follow BS 7671 wiring regulations to the letter, and provide comprehensive test documentation. Cable routes are planned to avoid future interference; terminations are mechanically sound and clearly labeled.

**Reliability on Schedule**
We arrive on time, complete within quoted timescales, and communicate proactively if circumstances change. Our 98.7% on-time completion rate reflects robust project planning and buffer time for unforeseen site conditions. You'll receive a daily briefing on progress and next steps.

**Safety Without Compromise**
All installations undergo dead and live testing before energization. We isolate circuits safely, follow lock-off procedures, and never skip earthing checks. Our NICEIC certification is audited annually, ensuring that our standards remain current and our team stays trained on the latest safety protocols.

**Right Column (5 Stat Chips):**

1. **98.7%** on-time completion
   _Based on 200+ jobs completed in past 12 months_

2. **4.98★** average rating
   _From 200+ recent verified installations_

3. **5-year** workmanship warranty
   _Covering labor and installation quality_

4. **24/7** emergency coverage
   _Round-the-clock electrical response_

5. **OZEV** grant assistance
   _Help navigating EV charger funding_

---

### Case Studies (2 Editorial Examples)

#### Case Study 1: EV Fleet for Riverside HQ

**Title:** EV Fleet Charging for Riverside Office HQ
**Location:** Canary Wharf, London E14
**Client:** Commercial property management

**Scope:**
- 12 × 7kW EV charging points across underground car park
- Load management system to prevent grid overload
- Network integration for usage tracking and billing
- Cable routing through existing trunking to minimize visual impact
- Coordination with building services during nights and weekends

**Outcomes:**
- Completed in 8 days (2 days ahead of schedule)
- Zero downtime to building power systems
- Load balanced to avoid demand spikes
- Usage dashboard deployed for FM team

**Fact Strip:**
NICEIC Cert #AB12345 • 8 days • £££ cost band • OZEV compliant

**Before/After:**
_Placeholder: 3:2 ratio images showing car park before installation and after with chargers mounted_

**Schematic:**
_Placeholder: 1:1 ratio showing charger placement plan with cable routes_

---

#### Case Study 2: Period Property Rewire with Minimal Disruption

**Title:** Sympathetic Rewire for Listed Georgian Townhouse
**Location:** Chelsea, London SW3
**Client:** Private residential

**Scope:**
- Full rewire across 4 floors while preserving original plasterwork
- Concealed cable routes through existing voids and chimney breasts
- Bespoke brass sockets and switches to match period features
- Consumer unit upgrade with RCD protection and surge protection
- Phased works to allow partial occupancy during project

**Outcomes:**
- 18 days total (staged over 4 weeks)
- Zero damage to listed features
- Electrical Safety Certificate issued
- Owner able to occupy 2 floors throughout works

**Fact Strip:**
NICEIC Cert #CD67890 • 18 days • £££££ cost band • Conservation-approved methods

**Before/After:**
_Placeholder: 3:2 ratio showing original wiring and final installation_

**Schematic:**
_Placeholder: 1:1 showing cable routing plan avoiding listed features_

---

### Process Timeline (6 Steps)

#### 1. Enquiry
- You contact us via phone, form, or instant estimate
- We gather initial scope and arrange site visit within 48 hours
- Same-day slots often available for urgent work

**Checklist (popover):**
- [ ] Preferred contact method confirmed
- [ ] Site visit date and time agreed
- [ ] Access arrangements and parking noted

---

#### 2. Site Visit
- Our engineer assesses your property and requirements
- We measure circuits, check existing installations, identify constraints
- You receive verbal outline of approach and indicative timeline

**Checklist:**
- [ ] Full site survey completed
- [ ] Constraints documented (asbestos, listed building, access)
- [ ] Photos taken for records

---

#### 3. Scoped Estimate
- Detailed written quote with itemized breakdown
- Clarification of what's included (testing, certification, cleanup)
- Fixed price with no hidden extras

**Checklist:**
- [ ] Quote sent within 24 hours of site visit
- [ ] Materials specification listed
- [ ] Payment terms and schedule outlined

---

#### 4. Works
- Installation begins on agreed date
- Daily progress briefings and site kept tidy
- Any variations discussed and documented before proceeding

**Checklist:**
- [ ] Safe isolation and lock-off procedures
- [ ] Cable routes marked and approved
- [ ] Daily cleanup and dust sheet removal

---

#### 5. QA & Certification
- Dead and live testing on all circuits
- Certification to BS 7671 or relevant standard
- Photographic handover pack showing key terminations

**Checklist:**
- [ ] Insulation resistance tests completed
- [ ] Earth continuity verified
- [ ] Certificates signed and handed over

---

#### 6. Aftercare
- 5-year workmanship warranty
- Manufacturer warranties facilitated
- Annual inspection plans available if required

**Checklist:**
- [ ] Warranty documents provided
- [ ] Emergency contact details shared
- [ ] Maintenance schedule recommended

---

### Safety & Compliance (4 Cards)

#### 1. Electrical (BS 7671)

**Standards:**
- BS 7671:2018+A2:2022 (18th Edition IET Wiring Regulations)
- Electrical Installation Certificate upon completion
- Periodic Inspection & Testing available

**What you receive:**
- Electrical Installation Certificate (EIC)
- Schedule of Test Results
- Photographic record of key terminations
- 5-year workmanship warranty

**CTA:** View sample certificate →

---

#### 2. Fire (BS 5839)

**Standards:**
- BS 5839-1:2017 (Fire detection and alarm systems)
- Commissioning certificate
- Quarterly and annual testing schedules

**What you receive:**
- Fire Alarm Commissioning Certificate
- System log book and maintenance schedule
- As-installed drawings
- User training and handover

**CTA:** View sample certificate →

---

#### 3. CCTV (BS EN 50132)

**Standards:**
- BS EN 50132 (Alarm systems — CCTV surveillance)
- Data protection guidance (ICO compliance)
- Network security hardening

**What you receive:**
- System commissioning certificate
- Camera placement plan
- Access credentials and user guide
- GDPR-compliant signage

**CTA:** View sample certificate →

---

#### 4. Data & Privacy

**Standards:**
- GDPR compliance for customer records
- ISO 27001 information security practices
- Encrypted client communications

**What you receive:**
- Privacy notice and data handling policy
- Secure document sharing portal
- No third-party data sharing without consent

**CTA:** View privacy policy →

---

### Sectors We Serve (3 Modules)

#### 1. Residential

**Icon:** Home
**Description:**
Domestic electrical work delivered with minimal disruption and spotless handover. We protect floors and furnishings, communicate daily with homeowners, and complete installations within tight schedules.

**Bullets:**
- Rewiring with concealed cable routes
- Consumer unit upgrades to 18th Edition
- EV chargers with clean cable management

**Placeholder Image:** 4:3 ratio — modern kitchen with discreet sockets

---

#### 2. Commercial

**Icon:** Building
**Description:**
Schedule-certain installations for offices, retail, and hospitality. We coordinate with your facilities team, work out-of-hours if required, and provide comprehensive O&M manuals.

**Bullets:**
- Office fit-outs with structured cabling
- Retail lighting and power distribution
- Access control and CCTV integration

**Placeholder Image:** 4:3 ratio — modern office with clean cable tray

---

#### 3. Industrial

**Icon:** Factory
**Description:**
Heavy-duty installations with compliance documentation and safety audits. We work to permit-to-work systems, liaise with HSE requirements, and deliver robust solutions.

**Bullets:**
- Three-phase power distribution
- Motor control panels and VFDs
- Emergency lighting and fire alarm systems

**Placeholder Image:** 4:3 ratio — industrial panel with labeled circuits

---

### Guarantee & Aftercare

**Three Pillars:**

#### 1. 5-Year Workmanship Warranty
All labor and installation quality covered for five years from completion. If an issue arises due to our workmanship, we'll return and fix it at no charge.

#### 2. Manufacturer Warranties Handled
We coordinate manufacturer warranties on components (e.g., EV chargers, fire panels) and provide all documentation needed for claims.

#### 3. Annual Checks Available
Optional inspection plans for periodic testing, PAT testing, and emergency lighting checks. Schedule set to your compliance calendar.

**Checklist UI (toggle to show):**
"What you'll receive on completion"
- [ ] Electrical Installation Certificate (EIC) or Minor Works Certificate
- [ ] Schedule of Test Results with insulation resistance and earth loop readings
- [ ] Photographic handover pack (key terminations, panel labels, cable routes)
- [ ] Warranty documentation for all installed equipment
- [ ] User guide and emergency contact details

---

### FAQ (10 Items)

#### 1. How quickly can you attend?

Same-day site visits are often available for non-emergency work. For emergencies (power outages, dangerous faults), we aim to respond within 60 minutes in central London, 90 minutes in wider South East. Call 020 XXXX XXXX for emergency dispatch.

---

#### 2. Do you provide certification?

Yes — all installations are certified to the relevant standards (BS 7671 for electrical, BS 5839 for fire alarms, etc.). You receive the original certificate, test results, and photographic records at handover. Copies are also kept on file for your future reference.

---

#### 3. How do you calculate pricing?

We provide fixed-price quotes after a site visit. The quote itemizes labor, materials, testing, and certification. No hidden call-out fees or hourly rate surprises. If scope changes during the job, we discuss and document any variation before proceeding.

---

#### 4. What about cleanup and tidiness?

We protect floors with dust sheets, remove debris daily, and leave the site tidy at the end of each day. On completion, we vacuum and wipe down areas we've worked in. Our goal is for you to barely notice we were there (aside from the excellent new installation).

---

#### 5. Is your work insured?

Yes — we carry £10 million public liability insurance and £5 million professional indemnity insurance. You'll receive proof of cover on request, and our NICEIC certification provides additional consumer protection.

---

#### 6. Can you help with OZEV grants for EV chargers?

Absolutely. We're OZEV-approved installers and can guide you through the grant application process. We'll confirm your eligibility, complete the necessary paperwork, and ensure your installation meets all grant conditions.

---

#### 7. What's your warranty on workmanship?

We provide a 5-year workmanship warranty on all installations. If an issue arises due to our labor or installation quality, we'll return and fix it at no charge. Manufacturer warranties on equipment (e.g., chargers, panels) are separate and facilitated by us.

---

#### 8. Do you work evenings and weekends?

Yes, for commercial and industrial clients we can schedule works out-of-hours to avoid disrupting your operations. Weekend and evening rates apply. Residential clients are typically served Monday–Friday 7AM–6PM, with Saturday appointments available.

---

#### 9. How far do you travel?

We cover London and the South East, including Surrey, Kent, Essex, Hertfordshire, and Buckinghamshire. For projects outside this area, contact us to discuss feasibility — we occasionally take on larger commercial projects further afield.

---

#### 10. What if I need changes after you've started?

If you want to add sockets, change cable routes, or adjust scope mid-project, just let us know. We'll provide a variation quote for the additional work and update the schedule. We never proceed with changes until you've approved the revised cost and timeline.

---

### CTA Band (Pre-Footer)

**Headline:**
Precision electrical work. Transparent pricing. Uncompromising safety.

**Subline:**
Same-day slots often available.

**Buttons:**
- Book a Site Visit (primary gradient button)
- Get Instant Estimate (outline button)

---

### Footer

**Columns:**

#### Services
- Electrical Installations
- EV Chargers
- CCTV & Access Control
- Fire Alarm Systems
- Plumbing & Heating
- Facilities Maintenance
- 24/7 Emergency

#### Sectors
- Residential
- Commercial
- Industrial

#### Company
- About ElectroMain
- Case Studies
- How We Work
- Careers
- Blog

#### Compliance
- Safety & Standards
- NICEIC Certification
- Privacy Policy
- Terms & Conditions

#### Contact
**Address:**
ElectroMain Ltd
123 High Street
London SE1 1AA
United Kingdom

**Phone:** 020 XXXX XXXX
**Email:** hello@electromain.co.uk
**Hours:** Mon-Fri 7AM-8PM, Sat 8AM-6PM, 24/7 Emergency

**Company Number:** 12345678
**VAT Number:** GB123456789

**Service Area Map:** _Placeholder: 21:9 ratio showing London & South East coverage_

**Mini Accreditation Strip:**
_8 grayscale logos (same as Trust Band)_

**Legal Links:**
Privacy Policy | Terms & Conditions | Cookie Policy | Complaints Procedure

**Copyright:**
© 2025 ElectroMain Ltd. All rights reserved.

---

## 📊 ANALYTICS & EVENTS {#analytics}

### Event Definitions

```javascript
// Estimate interactions
window.dataLayer.push({
  event: 'estimate_change',
  service: 'Electrical',
  urgency: 'Flexible',
  property: 'Home',
  low: 153,
  high: 225
});

window.dataLayer.push({
  event: 'estimate_submit',
  service: 'Electrical',
  urgency: 'Flexible',
  property: 'Home',
  low: 153,
  high: 225,
  contact_provided: true
});

// CTA clicks
window.dataLayer.push({
  event: 'book_visit_click',
  location: 'header', // or 'estimate_panel', 'cta_band', 'service_card'
  label: 'Book a Site Visit'
});

// FAQ interactions
window.dataLayer.push({
  event: 'faq_expand',
  question_id: 'faq-1',
  question: 'How quickly can you attend?'
});

// Service card clicks
window.dataLayer.push({
  event: 'service_card_click',
  service: 'EV Chargers',
  location: 'services_grid'
});

// Case study views
window.dataLayer.push({
  event: 'case_study_view',
  title: 'EV Fleet for Riverside HQ',
  scroll_depth: 75 // percentage
});

// Form submissions
window.dataLayer.push({
  event: 'form_submit',
  form_type: 'exact_quote',
  service: 'Electrical',
  estimate_range: '£153-£225'
});
```

### Funnel

1. **Landing** → page view
2. **Estimate Interaction** → `estimate_change` event
3. **Submit** → `estimate_submit` event
4. **Book Visit** → `book_visit_click` event
5. **Conversion** → `form_submit` event

---

## 🔍 SEO & SCHEMA {#seo}

### Homepage Meta Tags

```html
<title>ElectroMain — Precision Electrical Services London & South East</title>
<meta name="description" content="NICEIC-certified electrical installations, EV chargers, CCTV, fire alarms. 98.7% on-time completion. Same-day appointments available.">
<link rel="canonical" href="https://electromain.co.uk/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="ElectroMain — Precision Electrical Services">
<meta property="og:description" content="NICEIC-certified electrical installations with 98.7% on-time completion.">
<meta property="og:image" content="https://electromain.co.uk/og-image.jpg">
<meta property="og:url" content="https://electromain.co.uk/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ElectroMain — Precision Electrical Services">
<meta name="twitter:description" content="NICEIC-certified electrical installations with 98.7% on-time completion.">
<meta name="twitter:image" content="https://electromain.co.uk/og-image.jpg">
```

### Schema JSON-LD Examples

#### LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "name": "ElectroMain Ltd",
  "image": "https://electromain.co.uk/logo.jpg",
  "telephone": "+44-20-XXXX-XXXX",
  "email": "hello@electromain.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 High Street",
    "addressLocality": "London",
    "postalCode": "SE1 1AA",
    "addressCountry": "GB"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "London"
    },
    {
      "@type": "AdministrativeArea",
      "name": "South East England"
    }
  ],
  "priceRange": "££-£££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Electrical Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrical Installation",
          "description": "NICEIC-certified electrical installations to BS 7671"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "EV Charger Installation",
          "description": "OZEV-approved EV charging point installation"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.98",
    "reviewCount": "200"
  }
}
```

#### Service (per category page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "EV Charger Installation",
  "provider": {
    "@type": "ElectricalContractor",
    "name": "ElectroMain Ltd"
  },
  "areaServed": {
    "@type": "City",
    "name": "London"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "EV Charger Models",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "7kW Home EV Charger"
        }
      }
    ]
  }
}
```

#### FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can you attend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Same-day site visits are often available for non-emergency work. For emergencies (power outages, dangerous faults), we aim to respond within 60 minutes in central London, 90 minutes in wider South East."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — all installations are certified to the relevant standards (BS 7671 for electrical, BS 5839 for fire alarms, etc.). You receive the original certificate, test results, and photographic records at handover."
      }
    },
    {
      "@type": "Question",
      "name": "How do you calculate pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide fixed-price quotes after a site visit. The quote itemizes labor, materials, testing, and certification. No hidden call-out fees or hourly rate surprises."
      }
    },
    {
      "@type": "Question",
      "name": "What about cleanup and tidiness?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We protect floors with dust sheets, remove debris daily, and leave the site tidy at the end of each day. On completion, we vacuum and wipe down areas we've worked in."
      }
    },
    {
      "@type": "Question",
      "name": "Is your work insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we carry £10 million public liability insurance and £5 million professional indemnity insurance. Our NICEIC certification provides additional consumer protection."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with OZEV grants for EV chargers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We're OZEV-approved installers and can guide you through the grant application process. We'll confirm your eligibility, complete the necessary paperwork, and ensure your installation meets all grant conditions."
      }
    },
    {
      "@type": "Question",
      "name": "What's your warranty on workmanship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide a 5-year workmanship warranty on all installations. If an issue arises due to our labor or installation quality, we'll return and fix it at no charge."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work evenings and weekends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for commercial and industrial clients we can schedule works out-of-hours to avoid disrupting your operations. Residential clients are typically served Monday–Friday 7AM–6PM, with Saturday appointments available."
      }
    },
    {
      "@type": "Question",
      "name": "How far do you travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover London and the South East, including Surrey, Kent, Essex, Hertfordshire, and Buckinghamshire."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need changes after you've started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you want to add sockets, change cable routes, or adjust scope mid-project, just let us know. We'll provide a variation quote for the additional work and update the schedule."
      }
    }
  ]
}
```

#### WebSite + SearchAction

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ElectroMain",
  "url": "https://electromain.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://electromain.co.uk/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

## ♿ ACCESSIBILITY & PERFORMANCE QA {#qa}

### Accessibility Checklist

✅ **Color Contrast:**
- All text meets AA contrast (4.5:1 for body, 3:1 for large text)
- No white-on-white or black-on-black text
- Error states use neutral backgrounds with amber accents (no red)

✅ **Focus States:**
- Visible 2px focus rings on all interactive elements
- Focus ring color: `brand-600` with 2px offset
- Tab order follows visual flow

✅ **Touch Targets:**
- Minimum 44×44px on all buttons and links
- Mobile nav has 48px minimum height

✅ **ARIA:**
- Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Accordions use `aria-expanded` and `aria-controls`
- Modals use `aria-modal` and `role="dialog"`
- Form inputs have associated `<label>` elements

✅ **Keyboard Navigation:**
- All interactive elements reachable via Tab
- Escape closes modals and dropdowns
- Enter/Space activates buttons

✅ **Screen Readers:**
- Meaningful alt text on all images
- Helper text announced with `aria-describedby`
- Loading states announced with `aria-live="polite"`

✅ **Motion:**
- `prefers-reduced-motion`: Disable parallax, sweeps, letter-by-letter reveals
- Provide instant state changes instead of transitions

---

### Performance Checklist

✅ **Core Web Vitals (Target):**
- **LCP:** ≤ 2.5s (mid-range mobile)
- **CLS:** < 0.1
- **TTI:** < 3s

✅ **Optimizations:**
- Lazy load images below the fold
- Reserve aspect ratios on all placeholders (prevents CLS)
- Preload critical fonts with `font-display: swap`
- Minimize layout shifts on accordion open/close
- Throttle scroll events to maintain >50 FPS

✅ **Images:**
- All placeholders have width/height or aspect-ratio
- Use WebP with JPG fallback
- Responsive srcset for different viewports

✅ **JavaScript:**
- Code split by route
- Defer non-critical analytics scripts
- Monitor bundle size (target <200KB gzipped)

---

## 📁 FILE STRUCTURE {#files}

```
electromain-main/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── UtilityBar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── TrustBand.tsx
│   │   │   ├── ServicesGrid.tsx (7 cards)
│   │   │   ├── WhyElectroMain.tsx (proof deck + stats)
│   │   │   ├── CaseStudies.tsx (2 editorial)
│   │   │   ├── ProcessTimeline.tsx (6 steps)
│   │   │   ├── Compliance.tsx (4 cards)
│   │   │   ├── Sectors.tsx (3 modules)
│   │   │   ├── Guarantee.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── CTABand.tsx
│   │   ├── estimate/
│   │   │   └── InstantEstimate.tsx (seeded logic)
│   │   ├── common/
│   │   │   ├── PlaceholderMedia.tsx
│   │   │   ├── StatChip.tsx
│   │   │   ├── Accordion.tsx
│   │   │   └── Button.tsx
│   │   └── forms/
│   │       ├── BookingModal.tsx
│   │       └── QuoteForm.tsx
│   ├── lib/
│   │   ├── analytics.ts (event helpers)
│   │   ├── estimateLogic.ts (seeded random)
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css (custom utilities)
│   ├── pages/ (or app/)
│   │   ├── index.tsx (homepage)
│   │   ├── services/
│   │   │   ├── electrical.tsx
│   │   │   ├── ev-chargers.tsx
│   │   │   ├── cctv.tsx
│   │   │   ├── fire-alarms.tsx
│   │   │   ├── plumbing-heating.tsx
│   │   │   ├── facilities.tsx
│   │   │   └── emergency.tsx
│   │   ├── sectors/
│   │   │   ├── residential.tsx
│   │   │   ├── commercial.tsx
│   │   │   └── industrial.tsx
│   │   ├── case-studies.tsx
│   │   ├── process.tsx
│   │   ├── compliance.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   └── faq.tsx
│   └── data/
│       ├── services.ts
│       ├── faqs.ts
│       └── caseStudies.ts
├── public/
│   ├── logos/ (accreditation logos)
│   └── images/
├── tailwind.config.js
├── package.json
└── REBUILD_MASTER_GUIDE.md (this file)
```

---

## ✅ IMPLEMENTATION CHECKLIST {#checklist}

### Phase 1: Foundation & Design System

- [ ] Install dependencies: `framer-motion`, Tailwind plugins
- [ ] Configure Tailwind with design tokens (colors, shadows, typography)
- [ ] Create utility classes (keyline, noise, sweep)
- [ ] Set up motion variant objects in `lib/motionVariants.ts`
- [ ] Create PlaceholderMedia component with aspect ratio utilities

### Phase 2: Layout & Navigation

- [ ] Build UtilityBar component
- [ ] Build Header with sticky behavior and gradient keyline
- [ ] Build Footer with multi-column layout and accreditation strip
- [ ] Implement focus states and keyboard navigation
- [ ] Add analytics events to header CTAs

### Phase 3: Core Sections

- [ ] Trust/Accreditations Band with staggered logo animation
- [ ] Instant Estimate component with seeded random logic
- [ ] 7 Signature Services cards with copy and placeholders
- [ ] Why ElectroMain proof deck with animated stat chips
- [ ] CTA Band with slide-up animation

### Phase 4: Editorial Content

- [ ] Write and layout 2 Case Studies
- [ ] Create before/after slider scaffold
- [ ] Process Timeline with sticky progress spine
- [ ] Safety & Compliance 4-card layout
- [ ] 3 Sectors modules with parallax images

### Phase 5: Forms & Interactions

- [ ] Guarantee & Aftercare with checklist toggle
- [ ] FAQ accordion with 10 items
- [ ] Booking Modal with form validation
- [ ] Quote Form with success states
- [ ] Implement all analytics events

### Phase 6: SEO & Schema

- [ ] Add meta tags to all pages
- [ ] Implement LocalBusiness schema
- [ ] Add Service schema per category page
- [ ] Add FAQPage schema
- [ ] Add WebSite + SearchAction schema
- [ ] Test with Google Rich Results Test

### Phase 7: Motion & Polish

- [ ] Apply motion variants section-by-section
- [ ] Implement sweep effect on service cards
- [ ] Animate stat counters with spring
- [ ] Add scroll-triggered reveals
- [ ] Test `prefers-reduced-motion` fallbacks

### Phase 8: QA & Testing

- [ ] Accessibility audit (axe DevTools)
- [ ] Keyboard navigation test
- [ ] Focus state visibility check
- [ ] Color contrast verification (AA minimum)
- [ ] Performance audit (Lighthouse)
- [ ] Test on mid-range mobile device
- [ ] Cross-browser check (Chrome, Safari, Firefox, Edge)
- [ ] Print stylesheet test

---

## 🚀 NEXT STEPS

1. **Review this guide** with your team
2. **Prioritize sections** for MVP (suggest: Header, Estimate, Services, FAQ, Footer first)
3. **Create components** systematically following the file structure
4. **Test incrementally** (don't wait until everything's built)
5. **Deploy to staging** for client review
6. **Iterate** based on feedback and analytics

---

## 📞 SUPPORT & QUESTIONS

If you have questions during implementation:
- Reference this guide's section numbers
- Check the component specifications for exact copy and behavior
- Use the analytics event examples for tracking setup
- Refer to the design tokens for colors/spacing

**Good luck building the new ElectroMain!** 🔌⚡

