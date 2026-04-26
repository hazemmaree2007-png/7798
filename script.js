// ==================== LANGUAGE TOGGLE ==================== 
const translations = {
    en: {
        navServices: "Services",
        navCoverage: "Coverage",
        navAbout: "About",
        navContact: "Contact",
        heroTitle: "Professional Car Recovery & Flatbed Towing",
        heroSubtitle: "24/7 Emergency Services Across All Dubai Areas",
        heroDescription: "Fast Response • Professional Drivers • Fully Insured",
        callButton: "Call Now",
        whatsappButton: "WhatsApp",
        servicesTitle: "Our Services",
        flatbedTitle: "Flatbed Towing",
        flatbedDesc: "Professional flatbed services for all vehicle types, from cars to SUVs and light commercial vehicles.",
        recoveryTitle: "Vehicle Recovery",
        recoveryDesc: "Expert recovery services for stuck, damaged, or immobilized vehicles in any situation.",
        roadsideTitle: "Roadside Assistance",
        roadsideDesc: "Quick response roadside help including battery boost, fuel delivery, and emergency repairs.",
        transportTitle: "Vehicle Transport",
        transportDesc: "Safe and secure transport for vehicles within Dubai and surrounding emirates.",
        insuranceTitle: "Insurance Claims",
        insuranceDesc: "Direct insurance claim assistance and authorized service center partnerships.",
        emergencyTitle: "24/7 Emergency",
        emergencyDesc: "Round-the-clock emergency response available on holidays and weekends.",
        areasTitle: "Coverage Areas in Dubai",
        downownArea: "Downtown Dubai",
        downownAreaDesc: "DIFC, Burj Khalifa, Downtown Dubai Mall",
        marinaArea: "Marina & JBR",
        marinaAreaDesc: "Dubai Marina, Jumeirah Beach Residence",
        jumeirahArea: "Jumeirah",
        jumeirahAreaDesc: "Jumeirah Palm, Beach Park, Jumeirah Mosque",
        businessArea: "Business Bay",
        businessAreaDesc: "Business Bay, Bur Dubai, Old Town",
        sheikhareaArea: "Sheikh Zayed Road",
        sheikhAreaDesc: "Emirates Towers, Dusit Thani, Jumeirah Emirates Towers",
        southArea: "Dubai South",
        southAreaDesc: "Dubai Airport, International City, Jebel Ali",
        siliconArea: "Dubai Silicon Oasis",
        siliconAreaDesc: "DSO, Internet City, Media City",
        residentialArea: "Residential Areas",
        residentialAreaDesc: "Deira, Bur Dubai, Al Manara, Al Karama",
        coverageNote: "We cover ALL areas of Dubai. Quick response time guaranteed!",
        whyUsTitle: "Why Choose Us?",
        fastResponseTitle: "Fast Response",
        fastResponseDesc: "Average response time under 15 minutes in most areas",
        professionalTitle: "Professional Team",
        professionalDesc: "Trained and certified professionals with years of experience",
        fullyInsuredTitle: "Fully Insured",
        fullyInsuredDesc: "Comprehensive insurance coverage for your vehicle's safety",
        competitiveRatesTitle: "Competitive Rates",
        competitiveRatesDesc: "Transparent pricing with no hidden charges",
        contactTitle: "Get In Touch",
        phoneLabel: "Phone",
        available24_7: "Available 24/7",
        whatsappLabel: "WhatsApp",
        instantResponse: "Instant response guaranteed",
        serviceAreaLabel: "Service Area",
        allAreasDubai: "All areas of Dubai, UAE",
        emergencyResponse: "24/7 Emergency Response",
        copyright: "© 2024 Dubai Car Transport Services. All rights reserved.",
        tagline: "Professional Recovery • Flatbed Towing • Vehicle Transport • Available 24/7",
    },
    ar: {
        navServices: "الخدمات",
        navCoverage: "مناطق التغطية",
        navAbout: "معلومات",
        navContact: "تواصل معنا",
        heroTitle: "خدمات النقل والسحب الاحترافية",
        heroSubtitle: "خدمات الطوارئ 24/7 في جميع مناطق دبي",
        heroDescription: "استجابة سريعة • سائقون محترفون • مؤمن بالكامل",
        callButton: "اتصل الآن",
        whatsappButton: "واتس آب",
        servicesTitle: "خدماتنا",
        flatbedTitle: "السحب بالسيارة المسطحة",
        flatbedDesc: "خدمات سحب احترافية لجميع أنواع المركبات، من السيارات إلى الجيب والمركبات التجارية الخفيفة.",
        recoveryTitle: "استرجاع المركبات",
        recoveryDesc: "خدمات استرجاع متخصصة للمركبات المتعطلة أو التالفة أو المعطوبة في أي حالة.",
        roadsideTitle: "المساعدة على الطريق",
        roadsideDesc: "مساعدة سريعة على الطريق تشمل شحن البطارية وتوصيل الوقود والإصلاحات الطارئة.",
        transportTitle: "نقل المركبات",
        transportDesc: "نقل آمن وموثوق للمركبات داخل دبي والإمارات المجاورة.",
        insuranceTitle: "المطالبات التأمينية",
        insuranceDesc: "مساعدة مباشرة في المطالبات التأمينية والشراكات مع مراكز الخدمة المرخصة.",
        emergencyTitle: "طوارئ 24/7",
        emergencyDesc: "استجابة طوارئ مستمرة متاحة في الإجازات ونهايات الأسبوع.",
        areasTitle: "مناطق التغطية في دبي",
        downownArea: "وسط البلد دبي",
        downownAreaDesc: "DIFC، برج خليفة، مول دبي",
        marinaArea: "المارينا و جي بي آر",
        marinaAreaDesc: "دبي مارينا، جميرا بيتش ريزيدنس",
        jumeirahArea: "جميرة",
        jumeirahAreaDesc: "نخيل جميرة، متنزه الشاطئ، مسجد جميرة",
        businessArea: "منطقة الأعمال",
        businessAreaDesc: "منطقة الأعمال، بر دبي، البلد القديمة",
        sheikhAreaArea: "طريق الشيخ زايد",
        sheikhAreaDesc: "أبراج الإمارات، ديوسيت ثاني، أبراج جميرا الإمارات",
        southArea: "جنوب دبي",
        southAreaDesc: "مطار دبي، المدينة الدولية، جبل علي",
        siliconArea: "واحة السيليكون دبي",
        siliconAreaDesc: "DSO، مدينة الإنترنت، مدينة الإعلام",
        residentialArea: "المناطق السكنية",
        residentialAreaDesc: "ديرة، بر دبي، المنارة، الكرامة",
        coverageNote: "نغطي جميع مناطق دبي. استجابة سريعة مضمونة!",
        whyUsTitle: "لماذا تختارنا؟",
        fastResponseTitle: "استجابة سريعة",
        fastResponseDesc: "متوسط وقت الاستجابة أقل من 15 دقيقة في معظم المناطق",
        professionalTitle: "فريق احترافي",
        professionalDesc: "متخصصون مدربون ومرخصون بسنوات من الخبرة",
        fullyInsuredTitle: "مؤمن بالكامل",
        fullyInsuredDesc: "تغطية تأمينية شاملة لسلامة سيارتك",
        competitiveRatesTitle: "أسعار تنافسية",
        competitiveRatesDesc: "أسعار شفافة بدون رسوم مخفية",
        contactTitle: "تواصل معنا",
        phoneLabel: "الهاتف",
        available24_7: "متاح 24/7",
        whatsappLabel: "واتس آب",
        instantResponse: "ضمان الرد الفوري",
        serviceAreaLabel: "منطقة الخدمة",
        allAreasDubai: "جميع مناطق دبي، الإمارات العربية المتحدة",
        emergencyResponse: "استجابة طوارئ 24/7",
        copyright: "© 2024 خدمات نقل السيارات بدبي. جميع الحقوق محفوظة.",
        tagline: "استرجاع احترافي • السحب بالسيارة المسطحة • نقل المركبات • متاح 24/7",
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLanguage;
    document.body.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Update button text
    document.querySelector('.lang-toggle').textContent = 
        currentLanguage === 'en' ? 'العربية' : 'English';
    
    // Update all translatable elements
    updatePageLanguage();
    
    // Save preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updatePageLanguage() {
    // This would update all content - for now using data attributes
    console.log('Language changed to:', currentLanguage);
}

// Load saved language preference
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    if (savedLanguage !== currentLanguage) {
        toggleLanguage();
    }
}

