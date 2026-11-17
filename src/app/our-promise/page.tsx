"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StayUpdatedModal } from "@/components/stay-updated-modal";
import { SearchDialog } from "@/components/search-dialog";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductDetailModal } from "@/components/product-detail-modal";
import { Check, X } from "lucide-react";
import { DoodleHeart } from "@/components/decorations";

const COMPARISON_ITEMS = [
  { feature: "Certified Organic Oat & Shea", piwva: true, others: false },
  { feature: "Zero Artificial Fragrance & Dyes", piwva: true, others: false },
  { feature: "Pediatric Dermatologist Approved (0+ Months)", piwva: true, others: "Rarely" },
  { feature: "pH 5.5 Balanced for Baby Acid Mantle", piwva: true, others: false },
  { feature: "100% Vegan & Leaping Bunny Cruelty Free", piwva: true, others: false },
  { feature: "Radical Ingredient Transparency (Every batch tracked)", piwva: true, others: false },
  { feature: "30-Day Happiness Money-Back Guarantee", piwva: true, others: false },
];

export default function OurPromiseRoute() {
  const [stayUpdatedOpen, setStayUpdatedOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
              Our Unbreakable Promise to Your Family
            </h1>

            <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
              When you bring Piwva into your nursery, you are welcoming uncompromised purity. Every formulation, every drop, and every decision is anchored in our promise of gentle protection.
            </p>
          </div>

          {/* Hero Visual Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#DFEBD9] shadow-xs mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-[460px] aspect-4/3 rounded-[40px] overflow-hidden shadow-lg border-4 border-white bg-[#F5EDE1]">
                  <Image
                    src="/images/promise-hands.jpg"
                    alt="baby hand gently wrapping around parent finger"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 right-10 hidden sm:block">
                  <DoodleHeart className="w-10 h-10 text-[#4D6D2E] stroke-[2.6] -rotate-12" />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E]">
                  A Softer Tomorrow for Every Newborn
                </h2>
                <p className="text-sm sm:text-base text-[#596D5C] leading-relaxed">
                  We believe that modern infant skincare should never force parents to choose between clinical efficacy and natural safety. We promise complete honesty: what is on our label is 100% what is in the bottle.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#273D2A] font-semibold">
                    <Check className="w-5 h-5 text-[#4D6D2E] shrink-0" />
                    <span>100% Free of synthetic hormone disruptors</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#273D2A] font-semibold">
                    <Check className="w-5 h-5 text-[#4D6D2E] shrink-0" />
                    <span>Dermatologist certified non-irritating</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#273D2A] font-semibold">
                    <Check className="w-5 h-5 text-[#4D6D2E] shrink-0" />
                    <span>Zero hidden fragrance masking agents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purity Comparison Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#DFEBD9] shadow-xs mb-20 overflow-x-auto">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E]">
                How Piwva Compares
              </h2>
              <p className="text-sm text-[#596D5C]">
                See how our transparent formulation philosophy stands against conventional drugstore products.
              </p>
            </div>

            <table className="w-full text-left border-collapse min-w-[540px]">
              <thead>
                <tr className="border-b border-[#E1ECE0] text-xs font-bold uppercase tracking-wider text-[#637765]">
                  <th className="py-4 px-4">Standard & Formulation</th>
                  <th className="py-4 px-4 text-[#4D6D2E] bg-[#F3F8EF] rounded-t-xl text-center">
                    piwva Baby Care
                  </th>
                  <th className="py-4 px-4 text-center">Conventional Lotions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF5EA] text-sm">
                {COMPARISON_ITEMS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#1B381E]">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 bg-[#F3F8EF]/80 text-center font-bold text-[#2D5323]">
                      {item.piwva === true ? (
                        <span className="inline-flex items-center gap-1 text-xs bg-[#4D6D2E] text-white px-2.5 py-0.5 rounded-full">
                          <Check className="w-3.5 h-3.5" /> Guaranteed
                        </span>
                      ) : (
                        item.piwva
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-[#8C9E8E]">
                      {item.others === false ? (
                        <X className="w-5 h-5 mx-auto text-red-400" />
                      ) : (
                        item.others
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
