import Link from "next/link";

const categories = [
  {
    name: "Seeds",
    icon: "🌱",
    description: "Heirloom organic seeds",
    href: "/shop/seeds",
  },
  {
    name: "Worms & Biology",
    icon: "🪱",
    description: "Living soil organisms",
    href: "/shop/live-organisms",
  },
  {
    name: "Soil Amendments",
    icon: "🧪",
    description: "Build living soil",
    href: "/shop/soil-amendments",
  },
  {
    name: "Composting",
    icon: "🏗️",
    description: "Systems & equipment",
    href: "/shop/composting",
  },
  {
    name: "Tools & Tech",
    icon: "🛠️",
    description: "Test, grow, harvest",
    href: "/shop/tools",
  },
  {
    name: "Learn",
    icon: "📚",
    description: "Soil science guides",
    href: "/learn",
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
    icon: "📐",
    href: "/tools/planting-calculator",
  },
  {
    title: "Seasonal Planner",
    description: "Zone-specific planting calendar",
    icon: "📅",
    href: "/tools/seasonal-planner",
  },
  {
    title: "Soil Health Quiz",
    description: "Is your soil alive? Get your score",
    icon: "🧪",
    href: "/tools/soil-health-quiz",
  },
  {
    title: "Compost Recipe Builder",
    description: "Calculate your C:N ratio",
    icon: "🧮",
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
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-deep-forest overflow-hidden">
        {/* Background gradient overlay for placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-forest via-deep-forest/90 to-living-green/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-bone-white mb-6 leading-tight">
            Where Living Soil Meets
            <br />
            <span className="text-mycelium-gold">Heritage Seeds.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-bone-white/80 max-w-2xl mx-auto mb-10">
            BioArva brings soil science, organic heirloom seeds, and regenerative tools together in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-mycelium-gold text-deep-forest font-body font-semibold rounded-lg hover:bg-mycelium-gold/90 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/learn/soil-food-web"
              className="px-8 py-4 border-2 border-bone-white text-bone-white font-body font-semibold rounded-lg hover:bg-bone-white/10 transition-colors"
            >
              Learn the Science
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Category Navigation Strip */}
      <section className="py-16 md:py-24 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group p-6 bg-white rounded-xl border border-root-brown/10 hover:border-living-green/50 hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="font-body font-semibold text-deep-forest group-hover:text-living-green transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-root-brown mt-1">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Brassica Seeds */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-living-green font-body font-medium mb-2 uppercase tracking-wide text-sm">
              Our Specialty
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-forest mb-4">
              America&apos;s Most Complete Organic
              <br />
              Heirloom Brassica Seed Collection
            </h2>
            <p className="text-root-brown font-body max-w-2xl mx-auto">
              Over 200 varieties of kale, cabbage, broccoli, cauliflower, and more —
              sourced from heritage seed banks and organic growers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {brassicaCollections.map((collection) => (
              <Link
                key={collection.name}
                href={collection.href}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-living-green/10 to-deep-forest/5 p-8 border border-living-green/20 hover:border-living-green/50 transition-all"
              >
                <h3 className="font-display text-xl font-bold text-deep-forest mb-2 group-hover:text-living-green transition-colors">
                  {collection.name}
                </h3>
                <p className="text-root-brown font-body text-sm">
                  {collection.description}
                </p>
                <span className="inline-block mt-4 text-living-green font-medium text-sm group-hover:underline">
                  Shop Collection →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/shop/seeds/brassicas"
              className="inline-block px-8 py-4 bg-deep-forest text-bone-white font-body font-semibold rounded-lg hover:bg-living-green transition-colors"
            >
              Explore All Brassicas
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Dirt vs. Soil */}
      <section className="py-16 md:py-24 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-mycelium-gold font-body font-medium mb-2 uppercase tracking-wide text-sm">
                The Foundation
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-forest mb-6">
                Dirt vs. Soil:
                <br />
                The Difference Changes Everything
              </h2>
              <p className="text-root-brown font-body mb-6 leading-relaxed">
                <strong className="text-soil-dark">Dirt is dead.</strong> Compacted, depleted, lifeless mineral particles that require constant chemical inputs to grow anything.
              </p>
              <p className="text-root-brown font-body mb-8 leading-relaxed">
                <strong className="text-soil-dark">Soil is alive.</strong> A thriving ecosystem of bacteria, fungi, protozoa, nematodes, and earthworms that feeds your plants naturally. Healthy soil grows healthy plants that resist pests and disease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/learn/soil-food-web"
                  className="px-6 py-3 bg-deep-forest text-bone-white font-body font-semibold rounded-lg hover:bg-living-green transition-colors text-center"
                >
                  Learn Soil Science
                </Link>
                <Link
                  href="/shop/tools/soil-testing"
                  className="px-6 py-3 border-2 border-deep-forest text-deep-forest font-body font-semibold rounded-lg hover:bg-deep-forest hover:text-bone-white transition-colors text-center"
                >
                  Test Your Soil
                </Link>
              </div>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-deep-forest/20 to-living-green/20 rounded-2xl flex items-center justify-center">
              <span className="text-6xl opacity-50">🔬</span>
              <p className="absolute bottom-4 text-center text-sm text-root-brown px-4">
                Microscopy image placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Living Soil Ecosystem */}
      <section className="py-16 md:py-24 bg-deep-forest text-bone-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The Living Soil Ecosystem
          </h2>
          <p className="font-body text-bone-white/70 max-w-2xl mx-auto mb-12">
            Everything connects. Seeds grow in living soil, built by composting and amendments,
            measured by testing and microscopy, supported by the right tools and tech.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { name: "Seeds", icon: "🌱", href: "/shop/seeds" },
              { name: "Living Soil", icon: "🌍", href: "/learn/soil-food-web" },
              { name: "Composting", icon: "🪱", href: "/shop/composting" },
              { name: "Testing", icon: "🔬", href: "/shop/tools/soil-testing" },
              { name: "Tools", icon: "🛠️", href: "/shop/tools" },
            ].map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative p-6 rounded-xl bg-living-green/20 hover:bg-living-green/30 transition-colors"
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <span className="font-body font-medium">{item.name}</span>
                {i < 4 && (
                  <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-mycelium-gold text-2xl">
                    →
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Health & Healing */}
      <section className="py-16 md:py-24 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-living-green font-body font-medium mb-2 uppercase tracking-wide text-sm">
              Health & Healing
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-forest mb-4">
              The Most Powerful Vegetables on Earth
            </h2>
            <p className="text-root-brown font-body max-w-2xl mx-auto">
              Cruciferous vegetables contain unique compounds that support detoxification,
              reduce inflammation, and protect against chronic disease.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {healthTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group p-6 bg-white rounded-xl border border-root-brown/10 hover:border-living-green/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-xl font-bold text-deep-forest mb-2 group-hover:text-living-green transition-colors">
                  {topic.title}
                </h3>
                <p className="text-root-brown font-body text-sm">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Tools & Calculators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-mycelium-gold font-body font-medium mb-2 uppercase tracking-wide text-sm">
              Interactive Tools
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-forest mb-4">
              Plan Your Garden with Precision
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {calculators.map((calc) => (
              <Link
                key={calc.title}
                href={calc.href}
                className="group p-6 bg-bone-white rounded-xl border border-root-brown/10 hover:border-mycelium-gold/50 hover:shadow-lg transition-all"
              >
                <span className="text-3xl mb-4 block">{calc.icon}</span>
                <h3 className="font-body font-semibold text-deep-forest mb-2 group-hover:text-mycelium-gold transition-colors">
                  {calc.title}
                </h3>
                <p className="text-root-brown font-body text-sm">
                  {calc.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Consulting Services */}
      <section className="py-16 md:py-24 bg-bone-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-living-green font-body font-medium mb-2 uppercase tracking-wide text-sm">
                Expert Guidance
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-forest mb-6">
                Work Directly with Our Soil Scientists
              </h2>
              <p className="text-root-brown font-body mb-8 leading-relaxed">
                Jon brings decades of experience in the Soil Food Web methodology.
                Whether you&apos;re a home gardener or a commercial farm,
                we can help you build living soil that transforms your results.
              </p>
              <div className="space-y-4">
                {consultingServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group flex items-start gap-4 p-4 bg-white rounded-lg border border-root-brown/10 hover:border-living-green/50 transition-colors"
                  >
                    <span className="text-living-green text-xl">✓</span>
                    <div>
                      <h4 className="font-body font-semibold text-deep-forest group-hover:text-living-green transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-root-brown text-sm">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/consulting"
                className="inline-block mt-8 px-6 py-3 bg-deep-forest text-bone-white font-body font-semibold rounded-lg hover:bg-living-green transition-colors"
              >
                View All Services
              </Link>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-living-green/20 to-deep-forest/10 rounded-2xl flex items-center justify-center">
              <span className="text-6xl opacity-50">👨‍🔬</span>
              <p className="absolute bottom-4 text-center text-sm text-root-brown px-4">
                Jon portrait placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Founder Story */}
      <section className="py-16 md:py-24 bg-deep-forest text-bone-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-mycelium-gold font-body font-medium mb-4 uppercase tracking-wide text-sm">
            Our Story
          </p>
          <blockquote className="font-display text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
            &ldquo;The soil is not just dirt — it&apos;s the foundation of all life.
            When we nurture the soil food web, we nurture everything that grows in it.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-living-green/30 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div className="text-left">
              <p className="font-body font-semibold">Jon</p>
              <p className="text-bone-white/70 text-sm">Founder, Soil Scientist</p>
            </div>
          </div>
          <p className="text-sm text-bone-white/50 font-body">
            Trained in Dr. Elaine Ingham&apos;s Soil Food Web methodology
          </p>
          <Link
            href="/about/our-story"
            className="inline-block mt-8 px-6 py-3 border-2 border-bone-white text-bone-white font-body font-semibold rounded-lg hover:bg-bone-white/10 transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Section 10: Newsletter (handled by Footer) */}
      {/* Section 11: Footer (in layout) */}
    </div>
  );
}
