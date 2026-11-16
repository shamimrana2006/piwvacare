"use client";

import React, { useState } from "react";
import { Clock, Sun, Moon, Bath, Shield, CheckCircle2 } from "lucide-react";

export function CareGuideSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "morning",
      icon: Sun,
      time: "Morning Care",
      title: "Gentle Morning Refresh",
      summary: "Start the day with warm water wipes and a lightweight lotion touch to wake tender skin.",
      tips: [
        "Wipe baby's face, neck folds, and hands with a lukewarm damp organic cotton cloth.",
        "Apply 1 pump of Piwva Baby Moisture Lotion to exposed cheeks to shield from dry indoor air.",
        "Dress in breathable 100% organic cotton fabrics.",
      ],
    },
    {
      id: "bath",
      icon: Bath,
      time: "Bath Time Routine",
      title: "Lukewarm 5-Minute Splash",
      summary: "Short, soothing baths preserve newborn natural skin oils without stripping.",
      tips: [
        "Keep bath water comfortably warm at approximately 37°C / 98.6°F.",
        "Use a soap-free, tear-free gentle baby wash, keeping bath time under 10 minutes.",
        "Pat — never rub — delicate baby skin dry with a soft fluffy hooded towel.",
      ],
    },
    {
      id: "bedtime",
      icon: Moon,
      time: "Bedtime Routine",
      title: "Calming Bedtime Massage",
      summary: "Promote deeper, peaceful sleep and strengthen parent-infant bonding with rhythmic strokes.",
      tips: [
        "Lock in hydration by smoothing Piwva Moisture Lotion within 3 minutes of stepping out of the bath.",
        "Gently stroke down baby's arms and legs in slow, calming circular motions.",
        "Speak or sing in a soft whisper to signal restfulness and emotional safety.",
      ],
    },
    {
      id: "diaper",
      icon: Shield,
      time: "Diaper Ritual",
      title: "Barrier Protection",
      summary: "Prevent chafing, irritation and redness between diaper changes.",
      tips: [
        "Allow skin to fully air-dry for 1-2 minutes during diaper changes.",
        "Apply a protective thin layer to keep moisture away from delicate folds.",
        "Change diapers frequently to maintain natural skin pH balance.",
      ],
    },
  ];

  return (
    <section id="care-guide" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B381E] tracking-tight">
            The Gentle Baby Care Guide
          </h2>
          <p className="text-sm sm:text-base text-[#596D5C]">
            Pediatrician-crafted rituals designed to comfort, soothe, and protect your little one at every hour.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#4D6D2E] text-white border-[#4D6D2E] shadow-md shadow-[#4D6D2E]/20"
                    : "bg-white text-[#1A3B22] border-[#DEE8D8] hover:border-[#4D6D2E]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 ${
                    isActive ? "bg-white/20 text-white" : "bg-[#EBF3E7] text-[#4D6D2E]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div
                  className={`text-[11px] font-semibold uppercase tracking-wider ${
                    isActive ? "text-[#E0EED7]" : "text-[#657767]"
                  }`}
                >
                  {step.time}
                </div>
                <div className="text-sm font-bold truncate mt-0.5">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#DEE8D8] shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B381E]">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-[#596D5C] leading-relaxed">
                {steps[activeStep].summary}
              </p>

              <div className="space-y-3 pt-3">
                {steps[activeStep].tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4D6D2E] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#273D2A] leading-snug">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick reassurance card */}
            <div className="w-full md:w-72 bg-[#FAF7F2] p-5 rounded-2xl border border-[#DFE8DA] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E]">
                Pediatrician Tip
              </h4>
              <p className="text-xs text-[#596D5C] leading-relaxed">
                A baby&apos;s skin is 30% thinner than an adult&apos;s and loses moisture twice as fast. Always apply lotion on slightly damp skin to maximize absorption.
              </p>
              <div className="pt-2 border-t border-[#E3EDDD] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4D6D2E]" />
                <span className="text-[11px] font-semibold text-[#1A3B22]">Piwva Gentle Care Lab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

