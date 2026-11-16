// Pure Care Guide 90-Day Milestone Dataset
// Medically structured for infant development without using the forbidden word

export interface DayGuide {
  dayNumber: number;
  slug: string;
  phase: string;
  phaseBadge: string;
  phaseColor: string;
  image: string;
  title: string;
  subtitle: string;
  readTime: string;
  steps: string[];
  normalCheck: string;
  doctorNote: string;
  checklist: string[];
  parentTip: string;
}

export interface CareProgram {
  id: string;
  title: string;
  badge: string;
  duration: string;
  description: string;
  image: string;
  totalDays: number;
  status: "active" | "upcoming";
}

export const CARE_PROGRAMS: CareProgram[] = [
  {
    "id": "first-90-days",
    "title": "The First 90 Days: A Gentle Daily Pathway",
    "badge": "Core Newborn Milestone",
    "duration": "Days 1 to 90 (Daily Dedicated Pages)",
    "description": "Day-by-day compassionate rituals, pediatric skin science, and newborn comfort techniques. Zero overwhelm \u2014 just pure loving steps for the fourth trimester.",
    "image": "/images/baby-footprints.jpg",
    "totalDays": 90,
    "status": "active"
  },
  {
    "id": "months-4-to-6",
    "title": "Months 4 to 6: Exploring & Teething Comfort",
    "badge": "Upcoming Milestone",
    "duration": "60 Daily Sessions",
    "description": "Guiding your baby through sitting up, first solid tastes, teething drool barriers, and sensory tactile exploration.",
    "image": "/images/hero-baby.jpg",
    "totalDays": 60,
    "status": "upcoming"
  },
  {
    "id": "bedtime-sleep-rituals",
    "title": "Peaceful Bedtime & Restorative Sleep Rituals",
    "badge": "Specialized Pathway",
    "duration": "30 Nightly Guides",
    "description": "Evidence-backed infant massage sequences, circadian light tuning, and gentle scent-free wind-down routines for deeper sleep.",
    "image": "/images/promise-hands.jpg",
    "totalDays": 30,
    "status": "upcoming"
  },
  {
    "id": "sensitive-skin-shield",
    "title": "Sensitive Skin & Environmental Shielding",
    "badge": "Clinical Skin Care",
    "duration": "21 Daily Protocols",
    "description": "Pediatric dermatologist protocols to manage flare-ups, cradle cap, extreme dryness, and environmental triggers.",
    "image": "/images/lotion-sand-nature.jpg",
    "totalDays": 21,
    "status": "upcoming"
  }
];

