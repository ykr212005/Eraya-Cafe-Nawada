export const site = {
  name: "Cafe Eraya",
  wordmark: "ERAYA",
  tagline: "Good food. Good mood. Good moments.",
  locality: "Mohan Garden, New Delhi",
  address: {
    line1: "Shop No. 3, 80A, K-1 Extension, Shani Bazar Chowk",
    line2: "Gurudwara Road, Block M, Mohan Garden, Hastsal",
    city: "New Delhi",
    pincode: "110059",
  },
  addressFull:
    "Shop No. 3, 80A, K-1 Extension, Shani Bazar Chowk, Gurudwara Road, Block M, Mohan Garden, Hastsal, New Delhi – 110059",
  landmark: "Near Zaildar Sports Complex, Dwarka Mor area",
  // TODO: replace with the café's real contact number
  phoneDisplay: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  whatsappHref: "https://wa.me/919999999999",
  instagram: "@cafeeraya",
  instagramHref: "https://instagram.com/cafeeraya",
  facebookHref: "https://facebook.com/cafeeraya",
  hours: "11:00 AM — 10:30 PM",
  hoursNote: "Every day",
  costForTwo: "₹500–₹800 for two",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Cafe+Eraya+Mohan+Garden+New+Delhi+110059",
  mapsEmbed:
    "https://www.google.com/maps?q=Mohan+Garden,+Hastsal,+New+Delhi,+110059&output=embed",
  cuisines: ["Indo-Chinese", "Continental", "Desserts", "Chaat", "Healthy"],
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
