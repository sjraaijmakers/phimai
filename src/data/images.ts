export interface ImageConfig {
  filename: string;
  alt: string;
  description: string;
  usage: string[];
  category: 'hero' | 'gallery' | 'about' | 'amenities' | 'location';
}

export const imageConfigs: ImageConfig[] = [
  {
    filename: 'hero-tiny-home.jpg',
    alt: 'Cozy tiny home exterior in Phimai',
    description: 'Our charming tiny home exterior with modern design and tropical surroundings',
    usage: ['hero-section'],
    category: 'hero'
  },
  {
    filename: 'tiny-home-exterior.jpg',
    alt: 'Tiny home exterior view',
    description: 'Our charming tiny home exterior with modern design',
    usage: ['gallery-main', 'gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'interior-living.jpg',
    alt: 'Tiny home interior living space',
    description: 'Comfortable living area with all essentials',
    usage: ['gallery-main', 'gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'phimai-temple.jpg',
    alt: 'Phimai Historical Park nearby',
    description: 'Ancient Khmer temple ruins just minutes away',
    usage: ['about-section', 'gallery-main', 'gallery-thumbnails'],
    category: 'location'
  },
  {
    filename: 'family-suite.jpg',
    alt: 'Family suite accommodation',
    description: 'Spacious family accommodation for larger groups',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'kitchenette.jpg',
    alt: 'Kitchenette with essentials',
    description: 'Fully equipped kitchenette for your convenience',
    usage: ['gallery-thumbnails'],
    category: 'amenities'
  },
  {
    filename: 'bedroom.jpg',
    alt: 'Comfortable bedroom space',
    description: 'Cozy bedroom with quality linens',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'free-bikes.jpg',
    alt: 'Free bikes for exploring',
    description: 'Complimentary bikes to explore Phimai at your own pace',
    usage: ['gallery-thumbnails'],
    category: 'amenities'
  },
  {
    filename: 'sai-ngam-mangrove.jpg',
    alt: 'Sai Ngam mangrove area',
    description: 'Beautiful mangrove forest perfect for nature walks',
    usage: ['gallery-thumbnails'],
    category: 'location'
  },
  // Additional images without descriptions to fill the gallery
  {
    filename: 'PHOTO-2025-08-01-07-20-25 2.jpg',
    alt: 'Additional property view',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-23-55.jpg',
    alt: 'Property detail',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-23-55 2.jpg',
    alt: 'Property feature',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-23-55 3.jpg',
    alt: 'Property amenity',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-23-56.jpg',
    alt: 'Property view',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-23-56 2.jpg',
    alt: 'Property detail',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-23-56 3.jpg',
    alt: 'Property feature',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-26-50.jpg',
    alt: 'Property amenity',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-07-27-20.jpg',
    alt: 'Property view',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-11-18.jpg',
    alt: 'Property detail',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-11-26.jpg',
    alt: 'Property feature',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-11-45.jpg',
    alt: 'Property amenity',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-12-08.jpg',
    alt: 'Property view',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-12-33.jpg',
    alt: 'Property detail',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-12-55.jpg',
    alt: 'Property feature',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-13-15.jpg',
    alt: 'Property amenity',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-14-44.jpg',
    alt: 'Property view',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-15-02.jpg',
    alt: 'Property detail',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-15-36.jpg',
    alt: 'Property feature',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-15-54.jpg',
    alt: 'Property amenity',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  },
  {
    filename: 'PHOTO-2025-08-01-13-20-44.jpg',
    alt: 'Property view',
    description: '',
    usage: ['gallery-thumbnails'],
    category: 'gallery'
  }
];

// Helper functions
export function getImagesByUsage(usage: string): ImageConfig[] {
  return imageConfigs.filter(img => img.usage.includes(usage));
}

export function getImagesByCategory(category: string): ImageConfig[] {
  return imageConfigs.filter(img => img.category === category);
}

export function getImageByFilename(filename: string): ImageConfig | undefined {
  return imageConfigs.find(img => img.filename === filename);
}

// Gallery images for the main gallery section
export const galleryImages = getImagesByUsage('gallery-main').concat(getImagesByUsage('gallery-thumbnails'));

// Hero image
export const heroImage = getImagesByUsage('hero-section')[0];

// About section image
export const aboutImage = getImagesByUsage('about-section')[0];
