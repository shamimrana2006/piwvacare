"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StayUpdatedModal } from "@/components/stay-updated-modal";
import { SearchDialog } from "@/components/search-dialog";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductDetailModal } from "@/components/product-detail-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Heart,
  ArrowRight,
  Footprints,
} from "lucide-react";
import { DoodleHeart } from "@/components/decorations";
import confetti from "canvas-confetti";

export default function ProductRoute() {
  const [stayUpdatedOpen, setStayUpdatedOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Upcoming page waitlist state
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState("expecting");
  const [joined, setJoined] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4D6D2E", "#8EAF74", "#E5EEDD"],
      });
    } catch {
      // ignore
    }

    setJoined(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1A3B22]">
      <Navbar
        onOpenStayUpdated={() => setStayUpdatedOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartCount}
      />

      <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Upcoming Flagship Hero Banner */}
          <div className="relative rounded-[40px] sm:rounded-[56px] overflow-hidden bg-gradient-to-b from-[#F6F0E6] via-[#F8F5EE] to-[#EFE7D8] border border-[#E9DFCF] shadow-xl shadow-[#2D4525]/5 p-8 sm:p-14 lg:p-20 mb-16">
            {/* Ambient blurred organic background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF2E4]/80 rounded-full blur-3xl -z-0 pointer-events-none translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAF7F2] rounded-full blur-2xl -z-0 pointer-events-none -translate-x-1/4 translate-y-1/4" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Upcoming Headline & VIP Access Form */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
                    Upcoming
                  </h1>
                  <p className="text-xl sm:text-2xl font-bold text-[#2A442E]">
                    Something Pure & Gentle is on the Way
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#596D5C] leading-relaxed max-w-xl">
                  We are currently finalizing our inaugural baby skincare formulations with certified pediatric dermatologists. Zero shortcuts, zero questionable chemicals &mdash; just honest, nourishing care for fragile newborn skin.
                </p>

                {/* Waitlist Form Box */}
                <div className="pt-2">
                  {!joined ? (
                    <form
                      onSubmit={handleSubscribe}
                      className="p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCE8D5] shadow-sm space-y-4 max-w-lg"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#1B381E] flex items-center gap-2">
                          <Bell className="w-4 h-4 text-[#4D6D2E]" />
                          Get First Priority Access on Release Day
                        </h4>
                        <p className="text-xs text-[#596D5C]">
                          First 500 waitlist parents receive an exclusive 20% launch voucher and complimentary muslin cloth.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          type="email"
                          required
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-[#FAF7F2] border-[#D6E5CF] text-xs h-11 rounded-full"
                        />
                        <Button
                          type="submit"
                          className="bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full px-6 h-11 text-xs font-semibold shrink-0 shadow-md shadow-[#4D6D2E]/20"
                        >
                          Notify Me
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1 border-t border-[#EDF4E9]">
                        <span className="text-[11px] text-[#718573]">Your baby stage:</span>
                        <div className="flex gap-1.5">
                          {[
                            { id: "expecting", label: "Expecting" },
                            { id: "0-6m", label: "0-6 Months" },
                            { id: "older", label: "6+ Months" },
                          ].map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setStage(s.id)}
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition-all cursor-pointer ${
                                stage === s.id
                                  ? "bg-[#4D6D2E] text-white"
                                  : "bg-[#FAF7F2] text-[#596D5C] hover:bg-white"
                              }`}
                            >
                              {s.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="p-6 rounded-3xl bg-white/95 border border-[#DCE8D5] shadow-sm max-w-lg space-y-2">
                      <div className="flex items-center gap-2 text-[#4D6D2E]">
                        <CheckCircle2 className="w-5 h-5" />
                        <h4 className="text-base font-bold text-[#1B381E]">
                          You&apos;re On the VIP Priority List!
                        </h4>
                      </div>
                      <p className="text-xs text-[#596D5C]">
                        We have reserved your launch invitation for <strong>{email}</strong>. We will notify you the moment bottling is completed.
                      </p>
                      <button
                        onClick={() => setJoined(false)}
                        className="text-xs text-[#4D6D2E] font-semibold underline underline-offset-2"
                      >
                        Enter another email
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Teaser Photo with Organic Frame */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-square rounded-[40px] sm:rounded-[48px] overflow-hidden shadow-xl shadow-[#2E4A25]/10 border-4 border-white/90 bg-[#F4EEE3]">
                  <Image
                    src="/images/baby-footprints.jpg"
                    alt="Piwva upcoming release teaser with baby footprints"
                    fill
                    priority
                    className="object-cover object-center hover:scale-103 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#1A3B22] shadow-xs flex items-center gap-1.5">
                    <Footprints className="w-3.5 h-3.5 text-[#4D6D2E]" />
                    We&apos;re Back &bull; Pure Purity
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#DCECD6]">
                      Nursery Debut
                    </span>
                    <p className="text-sm font-bold mt-0.5">
                      Crafted with loving intention for delicate skin
                    </p>
                  </div>
                </div>

                {/* Floating outline doodle heart */}
                <div className="absolute -bottom-4 right-6 sm:right-10 z-20 hidden sm:block">
                  <DoodleHeart className="w-10 h-10 text-[#4D6D2E] stroke-[2.6] -rotate-12" />
                </div>
              </div>
            </div>
          </div>

          {/* 3 Core Trust Badges below banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-7 rounded-3xl border border-[#DFEBD9] space-y-2 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1B381E]">
                Pediatrician Formulated
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                Every formula is tuned specifically for day-one newborns, protecting and respecting the fragile acid mantle.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#DFEBD9] space-y-2 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1B381E]">
                100% Clean Botanicals
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                Sourced from sustainable, cold-pressed plant lipids and soothing colloidal oat extracts. Zero artificial perfumes or masking chemicals.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#DFEBD9] space-y-2 shadow-2xs">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1B381E]">
                Small-Batch Craftsmanship
              </h3>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                Produced in sanitary, monitored small batches to ensure unmatched freshness, clinical stability, and pure love.
              </p>
            </div>
          </div>

          {/* Quick Links back to Care Guide or Our Promise */}
          <div className="text-center space-y-4 pt-4">
            <p className="text-xs text-[#7A8E7C] font-medium">
              While we prepare our debut batch, explore our newborn wisdom:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/care-guide"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#EBF3E7] text-[#2D5021] border border-[#D7E4D0] px-5 py-2.5 rounded-full text-xs font-semibold transition-colors"
              >
                Explore Baby&apos;s First 90 Days Care Guide &rarr;
              </Link>
              <Link
                href="/our-promise"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#EBF3E7] text-[#2D5021] border border-[#D7E4D0] px-5 py-2.5 rounded-full text-xs font-semibold transition-colors"
              >
                Read Our Unbreakable Purity Promise &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

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
        onAddToCart={() => setCartCount((c) => c + 1)}
      />
    </main>
  );
}
