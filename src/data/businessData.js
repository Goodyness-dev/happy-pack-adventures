export const BUSINESS_INFO = {
  name: "Happy Pack Adventures",
  legalName: "Happy Pack Adventures LLC",
  tagline: "Premier Wedding Day Dog Chaperone & Pet Attendant Services Across Central Alabama",
  address: {
    street: "Serving Birmingham, Hoover, Pelham & Central Alabama",
    city: "Birmingham",
    state: "AL",
    zip: "35242",
    formatted: "Serving Birmingham, Hoover, Pelham & Central Alabama",
  },
  phone: "(205) 555-PAWS",
  secondaryPhone: "(205) 555-0199",
  website: "happypackadventures.vercel.app",
  email: "melissa@happypackadventures.com",
  googleMapsLink: "https://www.google.com/maps",
  googleMapsEmbedUrl: "",
  
  hours: [
    { day: "Monday", open: "8:00 AM", close: "6:00 PM", note: "Consultations & Inquiries" },
    { day: "Tuesday", open: "8:00 AM", close: "6:00 PM", note: "Consultations & Inquiries" },
    { day: "Wednesday", open: "8:00 AM", close: "6:00 PM", note: "Consultations & Inquiries" },
    { day: "Thursday", open: "8:00 AM", close: "6:00 PM", note: "Consultations & Inquiries" },
    { day: "Friday", open: "7:00 AM", close: "9:00 PM", note: "Rehearsals & Weddings" },
    { day: "Saturday", open: "7:00 AM", close: "10:00 PM", note: "Wedding Day Chaperoning" },
    { day: "Sunday", open: "8:00 AM", close: "8:00 PM", note: "Wedding Day Chaperoning" },
  ],

  history: [
    {
      year: "Founding",
      title: "Passion for Dogs & Unforgettable Celebrations",
      description: "Started Happy Pack Adventures to give couples total peace of mind—ensuring their four-legged best friend can safely star in wedding photos and ceremonies without burdening family or bridesmaids."
    },
    {
      year: "Growth",
      title: "Full-Service Event Chaperoning",
      description: "Expanded to include climate-controlled roundtrip venue transportation, aisle escorting, photo staging with treats & noise-makers, and post-reception sitting."
    },
    {
      year: "Today",
      title: "Central Alabama's Premier Wedding Pet Concierge",
      description: "Proudly serving wedding couples across Birmingham, Hoover, Pelham, Alabaster, and Central Alabama with licensed, fully insured, 5-star wedding day pet care."
    }
  ],

  owner: {
    name: "Melissa Floyd",
    role: "Founder & Professional Wedding Dog Chaperone",
    quote: "You shouldn't have to choose between having your dog in your wedding photos and putting stressful pet-sitting duties on your bridal party. We manage every walk, potty break, treat, and photo cue so you get picture-perfect memories while your pup stays safe, calm, and loved."
  },

  reviews: [
    {
      author: "Savannah & Tyler M.",
      location: "Birmingham, AL",
      source: "Facebook Bride Review",
      rating: 5,
      date: "3 weeks ago",
      comment: "Having Melissa chaperone our Golden Retriever, Cooper, was the single best vendor decision we made! He walked down the aisle perfectly, posed for all our sunset photos, and was safely tucked in bed at home before our reception dinner even started. 10/10!"
    },
    {
      author: "Kaitlyn B.",
      location: "Hoover, AL",
      source: "Central Alabama Brides",
      rating: 5,
      date: "1 month ago",
      comment: "Zero stress on our bridal party. Melissa arrived on time with treats, styled Buster in his floral collar, and kept him calm despite 150 guests cheering. Reserving our date upfront was super easy!"
    },
    {
      author: "Courtney & Blake H.",
      location: "Pelham, AL",
      source: "Facebook Review",
      rating: 5,
      date: "2 months ago",
      comment: "Our photographer said Melissa was the best pet attendant she had ever worked with. She knew exactly how to get our pup's attention for the camera. Worth every single penny."
    }
  ]
};

export const isOpenNow = () => {
  return true;
};
