"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/decorations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Leaf, Award } from "lucide-react";
import confetti from "canvas-confetti";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.9 },
        colors: ["#4D6D2E", "#8EAF74", "#E5EEDD"],
      });
    } catch {
      // ignore
    }

    setSubscribed(true);
  };

  const trustBadges = [
    { icon: ShieldCheck, text: "Pediatrician Tested" },
    { icon: Leaf, text: "100% Plant-Based" },
    { icon: Heart, text: "Cruelty Free & Vegan" },
    { icon: Award, text: "Certified Hypoallergenic" },
  ];

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#DFEBD9] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-14 border-b border-[#E3EDDD]">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 bg-white/70 rounded-2xl border border-[#E3EDDD]"
              >
                <div className="w-9 h-9 rounded-full bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#1B381E]">
                  {badge.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo />
            <p className="text-sm text-[#596D5C] max-w-sm leading-relaxed">
              Pure, safe and thoughtful care products for your newborn and growing baby. Designed with gentle love, formulated by pediatric dermatologists.
            </p>
            <div className="text-xs text-[#758878] space-y-1">
              <p>Piwva Baby Care Labs Inc.</p>
              <p>Crafted with love for sensitive skin worldwide.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B381E]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#596D5C]">
              <li>
                <Link href="/" className="hover:text-[#4D6D2E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#4D6D2E] transition-colors">
                  About Our Story
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#4D6D2E] transition-colors">
                  Upcoming Products (Waitlist)
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="hover:text-[#4D6D2E] transition-colors">
                  Baby&apos;s First 90 Days Care Guide
                </Link>
              </li>
              <li>
                <Link href="/our-promise" className="hover:text-[#4D6D2E] transition-colors">
                  Our Sacred Promise
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-[#4D6D2E] transition-colors">
                  Parent Care & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B381E]">
              Stay Connected
            </h4>
            <p className="text-xs text-[#596D5C]">
              Join our weekly newsletter for pediatrician tips, baby skin milestones, and secret drop previews.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-[#D6E5CF] text-xs h-10"
                  />
                  <Button
                    type="submit"
                    className="bg-[#4D6D2E] hover:bg-[#3D5724] text-white rounded-full px-4 text-xs font-semibold shrink-0 h-10"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-[10px] text-[#7A8E7C]">
                  By signing up, you agree to receive gentle updates from Piwva.
                </p>
              </form>
            ) : (
              <div className="p-3 bg-[#EBF3E7] rounded-2xl border border-[#D5E5CB] flex items-center gap-2 text-xs font-semibold text-[#2C5222]">
                <CheckCircle2 className="w-4 h-4 text-[#4D6D2E]" />
                <span>Thank you! You are on our VIP parent list.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E3EDDD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A8E7C] gap-4">
          <p>&copy; 2026 Piwva Baby Care. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#1A3B22] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#1A3B22] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#1A3B22] cursor-pointer">Gentle Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
