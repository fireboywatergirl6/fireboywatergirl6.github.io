/**
 * Unified Structured Data (JSON-LD) generator for Category pages
 * Automatically extracts category metadata and injects Schema.org JSON-LD into <head>
 */
(function() {
  function generateCategorySchema() {
    if (document.querySelector('script[data-schema="category-schema"]')) return;

    // 1. Canonical / Page URL
    var canonical = document.querySelector('link[rel="canonical"]');
    var pageUrl = canonical ? canonical.href : window.location.href.split('#')[0].split('?')[0];

    // 2. Category Name
    var breadcrumbElem = document.querySelector('.bread-crumb-list span.bread-after');
    var catName = '';
    if (breadcrumbElem && breadcrumbElem.textContent.trim()) {
      catName = breadcrumbElem.textContent.replace(/\s+/g, ' ').trim();
    } else {
      catName = document.title.replace(/\s*-\s*Play.*$/i, '').trim();
    }

    // 3. Title & Description
    var title = document.title;
    var descElem = document.querySelector('meta[name="description"]');
    var description = descElem ? descElem.content.trim() : '';

    var schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "name": title,
          "url": pageUrl,
          "description": description,
          "inLanguage": "en-US"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://fireboywatergirl6.github.io/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": catName,
              "item": pageUrl
            }
          ]
        }
      ]
    };

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'category-schema');
    script.text = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateCategorySchema);
  } else {
    generateCategorySchema();
  }
})();
