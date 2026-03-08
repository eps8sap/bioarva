import Link from "next/link";

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { name: "All Seeds", href: "/shop/seeds" },
      { name: "Brassica Seeds", href: "/shop/seeds/brassicas" },
      { name: "Live Organisms", href: "/shop/live-organisms" },
      { name: "Soil Amendments", href: "/shop/soil-amendments" },
      { name: "Composting", href: "/shop/composting" },
      { name: "Tools", href: "/shop/tools" },
      { name: "Tech", href: "/shop/tech" },
      { name: "Collections", href: "/shop/collections" },
    ],
  },
  learn: {
    title: "Learn",
    links: [
      { name: "Soil Food Web", href: "/learn/soil-food-web" },
      { name: "Brassica Guide", href: "/learn/brassica-guide" },
      { name: "Composting", href: "/learn/composting" },
      { name: "Growing Guides", href: "/learn/growing-guides" },
      { name: "Health & Healing", href: "/learn/health-healing" },
      { name: "Seed Saving", href: "/learn/seed-saving" },
      { name: "Microscopy", href: "/learn/microscopy" },
    ],
  },
  tools: {
    title: "Tools",
    links: [
      { name: "Planting Calculator", href: "/tools/planting-calculator" },
      { name: "Seasonal Planner", href: "/tools/seasonal-planner" },
      { name: "Soil Health Quiz", href: "/tools/soil-health-quiz" },
      { name: "Variety Finder", href: "/tools/variety-finder" },
      { name: "Compost Recipe Builder", href: "/tools/compost-recipe-builder" },
      { name: "Zone Finder", href: "/tools/zone-finder" },
    ],
  },
  consulting: {
    title: "Consulting",
    links: [
      { name: "Soil Testing", href: "/consulting/soil-testing" },
      { name: "Biological Analysis", href: "/consulting/biological-analysis" },
      { name: "Regenerative Consulting", href: "/consulting/regenerative-consulting" },
      { name: "Garden Design", href: "/consulting/garden-design" },
      { name: "Training", href: "/consulting/training" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about/our-story" },
      { name: "Methodology", href: "/about/methodology" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-bone-white">
      {/* Newsletter Section */}
      <div className="border-b border-living-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Join the BioArva Community
              </h3>
              <p className="text-bone-white/70 font-body">
                Get growing tips, exclusive offers, and soil science insights.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-bone-white/10 border border-living-green/30 text-bone-white placeholder:text-bone-white/50 focus:outline-none focus:border-mycelium-gold"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-mycelium-gold text-deep-forest font-body font-semibold rounded-lg hover:bg-mycelium-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-body font-semibold text-mycelium-gold mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href + link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone-white/70 hover:text-mycelium-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-living-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold">BioArva</span>
              <span className="text-bone-white/50 text-sm">
                &copy; {new Date().getFullYear()} All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-bone-white/70">
              <Link href="/privacy" className="hover:text-mycelium-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-mycelium-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="hover:text-mycelium-gold transition-colors">
                Shipping & Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
