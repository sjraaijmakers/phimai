export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  canonical: string;
  lang: string;
  locale: string;
  hreflang: {
    en: string;
    th: string;
    zh?: string;
    [key: string]: string | undefined;
  };
}

export interface LanguageSEO {
  title: string;
  description: string;
  keywords: string;
  locale: string;
}

const baseUrl = 'https://pph.aktis.dev';

// SEO content for each language
export const seoContent: Record<string, LanguageSEO> = {
  en: {
    title: 'Phimai Pond House - Cozy Tiny Homes in Thailand',
    description: 'Stay in cozy tiny homes at Phimai Pond House, Thailand. Minutes from Phimai Historical Park and Sai Ngam mangrove. Free bikes, kitchenette, and authentic Thai experience.',
    keywords: 'Phimai accommodation, Thailand tiny homes, Phimai Historical Park, vacation rental Thailand, small town Thailand, Khmer temple, Sai Ngam, Nakhon Ratchasima',
    locale: 'en_US'
  },
  th: {
    title: 'Phimai Pond House - บ้านเล็กๆ ที่อบอุ่นในประเทศไทย',
    description: 'พักในบ้านเล็กๆ ที่อบอุ่นที่ Phimai Pond House ประเทศไทย ใกล้กับอุทยานประวัติศาสตร์พิมายและป่าชายเลนสายน้ำ จักรยานฟรี ห้องครัว และประสบการณ์ไทยแท้',
    keywords: 'ที่พักพิมาย, บ้านเล็กประเทศไทย, อุทยานประวัติศาสตร์พิมาย, เช่าที่พักประเทศไทย, เมืองเล็กไทย, วัดขอม, สายน้ำ, นครราชสีมา',
    locale: 'th_TH'
  },
  zh: {
    title: 'Phimai Pond House - 泰国温馨小木屋',
    description: '在泰国Phimai Pond House体验温馨小木屋。距离Phimai历史公园和Sai Ngam红树林仅数分钟路程。免费自行车、小厨房和正宗泰国体验。',
    keywords: '披迈住宿, 泰国小木屋, 披迈历史公园, 泰国度假租赁, 泰国小镇, 高棉寺庙, 赛南, 呵叻府',
    locale: 'zh_CN'
  }
};

// Default SEO configuration
export const defaultSEO: SEOConfig = {
  title: seoContent.en.title,
  description: seoContent.en.description,
  keywords: seoContent.en.keywords,
  image: '/images/hero-tiny-home.jpg',
  canonical: baseUrl,
  lang: 'en',
  locale: seoContent.en.locale,
  hreflang: {
    en: baseUrl,
    th: `${baseUrl}/th`,
    zh: `${baseUrl}/zh`
  }
};

// Function to generate SEO config for a specific language
export function getSEOConfig(lang: string, customProps?: Partial<SEOConfig>): SEOConfig {
  const langContent = seoContent[lang] || seoContent.en;
  const canonical = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;
  
  return {
    ...defaultSEO,
    title: langContent.title,
    description: langContent.description,
    keywords: langContent.keywords,
    canonical,
    lang,
    locale: langContent.locale,
    ...customProps
  };
}

// Function to generate structured data for a specific language
export function getStructuredData(lang: string, seoConfig: SEOConfig) {
  const langContent = seoContent[lang] || seoContent.en;
  
  // Amenity names in different languages
  const amenityNames = {
    en: {
      wifi: "Free WiFi",
      bikes: "Free Bike Rental", 
      kitchen: "Kitchenette"
    },
    th: {
      wifi: "WiFi ฟรี",
      bikes: "จักรยานฟรี",
      kitchen: "ห้องครัว"
    },
    zh: {
      wifi: "免费WiFi",
      bikes: "免费自行车",
      kitchen: "小厨房"
    }
  };
  
  const amenities = amenityNames[lang as keyof typeof amenityNames] || amenityNames.en;
  
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Phimai Pond House",
    "description": langContent.description,
    "url": seoConfig.canonical,
    "telephone": "+66-44-471-123",
    "email": "info@phimaipondhouse.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Phimai",
      "addressRegion": "Nakhon Ratchasima",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.2217,
      "longitude": 102.4947
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": amenities.wifi,
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": amenities.bikes,
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": amenities.kitchen,
        "value": true
      }
    ],
    "image": new URL(seoConfig.image, baseUrl).href,
    "priceRange": "$$",
    "currenciesAccepted": "THB, USD, EUR",
    "inLanguage": lang
  };
}

// Function to generate hreflang links
export function getHreflangLinks(hreflang: Record<string, string | undefined>) {
  return Object.entries(hreflang)
    .filter(([_, url]) => url !== undefined)
    .map(([lang, url]) => ({
      rel: 'alternate',
      hreflang: lang,
      href: url!
    }));
}
