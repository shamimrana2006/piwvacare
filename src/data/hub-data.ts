export interface HubInfoItem {
  id: string;
  type: "info";
  title: string;
  category: "newborn" | "dryness" | "bath-sleep" | "barrier" | "emergency";
  categoryLabel: string;
  badge: string;
  readTime: string;
  phase: string;
  summary: string;
  keyTakeaway: string;
  link: string;
  isEmergency?: boolean;
  tags: string[];
}

export interface HubProductItem {
  id: string;
  type: "product";
  name: string;
  category: "newborn" | "dryness" | "bath-sleep" | "barrier";
  categoryLabel: string;
  badge: string;
  status: "available" | "upcoming";
  price: string;
  volume: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  keyIngredients: string[];
  tags: string[];
}

export type HubItem = HubInfoItem | HubProductItem;

export const HUB_INFO_ITEMS: HubInfoItem[] = [
  {
    id: "info-day-1",
    type: "info",
    title: "Day 1: Vernix Caseosa Preservation & First Gentle Touch",
    category: "newborn",
    categoryLabel: "Newborn Care",
    badge: "Core Day 1 Milestone",
    readTime: "3 min read",
    phase: "Phase 1 (Days 1–14)",
    summary:
      "Why your newborn's waxy coating is nature's biological skin barrier. Pediatricians advise waiting before bathing to lock in antimicrobial squalane.",
    keyTakeaway: "Allow natural vernix to absorb fully; perform only skin-to-skin touch.",
    link: "/care-guide/day-1",
    tags: ["vernix", "day 1", "newborn", "birth", "skin barrier", "first touch", "sponge wipe", "moisture"],
  },
  {
    id: "info-emergency-fever",
    type: "info",
    title: "Emergency Baby Health: Infant Fever (100.4°F+) Triage",
    category: "emergency",
    categoryLabel: "Health & Emergency Triage",
    badge: "Zero-Login Clinical Triage",
    readTime: "Instant Guidance",
    phase: "0+ Months All Stages",
    summary:
      "For infants under 3 months, any rectal temperature of 100.4°F (38°C) or higher requires immediate pediatrician evaluation. Check warning signs and next steps.",
    keyTakeaway: "Dress in 1 layer cotton, offer fluids, avoid cold water baths, call 24/7 pediatric line.",
    link: "/support#emergency-support",
    isEmergency: true,
    tags: ["fever", "emergency", "temp", "temperature", "hot", "100.4", "doctor", "hotline", "health", "জ্বর"],
  },
  {
    id: "info-day-8",
    type: "info",
    title: "Day 8: Newborn Skin Peeling & Dry Flake Protection",
    category: "dryness",
    categoryLabel: "Dry Skin & Eczema",
    badge: "Skin Barrier Protocol",
    readTime: "3 min read",
    phase: "Phase 1 (Days 1–14)",
    summary:
      "Normal newborn skin peeling happens as the outer amniotic layer sheds. Learn how colloidal oat lipids protect against cracking and redness.",
    keyTakeaway: "Never pick or peel flakes; apply oat-based baby moisture lotion gently twice daily.",
    link: "/care-guide/day-8",
    tags: ["peeling", "dry skin", "flakes", "dryness", "eczema", "lotion", "cracking", "oat", "shea"],
  },
  {
    id: "info-day-14",
    type: "info",
    title: "Day 14: Umbilical Cord Stump Separation & Air-Drying",
    category: "newborn",
    categoryLabel: "Newborn Care",
    badge: "Hygiene Protocol",
    readTime: "3 min read",
    phase: "Phase 1 (Days 1–14)",
    summary:
      "Safe management of the umbilical stump as it shrinks, turns dark, and naturally detaches without pulling or alcohol swabs.",
    keyTakeaway: "Keep clean and strictly dry; fold diaper waistband downward away from the navel.",
    link: "/care-guide/day-14",
    tags: ["umbilical cord", "cord stump", "navel", "air dry", "sponge bath", "belly button", "hygiene"],
  },
  {
    id: "info-day-21",
    type: "info",
    title: "Day 21: Cradle Cap (Infantile Seborrhea) Prevention",
    category: "dryness",
    categoryLabel: "Dry Skin & Eczema",
    badge: "Scalp Care",
    readTime: "4 min read",
    phase: "Phase 2 (Days 15–30)",
    summary:
      "Harmless yellow oily crusts on baby's scalp stem from maternal hormones. Soften gently with plant oils before using a soft bristle brush.",
    keyTakeaway: "Massage with a drop of cold-pressed oil 15 mins before bath; brush very softly.",
    link: "/care-guide/day-21",
    tags: ["cradle cap", "scalp", "flakes", "yellow crust", "hair", "brush", "seborrhea", "oil"],
  },
  {
    id: "info-day-30",
    type: "info",
    title: "Day 30: Bedtime Wind-Down & 3-Minute Moisture Massage",
    category: "bath-sleep",
    categoryLabel: "Bath & Sleep Rituals",
    badge: "Restorative Ritual",
    readTime: "3 min read",
    phase: "Phase 2 (Days 15–30)",
    summary:
      "Evidence-backed infant massage sequence that lowers cortisol, promotes melatonin production, and improves continuous sleep duration.",
    keyTakeaway: "Warm lotion between parental palms; apply rhythmic downward strokes along limbs.",
    link: "/care-guide/day-30",
    tags: ["bedtime", "sleep", "massage", "bath", "night", "wind down", "lotion", "soothing", "crying"],
  },
  {
    id: "info-emergency-swallowed",
    type: "info",
    title: "Accidental Ingestion & Mouth Exposure Protocol",
    category: "emergency",
    categoryLabel: "Health & Emergency Triage",
    badge: "Zero-Login Clinical Triage",
    readTime: "Instant Guidance",
    phase: "0+ Months All Stages",
    summary:
      "What to do if baby licks or swallows baby lotion, bath wash, or cream. Immediate non-toxic checklist and Poison Control 24/7 hotline.",
    keyTakeaway: "Wipe mouth with damp cloth, do not induce vomiting, offer breast milk or water, check breathing.",
    link: "/support#emergency-support",
    isEmergency: true,
    tags: ["swallow", "mouth", "ingest", "lotion in mouth", "cream", "poison control", "safety", "emergency"],
  },
  {
    id: "info-day-45",
    type: "info",
    title: "Day 45: Sudden Heat Rash & Contact Sensitivity Relief",
    category: "barrier",
    categoryLabel: "Diaper & Skin Barrier",
    badge: "Allergy Protocol",
    readTime: "3 min read",
    phase: "Phase 3 (Days 31–60)",
    summary:
      "Distinguishing tiny pink sweat bumps (miliaria) from allergic contact dermatitis. How temperature and pure cotton prevent flare-ups.",
    keyTakeaway: "Keep nursery cool (68°F–72°F), avoid synthetic polyester, keep skin folds dry.",
    link: "/care-guide/day-45",
    tags: ["heat rash", "rash", "red spots", "allergy", "sweat", "folds", "diaper rash", "neck folds"],
  },
  {
    id: "info-day-60",
    type: "info",
    title: "Day 60: Tummy Time Bonding & Infant Muscle Tone",
    category: "newborn",
    categoryLabel: "Newborn Care",
    badge: "Milestone Guide",
    readTime: "4 min read",
    phase: "Phase 3 (Days 31–60)",
    summary:
      "Building neck and shoulder strength while preventing flat head syndrome (positional plagiocephaly) through gentle, playful tummy sessions.",
    keyTakeaway: "Start with 3 to 5 minutes 2-3 times daily immediately after a diaper change.",
    link: "/care-guide/day-60",
    tags: ["tummy time", "muscle", "neck", "flat head", "play", "motor skills", "development", "milestone"],
  },
];

