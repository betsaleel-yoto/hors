const supportedLangs = ["fr", "en", "zh", "sw"];
const langLabels = {
  fr: "FR",
  en: "EN",
  zh: "中文",
  sw: "SW",
};

const pageFiles = {
  home: "index.html",
  about: "about.html",
  services: "services.html",
  values: "values.html",
  contact: "contact.html",
};

const pageOrder = ["home", "about", "services", "values", "contact"];

const icons = {
  spark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.1 6.1L20 10l-5.9 1.9L12 18l-2.1-6.1L4 10l5.9-1.9L12 2z"/><path d="M4 18l1.4.5L6 20l.6-1.5L8 18l-1.4-.5L6 16l-.6 1.5L4 18z"/></svg>`,
  stack: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 4 8l8 4 8-4-8-4z"/><path d="M4 12l8 4 8-4"/><path d="M4 16l8 4 8-4"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="8" cy="18" r="1.8"/><circle cx="18" cy="18" r="1.8"/></svg>`,
  drill: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l6-6 2 2-6 6H4z"/><path d="M11 11l5-5 2 2-5 5z"/><path d="M14 8l4-4 2 2-4 4z"/><path d="M3 21h5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 5.5V11c0 4.7-3 8.4-7 10-4-1.6-7-5.3-7-10V5.5L12 3z"/><path d="M9.2 12.3 11 14l3.8-4"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4c-7 0-12 3.6-14.4 8.3C3.9 16.6 4.5 20 4.5 20s3.4.6 7.7-1.1C17 16.5 20 11.8 20 4z"/><path d="M8 16c2.8-1.4 5.4-4 7.1-7.2"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2"/><path d="M4 12h16"/><path d="M12 4c2.4 2.4 3.8 5.1 3.8 8s-1.4 5.6-3.8 8"/><path d="M12 4c-2.4 2.4-3.8 5.1-3.8 8"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s5-5.4 5-10a5 5 0 1 0-10 0c0 4.6 5 10 5 10z"/><circle cx="12" cy="11" r="1.9"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.5 9.8 7c.6.6.7 1.6.2 2.3l-1 1.4c1.2 2.2 2.9 3.9 5.1 5.1l1.4-1c.7-.5 1.7-.4 2.3.2l2.5 2.3c.7.7.7 1.8.1 2.5l-1.3 1.5c-.8.9-2 1.3-3.2 1-6.7-1.7-11.9-6.9-13.6-13.6-.3-1.2.1-2.4 1-3.2l1.5-1.3c.7-.6 1.8-.6 2.5.1z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2"/><path d="m10 14 1.2-3.2L14.5 9.5 13.3 12.7 10 14z"/><path d="M12 7v1.5"/><path d="M12 15.5V17"/></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 11.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M15.8 10.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M3.8 20c.6-3.2 2.6-5 4.7-5h0c2.1 0 4.1 1.8 4.7 5"/><path d="M13.5 20c.4-2.2 1.8-3.5 3.5-3.5 1.6 0 3 1.3 3.4 3.5"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h12"/><path d="m13 6 6 6-6 6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
};

