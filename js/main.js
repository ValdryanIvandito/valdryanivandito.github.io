// ============================================================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ============================================================================
// This file contains all the interactive functionality and dynamic content
// generation for the portfolio website.
// ============================================================================

// ============================================================================
// 1. DATA SECTION - Edit these objects to update your portfolio content
// ============================================================================

// Portfolio Projects Data
// Add/edit/remove projects here - each project will automatically generate a card
const portfolioData = {
  project1: {
    title: "NFC Attendance System",
    description:
      "NFC-based attendance system integrating Electron desktop applications with a React and Node.js. Designed for real-time attendance tracking and direct hardware communication.",
    videoId: "AFDV0ptgiMs",
    youtubeUrl: "https://youtu.be/AFDV0ptgiMs",
    documentationUrl:
      "https://github.com/ValdryanIvandito/nfc-attendance-system",
    technologies: [
      { name: "Electron.js", color: "primary" },
      { name: "React.js", color: "primary" },
      { name: "TailwindCSS", color: "primary" },
      { name: "Shadcn", color: "primary" },
      { name: "Node.js", color: "primary" },
      { name: "Express.js", color: "primary" },
      { name: "PrismaORM", color: "primary" },
      { name: "PostgreSQL", color: "primary" },
      { name: "MIFARE Classic", color: "primary" },
      { name: "ACR122U", color: "primary" },
    ],
  },

  project2: {
    title: "Photo Studio Booking and Management System",
    description:
      "A web-based booking and management system for photo studios featuring online reservations, secure payment gateway integration, and an administrative dashboard for business operations.",
    videoId: "TXnIQRIDI98",
    youtubeUrl: "https://youtu.be/TXnIQRIDI98",
    documentationUrl:
      "https://drive.google.com/file/d/1mnuKzhMEY6VvDFmJlVdzwHtOIA9NCBDT/view?usp=sharing",
    technologies: [
      { name: "Next.js", color: "secondary" },
      { name: "TailwindCSS", color: "secondary" },
      { name: "PrismaORM", color: "secondary" },
      { name: "PostgreSQL", color: "secondary" },
      { name: "Midtrans", color: "secondary" },
    ],
  },

  project3: {
    title: "Photobooth User Interface and Payment System",
    description:
      "A desktop-based photobooth application focused on user interaction and automated payment processing to deliver a smooth and efficient customer experience.",
    videoId: "Hk-sUS1H9Jw",
    youtubeUrl: "https://youtu.be/Hk-sUS1H9Jw",
    documentationUrl:
      "https://drive.google.com/file/d/1uFNBNG3iu58LrrFZ2b5_xWnhFfQv9--S/view?usp=sharing",
    technologies: [
      { name: "Electron.js", color: "accent" },
      { name: "Node.js", color: "accent" },
      { name: "Express.js", color: "accent" },
      { name: "PostgreSQL", color: "accent" },
      { name: "Xendit", color: "accent" },
    ],
  },

  // project4: {
  //   title: "Shoe Laundry Management System",
  //   description:
  //     "A business management platform for shoe laundry services enabling order tracking, workflow monitoring, and operational process management.",
  //   videoId: "uD5TgmOTBP4",
  //   youtubeUrl: "https://youtu.be/uD5TgmOTBP4",
  //   documentationUrl:
  //     "https://drive.google.com/file/d/1ru9wg9ITh23Tu9ema5yYe5WbjTe-3yZr/view?usp=sharing",
  //   technologies: [
  //     { name: "Next.js", color: "green-500" },
  //     { name: "TailwindCSS", color: "green-500" },
  //     { name: "PrismaORM", color: "green-500" },
  //     { name: "PostgreSQL", color: "green-500" },
  //   ],
  // },

  project4: {
    title: "Open Heaven Foundation Website",
    description:
      "A responsive multilingual foundation website built with modern frontend technologies and internationalization support to enhance accessibility and user experience.",
    videoId: "UshzC-slIVs",
    youtubeUrl: "https://youtu.be/UshzC-slIVs",
    documentationUrl:
      "https://drive.google.com/file/d/1Ac2VddydoUOdHyRgMJ9gGSjtkrEiVI6z/view?usp=sharing",
    technologies: [
      { name: "Next.js", color: "purple-500" },
      { name: "TailwindCSS", color: "purple-500" },
      { name: "i18Next", color: "purple-500" },
    ],
  },
};

