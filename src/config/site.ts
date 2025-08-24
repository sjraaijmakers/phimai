export const siteConfig = {
  // Site URLs
  url: 'https://pph.aktis.dev',
  email: 'stay@phimaipondhouse.com',
  phone: '+66 843498405',
  lineId: 'phimaipondhouse', // Line ID for QR code
  // Contact form endpoint (e.g., Formspree: https://formspree.io/f/xxxxxxx or your serverless API URL)
  contactEndpoint: '',

  // Booking platforms (links + metadata)
  booking: {
    airbnb: {
      url: 'https://www.airbnb.nl/rooms/1469265532291794355',
      name: 'Airbnb',
      logo: '/images/logos/airbnb-logo.jpeg',
      className: 'airbnb',
    },
    agoda: {
      url: 'https://www.agoda.com/phimai-pond-house/hotel/nakhonratchasima-th.html',
      name: 'Agoda',
      logo: '/images/logos/agoda-logo.jpeg',
      className: 'agoda',
    },
    booking: {
      url: 'https://www.booking.com/hotel/th/phimai-pond-house',
      name: 'Booking.com',
      logo: '/images/logos/booking-logo.jpeg',
      className: 'booking',
    },
    trip: {
      url: '',
      name: 'Trip.com',
      logo: '/images/logos/trip-logo.jpeg',
      className: 'trip',
      disabled: true,
    },
  },
} as const;
