export const siteConfig = {
  // Site URLs
  url: 'https://pph.aktis.dev',
  email: 'stay@phimaipondhouse.com',
  phone: '+66 12 345 6789',
  lineId: 'phimaipondhouse', // Line ID for QR code
  // Contact form endpoint (e.g., Formspree: https://formspree.io/f/xxxxxxx or your serverless API URL)
  contactEndpoint: '',
  
  // Site metadata
  name: 'Phimai Pond House',
  description: 'Cozy Tiny Homes in Thailand',
  location: 'Phimai, Nakhon Ratchasima, Thailand',
  
  // Social media (if needed later)
  social: {
    // facebook: 'https://facebook.com/phimaipondhouse',
    // instagram: 'https://instagram.com/phimaipondhouse',
  },
  
  // Booking platforms (if needed later)
  booking: {
    airbnb: 'https://www.airbnb.nl/rooms/1469265532291794355',
    // booking: 'https://booking.com/phimaipondhouse',
  }
} as const;
