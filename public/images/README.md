# Image Management System

This folder contains all the images for the Phimai Pound House website. The image system is managed through a configuration file at `src/data/images.ts`.

## How It Works

1. **Place your images** in this folder (`public/images/`)
2. **Update the configuration** in `src/data/images.ts` to map filenames to descriptions and usage
3. **The website automatically uses** the correct images based on the configuration

## Image Configuration

Each image is configured with:
- `filename`: The actual filename in this folder
- `alt`: Alt text for accessibility
- `description`: Description shown in galleries/lightboxes
- `usage`: Where the image is used (hero-section, gallery-main, gallery-thumbnails, about-section)
- `category`: Type of image (hero, gallery, about, amenities, location)

## Required Images

Based on the current configuration, you need these images:

### Hero Section
- `PHOTO-2025-07-31-15-31-50.jpg` - Main hero image (large, high-quality)

### Gallery Images
- `PHOTO-2025-07-31-16-24-08.jpg` - Main gallery image (exterior)
- `PHOTO-2025-08-01-07-20-23 3.jpg` - Main gallery image (interior)
- `PHOTO-2025-07-31-16-04-43.jpg` - Main gallery image (temple)
- `PHOTO-2025-07-31-15-29-41 2.jpg` - Thumbnail gallery image (family suite)
- `PHOTO-2025-08-01-07-20-57.jpg` - Thumbnail gallery image (kitchenette)
- `PHOTO-2025-08-01-13-11-45.jpg` - Thumbnail gallery image (bedroom)
- `PHOTO-2025-08-01-13-12-33.jpg` - Thumbnail gallery image (local market)
- `PHOTO-2025-08-01-07-23-56 2.jpg` - Thumbnail gallery image (mangrove)
- `PHOTO-2025-08-01-13-20-44.jpg` - Thumbnail gallery image (free bikes)

### About Section
- `PHOTO-2025-07-31-16-04-43.jpg` - Also used in about section (temple)

## Image Guidelines

- **Format**: JPG or PNG
- **Hero image**: High resolution (1200px+ width)
- **Gallery images**: Good quality (800px+ width)
- **Thumbnails**: Can be smaller (400px+ width)
- **File sizes**: Optimize for web (under 500KB each)

## Adding New Images

1. Add your image file to this folder
2. Update `src/data/images.ts` with the new image configuration
3. The website will automatically use the new image

## Example Configuration

```typescript
{
  filename: 'your-new-image.jpg',
  alt: 'Description for screen readers',
  description: 'Description shown in galleries',
  usage: ['gallery-main'], // Where to use it
  category: 'gallery' // Type of image
}
```

## Usage Types

- `hero-section`: Main hero image
- `gallery-main`: Featured in main gallery grid
- `gallery-thumbnails`: Shown in thumbnail gallery
- `about-section`: Used in about section

## Categories

- `hero`: Hero section images
- `gallery`: Property/accommodation images
- `about`: About section images
- `amenities`: Amenity/feature images
- `location`: Location/attraction images
