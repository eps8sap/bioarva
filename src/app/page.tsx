"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import {
  SeedIcon,
  WormIcon,
  SoilIcon,
  CompostIcon,
  ToolsIcon,
  LearnIcon,
  ArrowRightIcon,
  CheckIcon,
  CalculatorIcon,
  CalendarIcon,
  FlaskIcon,
  MicroscopeIcon,
} from "@/components/ui/Icons";

const categories = [
  {
    name: "Seeds",
    description: "Heirloom organic seeds",
    href: "/shop/seeds",
    Icon: SeedIcon,
  },
  {
    name: "Worms & Biology",
    description: "Living soil organisms",
    href: "/shop/live-organisms",
    Icon: WormIcon,
  },
  {
    name: "Soil Amendments",
    description: "Build living soil",
    href: "/shop/soil-amendments",
    Icon: SoilIcon,
  },
  {
    name: "Composting",
    description: "Systems & equipment",
    href: "/shop/composting",
    Icon: CompostIcon,
  },
  {
    name: "Tools & Tech",
    description: "Test, grow, harvest",
    href: "/shop/tools",
    Icon: ToolsIcon,
  },
  {
    name: "Learn",
    description: "Soil science guides",
    href: "/learn",
    Icon: LearnIcon,
  },
];

const brassicaCollections = [
  {
    name: "Complete Kale Collection",
    description: "25+ heirloom kale varieties from around the world",
    href: "/shop/collections",
  },
  {
    name: "Heritage Cabbage Set",
    description: "Savoy, red, green, and napa varieties",
    href: "/shop/collections",
  },
  {
    name: "Asian Brassica Explorer",
    description: "Bok choy, mizuna, tatsoi, gai lan",
    href: "/shop/collections",
  },
];

const healthTopics = [
  {
    title: "Sulforaphane",
    description: "The most powerful cancer-fighting compound in food",
    href: "/learn/health-healing",
  },
  {
    title: "Gut Health",
    description: "Prebiotic fiber and fermentation benefits",
    href: "/learn/health-healing",
  },
  {
    title: "Anti-Inflammatory",
    description: "Reduce systemic inflammation naturally",
    href: "/learn/health-healing",
  },
  {
    title: "Detoxification",
    description: "Support your body's natural cleansing",
    href: "/learn/health-healing",
  },
];

const calculators = [
  {
    title: "Planting Calculator",
    description: "Garden dimensions + zone → shopping list",
    Icon: CalculatorIcon,
    href: "/tools/planting-calculator",
  },
  {
    title: "Seasonal Planner",
    description: "Zone-specific planting calendar",
    Icon: CalendarIcon,
    href: "/tools/seasonal-planner",
  },
  {
    title: "Soil Health Quiz",
    description: "Is your soil alive? Get your score",
    Icon: FlaskIcon,
    href: "/tools/soil-health-quiz",
  },
  {
    title: "Compost Recipe Builder",
    description: "Calculate your C:N ratio",
    Icon: MicroscopeIcon,
    href: "/tools/compost-recipe-builder",
  },
];

