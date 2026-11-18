"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { MainHubSection } from "@/components/main-hub-section";
import { FeaturesGrid } from "@/components/features-grid";
import { PromiseSection } from "@/components/promise-section";
import { StoryShowcase } from "@/components/story-showcase";
import { CareGuideSection } from "@/components/care-guide-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { StayUpdatedModal } from "@/components/stay-updated-modal";
import { SearchDialog } from "@/components/search-dialog";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductDetailModal } from "@/components/product-detail-modal";

export default function Home() {
  const [stayUpdatedOpen, setStayUpdatedOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1A3B22] selection:bg-[#4D6D2E] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenStayUpdated={() => setStayUpdatedOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartCount}
      />

      {/* Hero Section */}
      <HeroSection onCtaClick={() => setStayUpdatedOpen(true)} />

      {/* Main Core 2 Sections: 1. Information Section + 2. Product Section (with Universal Live Search & Filters) */}
      <MainHubSection
        onSelectProduct={() => setProductDetailOpen(true)}
        onAddToCart={handleAddToCart}
        onOpenStayUpdated={() => setStayUpdatedOpen(true)}
      />

      {/* Why Piwva? Section ("Because Your Baby Deserves the Best") */}
      <FeaturesGrid />

      {/* Our Promise Section ("A Softer Tomorrow for Your Little One") */}
      <PromiseSection onJoinJourney={() => setStayUpdatedOpen(true)} />

      {/* Aesthetic Story & Nature Footprints Section */}
      <StoryShowcase onExplore={() => setProductDetailOpen(true)} />

      {/* Interactive Gentle Daily Care Guide */}
      <CareGuideSection />

      {/* Social Proof: Real Parent Testimonials */}
      <ReviewsSection />

      {/* Frequently Asked Questions (Shadcn Accordion) */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <StayUpdatedModal
        open={stayUpdatedOpen}
        onOpenChange={setStayUpdatedOpen}
      />

      <SearchDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        onSelectProduct={() => setProductDetailOpen(true)}
      />

      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />

      <ProductDetailModal
        open={productDetailOpen}
        onOpenChange={setProductDetailOpen}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
