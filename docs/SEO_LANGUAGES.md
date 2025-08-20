# Adding New Languages to SEO

This document explains how to add new languages to the centralized SEO system.

## Current Languages
- **English (en)** - Default language
- **Thai (th)** - Thai language support
- **Chinese (zh)** - Example of adding a new language

## How to Add a New Language

### 1. Add Language Content to `src/config/seo.ts`

```typescript
// Add to seoContent object
fr: {
  title: 'Phimai Pond House - Petites Maisons Confortables en Thaïlande',
  description: 'Séjournez dans de petites maisons confortables à Phimai Pond House, Thaïlande. À quelques minutes du parc historique de Phimai et de la mangrove Sai Ngam. Vélos gratuits, kitchenette et expérience thaïlandaise authentique.',
  keywords: 'hébergement Phimai, petites maisons Thaïlande, parc historique Phimai, location vacances Thaïlande, petite ville Thaïlande, temple khmer, Sai Ngam, Nakhon Ratchasima',
  locale: 'fr_FR'
}
```

### 2. Add to Hreflang Configuration

```typescript
// Add to defaultSEO.hreflang
hreflang: {
  en: baseUrl,
  th: `${baseUrl}/th`,
  zh: `${baseUrl}/zh`,
  fr: `${baseUrl}/fr`  // Add this line
}
```

### 3. Add Amenity Names (if needed)

```typescript
// Add to amenityNames object in getStructuredData function
fr: {
  wifi: "WiFi Gratuit",
  bikes: "Location de Vélos Gratuite",
  kitchen: "Kitchenette"
}
```

### 4. Create the Language Page

Create `src/pages/fr/index.astro`:

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Hero from '../../components/sections/Hero.astro';
import Gallery from '../../components/sections/Properties.astro';
import About from '../../components/sections/About.astro';
import Booking from '../../components/sections/Booking.astro';
import Contact from '../../components/sections/Contact.astro';
import Footer from '../../components/Footer.astro';
---

<Layout lang="fr">
  <Header />
  <main>
    <Hero />
    <Gallery />
    <About />
    <Booking />
    <Contact />
  </main>
  <Footer />
</Layout>
```

### 5. Update Sitemap (Optional)

Add the new language URL to `src/pages/sitemap.xml.ts`:

```typescript
<url>
  <loc>${siteConfig.url}/fr</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

## Benefits of This System

✅ **DRY Principle** - No duplicate SEO code  
✅ **Type Safety** - TypeScript interfaces ensure consistency  
✅ **Easy Maintenance** - All SEO content in one place  
✅ **Scalable** - Add languages without touching Layout component  
✅ **Consistent** - Same structure for all languages  
✅ **SEO Optimized** - Proper hreflang, structured data, and meta tags  

## Usage Examples

### Basic Usage
```astro
<Layout lang="en">
  <!-- Content -->
</Layout>
```

### Custom SEO Override
```astro
<Layout 
  lang="en" 
  customSEO={{
    title: "Custom Page Title",
    description: "Custom description for this specific page"
  }}
>
  <!-- Content -->
</Layout>
```

## Generated SEO Features

- ✅ Meta title, description, keywords
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Card tags
- ✅ Hreflang language alternates
- ✅ Structured data (Schema.org)
- ✅ Geographic meta tags
- ✅ Canonical URLs
- ✅ Language-specific content
