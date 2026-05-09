import { Button } from "@/components/ui/button";
import { HyperText } from "@/components/ui/hyper-text";
import { GlowCard } from "@/components/ui/spotlight-card";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { FloatingPaths } from "@/components/ui/background-paths";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

/**
 * Home Page (Page A)
 * Design: Modern Gradient Elegance with Deep Navy
 * 
 * Features:
 * - Sticky navbar with smooth scroll navigation
 * - Hero section with banner image
 * - Scrollable sections: Mission, Promise
 * - CTA button to Core Values page
 * - Smooth scroll animations
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState("mission");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["mission", "promise"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CyberPath
          </h1>

          <div className="hidden md:flex items-center gap-4 md:gap-8">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Home
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/10"
              >
                How It Works
              </Button>
            </Link>
            <Link href="/core-values">
              <Button
                variant="default"
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-smooth"
              >
                Core Values
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Link href="/core-values" className="md:hidden">
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary px-4 py-2"
            >
              Values
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-banner.png')",
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        {/* Content */}
        <div className="relative z-10 container text-center max-w-4xl mx-auto px-2 sm:px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-center">
            <div className="block">Your Path to</div>
            <div className="inline-flex flex-wrap items-center justify-center whitespace-nowrap w-full gap-2">
              <HyperText
                text="Cybersecurity"
                className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold"
                animateOnLoad={true}
              />
              <HyperText
                text="Excellence"
                className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold"
                animateOnLoad={true}
              />
            </div>
          </h2>
          <p className="text-base xs:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Honest guidance, structured learning, and expert mentorship for
            Indian college graduates entering the cybersecurity field.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => scrollToSection("mission")}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-accent-foreground hover:opacity-90 transition-smooth shadow-soft"
            >
              Learn Our Mission
            </button>
            <Link href="/core-values">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore Core Values
              </Button>
            </Link>
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <p className="text-sm xs:text-base md:text-lg text-muted-foreground italic mb-2">
              "The Indian cyber market doesn't just need more people; needs more <span className="text-primary font-semibold">prepared</span> people."
            </p>
            <p className="text-xs xs:text-sm md:text-base text-muted-foreground italic">
              - Senior Security Analyst
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={28} />
        </div>
      </section>

      {/* Mission & Promise Section */}
      <section
        id="mission"
        className="relative py-10 sm:py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background"
      >
        {/* Background Paths Animation */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Mission Section */}
            <div id="mission-card" className="flex flex-col">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Our Mission
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Empowering the Next Generation
                </h3>
              </div>

              <GlowCard
                glowColor="teal"
                customSize={true}
                className="w-full bg-card/80 border-border/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 p-4 sm:p-8 md:p-10 !grid-rows-1 flex-1"
              >
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  "Our mission is to empower Indian college graduates to build
                  successful careers in cybersecurity by providing honest guidance,
                  structured daily learning roadmaps, and free expert mentorship—bridging
                  the gap between education and real-world cyber security careers."
                </p>
              </GlowCard>
            </div>

            {/* Promise Section */}
            <div id="promise-card" className="flex flex-col">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                  Our Promise
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  No Shortcuts. No Fake Promises.
                </h3>
              </div>

              <GlowCard
                glowColor="indigo"
                customSize={true}
                className="w-full bg-card/80 border-border/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 p-4 sm:p-8 md:p-10 !grid-rows-1 flex-1"
              >
                <p className="text-lg leading-relaxed text-muted-foreground italic">
                  "No shortcuts. No fake promises. Just structured learning, real
                  cybersecurity skills, and honest guidance for graduates who are
                  serious about entering the cyber security field.
                </p>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Cloud Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Have a doubt what to learn?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Master the essential tools and technologies used in modern cybersecurity
            </p>
          </div>
          <div className="relative flex size-full max-w-5xl mx-auto items-center justify-center overflow-hidden px-2 sm:px-8 pb-10 sm:pb-16 pt-6 sm:pt-8 min-h-[320px] sm:min-h-[500px]">
            <IconCloud iconSlugs={[
              "splunk",
              "kali",
              "metasploit",
              "wireshark",
              "burpsuite",
              "nmap",
              "owasp",
              "snyk",
              "elastic",
              "qualys",
              "rapid7",
              "tenable",
              "crowdstrike",
              "paloaltonetworks",
              "fortinet",
              "checkpoint",
              "vmware",
              "hashicorp",
              "ansible",
              "terraform",
              "docker",
              "kubernetes",
              "amazonaws",
              "microsoftazure",
              "googlecloud",
              "python",
              "bash",
              "powershell",
              "linux",
              "ubuntu",
              "redhat",
              "debian",
              "git",
              "github",
              "gitlab",
              "jenkins",
              "visualstudiocode",
              "zapier",
              "portswigger",
              "acunetix",
              "nessus",
              "openvas",
              "john",
              "hashcat",
              "aircrack",
              "sqlmap",
              "nikto",
              "hydra",
              "ettercap",
              "beef",
              "shodan",
              "misp",
              "thehive",
              "yara",
              "suricata",
              "snort",
              "pfSense",
              "opnsense",
              "pfsense",
              "proxmox",
              "qemu",
              "virtualbox",
            ]} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-background">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Explore Our Values?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Discover the 8 core values that guide our mission to transform
            cybersecurity education.
          </p>

          <Link href="/core-values">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-smooth shadow-soft text-accent-foreground px-6 py-4 sm:px-8 sm:py-6 text-base"
            >
              Explore Core Values
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-6 sm:py-8">
        <div className="container text-center text-muted-foreground text-xs sm:text-sm">
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-foreground">
            100% Free and 100% Driven
          </p>
          <p>
            © 2025 CyberPath. Empowering Indian college graduates in
            cybersecurity.
          </p>
        </div>
      </footer>
    </div>
  );
}
