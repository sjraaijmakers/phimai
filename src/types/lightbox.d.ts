declare global {
  interface Window {
    lightboxManager: Record<string, any>;
    openLightbox: (index: number, lightboxId: string) => void;
  }
}

export {};
