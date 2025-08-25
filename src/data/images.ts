export interface ImageConfig {
  src: string;
  captionKey?: string; // translation key for caption
}

export const galleryImages: ImageConfig[] = [
  {
    src: '/images/the-pond.jpg',
    captionKey: 'gallery.captions.pond',
  },
  {
    src: '/images/bikes.jpg',
    captionKey: 'gallery.captions.bikes',
  },
  {
    src: '/images/tiny-home-exterior.jpg',
    captionKey: 'gallery.captions.exterior',
  },
  // Example without a description to verify lightbox behavior
  {
    src: '/images/garden-view.jpg'
  },
  {
    src: '/images/interior-living.jpg',
    captionKey: 'gallery.captions.living',
  },
  {
    src: '/images/family-suite.jpg',
    captionKey: 'gallery.captions.familySuite',
  },
  {
    src: '/images/kitchenette.jpg',
    captionKey: 'gallery.captions.kitchenette',
  },
  {
    src: '/images/bedroom.jpg',
    captionKey: 'gallery.captions.bedroom',
  },
];