export const HUB_PRODUCT_ITEMS: HubProductItem[] = [
  {
    id: "prod-moisture-lotion",
    type: "product",
    name: "piwva Baby Moisture Lotion",
    category: "dryness",
    categoryLabel: "Dry Skin & Eczema",
    badge: "Debut Flagship • In Stock",
    status: "available",
    price: "$24.00",
    volume: "250ml / 8.5 fl. oz",
    rating: 5.0,
    reviewsCount: 142,
    image: "/images/product-bottle.jpg",
    description:
      "Clinical-grade organic oat and virgin cold-pressed shea lipid barrier lotion. Tuned to pH 5.5 to shield against eczema, flaking, and rough winter cheeks.",
    keyIngredients: ["Colloidal Oat Extract (Avena Sativa)", "Organic Shea Butter", "Calendula Flower Oil"],
    tags: ["lotion", "moisture", "dry skin", "eczema", "oat", "shea", "newborn", "cream", "hydration", "ph 5.5"],
  },
  {
    id: "prod-gentle-wash",
    type: "product",
    name: "piwva Tear-Free Gentle Head-to-Toe Wash",
    category: "bath-sleep",
    categoryLabel: "Bath & Sleep Rituals",
    badge: "Upcoming Formulation",
    status: "upcoming",
    price: "$22.00",
    volume: "200ml / 6.8 fl. oz",
    rating: 4.9,
    reviewsCount: 38,
    image: "/images/lotion-sand-nature.jpg",
    description:
      "Soap-free, non-stripping bath wash formulated with chamomile flower water and coconut-derived mild glucoside cleansers. Safe for day-one eyes.",
    keyIngredients: ["Chamomile Hydrosol", "Plant Glucosides", "Vegetable Glycerin"],
    tags: ["wash", "soap", "bath", "tear free", "shampoo", "head to toe", "body wash", "bedtime", "upcoming"],
  },
  {
    id: "prod-diaper-balm",
    type: "product",
    name: "piwva Zinc Oxide Diaper Barrier Balm",
    category: "barrier",
    categoryLabel: "Diaper & Skin Barrier",
    badge: "Upcoming Formulation",
    status: "upcoming",
    price: "$19.00",
    volume: "100g / 3.5 oz",
    rating: 4.9,
    reviewsCount: 26,
    image: "/images/baby-handprint-sand.jpg",
    description:
      "Breathable moisture barrier cream with 12% non-nano zinc oxide and soothing jojoba wax. Blocks wetness and urine acidity without clogging pores.",
    keyIngredients: ["Non-Nano Zinc Oxide", "Organic Jojoba Wax", "Calendula Extract"],
    tags: ["diaper", "balm", "zinc", "barrier", "rash", "nappy", "chafing", "redness", "upcoming"],
  },
  {
    id: "prod-gift-set",
    type: "product",
    name: "piwva Newborn Welcome & Nurture Gift Set",
    category: "newborn",
    categoryLabel: "Newborn Care",
    badge: "VIP Edition • Reserved",
    status: "available",
    price: "$58.00",
    volume: "Complete 3-Piece Set",
    rating: 5.0,
    reviewsCount: 64,
    image: "/images/baby-footprints.jpg",
    description:
      "The ultimate parent gift: full-size Moisture Lotion (250ml), 3 organic bamboo muslin wipes, and a printed 90-Day Newborn Milestone Journal.",
    keyIngredients: ["Full-size 250ml Lotion", "3x Bamboo Muslin Wipes", "Keepsake Journal"],
    tags: ["gift set", "gift", "newborn set", "welcome", "bundle", "shower gift", "lotion", "muslin"],
  },
  {
    id: "prod-calming-oil",
    type: "product",
    name: "piwva Calming Nighttime Baby Massage Oil",
    category: "bath-sleep",
    categoryLabel: "Bath & Sleep Rituals",
    badge: "Upcoming Formulation",
    status: "upcoming",
    price: "$26.00",
    volume: "150ml / 5.1 fl. oz",
    rating: 4.9,
    reviewsCount: 19,
    image: "/images/promise-hands.jpg",
    description:
      "Nut-free, lightweight bonding oil formulated with sunflower seed oil and subtle evening chamomile. Fast-absorbing and never greasy.",
    keyIngredients: ["Cold-Pressed Sunflower Oil", "Chamomile Oil", "Vitamin E (Tocopherol)"],
    tags: ["oil", "massage", "sleep", "nighttime", "bedtime", "calming", "bonding", "upcoming"],
  },
];

