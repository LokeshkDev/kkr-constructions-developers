import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'business.business';
  ogImage?: string;
  schemaData?: Record<string, any> | Record<string, any>[];
  breadcrumbs?: BreadcrumbItem[];
}

const DOMAIN = 'https://kkrconstruction.com';
const DEFAULT_IMAGE = `${DOMAIN}/about-kkr-construction-developers.png`;
const SITE_NAME = 'KKR Construction & Developers';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = 'KKR Construction, KKR Construction Developers, Mivan Construction, Thiruvallur Builder, Structural Works, Residential Construction, Commercial Construction, Concrete Solutions, Civil Engineering Tamil Nadu',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schemaData,
  breadcrumbs
}) => {
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${DOMAIN}${canonicalUrl.startsWith('/') ? '' : '/'}${canonicalUrl}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tag by attribute name / property
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'KKR Construction & Developers');
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:image:secure_url', fullImageUrl);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@KKRConstruction');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 6. JSON-LD Structured Data
    const scriptId = 'dynamic-page-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    // Build combined schema including breadcrumbs if provided
    const allSchemas: Record<string, any>[] = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      allSchemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.url.startsWith('http') ? crumb.url : `${DOMAIN}${crumb.url.startsWith('/') ? '' : '/'}${crumb.url}`
        }))
      });
    }

    if (schemaData) {
      if (Array.isArray(schemaData)) {
        allSchemas.push(...schemaData);
      } else {
        allSchemas.push(schemaData);
      }
    }

    if (allSchemas.length > 0) {
      scriptElement.text = JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas);
    }

    return () => {
      // Cleanup on unmount or route change
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, fullCanonicalUrl, keywords, ogType, fullImageUrl, schemaData, breadcrumbs]);

  return null;
};

