"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      q: "Is piwva Baby Moisture Lotion safe for newborns from day one?",
      a: "Yes, absolutely! piwva is formulated specifically for newborns (0+ months). It has undergone rigorous independent pediatric and dermatological safety evaluations. It is 100% free from synthetic perfumes, essential oils that can irritate newborn lungs, alcohol, sulfates, parabens, and dyes.",
    },
    {
      q: "Can this lotion help with baby eczema and cradle cap dry patches?",
      a: "Yes. Our gentle oat-infused lipid formulation provides clinical-strength barrier restoration while remaining non-comedogenic and lightweight. Pediatricians recommend applying it within 3 minutes of a warm bath to seal in optimal hydration.",
    },
    {
      q: "Is piwva 100% vegan, cruelty-free, and ethically sourced?",
      a: "Yes. We never test on animals, nor do we use any animal derivatives. All our ingredients, including our cold-pressed organic shea butter and plant squalane, are ethically and sustainably harvested with fair-trade farming partners.",
    },
    {
      q: "What is the shelf life and how should I store the lotion bottle?",
      a: "Unopened bottles stay fresh for 24 months. Once opened, we recommend using within 12 months. Store in a cool, dry place away from direct sunlight. The airtight pump dispenser prevents air and bacteria from contaminating the lotion.",
    },
    {
      q: "What is your return and happiness guarantee policy?",
      a: "We believe whole-heartedly in our gentle care. If you or your baby are not 100% delighted with piwva for any reason, simply email us within 30 days of receiving your order for a full, hassle-free refund — no return shipping required.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B381E] tracking-tight">
            Parent Questions, Answered
          </h2>
          <p className="text-sm sm:text-base text-[#596D5C] max-w-lg mx-auto">
            Everything you need to know about piwva baby care, safety certifications, and daily application.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