const copy = {
  fr: {
    site: {
      brandTag: "The House of Excellence",
      cta: "Prendre contact",
      menu: "Menu",
      language: "Langue",
      footerNote: "Disponible en français, anglais, chinois et swahili.",
      footerTag: "Société de services miniers dirigée par une femme • Lubumbashi, RDC.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      values: "Valeurs",
      contact: "Contact",
    },
    pages: {
      home: {
        metaTitle: "Horeb | L'Architecture de l'Excellence",
        metaDescription: "Horeb - Services miniers et sous-traitance industrielle de premier ordre au Grand Katanga. Leadership féminin, rigueur et excellence opérationnelle.",
        hero: {
          eyebrow: "Leadership minier & industriel en RDC",
          title: "L'Architecture de l'Excellence.",
          subtitle: "Une approche épurée et rigoureuse du support minier au Grand Katanga.",
          primary: "Explorer nos services",
          secondary: "Découvrir notre vision",
          chips: ["Leadership Féminin", "Lubumbashi", "Grand Katanga"],
          stats: [
            { value: "6+", label: "Pôles d'expertise" },
            { value: "24/7", label: "Présence terrain" },
            { value: "RDC", label: "Ancrage local" },
            { value: "4", label: "Langues maîtrisées" },
          ],
          note: "Exécution rigoureuse. Standards internationaux. Confiance institutionnelle.",
          imageBadge: "Lubumbashi • Haut-Katanga",
          imageCaption: "Des standards de haut niveau pour des partenaires exigeants.",
        },
        pillars: {
          eyebrow: "Organisation du site",
          title: "Quatre piliers essentiels.",
          copy: "Chaque section détaille une dimension clé de notre entreprise pour une expérience fluide et épurée.",
          items: [
            {
              icon: "users",
              title: "Notre Histoire & Leadership",
              text: "Ancrage à Lubumbashi, vision à long terme et direction portée par un leadership féminin d'exception.",
              hrefPage: "about",
              linkText: "En savoir plus",
            },
            {
              icon: "stack",
              title: "Services & Expertises",
              text: "Approvisionnement, logistique, soufre & produits chimiques, forage, terrassement et support clé en main.",
              hrefPage: "services",
              linkText: "Voir tous nos services",
            },
            {
              icon: "shield",
              title: "Nos Valeurs & Engagements",
              text: "Excellence, intégrité, sécurité, durabilité et autonomisation au cœur de chaque intervention.",
              hrefPage: "values",
              linkText: "Découvrir nos valeurs",
            },
            {
              icon: "phone",
              title: "Contact & Implantations",
              text: "Échangez directement avec notre équipe à Lubumbashi et accédez à notre réseau international.",
              hrefPage: "contact",
              linkText: "Nous contacter",
            },
          ],
        },
        story: {
          eyebrow: "Notre Identité",
          title: "Un pont solide entre rigueur locale et exigences globales.",
          copy: [
            "Basée à Lubumbashi au Haut-Katanga, Horeb est une entreprise congolaise spécialisée dans la sous-traitance et les services miniers de haute précision.",
            "Nous combinons une connaissance intime du terrain avec des normes d'exécution internationales pour accompagner nos partenaires en toute sérénité.",
          ],
          bullets: ["Processus sans friction", "Communication transparente", "Respect strict des normes environnementales et humaines"],
          imageBadge: "RDC • Grand Katanga",
          imageCaption: "Une équipe engagée pour le développement industriel durable.",
        },
        cta: {
          eyebrow: "Collaborer avec Horeb",
          title: "Besoin d'un partenaire industriel fiable et réactif ?",
          copy: "Nos équipes sont à votre disposition pour vous accompagner dans vos opérations minières et logistiques.",
          button: "Démarrer un projet",
        },
      },
      about: {
        metaTitle: "Horeb | À propos de nous",
        metaDescription: "Découvrez l'histoire de Horeb, notre leadership féminin à Lubumbashi et notre mission d'excellence dans le secteur minier congolais.",
        hero: {
          eyebrow: "Histoire & Leadership",
          title: "Ancrée à Lubumbashi. Reconnue au Katanga.",
          subtitle: "Une maîtrise du secteur industriel congolais portée par un leadership féminin d'exception.",
          chips: ["Lubumbashi", "Haut-Katanga", "Direction Féminine"],
          imageBadge: "Équipe Dirigeante",
          imageCaption: "Rigueur, discrétion et professionnalisme à chaque étape.",
        },
        cards: [
          {
            icon: "pin",
            title: "Siège social",
            text: "Lubumbashi, Haut-Katanga, au cœur du bassin minier du Grand Katanga en RDC.",
          },
          {
            icon: "stack",
            title: "Cœur de métier",
            text: "Services aux entreprises minières, sous-traitance industrielle, logistique et chaîne d'approvisionnement.",
          },
          {
            icon: "globe",
            title: "Partenaires",
            text: "Compagnies minières internationales, sous-traitants majeurs, investisseurs et acteurs industriels.",
          },
          {
            icon: "users",
            title: "Vision managériale",
            text: "Un leadership féminin valorisant l'écoute, la transparence et le souci du détail.",
          },
        ],
        quote: {
          label: "Notre Philosophie",
          copy: "La véritable excellence se mesure à la régularité et à la fiabilité de l'exécution.",
          meta: "Nous instaurons un climat de confiance réciproque en simplifiant la complexité opérationnelle.",
        },
        cta: {
          eyebrow: "Engagés sur le terrain",
          title: "Vous recherchez un partenaire local à haut standard ?",
          copy: "Explorez l'éventail de nos services ou prenez directement contact avec notre direction.",
          button: "Découvrir nos services",
        },
      },
      services: {
        metaTitle: "Horeb | Nos Services & Expertises",
        metaDescription: "Approvisionnement, logistique, soufre, produits chimiques, forage, terrassement et support clé en main pour le secteur minier.",
        hero: {
          eyebrow: "Pôles d'Expertise",
          title: "Des services miniers et logistiques sur-mesure.",
          subtitle: "Une gamme d'expertises calibrées pour les exigences des projets industriels majeurs.",
          chips: ["Approvisionnement", "Logistique", "Ingénierie Clé en Main"],
          imageBadge: "Excellence Opérationnelle",
          imageCaption: "Des solutions sur-mesure déployées avec rigueur.",
        },
        cards: [
          {
            icon: "stack",
            title: "Approvisionnement & Supply Chain",
            text: "Sourcing et livraison sécurisée de consommables industriels, pièces de rechange et matériels critiques.",
            detail: "Gestion complète du cycle d'achat, qualification des fournisseurs, contrôle qualité avant réquisition, dédouanement et acheminement sur site minier.",
          },
          {
            icon: "leaf",
            title: "Soufre & Produits Chimiques",
            text: "Fourniture de soufre industriel, d'acide sulfurique et de réactifs pour la transformation minérale.",
            detail: "Respect strict des normes de sécurité pour le transport et le stockage de substances chimiques sensibles utilisées dans le traitement du cuivre et du cobalt.",
          },
          {
            icon: "truck",
            title: "Logistique & Transport Lourd",
            text: "Coordination et acheminement sécurisé des marchandises entre les centres urbains et les concessions minières.",
            detail: "Gestion de flotte dédiée, suivi télématique en temps réel, transport de charges lourdes et coordination douanière transfrontalière.",
          },
          {
            icon: "drill",
            title: "Forage & Terrassement",
            text: "Travaux préparatoires sur site, préparation des sols et support technique aux infrastructures.",
            detail: "Équipements récents manoeuvrés par des opérateurs certifiés pour la préparation des voies d'accès, bassins de rétention et sites d'extraction.",
          },
          {
            icon: "spark",
            title: "Location d'Équipements",
            text: "Mise à disposition de machines et d'outillages industriels de dernière génération.",
            detail: "Contrats flexibles court ou long terme, maintenance préventive incluse et assistance technique disponible 24/7 sur site.",
          },
          {
            icon: "compass",
            title: "Support Opérationnel Clé en Main",
            text: "Prise en charge intégrale de projets complexes avec interlocuteur unique dédié.",
            detail: "Coordination pluridisciplinaire réunissant logistique, personnel qualifié, conformité réglementaire et rapport d'avancement régulier.",
          },
        ],
        process: {
          eyebrow: "Méthodologie",
          title: "Une démarche méthodique en trois temps.",
          items: [
            {
              title: "1. Diagnostic & Alignement",
              text: "Analyse approfondie des besoins, définition du cahier des charges et évaluation des contraintes terrain.",
            },
            {
              title: "2. Déploiement Précis",
              text: "Mobilisation immédiate des ressources logistiques et humaines avec suivi rigoureux des jalons.",
            },
            {
              title: "3. Livrables & Suivi",
              text: "Exécution conforme, traçabilité totale et reporting régulier transmis au client.",
            },
          ],
        },
        cta: {
          eyebrow: "Devis ou Consultation",
          title: "Besoin d'une proposition claire et chiffrée ?",
          copy: "Consultez notre équipe commerciale pour un devis personnalisé sous 24 à 48 heures.",
          button: "Demander une consultation",
        },
      },
      values: {
        metaTitle: "Horeb | Nos Valeurs & Engagements",
        metaDescription: "Excellence, intégrité, sécurité, durabilité et autonomisation. Découvrez les valeurs fondamentales de Horeb.",
        hero: {
          eyebrow: "Charte d'Engagement",
          title: "Des valeurs solides pour un impact durable.",
          subtitle: "La réputation de Horeb repose sur le respect inconditionnel de ses principes éthiques et opérationnels.",
          chips: ["Excellence", "Intégrité", "Sécurité", "RDC"],
          imageBadge: "Culture d'Entreprise",
          imageCaption: "L'éthique au service du partenariat durable.",
        },
        cards: [
          {
            icon: "spark",
            title: "Excellence",
            text: "Recherche constante de la qualité supérieure dans la sélection des produits et l'exécution des prestations.",
          },
          {
            icon: "shield",
            title: "Intégrité & Transparence",
            text: "Respect rigoureux de la parole donnée, conformité légale et rapports financiers et opérationnels clairs.",
          },
          {
            icon: "shield",
            title: "Sécurité (HSE)",
            text: "Protection prioritaire de la santé des collaborateurs et préservation de l'environnement sur chaque site.",
          },
          {
            icon: "users",
            title: "Partenariat Gagnant-Gagnant",
            text: "Relations fondées sur l'écoute active, la loyauté et la création de valeur partagée sur le long terme.",
          },
          {
            icon: "compass",
            title: "Innovation Pratique",
            text: "Adoption de solutions modernes et efficaces adaptées à la réalité du terrain au Grand Katanga.",
          },
          {
            icon: "users",
            title: "Autonomisation Féminine",
            text: "Promotion active des femmes aux postes de décision et encouragement des compétences locales.",
          },
          {
            icon: "leaf",
            title: "Durabilité & RSE",
            text: "Pratiques responsables visant à laisser une empreinte positive pour les communautés locales.",
          },
        ],
        quote: {
          label: "Engagement de la Direction",
          copy: "Nous démontrons notre valeur par la constance de nos résultats et la clarté de nos principes.",
          meta: "Le leadership féminin apporte un équilibre essentiel et une rigueur bienveillante dans un secteur hautement exigeant.",
        },
        cta: {
          eyebrow: "Une vision partagée",
          title: "Rejoignez un réseau de partenaires partageant ces principes.",
          copy: "Prenez contact avec notre équipe pour échanger sur vos projets futurs.",
          button: "Contactez notre équipe",
        },
      },
      contact: {
        metaTitle: "Horeb | Contact & Implantation",
        metaDescription: "Contactez Horeb à Lubumbashi, RDC. Téléphones (+243 852 224 185, +27 723 472 246), email et formulaire direct.",
        hero: {
          eyebrow: "Prendre Contact",
          title: "Échangeons autour de vos projets.",
          subtitle: "Une communication fluide en français, anglais, chinois ou swahili.",
          chips: ["Français", "English", "中文", "Kiswahili"],
          imageBadge: "Implantation Lubumbashi",
          imageCaption: "Un échange direct, constructif et professionnel.",
        },
        cards: [
          {
            icon: "pin",
            title: "Adresse Physique",
            text: "18 AV. Caféier, Bel-Air, Campemba, Lubumbashi, Haut-Katanga, RDC",
          },
          {
            icon: "phone",
            title: "Ligne Directe RDC",
            text: "+243 852 224 185",
            href: "tel:+243852224185",
          },
          {
            icon: "phone",
            title: "Ligne Internationale",
            text: "+27 723 472 246",
            href: "tel:+27723472246",
          },
          {
            icon: "mail",
            title: "Adresse Email",
            text: "Joelle-HorebHE@outlook.com",
            href: "mailto:Joelle-HorebHE@outlook.com",
          },
        ],
        quote: {
          label: "Proximité client",
          copy: "Une réponse personnalisée et rapide à chacune de vos sollicitations.",
          meta: "Notre présence locale nous permet d'intervenir rapidement dans toute la province du Haut-Katanga et Lualaba.",
        },
        cta: {
          eyebrow: "Écrivez-nous",
          title: "Envoyez-nous votre message",
          copy: "Remplissez le formulaire ci-dessous et notre direction prendra contact avec vous rapidement.",
          button: "Envoyer l'Email",
        },
      },
    },
  },
  en: {
    site: {
      brandTag: "The House of Excellence",
      cta: "Get in touch",
      menu: "Menu",
      language: "Language",
      footerNote: "Available in French, English, Chinese, and Swahili.",
      footerTag: "Women-led mining services company • Lubumbashi, DRC.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      values: "Values",
      contact: "Contact",
    },
    pages: {
      home: {
        metaTitle: "Horeb | The Architecture of Excellence",
        metaDescription: "Horeb - Premier mining services and industrial subcontracting in Grand Katanga, DRC.",
        hero: {
          eyebrow: "Mining & Industrial Leadership in DRC",
          title: "The Architecture of Excellence.",
          subtitle: "A streamlined and disciplined approach to mining support in Grand Katanga.",
          primary: "Explore Our Services",
          secondary: "Discover Our Vision",
          chips: ["Women-Led", "Lubumbashi", "Grand Katanga"],
          stats: [
            { value: "6+", label: "Service Pillars" },
            { value: "24/7", label: "Field Presence" },
            { value: "DRC", label: "Local Execution" },
            { value: "4", label: "Languages" },
          ],
          note: "Rigorous execution. International standards. Institutional trust.",
          imageBadge: "Lubumbashi • Haut-Katanga",
          imageCaption: "High standards for discerning global partners.",
        },
        pillars: {
          eyebrow: "Site Structure",
          title: "Four Essential Pillars.",
          copy: "Each dedicated section details a core dimension of our firm for a clean and focused browsing experience.",
          items: [
            {
              icon: "users",
              title: "History & Leadership",
              text: "Rooted in Lubumbashi, long-term vision guided by an exceptional women-led executive leadership team.",
              hrefPage: "about",
              linkText: "Learn more",
            },
            {
              icon: "stack",
              title: "Services & Expertise",
              text: "Procurement, logistics, sulfur & industrial chemicals, drilling, earthworks, and turnkey support.",
              hrefPage: "services",
              linkText: "View all services",
            },
            {
              icon: "shield",
              title: "Values & Commitments",
              text: "Excellence, integrity, safety, sustainability, and empowerment at the heart of every operation.",
              hrefPage: "values",
              linkText: "Discover values",
            },
            {
              icon: "phone",
              title: "Contact & Network",
              text: "Connect directly with our team in Lubumbashi and access our international network.",
              hrefPage: "contact",
              linkText: "Contact us",
            },
          ],
        },
        story: {
          eyebrow: "Our Identity",
          title: "A strong bridge between local execution and global standards.",
          copy: [
            "Based in Lubumbashi, Haut-Katanga, Horeb is a Congolese company specializing in high-precision mining services and subcontracting.",
            "We combine deep local knowledge with international standards to support industrial partners with complete confidence.",
          ],
          bullets: ["Frictionless processes", "Transparent communication", "Strict environmental and human compliance"],
          imageBadge: "DRC • Grand Katanga",
          imageCaption: "Dedicated team building long-term industrial value.",
        },
        cta: {
          eyebrow: "Partner with Horeb",
          title: "Need a reliable and responsive industrial partner?",
          copy: "Our teams are ready to support your mining and logistics operations across DRC.",
          button: "Start a conversation",
        },
      },
      about: {
        metaTitle: "Horeb | About Us",
        metaDescription: "Learn about Horeb's history, women-led leadership in Lubumbashi, and commitment to excellence in DRC mining.",
        hero: {
          eyebrow: "History & Leadership",
          title: "Rooted in Lubumbashi. Trusted in Katanga.",
          subtitle: "A mastery of Congolese industry guided by an exceptional women-led management team.",
          chips: ["Lubumbashi", "Haut-Katanga", "Women Leadership"],
          imageBadge: "Executive Board",
          imageCaption: "Precision, discretion, and professionalism at every step.",
        },
        cards: [
          {
            icon: "pin",
            title: "Headquarters",
            text: "Lubumbashi, Haut-Katanga, at the heart of the Grand Katanga mining basin in DRC.",
          },
          {
            icon: "stack",
            title: "Core Business",
            text: "Mining support services, industrial subcontracting, logistics, and supply chain management.",
          },
          {
            icon: "globe",
            title: "Partners",
            text: "International mining corporations, major contractors, strategic investors, and industrial suppliers.",
          },
          {
            icon: "users",
            title: "Management Vision",
            text: "A women-led executive approach emphasizing active listening, transparency, and detail orientation.",
          },
        ],
        quote: {
          label: "Our Philosophy",
          copy: "True excellence is measured by consistency and absolute reliability in execution.",
          meta: "We build trust by simplifying operational complexity.",
        },
        cta: {
          eyebrow: "Field execution",
          title: "Looking for a high-standard local partner?",
          copy: "Explore our services or reach out directly to our leadership team.",
          button: "Explore our services",
        },
      },
      services: {
        metaTitle: "Horeb | Services & Solutions",
        metaDescription: "Procurement, logistics, sulfur, chemicals, drilling, earthworks, and turnkey support.",
        hero: {
          eyebrow: "Expertise Pillars",
          title: "Tailored mining and logistics services.",
          subtitle: "A comprehensive range of expert solutions calibrated for major industrial projects.",
          chips: ["Procurement", "Logistics", "Turnkey Support"],
          imageBadge: "Operational Excellence",
          imageCaption: "Bespoke solutions delivered with absolute precision.",
        },
        cards: [
          {
            icon: "stack",
            title: "Procurement & Supply Chain",
            text: "Strategic sourcing and secured delivery of industrial consumables, spare parts, and critical materials.",
            detail: "Complete purchasing cycle management, vendor qualification, quality inspection, customs clearance, and mine site delivery.",
          },
          {
            icon: "leaf",
            title: "Sulfur & Industrial Chemicals",
            text: "Supply of industrial sulfur, sulfuric acid, and chemical reagents for mineral processing.",
            detail: "Strict adherence to safety standards for transport and storage of chemical reagents used in copper and cobalt extraction.",
          },
          {
            icon: "truck",
            title: "Heavy Transport & Logistics",
            text: "Fleet coordination and secure transport of goods between urban hubs and mine concessions.",
            detail: "Dedicated fleet management, real-time telematics, heavy haulage, and cross-border customs coordination.",
          },
          {
            icon: "drill",
            title: "Drilling & Earthworks",
            text: "Site preparation, earthmoving, access road construction, and infrastructure support.",
            detail: "Modern machinery operated by certified technicians for access road buildout, retention ponds, and mine site prep.",
          },
          {
            icon: "spark",
            title: "Equipment Rental",
            text: "Provision of latest-generation heavy machinery and industrial tools.",
            detail: "Flexible short or long-term contracts, preventive maintenance included, 24/7 technical field support.",
          },
          {
            icon: "compass",
            title: "Turnkey Operational Support",
            text: "End-to-end management of complex projects with a single accountable point of contact.",
            detail: "Multidisciplinary management uniting logistics, skilled labor, safety compliance, and regular progress reports.",
          },
        ],
        process: {
          eyebrow: "Methodology",
          title: "A clear three-step execution framework.",
          items: [
            {
              title: "1. Diagnostic & Alignment",
              text: "Deep analysis of requirements, specification review, and field risk assessment.",
            },
            {
              title: "2. Precision Deployment",
              text: "Immediate mobilization of logistics and human assets with strict milestone tracking.",
            },
            {
              title: "3. Delivery & Traceability",
              text: "Compliant execution, full audit trail, and transparent reporting provided to client.",
            },
          ],
        },
        cta: {
          eyebrow: "Quotes & Inquiries",
          title: "Need a clear and transparent proposal?",
          copy: "Contact our commercial desk for a tailored quotation within 24 to 48 hours.",
          button: "Request a consultation",
        },
      },
      values: {
        metaTitle: "Horeb | Values & Commitments",
        metaDescription: "Excellence, integrity, safety, sustainability, and empowerment.",
        hero: {
          eyebrow: "Corporate Charter",
          title: "Solid values for a lasting impact.",
          subtitle: "Horeb's reputation is built on unconditional adherence to ethical principles.",
          chips: ["Excellence", "Integrity", "Safety", "DRC"],
          imageBadge: "Corporate Culture",
          imageCaption: "Ethics serving long-term partnership.",
        },
        cards: [
          {
            icon: "spark",
            title: "Excellence",
            text: "Relentless pursuit of top quality in product sourcing and field execution.",
          },
          {
            icon: "shield",
            title: "Integrity & Transparency",
            text: "Strict honor of commitments, legal compliance, and clear financial reporting.",
          },
          {
            icon: "shield",
            title: "Safety (HSE)",
            text: "Priority protection of workforce health and environmental preservation at every site.",
          },
          {
            icon: "users",
            title: "Win-Win Partnership",
            text: "Relationships built on active listening, loyalty, and long-term shared value creation.",
          },
          {
            icon: "compass",
            title: "Practical Innovation",
            text: "Adoption of modern, effective solutions tailored to field reality in Grand Katanga.",
          },
          {
            icon: "users",
            title: "Women Empowerment",
            text: "Active promotion of female leadership in executive roles and local talent development.",
          },
          {
            icon: "leaf",
            title: "Sustainability & CSR",
            text: "Responsible practices leaving a positive footprint for local communities.",
          },
        ],
        quote: {
          label: "Executive Commitment",
          copy: "We prove our worth through consistency of results and clarity of principles.",
          meta: "Women-led governance brings essential balance and thoroughness to a demanding sector.",
        },
        cta: {
          eyebrow: "Shared Vision",
          title: "Join a network of partners who share these values.",
          copy: "Reach out to our leadership to discuss future opportunities.",
          button: "Contact our team",
        },
      },
      contact: {
        metaTitle: "Horeb | Contact Us",
        metaDescription: "Contact Horeb in Lubumbashi, DRC. Phones and email.",
        hero: {
          eyebrow: "Get in Touch",
          title: "Let's connect on your project goals.",
          subtitle: "Seamless communication in French, English, Chinese, or Swahili.",
          chips: ["Français", "English", "中文", "Kiswahili"],
          imageBadge: "Lubumbashi Office",
          imageCaption: "Direct, constructive, and professional conversation.",
        },
        cards: [
          {
            icon: "pin",
            title: "Physical Address",
            text: "18 AV. Caféier, Bel-Air, Campemba, Lubumbashi, Haut-Katanga, DRC",
          },
          {
            icon: "phone",
            title: "DRC Direct Line",
            text: "+243 852 224 185",
            href: "tel:+243852224185",
          },
          {
            icon: "phone",
            title: "International Line",
            text: "+27 723 472 246",
            href: "tel:+27723472246",
          },
          {
            icon: "mail",
            title: "Email Address",
            text: "Joelle-HorebHE@outlook.com",
            href: "mailto:Joelle-HorebHE@outlook.com",
          },
        ],
        quote: {
          label: "Client Proximity",
          copy: "A swift and personalized response to every inquiry.",
          meta: "Our local operational footprint ensures rapid mobilization across Haut-Katanga and Lualaba provinces.",
        },
        cta: {
          eyebrow: "Write to us",
          title: "Send Us a Message",
          copy: "Complete the form below and our executive team will contact you shortly.",
          button: "Send Email",
        },
      },
    },
  },
  zh: {
    site: {
      brandTag: "The House of Excellence",
      cta: "联系我们",
      menu: "菜单",
      language: "语言",
      footerNote: "支持法语、英语、中文和斯瓦希里语。",
      footerTag: "来自刚果（金）卢本巴希的女性领导矿业服务公司。",
    },
    nav: {
      home: "首页",
      about: "关于",
      services: "服务",
      values: "价值观",
      contact: "联系",
    },
    pages: {
      home: {
        metaTitle: "Horeb | 卓越架构",
        metaDescription: "Horeb - 刚果（金）大加丹加地区领先的矿业服务与工业分包公司。",
        hero: {
          eyebrow: "刚果（金）矿业与工业领导力",
          title: "卓越的架构。",
          subtitle: "在大加丹加地区为矿业支持提供精炼、严谨的方案。",
          primary: "探索我们的服务",
          secondary: "了解我们的愿景",
          chips: ["女性领导", "卢本巴希", "大加丹加"],
          stats: [
            { value: "6+", label: "核心服务领域" },
            { value: "24/7", label: "现场响应" },
            { value: "RDC", label: "本土执行" },
            { value: "4", label: "精通语言" },
          ],
          note: "严谨执行。国际标准。机构信任。",
          imageBadge: "卢本巴希 • 上加丹加",
          imageCaption: "为高标准国际合作伙伴打造的高品质服务。",
        },
        pillars: {
          eyebrow: "网站结构",
          title: "四大核心支柱。",
          copy: "每个独立页面详细展示我们公司的核心维度，提供清晰精炼的浏览体验。",
          items: [
            {
              icon: "users",
              title: "历史与领导力",
              text: "扎根卢本巴希，由卓越的女性管理团队引领长期愿景。",
              hrefPage: "about",
              linkText: "了解更多",
            },
            {
              icon: "stack",
              title: "服务与专业知识",
              text: "采购、物流、硫磺与工业化学品、钻探、土方工程及交钥匙支持。",
              hrefPage: "services",
              linkText: "查看所有服务",
            },
            {
              icon: "shield",
              title: "价值观与承诺",
              text: "卓越、诚信、安全、可持续性与赋能是我们每次行动的核心。",
              hrefPage: "values",
              linkText: "探索价值观",
            },
            {
              icon: "phone",
              title: "联系与网络",
              text: "直接联系我们在卢本巴希的团队，并融入我们的国际网络。",
              hrefPage: "contact",
              linkText: "联系我们",
            },
          ],
        },
        story: {
          eyebrow: "我们的身份",
          title: "本地高标准与国际规范之间的坚实桥梁。",
          copy: [
            "Horeb 总位于上加丹加省卢本巴希，是一家专注于高精度矿业服务和分包的刚果公司。",
            "我们将对本地情况的深入了解与国际执行标准相结合，全心全意支持工业合作伙伴。",
          ],
          bullets: ["无摩擦流程", "透明化沟通", "严格遵守环境与人类标准"],
          imageBadge: "刚果（金）• 大加丹加",
          imageCaption: "致力于创造长期工业价值的专业团队。",
        },
        cta: {
          eyebrow: "与 Horeb 合作",
          title: "需要一个可靠且高效的工业合作伙伴？",
          copy: "我们的团队随时准备为您的矿业和物流运营提供支持。",
          button: "开始合作",
        },
      },
      about: {
        metaTitle: "Horeb | 关于我们",
        metaDescription: "了解 Horeb 的历史、卢本巴希的女性领导力。",
        hero: {
          eyebrow: "历史与领导力",
          title: "扎根卢本巴希，赢在大加丹加。",
          subtitle: "融合对刚果工业领域的深厚理解与现代女性管理风格。",
          chips: ["卢本巴希", "上加丹加", "女性领导力"],
          imageBadge: "管理层团队",
          imageCaption: "在每一步中保持精准、克制与专业。",
        },
        cards: [
          {
            icon: "pin",
            title: "公司总部",
            text: "刚果（金）上加丹加省卢本巴希，大加丹加矿业盆地的核心地带。",
          },
          {
            icon: "stack",
            title: "核心业务",
            text: "矿业支持服务、工业分包、物流与供应链管理。",
          },
          {
            icon: "globe",
            title: "合作伙伴",
            text: "国际矿业公司、大型承包商、战略投资者与工业供应商。",
          },
          {
            icon: "users",
            title: "管理愿景",
            text: "女性领导方式，强调积极倾听、透明度和细节关注。",
          },
        ],
        quote: {
          label: "我们的理念",
          copy: "真正的卓越体现在执行的一贯性与绝对可靠性上。",
          meta: "我们通过简化复杂的运营细节来建立深厚信任。",
        },
        cta: {
          eyebrow: "现场执行",
          title: "寻找高标准的本地合作伙伴？",
          copy: "探索我们的服务或直接联系我们的领导团队。",
          button: "探索我们的服务",
        },
      },
      services: {
        metaTitle: "Horeb | 服务与解决方案",
        metaDescription: "采购、物流、硫磺、化学品、钻探、土方工程及交钥匙支持。",
        hero: {
          eyebrow: "专业领域",
          title: "定制矿业与物流服务。",
          subtitle: "结构化、清晰且高效的服务组合。",
          chips: ["采购", "物流", "交钥匙支持"],
          imageBadge: "卓越运营",
          imageCaption: "以绝对精准度交付的定制解决方案。",
        },
        cards: [
          {
            icon: "stack",
            title: "采购与供应链",
            text: "工业消耗品、备品备件和关键物资的战略采购与安全交付。",
            detail: "完整的采购周期管理、供应商资质审核、质量检验、海关清关与矿山现场交付。",
          },
          {
            icon: "leaf",
            title: "硫磺与工业化学品",
            text: "供应工业硫磺、硫酸以及用于矿物加工的化学试剂。",
            detail: "严格遵守用于铜和钴提炼的化学试剂运输和储存安全标准。",
          },
          {
            icon: "truck",
            title: "重型运输与物流",
            text: "城市枢纽与矿山特许权之间的车队协调与货物安全运输。",
            detail: "专用车队管理、实时车载资讯系统、重型运输与跨境海关协调。",
          },
          {
            icon: "drill",
            title: "钻探与土方工程",
            text: "场地准备、土方搬运、访问道路建设与基础设施支持。",
            detail: "由认证技术人员操作的现代机械，用于道路修筑、沉淀池与采矿场地准备。",
          },
          {
            icon: "spark",
            title: "设备租赁",
            text: "提供最新一代的重型机械和工业工具。",
            detail: "灵活的短租或长租合同，包含预防性维护，24/7 现场技术支持。",
          },
          {
            icon: "compass",
            title: "交钥匙运营支持",
            text: "由单一责任联系人对复杂项目进行全过程端到端管理。",
            detail: "综合管理物流、专业劳动力、安全合规性以及定期进度报告。",
          },
        ],
        process: {
          eyebrow: "方法论",
          title: "清晰的三步执行框架。",
          items: [
            {
              title: "1. 诊断与对接",
              text: "深入分析需求、审查规格说明并评估现场风险。",
            },
            {
              title: "2. 精准部署",
              text: "立即动员物流和人力资源，严格跟踪里程碑。",
            },
            {
              title: "3. 交付与可追溯",
              text: "合规执行、完全可追溯并向客户提供透明报告。",
            },
          ],
        },
        cta: {
          eyebrow: "报价与咨询",
          title: "需要一份清晰透明的提案？",
          copy: "联系我们的商业团队，在 24 至 48 小时内获得定制报价。",
          button: "请求咨询",
        },
      },
      values: {
        metaTitle: "Horeb | 价值观与承诺",
        metaDescription: "卓越、诚信、安全、可持续性与赋能。",
        hero: {
          eyebrow: "企业宪章",
          title: "坚实的价值观创造持久影响。",
          subtitle: "建立在对道德和运营原则的无条件遵守之上。",
          chips: ["卓越", "诚信", "安全", "刚果（金）"],
          imageBadge: "企业文化",
          imageCaption: "为长期合作伙伴关系服务的职业道德。",
        },
        cards: [
          {
            icon: "spark",
            title: "卓越",
            text: "在产品采购和现场执行中不懈追求高品质。",
          },
          {
            icon: "shield",
            title: "诚信与透明",
            text: "严格履行承诺、遵守法律法规并提供清晰的财务报告。",
          },
          {
            icon: "shield",
            title: "安全 (HSE)",
            text: "在每个现场优先保护员工健康并保护自然环境。",
          },
          {
            icon: "users",
            title: "双赢合作伙伴关系",
            text: "建立在积极倾听、忠诚和长期共同价值创造基础上的关系。",
          },
          {
            icon: "compass",
            title: "实用创新",
            text: "采用适应大加丹加地区现场实际情况的现代高效解决方案。",
          },
          {
            icon: "users",
            title: "女性赋能",
            text: "在管理岗位上积极提拔女性领导者并培养本地人才。",
          },
          {
            icon: "leaf",
            title: "可持续性与 CSR",
            text: "负责任的实践，为当地社区留下积极的印记。",
          },
        ],
        quote: {
          label: "管理层承诺",
          copy: "我们通过结果的一贯性和原则的清晰度证明我们的价值。",
          meta: "女性领导的高管治理为要求严格的行业带来了至关重要的平衡与细致。",
        },
        cta: {
          eyebrow: "共同愿景",
          title: "加入认可这些价值观的合作伙伴网络。",
          copy: "联系我们的领导层讨论未来的合作机会。",
          button: "联系我们的团队",
        },
      },
      contact: {
        metaTitle: "Horeb | 联系我们",
        metaDescription: "联系刚果（金）卢本巴希的 Horeb。电话与邮箱。",
        hero: {
          eyebrow: "联系方式",
          title: "讨论您的项目需求。",
          subtitle: "使用您偏好的语言无缝沟通。",
          chips: ["Français", "English", "中文", "Kiswahili"],
          imageBadge: "卢本巴希办公室",
          imageCaption: "直接、富有建设性且专业的交流。",
        },
        cards: [
          {
            icon: "pin",
            title: "实体地址",
            text: "18 AV. Caféier, Bel-Air, Campemba, Lubumbashi, Haut-Katanga, DRC",
          },
          {
            icon: "phone",
            title: "刚果（金）直拨电话",
            text: "+243 852 224 185",
            href: "tel:+243852224185",
          },
          {
            icon: "phone",
            title: "国际专线",
            text: "+27 723 472 246",
            href: "tel:+27723472246",
          },
          {
            icon: "mail",
            title: "电子邮箱",
            text: "Joelle-HorebHE@outlook.com",
            href: "mailto:Joelle-HorebHE@outlook.com",
          },
        ],
        quote: {
          label: "贴近客户",
          copy: "对每次咨询作出迅速且个性化的回应。",
          meta: "我们在本地的业务足迹确保了在上加丹加省和卢阿拉巴省的快速动员。",
        },
        cta: {
          eyebrow: "给我们写信",
          title: "发送您的信息",
          copy: "填写下方表单，我们的管理团队将很快与您取得联系。",
          button: "发送邮件",
        },
      },
    },
  },
  sw: {
    site: {
      brandTag: "The House of Excellence",
      cta: "Wasiliana nasi",
      menu: "Menyu",
      language: "Lugha",
      footerNote: "Inapatikana kwa Kifaransa, Kiingereza, Kichina na Kiswahili.",
      footerTag: "Kampuni ya huduma za uchimbaji inayoongozwa na wanawake • Lubumbashi, DRC.",
    },
    nav: {
      home: "Nyumbani",
      about: "Kuhusu",
      services: "Huduma",
      values: "Thamani",
      contact: "Mawasiliano",
    },
    pages: {
      home: {
        metaTitle: "Horeb | Muundo wa Ubora",
        metaDescription: "Horeb - Huduma za uchimbaji madini na kandarasi za viwandani nchini DRC.",
        hero: {
          eyebrow: "Uongozi wa Uchimbaji na Viwanda nchini DRC",
          title: "Muundo wa Ubora.",
          subtitle: "Njia iliyotulia na yenye nidhamu ya kusaidia uchimbaji madini huko Grand Katanga.",
          primary: "Tazama Huduma Zetu",
          secondary: "Gundua Maono Yetu",
          chips: ["Uongozi wa Wanawake", "Lubumbashi", "Grand Katanga"],
          stats: [
            { value: "6+", label: "Huduma Kuu" },
            { value: "24/7", label: "Uwepo Uwanjani" },
            { value: "DRC", label: "Utekelezaji wa Ndani" },
            { value: "4", label: "Lugha Zinazozungumzwa" },
          ],
          note: "Utekelezaji makini. Viwango vya kimataifa. Uaminifu wa taasisi.",
          imageBadge: "Lubumbashi • Haut-Katanga",
          imageCaption: "Viwango vya juu kwa washirika wa kimataifa.",
        },
        pillars: {
          eyebrow: "Muundo wa Tovuti",
          title: "Nguzo Nne Muhimu.",
          copy: "Kila sehemu maalum inaelezea kipengele kikuu cha kampuni yetu kwa uzoefu wa kuvinjari ulio wazi na uliotulia.",
          items: [
            {
              icon: "users",
              title: "Historia na Uongozi",
              text: "Imewekwa Lubumbashi, maono ya muda mrefu yakiongozwa na timu ya wanawake watendaji bora.",
              hrefPage: "about",
              linkText: "Soma zaidi",
            },
            {
              icon: "stack",
              title: "Huduma na Utaalamu",
              text: "Ununuzi, usafirishaji, sulfuri na kemikali za viwandani, uchimbaji na msaada wa turnkey.",
              hrefPage: "services",
              linkText: "Tazama huduma zote",
            },
            {
              icon: "shield",
              title: "Thamani na Ahadi",
              text: "Ubora, uadilifu, usalama, uendelevu na uwezeshaji moyoni mwa kila kazi.",
              hrefPage: "values",
              linkText: "Gundua thamani",
            },
            {
              icon: "phone",
              title: "Mawasiliano na Mtandao",
              text: "Wasiliana moja kwa moja na timu yetu huko Lubumbashi na unganishwa na mtandao wetu wa kimataifa.",
              hrefPage: "contact",
              linkText: "Wasiliana nasi",
            },
          ],
        },
        story: {
          eyebrow: "Utambulisho Wetu",
          title: "Daraja imara kati ya utekelezaji wa ndani na viwango vya kimataifa.",
          copy: [
            "Makao makuu yakiwa Lubumbashi, Haut-Katanga, Horeb ni kampuni ya Kongo inayojumuisha huduma za uchimbaji na kandarasi za usahihi wa juu.",
            "Tunachanganya ujuzi wa ndani na viwango vya kimataifa ili kusaidia washirika wa viwandani kwa kujiamini kamili.",
          ],
          bullets: ["Michakato isiyo na msuguano", "Mawasiliano ya wazi", "Uzingatiaji mkali wa mazingira na binadamu"],
          imageBadge: "DRC • Grand Katanga",
          imageCaption: "Timu iliyojitolea kujenga thamani ya muda mrefu ya viwanda.",
        },
        cta: {
          eyebrow: "Fanya kazi na Horeb",
          title: "Unahitaji mshirika wa viwanda anayeaminika na mwenye majibu ya haraka?",
          copy: "Timu zetu ziko tayari kusaidia shughuli zako za uchimbaji na usafirishaji.",
          button: "Anza mazungumzo",
        },
      },
      about: {
        metaTitle: "Horeb | Kuhusu Sisi",
        metaDescription: "Jifunze kuhusu historia ya Horeb, uongozi wa wanawake huko Lubumbashi.",
        hero: {
          eyebrow: "Historia na Uongozi",
          title: "Imetoka Lubumbashi. Inaaminika Katanga.",
          subtitle: "Uzoefu wa sekta ya viwanda ya Kongo ukiongozwa na wanawake watendaji.",
          chips: ["Lubumbashi", "Haut-Katanga", "Uongozi wa Wanawake"],
          imageBadge: "Timu ya Watendaji",
          imageCaption: "Usahihi, utulivu na umakini katika kila hatua.",
        },
        cards: [
          {
            icon: "pin",
            title: "Makao Makuu",
            text: "Lubumbashi, Haut-Katanga, katikati ya bonde la uchimbaji madini la Grand Katanga nchini DRC.",
          },
          {
            icon: "stack",
            title: "Kazi Kuu",
            text: "Huduma za uchimbaji madini, kandarasi za viwandani, logistics na usimamizi wa ugavi.",
          },
          {
            icon: "globe",
            title: "Washirika",
            text: "Kampuni za kimataifa za uchimbaji, wakandarasi wakubwa, wawekezaji na wasambazaji wa viwanda.",
          },
          {
            icon: "users",
            title: "Maono ya Usimamizi",
            text: "Njia ya mtendaji wa wanawake inayotilia mkazo kusikiliza kwa makini, uwazi na usahihi.",
          },
        ],
        quote: {
          label: "Falsafa Yetu",
          copy: "Ubora wa kweli hupimwa kwa uthabiti na uaminifu kamili katika utekelezaji.",
          meta: "Tunajenga uaminifu kwa kurahisisha ugumu wa uendeshaji.",
        },
        cta: {
          eyebrow: "Utekelezaji wa uwanjani",
          title: "Unatafuta mshirika wa ndani mwenye viwango vya juu?",
          copy: "Tazama huduma zetu au wasiliana moja kwa moja na viongozi wetu.",
          button: "Tazama huduma zetu",
        },
      },
      services: {
        metaTitle: "Horeb | Huduma na Suluhisho",
        metaDescription: "Ununuzi, usafirishaji, sulfuri, kemikali, uchimbaji na msaada wa turnkey.",
        hero: {
          eyebrow: "Nguzo za Utaalamu",
          title: "Huduma za uchimbaji na usafirishaji zilizorekebishwa.",
          subtitle: "Huduma zilizopangwa, zilizo wazi na zenye ufanisi wa juu.",
          chips: ["Ununuzi", "Usafirishaji", "Msaada wa Turnkey"],
          imageBadge: "Ubora wa Uendeshaji",
          imageCaption: "Suluhisho za kibinafsi zinazotolewa kwa usahihi kabisa.",
        },
        cards: [
          {
            icon: "stack",
            title: "Ununuzi na Mnyororo wa Ugavi",
            text: "Upatikanaji wa kimkakati na uwasilishaji salama wa bidhaa za viwandani na vifaa muhimu.",
            detail: "Complete purchasing cycle management, vendor qualification, quality inspection, customs clearance, and mine site delivery.",
          },
          {
            icon: "leaf",
            title: "Sulfuri na Kemikali za Viwanda",
            text: "Usambazaji wa sulfuri ya viwandani, sulfuric acid na kemikali kwa usindikaji wa madini.",
            detail: "Strict adherence to safety standards for transport and storage of chemical reagents used in copper and cobalt extraction.",
          },
          {
            icon: "truck",
            title: "Usafirishaji Mzito na Logistics",
            text: "Uratibu wa meli na usafirishaji salama wa bidhaa kati ya miji na maeneo ya migodi.",
            detail: "Dedicated fleet management, real-time telematics, heavy haulage, and cross-border customs coordination.",
          },
          {
            icon: "drill",
            title: "Uchimbaji na Kazi za Ardhi",
            text: "Maandalizi ya eneo, usawazishaji wa ardhi, ujenzi wa barabara za kuingilia na msaada wa miundombinu.",
            detail: "Modern machinery operated by certified technicians for access road buildout, retention ponds, and mine site prep.",
          },
          {
            icon: "spark",
            title: "Kukodisha Vifaa",
            text: "Utoaji wa mashine nzito na zana za viwandani za kizazi kipya.",
            detail: "Flexible short or long-term contracts, preventive maintenance included, 24/7 technical field support.",
          },
          {
            icon: "compass",
            title: "Msaada wa Turnkey",
            text: "Usimamizi wa mwisho hadi mwisho wa miradi tata yenye mwasiliani mmoja anayewajibika.",
            detail: "Multidisciplinary management uniting logistics, skilled labor, safety compliance, and regular progress reports.",
          },
        ],
        process: {
          eyebrow: "Metodolojia",
          title: "Mfumo wa utekelezaji wa hatua tatu zilizo wazi.",
          items: [
            {
              title: "1. Tathmini na Mpangilio",
              text: "Uchambuzi wa kina wa mahitaji, ukaguzi wa vipimo na tathmini ya hatari za uwanjani.",
            },
            {
              title: "2. Utekelezaji wa Usahihi",
              text: "Ukusanyaji wa haraka wa rasilimali za usafirishaji na watu wenye ufuatiliaji mkali.",
            },
            {
              title: "3. Uwasilishaji na Ufuatiliaji",
              text: "Utekelezaji unaofuata sheria, ufuatiliaji kamili na ripoti za wazi kwa mteja.",
            },
          ],
        },
        cta: {
          eyebrow: "Nukuu na Maswali",
          title: "Unahitaji pendekezo lililo wazi na la uwazi?",
          copy: "Wasiliana na dawati letu la biashara kwa nukuu maalum ndani ya saa 24 hadi 48.",
          button: "Omba mashauriano",
        },
      },
      values: {
        metaTitle: "Horeb | Thamani na Ahadi",
        metaDescription: "Ubora, uadilifu, usalama, uendelevu na uwezeshaji.",
        hero: {
          eyebrow: "Hati ya Kampuni",
          title: "Thamani imara kwa athari ya muda mrefu.",
          subtitle: "Sifa ya Horeb imejengwa juu ya uzingatiaji wa kanuni za kimaadili.",
          chips: ["Ubora", "Uadilifu", "Usalama", "DRC"],
          imageBadge: "Utamaduni wa Kampuni",
          imageCaption: "Maadili yanayohudumia ushirikiano wa muda mrefu.",
        },
        cards: [
          {
            icon: "spark",
            title: "Ubora",
            text: "Utafutaji usio na mwisho wa ubora wa juu katika utafutaji wa bidhaa na utekelezaji wa uwanjani.",
          },
          {
            icon: "shield",
            title: "Uadilifu na Uwazi",
            text: "Uzingatiaji mkali wa ahadi, kufuata sheria na ripoti za wazi za kifedha.",
          },
          {
            icon: "shield",
            title: "Usalama (HSE)",
            text: "Ulinzi wa kipao mbele cha afya ya wafanyikazi na utunzwaji wa mazingira katika kila eneo.",
          },
          {
            icon: "users",
            title: "Ushirikiano wa Pande Zote",
            text: "Mahusiano yaliyojengwa juu ya kusikiliza kwa makini, uaminifu na utengenezaji wa thamani ya pamoja.",
          },
          {
            icon: "compass",
            title: "Ubunifu wa Vitendo",
            text: "Utekelezaji wa suluhisho za kisasa na bora zinazolingana na ukweli wa uwanjani Grand Katanga.",
          },
          {
            icon: "users",
            title: "Uwezeshaji wa Wanawake",
            text: "Uboreshaji wa uongozi wa wanawake katika nafasi za watendaji na ukuzaji vya ndani.",
          },
          {
            icon: "leaf",
            title: "Uendelevu na CSR",
            text: "Njia zenye uwajibikaji zinazoacha alama nzuri kwa jamii za ndani.",
          },
        ],
        quote: {
          label: "Ahadi ya Watendaji",
          copy: "Tunathibitisha thamani yetu kupitia uthabiti wa matokeo na uwazi wa kanuni.",
          meta: "Uongozi wa wanawake huleta usawa muhimu na umakini katika sekta yenye matakwa makubwa.",
        },
        cta: {
          eyebrow: "Maono ya Pamoja",
          title: "Jiunge na mtandao wa washirika wanaoshiriki thamani hizi.",
          copy: "Wasiliana na viongozi wetu ili kujadili fursa za baadaye.",
          button: "Wasiliana na timu yetu",
        },
      },
      contact: {
        metaTitle: "Horeb | Wasiliana Nasi",
        metaDescription: "Wasiliana na Horeb huko Lubumbashi, DRC. Simu na barua pepe.",
        hero: {
          eyebrow: "Wasiliana Nasi",
          title: "Tuongee kuhusu miradi yako.",
          subtitle: "Mawasiliano laini katika Kifaransa, Kiingereza, Kichina au Kiswahili.",
          chips: ["Français", "English", "中文", "Kiswahili"],
          imageBadge: "Ofisi ya Lubumbashi",
          imageCaption: "Mazungumzo ya moja kwa moja, yenye kujenga na ya kitaalamu.",
        },
        cards: [
          {
            icon: "pin",
            title: "Anwani ya Fizikia",
            text: "18 AV. Caféier, Bel-Air, Campemba, Lubumbashi, Haut-Katanga, DRC",
          },
          {
            icon: "phone",
            title: "Laini ya Moja kwa Moja DRC",
            text: "+243 852 224 185",
            href: "tel:+243852224185",
          },
          {
            icon: "phone",
            title: "Laini ya Kimataifa",
            text: "+27 723 472 246",
            href: "tel:+27723472246",
          },
          {
            icon: "mail",
            title: "Anwani ya Barua Pepe",
            text: "Joelle-HorebHE@outlook.com",
            href: "mailto:Joelle-HorebHE@outlook.com",
          },
        ],
        quote: {
          label: "Ukaribu na Mteja",
          copy: "Jibu la haraka na la kibinafsi kwa kila swali.",
          meta: "Uwepo wetu wa ndani unahakikisha uhamasishaji wa haraka kote Haut-Katanga na Lualaba.",
        },
        cta: {
          eyebrow: "Tuandikie",
          title: "Tuma Ujumbe Wako",
          copy: "Jaza fomu hapa chini na timu yetu ya watendaji itawasiliana nawe hivi karibuni.",
          button: "Tuma Barua Pepe",
        },
      },
    },
  },
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function icon(name) {
  return icons[name] || icons.spark;
}

function pageFile(page) {
  return pageFiles[page] || pageFiles.home;
}

function pageHref(page, lang) {
  return `${pageFile(page)}?lang=${encodeURIComponent(lang)}`;
}

function currentPage() {
  return document.body.dataset.page || "home";
}

function readLang() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  if (supportedLangs.includes(requested)) {
    return requested;
  }

  const browser = (navigator.language || "fr").toLowerCase();
  if (browser.startsWith("en")) return "en";
  if (browser.startsWith("zh")) return "zh";
  if (browser.startsWith("sw")) return "sw";
  return "fr";
}

