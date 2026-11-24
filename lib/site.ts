export const site = {
  name: "کبیر لاستیک وارنا",
  nameEn: "Kabir Lastik Varna",
  tagline:
    "تولیدکننده‌ی انواع قطعات لاستیکی، اسفنج لاستیکی، نوار لاستیکی و شیلنگ لاستیکی",
  since: "۱۳۷۹",
  sinceYear: 1379,
  address:
    "تهران، جاده خاوران، شهرک صنعتی عباس‌آباد، بلوار ابن‌سینا، خیابان ۱۲ (درنا)، خیابان ششم، کوچه ۶/۲ (کبوتر)، پلاک ۱۵۲۶",
  phones: [
    { label: "۰۲۱-۳۶۴۲۶۶۱۳", href: "tel:+982136426613" },
    { label: "۰۲۱-۳۶۴۲۶۶۲۴", href: "tel:+982136426624" },
    { label: "۰۲۱-۳۶۴۲۶۶۴۰", href: "tel:+982136426640" },
  ],
  mobiles: [
    { label: "۰۹۱۲۵۹۱۰۵۸۰", href: "tel:+989125910580" },
    { label: "۰۹۱۲۰۱۸۶۸۴۴", href: "tel:+989120186844" },
  ],
  whatsapp: { label: "۰۹۰۲۵۶۰۶۹۵۲", href: "https://wa.me/989025606952" },
  email: "kabirlastic@yahoo.com",
};

export const nav = [
  { href: "/products", label: "محصولات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export const categories = [
  { slug: "oil-filter-gaskets", title: "واشرهای فیلتر روغن خودرو" },
  { slug: "diesel-filter-gaskets", title: "واشرهای فیلتر گازوییل خودرو" },
  { slug: "air-filter-foam-gaskets", title: "واشرهای اسفنجی فیلتر هوای خودرو" },
  { slug: "air-filter-parts", title: "قطعات فیلتر هوای خودرو" },
  { slug: "hoses", title: "شیلنگ" },
];

export const certificates = [
  { code: "ISO 9001:2015", title: "سیستم مدیریت کیفیت" },
  { code: "ISO 10002:2018", title: "سیستم رسیدگی به شکایات مشتریان" },
  { code: "ISO 10004:2018", title: "سیستم پایش رضایتمندی مشتریان" },
];

export const values = ["کیفیت", "دقت", "ایمنی", "مطمئن"];

/* Persian years since the company started (1379), always current */
export function yearsActive() {
  const jy = parseInt(
    new Intl.DateTimeFormat("en-u-ca-persian-nu-latn", { year: "numeric" }).format(new Date()),
    10,
  );
  return jy - 1379;
}

export const features = [
  { title: "آزمایشگاه مجهز", text: "کنترل کیفیت محصولات با تکیه بر دانش فنی و آزمایشگاه مجهز صنعت لاستیک." },
  { title: "استاندارد ISO", text: "سیستم‌های مدیریت کیفیت، رسیدگی به شکایات و پایش رضایت مشتریان در شرکت استقرار یافته است." },
  { title: "تیم آموزش‌دیده", text: "آموزش مستمر کارکنان برای ارتقای مهارت‌ها و کار گروهی." },
  { title: "سابقه‌ی تولید", text: "تولید قطعات لاستیکی مصارف صنایع گوناگون از سال ۱۳۷۹." },
];

export const marqueeWords = [
  "واشر فیلتر روغن", "واشر فیلتر گازوییل", "واشر اسفنجی فیلتر هوا", "قطعات فیلتر هوا",
  "شیلنگ لاستیکی", "اورینگ", "واشر آب‌بندی", "مانع برگشت",
];
