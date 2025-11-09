import React from "react";
import { motion } from "framer-motion";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { LuxuryHeader } from "@/components/layout/LuxuryHeader";
import { TrustBand } from "@/components/sections/TrustBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ElectricalHero } from "@/components/ui/electrical-hero";
import ProjectsShowcase from "@/components/projects-showcase";
import EstimateCalculator from "@/components/estimate-calculator";
import AIQuoteForm from "@/components/ai-quote-form";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Mail, Phone, MapPin } from "lucide-react";

export default function App() {
  const timelineData = [
    {
      title: "2015",
      content: (
        <p className="text-muted">
          ElectroMain was founded in London with a commitment to delivering high-quality residential electrical installations.
        </p>
      ),
    },
    {
      title: "2017",
      content: (
        <p className="text-muted">
          Achieved full certification and accreditation. Expanded our team to 12 qualified electricians serving the Greater London area.
        </p>
      ),
    },
    {
      title: "2019",
      content: (
        <p className="text-muted">
          Launched our commercial services division, completing major projects for offices, retail spaces, and restaurants.
        </p>
      ),
    },
    {
      title: "2021",
      content: (
        <p className="text-muted">
          Introduced smart home automation services and EV charging station installations in response to growing demand.
        </p>
      ),
    },
    {
      title: "2023",
      content: (
        <p className="text-muted">
          Expanded to cover the South East region. Completed over 500 residential and 100 commercial projects to date.
        </p>
      ),
    },
    {
      title: "2024",
      content: (
        <p className="text-muted">
          Launched ElectroMain Pro — our premium division specializing in luxury residential and high-end commercial electrical design.
        </p>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      designation: "Homeowner, Hampstead",
      quote: "We needed our entire house rewired and ElectroMain handled it brilliantly. They were professional, tidy, and finished on schedule. The quality of work is outstanding and they explained everything clearly throughout the process.",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
    },
    {
      name: "David Thompson",
      designation: "Restaurant Owner, Soho",
      quote: "ElectroMain installed all the electrical systems for my new restaurant. Their commercial team understood our specific requirements and delivered a safe, efficient installation that passed inspection first time. Highly recommend for any business.",
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600",
    },
    {
      name: "Rachel Green",
      designation: "Property Manager, Kensington",
      quote: "I manage 15 properties and ElectroMain is our go-to for all electrical work. From simple socket installations to full consumer unit upgrades, they always deliver quality work at fair prices. Fast response times too.",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600",
    },
  ];

  return (
    <>
      <UtilityBar />
      <LuxuryHeader />

      <ElectricalHero
        title="PREMIUM ELECTRICAL SERVICES"
        description="Delivering exceptional electrical installations and solutions across London and the South East with uncompromising quality and craftsmanship."
        primaryAction={{
          label: "GET ESTIMATE",
          onClick: () => document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" }),
        }}
        secondaryAction={{
          label: "VIEW PROJECTS",
          onClick: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),
        }}
      />

      <TrustBand />

      <div id="projects">
        <ProjectsShowcase />
      </div>

      <div id="estimate">
        <EstimateCalculator />
      </div>

      <ServicesGrid />

      <AIQuoteForm />

      <div id="timeline">
        <Timeline data={timelineData} />
      </div>

      <div id="testimonials">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      <div id="contact" className="relative py-24 bg-gradient-to-br from-white via-light-bg to-white overflow-hidden border-t border-border">
        <div className="absolute inset-0 circuit-pattern opacity-5" />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display tracking-tight">
              <span className="electrical-gradient bg-clip-text text-transparent">Get In</span>
              <span className="text-secondary"> Touch</span>
            </h2>
            <p className="text-muted text-lg">Ready to start your electrical project? Contact us today for a free consultation.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-luxury p-8 md:p-12 border border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-secondary bg-white"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-secondary bg-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-secondary bg-white"
                    placeholder="+44 20 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-secondary mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-secondary bg-white"
                  >
                    <option>Residential Wiring</option>
                    <option>Commercial Installation</option>
                    <option>Smart Home Automation</option>
                    <option>EV Charger Installation</option>
                    <option>Electrical Inspection</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-secondary bg-white resize-none"
                  placeholder="Please describe your project requirements..."
                  required
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Mail className="w-4 h-4" />
                  <span>info@electromain.co.uk</span>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="electrical-gradient text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 uppercase tracking-wider text-sm relative group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </motion.button>
              </div>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
              <Phone className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-secondary mb-1">Phone</h3>
              <p className="text-sm text-muted">+44 20 1234 5678</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
              <Mail className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-secondary mb-1">Email</h3>
              <p className="text-sm text-muted">info@electromain.co.uk</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-border shadow-sm">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-secondary mb-1">Location</h3>
              <p className="text-sm text-muted">London, United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
