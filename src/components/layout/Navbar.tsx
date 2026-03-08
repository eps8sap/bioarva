"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      { name: "All Seeds", href: "/shop/seeds" },
    ],
  },
  soilCompost: {
    title: "Soil & Compost",
    items: [
      { name: "Composting Worms", href: "/shop/live-organisms/composting-worms" },
      { name: "Worm Bins", href: "/shop/composting/worm-bins" },
      { name: "Soil Amendments", href: "/shop/soil-amendments" },
      { name: "Mycorrhizae", href: "/shop/live-organisms/mycorrhizae" },
    ],
  },
  toolsTech: {
    title: "Tools & Tech",
    items: [
      { name: "Soil Testing", href: "/shop/tools/soil-testing" },
      { name: "Microscopes", href: "/shop/tools/microscopes" },
      { name: "Garden Tech", href: "/shop/tech" },
    ],
  },
  collections: {
    title: "Collections",
    items: [
      { name: "Curated Collections", href: "/shop/collections" },
      { name: "Gift Boxes", href: "/shop/gift-boxes" },
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
      { name: "Composting 101", href: "/learn/composting" },
    ],
  },
  brassicaGuide: {
    title: "Brassica Guide",
    items: [
      { name: "Kale Guide", href: "/learn/brassica-guide/kale" },
      { name: "All Brassicas", href: "/learn/brassica-guide" },
      { name: "Variety Finder", href: "/tools/variety-finder" },
    ],
  },
  growing: {
    title: "Growing",
    items: [
      { name: "By Zone", href: "/learn/growing-guides/by-zone" },
      { name: "Season Extension", href: "/learn/growing-guides" },
    ],
  },
  healthHealing: {
    title: "Health & Healing",
    items: [
      { name: "Sulforaphane", href: "/learn/health-healing" },
      { name: "Cruciferous Nutrition", href: "/learn/health-healing" },
    ],
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className={`font-display text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-deep-forest" : "text-bone-white"
              }`}
            >
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
                className={`font-body text-sm tracking-wide transition-colors py-2 ${
                  scrolled
                    ? "text-soil-dark hover:text-living-green"
                    : "text-bone-white/90 hover:text-bone-white"
                }`}
              >
                Shop
              </Link>
              <AnimatePresence>
                {openMenu === "shop" && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-bone-white shadow-2xl p-8 grid grid-cols-4 gap-10 min-w-[700px]">
                      {Object.values(shopMenuItems).map((section) => (
                        <div key={section.title}>
                          <h3 className="font-body text-xs tracking-[0.2em] uppercase text-root-brown/50 mb-4">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.items.map((item) => (
                              <li key={item.href + item.name}>
                                <Link
                                  href={item.href}
                                  className={`text-sm transition-colors ${
                                    item.featured
                                      ? "text-living-green font-medium"
                                      : "text-soil-dark hover:text-living-green"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Learn */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("learn")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/learn"
                className={`font-body text-sm tracking-wide transition-colors py-2 ${
                  scrolled
                    ? "text-soil-dark hover:text-living-green"
                    : "text-bone-white/90 hover:text-bone-white"
                }`}
              >
                Learn
              </Link>
              <AnimatePresence>
                {openMenu === "learn" && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-bone-white shadow-2xl p-8 grid grid-cols-4 gap-10 min-w-[700px]">
                      {Object.values(learnMenuItems).map((section) => (
                        <div key={section.title}>
                          <h3 className="font-body text-xs tracking-[0.2em] uppercase text-root-brown/50 mb-4">
                            {section.title}
                          </h3>
                          <ul className="space-y-3">
                            {section.items.map((item) => (
                              <li key={item.href + item.name}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-soil-dark hover:text-living-green transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tools */}
            <Link
              href="/tools"
              className={`font-body text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-soil-dark hover:text-living-green"
                  : "text-bone-white/90 hover:text-bone-white"
              }`}
            >
              Tools
            </Link>

            {/* Consulting */}
            <Link
              href="/consulting"
              className={`font-body text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-soil-dark hover:text-living-green"
                  : "text-bone-white/90 hover:text-bone-white"
              }`}
            >
              Consulting
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`font-body text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-soil-dark hover:text-living-green"
                  : "text-bone-white/90 hover:text-bone-white"
              }`}
            >
              About
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              className={`p-2 transition-colors ${
                scrolled
                  ? "text-soil-dark hover:text-living-green"
                  : "text-bone-white/90 hover:text-bone-white"
              }`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Cart */}
            <Link
              href="/account"
              className={`p-2 transition-colors ${
                scrolled
                  ? "text-soil-dark hover:text-living-green"
                  : "text-bone-white/90 hover:text-bone-white"
              }`}
              aria-label="Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${
                scrolled ? "text-soil-dark" : "text-bone-white"
              }`}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