// Contribution & Dedication Data
// Add/edit/remove workshops and contributions here
const contributionData = {
  contribution1: {
    title: "Levvy: How to Become Profitable Lender",
    description:
      "Online Workshop about Cardano DeFi Levvy lending strategies, risk management, and maximizing returns in the Cardano lending ecosystem.",
    videoId: "yRT-gyJnk-Y",
    youtubeUrl:
      "https://youtu.be/yRT-gyJnk-Y?list=PLUj8499OocHgfSDHvtuMZ56zBdK8tw3OG",
    thumbnailType: "youtube", // "youtube" or "custom"
    documentationUrl:
      "https://forum.cardano.org/t/levvy-masterclass-how-to-become-profitable-lender/144499", // Add your documentation URL here
  },
  contribution2: {
    title: "DeFi Odyssey at Maranatha Christian University",
    description:
      "Comprehensive seminar exploring the Cardano DeFi ecosystem on Cardano blockchain, covering protocols, strategies, and practical implementations.",
    videoId: "0i84ZwIpvxc",
    youtubeUrl: "https://youtu.be/0i84ZwIpvxc",
    thumbnailType: "youtube",
    documentationUrl:
      "https://forum.cardano.org/t/cardano-defi-workshop-defi-odyssey-2025/144483", // Add your documentation URL here
  },
  contribution3: {
    title:
      "Cardano Developer Workshop & Mini Hackathon - Maranatha Christian University",
    description:
      "Comprehensive workshop series teaching students at Maranatha Christian University the basics of dApps development using Cardano techstack such as Mesh.js Web3 Library, Blockfrost API, and Aiken smart contract.",
    thumbnailUrl: "public/maranatha.png",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLUj8499OocHiU1ynKh0eWNybchcUG3rY9&si=IcYzmIpTrNDJicxQ",
    thumbnailType: "custom",
    documentationUrl:
      "https://forum.cardano.org/t/cardano-developer-minihackathon-at-maranatha-christian-university-october-2-2024-january-17-2025/142683", // Add your documentation URL here
  },
  contribution4: {
    title: "Cardano Developer Workshop - Indonesia Community",
    description:
      "Online workshop series for the Indonesian Cardano developer community, covering the basics of dApps development using Cardano techstack such as Mesh.js Web3 Library, Blockfrost API, and Aiken smart contract.",
    thumbnailUrl: "public/cardanodev.jpg",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLUj8499OocHiL8gXPv8wMlLW-zIcyYdrQ&si=G6e3Xqgg9Ah6XFyQ",
    thumbnailType: "custom",
    documentationUrl:
      "https://forum.cardano.org/t/cardano-blockchain-jakarta-meetup-1-cardano-developers-community-indonesia-november-2023/123530", // Add your documentation URL here
  },
};

// Certificates Data
// Add/edit/remove certificates here
const certificatesData = {
  certificate1: {
    title: "Full-Stack Web Developer",
    issuer: "Binar Academy",
    imageUrl: "public/certificate-binar-fullstackdev.png",
    credentialUrl:
      "https://drive.google.com/file/d/1aFy7gpU0_kuujYrd3jllE1JEuGTu4neM/view",
  },
  certificate2: {
    title: "Cardano Blockchain Associate",
    issuer: "Cardano Foundation",
    imageUrl: "public/certificate-cardano-academy.png",
    credentialUrl:
      "https://drive.google.com/file/d/1Z853mM_lVcuyHP4S9lEB43vKpEFTlCOv/view",
  },
  certificate3: {
    title: "Cardano Developer Associate",
    issuer: "Emurgo Academy",
    imageUrl: "public/certificate-emurgo-academy-ccda.png",
    credentialUrl:
      "https://www.credly.com/badges/f8353c5f-0408-4419-8973-3d8888bbc3c2/public_url",
  },
  certificate4: {
    title: "Cardano Developer Professional",
    issuer: "Emurgo Academy",
    imageUrl: "public/certificate-emurgo-academy-ccdp.png",
    credentialUrl:
      "https://www.credly.com/badges/5fd23cfa-78bc-4f83-91d3-73c99237e14c/public_url",
  },
};

