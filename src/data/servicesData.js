export const SERVICES = [
  {
    id: "photo-companion",
    title: "Photo Companion",
    tagline: "Dog attends first look & couple portraits",
    duration: "Up to 3 Hours",
    depositAmount: 150,
    typicalRange: "Starting from $395",
    description: "Designed for couples who want their pup in their most cherished portraits without worrying about ceremony logistics or post-photo care.",
    inclusions: [
      "Agreed roundtrip climate-controlled transport to venue",
      "Pre-photo decompression walk, water & potty break",
      "Wedding attire dressing (bowtie, floral collar, or leash wrap)",
      "Expert portrait staging with squeakers, noisemakers & treats",
      "Continuous hydration, drool wipes & coat brushing",
      "Safe chauffeured return trip home, feeding & bedtime tuck-in"
    ],
    popular: false,
    recommendedFor: "Couples wanting breathtaking sunset & bridal portraits"
  },
  {
    id: "ceremony-companion",
    title: "Ceremony Companion",
    tagline: "Dog attends portraits & ceremony aisle walk",
    duration: "Up to 5 Hours",
    depositAmount: 150,
    typicalRange: "Starting from $650",
    description: "Our signature full-experience service. Your dog walks down the aisle, stars in formal family portraits, and stays calm throughout the ceremony.",
    inclusions: [
      "Everything included in the Photo Companion package",
      "Aisle escorting (ring bearer, flower dog, or bridal party guide)",
      "Quiet holding & gentle cues during the ceremony vows",
      "Post-ceremony family photos & bridal party celebrations",
      "Direct synchronization with your wedding planner & photographer",
      "Safe transport home, refreshed water bowl, dinner & text update"
    ],
    popular: true,
    recommendedFor: "Most popular: Complete ceremony and photography coverage"
  },
  {
    id: "extended-wedding-care",
    title: "Extended Wedding Care",
    tagline: "All-day luxury handling & evening sitting",
    duration: "Up to 8 Hours",
    depositAmount: 200,
    typicalRange: "Starting from $950",
    description: "The ultimate VIP dog concierge service. Covers morning bridal suite moments, ceremony aisle walk, cocktail hour greeting, and evening sitting.",
    inclusions: [
      "Everything in Ceremony Companion with extended coverage",
      "Bridal suite 'getting ready' photos & calm cuddle time",
      "Cocktail hour social greeting & photo lounge supervision",
      "Puparazzi Behind-The-Scenes video clips & POV footage",
      "Rehearsal coordination session support (schedule permitting)",
      "In-home evening pet sitting, evening walk & bedtime care"
    ],
    popular: false,
    recommendedFor: "Couples with busy wedding weekends wanting 100% hands-off pet care"
  }
];

export const ADD_ONS = [
  {
    id: "puparazzi-video",
    name: "Puparazzi POV & Reel Clips",
    price: "$125",
    description: "Action camera clips from your dog's perspective plus raw behind-the-scenes vertical videos perfect for Instagram Reels & TikTok."
  },
  {
    id: "rehearsal-support",
    name: "Wedding Rehearsal Practice",
    price: "$150",
    description: "1 hour on-site practice the day prior so your pup familiarizes themselves with the aisle, scent, and surroundings."
  },
  {
    id: "second-dog",
    name: "Second Dog Chaperone",
    price: "$175",
    description: "Dedicated attention for multi-dog households ensuring every pet receives individualized care and handling."
  }
];

export const MOMENTS_DATA = [
  {
    id: "portraits",
    title: "Portraits & First Look",
    shortLabel: "Portraits",
    lead: "Calm, joyful moments captured for a lifetime.",
    description: "We coordinate with your wedding photographer to ensure your pup looks straight at the camera with genuine excitement�using professional cues, favorite squeakers, and reward treats.",
    timelineSteps: [
      { time: "T-60m", title: "Arrival & Settle", detail: "We arrive at the venue early for a potty break and decompression walk." },
      { time: "T-20m", title: "Styling", detail: "Attire dressing: floral collar, bowtie, or ring harness brushed and fitted." },
      { time: "0m", title: "First Look", detail: "Guiding your dog into position for the emotional couple first look." },
      { time: "+45m", title: "Hydration Break", detail: "Shaded water break and calm massage away from guest noise." }
    ],
    highlights: ["Posing assistance with treats", "Coat brush & eye wipe", "Zero stress on bridesmaids"]
  },
  {
    id: "ceremony",
    title: "The Ceremony & Aisle Walk",
    shortLabel: "The Ceremony",
    lead: "Graceful aisle entry, quiet cues, and pure celebration.",
    description: "Whether walking down the aisle as your ring bearer, escorting the flower girl, or sitting with the groomsmen, we ensure your dog performs their role calmly without barking or jumping.",
    timelineSteps: [
      { time: "T-15m", title: "Staging", detail: "Positioning at the aisle entrance with handler reassurance." },
      { time: "0m", title: "The Aisle Walk", detail: "Gentle escort down the aisle or handover to your wedding party." },
      { time: "+10m", title: "Quiet Holding", detail: "Calmly holding your dog in a shaded side seat during the vows." },
      { time: "+30m", title: "Recessional", detail: "Celebrating down the aisle as you are announced husband and wife!" }
    ],
    highlights: ["Aisle coordination", "Discrete handler supervision", "Immediate guest praise"]
  },
  {
    id: "after",
    title: "After The Celebration & Return",
    shortLabel: "After Celebration",
    lead: "A safe, peaceful journey home while the party continues.",
    description: "Once photo and ceremony duties conclude, your pup relaxes in our air-conditioned pet transit vehicle. We chauffeur them back to your home, feed them dinner, provide fresh water, and send you a photo update.",
    timelineSteps: [
      { time: "5:00 PM", title: "Handover", detail: "Final hugs and treat farewell with the newlyweds." },
      { time: "5:30 PM", title: "Chauffeured Transit", detail: "Safe transit in crash-tested safety harness with soothing music." },
      { time: "6:15 PM", title: "Home Settling", detail: "Fed dinner, refreshed water bowl, and cozy tuck-in in their bed." },
      { time: "6:30 PM", title: "Update Sent", detail: "Confirmation text & photo sent to the bride & groom so you celebrate worry-free." }
    ],
    highlights: ["Roundtrip air-conditioned transit", "Evening dinner & tuck-in", "Real-time text & photo update"]
  }
];

