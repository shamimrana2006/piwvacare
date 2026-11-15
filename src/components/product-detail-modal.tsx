"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Droplets,
  ShieldCheck,
  Sparkles,
  Heart,
  Check,
  Star,
} from "lucide-react";

interface ProductDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: () => void;
}

export function ProductDetailModal({
  open,
  onOpenChange,
  onAddToCart,
}: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"benefits" | "ingredients" | "how-to">("benefits");
  const [selectedSize, setSelectedSize] = useState("250ml");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[720px] bg-[#FAF7F2] border-[#D6E5CF] text-[#1A3B22] p-6 max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge variant="soft" className="bg-[#E7EFE3] text-[#345928] border-[#D5E5CB]">
              <Leaf className="w-3 h-3 text-[#4D6D2E]" />
              Signature Formulation
            </Badge>
            <div className="flex items-center gap-1 text-xs text-[#596D5C]">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-[#1A3B22]">5.0</span>
              <span>(1,240+ reviews)</span>
            </div>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-[#1B381E] mt-2">
            piwva Baby Moisture Lotion
          </DialogTitle>
          <p className="text-sm text-[#596D5C]">
            Ultra-gentle daily hydrator designed specifically for sensitive newborn and baby skin.
          </p>
        </DialogHeader>

        {/* Modal content body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-3">
          {/* Image & Size Selection */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#DFEBD9] shadow-xs">
              <Image
                src="/images/product-bottle.jpg"
                alt="piwva Baby Moisture Lotion"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#1A3B22] block mb-1.5">
                Select Size:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { size: "150ml", price: "$18" },
                  { size: "250ml", price: "$24", popular: true },
                  { size: "500ml", price: "$38" },
                ].map((item) => (
                  <button
                    key={item.size}
                    type="button"
                    onClick={() => setSelectedSize(item.size)}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedSize === item.size
                        ? "bg-[#4D6D2E] text-white border-[#4D6D2E] shadow-2xs"
                        : "bg-white text-[#596D5C] border-[#D6E5CF] hover:border-[#4D6D2E]"
                    }`}
                  >
                    <div className="text-xs font-bold">{item.size}</div>
                    <div className="text-[10px] opacity-90">{item.price}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details & Tabs */}
          <div className="md:col-span-7 space-y-4">
            {/* Tab navigation */}
            <div className="flex border-b border-[#E3EDDD] gap-4 text-xs font-semibold">
              {[
                { id: "benefits", label: "Benefits" },
                { id: "ingredients", label: "Pure Ingredients" },
                { id: "how-to", label: "How to Use" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-2.5 transition-all cursor-pointer relative ${
                    activeTab === tab.id
                      ? "text-[#4D6D2E] border-b-2 border-[#4D6D2E]"
                      : "text-[#637765] hover:text-[#1A3B22]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "benefits" && (
              <div className="space-y-3 text-xs sm:text-sm text-[#596D5C] leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4D6D2E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A3B22]">24-Hour Continuous Hydration:</strong> Non-greasy moisture barrier shields skin from dryness and eczema flare-ups.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4D6D2E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A3B22]">Dermatologist Tested:</strong> Clinically proven safe for newborn daily face and body application.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4D6D2E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A3B22]">Fast Absorbing:</strong> Velvety light texture that leaves baby skin touchably soft without sticky residue.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#4D6D2E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#1A3B22]">Tear-Free & Gentle:</strong> Formulated with calm botanicals suitable for sensitive eyelids and cheeks.
                  </span>
                </div>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="space-y-3 text-xs sm:text-sm text-[#596D5C]">
                <p className="text-xs text-[#1A3B22] font-semibold">
                  100% Clean, Non-Toxic & Transparent Formulation:
                </p>
                <div className="space-y-2">
                  <div className="p-2.5 bg-white rounded-xl border border-[#E2EBDC]">
                    <div className="font-bold text-[#1A3B22] text-xs">Colloidal Oat Extract (Avena Sativa)</div>
                    <div className="text-[11px] text-[#657767]">Naturally calms redness, soothes itchiness, and restores barrier balance.</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-[#E2EBDC]">
                    <div className="font-bold text-[#1A3B22] text-xs">Organic Shea Butter (Butyrospermum Parkii)</div>
                    <div className="text-[11px] text-[#657767]">Deep conditioning rich in Vitamins A & E for intense natural softness.</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-[#E2EBDC]">
                    <div className="font-bold text-[#1A3B22] text-xs">Calendula Flower Oil</div>
                    <div className="text-[11px] text-[#657767]">Gentle herbal antioxidant known for centuries to soothe sensitive skin.</div>
                  </div>
                </div>
                <p className="text-[10px] text-[#819283] italic">
                  Free from: Parabens, Phthalates, Synthetic Fragrance, Mineral Oil, Sulfates, Dyes.
                </p>
              </div>
            )}

            {activeTab === "how-to" && (
              <div className="space-y-3 text-xs sm:text-sm text-[#596D5C]">
                <div className="p-3 bg-white rounded-xl border border-[#E2EBDC] space-y-2">
                  <div className="font-bold text-[#1A3B22] text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#4D6D2E]" /> Step 1: Warm in Hands
                  </div>
                  <p className="text-xs text-[#596D5C]">
                    Dispense 1-2 gentle pumps into your clean palms. Rub hands together to warm the lotion to baby&apos;s body temperature.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2EBDC] space-y-2">
                  <div className="font-bold text-[#1A3B22] text-xs flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#4D6D2E]" /> Step 2: Gentle Loving Strokes
                  </div>
                  <p className="text-xs text-[#596D5C]">
                    Apply gently in long, soothing circular strokes over baby&apos;s arms, tummy, legs, and delicate dry areas right after bath time.
                  </p>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-3 border-t border-[#E3EDDD] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#6A7C6C] block">Price</span>
                <span className="text-2xl font-black text-[#1A3B22]">
                  {selectedSize === "150ml" ? "$18" : selectedSize === "250ml" ? "$24" : "$38"}
                </span>
              </div>

              <Button
                onClick={() => {
                  onAddToCart();
                  onOpenChange(false);
                }}
                className="bg-[#4D6D2E] hover:bg-[#3D5724] text-white rounded-full px-7 h-12 text-sm font-semibold flex items-center gap-2 shadow-md shadow-[#4D6D2E]/20"
              >
                <Sparkles className="w-4 h-4" />
                Add to Bag
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

