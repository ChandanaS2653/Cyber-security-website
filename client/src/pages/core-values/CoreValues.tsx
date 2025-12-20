import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/hover-effect";
import { FloatingPaths } from "@/components/ui/background-paths";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { coreValues } from "./data";

/**
 * Core Values Page (Page B)
 * Design: Modern Gradient Elegance with Deep Navy
 * 
 * Features:
 * - 8 core value cards in responsive grid
 * - Teal-to-indigo gradient accents
 * - Soft shadows and smooth hover effects
 * - Back to home button with navigation
 */

export default function CoreValues() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background Paths Animation - Full Page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Core Values</h1>
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-primary hover:text-primary"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-7xl py-12 md:py-16">
        {/* Tagline Section - Top */}
        <section className="mb-16 md:mb-24">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Tagline
              </span>
              <WordFadeIn
                words="Clarity. Consistency. Cybersecurity"
                className="text-4xl md:text-5xl font-bold mb-8 whitespace-nowrap text-white"
              />

              <p className="text-xl text-foreground font-semibold mb-4">
                Three principles that define everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <HoverEffect
          items={coreValues.map((value) => ({
            title: value.title,
            description: value.description,
            id: value.id,
          }))}
          className="mb-12"
        />

        {/* Closing paragraph */}
        <div className="max-w-4xl mx-auto text-center py-8 border-t border-border/50">
          <p className="text-base leading-relaxed text-muted-foreground italic">
            "Our values exist to protect learners from confusion, misinformation,
            and wasted effort—while guiding them toward meaningful, sustainable
            cybersecurity careers."
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            - Senior Security Analyst
          </p>
        </div>
      </main>
      </div>
    </div>
  );
}
