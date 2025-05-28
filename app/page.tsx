"use client";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { SpotterModal } from "@/components/ui/spotter-modal";
import { useState } from "react";
import { UseCases } from "@/components/sections/use-case";
import { DemoShowcase } from "@/components/sections/demo-showcase";
export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <SpotterModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Welcome to Spotter.ai"
        description="AI-powered analytics, reimagined for your workflow."
        primaryAction={{
          label: "Start Free Trial",
          onClick: () => setModalOpen(false),
        }}
        secondaryAction={{
          label: "Learn More",
          onClick: () => window.open("https://www.spotter.com", "_blank"),
        }}
      >
        <div className="text-sm text-gray-500 dark:text-gray-300 mt-2 text-center">
          No credit card required. Cancel anytime.
        </div>
      </SpotterModal>
      <main>
        <DemoShowcase />
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Features />
        
        <UseCases />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      
    </div>
  );
}
