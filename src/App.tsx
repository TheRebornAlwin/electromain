import React from "react";
import Navbar from "@/components/navbar";
import { ElectricalHero } from "@/components/ui/electrical-hero";
import EstimateCalculator from "@/components/estimate-calculator";
import AIQuoteForm from "@/components/ai-quote-form";
import ServicesCards from "@/components/services-cards";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PinContainer } from "@/components/ui/3d-pin";
import { Mail, Phone, MapPin } from "lucide-react";

export default function App() {
  const timelineData = [
    {
      title: "2018",
      content: (
        <p className="text-muted-foreground">
          ElectroMain was founded with a mission to modernize electrical contracting through reliability, clarity, and cutting-edge design.
        </p>
      ),
    },
    {
      title: "2020",
      content: (
        <p className="text-muted-foreground">
          Expanded across the UK, introducing precision smart home systems and sustainable energy solutions.
        </p>
      ),
    },
    {
      title: "2024",
      content: (
        <p className="text-muted-foreground">
          Launched ElectroMain Pro — our luxury division focused on architectural and commercial electrical innovation.
        </p>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Charlotte R.",
      designation: "Interior Designer",
      quote: "ElectroMain completely transformed my home's lighting. The craftsmanship and clarity of communication were unmatched.",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
    },
    {
      name: "James P.",
      designation: "Property Developer",
      quote: "Their team exceeded expectations. Every wire, socket, and fixture was placed with care and purpose.",
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600",
    },
    {
      name: "Elena D.",
      designation: "Homeowner",
      quote: "I loved how quickly they provided an estimate — and it was spot on. My go-to electricians for any project.",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600",
    },
  ];

  return (
    <>
      <Navbar />

      <ElectricalHero
        title="PRECISION. POWER. PERFECTION."
        description="High-voltage electrical solutions engineered for the modern era — safe, efficient, and flawlessly executed."
        primaryAction={{
          label: "GET ESTIMATE",
          onClick: () => document.querySelector("#estimate")?.scrollIntoView({ behavior: "smooth" }),
        }}
        secondaryAction={{
          label: "OUR WORK",
          onClick: () => document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" }),
        }}
      />

      <div id="estimate">
        <EstimateCalculator />
      </div>

      <AIQuoteForm />

      <ServicesCards />

      <div id="services">
        <BackgroundPaths title="Luxury Electrical Services" />
      </div>

      <div id="timeline">
        <Timeline data={timelineData} />
      </div>

      <div id="testimonials">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      <div id="contact" className="relative py-40 bg-black overflow-hidden border-t-2 border-accent/30">
        <div className="absolute inset-0 circuit-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-secondary/30" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 font-display tracking-tight">
              <span className="electrical-gradient bg-clip-text text-transparent">HIGH VOLTAGE</span>
              <span className="text-foreground"> CONTACT</span>
            </h2>
            <p className="text-muted-foreground text-lg">Power up your next project with ElectroMain</p>
          </div>

          <div className="flex justify-center">
            <PinContainer title="Contact ElectroMain" href="mailto:info@electromain.co.uk">
              <div className="p-10 w-[24rem] text-center">
                <h3 className="text-3xl font-bold mb-3 font-display tracking-tight">
                  <span className="electrical-gradient bg-clip-text text-transparent">LET'S BUILD</span>
                  <span className="text-foreground"> SOMETHING POWERFUL</span>
                </h3>
                <div className="w-24 h-1 electrical-gradient mx-auto my-6" />
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  Connect with our engineering team for precision quotes, technical consultations, and electrical system design.
                </p>

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-accent/20">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium text-sm">info@electromain.co.uk</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-accent/20">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium text-sm">+44 20 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-accent/20">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium text-sm">London, United Kingdom</span>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-accent/10 rotate-45" />
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-accent/10 -rotate-45" />
      </div>
    </>
  );
}
