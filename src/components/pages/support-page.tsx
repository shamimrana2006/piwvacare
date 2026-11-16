"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  MessageCircle,
  HelpCircle,
  Clock,
  CheckCircle2,
  Send,
  Heart,
  Calendar,
  PhoneCall,
  ShieldAlert,
  AlertTriangle,
  HeartPulse,
  Activity,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import confetti from "canvas-confetti";

export function SupportPage() {
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

  const [urgentPhone, setUrgentPhone] = useState("");
  const [urgentRequested, setUrgentRequested] = useState(false);

  const handleUrgentCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urgentPhone.trim()) return;
    setUrgentRequested(true);
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

        {/* Urgent Baby Health Emergency Support Banner (No Login Required) */}
        <section
          id="emergency-support"
          aria-label="Emergency Baby Health Support"
          className="mb-16 rounded-[36px] bg-gradient-to-br from-[#FFF5F2] via-[#FDF8F5] to-[#FFF1ED] border-2 border-[#F6C8C1] p-6 sm:p-10 lg:p-12 shadow-xl shadow-red-950/5 relative overflow-hidden"
        >
          {/* Subtle warm rose ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F7D4CF] pb-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#D32F2F] text-white flex items-center justify-center shadow-md shadow-red-600/30 animate-pulse">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#8A1818] tracking-tight">
                      Emergency Baby Health Support
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#A83232]">
                      No login, password, or account needed &bull; Immediate 1-tap direct contact
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-900 text-xs font-bold shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                  <span>24/7 Live Triage Active</span>
                </div>
              </div>
            </div>

            {/* 3 Instant Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1: 1-Tap Emergency Call */}
              <div className="bg-white/95 rounded-3xl p-6 border border-[#F5C7C1] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#D32F2F] flex items-center justify-center border border-red-100">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1B381E]">
                    Pediatric Emergency Helpline
                  </h3>
                  <p className="text-xs text-[#596D5C] leading-relaxed">
                    Direct access to triage assistance for acute fevers, sudden allergic reactions, or infant pain.
                  </p>
                </div>
                <div className="space-y-2 pt-3 border-t border-[#F5E6E3]">
                  <a
                    href="tel:18002221222"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white py-3 rounded-full text-xs font-bold shadow-md shadow-red-700/20 transition-all hover:scale-[1.02]"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Hotline (1-Tap Dial)</span>
                  </a>
                  <p className="text-[11px] text-center text-[#7F8D80] font-medium">
                    Toll-Free &bull; 24/7 Available
                  </p>
                </div>
              </div>

              {/* Card 2: Instant WhatsApp Chat */}
              <div className="bg-white/95 rounded-3xl p-6 border border-[#E1ECD9] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#1B803E] flex items-center justify-center border border-emerald-100">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1B381E]">
                    Instant WhatsApp Nurse Chat
                  </h3>
                  <p className="text-xs text-[#596D5C] leading-relaxed">
                    Send photos of skin rashes, hives, or swelling for instant non-diagnostic assessment.
                  </p>
                </div>
                <div className="space-y-2 pt-3 border-t border-[#E5EFE1]">
                  <a
                    href="https://wa.me/18005550199?text=Hello%20Piwva%20Nurse%2C%20I%20have%20an%20urgent%20baby%20health%20question"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1EBE5D] hover:bg-[#169E4B] text-white py-3 rounded-full text-xs font-bold shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp (No Sign-in)</span>
                  </a>
                  <p className="text-[11px] text-center text-[#7F8D80] font-medium">
                    Zero Account Required &bull; Direct Open
                  </p>
                </div>
              </div>

              {/* Card 3: Poison & Accidental Ingestion */}
              <div className="bg-white/95 rounded-3xl p-6 border border-[#FBE0C9] shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#C65102] flex items-center justify-center border border-amber-100">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1B381E]">
                    Poison & Ingestion Control
                  </h3>
                  <p className="text-xs text-[#596D5C] leading-relaxed">
                    Immediate emergency guidance if baby swallowed, licked, or touched any unknown substance.
                  </p>
                </div>
                <div className="space-y-2 pt-3 border-t border-[#F8EADA]">
                  <a
                    href="tel:18002221222"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#D9530F] hover:bg-[#B64106] text-white py-3 rounded-full text-xs font-bold shadow-md shadow-amber-800/20 transition-all hover:scale-[1.02]"
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>Call Poison Helpline</span>
                  </a>
                  <p className="text-[11px] text-center text-[#7F8D80] font-medium">
                    National Poison Center &bull; Immediate Help
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Urgent Callback Strip & Hospital Warning */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-3">
              {/* 1-Click Callback (No login required) */}
              <div className="lg:col-span-7 bg-white/95 rounded-3xl p-6 sm:p-7 border border-[#F4CCC6] space-y-3">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#1B381E] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D32F2F]" />
                    <span>Request an Immediate 3-Minute Callback</span>
                  </h4>
                  <p className="text-xs text-[#596D5C] leading-relaxed">
                    Just enter your phone number. A duty pediatric nurse will dial you back immediately &mdash; no login, no password, no email needed.
                  </p>
                </div>

                {!urgentRequested ? (
                  <form onSubmit={handleUrgentCallback} className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Input
                      type="tel"
                      required
                      placeholder="Enter mobile number (e.g. +1 555 123 4567)"
                      value={urgentPhone}
                      onChange={(e) => setUrgentPhone(e.target.value)}
                      className="bg-[#FAF7F2] border-[#E8C5C0] text-xs h-11 rounded-full text-[#1A3B22] flex-1"
                    />
                    <Button
                      type="submit"
                      className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full px-6 h-11 text-xs font-bold shrink-0 shadow-md shadow-red-700/20 cursor-pointer transition-all"
                    >
                      Call Me Urgently
                    </Button>
                  </form>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Priority callback scheduled for <strong>{urgentPhone}</strong>. Keep your phone line free!</span>
                    </div>
                    <button
                      onClick={() => setUrgentRequested(false)}
                      className="text-xs font-bold text-emerald-800 underline ml-2 shrink-0 cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                )}
              </div>

              {/* Red-Flag Hospital Warning Banner */}
              <div className="lg:col-span-5 bg-[#8A1818] text-white rounded-3xl p-6 sm:p-7 space-y-3 flex flex-col justify-between shadow-md">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-200 text-xs font-bold">
                    <AlertTriangle className="w-4 h-4 text-amber-300" />
                    <span>WHEN TO GO DIRECTLY TO THE HOSPITAL</span>
                  </div>
                  <p className="text-xs text-rose-100 leading-relaxed">
                    If baby has a fever over 100.4&deg;F (under 3 months), is struggling to breathe (rib retractions/grunting), or is unresponsive, do not wait &mdash; call <strong>999 / 911 / 112</strong> or go to your nearest Emergency Room immediately.
                  </p>
                </div>
                <div className="pt-2 border-t border-rose-800/80 text-[11px] text-rose-200 flex items-center gap-1.5 font-semibold">
                  <Activity className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Always trust your parental intuition.</span>
                </div>
              </div>
            </div>
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
  );
}

