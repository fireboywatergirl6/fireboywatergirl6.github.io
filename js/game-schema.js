/**
 * Unified Structured Data (JSON-LD) generator for all Game pages
 * Automatically extracts game metadata and injects Schema.org JSON-LD into <head>
 */
(function() {
  function generateGameSchema() {
    // Prevent duplicate injection
    if (document.querySelector('script[data-schema="game-schema"]')) return;

    // 1. Canonical / Page URL
    var canonical = document.querySelector('link[rel="canonical"]');
    var pageUrl = canonical ? canonical.href : window.location.href.split('#')[0].split('?')[0];

    // 2. Category breadcrumb
    var catElem = document.querySelector('.bread-crumb-list a.bread-after');
    var catUrl = catElem ? catElem.href : 'https://fireboywatergirl6.github.io/category/fireboy-water.html';
    var catName = catElem ? catElem.textContent.replace(/\s+/g, ' ').trim() : 'Fireboy Water Girl';

    // 3. Game Name
    var gameTitleElem = document.querySelector('.title-game-visible');
    var breadcrumbElem = document.querySelector('.bread-crumb-list span.bread-after');
    var gameName = '';

    if (breadcrumbElem && breadcrumbElem.textContent.trim()) {
      gameName = breadcrumbElem.textContent.replace(/\s+/g, ' ').trim();
    } else if (gameTitleElem && gameTitleElem.textContent.trim()) {
      gameName = gameTitleElem.textContent.replace(/\s+/g, ' ').trim();
    } else {
      gameName = document.title.replace(/\s*-\s*Play.*$/i, '').trim();
    }

    // 4. Description
    var descElem = document.querySelector('meta[name="description"]');
    var description = descElem ? descElem.content.trim() : '';

    // 5. Image / Thumbnail
    var ogImageElem = document.querySelector('meta[property="og:image"]');
    var thumbElem = document.querySelector('.game-thumb img');
    var image = '';

    if (ogImageElem && ogImageElem.content) {
      image = ogImageElem.content;
    } else if (thumbElem && thumbElem.src) {
      image = thumbElem.src;
    } else {
      image = 'https://fireboywatergirl6.github.io/img/fireboy-watergirl-6.jpeg';
    }

    // 6. Build Schema
    var schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "VideoGame",
          "name": gameName,
          "url": pageUrl,
          "image": image,
          "description": description,
          "genre": catName,
          "applicationCategory": "Browser Game",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
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
              "item": catUrl
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": gameName,
              "item": pageUrl
            }
          ]
        }
      ]
    };

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'game-schema');
    script.text = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateGameSchema);
  } else {
    generateGameSchema();
  }
})();
