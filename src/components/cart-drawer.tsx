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
import { ShoppingBag, Plus, Minus, Trash2, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cartCount: number;
  setCartCount: (count: number) => void;
}

export function CartDrawer({
  open,
  onOpenChange,
  cartCount,
  setCartCount,
}: CartDrawerProps) {
  const [checkedOut, setCheckedOut] = useState(false);
  const unitPrice = 24.0;
  const subtotal = unitPrice * cartCount;
  const shippingThreshold = 40.0;
  const diffToFree = Math.max(0, shippingThreshold - subtotal);

  const handleCheckout = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
    setCheckedOut(true);
  };

  const handleClose = () => {
    setCheckedOut(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] bg-[#FAF7F2] border-[#D6E5CF] text-[#1A3B22] p-6 max-h-[90vh] flex flex-col justify-between">
        <div>
          <DialogHeader className="border-b border-[#E1EBDC] pb-4">
            <DialogTitle className="text-xl font-bold flex items-center justify-between text-[#1A3B22]">
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#4D6D2E]" />
                Your Gentle Care Bag
              </span>
              <span className="text-xs bg-[#EBF3E7] text-[#345926] px-2.5 py-1 rounded-full font-medium">
                {cartCount} {cartCount === 1 ? "Item" : "Items"}
              </span>
            </DialogTitle>
          </DialogHeader>

          {checkedOut ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF3E7] text-[#4D6D2E] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#4D6D2E]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A3B22]">
                Order Confirmed!
              </h3>
              <p className="text-sm text-[#596D5C] max-w-xs mx-auto">
                Thank you for choosing Piwva gentle care for your little one. We are carefully packaging your bottles with organic cotton protection.
              </p>
              <Button
                onClick={() => {
                  setCartCount(0);
                  handleClose();
                }}
                className="bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full px-8 mt-2"
              >
                Continue Exploring
              </Button>
            </div>
          ) : cartCount === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#F3EDE2] text-[#8C9E8E] mx-auto flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <p className="font-semibold text-lg text-[#1A3B22]">Your bag is currently empty</p>
              <p className="text-xs text-[#596D5C] max-w-xs mx-auto">
                Explore the new launch: Piwva Baby Moisture Lotion crafted with soothing natural oat and organic shea butter.
              </p>
              <Button
                onClick={() => {
                  setCartCount(1);
                }}
                className="bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full px-6 text-sm"
              >
                Add 1 Bottle ($24)
              </Button>
            </div>
          ) : (
            <div className="py-4 space-y-4">
              {/* Free shipping progress bar */}
              <div className="bg-white p-3 rounded-2xl border border-[#DFEBD9] shadow-2xs">
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <span className="text-[#365A29] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {diffToFree === 0
                      ? "You unlocked FREE Expedited Baby-Safe Delivery!"
                      : `Add $${diffToFree.toFixed(2)} more for FREE baby delivery`}
                  </span>
                  <span className="text-[#596D5C]">
                    ${subtotal.toFixed(0)}/${shippingThreshold}
                  </span>
                </div>
                <div className="w-full bg-[#EBF3E7] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#4D6D2E] h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Cart Item Card */}
              <div className="bg-white p-4 rounded-2xl border border-[#DFEBD9] flex gap-3.5 items-center">
                <div className="w-18 h-18 rounded-xl bg-[#FAF7F2] p-1 border border-[#E9F0E4] shrink-0 overflow-hidden relative">
                  <Image
                    src="/images/product-bottle.jpg"
                    alt="piwva Baby Moisture Lotion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <h4 className="text-sm font-bold text-[#1A3B22] truncate">
                        piwva Baby Moisture Lotion
                      </h4>
                      <p className="text-xs text-[#596D5C]">250ml • Hypoallergenic</p>
                    </div>
                    <button
                      onClick={() => setCartCount(0)}
                      className="text-[#96A798] hover:text-red-600 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#D5E5CD] rounded-full bg-[#FAF7F2] p-0.5">
                      <button
                        onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[#1A3B22] hover:bg-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-[#1A3B22]">
                        {cartCount}
                      </span>
                      <button
                        onClick={() => setCartCount(cartCount + 1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[#1A3B22] hover:bg-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-sm font-bold text-[#1A3B22]">
                      ${(unitPrice * cartCount).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Safe reassurance */}
              <div className="flex items-center gap-2 text-xs text-[#526B54] bg-[#EBF3E7]/70 p-2.5 rounded-xl border border-[#DCE8D5]">
                <ShieldCheck className="w-4 h-4 text-[#4D6D2E] shrink-0" />
                <span>100% Happiness Guarantee: Free 30-day gentle baby refund.</span>
              </div>
            </div>
          )}
        </div>

        {!checkedOut && cartCount > 0 && (
          <div className="border-t border-[#E1EBDC] pt-4 mt-2 space-y-3">
            <div className="space-y-1.5 text-xs text-[#596D5C]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#1A3B22]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Gentle Packaging & Shipping</span>
                <span className="font-semibold text-[#4D6D2E]">
                  {diffToFree === 0 ? "FREE" : "$4.99"}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1A3B22] pt-2 border-t border-[#E6EFE2]">
                <span>Total</span>
                <span>
                  ${(subtotal + (diffToFree === 0 ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              className="w-full h-12 bg-[#4D6D2E] hover:bg-[#3D5624] text-white font-semibold rounded-full flex items-center justify-center gap-2 text-base shadow-md shadow-[#4D6D2E]/20"
            >
              Checkout Now &rarr;
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

