"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  X,
  AlertTriangle,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Star,
  Bell,
} from "lucide-react";
import {
  HUB_INFO_ITEMS,
  HUB_PRODUCT_ITEMS,
  HubInfoItem,
  HubProductItem,
} from "@/data/hub-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DoodleHeart } from "@/components/decorations";

interface MainHubSectionProps {
  onSelectProduct?: (productId?: string) => void;
  onAddToCart?: () => void;
  onOpenStayUpdated?: () => void;
}

export function MainHubSection({
  onSelectProduct,
  onAddToCart,
  onOpenStayUpdated,
}: MainHubSectionProps) {
  // Primary Pillar Tab: "all" | "info" | "product"
  const [activePillar, setActivePillar] = useState<"all" | "info" | "product">("all");

  // Search Query
  const [searchQuery, setSearchQuery] = useState("");

  // Category Filter
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Categories", emoji: "✨" },
    { id: "newborn", label: "Newborn (0-3m)", emoji: "👶" },
    { id: "dryness", label: "Dry Skin & Eczema", emoji: "🌿" },
    { id: "bath-sleep", label: "Bath & Sleep Rituals", emoji: "🛁" },
    { id: "barrier", label: "Diaper & Skin Barrier", emoji: "🛡️" },
    { id: "emergency", label: "Health & Emergency", emoji: "🚨" },
  ];

  // Filtered Information Items
  const filteredInfo = useMemo(() => {
    return HUB_INFO_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.keyTakeaway.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory]);

  // Filtered Product Items
  const filteredProducts = useMemo(() => {
    return HUB_PRODUCT_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" ||
        item.category === selectedCategory ||
        (selectedCategory === "emergency" && false);

      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.keyIngredients.some((ing) => ing.toLowerCase().includes(q)) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory]);

  const totalResults =
    (activePillar !== "product" ? filteredInfo.length : 0) +
    (activePillar !== "info" ? filteredProducts.length : 0);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setActivePillar("all");
  };

  return (
    <section
      id="main-discovery-hub"
      aria-label="Piwva Main Information and Product Hub"
      className="py-16 md:py-24 bg-[#FAF7F2] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            HUB HEADER
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
            Two Main Pillars of Gentle Baby Care
          </h2>
          <p className="text-sm sm:text-base text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
            Search and filter effortlessly across our two core sections &mdash; pediatric-backed <strong>Information Guides</strong> and pure, organic <strong>Baby Skincare Products</strong>.
          </p>
        </div>

        {/* ========================================================
            UNIFIED SEARCH & FILTER CONTROL BAR
            ======================================================== */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#DFE8DA] shadow-sm mb-12 space-y-5">
          {/* Top Row: Dual-Pillar Section Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-[#EDF4E8]">
            <div className="flex p-1.5 bg-[#FAF7F2] rounded-full border border-[#DCE8D6] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActivePillar("all")}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activePillar === "all"
                    ? "bg-[#4D6D2E] text-white shadow-xs"
                    : "text-[#4A5E4E] hover:text-[#1B381E]"
                }`}
              >
                ✨ Both Sections ({HUB_INFO_ITEMS.length + HUB_PRODUCT_ITEMS.length})
              </button>
              <button
                type="button"
                onClick={() => setActivePillar("info")}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activePillar === "info"
                    ? "bg-[#4D6D2E] text-white shadow-xs"
                    : "text-[#4A5E4E] hover:text-[#1B381E]"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>1. Information Section</span>
              </button>
              <button
                type="button"
                onClick={() => setActivePillar("product")}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activePillar === "product"
                    ? "bg-[#4D6D2E] text-white shadow-xs"
                    : "text-[#4A5E4E] hover:text-[#1B381E]"
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>2. Product Section</span>
              </button>
            </div>

            {/* Quick Status / Reset */}
            <div className="flex items-center gap-3 text-xs text-[#6B806E]">
              <span>
                Showing <strong>{totalResults}</strong> matching results
              </span>
              {(searchQuery || selectedCategory !== "all" || activePillar !== "all") && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[#D32F2F] hover:text-[#9A1E1E] font-semibold underline cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Middle Row: Big Live Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#4D6D2E] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search guides, baby symptoms, or products... (e.g. fever, dry skin, moisture lotion, cord, bath, shea)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-13 pl-12 pr-10 bg-[#FAF7F2] border-[#D6E5CF] text-sm sm:text-base text-[#1A3B22] rounded-full focus-visible:ring-2 focus-visible:ring-[#4D6D2E] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Bottom Row: Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold text-[#5B6F5D] flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Category Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-[#2D5323] text-white shadow-2xs"
                    : "bg-[#FAF7F2] hover:bg-[#EBF3E7] text-[#4A5D4D] border border-[#DEE8D8]"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================
            EMPTY RESULTS STATE
            ======================================================== */}
        {totalResults === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#DFE8DA] max-w-xl mx-auto space-y-4 my-8">
            <div className="w-14 h-14 rounded-full bg-[#FAF7F2] text-[#4D6D2E] flex items-center justify-center mx-auto">
              <Search className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-[#1B381E]">
              No exact match for &ldquo;{searchQuery}&rdquo;
            </h4>
            <p className="text-xs text-[#596D5C] max-w-sm mx-auto leading-relaxed">
              Try searching with general keywords like <strong>lotion</strong>, <strong>fever</strong>, <strong>dry skin</strong>, or reset the category filter.
            </p>
            <Button
              onClick={handleResetFilters}
              variant="outline"
              className="rounded-full text-xs h-9 px-5 border-[#4D6D2E] text-[#2F5323]"
            >
              Reset Filters & Show All
            </Button>
          </div>
        )}

        {/* ========================================================
            MAIN SECTION 1: INFORMATION SECTION
            ======================================================== */}
        {(activePillar === "all" || activePillar === "info") && filteredInfo.length > 0 && (
          <div className="mb-16">
            {/* Section 1 Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#E3EDDD]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center shadow-2xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1B381E]">
                    1. Information Section &bull; Care Guides & Triage
                  </h3>
                  <p className="text-xs text-[#596D5C]">
                    Pediatrician-curated newborn developmental milestones, daily routines, and health triage.
                  </p>
                </div>
              </div>

              <Link
                href="/care-guide"
                className="text-xs font-bold text-[#4D6D2E] hover:text-[#2E4822] inline-flex items-center gap-1 shrink-0"
              >
                <span>View All 90 Days Roadmap &rarr;</span>
              </Link>
            </div>

            {/* Information Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInfo.map((info) => {
                return (
                  <div
                    key={info.id}
                    className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      info.isEmergency
                        ? "bg-[#FFF8F6] border-[#F6C8C1] shadow-xs"
                        : "bg-white border-[#DEE8D8]"
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            info.isEmergency
                              ? "bg-red-100 text-red-800 border border-red-200"
                              : "bg-[#EBF3E7] text-[#325826]"
                          }`}
                        >
                          {info.badge}
                        </span>

                        <span className="text-[11px] font-semibold text-[#768C79] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#4D6D2E]" />
                          <span>{info.readTime}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-[#1B381E] leading-snug">
                        {info.title}
                      </h4>

                      {/* Summary */}
                      <p className="text-xs text-[#596D5C] leading-relaxed line-clamp-3">
                        {info.summary}
                      </p>

                      {/* Key Takeaway Box */}
                      <div className="p-3 rounded-2xl bg-[#FAF7F2] border border-[#E7EFE2] text-[11px] text-[#2D4525] space-y-1">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-[#4D6D2E] block">
                          Doctor Takeaway:
                        </span>
                        <p className="italic">&ldquo;{info.keyTakeaway}&rdquo;</p>
                      </div>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="pt-4 mt-4 border-t border-[#EEF5EA] flex items-center justify-between">
                      <span className="text-[11px] text-[#718573] font-medium">
                        {info.phase}
                      </span>

                      <Link
                        href={info.link}
                        className={`inline-flex items-center gap-1 text-xs font-bold transition-colors ${
                          info.isEmergency
                            ? "text-[#D32F2F] hover:text-[#9A1E1E]"
                            : "text-[#4D6D2E] hover:text-[#2A4425]"
                        }`}
                      >
                        <span>{info.isEmergency ? "Open Triage" : "Open Daily Guidance"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            MAIN SECTION 2: PRODUCT SECTION
            ======================================================== */}
        {(activePillar === "all" || activePillar === "product") && filteredProducts.length > 0 && (
          <div>
            {/* Section 2 Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#E3EDDD]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center shadow-2xs">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1B381E]">
                    2. Product Section &bull; Pure Skincare Essentials
                  </h3>
                  <p className="text-xs text-[#596D5C]">
                    Clean botanicals, organic colloidal oat, and zero harsh chemicals for infant skin.
                  </p>
                </div>
              </div>

              <Link
                href="/product"
                className="text-xs font-bold text-[#4D6D2E] hover:text-[#2E4822] inline-flex items-center gap-1 shrink-0"
              >
                <span>View Product Launch Details &rarr;</span>
              </Link>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => {
                const isAvailable = prod.status === "available";

                return (
                  <div
                    key={prod.id}
                    className="rounded-3xl bg-white border border-[#DEE8D8] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  >
                    <div>
                      {/* Product Image Box */}
                      <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#F5EDE1] mb-4 border border-[#E9DFCF]">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-cover group-hover:scale-104 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                        {/* Top Floating Badges */}
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#1B381E] shadow-xs">
                          {prod.volume}
                        </div>

                        <div
                          className={`absolute top-3 right-3 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                            isAvailable ? "bg-[#4D6D2E]" : "bg-[#8C6D38]"
                          }`}
                        >
                          {isAvailable ? "In Stock" : "Upcoming"}
                        </div>

                        {/* Rating pill bottom left */}
                        <div className="absolute bottom-2.5 left-3 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-[10px] flex items-center gap-1">
                          <Star className="w-3 h-3 text-[#F5C744] fill-[#F5C744]" />
                          <span>{prod.rating.toFixed(1)}</span>
                          <span className="opacity-75">({prod.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-2 py-0.5 rounded-full">
                          {prod.badge}
                        </span>

                        <h4 className="text-base sm:text-lg font-bold text-[#1B381E] leading-snug">
                          {prod.name}
                        </h4>

                        <p className="text-xs text-[#596D5C] leading-relaxed line-clamp-2">
                          {prod.description}
                        </p>

                        {/* Key Ingredients Pill List */}
                        <div className="pt-1 flex flex-wrap gap-1">
                          {prod.keyIngredients.map((ing, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-[#FAF7F2] text-[#4A5D4D] px-2 py-0.5 rounded-md border border-[#E4ECE0]"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pricing & Actions */}
                    <div className="pt-4 mt-4 border-t border-[#EEF5EA] flex items-center justify-between gap-3">
                      <div>
                        <span className="text-base sm:text-lg font-black text-[#1B381E]">
                          {prod.price}
                        </span>
                        <span className="text-[10px] text-[#718573] block">
                          {isAvailable ? "Free Shipping" : "VIP Waitlist"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isAvailable ? (
                          <>
                            <button
                              type="button"
                              onClick={() => {
                                if (onSelectProduct) onSelectProduct(prod.id);
                              }}
                              className="px-3 py-2 rounded-full border border-[#D5E4CE] bg-white hover:bg-[#FAF7F2] text-[#1B381E] text-xs font-semibold cursor-pointer transition-colors"
                            >
                              Details
                            </button>
                            <Button
                              type="button"
                              onClick={() => {
                                if (onAddToCart) onAddToCart();
                              }}
                              className="bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full px-4 h-9 text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5"
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Cart</span>
                            </Button>
                          </>
                        ) : (
                          <Button
                            type="button"
                            onClick={() => {
                              if (onOpenStayUpdated) onOpenStayUpdated();
                            }}
                            variant="outline"
                            className="rounded-full border-[#8C6D38] text-[#695128] hover:bg-[#FAF4EB] text-xs h-9 px-4 font-semibold cursor-pointer flex items-center gap-1.5"
                          >
                            <Bell className="w-3.5 h-3.5" />
                            <span>Notify Me</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