export const REAL_WEDDINGS = [
  {
    id: "cooper-botanical-gardens",
    slug: "cooper-birmingham-botanical-gardens",
    couple: "Savannah & Tyler M.",
    dog: "Cooper",
    breed: "Golden Retriever (3 yrs old)",
    venue: "Birmingham Botanical Gardens",
    location: "Birmingham, AL",
    coverage: "Ceremony Companion (5 Hours)",
    headline: "Cooper's Golden Aisle Moment in the Rose Garden",
    story: "Savannah and Tyler couldn't imagine exchanging vows without Cooper. Melissa picked up Cooper from their home in Mountain Brook, gave him a scenic pre-ceremony walk around the park, and staged his custom sage-green floral collar. Cooper walked down the aisle with the best man, sat patiently during the vows, and posed for golden hour sunset portraits before being safely driven home before cocktail hour began.",
    timeline: [
      "1:30 PM � Melissa arrives at home for Cooper's walk and transport",
      "2:30 PM � Venue arrival, hydration, and bowtie fitting",
      "3:00 PM � First look photos with Savannah & Tyler",
      "4:00 PM � Ceremony aisle walk and quiet holding",
      "4:45 PM � Full wedding party photos with treats & squeakers",
      "5:45 PM � Safe chauffeur return home, dinner served & bedtime update"
    ],
    testimonial: "�Having Melissa was the greatest decision of our wedding! Cooper was happy, relaxed, and our parents didn't have to spend a minute babysitting him.�",
    photographer: "Captured by Southern Light Photography"
  },
  {
    id: "buster-hoover-country-club",
    slug: "buster-hoover-country-club",
    couple: "Kaitlyn & Chris B.",
    dog: "Buster",
    breed: "French Bulldog (2 yrs old)",
    venue: "Hoover Country Club",
    location: "Hoover, AL",
    coverage: "Photo Companion (3 Hours)",
    headline: "Buster's Black-Tie Portrait Session on the Fairway",
    story: "Frenchies are sensitive to heat and crowd excitement, so Kaitlyn and Chris opted for our Photo Companion service. Melissa transported Buster in a climate-controlled vehicle with cooling mats, staged his tuxedo collar, and used specialized attention cues to capture his infectious grin alongside the bride and groom. Right after the couple portraits wrapped up, Buster was escorted home for a quiet nap.",
    timeline: [
      "2:00 PM � Chauffeur pickup in Hoover with cooling harness",
      "2:45 PM � Venue arrival, quiet potty break in the shade",
      "3:15 PM � Couple portraits & bridal party photo session",
      "4:15 PM � Cold water break, cooling towel & treat reward",
      "4:45 PM � Return home to AC comfort before guests arrived"
    ],
    testimonial: "�Melissa understood Frenchie breathing and temperature needs completely. We got 50+ magnificent photos and Buster was totally stress-free.�",
    photographer: "Captured by Magnolia Pine Weddings"
  },
  {
    id: "luna-bear-donnelly-house",
    slug: "luna-bear-the-donnelly-house",
    couple: "Courtney & Blake H.",
    dog: "Luna & Bear",
    breed: "Labradoodles (1 & 4 yrs old)",
    venue: "The Donnelly House",
    location: "Birmingham, AL",
    coverage: "Extended Wedding Care (7 Hours)",
    headline: "A Double Doodle Wedding Day Celebration on Highland Avenue",
    story: "With two energetic doodles, Courtney and Blake needed full-day support. Melissa managed both dogs during morning bridal suite excitement, coordinated their dual walk down the aisle, attended the cocktail hour patio greeting, and provided evening sitting at their hotel. Both pups felt like guest stars all day.",
    timeline: [
      "11:30 AM � Bridal suite arrival for getting-ready photos",
      "1:00 PM � Decompression walk around historic Highland Park",
      "2:30 PM � Ceremony rehearsal and aisle staging",
      "3:30 PM � Ceremony processional & quiet supervision",
      "4:15 PM � Sunset couple portraits",
      "5:00 PM � Cocktail hour social greeting on the terrace",
      "6:30 PM � Evening return to hotel suite, dinner & tuck-in"
    ],
    testimonial: "�Handling two big doodles on a wedding day seemed impossible until we met Melissa. Pure magic and total peace of mind.�",
    photographer: "Captured by Heritage Oak Photo"
  }
];