export const FIRST_90_DAYS_DATA: DayGuide[] = [
  {
    "dayNumber": 1,
    "slug": "day-1",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Vernix Caseosa Preservation & First Gentle Touch",
    "subtitle": "Why newborn skin needs patience, not immediate bathing.",
    "readTime": "3 min read",
    "steps": [
      "Do not scrub away the white vernix coating; it is nature's most advanced antimicrobial moisturizing barrier.",
      "Gently wipe eyes and mouth using only a clean cotton pad dampened with sterile lukewarm water.",
      "Place baby skin-to-skin against your bare chest to stabilize heart rate and body temperature."
    ],
    "normalCheck": "Normal: Slight bluish tint on hands and feet (acrocyanosis) in the first 24 hours as circulation develops.",
    "doctorNote": "Call doctor if baby has labored breathing, flaring nostrils, or blue lips/tongue.",
    "checklist": [
      "Preserve natural vernix coating",
      "Practice 20 mins skin-to-skin contact",
      "Monitor newborn body warmth"
    ],
    "parentTip": "You carried this miracle for nine months. Today, simply rest, breathe, and hold each other close."
  },
  {
    "dayNumber": 2,
    "slug": "day-2",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "First Lukewarm Sponge Touch & Cord Dryness",
    "subtitle": "Navigating the first gentle sponge wipe without irritating the cord.",
    "readTime": "3 min read",
    "steps": [
      "Keep the umbilical stump completely dry. Never submerge in water.",
      "Use lukewarm water (approx 37\u00b0C / 98.6\u00b0F) and pat baby dry with a warm, fluffy towel.",
      "Dress in a loose, breathable cotton onesie that does not pinch the navel."
    ],
    "normalCheck": "Normal: A newborn sleeping 16 to 18 hours a day in short 2-3 hour bursts.",
    "doctorNote": "Contact pediatrician if baby fails to wake for feedings or exhibits persistent shivering.",
    "checklist": [
      "Lukewarm sponge wipe under 5 mins",
      "Keep umbilical cord stump dry",
      "Check diaper output"
    ],
    "parentTip": "Trust your intuition. No one knows your baby's cues better than you will."
  },
  {
    "dayNumber": 3,
    "slug": "day-3",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Meconium Cleanse & Diaper Barrier Protection",
    "subtitle": "Gentle wiping for the stickiest newborn diapers.",
    "readTime": "3 min read",
    "steps": [
      "Newborn meconium is dark and sticky. Apply a dab of gentle plant oil or baby lotion to a soft cloth to wipe it off effortlessly without friction.",
      "Avoid alcohol-based wipes completely during the first month.",
      "Allow diaper area to air-dry for 1-2 minutes before putting on a fresh diaper."
    ],
    "normalCheck": "Normal: Transitioning stool color from black/dark green to brown and yellow.",
    "doctorNote": "Call doctor if baby produces no wet diapers in a 24-hour period.",
    "checklist": [
      "Gentle oil/lotion wipe for meconium",
      "Air-dry diaper area for 1 min",
      "Fold diaper waist below navel"
    ],
    "parentTip": "Diaper changes are bonding moments. Sing or smile softly during each change."
  },
  {
    "dayNumber": 4,
    "slug": "day-4",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Umbilical Cord Stump Care & Air-Drying",
    "subtitle": "Helping the stump dry naturally without friction.",
    "readTime": "3 min read",
    "steps": [
      "Fold the top of the diaper downward to allow air circulation around the cord stump.",
      "Do not apply alcohol or antiseptic unless explicitly directed by your pediatrician. Dry healing is fastest.",
      "If the cord gets soiled with urine or stool, gently clean with water and pat thoroughly dry."
    ],
    "normalCheck": "Normal: The stump shrinking, turning dark brown or black as it dehydrates.",
    "doctorNote": "Seek medical advice if the skin around the cord turns bright red, swollen, or smells foul.",
    "checklist": [
      "Diaper folded below cord",
      "Check cord base for cleanliness",
      "Ensure cord remains exposed to air"
    ],
    "parentTip": "Patience is healing. Nature knows exactly how to guide this cord separation."
  },
  {
    "dayNumber": 5,
    "slug": "day-5",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 5: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 5 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 5 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 5 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 6,
    "slug": "day-6",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 6: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 6 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 6 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 6 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 7,
    "slug": "day-7",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "End of Week 1: Natural Newborn Skin Peeling",
    "subtitle": "Understanding why peeling is completely normal and healthy.",
    "readTime": "3 min read",
    "steps": [
      "Almost all healthy newborns shed their top layer of skin as they adjust to dry air outside the womb.",
      "Resist peeling or picking at flaking skin on wrists, tummy, or ankles.",
      "Apply a pea-sized drop of fragrance-free colloidal oat moisture lotion right after sponge wipes to soothe tightness."
    ],
    "normalCheck": "Normal: Flaking skin with pink, healthy new skin underneath.",
    "doctorNote": "Notify doctor if peeling skin is accompanied by painful cracks, bleeding, or weeping yellow fluid.",
    "checklist": [
      "Apply oat lotion to flaking wrists & ankles",
      "Avoid scrubbing flakes",
      "Celebrate one week of love"
    ],
    "parentTip": "Look at what you have accomplished in seven days. You are learning your baby's language."
  },
  {
    "dayNumber": 8,
    "slug": "day-8",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 8: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 8 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 8 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 8 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 9,
    "slug": "day-9",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 9: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 9 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 9 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 9 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 10,
    "slug": "day-10",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 10: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 10 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 10 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 10 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 11,
    "slug": "day-11",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 11: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 11 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 11 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 11 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 12,
    "slug": "day-12",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 12: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 12 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 12 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 12 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 13,
    "slug": "day-13",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Day 13: Gentle Newborn Bonding & Barrier Support",
    "subtitle": "Day 13 of your newborn journey: focus on warmth, resting, and minimal skin friction.",
    "readTime": "3 min read",
    "steps": [
      "Keep baby comfortably warm. Practice 15-20 minutes of skin-to-skin touch after morning feeding.",
      "Inspect the umbilical cord area and skin folds (neck, thighs, armpits) for cleanliness and dryness.",
      "If skin feels tight or dry, apply a tiny drop of pure oat baby lotion with clean warm fingers."
    ],
    "normalCheck": "Frequent short sleep cycles and occasional newborn sneezes to clear nasal passages.",
    "doctorNote": "Notify pediatrician if baby develops a fever over 38\u00b0C (100.4\u00b0F) or refuses feeds.",
    "checklist": [
      "Day 13 cord inspection & dry care",
      "Lukewarm sponge cleanse",
      "Skin-to-skin chest cuddle"
    ],
    "parentTip": "Day 13 of your newborn life. Take it one gentle breath at a time."
  },
  {
    "dayNumber": 14,
    "slug": "day-14",
    "phase": "Phase 1: The Golden Arrival",
    "phaseBadge": "Newborn Nesting",
    "phaseColor": "from-[#F3EDE2] to-[#EBE2D3]",
    "image": "/images/hero-baby.jpg",
    "title": "Two-Week Skin Milestone & Acid Mantle Formation",
    "subtitle": "How your baby's skin begins building its protective shield.",
    "readTime": "3 min read",
    "steps": [
      "By Day 14, the umbilical stump has usually detached naturally. You can begin short, lukewarm tub splashes.",
      "Keep bath water around 37\u00b0C and keep total time under 5-8 minutes.",
      "Smooth Piwva moisture lotion over damp skin within 3 minutes of stepping out of the bath."
    ],
    "normalCheck": "Normal: A tiny drop of dried blood when the stump falls off is completely normal.",
    "doctorNote": "Contact doctor if the navel actively oozes blood or pus after the stump has fallen off.",
    "checklist": [
      "Begin gentle submerged baths if cord healed",
      "Apply lotion within 3 minutes",
      "Celebrate 2-week milestone"
    ],
    "parentTip": "Two weeks in! Your baby already recognizes your unique scent and soothing voice."
  },
  {
    "dayNumber": 15,
    "slug": "day-15",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 15: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 15: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 16,
    "slug": "day-16",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 16: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 16: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 17,
    "slug": "day-17",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 17: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 17: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 18,
    "slug": "day-18",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 18: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 18: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 19,
    "slug": "day-19",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 19: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 19: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 20,
    "slug": "day-20",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 20: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 20: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 21,
    "slug": "day-21",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Cradle Cap Awareness & Gentle Scalp Softening",
    "subtitle": "Soothing flaky yellow scalp patches naturally.",
    "readTime": "3 min read",
    "steps": [
      "Cradle cap is caused by natural maternal hormones stimulating oil glands, not poor hygiene.",
      "Warm a few drops of pure plant lipid or baby lotion into your palms and massage gently onto the scalp 15 minutes before bath.",
      "During bath time, use a soft silicone baby scalp brush or cloth to gently loosen flakes in circular motions."
    ],
    "normalCheck": "Normal: Crusted or flaky scalp scales that do not itch or cause baby distress.",
    "doctorNote": "Call doctor if scalp skin becomes fiery red, hot, or begins oozing.",
    "checklist": [
      "Warm plant oil on scalp 15 mins before bath",
      "Gentle circular brush during bath",
      "Pat scalp dry gently"
    ],
    "parentTip": "Every little cradle cap flake will pass in time. Your tender touch is all baby needs."
  },
  {
    "dayNumber": 22,
    "slug": "day-22",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 22: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 22: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 23,
    "slug": "day-23",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 23: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 23: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 24,
    "slug": "day-24",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 24: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 24: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 25,
    "slug": "day-25",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 25: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 25: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 26,
    "slug": "day-26",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 26: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 26: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 27,
    "slug": "day-27",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 27: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 27: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 28,
    "slug": "day-28",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 28: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 28: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 29,
    "slug": "day-29",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "Day 29: Rhythmic Touch & Evening Wind-Down",
    "subtitle": "Day 29: establishing soothing sleep cues and nourishing fragile skin layers.",
    "readTime": "3 min read",
    "steps": [
      "Practice a 5-minute lukewarm bath routine with water tested at 37\u00b0C.",
      "Pat dry gently with a soft cotton hooded towel without rubbing.",
      "Seal in moisture by applying Piwva baby moisture lotion within 3 minutes of exiting bath."
    ],
    "normalCheck": "Baby starting to stay awake for slightly longer stretches during daytime hours.",
    "doctorNote": "Contact doctor if baby develops persistent yellow skin/eyes or unexplained lethargy.",
    "checklist": [
      "5-minute evening bath ritual",
      "3-minute post-bath hydration touch",
      "Gentle dim-light soothing"
    ],
    "parentTip": "Every repetition of your evening routine builds deep emotional security for your baby."
  },
  {
    "dayNumber": 30,
    "slug": "day-30",
    "phase": "Phase 2: The Gentle Rhythm",
    "phaseBadge": "Weeks 3 & 4",
    "phaseColor": "from-[#EAF2E4] to-[#DEEAD5]",
    "image": "/images/promise-hands.jpg",
    "title": "One Month Milestone & Calming Evening Wind-Down",
    "subtitle": "Celebrating your baby's first month of life.",
    "readTime": "3 min read",
    "steps": [
      "Establish a predictable 3-step evening wind-down: lukewarm bath, soothing lotion massage, and dimmed lighting.",
      "Notice baby starting to hold brief eye contact and perhaps offer their first fleeting reflexive smile.",
      "Continue daily oat-based moisture barrier support to protect against dry room air."
    ],
    "normalCheck": "Normal: Baby starting to track bold black-and-white patterns with their eyes.",
    "doctorNote": "Check in with doctor at your scheduled 1-month well-baby pediatrician visit.",
    "checklist": [
      "Establish predictable evening routine",
      "10 mins of gentle face-to-face talk",
      "Celebrate 1 month together"
    ],
    "parentTip": "Happy one month! You have survived the steepest part of the newborn learning curve."
  },
  {
    "dayNumber": 31,
    "slug": "day-31",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 31: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 31: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 32,
    "slug": "day-32",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 32: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 32: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 33,
    "slug": "day-33",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 33: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 33: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 34,
    "slug": "day-34",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 34: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 34: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 35,
    "slug": "day-35",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 35: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 35: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 36,
    "slug": "day-36",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 36: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 36: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 37,
    "slug": "day-37",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 37: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 37: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 38,
    "slug": "day-38",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 38: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 38: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 39,
    "slug": "day-39",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 39: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 39: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 40,
    "slug": "day-40",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 40: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 40: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 41,
    "slug": "day-41",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 41: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 41: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 42,
    "slug": "day-42",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 42: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 42: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 43,
    "slug": "day-43",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 43: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 43: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 44,
    "slug": "day-44",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 44: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 44: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 45,
    "slug": "day-45",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "5-Minute Soothing Infant Colic & Gas Relief Massage",
    "subtitle": "Rhythmic abdomen strokes to ease digestion.",
    "readTime": "3 min read",
    "steps": [
      "Perform infant massage when baby is calm and alert, at least 45 minutes after feeding.",
      "Warm lotion in clean palms. Use gentle clockwise circular strokes across the abdomen to follow the natural colon direction.",
      "Gently bring baby's knees toward their tummy in a bicycle motion to release trapped gas bubbles."
    ],
    "normalCheck": "Normal: Baby passing gas or relaxing their tight posture during abdomen massage.",
    "doctorNote": "Seek guidance if baby cries inconsolably for over 4 hours daily or vomits green bile.",
    "checklist": [
      "Warm lotion in clean hands",
      "Clockwise gentle tummy strokes",
      "Bicycle legs for gas comfort"
    ],
    "parentTip": "Your gentle hands have calming power. Breathe slowly together during the massage."
  },
  {
    "dayNumber": 46,
    "slug": "day-46",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 46: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 46: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 47,
    "slug": "day-47",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 47: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 47: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 48,
    "slug": "day-48",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 48: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 48: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 49,
    "slug": "day-49",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 49: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 49: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 50,
    "slug": "day-50",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 50: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 50: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 51,
    "slug": "day-51",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 51: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 51: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 52,
    "slug": "day-52",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 52: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 52: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 53,
    "slug": "day-53",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 53: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 53: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 54,
    "slug": "day-54",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 54: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 54: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 55,
    "slug": "day-55",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 55: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 55: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 56,
    "slug": "day-56",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 56: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 56: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 57,
    "slug": "day-57",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 57: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 57: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 58,
    "slug": "day-58",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 58: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 58: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 59,
    "slug": "day-59",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Day 59: Sensory Awareness & Tummy Time Comfort",
    "subtitle": "Day 59: encouraging gentle motor milestones while protecting delicate cheek skin.",
    "readTime": "3 min read",
    "steps": [
      "Engage in 2-3 minutes of gentle tummy time on a clean, soft blanket on the floor.",
      "Talk and smile at eye-level to encourage head lifting and neck muscle development.",
      "Wipe drool from chin and neck folds with a soft cloth and apply a soothing thin layer of lotion."
    ],
    "normalCheck": "Brief social smiles, cooing sounds, and attempting to track colorful objects.",
    "doctorNote": "Seek guidance if baby seems stiff, limp, or does not respond to loud familiar sounds.",
    "checklist": [
      "2-3 mins comfortable tummy time",
      "Neck fold drool wipe & barrier",
      "Loving eye-to-eye vocal play"
    ],
    "parentTip": "Tummy time can be hard work! End the session with an affectionate hug and warm words."
  },
  {
    "dayNumber": 60,
    "slug": "day-60",
    "phase": "Phase 3: Awakening & Senses",
    "phaseBadge": "Month 2",
    "phaseColor": "from-[#F3EDE2] to-[#E9DFCF]",
    "image": "/images/baby-handprint-sand.jpg",
    "title": "Two-Month Smiling Milestone & Drool Barrier Shield",
    "subtitle": "Protecting tender cheeks as saliva glands awaken.",
    "readTime": "3 min read",
    "steps": [
      "Around Day 60, salivary glands activate, and baby starts mouthing their hands.",
      "Saliva can cause redness around the chin and neck folds. Gently dab drool with a soft dry cloth \u2014 never rub.",
      "Apply a thin protective layer of moisture lotion to cheeks before tummy time to create a barrier against moisture chafing."
    ],
    "normalCheck": "Normal: Lots of joyful cooing, gurgling, and genuine social smiles in response to your voice.",
    "doctorNote": "Attend your baby's 2-month well-child pediatric examination and immunizations.",
    "checklist": [
      "Dab chin and neck drool gently",
      "Apply protective moisture shield on cheeks",
      "Capture a smiling photo"
    ],
    "parentTip": "That genuine two-month smile makes every sleepless night feel completely worth it."
  },
  {
    "dayNumber": 61,
    "slug": "day-61",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 61: Blooming Resilience & Active Exploration",
    "subtitle": "Day 61: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 61! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 62,
    "slug": "day-62",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 62: Blooming Resilience & Active Exploration",
    "subtitle": "Day 62: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 62! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 63,
    "slug": "day-63",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 63: Blooming Resilience & Active Exploration",
    "subtitle": "Day 63: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 63! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 64,
    "slug": "day-64",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 64: Blooming Resilience & Active Exploration",
    "subtitle": "Day 64: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 64! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 65,
    "slug": "day-65",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 65: Blooming Resilience & Active Exploration",
    "subtitle": "Day 65: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 65! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 66,
    "slug": "day-66",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 66: Blooming Resilience & Active Exploration",
    "subtitle": "Day 66: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 66! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 67,
    "slug": "day-67",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 67: Blooming Resilience & Active Exploration",
    "subtitle": "Day 67: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 67! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 68,
    "slug": "day-68",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 68: Blooming Resilience & Active Exploration",
    "subtitle": "Day 68: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 68! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 69,
    "slug": "day-69",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 69: Blooming Resilience & Active Exploration",
    "subtitle": "Day 69: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 69! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 70,
    "slug": "day-70",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 70: Blooming Resilience & Active Exploration",
    "subtitle": "Day 70: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 70! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 71,
    "slug": "day-71",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 71: Blooming Resilience & Active Exploration",
    "subtitle": "Day 71: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 71! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 72,
    "slug": "day-72",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 72: Blooming Resilience & Active Exploration",
    "subtitle": "Day 72: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 72! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 73,
    "slug": "day-73",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 73: Blooming Resilience & Active Exploration",
    "subtitle": "Day 73: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 73! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 74,
    "slug": "day-74",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 74: Blooming Resilience & Active Exploration",
    "subtitle": "Day 74: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 74! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 75,
    "slug": "day-75",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 75: Blooming Resilience & Active Exploration",
    "subtitle": "Day 75: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 75! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 76,
    "slug": "day-76",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 76: Blooming Resilience & Active Exploration",
    "subtitle": "Day 76: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 76! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 77,
    "slug": "day-77",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 77: Blooming Resilience & Active Exploration",
    "subtitle": "Day 77: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 77! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 78,
    "slug": "day-78",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 78: Blooming Resilience & Active Exploration",
    "subtitle": "Day 78: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 78! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 79,
    "slug": "day-79",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 79: Blooming Resilience & Active Exploration",
    "subtitle": "Day 79: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 79! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 80,
    "slug": "day-80",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 80: Blooming Resilience & Active Exploration",
    "subtitle": "Day 80: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 80! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 81,
    "slug": "day-81",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 81: Blooming Resilience & Active Exploration",
    "subtitle": "Day 81: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 81! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 82,
    "slug": "day-82",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 82: Blooming Resilience & Active Exploration",
    "subtitle": "Day 82: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 82! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 83,
    "slug": "day-83",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 83: Blooming Resilience & Active Exploration",
    "subtitle": "Day 83: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 83! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 84,
    "slug": "day-84",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 84: Blooming Resilience & Active Exploration",
    "subtitle": "Day 84: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 84! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 85,
    "slug": "day-85",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 85: Blooming Resilience & Active Exploration",
    "subtitle": "Day 85: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 85! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 86,
    "slug": "day-86",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 86: Blooming Resilience & Active Exploration",
    "subtitle": "Day 86: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 86! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 87,
    "slug": "day-87",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 87: Blooming Resilience & Active Exploration",
    "subtitle": "Day 87: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 87! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 88,
    "slug": "day-88",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 88: Blooming Resilience & Active Exploration",
    "subtitle": "Day 88: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 88! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 89,
    "slug": "day-89",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "Day 89: Blooming Resilience & Active Exploration",
    "subtitle": "Day 89: supporting your baby's blossoming personality and resilient skin barrier.",
    "readTime": "3 min read",
    "steps": [
      "Support baby's active leg kicking and hand reaching with lightweight, breathable cotton clothing.",
      "Keep exposed skin hydrated before going outside for a fresh-air stroller walk.",
      "Wind down with a slow, relaxing bedtime foot and back massage using colloidal oat lotion."
    ],
    "normalCheck": "Excited kicking, gurgling laughs, and fascination with looking at their own fingers.",
    "doctorNote": "Review milestone achievements with your pediatrician at routine well-child visits.",
    "checklist": [
      "Fresh air stroller walk with skin shield",
      "Interactive hand and foot sensory play",
      "Evening relaxation massage"
    ],
    "parentTip": "Day 89! Look at the strength, curiosity, and bright joy blossoming in your little one."
  },
  {
    "dayNumber": 90,
    "slug": "day-90",
    "phase": "Phase 4: Blooming Resilience",
    "phaseBadge": "Month 3",
    "phaseColor": "from-[#EAF2E4] to-[#DCEBD4]",
    "image": "/images/lotion-sand-nature.jpg",
    "title": "The 90-Day Skin Milestone Celebration",
    "subtitle": "Honoring 3 months of growth, acid mantle resilience, and bonding.",
    "readTime": "3 min read",
    "steps": [
      "By Day 90, your baby's acid mantle pH (5.5) has stabilized significantly, providing natural resilience against microbes.",
      "Maintain daily post-bath hydration rituals to support skin as baby prepares for rolling and teething stages.",
      "Celebrate this major milestone! You have nurtured and protected fragile new life through the fourth trimester."
    ],
    "normalCheck": "Normal: Baby holding head steady, laughing aloud, and exploring their hands with curiosity.",
    "doctorNote": "Schedule your 3-month or upcoming 4-month pediatric developmental review.",
    "checklist": [
      "Celebrate 90 days milestone together",
      "Take a 3-month footprint keepsake",
      "Reflect on how much you have grown"
    ],
    "parentTip": "Congratulations on completing 90 days of gentle care. You are an incredible parent."
  }
];

export function getDayGuide(dayNumber: number): DayGuide | undefined {
  return FIRST_90_DAYS_DATA.find((d) => d.dayNumber === dayNumber);
}

export function getDayBySlug(slug: string): DayGuide | undefined {
  return FIRST_90_DAYS_DATA.find((d) => d.slug === slug);
}
