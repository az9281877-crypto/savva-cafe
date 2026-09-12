export type Locale = "ar" | "en";
export type Localized = Record<Locale, string>;
export type MenuCategory = "hot" | "cold" | "matcha" | "seasonal" | "desserts";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: Localized;
  priceSar: number | null;
  unknownPriceLabel?: Localized;
};

const askBarista = { ar: "اسأل الباريستا", en: "Ask the barista" };

export const site = {
  seo: {
    title: {
      ar: "ساڤا | مقهى في المدينة المنورة",
      en: "Savva Café | Madinah",
    },
    description: {
      ar: "ساڤا في المدينة المنورة — قهوة، مشروبات باردة، حلويات وتراس مسائي.",
      en: "Savva Café in Madinah — coffee, cold drinks, desserts and an evening terrace.",
    },
    locale: {
      ar: "ar_SA",
      en: "en_US",
    },
  },
  copy: {
    skip: { ar: "انتقل إلى المحتوى", en: "Skip to content" },
    hero: {
      title: { ar: "الحر، ثم كأس بارد.", en: "Heat, then a cold glass." },
      intro: {
        ar: "من أول رشفة شمام باردة إلى هدوء التراس — هذا يومك في سافا.",
        en: "From the first cold sip of melon to the quiet terrace — this is your day at Savva.",
      },
      signature: { ar: "شمام سافا", en: "Savva melon" },
      mediaPending: { ar: "مكان صورة شمام سافا الأصلية", en: "Reserved for the original Savva melon photograph" },
      scroll: { ar: "اكمل يومك", en: "Continue the day" },
    },
    stories: {
      title: { ar: "يومك في سافا", en: "Your day at Savva" },
      intro: { ar: "ست لحظات، من حر الظهر إلى آخر الليل.", en: "Six moments, from midday heat to late night." },
    },
    menu: {
      title: { ar: "على الكاونتر", en: "On the counter" },
      intro: {
        ar: "قهوة، ماتشا وحلى. الأسعار المعروفة فقط — والباقي اسأل عنه الباريستا.",
        en: "Coffee, matcha and dessert. Only confirmed prices are shown; ask the barista for the rest.",
      },
      all: { ar: "الكل", en: "All" },
      currency: { ar: "ر.س", en: "SAR" },
      unavailable: { ar: "—", en: "—" },
      filterLabel: { ar: "تصفية القائمة", en: "Filter menu" },
    },
    space: {
      title: { ar: "دفء الداخل، هواء التراس", en: "Warm inside, cool on the terrace" },
      indoor: { ar: "الداخل", en: "Indoor" },
      terrace: { ar: "التراس", en: "Terrace" },
      indoorText: { ar: "ضوء دافئ ومساحة تجمعكم.", en: "Warm light and space to gather." },
      terraceText: { ar: "مزاج أهدأ بعد غروب المدينة.", en: "A quieter mood after Madinah sunset." },
      seats: { ar: "حوالي 46 مقعداً", en: "Approximately 46 seats" },
      reviewNote: { ar: "تفاصيل المكان المذكورة تقريبية.", en: "The space details shown are approximate." },
      features: {
        families: { ar: "العائلات مرحب بها", en: "Families welcome" },
        music: { ar: "الموسيقى تعمل", en: "Music is on" },
        noPartitions: { ar: "بدون فواصل", en: "No partitions" },
      },
    },
    gallery: {
      title: { ar: "فيلم سافا", en: "Savva film" },
      intro: { ar: "من الشمام والماتشا إلى اللمة بعد الغروب.", en: "From melon and matcha to gatherings after sunset." },
      cta: { ar: "تابعونا على إنستغرام", en: "Follow us on Instagram" },
      pending: { ar: "الصورة الأصلية قريباً", en: "Original photograph coming soon" },
      reaction: { ar: "انقر مرتين لإظهار القلب", en: "Double tap to show a heart" },
    },
    visit: {
      title: { ar: "من الصباح إلى بعد منتصف الليل", en: "From morning to after midnight" },
      intro: { ar: "نفتح يومياً من 07:00 إلى 02:00.", en: "Open daily from 07:00 until 02:00." },
      maps: { ar: "افتح في خرائط Google", en: "Open in Google Maps" },
      whatsapp: { ar: "راسلنا على WhatsApp", en: "Message us on WhatsApp" },
      qrTitle: { ar: "خذ سافا معك", en: "Take Savva with you" },
      qrMaps: { ar: "امسح للموقع", en: "Scan for Maps" },
      qrInstagram: { ar: "امسح لإنستغرام", en: "Scan for Instagram" },
      morning: { ar: "صباح", en: "Morning" },
      heat: { ar: "حر الظهر", en: "Midday heat" },
      sunset: { ar: "غروب", en: "Sunset" },
      night: { ar: "ليل", en: "Night" },
      notes: {
        area: { ar: "بئر عثمان", en: "Bir Uthman" },
        ride: { ar: "تحقق من توفر Uber أو Careem", en: "Check Uber or Careem availability" },
        parking: { ar: "تأكد من المواقف عند الوصول", en: "Confirm parking on arrival" },
      },
    },
    notFound: {
      title: { ar: "القائمة خلصت… ارجع لسافا", en: "The menu ends here… return to Savva" },
      action: { ar: "ارجع لسافا", en: "Return to Savva" },
    },
  },
  identity: {
    name: { ar: "ساڤا", en: "Savva" },
    city: { ar: "المدينة المنورة", en: "Madinah" },
    tagline: {
      ar: "يوم في سافا هو ما تحتاجه لتكون سافا",
      en: "A day in savva is what you need to be savva",
    },
  },
  contact: {
    phone: "+966564370303",
    address: {
      ar: "الزبيرة الرومية، بئر عثمان، المدينة المنورة 42331، المملكة العربية السعودية",
      en: "Zubairah Al Roumiah, Bir Uthman, Madinah 42331, Saudi Arabia",
    },
  },
  links: {
    instagram: "https://www.instagram.com/savva_cafe",
    whatsapp: "https://wa.me/966564370303",
    maps: "https://maps.app.goo.gl/geB2uSVz2UD7soM46",
  },
  hours: {
    daily: { opens: "07:00", closes: "02:00" },
    timeZone: "Asia/Riyadh",
    nightTheme: { starts: "18:00", ends: "07:00" },
  },
  navigation: [
    { id: "home", href: "#home", label: { ar: "سافا", en: "Savva" } },
    { id: "menu", href: "#menu", label: { ar: "القائمة", en: "Menu" } },
    { id: "space", href: "#space", label: { ar: "المكان", en: "Space" } },
    { id: "visit", href: "#visit", label: { ar: "زورونا", en: "Visit" } },
  ],
  stories: [
    { id: "hot-day", tone: "melon", media: { ar: "شمام سافا بارد", en: "Cold Savva melon" }, ar: "يومك حار؟ شمام سافا في الموعد", en: "Hot day? Savva melon is right on time." },
    { id: "cool-summer", tone: "ice", media: { ar: "كأس بارد", en: "A cold glass" }, ar: "صيفك بارد بسافا", en: "Keep summer cool with Savva." },
    { id: "gathering", tone: "gathering", media: { ar: "لمة سافا", en: "Gathering at Savva" }, ar: "سافا يجمع حبايبكم", en: "Savva brings your people together." },
    { id: "danish", tone: "pastry", media: { ar: "دانيش سينبون", en: "Cinnamon Danish" }, ar: "دانيش سينبون — التفاصيل تفرق", en: "Cinnamon Danish — details make the difference." },
    { id: "cheesecake", tone: "blueberry", media: { ar: "تشيز كيك بلوبيري", en: "Blueberry cheesecake" }, ar: "تشيز كيك بلوبيري", en: "Blueberry cheesecake." },
    { id: "service", tone: "night", media: { ar: "تراس سافا ليلاً", en: "Savva terrace at night" }, ar: "بخدمتكم دائماً", en: "Always here for you." },
  ],
  menuCategories: [
    { id: "hot", label: { ar: "قهوة ساخنة", en: "Hot coffee" } },
    { id: "cold", label: { ar: "قهوة مثلجة", en: "Iced coffee" } },
    { id: "matcha", label: { ar: "ماتشا", en: "Matcha" } },
    { id: "seasonal", label: { ar: "مشروبات سافا الموسمية", en: "Savva seasonal drinks" } },
    { id: "desserts", label: { ar: "حلويات", en: "Desserts" } },
  ],
  menu: [
    { id: "espresso", category: "hot", name: { ar: "إسبريسو", en: "Espresso" }, priceSar: 14 },
    { id: "cortado", category: "hot", name: { ar: "كورتادو", en: "Cortado" }, priceSar: null },
    { id: "latte", category: "hot", name: { ar: "لاتيه", en: "Latte" }, priceSar: null },
    { id: "americano", category: "hot", name: { ar: "أمريكانو", en: "Americano" }, priceSar: 17 },
    { id: "iced-coffee-milk", category: "cold", name: { ar: "قهوة بالحليب مثلجة", en: "Iced coffee milk" }, priceSar: 20 },
    { id: "iced-latte-condensed", category: "cold", name: { ar: "لاتيه مثلج بالحليب المكثف", en: "Iced latte condensed milk" }, priceSar: 22 },
    { id: "iced-tea-savva", category: "cold", name: { ar: "شاي سافا المثلج", en: "Iced tea Savva" }, priceSar: 20 },
    { id: "hibiscus", category: "cold", name: { ar: "كركديه", en: "Hibiscus" }, priceSar: 20 },
    { id: "iced-white-mocha", category: "cold", name: { ar: "وايت موكا مثلج", en: "Iced white mocha" }, priceSar: 22 },
    { id: "iced-americano", category: "cold", name: { ar: "أمريكانو مثلج", en: "Iced americano" }, priceSar: 17 },
    { id: "iced-matcha", category: "matcha", name: { ar: "ماتشا مثلجة", en: "Iced matcha" }, priceSar: 20 },
    { id: "matcha-spanish-latte", category: "matcha", name: { ar: "ماتشا سبانيش لاتيه مثلجة", en: "Ice Matcha Spanish Latte" }, priceSar: 22 },
    { id: "savva-matcha", category: "matcha", name: { ar: "ماتشا سافا المثلجة", en: "Savva-flavored iced matcha" }, priceSar: 24 },
    { id: "savva-melon", category: "seasonal", name: { ar: "شمام سافا", en: "Savva melon" }, priceSar: null, unknownPriceLabel: askBarista },
    { id: "danish-cinnamon", category: "desserts", name: { ar: "دانيش سينبون", en: "Danish cinnamon" }, priceSar: null },
    { id: "chocolate-cake", category: "desserts", name: { ar: "كيكة الشوكولاتة", en: "Chocolate cake" }, priceSar: null },
    { id: "blueberry-cheesecake", category: "desserts", name: { ar: "تشيز كيك بلوبيري", en: "Blueberry cheesecake" }, priceSar: null },
    { id: "madini-spice-cookie", category: "desserts", name: { ar: "كوكيز بهارات مدينية", en: "Madini-spice cookie" }, priceSar: 14 },
  ] satisfies MenuItem[],
  space: {
    seats: { value: 46, approximate: true },
    factsFromBrief: {
      terrace: true,
      familiesWelcome: true,
      music: true,
      partitions: false,
      independentlyVerified: false,
    },
  },
  gallery: [
    { id: "melon", tone: "melon", label: { ar: "شمام", en: "Melon" }, ratio: "portrait" },
    { id: "matcha", tone: "matcha", label: { ar: "ماتشا", en: "Matcha" }, ratio: "landscape" },
    { id: "danish", tone: "pastry", label: { ar: "دانيش", en: "Danish" }, ratio: "square" },
    { id: "cheesecake", tone: "blueberry", label: { ar: "تشيز كيك", en: "Cheesecake" }, ratio: "portrait" },
    { id: "terrace", tone: "night", label: { ar: "التراس", en: "Terrace" }, ratio: "landscape" },
    { id: "cups", tone: "coffee", label: { ar: "أكواب سافا", en: "Savva cups" }, ratio: "square" },
    { id: "gathering", tone: "gathering", label: { ar: "اللمة", en: "Gathering" }, ratio: "portrait" },
  ],
} as const;
