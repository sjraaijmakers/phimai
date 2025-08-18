export interface ImageConfig {
  src: string;
  caption?: string; // visible caption; also used for alt text
}

export const galleryImages: ImageConfig[] = [
  {
    src: '/images/the-pond.jpg',
    caption: 'Our peaceful pond setting with lily pads, aquatic plants, and the main building reflected in the water'
  },  
  {
    src: '/images/bikes.jpg',
    caption: 'Complimentary bikes to explore Phimai at your own pace'
  },
  {
    src: '/images/tiny-home-exterior.jpg',
    caption: 'Our charming tiny home exterior with modern design'
  },
  // Example without a description to verify lightbox behavior
  {
    src: '/images/garden-view.jpg',
    caption: undefined
  },
  {
    src: '/images/interior-living.jpg',
    caption: 'Comfortable living area with all essentials'
  },
  {
    src: '/images/phimai-temple.jpg',
    caption: 'Ancient Khmer temple ruins just minutes away'
  },
  {
    src: '/images/family-suite.jpg',
    caption: 'Spacious family accommodation for larger groups'
  },
  {
    src: '/images/kitchenette.jpg',
    caption: 'Fully equipped kitchenette for your convenience'
  },
  {
    src: '/images/bedroom.jpg',
    caption: 'Cozy bedroom with quality linens'
  },
  {
    src: '/images/sai-ngam-mangrove.jpg',
    caption: 'Beautiful mangrove forest perfect for nature walks'
  }
];