// Partners Data
// Add/edit/remove partners here
const partnersData = {
  // partner1: {
  //   name: "Maranatha Christian University",
  //   logoUrl: "public/maranatha.png",
  //   websiteUrl: "https://www.maranatha.edu/en/",
  // },
  partner1: {
    name: "Open Heaven Foundation",
    logoUrl: "public/openheaven.png",
    websiteUrl: "https://foundationopenheaven.org/",
  },
  partner2: {
    name: "The Portrait Place",
    logoUrl: "public/portraitplace.png",
    websiteUrl: "https://www.instagram.com/theportraitplace.id/",
  },
  // partner4: {
  //   name: "Greenfee",
  //   logoUrl: "public/greenfee.png",
  //   websiteUrl: "https://www.instagram.com/greenfee_shoes_clean/",
  // },
  partner3: {
    name: "Cardano Indonesia",
    logoUrl: "public/cardanoid.png",
    websiteUrl: "https://t.me/CardanoIndonesiaOfficial",
  },
  partner4: {
    name: "Cardano Developer Indonesia",
    logoUrl: "public/cardanodev.jpg",
    websiteUrl: "https://t.me/CardanoDevID",
  },
};

// Social Media Data
// Add/edit/remove social media links here
// These will appear in both Hero section and Footer
const socialMediaData = {
  github: {
    name: "GitHub",
    url: "https://github.com/valdryanivandito",
    icon: "fab fa-github",
    hoverColor: "primary", // Tailwind color
    hoverColorHex: "#3B82F6", // For footer
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/valdryan-ivandito-110b9b392/",
    icon: "fab fa-linkedin",
    hoverColor: "blue-600",
    hoverColorHex: "#2563EB",
  },
  discord: {
    name: "Discord",
    url: "https://discord.com/users/Valdryan08#9209",
    icon: "fab fa-discord",
    hoverColor: "indigo-500",
    hoverColorHex: "#6366F1",
  },
  telegram: {
    name: "Telegram",
    url: "https://t.me/valdryan",
    icon: "fab fa-telegram",
    hoverColor: "blue-400",
    hoverColorHex: "#60A5FA",
  },
  // x: {
  //   name: "X (Twitter)",
  //   url: "https://x.com/miraclemonad",
  //   icon: "fab fa-x-twitter",
  //   hoverColor: "gray-200",
  //   hoverColorHex: "#E5E7EB",
  // },
};

// ============================================================================
// 2. CARD GENERATION FUNCTIONS - Dynamically create HTML cards from data
// ============================================================================

/**
 * Generate Portfolio Project Cards
 * Creates cards for each project in portfolioData
 */
function generatePortfolioCards() {
  const portfolioGrid = document.getElementById("portfolio-grid");
  portfolioGrid.innerHTML = "";

  Object.keys(portfolioData).forEach((projectId) => {
    const project = portfolioData[projectId];

    // Generate technology tags
    const techTags = project.technologies
      .map(
        (tech) => `
        <span class="bg-${tech.color}/20 text-${
          tech.color === "primary"
            ? "primary"
            : tech.color === "accent"
              ? "accent"
              : tech.color === "green-500"
                ? "green-400"
                : "purple-400"
        } px-3 py-1 rounded-full text-sm">
          ${tech.name}
        </span>
      `,
      )
      .join("");

    // Get YouTube thumbnail
    const thumbnailUrl = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;

    // Create card HTML
    const card = `
      <div class="group bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
        <div class="relative aspect-video overflow-hidden cursor-pointer" onclick="window.open('${project.youtubeUrl}', '_blank')">
          <img
            src="${thumbnailUrl}"
            alt="${project.title}"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <i class="fas fa-play text-white text-base md:text-lg ml-0.5"></i>
            </div>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-3 text-white">${project.title}</h3>
          <p class="text-gray-400 text-sm mb-4">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${techTags}
          </div>
          <div class="flex flex-wrap gap-3 mt-2">
            <a
              href="${project.youtubeUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 text-accent transition-all text-sm group/demo"
              onclick="event.stopPropagation()"
            >
              <i class="fas fa-play"></i>
              <span class="font-medium">Watch Video</span>
              <i class="fas fa-arrow-right text-xs group-hover/demo:translate-x-1 transition-transform"></i>
            </a>
            <a
              href="${project.documentationUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 text-primary transition-all text-sm group/doc"
              onclick="event.stopPropagation()"
            >
              <i class="fas fa-file-alt"></i>
              <span class="font-medium">View Documentation</span>
              <i class="fas fa-arrow-right text-xs group-hover/doc:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    portfolioGrid.innerHTML += card;
  });
}

/**
 * Generate Contribution & Dedication Cards
 * Creates cards for each contribution in contributionData
 */
function generateContributionCards() {
  const contributionGrid = document.getElementById("contribution-grid");
  contributionGrid.innerHTML = "";

  Object.keys(contributionData).forEach((contributionId) => {
    const contribution = contributionData[contributionId];

    // Determine thumbnail URL based on type
    const thumbnailUrl =
      contribution.thumbnailType === "youtube"
        ? `https://img.youtube.com/vi/${contribution.videoId}/hqdefault.jpg`
        : contribution.thumbnailUrl;

    // Generate Watch Video button
    const watchVideoButton = `
          <a
            href="${contribution.youtubeUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 text-accent transition-all text-sm group/demo"
            onclick="event.stopPropagation()"
          >
            <i class="fas fa-play"></i>
            <span class="font-medium">Watch Video</span>
            <i class="fas fa-arrow-right text-xs group-hover/demo:translate-x-1 transition-transform"></i>
          </a>
        `;

    // Generate documentation button - use documentationUrl if available, otherwise use youtubeUrl
    const docUrl = contribution.documentationUrl || contribution.youtubeUrl;
    const documentationButton = `
          <a
            href="${docUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 text-primary transition-all text-sm group/doc"
            onclick="event.stopPropagation()"
          >
            <i class="fas fa-file-alt"></i>
            <span class="font-medium">View Documentation</span>
            <i class="fas fa-arrow-right text-xs group-hover/doc:translate-x-1 transition-transform"></i>
          </a>
        `;

    // Create card HTML
    const card = `
      <div class="group bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
        <div class="relative aspect-video overflow-hidden cursor-pointer" onclick="window.open('${contribution.youtubeUrl}', '_blank')">
          <img
            src="${thumbnailUrl}"
            alt="${contribution.title}"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <i class="fas fa-play text-white text-base md:text-lg ml-0.5"></i>
            </div>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-3 text-white">${contribution.title}</h3>
          <p class="text-gray-400 text-sm">${contribution.description}</p>
          <div class="flex flex-wrap gap-3 mt-4">
            ${watchVideoButton}
            ${documentationButton}
          </div>
        </div>
      </div>
    `;

    contributionGrid.innerHTML += card;
  });
}

