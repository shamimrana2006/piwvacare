"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Heart,
  Droplets,
  Sun,
  Moon,
  Shield,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { DoodleHeart } from "@/components/decorations";

export function CareGuidePage() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);

  const roadmapPhases = [
    {
      phaseId: "phase-1",
      range: "Days 1 – 14",
      title: "The Golden Arrival",
      badge: "Newborn Nesting",
      themeColor: "from-[#F3EDE2] to-[#EBE2D3]",
      summary:
        "Preserving your baby's natural vernix shield, gentle cord care, and first sponge bath rituals.",
      sessions: [
        {
          day: "Days 1 – 3",
          topic: "Vernix Caseosa Preservation & First Warm Touch",
          subtitle: "Why baby skin needs gentle patience, not immediate soap.",
          guidance: [
            "Do not rush to scrub away the white vernix coating. It is nature's most advanced antimicrobial moisturizing barrier.",
            "Use only clean, lukewarm water (approx 37°C / 98.6°F) and an organic soft cotton cloth for gentle face and diaper area wipes.",
            "Keep baths under 5 minutes and avoid immersing the umbilical area until the stump naturally falls off.",
          ],
          normalCheck:
            "Normal: Mild redness around feet or hands, slight peeling as baby transitions from amniotic fluid to dry air.",
          doctorNote:
            "Notify pediatrician if baby develops a high fever (above 38°C / 100.4°F) or yellow pus around eyes.",
        },
        {
          day: "Days 4 – 7",
          topic: "Umbilical Cord Stump Care & Dry Fold Protection",
          subtitle: "Keeping the cord area clean, dry, and irritation-free.",
          guidance: [
            "Fold the diaper waistband downward so it does not rub or trap moisture against the umbilical stump.",
            "Keep the area clean and completely dry. Sponge bathe only; let air dry thoroughly before dressing.",
            "Never pull or tug at the stump, even if it looks attached by a thread. It will detach safely on its own.",
          ],
          normalCheck:
            "Normal: A tiny drop of dried dark blood as the stump naturally separates is completely typical.",
          doctorNote:
            "Notify pediatrician if the skin around the stump becomes fiery red, hot to touch, or emits an unpleasant odor.",
        },
        {
          day: "Days 8 – 14",
          topic: "Natural Newborn Skin Peeling & Gentle Oat Hydration",
          subtitle: "Nourishing the deeper skin layers as outer layers shed.",
          guidance: [
            "Almost all healthy full-term newborns experience dry peeling skin on wrists, ankles, and tummy during week two.",
            "Apply a pea-sized amount of fragrance-free, colloidal oat baby moisture lotion right after lukewarm sponge wipes.",
            "Gently massage with clean warm hands using light, rhythmic downward strokes to soothe dry spots.",
          ],
          normalCheck:
            "Normal: Flaking dry skin without itching or discomfort is part of newborn skin maturation.",
          doctorNote:
            "Contact your pediatrician if skin cracks deeply, bleeds, or baby shows signs of eczema distress.",
        },
      ],
    },
    {
      phaseId: "phase-2",
      range: "Days 15 – 30",
      title: "The Gentle Rhythm",
      badge: "Weeks 3 & 4",
      themeColor: "from-[#EAF2E4] to-[#DEEAD5]",
      summary:
        "Establishing calming bedtime sleep cues, skin-to-skin bonding, and gentle cradle cap care.",
      sessions: [
        {
          day: "Days 15 – 21",
          topic: "Evening Sleep Cues & Rhythmic Skin-to-Skin Touch",
          subtitle: "Signaling emotional security and deep restorative rest.",
          guidance: [
            "Implement a predictable 3-step evening wind-down: lukewarm bath (5 mins), gentle soothing lotion, and dimmed soft light.",
            "Practice 15 minutes of skin-to-skin contact against your chest. It stabilizes infant heart rate and body temperature.",
            "Sing or speak in a soft rhythmic whisper while gently applying lotion down baby's legs and tummy.",
          ],
          normalCheck:
            "Normal: Frequent night awakenings for nursing or feeding; sleep cycles are still developing circadian rhythms.",
          doctorNote:
            "Consult your pediatrician if baby is unusually lethargic or refuses two consecutive feeding sessions.",
        },
        {
          day: "Days 22 – 30",
          topic: "Cradle Cap Awareness & Natural Scalp Care",
          subtitle: "Soothing flaky scalp patches with plant lipids.",
          guidance: [
            "Cradle cap (infantile seborrheic dermatitis) is caused by harmless natural sebum production, not poor hygiene.",
            "Warm a few drops of pure plant lipid or gentle baby lotion into your palms and massage gently onto the scalp 15 minutes before bath.",
            "During bath time, use a soft silicone baby scalp brush or gentle cloth to loosen flakes in gentle circular motions. Never pick with fingernails.",
          ],
          normalCheck:
            "Normal: Yellowish or crusty scales that don't bother or itch baby.",
          doctorNote:
            "Call your pediatrician if scales become inflamed, weep fluid, or spread down past the eyebrows and ears.",
        },
      ],
    },
    {
      phaseId: "phase-3",
      range: "Days 31 – 60",
      title: "Awakening & Senses",
      badge: "Month 2",
      themeColor: "from-[#F3EDE2] to-[#E9DEC $\\div$ C]",
      summary:
        "5-minute infant massage routines, tummy time skin protection, and saliva rash barrier shielding.",
      sessions: [
        {
          day: "Days 31 – 45",
          topic: "5-Minute Calming Infant Massage Routine",
          subtitle: "Stimulating neurological development and easing gas/colic.",
          guidance: [
            "Perform infant massage when baby is calm and alert, at least 45 minutes after feeding.",
            "Warm lotion in your hands. Use gentle 'I Love You' clockwise strokes across the abdomen to ease digestive trapped gas.",
            "Gently stroke down the arms, open the tiny palms, and gently roll down each leg with relaxed loving eye contact.",
          ],
          normalCheck:
            "Normal: Baby smiling, cooing, or relaxed breathing during soothing touch.",
          doctorNote:
            "If baby arches back in severe discomfort or cries consistently for over 3 hours daily, consult your pediatrician regarding colic.",
        },
        {
          day: "Days 46 – 60",
          topic: "Tummy Time Comfort & Drool Rash Shielding",
          subtitle: "Shielding cheeks and neck folds from moisture chafing.",
          guidance: [
            "As baby begins early tummy time, saliva and friction can cause redness around the chin and neck folds.",
            "Gently dab drool with a clean cloth — never rub harshly.",
            "Apply a breathable thin layer of protective oat moisture lotion to cheeks and neck before tummy sessions to create a moisture shield.",
          ],
          normalCheck:
            "Normal: Mild flushing on cheeks after active tummy effort.",
          doctorNote:
            "Seek guidance if rash becomes pimply, blistered, or infected.",
        },
      ],
    },
    {
      phaseId: "phase-4",
      range: "Days 61 – 90",
      title: "Blooming Confidence",
      badge: "Month 3",
      themeColor: "from-[#EAF2E4] to-[#DCEBD4]",
      summary:
        "Outdoor air protection, seasonal barrier care, and celebrating the 90-day skin milestone.",
      sessions: [
        {
          day: "Days 61 – 75",
          topic: "Outdoor Air, Weather Barrier & Wind Protection",
          subtitle: "Shielding fragile infant skin from drafts and temperature swings.",
          guidance: [
            "Before taking baby in a stroller on breezy or dry days, apply a gentle protective layer of moisture lotion to exposed cheeks.",
            "Dress baby in one more layer than you would wear comfortably yourself, preferring breathable 100% natural fibers.",
            "Keep baby shaded from direct ultraviolet sunlight, using canopy shields and lightweight cotton sun hats.",
          ],
          normalCheck:
            "Normal: Slight cheek rosiness in cool weather that dissipates once indoors.",
          doctorNote:
            "Notify doctor if baby develops hives, swelling, or extreme sun sensitivity.",
        },
        {
          day: "Days 76 – 90",
          topic: "The 90-Day Skin Barrier Milestone Celebration",
          subtitle: "Celebrating your baby's strengthened acid mantle and healthy skin.",
          guidance: [
            "By Day 90, your baby's skin acid mantle has strengthened significantly. Continue consistent daily rituals to maintain barrier resilience.",
            "Transition into daily post-bath hydration routines to maintain deep lipid balance through teething and crawling stages.",
            "Celebrate the profound bonding journey you and your baby have nurtured together over these first three months!",
          ],
          normalCheck:
            "Normal: Smooth, resilient, soft baby skin with natural self-hydrating capacity.",
          doctorNote:
            "Schedule your baby's 3-month wellness pediatric checkup to review growth and milestone charts.",
        },
      ],
    },
  ];

  const currentPhase = roadmapPhases[selectedPhase];
  const activeSession = currentPhase.sessions[selectedDay] || currentPhase.sessions[0];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2">
            <Badge
              variant="soft"
              className="bg-[#E7EFE3] text-[#345928] border border-[#D5E5CB] px-4 py-1.5 rounded-full text-xs font-semibold shadow-2xs flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#4D6D2E]" />
              The First 90 Days • Gentle Milestone Journey
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight font-title">
            Baby&apos;s First 90 Days: What to Do
          </h1>

          <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
            Day-by-day compassionate rituals, pediatric skin science, and newborn comfort techniques. Zero overwhelm &mdash; just gentle, loving guidance for every stage of your baby&apos;s fourth trimester.
          </p>
        </div>

        {/* 4 Phase Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {roadmapPhases.map((phase, idx) => {
            const isCurrent = selectedPhase === idx;
            return (
              <button
                key={phase.phaseId}
                type="button"
                onClick={() => {
                  setSelectedPhase(idx);
                  setSelectedDay(0);
                }}
                className={`p-5 rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-[#4D6D2E] text-white border-[#4D6D2E] shadow-md shadow-[#4D6D2E]/20 -translate-y-1"
                    : "bg-white text-[#1A3B22] border-[#DEE8D8] hover:border-[#4D6D2E]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-2">
                    <span className={isCurrent ? "text-[#D9ECCF]" : "text-[#4D6D2E]"}>
                      {phase.range}
                    </span>
                    <span className="opacity-80">Phase 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug font-title">
                    {phase.title}
                  </h3>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-xs flex items-center justify-between font-semibold ${
                    isCurrent ? "border-white/20 text-[#E0EED6]" : "border-[#EEF4EA] text-[#637765]"
                  }`}
                >
                  <span>{phase.sessions.length} Day Sessions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Phase Summary Bar */}
        <div className="bg-[#FAF7F2] p-5 rounded-3xl border border-[#DFE8DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D6D2E]">
              Currently Exploring: {currentPhase.range} &mdash; {currentPhase.badge}
            </span>
            <p className="text-sm text-[#596D5C] mt-0.5">{currentPhase.summary}</p>
          </div>

          {/* Session Day Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {currentPhase.sessions.map((sess, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDay(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedDay === idx
                    ? "bg-[#4D6D2E] text-white shadow-2xs"
                    : "bg-white text-[#526955] border border-[#D7E5D0] hover:bg-[#EBF3E7]"
                }`}
              >
                {sess.day}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Session Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#DEE8D8] shadow-xs mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Guidance & Daily Steps */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4D6D2E] bg-[#EBF3E7] px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  Session Focus: {activeSession.day}
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B381E] leading-tight font-title">
                  {activeSession.topic}
                </h2>

                <p className="text-base text-[#596D5C] font-medium">
                  {activeSession.subtitle}
                </p>
              </div>

              {/* Step-by-Step Parent Guidance */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B381E]">
                  Daily Recommended Steps & Rituals:
                </h4>
                {activeSession.guidance.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5EFE1]"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#4D6D2E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{i + 1}
                    </div>
                    <p className="text-sm text-[#273D2A] leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pediatrician Normal Check & Warnings */}
            <div className="lg:col-span-4 space-y-5">
              {/* Normal Check Box */}
              <div className="p-5 rounded-2xl bg-[#F4F9F1] border border-[#DCEAD6] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5323]">
                  <CheckCircle2 className="w-4 h-4 text-[#4D6D2E]" />
                  What Is Normal
                </div>
                <p className="text-xs text-[#526654] leading-relaxed">
                  {activeSession.normalCheck}
                </p>
              </div>

              {/* Doctor Note Box */}
              <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-[#F4E3D0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9C5D1F]">
                  <HelpCircle className="w-4 h-4 text-[#D97706]" />
                  When to Call Your Doctor
                </div>
                <p className="text-xs text-[#7A5B3E] leading-relaxed">
                  {activeSession.doctorNote}
                </p>
              </div>

              {/* Gentle Encouragement */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E1ECE0] text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#EBF3E7] text-[#4D6D2E] mx-auto flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-[#4D6D2E]/20" />
                </div>
                <h5 className="text-xs font-bold text-[#1B381E]">
                  You Are Doing Wonderfully
                </h5>
                <p className="text-[11px] text-[#596D5C] leading-snug">
                  Every baby is completely unique. Trust your instincts, embrace the cuddles, and take each day at your own gentle pace.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 90-Day Skin Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-[#DFEBD9] space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#1B381E] font-title">
              Preserve The Acid Mantle
            </h4>
            <p className="text-xs text-[#596D5C] leading-relaxed">
              Newborn skin takes approximately 90 days to establish its protective acidic pH (5.5). We avoid harsh foaming agents to protect this natural armor.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFEBD9] space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center mb-3">
              <Droplets className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#1B381E] font-title">
              Hydration Within 3 Minutes
            </h4>
            <p className="text-xs text-[#596D5C] leading-relaxed">
              Water evaporates quickly from fragile skin. Applying oat-infused moisture lotion immediately after patting dry seals in essential water molecules.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#DFEBD9] space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#1B381E] font-title">
              The Power of Loving Touch
            </h4>
            <p className="text-xs text-[#596D5C] leading-relaxed">
              Clinical studies demonstrate that gentle daily massage lowers infant cortisol (stress levels) by 32% and encourages deeper, restorative sleep patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

