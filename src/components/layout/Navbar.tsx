"use client";

import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  name: string;
  href: string;
  featured?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const shopMenuItems: Record<string, MenuSection> = {
  seeds: {
    title: "Seeds",
    items: [
      { name: "Brassica Seeds", href: "/shop/seeds/brassicas", featured: true },
      { name: "Kale", href: "/shop/seeds/brassicas/kale" },
      { name: "Cabbage", href: "/shop/seeds/brassicas/cabbage" },
      { name: "Broccoli", href: "/shop/seeds/brassicas/broccoli" },
      { name: "Cauliflower", href: "/shop/seeds/brassicas/cauliflower" },
      { name: "Brussels Sprouts", href: "/shop/seeds/brassicas/brussels-sprouts" },
      { name: "Kohlrabi", href: "/shop/seeds/brassicas/kohlrabi" },
      { name: "Collards", href: "/shop/seeds/brassicas/collards" },
      { name: "Mustard Greens", href: "/shop/seeds/brassicas/mustard-greens" },
      { name: "Asian Greens", href: "/shop/seeds/brassicas/asian-greens" },
      { name: "Turnips & Rutabaga", href: "/shop/seeds/brassicas/turnips-rutabaga" },
      { name: "Rare Heirlooms", href: "/shop/seeds/brassicas/rare-heirlooms" },
      { name: "All Seeds", href: "/shop/seeds" },
    ],
  },
  soilCompost: {
    title: "Soil & Compost",
    items: [
      { name: "Composting Worms", href: "/shop/live-organisms/composting-worms" },
      { name: "Worm Bins & Systems", href: "/shop/composting/worm-bins" },
      { name: "Compost Tumblers", href: "/shop/composting/compost-tumblers" },
      { name: "Worm Castings", href: "/shop/soil-amendments" },
      { name: "Compost Tea Brewers", href: "/shop/composting/compost-tea-brewers" },
      { name: "Soil Amendments", href: "/shop/soil-amendments" },
      { name: "Mycorrhizae", href: "/shop/live-organisms/mycorrhizae" },
      { name: "Biochar", href: "/shop/soil-amendments" },
    ],
  },
  toolsTech: {
    title: "Tools & Tech",
    items: [
      { name: "Hand Tools", href: "/shop/tools/hand-tools" },
      { name: "Soil Testing", href: "/shop/tools/soil-testing" },
      { name: "Microscopes", href: "/shop/tools/microscopes" },
      { name: "Irrigation", href: "/shop/tools/irrigation" },
      { name: "Garden Tech", href: "/shop/tech" },
      { name: "Seed Starting", href: "/shop/tools/seed-starting" },
    ],
  },
  collections: {
    title: "Collections",
    items: [
      { name: "Beginner Kits", href: "/shop/collections" },
      { name: "Curated Collections", href: "/shop/collections" },
      { name: "Gift Boxes", href: "/shop/gift-boxes" },
      { name: "Seasonal Boxes", href: "/shop/subscriptions" },
      { name: "Subscriptions", href: "/shop/subscriptions" },
    ],
  },
};

const learnMenuItems: Record<string, MenuSection> = {
  soilScience: {
    title: "Soil Science",
    items: [
      { name: "Soil Food Web", href: "/learn/soil-food-web" },
      { name: "Dirt vs. Soil", href: "/learn/soil-food-web" },
      { name: "Microorganisms", href: "/learn/soil-food-web" },
      { name: "Composting 101", href: "/learn/composting" },
      { name: "Vermicomposting", href: "/learn/composting/vermicomposting" },
      { name: "Regenerative Methods", href: "/learn/regenerative-agriculture" },
    ],
  },
  brassicaGuide: {
    title: "Brassica Guide",
    items: [
      { name: "Kale Guide", href: "/learn/brassica-guide/kale" },
      { name: "Cabbage Guide", href: "/learn/brassica-guide/cabbage" },
      { name: "Broccoli Guide", href: "/learn/brassica-guide/broccoli" },
      { name: "Cauliflower Guide", href: "/learn/brassica-guide/cauliflower" },
      { name: "All Brassicas", href: "/learn/brassica-guide" },
      { name: "Variety Finder", href: "/tools/variety-finder" },
      { name: "Rare Heirlooms", href: "/learn/brassica-guide" },
    ],
  },
  growing: {
    title: "Growing",
    items: [
      { name: "By Zone (3-10)", href: "/learn/growing-guides/by-zone" },
      { name: "Spring Planting", href: "/learn/growing-guides" },
      { name: "Fall Planting", href: "/learn/growing-guides" },
      { name: "Succession Planting", href: "/learn/growing-guides" },
      { name: "Season Extension", href: "/learn/growing-guides" },
      { name: "Seed Starting", href: "/learn/growing-guides" },
    ],
  },
  healthHealing: {
    title: "Health & Healing",
    items: [
      { name: "Sulforaphane", href: "/learn/health-healing" },
      { name: "Cruciferous Nutrition", href: "/learn/health-healing" },
      { name: "Gut Health & Fermentation", href: "/learn/health-healing" },
      { name: "Anti-Inflammatory", href: "/learn/health-healing" },
      { name: "Detoxification", href: "/learn/health-healing" },
    ],
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bone-white/95 backdrop-blur-sm border-b border-root-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-bold text-deep-forest">
              BioArva
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Shop */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("shop")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/shop"
                className="font-body text-soil-dark hover:text-living-green transition-colors py-2"
              >
                Shop
              </Link>
              {openMenu === "shop" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-bone-white rounded-lg shadow-xl border border-root-brown/10 p-6 grid grid-cols-4 gap-8 min-w-[800px]">
                    {Object.values(shopMenuItems).map((section) => (
                      <div key={section.title}>
                        <h3 className="font-body font-semibold text-deep-forest mb-3 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.href + item.name}>
                              <Link
                                href={item.href}
                                className={`text-sm hover:text-living-green transition-colors ${
                                  item.featured
                                    ? "text-living-green font-medium"
                                    : "text-root-brown"
                                }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Learn */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("learn")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/learn"
                className="font-body text-soil-dark hover:text-living-green transition-colors py-2"
              >
                Learn
              </Link>
              {openMenu === "learn" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-bone-white rounded-lg shadow-xl border border-root-brown/10 p-6 grid grid-cols-4 gap-8 min-w-[800px]">
                    {Object.values(learnMenuItems).map((section) => (
                      <div key={section.title}>
                        <h3 className="font-body font-semibold text-deep-forest mb-3 text-sm uppercase tracking-wide">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.href + item.name}>
                              <Link
                                href={item.href}
                                className="text-sm text-root-brown hover:text-living-green transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tools */}
            <Link
              href="/tools"
              className="font-body text-soil-dark hover:text-living-green transition-colors"
            >
              Tools
            </Link>

            {/* Consulting */}
            <Link
              href="/consulting"
              className="font-body text-soil-dark hover:text-living-green transition-colors"
            >
              Consulting
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="font-body text-soil-dark hover:text-living-green transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              className="p-2 text-soil-dark hover:text-living-green transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Cart */}
            <Link
              href="/account"
              className="p-2 text-soil-dark hover:text-living-green transition-colors relative"
              aria-label="Shopping Cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-soil-dark"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