/**
 * Generate Certificate Cards
 * Creates cards for each certificate in certificatesData
 */
function generateCertificateCards() {
  const certificatesGrid = document.getElementById("certificates-grid");
  certificatesGrid.innerHTML = "";

  Object.keys(certificatesData).forEach((certificateId) => {
    const certificate = certificatesData[certificateId];

    // Create card HTML
    const card = `
      <a
        href="${certificate.credentialUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative bg-white rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
      >
        <div class="aspect-square bg-gray-100 flex items-center justify-center p-4">
          <img
            src="${certificate.imageUrl}"
            alt="${certificate.title}"
            class="w-full h-full object-contain"
            onerror="this.parentElement.innerHTML='<div class=\\'flex flex-col items-center justify-center h-full\\'><i class=\\'fas fa-certificate text-6xl text-primary mb-4\\'></i><p class=\\'text-gray-600 text-center text-sm\\'>${certificate.title}</p></div>'"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div class="text-white text-center px-4">
            <p class="font-semibold text-sm">View Credential</p>
            <i class="fas fa-external-link-alt text-xs mt-2"></i>
          </div>
        </div>
        <div class="p-4 bg-white">
          <h3 class="font-bold text-gray-800 text-sm mb-1">
            ${certificate.title}
          </h3>
          <p class="text-gray-600 text-xs">${certificate.issuer}</p>
        </div>
      </a>
    `;

    certificatesGrid.innerHTML += card;
  });
}

/**
 * Generate Partner Cards
 * Creates cards for each partner in partnersData
 */
function generatePartnerCards() {
  const partnersGrid = document.getElementById("partners-grid");
  partnersGrid.innerHTML = "";

  Object.keys(partnersData).forEach((partnerId) => {
    const partner = partnersData[partnerId];

    // Create card HTML
    const card = `
      <a
        href="${partner.websiteUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="group bg-gray-900/50 rounded-xl p-8 flex items-center justify-center hover:transform hover:scale-105 transition-all duration-300"
      >
        <img
          src="${partner.logoUrl}"
          alt="${partner.name} Logo"
          class="max-w-full h-auto max-h-32 object-contain transition-all duration-300 rounded-full"
        />
      </a>
    `;

    partnersGrid.innerHTML += card;
  });
}

/**
 * Generate Social Media Links for Hero Section
 * Creates social media icon links with hover effects
 */
