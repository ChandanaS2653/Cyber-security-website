import { Button } from "@/components/ui/button";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Typewriter } from "@/components/ui/typewriter-text";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { steps } from "./data";

/**
 * How It Works Page
 * Design: Modern Gradient Elegance with Deep Navy
 * 
 * Features:
 * - Step-by-step process visualization
 * - Interactive icons and descriptions
 * - Theme-matched colors and animations
 */

export default function HowItWorks() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  const handleFirstLineComplete = () => {
    setShowSecondLine(true);
  };

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
            <h1 className="text-2xl font-bold">How It Works</h1>
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
        <main className="container max-w-6xl py-12 md:py-16">
          {/* Top Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-foreground mb-4">
              <div className="block">
                <Typewriter 
                  text="Bridge the Gap Between Your Degree and" 
                  speed={100} 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  onComplete={handleFirstLineComplete}
                />
              </div>
              {showSecondLine && (
                <div className="block mt-2">
                  Your <Typewriter 
                    text="First Cyber Job" 
                    speed={100} 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  />
                </div>
              )}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6">
              Most colleges teach you the theory. We give you 6-month roadmap, daily grind, and expert mentorship you need to secure seat in India's booming cybersecurity sector.
            </p>
          </div>

          {/* Title Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow our proven 5-step process to transform from a college graduate to a cybersecurity professional.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 border-t-2 border-dashed border-primary/30 z-0" style={{ width: 'calc(100% - 3rem)' }} />
                  )}

                  {/* Step Card */}
                  <div className="relative z-10 rounded-lg p-2 group h-full flex flex-col">
                    <div className="relative h-full rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm">
                      <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={2}
                        variant="default"
                      />
                      <div className="relative h-full rounded-lg border border-border/50 bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col">
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-accent-foreground z-10">
                          {step.id}
                        </div>

                        {/* Icon */}
                        <div className="flex justify-center mb-4 mt-4">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-primary mb-3 text-center">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed flex-grow">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Problem & Solution Section */}
          <section className="mb-16 space-y-12">
            {/* Problem Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                The 'Entry-Level' Trap
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "You have the degree, but the job descriptions ask for 3 years experience... You aren't underqualified, you're just unguided."
              </p>
            </div>

            {/* Solution Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">
                We've Been There. Now, We're Giving Back 💪
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">📅</span>
                  <span className="text-muted-foreground">The 180-Day Blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">🔒</span>
                  <span className="text-muted-foreground">The 'Tough Questions' Vault</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">💡</span>
                  <span className="text-muted-foreground">Expert Advisory</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center py-12 border-t border-border/50">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of Indian graduates who are building successful cybersecurity careers with our structured approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-smooth shadow-soft text-accent-foreground px-8 py-6 text-base"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/core-values">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base"
                >
                  Explore Core Values
                </Button>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border/50 py-8">
          <div className="container text-center text-muted-foreground text-sm">
            <p className="text-lg md:text-xl font-semibold mb-2 text-foreground">
              100% Free and 100% Driven
            </p>
            <p>
              © 2025 CyberPath. Empowering Indian college graduates in
              cybersecurity.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