// ==================== SCROLL EFFECTS ==================== 
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== FORM AND VALIDATION ==================== 
function validatePhoneNumber(phone) {
    // UAE phone number validation (0555797835 or +971555797835 format)
    const phoneRegex = /^(?:\+971|0)[0-9]{9}$/;
    return phoneRegex.test(phone);
}

// ==================== WHATSAPP MESSAGE TEMPLATE ==================== 
function getWhatsAppMessage() {
    return "Hello! I need car recovery and towing services. Please help!";
}

// ==================== PERFORMANCE OPTIMIZATION ==================== 
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== TRACKING AND ANALYTICS ==================== 
// Add Google Analytics tracking
function trackEvent(eventName, eventData) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// Track phone call clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('phone_call', {
            'phone_number': '0555797835'
        });
    });
});

// Track WhatsApp clicks
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('whatsapp_click', {
            'service': 'car_towing'
        });
    });
});

// ==================== SEO OPTIMIZATION - STRUCTURED DATA ==================== 
function injectStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Dubai Car Transport Services",
        "image": "https://yourdomain.com/logo.png",
        "description": "Professional car recovery, flatbed towing and vehicle transport services in Dubai, UAE. 24/7 Emergency services.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "00000",
            "addressCountry": "AE"
        },
        "telephone": "+971555797835",
        "url": "https://yourdomain.com",
        "priceRange": "AED",
        "areaServed": {
            "@type": "City",
            "name": "Dubai"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/yourbusiness",
            "https://www.instagram.com/yourbusiness"
        ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// ==================== PAGE LOAD INITIALIZATION ==================== 
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully');
    
    // Initialize language
    initializeLanguage();
    
    // Inject structured data for SEO
    injectStructuredData();
    
    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply to service cards
    document.querySelectorAll('.service-card, .area-card, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== ERROR HANDLING ==================== 
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e);
    // You could send error reports to a server here
});

// ==================== ACCESSIBILITY IMPROVEMENTS ==================== 
// Ensure keyboard navigation works
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals
    }
    if (e.key === 'Enter') {
        if (document.activeElement && document.activeElement.classList.contains('btn')) {
            document.activeElement.click();
        }
    }
});

// ==================== MOBILE MENU SUPPORT ==================== 
function setupMobileMenu() {
    // Add mobile menu functionality if needed
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    // Responsive behavior handled by CSS media queries
}

// ==================== SERVICE WORKER FOR PWA (OPTIONAL) ==================== 
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA
    // navigator.serviceWorker.register('/sw.js');
}

// Initialize mobile menu on load
setupMobileMenu();
