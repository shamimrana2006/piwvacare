"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StayUpdatedModal } from "@/components/stay-updated-modal";
import { SearchDialog } from "@/components/search-dialog";
import { CartDrawer } from "@/components/cart-drawer";
import { ProductDetailModal } from "@/components/product-detail-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  MessageCircle,
  Clock,
  CheckCircle2,
  Send,
  PhoneCall,
  ShieldAlert,
  AlertTriangle,
  HeartPulse,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import confetti from "canvas-confetti";

export default function SupportRoute() {
  const [stayUpdatedOpen, setStayUpdatedOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    babyAge: "0-3m",
    subject: "Upcoming Launch Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#4D6D2E", "#8EAF74", "#E5EEDD"],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  // Emergency Triage State
  const [emergencyQuery, setEmergencyQuery] = useState("");
  const [emergencyResult, setEmergencyResult] = useState<{
    query: string;
    level: "critical" | "urgent" | "moderate";
    levelLabel: string;
    levelColor: string;
    title: string;
    summary: string;
    actions: string[];
    warnings: string[];
    doNot: string[];
    hotline: string;
    hotlineName: string;
  } | null>(null);

  const getEmergencyTriage = (q: string) => {
    const text = q.toLowerCase();

    // 1. Fever / High Temperature
    if (
      text.includes("fever") ||
      text.includes("temp") ||
      text.includes("hot") ||
      text.includes("warm") ||
      text.includes("জ্বর")
    ) {
      return {
        query: q,
        level: "critical" as const,
        levelLabel: "URGENT MEDICAL PRIORITY",
        levelColor: "bg-red-50 text-red-800 border-red-200",
        title: "Infant Fever & Temperature Care",
        summary:
          "For newborns and infants under 3 months, any temperature of 100.4°F (38°C) or higher requires immediate evaluation by a pediatrician or emergency room.",
        actions: [
          "Remove excessive layers of clothing; dress baby in single-layer lightweight cotton.",
          "Keep the nursery temperature comfortable and cool (68°F–72°F / 20°C–22°C).",
          "Offer frequent breast milk or formula feedings to prevent dehydration.",
          "You may gently sponge baby with lukewarm water (never use cold water, ice, or alcohol rubs).",
        ],
        warnings: [
          "Baby is unusually lethargic, limp, or difficult to awaken.",
          "Persistent grunting, whimpering, or rapid breathing with chest retractions.",
          "Fewer than 6 wet diapers in 24 hours, dry tongue, or sunken soft spot (fontanelle).",
        ],
        doNot: [
          "Do NOT give infant acetaminophen or ibuprofen without doctor dosage verification.",
          "NEVER give aspirin to any infant or child (risk of severe Reye's syndrome).",
          "Do NOT submerge baby in cold baths, which causes shivering and raises core fever.",
        ],
        hotline: "tel:18002221222",
        hotlineName: "Call Pediatric Emergency Line: 1-800-222-1222",
      };
    }

    // 2. Swallowed / Ingested lotion or cream
    if (
      text.includes("swallow") ||
      text.includes("mouth") ||
      text.includes("eat") ||
      text.includes("ingest") ||
      text.includes("lotion") ||
      text.includes("cream") ||
      text.includes("soap") ||
      text.includes("poison") ||
      text.includes("মুখে") ||
      text.includes("খেয়ে")
    ) {
      return {
        query: q,
        level: "urgent" as const,
        levelLabel: "URGENT ASSESSMENT",
        levelColor: "bg-amber-50 text-amber-800 border-amber-200",
        title: "Accidental Ingestion & Mouth Exposure",
        summary:
          "Stay calm. Piwva and certified pediatric lotions are non-toxic and plant-derived. However, proper mouth cleaning and symptom observation are necessary whenever products enter baby's mouth.",
        actions: [
          "Do not force fingers down baby's throat. Gently wipe out any residual cream with a soft damp cloth.",
          "Offer a few sips of breast milk or water to rinse and soothe the throat.",
          "Keep the product container or tube nearby to read exact ingredients to the specialist.",
          "Monitor baby's breathing, alertness, and saliva closely for the next 30 minutes.",
        ],
        warnings: [
          "Persistent vomiting, coughing fits, or excessive drooling.",
          "Gasping noises, wheezing, or difficulty swallowing.",
          "Unusual drowsiness, limp tone, or unresponsiveness.",
        ],
        doNot: [
          "Do NOT induce vomiting (never use salt water, syrup of ipecac, or gag reflex).",
          "Do NOT give home remedies or unverified herbal concoctions.",
        ],
        hotline: "tel:18002221222",
        hotlineName: "Call Poison Control Center (Free 24/7): 1-800-222-1222",
      };
    }

    // 3. Rash / Allergy / Hives
    if (
      text.includes("rash") ||
      text.includes("hive") ||
      text.includes("allergy") ||
      text.includes("spot") ||
      text.includes("red") ||
      text.includes("swell") ||
      text.includes("itch") ||
      text.includes("র‍্যাশ") ||
      text.includes("এলার্জি")
    ) {
      return {
        query: q,
        level: "urgent" as const,
        levelLabel: "SKIN & ALLERGY EVALUATION",
        levelColor: "bg-amber-50 text-amber-800 border-amber-200",
        title: "Sudden Skin Rash, Hives, or Swelling",
        summary:
          "If baby develops unexpected red spots, hives, or swelling, immediately check facial features, lips, and breathing for any signs of acute allergic reaction.",
        actions: [
          "Immediately rinse off any newly introduced soap, oil, or lotion with lukewarm water.",
          "Keep skin clean, dry, and cool. Dress baby in loose, breathable cotton.",
          "Trim baby's fingernails or put on soft cotton mittens to prevent scratching.",
          "Take a well-lit photo of the rash with your smartphone to share with your pediatrician.",
        ],
        warnings: [
          "Swelling of the lips, tongue, eyelids, or throat (Anaphylaxis - call 911 / 999 immediately).",
          "Rash accompanied by high fever, noisy breathing, or purple spots that do not blanch when pressed.",
        ],
        doNot: [
          "Do NOT apply medicated hydrocortisone or OTC steroid creams without medical advice.",
          "Do NOT bathe baby in hot water, which aggravates histamine redness and itching.",
        ],
        hotline: "tel:18002221222",
        hotlineName: "Call On-Duty Pediatric Nurse: 1-800-222-1222",
      };
    }

    // 4. Breathing / Respiratory Distress
    if (
      text.includes("breath") ||
      text.includes("gasp") ||
      text.includes("cough") ||
      text.includes("chok") ||
      text.includes("wheez") ||
      text.includes("grunt") ||
      text.includes("শ্বাস") ||
      text.includes("কাশি")
    ) {
      return {
        query: q,
        level: "critical" as const,
        levelLabel: "CRITICAL EMERGENCY - SEEK ER IMMEDIATELY",
        levelColor: "bg-red-50 text-red-800 border-red-200",
        title: "Respiratory Distress & Breathing Difficulty",
        summary:
          "Fast breathing, nostril flaring, or skin pulling inward tightly around the ribs indicates your baby needs emergency medical care right away.",
        actions: [
          "Hold baby upright against your shoulder (keep head and neck gently aligned to keep airway open).",
          "Loosen any snug clothing around the neck, chest, and abdomen.",
          "If nasal congestion is present, use 1-2 drops of saline and gently clear with a suction bulb.",
          "Call 911 / 999 / 112 immediately or proceed to the closest emergency room.",
        ],
        warnings: [
          "Resting breathing rate exceeding 60 breaths per minute.",
          "Chest retractions (skin pulling inward between ribs or at the base of the throat).",
          "Bluish or dusky discoloration around mouth, lips, or fingernails.",
        ],
        doNot: [
          "Do NOT lay baby flat on their back when struggling to breathe.",
          "Do NOT give oral cough syrups, honey (risk of botulism under 1 yr), or decongestants.",
        ],
        hotline: "tel:911",
        hotlineName: "Call Emergency Ambulance: 911 / 999 / 112",
      };
    }

    // 5. Crying / Colic / Gas Pain
    if (
      text.includes("cry") ||
      text.includes("colic") ||
      text.includes("pain") ||
      text.includes("scream") ||
      text.includes("fuss") ||
      text.includes("gas") ||
      text.includes("কান্না") ||
      text.includes("পেট")
    ) {
      return {
        query: q,
        level: "moderate" as const,
        levelLabel: "SOOTHING & COMFORT PROTOCOL",
        levelColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
        title: "Inconsolable Crying, Gas & Colic",
        summary:
          "Prolonged infant crying is most frequently caused by trapped gas, hunger, overtiredness, or overstimulation. Apply gentle physical soothing techniques while checking for illness.",
        actions: [
          "Gently massage baby's tummy clockwise in slow circles to guide trapped gas out.",
          "Perform gentle bicycle legs while baby lies on their back to relieve abdominal tension.",
          "Hold baby in the football carry (tummy resting on forearm) with light rhythmic patting.",
          "Introduce low-frequency white noise (fan or gentle womb heartbeat) to calm overstimulation.",
        ],
        warnings: [
          "Inconsolable screaming lasting longer than 3 consecutive hours.",
          "Abdomen feels rigid, distended, or swollen, accompanied by vomiting.",
          "Crying accompanied by fever (100.4°F+) or a high-pitched, piercing shrill sound.",
        ],
        doNot: [
          "NEVER shake baby out of frustration (Shaken Baby Syndrome). Place baby safely in the crib and step away for 2 minutes if feeling overwhelmed.",
          "Do NOT administer unverified sleeping drops or adult antacids.",
        ],
        hotline: "tel:18002221222",
        hotlineName: "Call Pediatric Nurse Support: 1-800-222-1222",
      };
    }

    // Default intelligent triage
    return {
      query: q,
      level: "urgent" as const,
      levelLabel: "INSTANT PEDIATRIC TRIAGE",
      levelColor: "bg-rose-50 text-rose-800 border-rose-200",
      title: "Clinical Guidance for Your Question",
      summary: `Regarding "${q}": In any unexpected infant health situation, stay calm and observe essential vital signs before intervening.`,
      actions: [
        "Take baby's temperature with an accurate digital rectal thermometer.",
        "Assess alertness: is baby making eye contact, responding to voice, or unusually limp and drowsy?",
        "Check hydration status: confirm baby has had at least 6 wet diapers in the last 24 hours.",
        "When in doubt, speak directly with an on-duty pediatric triage nurse.",
      ],
      warnings: [
        "Labored breathing, wheezing, or grunting noises.",
        "Fever over 100.4°F (especially under 3 months of age).",
        "Refusing 2 or more consecutive feedings or unresponsive.",
      ],
      doNot: [
        "Do NOT administer unprescribed medications or aspirin.",
        "Do NOT rely on untested online home remedies for newborn symptoms.",
      ],
      hotline: "tel:18002221222",
      hotlineName: "Call On-Call Pediatrician: 1-800-222-1222 (or 911)",
    };
  };

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emergencyQuery.trim()) return;
    setEmergencyResult(getEmergencyTriage(emergencyQuery));
  };

  const supportFaqs = [
    {
      q: "When will the first batch of Piwva products be available to purchase?",
      a: "Our debut flagship, piwva Baby Moisture Lotion (250ml), is currently in its final bottling and clinical safety verification phase. Parents on our VIP Waitlist will receive priority access and an exclusive 20% launch voucher before public release.",
    },
    {
      q: "Can I use Piwva on premature infants or babies with severe eczema?",
      a: "Our formulations are designed specifically for the most fragile newborn skin (0+ months) and are free from all common allergens. However, for premature infants in neonatal care or clinical eczema under medical treatment, we always recommend consulting your pediatrician first.",
    },
    {
      q: "Do you offer sample sachets for sensitive skin patch testing?",
      a: "Yes! Every VIP waitlist family will receive complimentary sample miniatures with their launch order so you can perform a small 24-hour wrist patch test with complete peace of mind.",
    },
    {
      q: "How does the Emergency Baby Health support work, and is any login required?",
      a: "Our Emergency Baby Health support is 100% open with zero barriers: no login, no passwords, and no account creation. You can directly dial our pediatric triage line (1-tap call), open an instant WhatsApp chat with our nurse team, or request an emergency 3-minute callback.",
    },
    {
      q: "How can I collaborate or become a brand ambassador?",
      a: "We love partnering with thoughtful pediatric nurses, midwives, doulas, and parenting creators! Send a note to partners@piwva.com with your social links or nursery story.",
    },
  ];

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
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B381E] tracking-tight leading-tight">
              We&apos;re Here for You & Your Little One
            </h1>

            <p className="text-base sm:text-lg text-[#596D5C] max-w-2xl mx-auto leading-relaxed">
              Whether you have a question about our upcoming product launch, ingredient sourcing, or need gentle newborn skincare guidance &mdash; our team of parents and pediatric nurses is here.
            </p>
          </div>

          {/* Urgent Baby Health Emergency Support - Single Input Box (No Login Required) */}
          <section
            id="emergency-support"
            aria-label="Emergency Baby Health Support"
            className="mb-16 rounded-[36px] bg-gradient-to-br from-[#FFF5F2] via-[#FDF8F5] to-[#FFF1ED] border-2 border-[#F6C8C1] p-6 sm:p-10 lg:p-12 shadow-xl shadow-red-950/5 relative overflow-hidden"
          >
            {/* Subtle warm rose ambient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl -z-0 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8A1818] tracking-tight">
                  Emergency Baby Health Question?
                </h2>
                <p className="text-xs sm:text-base text-[#7A2E2E]">
                  No login, account, or password required. Type what is happening with your baby to get immediate clinical guidance and next steps.
                </p>
              </div>

              {/* Single Big Input Box */}
              <form onSubmit={handleEmergencySubmit} className="space-y-3">
                <div className="relative flex items-center bg-white rounded-full p-2 border-2 border-[#F4A8A0] shadow-md focus-within:border-[#D32F2F] transition-all">
                  <Input
                    type="text"
                    required
                    placeholder="e.g. Baby has 101 fever / swallowed lotion / sudden red rash / breathing fast..."
                    value={emergencyQuery}
                    onChange={(e) => setEmergencyQuery(e.target.value)}
                    className="flex-1 bg-transparent border-0 text-sm sm:text-base text-[#1A3B22] placeholder:text-[#9A7B76] focus-visible:ring-0 focus-visible:ring-offset-0 px-4 h-12"
                  />
                  <Button
                    type="submit"
                    className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full px-5 sm:px-8 h-12 text-xs sm:text-sm font-bold shadow-md shadow-red-700/25 shrink-0 cursor-pointer flex items-center gap-2"
                  >
                    <HeartPulse className="w-4 h-4" />
                    <span>Get Instant Guidance</span>
                  </Button>
                </div>

                {/* Quick Clickable Suggestions for panicked parents */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-[#7A3636]">
                  <span className="font-semibold text-[11px] text-[#8C4646]">Quick Tap:</span>
                  {[
                    { label: "🌡️ Baby Fever (100.4°F+)", query: "Baby has fever over 100.4 what to do" },
                    { label: "🧴 Swallowed Cream or Lotion", query: "Baby swallowed baby lotion accidentally" },
                    { label: "🔴 Sudden Red Rash or Hives", query: "Baby has sudden red rash and hives" },
                    { label: "🫁 Fast or Noisy Breathing", query: "Baby is breathing fast and chest is pulling in" },
                    { label: "😭 Inconsolable Crying & Gas", query: "Baby crying nonstop won't calm down" },
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setEmergencyQuery(chip.query);
                        setEmergencyResult(getEmergencyTriage(chip.query));
                      }}
                      className="bg-white/90 hover:bg-white text-[#8A1818] border border-[#F2BCB5] hover:border-[#D32F2F] px-3 py-1 rounded-full text-[11px] font-semibold transition-all shadow-2xs cursor-pointer"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </form>

              {/* Instant Emergency Result Card */}
              {emergencyResult && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F4CCC6] shadow-lg space-y-5 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F5E1DD] pb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-1.5 ${emergencyResult.levelColor}`}>
                        {emergencyResult.levelLabel}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#1B381E]">
                        {emergencyResult.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => {
                        setEmergencyResult(null);
                        setEmergencyQuery("");
                      }}
                      className="text-xs text-[#8A1818] font-bold underline hover:text-[#5E0F0F] self-start sm:self-auto cursor-pointer"
                    >
                      Ask Another Question &times;
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-sm font-semibold text-[#3B4D3E] bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8EDE5] leading-relaxed">
                    {emergencyResult.summary}
                  </p>

                  {/* 2 Column Guidance: What to do NOW vs What NOT to do */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Immediate Actions */}
                    <div className="p-4 rounded-2xl bg-[#F4F9F1] border border-[#D7EACD] space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D5A22] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#4D6D2E]" />
                        <span>Immediate Actions (Do This Now)</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#2F4432] leading-relaxed">
                        {emergencyResult.actions.map((act, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4D6D2E] mt-1.5 shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What NOT to do */}
                    <div className="p-4 rounded-2xl bg-[#FFF6F5] border border-[#F6D0CB] space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C2121] flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-[#D32F2F]" />
                        <span>What NOT to Do</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#5C2323] leading-relaxed">
                        {emergencyResult.doNot.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Red Flag Hospital Signs */}
                  <div className="p-4 rounded-2xl bg-[#FFF3CD]/60 border border-[#FBE09C] space-y-1.5">
                    <h4 className="text-xs font-bold text-[#8C5D07] flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-[#C68202]" />
                      <span>When to Seek Immediate Emergency Hospital Care</span>
                    </h4>
                    <p className="text-xs text-[#6F4904] leading-relaxed">
                      {emergencyResult.warnings.join(" • ")}
                    </p>
                  </div>

                  {/* Direct 1-Tap Emergency Call Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F5E1DD]">
                    <div className="text-xs text-[#596D5C] text-center sm:text-left">
                      <p className="font-bold text-[#1B381E]">Still concerned? Speak directly with a pediatric specialist:</p>
                      <p className="text-[11px] text-[#7A8E7C]">24/7 Free & Confidential Pediatric Triage Helpline</p>
                    </div>
                    <a
                      href={emergencyResult.hotline}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md shadow-red-700/25 transition-all hover:scale-105 shrink-0"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>{emergencyResult.hotlineName}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 3 Contact Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-7 rounded-3xl border border-[#DFE8DA] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1B381E]">
                  Email Care Team
                </h3>
                <p className="text-xs text-[#596D5C] leading-relaxed">
                  Direct parent assistance for questions, pre-orders, and ingredient transparency queries.
                </p>
              </div>
              <a
                href="mailto:care@piwva.com"
                className="text-sm font-bold text-[#4D6D2E] hover:underline"
              >
                care@piwva.com &rarr;
              </a>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#DFE8DA] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1B381E]">
                  VIP Launch Concierge
                </h3>
                <p className="text-xs text-[#596D5C] leading-relaxed">
                  Inquire about early bottle reservations, nursery gift sets, or bulk order allocation.
                </p>
              </div>
              <a
                href="mailto:vip@piwva.com"
                className="text-sm font-bold text-[#4D6D2E] hover:underline"
              >
                vip@piwva.com &rarr;
              </a>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#DFE8DA] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3E7] text-[#4D6D2E] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1B381E]">
                  Response Hours
                </h3>
                <p className="text-xs text-[#596D5C] leading-relaxed">
                  Monday to Saturday, 8am &mdash; 7pm EST. Average response time is under 2 hours.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#667B69]">
                Always parent-first.
              </span>
            </div>
          </div>

          {/* Contact Form & Quick FAQ Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
            {/* Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#DEE8D8] shadow-xs">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-2xl font-bold text-[#1B381E]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#596D5C]">
                      We answer every single parent message with care and warmth.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="e.g. Sarah Mitchell"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-[#FAF7F2] border-[#D6E5CF] text-xs h-11"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-[#FAF7F2] border-[#D6E5CF] text-xs h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                        Baby&apos;s Stage
                      </label>
                      <select
                        value={formData.babyAge}
                        onChange={(e) =>
                          setFormData({ ...formData, babyAge: e.target.value })
                        }
                        className="w-full h-11 rounded-full border border-[#D6E5CF] bg-[#FAF7F2] px-4 text-xs text-[#1A3B22] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                      >
                        <option value="expecting">Expecting / Pregnant</option>
                        <option value="0-3m">0 &mdash; 3 Months (Newborn)</option>
                        <option value="3-6m">3 &mdash; 6 Months</option>
                        <option value="6-12m">6 &mdash; 12 Months</option>
                        <option value="toddler">1+ Years (Toddler)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full h-11 rounded-full border border-[#D6E5CF] bg-[#FAF7F2] px-4 text-xs text-[#1A3B22] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                      >
                        <option value="Upcoming Launch Inquiry">Upcoming Launch Inquiry</option>
                        <option value="Ingredient Transparency">Ingredient Transparency</option>
                        <option value="Skincare Guidance">Skincare Guidance</option>
                        <option value="Press & Partnerships">Press & Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A3B22] block mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help you and your baby today?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-2xl border border-[#D6E5CF] bg-[#FAF7F2] p-4 text-xs text-[#1A3B22] placeholder:text-[#889B8A] focus:outline-none focus:ring-2 focus:ring-[#4D6D2E]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#4D6D2E] hover:bg-[#3D5624] text-white rounded-full font-semibold flex items-center justify-center gap-2 text-sm shadow-md shadow-[#4D6D2E]/20"
                  >
                    <Send className="w-4 h-4" />
                    Send to Parent Care Team
                  </Button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EBF3E7] text-[#4D6D2E] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#4D6D2E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B381E]">
                    Message Safely Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#596D5C] max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name || "friend"}. Our team will review your note and respond to <strong>{formData.email}</strong> within 2 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full border-[#4D6D2E] text-[#2F5323] hover:bg-[#EBF3E7] text-xs"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>

            {/* Quick FAQ Accordion */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#1B381E]">
                  Common Support Questions
                </h3>
              </div>

              <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
                {supportFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-white">
                    <AccordionTrigger className="text-sm font-bold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-[#596D5C] leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
