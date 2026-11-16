"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Leaf,
  Droplets,
  HeartHandshake,
  Tag,
  ArrowRight,
} from "lucide-react";
import { DoodleHeart } from "@/components/decorations";
import confetti from "canvas-confetti";

export function ProductUpcomingPage() {
  const [email, setEmail] = useState("");
  const [selectedStage, setSelectedStage] = useState("expecting");
  const [joined, setJoined] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
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

  const upcomingProducts = [
    {
      id: "lotion",
      name: "piwva Baby Moisture Lotion",
      size: "250ml",
      status: "Final Bottling Stage",
      statusColor: "bg-[#EBF3E7] text-[#2F5223]",
      tag: "Flagship Debut",
      image: "/images/product-bottle.jpg",
      description:
        "An ultra-rich yet featherlight hydrator that mimics the protective vernix of newborn skin. Locks in 24-hour moisture without residue.",
      keyIngredients: [
        "Colloidal Oat Extract",
        "Organic Shea Butter",
        "Calendula Flower",
      ],
      progress: 92,
    },
    {
      id: "wash",
      name: "piwva Gentle Head-to-Toe Baby Wash",
      size: "200ml",
      status: "Clinical Patch Testing",
      statusColor: "bg-[#F3EDE2] text-[#5A4526]",
      tag: "Tear-Free Ritual",
      image: "/images/lotion-sand-nature.jpg",
      description:
        "Soap-free, 100% plant-glucoside cleansing wash that respects your baby's fragile acid mantle during daily warm baths.",
      keyIngredients: [
        "Organic Chamomile Hydrosol",
        "Coconut Amino Lipids",
        "Plant Squalane",
      ],
      progress: 75,
    },
    {
      id: "balm",
      name: "piwva Soothing Diaper Shield Balm",
      size: "100ml",
      status: "Formulation Certified",
      statusColor: "bg-[#EBF3E7] text-[#2F5223]",
      tag: "Barrier Care",
      image: "/images/baby-handprint-sand.jpg",
      description:
        "A breathable, beeswax-free vegan barrier balm designed to prevent chafing and redness between diaper changes.",
      keyIngredients: [
        "Cold-Pressed Jojoba",
        "Unrefined Mango Butter",
        "Vitamin E",
      ],
      progress: 80,
    },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Pediatric Science & 0% Toxin Audit",
      desc: "Formulated without 1,400+ questionable cosmetic chemicals.",
      done: true,
    },
    {
      step: "02",
      title: "Independent Clinical Dermatologist Testing",
      desc: "Hypoallergenic and irritation-free verification on sensitive infant skin.",
      done: true,
    },
    {
      step: "03",
      title: "Sustainable Bottle Packaging & Purity Sealing",
      desc: "Airtight sanitary pumps to prevent bacteria contamination.",
      done: false,
      current: true,
    },
    {
      step: "04",
      title: "Exclusive VIP Early Access Drop",
      desc: "First 500 handcrafted bottles reserved exclusively for waitlist families.",
      done: false,
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="soft"
              className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
            >
              <Clock className="w-3.5 h-3.5 text-[#4D6D2E]" />
              Upcoming Launch • No Stock Available Yet
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight font-title">
            Pure Care in the Making
          </h1>

          <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
            We are taking zero shortcuts. Our debut baby skincare collection is currently undergoing final pediatric clinical verification. Sign up for early access to reserve your first bottle before public release.
          </p>
        </div>

        {/* Upcoming Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {upcomingProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-[#DFEBD9] overflow-hidden shadow-xs hover:shadow-md hover:border-[#BED6B4] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image with upcoming badge */}
                <div className="relative aspect-4/3 w-full bg-[#F5EDE1] overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1A3B22] shadow-xs flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#4D6D2E]" />
                    {prod.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#4D6D2E] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
                    Coming Soon
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#7A8E7C] font-semibold">
                      {prod.size}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${prod.statusColor}`}
                    >
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1B381E] leading-snug font-title">
                    {prod.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#596D5C] leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Key Ingredients */}
                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-[#1A3B22] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Leaf className="w-3 h-3 text-[#4D6D2E]" />
                      Core Botanicals:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.keyIngredients.map((ing, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-[#FAF7F2] text-[#425845] border border-[#DEE8D8] px-2.5 py-0.5 rounded-full"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress & Waitlist Action */}
              <div className="p-6 pt-0 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-medium text-[#596D5C]">
                    <span>Readiness Progress</span>
                    <span className="font-bold text-[#1A3B22]">
                      {prod.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-[#EBF3E7] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#4D6D2E] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${prod.progress}%` }}
                    />
                  </div>
                </div>

                <Button
                  onClick={() => {
                    const el = document.getElementById("vip-waitlist");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="outline"
                  className="w-full rounded-full border-[#4D6D2E] text-[#2C5020] hover:bg-[#4D6D2E] hover:text-white transition-all text-xs font-semibold h-11"
                >
                  <Bell className="w-3.5 h-3.5" />
                  Notify Me on Drop
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Launch Roadmap / Production Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DEE8D8] shadow-xs mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
              Commitment to Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E] font-title">
              Our Journey to Launch
            </h2>
            <p className="text-sm text-[#596D5C]">
              Here is where we stand on our path to bringing pure, safe newborn care into your nursery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  step.current
                    ? "bg-[#FAF7F2] border-[#4D6D2E] shadow-sm ring-1 ring-[#4D6D2E]/20"
                    : step.done
                    ? "bg-[#FAF7F2]/60 border-[#DCE8D6]"
                    : "bg-white border-[#E7EFE2] opacity-80"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-[#4D6D2E] font-title">
                    PHASE {step.step}
                  </span>
                  {step.done ? (
                    <span className="text-[10px] font-bold text-[#2E5322] bg-[#E2EFDC] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#4D6D2E]" /> Completed
                    </span>
                  ) : step.current ? (
                    <span className="text-[10px] font-bold text-[#4D6D2E] bg-[#EBF3E7] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" /> In Progress
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-[#889B8A]">
                      Upcoming
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-[#1B381E] mb-1 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-[#596D5C] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* VIP Early Access Waitlist Form */}
        <div
          id="vip-waitlist"
          className="max-w-3xl mx-auto bg-gradient-to-b from-[#F6F0E6] to-[#EFE7D8] rounded-[40px] p-8 sm:p-12 border border-[#E8DEC $\\div$ C] shadow-lg text-center relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 hidden sm:block">
            <DoodleHeart className="w-10 h-10 text-[#4D6D2E] stroke-[2.5] rotate-12 opacity-80" />
          </div>

          {!joined ? (
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#EBF3E7] text-[#4D6D2E] mx-auto flex items-center justify-center">
                <Bell className="w-6 h-6 animate-pulse-subtle" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B381E] font-title">
                  Join the Secret VIP Launch List
                </h2>
                <p className="text-sm sm:text-base text-[#596D5C] max-w-lg mx-auto">
                  Be among the first 500 parents worldwide to experience Piwva. Receive a guaranteed 20% launch voucher and a complimentary organic cotton muslin cloth.
                </p>
              </div>

              <form onSubmit={handleJoinWaitlist} className="space-y-4 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-[#D6E5CF] text-sm h-12 rounded-full"
                  />
                  <Button
                    type="submit"
                    className="bg-[#4D6D2E] hover:bg-[#3D5724] text-white rounded-full px-6 h-12 text-sm font-semibold shrink-0 shadow-md shadow-[#4D6D2E]/20"
                  >
                    Reserve Priority
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                <div className="flex justify-center gap-2 pt-1 text-xs">
                  {[
                    { id: "expecting", label: "Expecting" },
                    { id: "newborn", label: "0-3 Months" },
                    { id: "baby", label: "3-12 Months" },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedStage(st.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        selectedStage === st.id
                          ? "bg-[#4D6D2E] text-white"
                          : "bg-white/80 text-[#596D5C] hover:bg-white"
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>

                <p className="text-[11px] text-[#788C7B]">
                  No spam ever. Unsubscribe anytime. You will only receive launch alerts.
                </p>
              </form>
            </div>
          ) : (
            <div className="py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF3E7] text-[#4D6D2E] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#4D6D2E]" />
              </div>
              <h3 className="text-3xl font-extrabold text-[#1B381E] font-title">
                You&apos;re On the VIP Priority List!
              </h3>
              <p className="text-sm text-[#596D5C] max-w-sm mx-auto">
                Thank you for believing in pure care. We&apos;ve sent a priority reservation confirmation to <strong>{email}</strong>.
              </p>
              <Button
                onClick={() => setJoined(false)}
                variant="outline"
                className="rounded-full border-[#4D6D2E] text-[#2F5323] hover:bg-[#EBF3E7]"
              >
                Register Another Email
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