function setMeta(name, contentValue) {
  let meta = document.head.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = contentValue;
}

function renderHeader(lang, page, data) {
  const navLinks = pageOrder
    .map((target) => {
      const active = target === page ? "is-active" : "";
      const current = target === page ? ' aria-current="page"' : "";
      return `<a class="nav__link ${active}" href="${pageHref(target, lang)}"${current}>${escapeHtml(
        data.nav[target]
      )}</a>`;
    })
    .join("");

  const langButtons = supportedLangs
    .map(
      (code) => `<button class="lang-switch__btn ${
        code === lang ? "is-active" : ""
      }" type="button" data-lang="${code}" aria-label="${escapeHtml(
        data.site.language
      )} ${langLabels[code]}">${langLabels[code]}</button>`
    )
    .join("");

  const mobileLinks = pageOrder
    .map((target) => {
      const current = target === page ? ' aria-current="page"' : "";
      return `<a class="nav__link ${target === page ? "is-active" : ""}" href="${pageHref(
        target,
        lang
      )}"${current}>${escapeHtml(data.nav[target])}</a>`;
    })
    .join("");

  const ctaHref = pageHref("contact", lang);
  const homeHref = pageHref("home", lang);

  return `
    <header class="site-header">
      <div class="shell header-shell">
        <a class="brand" href="${homeHref}" title="Horeb House of Excellence" aria-label="Horeb House of Excellence">
          <img class="brand__mark" src="img/logosansbackgroung.png" alt="Horeb House of Excellence" />
        </a>

        <nav class="desktop-nav" aria-label="Navigation Principale">
          ${navLinks}
        </nav>
        <div class="header__actions">
          <div class="lang-switch" role="group" aria-label="${escapeHtml(data.site.language)}">
            ${langButtons}
          </div>
          <a class="cta-link" href="${ctaHref}">${escapeHtml(data.site.cta)}</a>
          <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="menu-panel">
            ${escapeHtml(data.site.menu)}
          </button>
        </div>
      </div>
      <div class="menu-panel" id="menu-panel" data-menu-panel>
        <div class="menu-panel__links">
          ${mobileLinks}
        </div>
        <div class="menu-panel__footer">
          <div class="lang-switch" role="group" aria-label="${escapeHtml(data.site.language)}">
            ${langButtons}
          </div>
          <a class="cta-link" href="${ctaHref}">${escapeHtml(data.site.cta)}</a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter(lang, data) {
  const links = pageOrder
    .map(
      (target) =>
        `<a href="${pageHref(target, lang)}">${escapeHtml(data.nav[target])}</a>`
    )
    .join("");

  return `
    <footer class="footer">
      <div class="shell footer__card">
        <div class="footer__top">
          <div>
            <a class="brand" href="${pageHref("home", lang)}">
              <img class="brand__mark" src="img/logosansbackgroung.png" alt="Horeb" />
              <span class="brand__copy">
                <strong class="brand__name">Horeb</strong>
                <span class="brand__tag">${escapeHtml(data.site.brandTag)}</span>
              </span>
            </a>
            <p class="footer__copy">${escapeHtml(data.site.footerTag)}</p>
          </div>
          <nav class="footer__links" aria-label="Plan du site">
            ${links}
          </nav>
          <div class="footer__meta">
            <span><strong>Email:</strong> Joelle-HorebHE@outlook.com</span>
            <span><strong>Téléphone:</strong> +243 852 224 185 • +27 723 472 246</span>
            <span><strong>Siège:</strong> 18 AV. Caféier, Bel-Air, Campemba, Lubumbashi, RDC</span>
            <span>${escapeHtml(data.site.footerNote)}</span>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© 2026 Horeb The House of Excellence. Tous droits réservés.</span>
          <span>Français · English · 中文 · Swahili</span>
        </div>
      </div>
    </footer>
  `;
}

function sectionHead(eyebrow, title, copyText = "", center = false, delay = 0) {
  return `
    <div class="section__head ${center ? "section__head--center" : ""} reveal" style="--delay:${delay}ms">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h2 class="section-title">${escapeHtml(title)}</h2>
      ${copyText ? `<p class="section-copy">${escapeHtml(copyText)}</p>` : ""}
    </div>
  `;
}

function cardHtml(item, delay = 0, dark = false) {
  const base = `
    ${item.badge ? `<span class="card__badge">${escapeHtml(item.badge)}</span>` : ""}
    ${item.icon ? `<div class="card__icon">${icon(item.icon)}</div>` : ""}
    <h3 class="card__title">${escapeHtml(item.title)}</h3>
    <p class="card__copy">${escapeHtml(item.text)}</p>
    ${item.linkText ? `<span class="card__link-text">${escapeHtml(item.linkText)} →</span>` : ""}
  `;

  if (item.hrefPage && item.lang) {
    return `
      <a class="card ${dark ? "card--dark" : ""} reveal" href="${pageHref(item.hrefPage, item.lang)}" style="--delay:${delay}ms">
        ${base}
      </a>
    `;
  }

  if (item.href) {
    return `
      <a class="card ${dark ? "card--dark" : ""} reveal" href="${escapeHtml(item.href)}" style="--delay:${delay}ms">
        ${base}
      </a>
    `;
  }

  if (item.detail) {
    return `
      <article class="card ${dark ? "card--dark" : ""} card--expandable reveal" style="--delay:${delay}ms">
        ${base}
        <button type="button" class="btn-detail" data-open-detail="${escapeHtml(item.title)}" data-detail-text="${escapeHtml(item.detail)}">
          En savoir plus
        </button>
      </article>
    `;
  }

  return `
    <article class="card ${dark ? "card--dark" : ""} reveal" style="--delay:${delay}ms">
      ${base}
    </article>
  `;
}

function statHtml(item, delay = 0) {
  return `
    <article class="stat-card reveal" style="--delay:${delay}ms">
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
    </article>
  `;
}

function chipHtml(text, light = false) {
  return `<span class="chip ${light ? "chip--light" : ""}">${escapeHtml(text)}</span>`;
}

function bulletList(items) {
  return `
    <ul class="mini-list">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function imageCard({ src, alt, badge, caption, ratio = "portrait", contain = false }) {
  return `
    <div class="media-card media-card--${ratio} reveal">
      <img class="media-card__image ${contain ? "media-card__image--contain" : ""}" src="${src}" alt="${escapeHtml(alt)}" loading="lazy" />
      <div class="media-card__overlay">
        <div>
          <div class="media-card__badge">${escapeHtml(badge)}</div>
          ${caption ? `<p class="media-card__caption">${escapeHtml(caption)}</p>` : ""}
        </div>
      </div>
    </div>
  `;
}

function quoteCard({ label, copyText, meta }) {
  return `
    <aside class="quote-card reveal">
      <span class="quote-card__label">${escapeHtml(label)}</span>
      <blockquote class="quote-card__copy">${escapeHtml(copyText)}</blockquote>
      <p class="quote-card__meta">${escapeHtml(meta)}</p>
    </aside>
  `;
}

function ctaBand({ eyebrow, title, copyText, button }, lang) {
  return `
    <section class="section section--tight">
      <div class="shell">
        <div class="cta-band reveal">
          <div class="cta-band__copy">
            <p class="eyebrow">${escapeHtml(eyebrow)}</p>
            <h2 class="section-title">${escapeHtml(title)}</h2>
            <p class="section-copy">${escapeHtml(copyText)}</p>
            <a class="btn btn--solid" href="${pageHref("contact", lang)}">
              ${escapeHtml(button)}
              ${icons.arrow}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Universal Unified Hero Component with Video Background
 * Shared across ALL 5 pages for total design cohesion & senior frontend consistency.
 */
function renderHero({ eyebrow, title, subtitle, ctaText, ctaHref, poster = "img/mining-site.png" }) {
  return `
    <section class="hero hero--unified">
      <div class="hero__media" aria-hidden="true">
        <video class="hero-video" autoplay muted loop playsinline preload="metadata" poster="${poster}">
          <source src="video/Videobackgroup.mp4" type="video/mp4" />
        </video>
        <div class="hero__overlay"></div>
        <span class="hero__orb hero__orb--a"></span>
        <span class="hero__orb hero__orb--b"></span>
        <span class="hero__orb hero__orb--c"></span>
      </div>
      <div class="hero-stage">
        <div class="shell hero__content">
          <div class="hero__copy page-hero__copy--center reveal" style="--delay:60ms">
            <p class="eyebrow">${escapeHtml(eyebrow)}</p>
            <h1 class="hero__title">${escapeHtml(title)}</h1>
            <p class="hero__subtitle">${escapeHtml(subtitle)}</p>
            <div class="hero__actions hero__actions--center">
              <a class="btn btn--solid" href="${ctaHref}">
                ${escapeHtml(ctaText)} ${icons.arrow}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderHome(lang, data) {
  const pillarCards = data.pillars.items
    .map((item, index) => cardHtml({ ...item, lang }, index * 80))
    .join("");

  const statCards = data.hero.stats
    .map((stat, index) => statHtml(stat, index * 70))
    .join("");

  const heroHtml = renderHero({
    eyebrow: data.hero.eyebrow,
    title: data.hero.title,
    subtitle: data.hero.subtitle,
    ctaText: data.hero.primary,
    ctaHref: pageHref("services", lang),
    poster: "img/mining-site.png",
  });

  return `
    ${heroHtml}

    <div class="page-body home-body">
      <!-- Section Chiffres Clés & Repères -->
      <section class="section section--tight">
        <div class="shell">
          <div class="grid grid--4 stats-grid">${statCards}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          ${sectionHead(
            data.pillars.eyebrow,
            data.pillars.title,
            data.pillars.copy,
            true,
            40
          )}
          <div class="grid grid--2">${pillarCards}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="split split--2">
            <div class="stack">
              ${quoteCard({
                label: data.story.eyebrow,
                copyText: data.story.title,
                meta: data.story.copy.join(" "),
              })}
              <div class="card reveal" style="--delay:80ms">
                <div class="card__icon">${icons.compass}</div>
                <h3 class="card__title">${escapeHtml(data.story.imageBadge)}</h3>
                <p class="card__copy">${escapeHtml(data.story.imageCaption)}</p>
              </div>
            </div>
            <div class="stack">
              ${imageCard({
                src: "img/women-executives.png",
                alt: "Direction Horeb House of Excellence",
                badge: data.story.imageBadge,
                caption: "Une équipe dirigeante féminine engagée pour le développement industriel.",
                ratio: "portrait",
              })}
              ${imageCard({
                src: "img/mining-site.png",
                alt: "Concession minière Katanga Horeb",
                badge: "Ancrage Katanga",
                caption: "Une présence forte au cœur des opérations du Haut-Katanga.",
                ratio: "landscape",
              })}
            </div>
          </div>
        </div>
      </section>

      ${ctaBand(data.cta, lang)}
    </div>
  `;
}

function renderAbout(lang, data) {
  const cards = data.cards.map((item, index) => cardHtml(item, index * 70)).join("");

  const heroHtml = renderHero({
    eyebrow: data.hero.eyebrow,
    title: data.hero.title,
    subtitle: data.hero.subtitle,
    ctaText: data.cta.button,
    ctaHref: pageHref("services", lang),
    poster: "img/women-executives.png",
  });

  return `
    ${heroHtml}

    <div class="page-body">
      <section class="section section--tight">
        <div class="shell">
          <div class="grid grid--2">${cards}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="split split--2">
            ${quoteCard({
              label: data.quote.label,
              copyText: data.quote.copy,
              meta: data.quote.meta,
            })}
            <div class="stack">
              ${imageCard({
                src: "img/women-executives.png",
                alt: "Équipe dirigeante Horeb",
                badge: data.hero.imageBadge,
                caption: data.hero.imageCaption,
                ratio: "portrait",
              })}
              ${imageCard({
                src: "img/mining-site.png",
                alt: "Concessions minières RDC",
                badge: "Ancrage Territorial",
                caption: "Une maîtrise parfaite des enjeux locaux et des normes internationales.",
                ratio: "landscape",
              })}
            </div>
          </div>
        </div>
      </section>

      ${ctaBand(data.cta, lang)}
    </div>
  `;
}

function renderServices(lang, data) {
  const cards = data.cards.map((item, index) => cardHtml(item, index * 60)).join("");
  const steps = data.process.items
    .map((step, index) => ({
      icon: ["spark", "compass", "shield"][index] || "spark",
      title: step.title,
      text: step.text,
    }))
    .map((item, index) => cardHtml(item, index * 80))
    .join("");

  const heroHtml = renderHero({
    eyebrow: data.hero.eyebrow,
    title: data.hero.title,
    subtitle: data.hero.subtitle,
    ctaText: data.cta.button,
    ctaHref: pageHref("contact", lang),
    poster: "img/logistics-fleet.png",
  });

  return `
    ${heroHtml}

    <div class="page-body">
      <section class="section section--tight">
        <div class="shell">
          <div class="grid grid--3">${cards}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="grid grid--2 section-showcase-grid">
            ${imageCard({
              src: "img/logistics-fleet.png",
              alt: "Flotte Logistique Horeb",
              badge: data.hero.imageBadge,
              caption: data.hero.imageCaption,
              ratio: "landscape",
            })}
            ${imageCard({
              src: "img/chemical-lab.png",
              alt: "Laboratoire contrôle qualité soufre et minéraux",
              badge: "Soufre & Produits Chimiques",
              caption: "Contrôle qualité strict et sécurité absolue pour la fourniture de réactifs industriels.",
              ratio: "landscape",
            })}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          ${sectionHead(
            data.process.eyebrow,
            data.process.title,
            "",
            false,
            40
          )}
          <div class="grid grid--3 process-grid">${steps}</div>
        </div>
      </section>

      ${ctaBand(data.cta, lang)}
    </div>

    <!-- Modal pour détails des services -->
    <div class="modal" id="serviceModal" aria-hidden="true" role="dialog">
      <div class="modal__overlay" data-close-modal></div>
      <div class="modal__content glass-panel">
        <button class="modal__close" data-close-modal aria-label="Fermer">${icons.close}</button>
        <h3 class="modal__title" id="modalTitle"></h3>
        <div class="modal__body" id="modalBody"></div>
      </div>
    </div>
  `;
}

function renderValues(lang, data) {
  const cards = data.cards.map((item, index) => cardHtml(item, index * 60)).join("");

  const heroHtml = renderHero({
    eyebrow: data.hero.eyebrow,
    title: data.hero.title,
    subtitle: data.hero.subtitle,
    ctaText: data.cta.button,
    ctaHref: pageHref("contact", lang),
    poster: "img/chemical-lab.png",
  });

  return `
    ${heroHtml}

    <div class="page-body">
      <section class="section section--tight">
        <div class="shell">
          <div class="grid grid--3 value-grid">${cards}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="split split--2">
            ${quoteCard({
              label: data.quote.label,
              copyText: data.quote.copy,
              meta: data.quote.meta,
            })}
            <div class="stack">
              ${imageCard({
                src: "img/logosansbackgroung.png",
                alt: "Logo Horeb House of Excellence",
                badge: data.hero.imageBadge,
                caption: data.hero.imageCaption,
                ratio: "square",
                contain: true,
              })}
              ${imageCard({
                src: "img/women-executives.png",
                alt: "Direction Horeb",
                badge: "Leadership Éthique",
                caption: "Autonomisation, rigueur et création de valeur partagée.",
                ratio: "landscape",
              })}
            </div>
          </div>
        </div>
      </section>

      ${ctaBand(data.cta, lang)}
    </div>
  `;
}

function renderContact(lang, data) {
  const cards = data.cards.map((item, index) => cardHtml(item, index * 60, false)).join("");

  const heroHtml = renderHero({
    eyebrow: data.hero.eyebrow,
    title: data.hero.title,
    subtitle: data.hero.subtitle,
    ctaText: data.cta.button,
    ctaHref: "#contactForm",
    poster: "img/women-executives.png",
  });

  return `
    ${heroHtml}

    <div class="page-body">
      <section class="section section--tight">
        <div class="shell">
          <div class="grid grid--2 contact-grid">${cards}</div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          <div class="split split--2">
            ${quoteCard({
              label: data.quote.label,
              copyText: data.quote.copy,
              meta: data.quote.meta,
            })}
            
            <div class="stack">
              <div class="card card--form reveal" style="--delay:100ms">
                <h3 class="card__title">${escapeHtml(data.cta.title)}</h3>
                <p class="card__copy">${escapeHtml(data.cta.copy)}</p>
                <form id="contactForm" class="contact-form">
                  <div class="form-group">
                    <label for="nameInput">Nom complet / Entreprise</label>
                    <input id="nameInput" type="text" required placeholder="Ex: Jean Dupont (Mining Co)" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label for="emailInput">Adresse Email</label>
                    <input id="emailInput" type="email" required placeholder="contact@entreprise.com" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label for="messageInput">Votre Message / Demande de devis</label>
                    <textarea id="messageInput" rows="4" required placeholder="Précisez votre demande (Approvisionnement, Logistique, Soufre...)" class="form-input"></textarea>
                  </div>
                  <button type="submit" class="btn btn--solid btn--full">
                    ${escapeHtml(data.cta.button)}
                    ${icons.arrow}
                  </button>
                  <div id="formSuccess" class="form-success" hidden>
                    Merci pour votre message. Notre direction vous répondra dans les plus brefs délais.
                  </div>
                </form>
              </div>

              ${imageCard({
                src: "img/women-executives.png",
                alt: "Contact Horeb Lubumbashi",
                badge: data.hero.imageBadge,
                caption: data.hero.imageCaption,
                ratio: "landscape",
              })}
            </div>
          </div>
        </div>
      </section>

      ${ctaBand(data.cta, lang)}
    </div>
  `;
}

function renderApp() {
  const lang = readLang();
  const page = currentPage();
  const langData = copy[lang] || copy.fr;
  const pageData = langData.pages[page] || langData.pages.home;

  document.documentElement.lang = lang;
  document.body.classList.add(`page-${page}`);
  document.title = pageData.metaTitle;
  setMeta("description", pageData.metaDescription);

  const header = document.getElementById("siteHeader");
  const app = document.getElementById("app");
  const footer = document.getElementById("siteFooter");

  if (header) header.innerHTML = renderHeader(lang, page, langData);
  if (footer) footer.innerHTML = renderFooter(lang, langData);

  if (app) {
    switch (page) {
      case "about":
        app.innerHTML = renderAbout(lang, pageData);
        break;
      case "services":
        app.innerHTML = renderServices(lang, pageData);
        break;
      case "values":
        app.innerHTML = renderValues(lang, pageData);
        break;
      case "contact":
        app.innerHTML = renderContact(lang, pageData);
        break;
      case "home":
      default:
        app.innerHTML = renderHome(lang, pageData);
        break;
    }
  }

  requestAnimationFrame(() => {
    document.body.classList.add("ready");
    setupReveals();
    setupMenu();
    setupLanguageSwitch();
    setupVideoBackgrounds();
    setupNumberCounters();
    setupModals();
    setupContactForm();
  });
}


function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      if (!supportedLangs.includes(lang)) return;
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
      renderApp();
    });
  });
}

function setupMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-menu-panel]");
  if (!toggle || !panel) return;

  const close = () => {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });
}

function setupReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  items.forEach((item) => observer.observe(item));
}

function setupNumberCounters() {
  const statElements = document.querySelectorAll(".stat-card strong, [data-counter]");
  if (!statElements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const originalText = el.getAttribute("data-value") || el.textContent.trim();

          if (!el.getAttribute("data-value")) {
            el.setAttribute("data-value", originalText);
          }

          const match = originalText.match(/^(\D*)(\d+)(.*)$/);
          if (match) {
            const prefix = match[1];
            const targetNum = parseInt(match[2], 10);
            const suffix = match[3];
            const duration = 1800; // ms
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Cubic ease-out curve
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentNum = Math.floor(easeOut * targetNum);

              el.textContent = `${prefix}${currentNum}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = originalText;
              }
            };

            requestAnimationFrame(updateCounter);
          }

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.25 }
  );

  statElements.forEach((el) => observer.observe(el));
}


function setupVideoBackgrounds() {
  const videos = document.querySelectorAll(".hero-video, #heroVideo");
  if (!videos.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  videos.forEach((video) => {
    if (reduced) {
      video.pause();
      return;
    }

    const playVideo = () => {
      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    };

    if (document.visibilityState === "visible") {
      playVideo();
    }

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        video.pause();
      } else {
        playVideo();
      }
    });
  });
}

function setupModals() {
  const modal = document.getElementById("serviceModal");
  if (!modal) return;

  const titleEl = document.getElementById("modalTitle");
  const bodyEl = document.getElementById("modalBody");

  const openModal = (title, detailText) => {
    titleEl.textContent = title;
    bodyEl.textContent = detailText;
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-open-detail]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-open-detail");
      const detail = btn.getAttribute("data-detail-text");
      openModal(title, detail);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");
  if (!form || !successMsg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    if (btn) btn.disabled = true;
    successMsg.hidden = false;
    form.reset();
    setTimeout(() => {
      if (btn) btn.disabled = false;
    }, 4000);
  });
}

document.addEventListener("DOMContentLoaded", renderApp);