const consultingServices = [
  {
    title: "Soil Testing",
    description: "Comprehensive biological soil analysis",
    href: "/consulting/soil-testing",
  },
  {
    title: "Biological Analysis",
    description: "Microscopy-based soil biology assessment",
    href: "/consulting/biological-analysis",
  },
  {
    title: "Regenerative Consulting",
    description: "Farm and garden restoration plans",
    href: "/consulting/regenerative-consulting",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Section 1: Hero - MASSIVE typography, cinematic */}
      <section className="relative min-h-screen flex items-center justify-center bg-deep-forest overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-deep-forest via-deep-forest to-living-green/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-living-green/20 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.p
            className="text-mycelium-gold/80 text-xs tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Organic Soil Science & Heritage Seeds
          </motion.p>

          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold text-bone-white leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Where Living Soil
            <br />
            Meets{" "}
            <span className="text-mycelium-gold italic">Heritage Seeds.</span>
          </motion.h1>

          <motion.p
            className="font-body text-lg md:text-xl text-bone-white/60 max-w-xl mx-auto mt-10 mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Soil science, organic heirloom seeds, and regenerative tools — together in one place.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link
              href="/shop"
              className="group px-10 py-4 bg-mycelium-gold text-deep-forest font-body font-semibold transition-all hover:bg-bone-white hover:scale-[1.02]"
            >
              Shop Now
              <ArrowRightIcon className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/learn/soil-food-web"
              className="px-10 py-4 border border-bone-white/30 text-bone-white font-body font-medium transition-all hover:bg-bone-white/10 hover:border-bone-white/50"
            >
              Learn the Science
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border border-bone-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 bg-bone-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Category Navigation - No borders, shadows only */}
      <section className="py-24 md:py-32 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" staggerDelay={0.08}>
            {categories.map((category) => (
              <StaggerItem key={category.name}>
                <Link
                  href={category.href}
                  className="group block p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <category.Icon className="w-8 h-8 text-living-green mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="font-body font-semibold text-deep-forest group-hover:text-living-green transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-root-brown/70 mt-1">{category.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 3: Featured Brassica Seeds - Editorial typography */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-living-green mb-4">
              Our Specialty
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-deep-forest leading-[0.95] max-w-4xl">
              America&apos;s Most Complete
              <br />
              <span className="text-living-green">Organic Heirloom</span> Brassica Collection
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-root-brown/80 font-body text-lg mt-8 max-w-2xl">
              Over 200 varieties of kale, cabbage, broccoli, cauliflower, and more —
              sourced from heritage seed banks and organic growers worldwide.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-16" staggerDelay={0.1}>
            {brassicaCollections.map((collection) => (
              <StaggerItem key={collection.name}>
                <Link
                  href={collection.href}
                  className="group block p-10 bg-gradient-to-br from-living-green/5 to-deep-forest/5 hover:from-living-green/10 hover:to-deep-forest/10 transition-all duration-500"
                >
                  <h3 className="font-display text-2xl font-bold text-deep-forest mb-3 group-hover:text-living-green transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-root-brown/70 font-body">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center mt-6 text-living-green font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    Shop Collection
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3} className="mt-16">
            <Link
              href="/shop/seeds/brassicas"
              className="inline-block px-10 py-4 bg-deep-forest text-bone-white font-body font-semibold transition-all hover:bg-living-green"
            >
              Explore All Brassicas
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Dirt vs. Soil - Split screen editorial */}
      <section className="py-24 md:py-40 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs tracking-[0.3em] uppercase text-mycelium-gold mb-4">
                The Foundation
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-forest leading-[0.95]">
                Dirt vs. Soil
              </h2>
              <p className="font-display text-2xl md:text-3xl text-root-brown/60 mt-2 italic">
                The difference changes everything.
              </p>

              <div className="mt-10 space-y-6">
                <p className="text-root-brown font-body leading-relaxed">
                  <strong className="text-deep-forest">Dirt is dead.</strong> Compacted, depleted, lifeless mineral particles that require constant chemical inputs.
                </p>
                <p className="text-root-brown font-body leading-relaxed">
                  <strong className="text-deep-forest">Soil is alive.</strong> A thriving ecosystem of bacteria, fungi, protozoa, nematodes, and earthworms that feeds your plants naturally.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/learn/soil-food-web"
                  className="px-8 py-4 bg-deep-forest text-bone-white font-body font-semibold transition-all hover:bg-living-green"
                >
                  Learn Soil Science
                </Link>
                <Link
                  href="/shop/tools/soil-testing"
                  className="px-8 py-4 border border-deep-forest text-deep-forest font-body font-medium transition-all hover:bg-deep-forest hover:text-bone-white"
                >
                  Test Your Soil
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-square bg-deep-forest/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-living-green/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MicroscopeIcon className="w-32 h-32 text-deep-forest/20" />
                </div>
                <p className="absolute bottom-6 left-6 text-sm text-root-brown/50 font-body">
                  Microscopy imagery coming soon
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 5: Living Soil Ecosystem - Full bleed, dramatic */}
      <section className="py-32 md:py-48 bg-deep-forest text-bone-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
              The Living Soil Ecosystem
            </h2>
            <p className="font-body text-bone-white/50 max-w-2xl mx-auto mt-8 text-lg">
              Everything connects. Seeds grow in living soil, built by composting and amendments,
              measured by testing and microscopy.
            </p>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-8 mt-16" staggerDelay={0.1}>
            {[
              { name: "Seeds", Icon: SeedIcon, href: "/shop/seeds" },
              { name: "Living Soil", Icon: SoilIcon, href: "/learn/soil-food-web" },
              { name: "Composting", Icon: CompostIcon, href: "/shop/composting" },
              { name: "Testing", Icon: MicroscopeIcon, href: "/shop/tools/soil-testing" },
              { name: "Tools", Icon: ToolsIcon, href: "/shop/tools" },
            ].map((item, i) => (
              <StaggerItem key={item.name}>
                <Link
                  href={item.href}
                  className="group flex flex-col items-center p-8 hover:bg-living-green/20 transition-colors"
                >
                  <item.Icon className="w-10 h-10 text-mycelium-gold mb-4 group-hover:scale-110 transition-transform" />
                  <span className="font-body font-medium text-sm">{item.name}</span>
                  {i < 4 && (
                    <span className="hidden md:block absolute -right-4 text-living-green/50 text-2xl">
                      →
                    </span>
                  )}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 6: Health & Healing - Clean grid */}
      <section className="py-24 md:py-40 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-living-green mb-4">
              Health & Healing
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-deep-forest leading-[0.95]">
              The Most Powerful
              <br />
              Vegetables on Earth
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-root-brown/80 font-body text-lg mt-6 max-w-2xl">
              Cruciferous vegetables contain unique compounds that support detoxification,
              reduce inflammation, and protect against chronic disease.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-px bg-root-brown/10 mt-16" staggerDelay={0.08}>
            {healthTopics.map((topic) => (
              <StaggerItem key={topic.title}>
                <Link
                  href={topic.href}
                  className="group block p-8 bg-bone-white hover:bg-white transition-colors h-full"
                >
                  <h3 className="font-display text-xl font-bold text-deep-forest mb-3 group-hover:text-living-green transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-root-brown/70 font-body text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 7: Tools & Calculators */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-mycelium-gold mb-4">
              Interactive Tools
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-deep-forest leading-[0.95]">
              Plan Your Garden
              <br />
              with Precision
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-6 mt-16" staggerDelay={0.1}>
            {calculators.map((calc) => (
              <StaggerItem key={calc.title}>
                <Link
                  href={calc.href}
                  className="group block p-8 bg-bone-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <calc.Icon className="w-8 h-8 text-mycelium-gold mb-4" />
                  <h3 className="font-body font-semibold text-deep-forest mb-2 group-hover:text-mycelium-gold transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-root-brown/70 font-body text-sm">
                    {calc.description}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 8: Consulting Services */}
      <section className="py-24 md:py-40 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs tracking-[0.3em] uppercase text-living-green mb-4">
                Expert Guidance
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-forest leading-[0.95]">
                Work Directly
                <br />
                with Our Soil Scientists
              </h2>
              <p className="text-root-brown font-body mt-8 leading-relaxed max-w-md">
                Jon brings decades of experience in the Soil Food Web methodology.
                We help home gardeners and commercial farms build living soil.
              </p>

              <div className="space-y-4 mt-10">
                {consultingServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group flex items-start gap-4 p-5 bg-white shadow-sm hover:shadow-lg transition-all"
                  >
                    <CheckIcon className="w-5 h-5 text-living-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-body font-semibold text-deep-forest group-hover:text-living-green transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-root-brown/70 text-sm mt-1">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/consulting"
                className="inline-block mt-10 px-8 py-4 bg-deep-forest text-bone-white font-body font-semibold transition-all hover:bg-living-green"
              >
                View All Services
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-square bg-deep-forest/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tl from-living-green/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <SoilIcon className="w-32 h-32 text-deep-forest/20" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 9: Founder Story - Full viewport, dramatic */}
      <section className="min-h-screen flex items-center py-32 bg-deep-forest text-bone-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest via-deep-forest to-living-green/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-mycelium-gold/80 mb-12">
              Our Story
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] italic">
              &ldquo;The soil is not just dirt — it&apos;s the foundation of all life.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-bone-white/60 font-body text-xl mt-12 max-w-2xl mx-auto leading-relaxed">
              When we nurture the soil food web, we nurture everything that grows in it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex items-center justify-center gap-4 mt-16">
              <div className="w-16 h-16 bg-living-green/30 flex items-center justify-center">
                <LearnIcon className="w-8 h-8 text-mycelium-gold" />
              </div>
              <div className="text-left">
                <p className="font-body font-semibold">Jon</p>
                <p className="text-bone-white/50 text-sm">Founder, Soil Scientist</p>
              </div>
            </div>

            <p className="text-xs text-bone-white/30 font-body mt-8 tracking-wide">
              Trained in Dr. Elaine Ingham&apos;s Soil Food Web methodology
            </p>

            <Link
              href="/about/our-story"
              className="inline-block mt-12 px-8 py-4 border border-bone-white/30 text-bone-white font-body font-medium transition-all hover:bg-bone-white/10 hover:border-bone-white/50"
            >
              Read Our Story
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