function generateHeroSocialLinks() {
  const heroSocialContainer = document.getElementById("hero-social-links");
  heroSocialContainer.innerHTML = "";

  Object.keys(socialMediaData).forEach((socialId) => {
    const social = socialMediaData[socialId];

    // Determine hover background color class
    let hoverBgClass = "";
    if (social.hoverColor === "primary") {
      hoverBgClass = "hover:bg-primary hover:shadow-primary/50";
    } else if (social.hoverColor === "blue-600") {
      hoverBgClass = "hover:bg-blue-600 hover:shadow-blue-600/50";
    } else if (social.hoverColor === "green-500") {
      hoverBgClass = "hover:bg-green-500 hover:shadow-green-500/50";
    } else if (social.hoverColor === "blue-400") {
      hoverBgClass = "hover:bg-blue-400 hover:shadow-blue-400/50";
    } else if (social.hoverColor === "indigo-500") {
      hoverBgClass = "hover:bg-indigo-500 hover:shadow-indigo-500/50";
    } else if (social.hoverColor === "gray-200") {
      hoverBgClass = "hover:bg-black hover:shadow-gray-700/50";
    }

    // Create link HTML
    const link = `
      <a
        href="${social.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="w-12 h-12 bg-gray-800 ${hoverBgClass} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
        title="${social.name}"
      >
        <i class="${social.icon} text-xl"></i>
      </a>
    `;

    heroSocialContainer.innerHTML += link;
  });
}

/**
 * Generate Social Media Links for Footer
 * Creates simple text-based social media links
 */
function generateFooterSocialLinks() {
  const footerSocialContainer = document.getElementById("footer-social-links");
  footerSocialContainer.innerHTML = "";

  Object.keys(socialMediaData).forEach((socialId) => {
    const social = socialMediaData[socialId];

    // Determine hover color class
    let hoverColorClass = "";
    if (social.hoverColor === "primary") {
      hoverColorClass = "hover:text-primary";
    } else if (social.hoverColor === "blue-600") {
      hoverColorClass = "hover:text-blue-600";
    } else if (social.hoverColor === "green-500") {
      hoverColorClass = "hover:text-green-500";
    } else if (social.hoverColor === "blue-400") {
      hoverColorClass = "hover:text-blue-400";
    } else if (social.hoverColor === "indigo-500") {
      hoverColorClass = "hover:text-indigo-500";
    } else if (social.hoverColor === "gray-200") {
      hoverColorClass = "hover:text-gray-200";
    }

    // Create link HTML
    const link = `
      <a
        href="${social.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 ${hoverColorClass} transition-colors"
        title="${social.name}"
      >
        <i class="${social.icon} text-xl"></i>
      </a>
    `;

    footerSocialContainer.innerHTML += link;
  });
}

// ============================================================================
// 3. ANIMATION & INTERACTION FUNCTIONS
// ============================================================================

/**
 * Typing Animation for Hero Section
 * Cycles through different role titles with typing effect
 */
function initTypingAnimation() {
  const texts = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Blockchain Enthusiast",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing-text");

  function typeText() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
  }

  typeText();
}

/**
 * Scroll Animations
 * Fade in elements when they come into view
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Mobile Menu Toggle
 * Handle mobile navigation menu open/close
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

/**
 * Smooth Scrolling for Navigation Links
 * Smooth scroll to sections when clicking navigation links
 */
function initSmoothScrolling() {
  const mobileMenu = document.getElementById("mobile-menu");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        mobileMenu.classList.add("hidden");
      }
    });
  });
}

/**
 * Navbar Background on Scroll
 * Add background to navbar when scrolling down
 */
function initNavbarScroll() {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("bg-gray-900/95");
    } else {
      nav.classList.remove("bg-gray-900/95");
    }
  });
}

/**
 * Hide Scroll Arrow on Scroll
 * Hide the scroll arrow when user starts scrolling
 */
function initScrollIndicator() {
  const scrollArrow = document.getElementById("scroll-arrow");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollArrow.classList.add("hide");
    } else {
      scrollArrow.classList.remove("hide");
    }
  });
}

// ============================================================================
// 4. INITIALIZATION - Run all functions when page loads
// ============================================================================

/**
 * Initialize All Functions
 * This runs when the DOM is fully loaded
 */
function init() {
  // Generate all dynamic content
  generatePortfolioCards();
  generateContributionCards();
  generateCertificateCards();
  generatePartnerCards();
  generateHeroSocialLinks();
  generateFooterSocialLinks();

  // Initialize animations and interactions
  initTypingAnimation();
  initScrollAnimations();
  initMobileMenu();
  initSmoothScrolling();
  initNavbarScroll();
  initScrollIndicator();
}

// Run initialization when DOM is ready
init();
