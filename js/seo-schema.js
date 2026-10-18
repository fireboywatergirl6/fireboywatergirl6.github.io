/**
 * Structured Data (JSON-LD) for SEO Rich Snippets
 * Automatically injects the Schema.org JSON-LD graph into <head>
 */
(function() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://fireboywatergirl6.github.io/#website",
        "url": "https://fireboywatergirl6.github.io/",
        "name": "Fireboy and Watergirl Unblocked",
        "alternateName": [
          "Fire Boy Water Girl Unblocked",
          "Fire Boy and Water Girl Unblocked"
        ],
        "description": "Play Fireboy and Watergirl unblocked online for free with all temple chapters, car games, and Vex series.",
        "inLanguage": "en-US"
      },
      {
        "@type": "VideoGame",
        "name": "Fireboy and Watergirl 6: Fairy Tales Unblocked",
        "url": "https://fireboywatergirl6.github.io/",
        "image": "https://fireboywatergirl6.github.io/img/fireboy-watergirl-6.jpeg",
        "description": "Play Fireboy and Watergirl unblocked in the sixth installment Fairy Tales. Team up with magical fairies in cooperative 2-player puzzle platforming.",
        "genre": [
          "Puzzle",
          "Platformer",
          "Cooperative",
          "Adventure"
        ],
        "playMode": [
          "SinglePlayer",
          "CoOp",
          "MultiPlayer"
        ],
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
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I play Fireboy and Watergirl unblocked at school?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can play Fireboy and Watergirl unblocked directly on fireboywatergirl6.github.io. Our HTML5 games require no downloads, no Flash, and run effortlessly on school Chromebooks and restricted networks."
            }
          },
          {
            "@type": "Question",
            "name": "Can two people play Fire Boy Water Girl unblocked on one computer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Fire Boy Water Girl unblocked is built specifically for local 2-player co-op on a single keyboard. One player guides Fireboy using Arrow keys, while the second player steers Watergirl with W-A-D keys."
            }
          },
          {
            "@type": "Question",
            "name": "What games are included in the Fire Boy and Water Girl unblocked collection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The collection includes all 6 official chapters: Forest Temple, Light Temple, Ice Temple, Crystal Temple, Elements, and the newest chapter Fairy Tales, plus high-speed car and Vex parkour games."
            }
          },
          {
            "@type": "Question",
            "name": "Does Fireboy and Watergirl unblocked need Adobe Flash Player?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No! All Fireboy and Watergirl unblocked games on our site have been updated to pure HTML5 and WebGL, meaning you can play in any modern web browser without Flash."
            }
          }
        ]
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
})();
