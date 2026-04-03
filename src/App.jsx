import { useState, useEffect, useRef, useCallback } from "react";

/* ── Global CSS injected once ── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap');

*, ::before, ::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }

:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #ff6b6b;
  --accent2: #ee5a24;
  --text-main: #2d2d3a;
  --text-light: #6b6b80;
  --bg-main: #f8f9ff;
  --font: 'Vazirmatn', sans-serif;
}

@keyframes meshFloat {
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(3%,4%) scale(1.06); }
  66%      { transform: translate(-2%,2%) scale(0.96); }
}
@keyframes particleDrift {
  0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: .6; }
  100% { transform: translateY(-120vh) translateX(30px) scale(0); opacity: 0; }
}
@keyframes shimmerBar {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes dropdownOpen {
  from { opacity: 0; transform: scale(.88) translateY(-8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
@keyframes progressShimmer {
  0%   { background-position: 0% 0; }
  100% { background-position: 200% 0; }
}
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }

.mesh-blob {
  position: absolute; border-radius: 50%;
  filter: blur(60px); opacity: .35;
  animation: meshFloat 12s ease-in-out infinite;
}

.reveal {
  opacity: 0; transform: translateY(32px);
  transition: opacity .65s cubic-bezier(.4,0,.2,1), transform .65s cubic-bezier(.4,0,.2,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }

.shimmer-border::before {
  content: ''; position: absolute; top:0; left:0; right:0; height:4px;
  background: linear-gradient(90deg,var(--primary),var(--accent),var(--secondary));
  background-size: 200% 100%; animation: shimmerBar 3s linear infinite;
}
.card-top-bar::before {
  content: ''; position: absolute; top:0; left:0; right:0; height:3px;
  background: linear-gradient(90deg,var(--primary),var(--secondary));
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s cubic-bezier(.4,0,.2,1);
}
.card-top-bar:hover::before { transform: scaleX(1); }

.section-card { cursor: default; }
.section-card:hover { transform: translateY(-12px); }
.section-card { transition: transform .3s ease, box-shadow .3s ease; }
.section-card:hover { box-shadow: 0 16px 40px rgba(102,126,234,.22) !important; }

.main-library-btn:hover { transform: translateY(-6px) scale(1.03); }
.main-library-btn { transition: transform .3s ease, box-shadow .3s ease; }

.lang-btn, .ku-dialect-btn {
  font-family: var(--font);
  transition: all .2s ease; border:none; cursor:pointer;
}
.lang-btn.active, #kuMainBtn.active {
  background: rgba(255,255,255,.32) !important;
  border-color: rgba(255,255,255,.6) !important;
}

.ku-dropdown {
  position: fixed; background: rgba(70,50,130,.96);
  backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,.15);
  border-radius: 12px; overflow: hidden; z-index: 9999;
  box-shadow: 0 16px 48px rgba(0,0,0,.35);
  min-width: 155px; transform-origin: top right;
  animation: dropdownOpen .22s cubic-bezier(.34,1.56,.64,1) forwards;
}

.social-link { display:inline-flex; align-items:center; justify-content:center; transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
.social-link:hover { transform: translateY(-4px) scale(1.15); }
.social-link svg { width:30px; height:30px; }

#scrollTopBtn {
  position:fixed; bottom: clamp(1.2rem,4vw,2rem); left: clamp(1.2rem,4vw,2rem);
  width:clamp(44px,6vw,54px); height:clamp(44px,6vw,54px); border-radius:50%;
  background: linear-gradient(135deg,var(--primary),var(--secondary));
  color:#fff; border:none; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  box-shadow: 0 6px 24px rgba(102,126,234,.45); z-index:990;
  opacity:0; transform: translateY(20px) scale(.85);
  transition: opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease;
  pointer-events:none;
}
#scrollTopBtn.visible { opacity:1; transform:translateY(0) scale(1); pointer-events:auto; }
#scrollTopBtn:hover { transform:translateY(-5px) scale(1.1); box-shadow:0 14px 36px rgba(102,126,234,.58); }

#scrollProgress {
  position:fixed; top:0; left:0; height:3px; z-index:2000;
  background: linear-gradient(90deg,var(--accent),var(--primary),var(--secondary),var(--accent));
  background-size:200% 100%; animation: progressShimmer 3s linear infinite;
  transition: width .1s linear;
}

.hero-content { animation: heroFadeUp .8s ease-out both; }

.team-card { transition: transform .3s ease, box-shadow .3s ease; }
.team-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(102,126,234,.18); }

.social-icons-container { display:flex; gap:18px; justify-content:center; flex-wrap:wrap; margin-top:15px; }

@media (max-width:480px) { html { font-size:14px; } }
@media (min-width:1200px) { html { font-size:18px; } }
`;

/* ── Language data ── */
const LANGS = {
  "ku-sorani": { dir: "rtl", label: "سۆرانی" },
  "ku-badini":     { dir: "rtl", label: "بادینی" },
  "ku-badini-lat": { dir: "ltr", label: "Badînî" },
  "ku-hawrami":    { dir: "rtl", label: "هەورامی" },
  "en":  { dir: "ltr", label: "English" },
  "ar":  { dir: "rtl", label: "العربية" },
  "fa":  { dir: "rtl", label: "فارسی" },
  "tr":  { dir: "ltr", label: "Türkçe" },
};

const T = {
  siteTitle: {
    "ku-sorani": "زانکۆی ڕاپەڕین", "ku-badini": "زانینگەها ڕاپەرین",
    "ku-badini-lat": "Zanîngeha Raperin", "ku-hawrami": "زانکۆی ڕاپەڕین",
    "en": "University of Raparin", "ar": "جامعة رابەرين",
    "fa": "دانشگاه راپەرین", "tr": "Raparin Üniversitesi",
  },
  siteSubtitle: {
    "ku-sorani": "کتێبخانەی ئەلیکترۆنی", "ku-badini": "پرتوکخانەیا ئەلیکترۆنیک",
    "ku-badini-lat": "Kitêbxaneya Elektronîkî", "ku-hawrami": "کتێبخانەی ئەلیکترۆنی",
    "en": "Electronic Library", "ar": "المكتبة الإلكترونية",
    "fa": "کتابخانه الکترونیکی", "tr": "Elektronik Kütüphane",
  },
  heroWelcome: {
    "ku-sorani": "بەخێربێن بۆ", "ku-badini": "بخێر هاتن بۆ",
    "ku-badini-lat": "Bi xêr hatin", "ku-hawrami": "خۆش بگەیەیت بۆ",
    "en": "Welcome To", "ar": "مرحبا بكم في",
    "fa": "خوش آمدید به", "tr": "Hoş Geldiniz",
  },
  heroTitle: {
    "ku-sorani": "کتێبخانەی ئەلیکترۆنی کۆلێژی زانست",
    "ku-badini": "کتێبخانەیا ئەلیکترۆنیکی یا کۆلێژا زانستێ",
    "ku-badini-lat": "Kitêbxaneya Elektronîkî ya Kolêja Zanistê",
    "ku-hawrami": "کتێبخانەی ئەلیکترۆنی کۆلێژی زانست",
    "en": "College of Science Electronic Library",
    "ar": "المكتبة الإلكترونية لكلية العلوم",
    "fa": "کتابخانه الکترونیکی دانشکده علوم",
    "tr": "Fen Fakültesi Elektronik Kütüphanesi",
  },
  heroSub: {
    "ku-sorani": "بەردەستبوون و کۆکردنەوەی هەزاران سەرچاوە و پەرتووکی زانستی بە شێوەیەکی ئاسان و خێرا.",
    "ku-badini": "بهێسانی و زو پەیدابوونا بی هەزاران چاوکانی و پەرتوکین زانستی.",
    "ku-badini-lat": "Bigihîje hezaran çavkanî û pirtûkên zanistî bi awayekî hêsan û bilez.",
    "ku-hawrami": "دەستڕەسیەتی بە هەزاران سەرچاوە و پەرتووکی زانستی بە شێوەیەکی ئاسان و خێرا.",
    "en": "Access and gather thousands of scientific resources and books easily and quickly.",
    "ar": "الوصول وتجميع آلاف المصادر والكتب العلمية بسهولة وسرعة.",
    "fa": "دسترسی و گردآوری هزاران منبع و کتاب علمی به آسانی و سرعت.",
    "tr": "Binlerce bilimsel kaynak ve kitaba kolayca ve hızlıca erişin ve toplayın.",
  },
  introTitle: {
    "ku-sorani": "پێشەکی", "ku-badini": "پێشگرتن",
    "ku-badini-lat": "Pêşgotin", "ku-hawrami": "پێشەکی",
    "en": "Introduction", "ar": "مقدمة", "fa": "مقدمه", "tr": "Giriş",
  },
  introP1: {
    "ku-sorani": "بەخێربێن بۆ کتێبخانەی ئەلیکترۆنی کۆلێژی زانست - ژینگەیەکی دیجیتاڵییە کە دروستکراوە بۆ ئەوەی گەیشتن بە زانیاری و فێربوون چێژبەخش بێت و توێژینەوە کاراتر بێت بۆ خوێندکاران و ستافی ئەکادیمی.",
    "ku-badini": "بخێر هاتن بۆ پرتوکخانەیا ئەلیکترۆنیکی یا کۆلێژا زانستێ - هاوێردۆرەکا دیجیتال کو ژ بۆ هێسانکرنا گهیشتنا ئاگەهداری و فێربوونێ و باندۆرکرنا لێکۆلینێ ژ بۆ خوێندکار و کارمەندێن ئەکادیمی هاتیە چێکرن.",
    "ku-badini-lat": "Bi xêr hatin bo pirtûkxaneya elektronîkî ya Koleja Zanistê - jîngeheke dîjîtal ku ji bo xwendekar û karmendên akademîk gihîştina agahdarî û fêrbûnê xweştir û lêkolînê jî bikêrtir hatîye sêwirandin.",
    "ku-hawrami": "خۆش بگەیەیت بۆ کتێبخانەی ئەلیکترۆنی کۆلێژی زانست — ئەمە یەک ژینگەی دیجیتاڵیە کە دروستکراوە بۆ ئەوەی دەستڕەسیەتی بە زانیاری و فێربوون ئاسان ببێت.",
    "en": "Welcome to the College of Science e-library - a digital environment designed to make access to information and learning enjoyable and research more efficient for students and academic staff.",
    "ar": "أهلاً بكم في المكتبة الإلكترونية لكلية العلوم - بيئة رقمية مصممة لجعل الوصول إلى المعلومات والتعلم ممتعًا والبحث أكثر كفاءة للطلاب وأعضاء هيئة التدريس.",
    "fa": "به کتابخانه الکترونیکی دانشکده علوم خوش آمدید - یک محیط دیجیتالی که برای لذت‌بخش کردن دسترسی به اطلاعات و یادگیری و کارآمدتر کردن تحقیقات برای دانشجویان و اعضای هیئت علمی طراحی شده است.",
    "tr": "Fen Fakültesi e-kütüphanesine hoş geldiniz - öğrenciler ve akademik personel için bilgiye ve öğrenmeye erişimi keyifli hale getirmek ve araştırmayı daha verimli kılmak amacıyla tasarlanmış dijital bir ortam.",
  },
  introP2: {
    "ku-sorani": "ئەم کتێبخانە ئەلیکترۆنییە کۆمەڵێک سەرچاوەی زانستی بەرفراوان پێشکەش دەکات، لەوانە کتێبی خوێندن، توێژینەوەی زانستی و ئەکادیمی، گۆڤاری ئەکادیمی، کەرەستەی وانەوتنەوە و ئاماژەی پەروەردەیی، کە هەموویان لە یەک پلاتفۆرمی گونجاودا بەردەستن. هەموو ئەمانە لە ڕێگەی QR کۆدەوە کە بە شێوازێکی ئەلکترۆنی ئامادەکراوە.",
    "ku-badini": "ئڤ پرتوکخانەیا ئەلیکترۆنیک جوربەجور چاوکانیێن زانستی پێشکێش دکە، د ناڤ دا پِرتوکێن دەرسێ، لێکۆلینێن زانستی و ئەکادیمی، کۆڤارێن ئەکادیمی، ماتەریالێن هینکرنێ و رێفەرەنسێن پەروەردەهێ، هەمی ل سەر پلاتفۆرمەکا هێسان پەیدا دبن.",
    "ku-badini-lat": "Ev pirtûkxaneya elektronîkî cûrbecûr çavkaniyên zanistî pêşkêş dike, di nav de pirtûkên dersê, gotarên zanistî û akademîk, kovarên akademîk, materyalên hînkirinê û referansên perwerdehiyê, hemî li ser platformek hêsan peyda dibin.",
    "ku-hawrami": "ئەم کتێبخانە ئەلیکترۆنییە کۆمەڵێک سەرچاوەی زانستی بەرفراوان پێشکەش دەکات، هەموویان لە یەک پلاتفۆرمی گونجاودا بەردەستن بە ڕێگەی QR کۆدەوە.",
    "en": "This e-library offers a wide range of scientific resources, including textbooks, scientific and academic papers, academic journals, teaching materials and educational references, all available on one convenient platform. All this through an electronically prepared QR code.",
    "ar": "توفر هذه المكتبة الإلكترونية مجموعة واسعة من الموارد العلمية، تشمل الكتب الدراسية، والأوراق العلمية والأكاديمية، والمجلات الأكاديمية، كلها متاحة على منصة واحدة سهلة الاستخدام.",
    "fa": "این کتابخانه الکترونیکی طیف گسترده‌ای از منابع علمی، از جمله کتاب‌های درسی، مقالات علمی و دانشگاهی، مجلات دانشگاهی، مطالب آموزشی را ارائه می‌دهد که همگی در یک پلتفرم مناسب در دسترس هستند.",
    "tr": "Bu e-kütüphane, ders kitapları, bilimsel ve akademik makaleler, akademik dergiler, öğretim materyalleri de dahil olmak üzere çok çeşitli bilimsel kaynakları tek bir kullanışlı platformda sunmaktadır.",
  },
  introP3: {
    "ku-sorani": "کتێبخانەی ئەلیکترۆنی زیاترە لە تەنها کۆمەڵەیەکی دیجیتاڵی، نیشاندەری پەیوەندی نێوان زانست و تەکنەلۆژیایە. هاندەری بیرکردنەوەی ڕەخنەگرانە و فێربوونی بەردەوامە.",
    "ku-badini": "پرتوکخانەیا ئەلیکترۆنیک ژ کۆکرنەکا دیجیتال زیاتر ئیشاردایە، پەیوەندیا نێوان زانست و تەکنەلۆژیێ نیشان دکە.",
    "ku-badini-lat": "Pirtûkxaneya elektronîk ji berhevokeke dîjîtal bêtir e, ew têkiliya di navbera zanist û teknolojiyê de nîşan dide. Ew ramana rexnegir û fêrbûna berdewam teşwîq dike.",
    "ku-hawrami": "کتێبخانەی ئەلیکترۆنی زیاترە لە کۆمەڵەیەکی دیجیتاڵی، هاندەری بیرکردنەوەی ڕەخنەگرانەیە.",
    "en": "An e-library is more than just a digital collection, it demonstrates the relationship between science and technology. It encourages critical thinking and continuous learning, while helping students and researchers stay up-to-date on modern scientific developments.",
    "ar": "إن المكتبة الإلكترونية ليست مجرد مجموعة رقمية، بل هي تجسيد للعلاقة بين العلم والتكنولوجيا. فهي تشجع التفكير النقدي والتعلم المستمر.",
    "fa": "یک کتابخانه الکترونیکی چیزی بیش از یک مجموعه دیجیتال است، و رابطه بین علم و فناوری را نشان می‌دهد. این کتابخانه تفکر انتقادی و یادگیری مداوم را تشویق می‌کند.",
    "tr": "E-kütüphane, sadece dijital bir koleksiyon olmaktan öte, bilim ve teknoloji arasındaki ilişkiyi gösterir. Eleştirel düşünmeyi ve sürekli öğrenmeyi teşvik eder.",
  },
  introP4: {
    "ku-sorani": "ئەرکی ئێمە بنیاتنانی بۆشاییەکی ئەکادیمی پشتیوانەیە کە زانیاری بە ئازادی تێدا بەردەست بکرێت، بیرۆکەکان پەرەی پێبدرێت، و زانایانی داهاتوو بەهێز بکرێن. ئەم سیستەمە مۆدێرنە بۆ خزمەتی خوێنەرانی کۆلێژی زانست دروست کراوە.",
    "ku-badini": "میسیونا مە ئەوە کو ئەم قادەکا ئەکادیمی یا هاڤکار بیاڤرینین کو تێدا زانین ئازاد دبیت، ڕامان پێشڤە دچیت، و زانایێن پێشەڕۆژێ ژ بۆ کیفشکرن و نووژەنیێ تێنە هێزدارکرن.",
    "ku-badini-lat": "Erka me avakirina qadeke akademîk a piştgir e ku tê de agahî bi azadî peyda bibin, raman werin pêşxistin, û zanyarên pêşerojê werin hêzdar kirin.",
    "ku-hawrami": "ئەرکی ئێمە بنیاتنانی بۆشاییەکی ئەکادیمی پشتیوانەیە کە زانیاری بە ئازادی تێدا بەردەست بکرێت.",
    "en": "Our mission is to build a supportive academic space where information is freely available, ideas are developed, and future scientists are empowered to discover, innovate, and contribute to the advancement of science and society.",
    "ar": "مهمتنا هي بناء مساحة أكاديمية داعمة حيث تتوفر المعلومات بحرية، ويتم تطوير الأفكار، ويتم تمكين العلماء المستقبليين من الاكتشاف والابتكار.",
    "fa": "ماموریت ما ایجاد یک فضای دانشگاهی حمایتی است که در آن اطلاعات به صورت رایگان در دسترس باشد، ایده‌ها توسعه یابند و دانشمندان آینده توانمند شوند.",
    "tr": "Misyonumuz, bilginin özgürce erişilebildiği, fikirlerin geliştirildiği ve geleceğin bilim insanlarının keşfetme, yenilik yapma ve bilimin ilerlemesine katkıda bulunma konusunda güçlendirildiği destekleyici bir akademik alan oluşturmaktır.",
  },
  objTitle: {
    "ku-sorani": "ئامانجەکانی پڕۆژەکە:", "ku-badini": "ئارمانجێن پڕۆژەیێ:",
    "ku-badini-lat": "Armancên Projeyê:", "ku-hawrami": "ئامانجەکانی پرۆژەکە:",
    "en": "Project Objectives:", "ar": "أهداف المشروع:", "fa": "اهداف پروژه:", "tr": "Proje Hedefleri:",
  },
  objectives: {
    "ku-sorani": ["🎓 پشتگیریکردنی خوێندنی ئۆنلاین لە زانکۆ","⚡ بەردەستبوونی سەرچاوەی زانستی بە خێرایی و ئاسانی","📖 کۆکردنەوەی هەزاران سەرچاوەی زانستی لە یەک شوێن","📱 بەکارهێنانی تەکنەلۆژیای سەردەم QR code بۆ خزمەتی خوێندن","👨‍🏫 سوودمەندبوونی مامۆستایان و خوێندکاران لە پەرتووکخانەی دیجیتاڵی","⏰ پڕکردنەوەی کاتە بەتاڵەکانی خوێندکاران بە پڕۆژەیەکی زانستی","🌐 بەردەستبوونی پەرتووک و سەرچاوەکان بە هەموو زمانەکان"],
    "ku-badini": ["🎓 پشتگیریا پەروەردەهیا سەرھێل ل زانینگەھێ","⚡ هەبوونا بیلەز و هێسانا چاوکانیێن زانستی","📖 بەرھەڤکرنا بی هەزاران چاوکانیێن زانستی ل یەک جهێکی","📱 بکارئینانا تەکنەلۆژیا نووژەن QR code","👨‍🏫 سوودێن مامۆستا و خوێندکاران ژ کتێبخانەیێن دیجیتال","⏰ داگیرتنا دەمێ ڤالا یا خوێندکاران","🌐 هەبوونا کتێب و چاوکانییان بی هەمی زمانان"],
    "ku-badini-lat": ["🎓 Piştgirîkirina xwendina serhêl li zanko","⚡ Gihîştina zû û hêsan bo çavkaniyên zanistî","📖 Berhevkirina hezaran çavkaniyên zanistî di yek cihî de","📱 Bikaranîna teknolojiya nû QR code","👨‍🏫 Sûdwergirtina mamoste û xwendekaran ji kitêbxaneya dîjîtal","⏰ Tijîkirina demên vala yên xwendekaran bi projeyek zanistî","🌐 Berdestbûna pirtûk û çavkaniyan bi hemû zimanan"],
    "ku-hawrami": ["🎓 پشتگیری کردن بە خوێندنی ئۆنلاین لە زانکۆ","⚡ دەستڕەسیەتی خێرا و ئاسان بە سەرچاوەی زانستی","📖 کۆکردنەوەی هەزاران سەرچاوەی زانستی لە یەک شوێن","📱 بەکارهێنانی تەکنەلۆژیای نوی QR code","👨‍🏫 سوودگرتنی مامۆستایان و خوێندکاران لە کتێبخانەی دیجیتاڵ","⏰ پڕکردنی کاتی بەتاڵی خوێندکاران بە پرۆژەیەکی زانستی","🌐 بەردەستبوونی کتێب و سەرچاوەکان بە هەموو زمانەکان"],
    "en": ["🎓 Supporting online learning at universities","⚡ Quick and easy access to scientific resources","📖 Gathering thousands of scientific resources in one place","📱 Utilizing modern technology QR code to serve education","👨‍🏫 Benefiting teachers and students from digital library resources","⏰ Filling students' free time with scientific projects","🌐 Availability of books and resources in all languages"],
    "ar": ["🎓 دعم التعلم الإلكتروني في الجامعات","⚡ الوصول السريع والسهل إلى الموارد العلمية","📖 جمع آلاف الموارد العلمية في مكان واحد","📱 استخدام التكنولوجيا الحديثة QR code لخدمة التعليم","👨‍🏫 استفادة المدرسين والطلاب من موارد المكتبة الرقمية","⏰ ملء أوقات فراغ الطلاب بمشاريع علمية","🌐 توفر الكتب والموارد بجميع اللغات"],
    "fa": ["🎓 حمایت از یادگیری آنلاین در دانشگاه‌ها","⚡ دسترسی سریع و آسان به منابع علمی","📖 گردآوری هزاران منبع علمی در یک مکان","📱 استفاده از فناوری مدرن QR code","👨‍🏫 بهره‌مندی اساتید و دانشجویان از منابع کتابخانه دیجیتال","⏰ پر کردن اوقات فراغت دانشجویان با پروژه‌های علمی","🌐 در دسترس بودن کتاب‌ها و منابع به همه زبان‌ها"],
    "tr": ["🎓 Üniversitelerde çevrimiçi öğrenimi destekleme","⚡ Bilimsel kaynaklara hızlı ve kolay erişim","📖 Binlerce bilimsel kaynağı tek bir yerde toplama","📱 Modern teknolojiyi QR code eğitime hizmet için kullanma","👨‍🏫 Öğretmenlerin ve öğrencilerin dijital kütüphane kaynaklarından yararlanması","⏰ Öğrencilerin boş zamanlarını bilimsel projelerle değerlendirme","🌐 Kitap ve kaynakların tüm dillerde erişilebilir olması"],
  },
  teamTitle: {
    "ku-sorani": "ئامادەکراوە لەلایەن:", "ku-badini": "هاتیە ئامادەکرن ژ هێلا:",
    "ku-badini-lat": "Amadekirî ji aliyê:", "ku-hawrami": "ئامادەکراوە لەلایەن:",
    "en": "Prepared by:", "ar": "إعداد:", "fa": "تهیه شده توسط:", "tr": "Hazırlayanlar:",
  },
  teamMembers: {
    "ku-sorani": [
      { name: "ژیاو یوسف حسێن", role: "خوێندکاری بەشی بایۆلۆجی - دابینکردنی کتێب" },
      { name: "نیار قادر ڕەسوڵ", role: "خوێندکاری بەشی بایۆلۆجی - ڕێکخستنی کتێبخانە" },
      { name: "محمود خدر فقێ ڕەسوڵ", role: "خوێندکاری بەشی بایۆلۆجی ـ گەشەپێدەری وێبسایت", social: true },
    ],
    "ku-badini": [
      { name: "ژیاو یوسف حسێن", role: "خینکارێ بایۆلۆجیێ - دابینکرنا پرتوکان" },
      { name: "نیار قادر ڕەسوڵ", role: "خینکارێ بایۆلۆجیێ - ڕێکخستنا پرتوکخانەیێ" },
      { name: "محمود خدر فقێ ڕەسوڵ", role: "خینکارێ بایۆلۆجیێ - پێشدەبرێ مالپەرێ", social: true },
    ],
    "ku-badini-lat": [
      { name: "JIYAW YUSIF HUSÊN", role: "Xwendekarê Beşê Biyolojiyê - Dabînkirina pirtûkan" },
      { name: "NIYAR QADIR RASÛL", role: "Xwendekarê Beşê Biyolojiyê - Rêxistina kitêbxanê" },
      { name: "MEHMÛD XIDIR FAQÊ RASÛL", role: "Xwendekarê Beşê Biyolojiyê - Pêşxistinkarê malperê", social: true },
    ],
    "ku-hawrami": [
      { name: "ژیاو یوسف حسێن", role: "خوێندکاری بەشی بایۆلۆجی - دابینکردنی کتێب" },
      { name: "نیار قادر ڕەسوڵ", role: "خوێندکاری بەشی بایۆلۆجی - ڕێکخستنی کتێبخانە" },
      { name: "محمود خدر فقێ ڕەسوڵ", role: "خوێندکاری بەشی بایۆلۆجی - گەشەپێدەری وێبسایت", social: true },
    ],
    "en": [
      { name: "ZHYAW YUSF HUSEN", role: "Biology Department Student - Provision of books" },
      { name: "NYAR QADR RASUL", role: "Biology Department Student - Organization of the library" },
      { name: "MAHMOOD KHDIR FAQE RASUL", role: "Biology Department Student - Web Developer", social: true },
    ],
    "ar": [
      { name: "ژیاو یوسف حسێن", role: "طالب قسم علوم الحياة - توفير الكتب" },
      { name: "نیار قادر ڕەسوڵ", role: "طالبة قسم علوم الحياة - تنظيم المكتبة" },
      { name: "محمود خدر فقێ ڕەسوڵ", role: "طالب قسم علوم الحياة - مطور مواقع الويب", social: true },
    ],
    "fa": [
      { name: "ژیاو یوسف حسێن", role: "دانشجوی گروه زیست‌شناسی - تأمین کتاب‌ها" },
      { name: "نیار قادر ڕەسوڵ", role: "دانشجوی گروه زیست‌شناسی - سازماندهی کتابخانه" },
      { name: "محمود خدر فقێ ڕەسوڵ", role: "دانشجوی گروه زیست‌شناسی - توسعه‌دهنده وب", social: true },
    ],
    "tr": [
      { name: "ZHYAW YUSF HUSEN", role: "Biyoloji Bölümü Öğrencisi - Kitap temini" },
      { name: "NYAR QADR RASUL", role: "Biyoloji Bölümü Öğrencisi - Kütüphane organizasyonu" },
      { name: "MAHMOOD KHDIR FAQE RASUL", role: "Biyoloji Bölümü Öğrencisi - Web Geliştirici", social: true },
    ],
  },
  mainLibTitle: {
    "ku-sorani":"کتێبخانەی سەرەکی","ku-badini":"کتێبخانەیا سەرەکە",
    "ku-badini-lat":"Kitêbxaneya Sereke","ku-hawrami":"کتێبخانەی سەرەکی",
    "en":"Main Library","ar":"المكتبة الرئيسية","fa":"کتابخانه اصلی","tr":"Ana Kütüphane",
  },
  lib1Btn: {
    "ku-sorani":"چونە ناو کتێبخانەی گشتی ١","ku-badini":"بکەڤن کتێبخانەیا سەرەکە ١",
    "ku-badini-lat":"Têkeve Kitêbxaneya Giştî 1","ku-hawrami":"بچۆ ناو کتێبخانەی گشتی ١",
    "en":"Enter General Library 1","ar":"دخول إلى المكتبة العامة ١",
    "fa":"ورود به کتابخانه عمومی ۱","tr":"Genel Kütüphane 1'e Gir",
  },
  lib2Btn: {
    "ku-sorani":"چونە ناو کتێبخانەی گشتی ٢","ku-badini":"بکەڤن کتێبخانەیا سەرەکە ٢",
    "ku-badini-lat":"Têkeve Kitêbxaneya Giştî 2","ku-hawrami":"بچۆ ناو کتێبخانەی گشتی ٢",
    "en":"Enter General Library 2","ar":"دخول إلى المكتبة العامة ٢",
    "fa":"ورود به کتابخانه عمومی ۲","tr":"Genel Kütüphane 2'ye Gir",
  },
  deptTitle: {
    "ku-sorani":"بەشە زانستییەکان","ku-badini":"بەشێن زانستی",
    "ku-badini-lat":"Beşên Zanistî","ku-hawrami":"بەشەکانی زانستی",
    "en":"Scientific Departments","ar":"الأقسام العلمية","fa":"بخش‌های علمی","tr":"Bilim Bölümleri",
  },
  deptEnter: {
    "ku-sorani":"چونە ناو بەش","ku-badini":"بکەڤن بەشێ",
    "ku-badini-lat":"Têkeve Beşê","ku-hawrami":"بچۆ ناو بەش",
    "en":"Enter Department","ar":"دخول القسم","fa":"ورود به بخش","tr":"Bölüme Gir",
  },
  departments: {
    "ku-sorani": [
      { icon:"🧬", name:"کتێبخانەی بەشی بایۆلۆجی", desc:"پەرتووک و سەرچاوەکانی بواری بایۆلۆجی، بۆماوە، مایکرۆبایۆلۆجی و زیاتر", url:"https://drive.google.com/drive/folders/1daH4QdXeR7IglIiKeTNzjozlrqaRMXiN" },
      { icon:"⚗️", name:"کتێبخانەی بەشی کیمیا", desc:"سەرچاوەکانی کیمیای ئەندامی، نا ئەندامی، فیزیکی و کیمیای تاقیگەیی", url:"https://drive.google.com/drive/folders/18Bng-T1WJS7s_WQVKWqsCTFfsdFMFAqh" },
      { icon:"⚛️", name:"کتێبخانەی بەشی فیزیا", desc:"پەرتووکەکانی فیزیای کلاسیک، مۆدێرن، کوانتەم و فیزیای تاقیگەیی", url:"https://drive.google.com/drive/folders/1BrvmaZTBXwCzPWpp-lFqAxOFXX-NBByW" },
      { icon:"🔬", name:"کتێبخانەی بەشی زانستی تاقیگەی پزیشکی", desc:"سەرچاوەکانی شیکردنەوەی کلینیکی، میکرۆبایۆلۆجی پزیشکی و ڕێنماییەکان", url:"https://drive.google.com/drive/folders/1tR1dwkEy9M4yM3CBiwajDRQ4-lCtp13i" },
      { icon:"🏗️", name:"کتێبخانەی ئەندازیاری شارستانی", desc:"پەرتووکەکانی بواری ئەندازیاری شارستانی", url:"https://bio.site/civil.engineer" },
    ],
    "en": [
      { icon:"🧬", name:"Biology Department Library", desc:"Books and resources in life sciences, genetics, microbiology and more", url:"https://drive.google.com/drive/folders/1daH4QdXeR7IglIiKeTNzjozlrqaRMXiN" },
      { icon:"⚗️", name:"Chemistry Department Library", desc:"Resources for organic, inorganic, physical and laboratory chemistry", url:"https://drive.google.com/drive/folders/18Bng-T1WJS7s_WQVKWqsCTFfsdFMFAqh" },
      { icon:"⚛️", name:"Physics Department Library", desc:"Books on classical, modern, quantum and experimental physics", url:"https://drive.google.com/drive/folders/1BrvmaZTBXwCzPWpp-lFqAxOFXX-NBByW" },
      { icon:"🔬", name:"Medical Laboratory Science Department Library", desc:"Resources for clinical analysis, medical microbiology and guidelines", url:"https://drive.google.com/drive/folders/1tR1dwkEy9M4yM3CBiwajDRQ4-lCtp13i" },
      { icon:"🏗️", name:"Civil Engineering Library", desc:"Books and resources in the field of civil engineering", url:"https://bio.site/civil.engineer" },
    ],
    "ar": [
      { icon:"🧬", name:"مكتبة قسم علوم الحياة", desc:"الكتب والمصادر في علوم الحياة والوراثة والأحياء الدقيقة والمزيد", url:"https://drive.google.com/drive/folders/1daH4QdXeR7IglIiKeTNzjozlrqaRMXiN" },
      { icon:"⚗️", name:"مكتبة قسم الكيمياء", desc:"مصادر الكيمياء العضوية وغير العضوية والفيزيائية والمختبرية", url:"https://drive.google.com/drive/folders/18Bng-T1WJS7s_WQVKWqsCTFfsdFMFAqh" },
      { icon:"⚛️", name:"مكتبة قسم الفيزياء", desc:"كتب الفيزياء الكلاسيكية والحديثة والكمية والتجريبية", url:"https://drive.google.com/drive/folders/1BrvmaZTBXwCzPWpp-lFqAxOFXX-NBByW" },
      { icon:"🔬", name:"مكتبة قسم علوم المختبرات الطبية", desc:"مصادر التحليل السريري والأحياء الدقيقة الطبية والإرشادات", url:"https://drive.google.com/drive/folders/1tR1dwkEy9M4yM3CBiwajDRQ4-lCtp13i" },
      { icon:"🏗️", name:"مكتبة الهندسة المدنية", desc:"الكتب والمصادر في مجال الهندسة المدنية", url:"https://bio.site/civil.engineer" },
    ],
    "fa": [
      { icon:"🧬", name:"کتابخانه گروه زیست شناسی", desc:"کتاب‌ها و منابع در زمینه علوم زیستی، ژنتیک و میکروبیولوژی", url:"https://drive.google.com/drive/folders/1daH4QdXeR7IglIiKeTNzjozlrqaRMXiN" },
      { icon:"⚗️", name:"کتابخانه دانشکده شیمی", desc:"منابع شیمی آلی، معدنی، فیزیکی و آزمایشگاهی", url:"https://drive.google.com/drive/folders/18Bng-T1WJS7s_WQVKWqsCTFfsdFMFAqh" },
      { icon:"⚛️", name:"کتابخانه دانشکده فیزیک", desc:"کتاب‌های فیزیک کلاسیک، مدرن، کوانتوم و تجربی", url:"https://drive.google.com/drive/folders/1BrvmaZTBXwCzPWpp-lFqAxOFXX-NBByW" },
      { icon:"🔬", name:"کتابخانه گروه علوم آزمایشگاهی پزشکی", desc:"منابع آنالیز بالینی، میکروبیولوژی پزشکی و راهنماها", url:"https://drive.google.com/drive/folders/1tR1dwkEy9M4yM3CBiwajDRQ4-lCtp13i" },
      { icon:"🏗️", name:"کتابخانه مهندسی عمران", desc:"کتاب‌ها و منابع در حوزه مهندسی عمران", url:"https://bio.site/civil.engineer" },
    ],
    "tr": [
      { icon:"🧬", name:"Biyoloji Bölümü Kütüphanesi", desc:"Yaşam bilimleri, genetik, mikrobiyoloji ve daha fazlasında kaynaklar", url:"https://drive.google.com/drive/folders/1daH4QdXeR7IglIiKeTNzjozlrqaRMXiN" },
      { icon:"⚗️", name:"Kimya Bölümü Kütüphanesi", desc:"Organik, inorganik, fiziksel ve laboratuvar kimyası kaynakları", url:"https://drive.google.com/drive/folders/18Bng-T1WJS7s_WQVKWqsCTFfsdFMFAqh" },
      { icon:"⚛️", name:"Fizik Bölümü Kütüphanesi", desc:"Klasik, modern, kuantum ve deneysel fizik kitapları", url:"https://drive.google.com/drive/folders/1BrvmaZTBXwCzPWpp-lFqAxOFXX-NBByW" },
      { icon:"🔬", name:"Tıbbi Laboratuvar Bilimleri Bölümü Kütüphanesi", desc:"Klinik analiz, tıbbi mikrobiyoloji ve rehber kaynakları", url:"https://drive.google.com/drive/folders/1tR1dwkEy9M4yM3CBiwajDRQ4-lCtp13i" },
      { icon:"🏗️", name:"İnşaat Mühendisliği Kütüphanesi", desc:"İnşaat mühendisliği alanındaki kitaplar ve kaynaklar", url:"https://bio.site/civil.engineer" },
    ],
  },
  aboutTitle: {
    "ku-sorani":"👥 دەربارەی ئێمە","ku-badini":"👥 دەربارا مە",
    "ku-badini-lat":"👥 Derbarê Me","ku-hawrami":"👥 دەربارەی ئێمە",
    "en":"👥 About Us","ar":"👥 معلومات عنا","fa":"👥 درباره ما","tr":"👥 Hakkımızda",
  },
  aboutP: {
    "ku-sorani":"ئێمە وەک تیمی BioNova کە سێ خوێندکاری زانکۆین خولیای هاوبەشمان بۆ فێربوون و تەکنەلۆژیا هەیە. لە کاتی خوێندندا تێبینیمان کرد کە دۆزینەوەی سەرچاوەی متمانەپێکراو و باش و ڕێکخراو لە یەک شوێن زۆر ئەستەمە. ئەوەش ئیلهامبەخش بوو بۆ دروستکردنی ئەم پەرتووکخانە ئەلیکترۆنییە.",
    "ku-badini":"وەک تیما BioNova یا ژ سێ خوێندکارێن زانینگەهێ پێک تێ، ئەم ژ بۆ فێربوون و تەکنەلۆژیێ هەوەسەکا هەڤپار پارڤە دکین. د دەما خوێندنا خوە دە، مە دیت کو دیتنا چاوکانیێن پێباوەر و باش-رێخستینکری ل یەک جهێکی پیر دژوارە.",
    "ku-badini-lat":"Wek tîma BioNova ya ji sê xwendekarên zanîngehê pêk tê, em ji bo fêrbûn û teknolojiyê heweseke hevpar parve dikin. Di dema xwendina xwe de, me dît ku dîtina çavkaniyên pêbawer û baş-rêxistinkirî li yek cîhekî pir dijwar e.",
    "ku-hawrami":"ئێمە وەک تیمی BioNova سێ خوێندکاری زانکۆین کە خولیای هاوبەشمان بۆ فێربوون و تەکنەلۆژی هەیە.",
    "en":"We are three university students as BioNova team who share a passion for learning and technology. During our studies, we noticed that finding reliable, quality, and well-organized resources in one place was very difficult. This inspired us to create this electronic library.",
    "ar":"بصفتنا فريق BioNova المكون من ثلاثة طلاب جامعيين، نتشارك شغفًا بالتعلم والتكنولوجيا. خلال دراستنا، لاحظنا صعوبة بالغة في إيجاد مصادر موثوقة ومنظمة جيدًا في مكان واحد.",
    "fa":"به عنوان تیم BioNova متشکل از سه دانشجوی دانشگاه، ما اشتیاق مشترکی به یادگیری و فناوری داریم. در طول تحصیل، متوجه شدیم که یافتن منابع قابل اعتماد و منظم در یک مکان بسیار دشوار است.",
    "tr":"Üç üniversite öğrencisinden oluşan BioNova ekibi olarak, öğrenmeye ve teknolojiye olan tutkumuzu paylaşıyoruz. Öğrenimimiz sırasında, güvenilir ve iyi organize edilmiş kaynakları tek bir yerde bulmanın çok zor olduğunu fark ettik.",
  },
  missionTitle: {
    "ku-sorani":"ئامانجی ئێمە","ku-badini":"ئارمانجا مە",
    "ku-badini-lat":"Mîsyona Me","ku-hawrami":"ئامانجمان",
    "en":"Our Mission","ar":"مهمتنا","fa":"مأموریت ما","tr":"Misyonumuz",
  },
  mission: {
    "ku-sorani":'"کردنەوەی دەرگای زانیاری بۆ هەموو خوێندکارێک و دابینکردنی یەک پلاتفۆرم کە هەموو پێداویستییەکانی ئەکادیمی دابین بکات بە شێوەیەکی مۆدێرن و سەردەمیانە"',
    "ku-badini":'"ڤەکرنا دەریێ ئاگەهداریێ ژ بۆ هەموو خوێندکاران و پەیداکرنا پلاتفۆرمەک کو بی ئاڤایەکی مودێرن هەموو پێداڤیێن ئەکادیمی پێک تینە"',
    "ku-badini-lat":'"Deriyê agahdariyê ji bo her xwendekarekî vedike û platformek yekane peyda dike ku hemî hewcedariyên akademîk bi awayekî nûjen û hemdem pêk tîne"',
    "ku-hawrami":'"کردنەوەی دەرگای زانیاری بۆ هەموو خوێندکارێک و دابینکردنی یەک پلاتفۆرم کە هەموو پێداویستییەکانی ئەکادیمی دابین بکات بە شێوەیەکی مۆدێرن و سەردەمیانە"',
    "en":'"Opening the door to information for every student and providing a single platform that meets all academic needs in a modern and contemporary manner"',
    "ar":'"فتح الباب أمام المعلومات لكل طالب وتوفير منصة واحدة تلبي جميع الاحتياجات الأكاديمية بطريقة حديثة ومعاصرة"',
    "fa":'"گشودن دریچه‌ای به سوی اطلاعات برای هر دانش‌آموز و فراهم کردن بستری واحد که تمام نیازهای تحصیلی را به شیوه‌ای مدرن و امروزی برآورده می‌کند"',
    "tr":'"Her öğrenci için bilgiye erişim kapısını açmak ve tüm akademik ihtiyaçları modern ve çağdaş bir şekilde karşılayan tek bir platform sağlamak"',
  },
  footerText: {
    "ku-sorani":"کتێبخانەی ئەلیکترۆنی کۆلێژی زانست - زانکۆی ڕاپەڕین | هەموو مافەکان پارێزراون ©",
    "ku-badini":"کتێبخانەیا ئەلیکترۆنیکی یا کۆلێژا زانستێ - زانینگەها ڕاپەرین | هەموو ماف پاراستی نە ©",
    "ku-badini-lat":"Kitêbxaneya Elektronîkî ya Kolêja Zanistê - Zanîngeha Raperin | Hemû maf parastî ne ©",
    "ku-hawrami":"کتێبخانەی ئەلیکترۆنی کۆلێژی زانست - زانکۆی ڕاپەڕین | هەموو مافەکان پارێزراون ©",
    "en":"College of Science Electronic Library - Raparin University | All rights reserved ©",
    "ar":"المكتبة الإلكترونية لكلية العلوم - جامعة رابەرين | جميع الحقوق محفوظة ©",
    "fa":"کتابخانه الکترونیکی دانشکده علوم - دانشگاه راپەرین | تمامی حقوق محفوظ است ©",
    "tr":"Fen Fakültesi Elektronik Kütüphanesi - Raparin Üniversitesi | Tüm hakları saklıdır ©",
  },
  visitorLabel: {
    "ku-sorani":"سەردانکەر","ku-badini":"سەردانکار",
    "ku-badini-lat":"Serdankar","ku-hawrami":"سەردانکەر",
    "en":"Visitors","ar":"زائر","fa":"بازدیدکننده","tr":"Ziyaretçi",
  },
};

// Shared dept data for other dialects
["ku-badini","ku-badini-lat","ku-hawrami"].forEach(lang => {
  if (!T.departments[lang]) T.departments[lang] = T.departments["ku-sorani"].map((d,i) => ({
    ...d, name: T.departments["ku-sorani"][i].name, desc: T.departments["ku-sorani"][i].desc,
  }));
});

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=80",
  "https://images.unsplash.com/photo-1568667256531-2a3c7ccc9c11?w=1600&q=80",
];

/* ── Scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* ── Social Icons ── */
function SocialIcons() {
  return (
    <div className="social-icons-container">
      <a href="https://t.me/mahmod_faqe" target="_blank" rel="noreferrer" className="social-link" title="Telegram">
        <svg viewBox="0 0 24 24" fill="#0088cc"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.299z"/></svg>
      </a>
      <a href="https://www.facebook.com/Mahmod.Faqe" target="_blank" rel="noreferrer" className="social-link" title="Facebook">
        <svg viewBox="0 0 24 24" fill="#1877f2"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
      </a>
      <a href="https://wa.me/9647704692000" target="_blank" rel="noreferrer" className="social-link" title="WhatsApp">
        <svg viewBox="0 0 24 24" fill="#25D366"><path d="M12.004 0C5.374 0 .006 5.367.006 11.997c0 2.117.554 4.103 1.522 5.83L0 24l6.335-1.507a11.964 11.964 0 0 0 5.669 1.43h.005C18.634 23.923 24 18.557 24 11.928 24 5.368 18.634 0 12.004 0zm5.422 16.484c-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.457.13-.605.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51a12.1 12.1 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
      </a>
      <a href="tel:+9647507087901" className="social-link" title="Phone">
        <svg viewBox="0 0 24 24" fill="#4CAF50"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/></svg>
      </a>
      <a href="https://snapchat.com/add/mahmod.faqe" target="_blank" rel="noreferrer" className="social-link" title="Snapchat">
        <svg viewBox="0 0 496 512" fill="#FFFC00"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"/></svg>
      </a>
      <a href="https://www.tiktok.com/@mahmod.faqe" target="_blank" rel="noreferrer" className="social-link" title="TikTok">
        <svg viewBox="0 0 24 24" fill="#000000"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
      </a>
    </div>
  );
}

/* ── Main App ── */
export default function App() {
  const [lang, setLang] = useState("ku-sorani");
  const [kuOpen, setKuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const kuBtnRef = useRef(null);
  const dir = LANGS[lang]?.dir || "rtl";
  const t = k => T[k]?.[lang] || T[k]?.["ku-sorani"] || "";
  const depts = T.departments[lang] || T.departments["ku-sorani"];

  useReveal();

  /* inject CSS once */
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  /* scroll events */
  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollPct(pct);
      setShowTop(window.scrollY > 320);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* hero rotation */
  useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = e => { if (kuBtnRef.current && !kuBtnRef.current.contains(e.target)) setKuOpen(false); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const KU_DIALECTS = ["ku-sorani","ku-badini","ku-badini-lat","ku-hawrami"];
  const OTHER_LANGS = [["en","English"],["ar","العربية"],["fa","فارسی"],["tr","Türkçe"]];

  const switchLang = useCallback(l => { setLang(l); setKuOpen(false); }, []);

  const year = new Date().getFullYear();

  const btnBase = {
    fontFamily: "var(--font)", fontSize: "clamp(.52rem,1.4vw,.8rem)",
    minHeight: 30, padding: "6px 10px", borderRadius: 6,
    color: "#fff", border: "1px solid rgba(255,255,255,.2)",
    background: "rgba(255,255,255,.15)", cursor: "pointer",
    transition: "all .2s ease", whiteSpace: "nowrap",
  };
  const activeBtnStyle = { background: "rgba(255,255,255,.32)", borderColor: "rgba(255,255,255,.6)" };

  return (
    <div style={{ fontFamily: "var(--font)", background: "var(--bg-main)", color: "var(--text-main)", direction: dir, overflowX: "hidden" }}>

      {/* scroll progress */}
      <div id="scrollProgress" style={{ width: `${scrollPct}%` }} />

      {/* ── HEADER ── */}
      <header style={{ position:"sticky", top:0, zIndex:1000, background:"linear-gradient(135deg,#667eea,#764ba2)", boxShadow:"0 4px 24px rgba(102,126,234,.25)", backdropFilter:"blur(12px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"8px 20px", display:"flex", alignItems:"center", gap:12, flexWrap:"nowrap" }}>
          {/* Logo */}
          <a href="#" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", flexShrink:0 }}>
            <div style={{ width:46, height:46, borderRadius:"50%", background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>🏛️</div>
            <div style={{ display:"flex", flexDirection:"column", minWidth:0 }}>
              <span style={{ color:"#fff", fontWeight:700, fontSize:"clamp(.72rem,2.8vw,1.4rem)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{t("siteTitle")}</span>
              <span style={{ color:"rgba(255,255,255,.72)", fontSize:"clamp(.55rem,1.8vw,.9rem)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{t("siteSubtitle")}</span>
            </div>
          </a>

          <div style={{ width:1, background:"rgba(255,255,255,.3)", height:32, flexShrink:0 }} />

          {/* Lang switcher */}
          <div style={{ display:"flex", alignItems:"center", gap:6, marginInlineStart:"auto", flexShrink:0, flexWrap:"nowrap", overflowX:"auto" }}>

            {/* Kurdish group */}
            <div ref={kuBtnRef} style={{ position:"relative" }}>
              <button
                style={{ ...btnBase, ...(KU_DIALECTS.includes(lang) ? activeBtnStyle : {}), display:"flex", alignItems:"center", gap:4 }}
                onClick={() => setKuOpen(o => !o)}
              >
                کوردی <span style={{ fontSize:".5rem", transform: kuOpen ? "rotate(180deg)" : "", transition:"transform .3s" }}>▼</span>
              </button>
              {kuOpen && (
                <div className="ku-dropdown" style={{ top: (kuBtnRef.current?.getBoundingClientRect().bottom + 6) || 50, [dir==="rtl"?"right":"left"]: 0 }}>
                  {[["ku-sorani","سۆرانی","Soranî"],["ku-badini","بادینی","Kurmancî (عەرەبی)"],["ku-badini-lat","Badînî","Kurmancî (Latînî)"],["ku-hawrami","هەورامی","Hewramî"]].map(([l,n,s]) => (
                    <button key={l} onClick={() => switchLang(l)}
                      style={{ display:"block", width:"100%", background: lang===l?"rgba(255,255,255,.15)":"transparent", border:"none", color:"#fff", textAlign: l==="ku-badini-lat"?"left":"right", cursor:"pointer", padding:"8px 16px", fontFamily:"var(--font)", fontSize:"clamp(.58rem,1.4vw,.8rem)", minHeight:36 }}>
                      {n}<span style={{ display:"block", fontSize:".5em", opacity:.65, marginTop:2 }}>{s}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div style={{ width:1, background:"rgba(255,255,255,.25)", height:20, flexShrink:0 }} />

            {OTHER_LANGS.map(([l,label]) => (
              <button key={l} style={{ ...btnBase, ...(lang===l ? activeBtnStyle : {}) }} onClick={() => switchLang(l)}>{label}</button>
            ))}
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ position:"relative", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", color:"#fff", minHeight:"clamp(420px,65vh,680px)", padding:"clamp(6rem,14vw,11rem) 0 clamp(5rem,10vw,9rem)", backgroundImage:`url('${HERO_IMAGES[heroIdx]}')`, backgroundSize:"cover", backgroundPosition:"center", transition:"background-image 1.5s ease-in-out" }}>
        <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,.42)", zIndex:0 }} />
        <span className="mesh-blob" style={{ width:"45vw", height:"45vw", background:"rgba(255,255,255,.15)", top:"-10%", left:"-8%", animationDelay:"0s" }} />
        <span className="mesh-blob" style={{ width:"35vw", height:"35vw", background:"rgba(255,107,107,.2)", top:"20%", right:"-5%", animationDelay:"-4s" }} />
        <span className="mesh-blob" style={{ width:"30vw", height:"30vw", background:"rgba(255,255,255,.1)", bottom:"-10%", left:"30%", animationDelay:"-8s" }} />
        <div style={{ position:"relative", zIndex:2, maxWidth:900, padding:"0 20px" }} className="hero-content">
          <p style={{ opacity:.8, letterSpacing:3, marginBottom:8, fontSize:"clamp(1rem,3vw,1.3rem)" }}>{t("heroWelcome")}</p>
          <h1 style={{ fontWeight:700, marginBottom:24, lineHeight:1.3, fontSize:"clamp(2rem,7vw,4.2rem)" }}>{t("heroTitle")}</h1>
          <p style={{ opacity:.95, maxWidth:750, margin:"0 auto", fontSize:"clamp(.95rem,2.5vw,1.25rem)" }}>{t("heroSub")}</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ background:"#fff", padding:"clamp(3rem,8vw,6rem) 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px" }}>
          <div style={{ textAlign:"center", maxWidth:900, margin:"0 auto" }}>
            <h2 style={{ fontWeight:700, color:"var(--text-main)", marginBottom:32, fontSize:"clamp(1.7rem,4.5vw,2.4rem)" }}>{t("introTitle")}</h2>
            <div className="reveal shimmer-border" style={{ position:"relative", borderRadius:18, overflow:"hidden", background:"linear-gradient(145deg,#f5f7ff,#eef0f8)", padding:"clamp(1.5rem,5vw,3rem)", boxShadow:"0 8px 32px rgba(102,126,234,.15)" }}>
              {[t("introP1"),t("introP2"),t("introP3"),t("introP4")].map((p,i) => (
                <p key={i} style={{ color:"var(--text-light)", lineHeight:1.9, marginBottom:24, textAlign:"justify", fontSize:"clamp(.95rem,2.5vw,1.15rem)" }}>{p}</p>
              ))}

              {/* Objectives */}
              <div className="reveal" style={{ borderRadius:10, padding:24, marginBottom:24, border:"1px solid rgba(102,126,234,.16)", background:"rgba(102,126,234,.08)" }}>
                <h3 style={{ color:"var(--primary)", marginBottom:16, fontWeight:700, fontSize:"clamp(1.1rem,3vw,1.4rem)" }}>{t("objTitle")}</h3>
                <ul style={{ listStyle:"none", padding:0, textAlign:"start", color:"var(--text-light)", lineHeight:2, fontSize:"clamp(.9rem,2.5vw,1.05rem)" }}>
                  {(t("objectives")||[]).map((item,i) => (
                    <li key={i} style={{ marginBottom:4, paddingInlineStart:24 }}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Team */}
              <div className="reveal" style={{ borderRadius:10, padding:24, border:"1px solid rgba(255,107,107,.15)", background:"rgba(255,107,107,.07)" }}>
                <h3 style={{ color:"var(--accent)", marginBottom:16, fontWeight:700, fontSize:"clamp(1.1rem,3vw,1.4rem)" }}>{t("teamTitle")}</h3>
                <div style={{ display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fit,minmax(min(220px,100%),1fr))" }}>
                  {(T.teamMembers[lang]||T.teamMembers["ku-sorani"]).map((m,i) => (
                    <div key={i} className="team-card" style={{ textAlign:"center", padding:20, background:"#fff", borderRadius:12, boxShadow:"0 2px 12px rgba(0,0,0,.06)" }}>
                      <h4 style={{ color:"var(--text-main)", marginBottom:8, fontWeight:700, fontSize:"clamp(.9rem,2.5vw,1.05rem)" }}>{m.name}</h4>
                      <p style={{ color:"var(--text-light)", fontSize:"clamp(.8rem,2vw,.95rem)", margin:0 }}>{m.role}</p>
                      {m.social && <SocialIcons />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIBRARY BUTTONS ── */}
      <section style={{ padding:"clamp(1.5rem,4vw,3rem) 0", background:"linear-gradient(160deg,#f0f2ff,#e8ebff)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", textAlign:"center" }}>
          <div className="reveal">
            <h2 style={{ fontWeight:700, color:"var(--text-main)", marginBottom:24, fontSize:"clamp(1.7rem,4.5vw,2.4rem)" }}>{t("mainLibTitle")}</h2>
            <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
              {[
                { label: t("lib1Btn"), url: "https://drive.google.com/drive/folders/12PipzBzMVgfr1tFSy-4bplnVMnNHTy4d" },
                { label: t("lib2Btn"), url: "https://drive.google.com/drive/folders/1KkvwcZdKCZzV7gjExlnOdl1JnCELHCkC" },
              ].map((lb,i) => (
                <a key={i} href={lb.url} target="_blank" rel="noreferrer" className="main-library-btn"
                  style={{ display:"inline-block", fontWeight:700, color:"#fff", borderRadius:50, textDecoration:"none", textAlign:"center", background:"linear-gradient(135deg,#ff6b6b,#ee5a24)", padding:"clamp(.9rem,3vw,1.15rem) clamp(2rem,6vw,3rem)", fontSize:"clamp(.95rem,2.5vw,1.15rem)", boxShadow:"0 8px 24px rgba(255,107,107,.35)", minWidth:200, fontFamily:"var(--font)" }}>
                  {lb.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section style={{ padding:"clamp(2rem,5vw,4rem) 0", background:"linear-gradient(160deg,#f0f2ff,#e8ebff)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px" }}>
          <h2 className="reveal" style={{ textAlign:"center", fontWeight:700, color:"var(--text-main)", marginBottom:40, fontSize:"clamp(1.7rem,4.5vw,2.4rem)" }}>{t("deptTitle")}</h2>
          <div style={{ display:"grid", gap:20, gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))" }}>
            {depts.map((dept,i) => (
              <div key={i} className="section-card card-top-bar reveal" style={{ position:"relative", display:"flex", flexDirection:"column", justifyContent:"space-between", background:"rgba(255,255,255,.88)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,.7)", borderRadius:18, textAlign:"center", padding:"clamp(1.5rem,4vw,2.2rem)", minHeight:280, boxShadow:"0 4px 16px rgba(102,126,234,.1)" }}>
                <div>
                  <span style={{ display:"block", fontSize:48, marginBottom:16, transition:"transform .3s ease" }}>{dept.icon}</span>
                  <h3 style={{ fontWeight:700, color:"var(--text-main)", marginBottom:12, fontSize:"clamp(1.05rem,3vw,1.35rem)" }}>{dept.name}</h3>
                  <p style={{ color:"var(--text-light)", marginBottom:16, lineHeight:1.65, fontSize:"clamp(.88rem,2.2vw,.98rem)" }}>{dept.desc}</p>
                </div>
                <a href={dept.url} target="_blank" rel="noreferrer"
                  style={{ display:"inline-block", fontWeight:600, color:"#fff", borderRadius:50, textDecoration:"none", textAlign:"center", background:"linear-gradient(135deg,var(--primary),var(--secondary))", padding:"clamp(.6rem,2.2vw,.85rem) clamp(1.3rem,3.5vw,1.9rem)", fontSize:"clamp(.85rem,2.2vw,.95rem)", minWidth:130, boxShadow:"0 4px 14px rgba(102,126,234,.28)", fontFamily:"var(--font)", transition:"transform .2s ease" }}>
                  {t("deptEnter")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background:"#fff", padding:"clamp(3rem,8vw,6rem) 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px" }}>
          <div style={{ maxWidth:900, margin:"0 auto" }}>
            <h2 style={{ fontWeight:700, color:"var(--text-main)", marginBottom:32, textAlign:"center", fontSize:"clamp(1.7rem,4.5vw,2.4rem)" }}>{t("aboutTitle")}</h2>
            <div className="reveal" style={{ position:"relative", borderRadius:18, overflow:"hidden", background:"linear-gradient(145deg,#f5f7ff,#eef0f8)", padding:"clamp(1.5rem,5vw,3rem)", boxShadow:"0 8px 32px rgba(102,126,234,.15)" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,var(--primary),var(--secondary))" }} />
              <p style={{ color:"var(--text-light)", lineHeight:1.9, marginBottom:24, textAlign:"justify", fontSize:"clamp(.95rem,2.5vw,1.15rem)" }}>{t("aboutP")}</p>
              <div style={{ borderRadius:10, padding:24, background:"rgba(102,126,234,.09)", border:"1px solid rgba(102,126,234,.16)" }}>
                <h3 style={{ color:"var(--primary)", marginBottom:12, textAlign:"center", fontWeight:700, fontSize:"clamp(1.1rem,3vw,1.35rem)" }}>{t("missionTitle")}</h3>
                <p style={{ color:"var(--text-light)", margin:0, fontStyle:"italic", textAlign:"justify", fontSize:"clamp(.95rem,2.5vw,1.15rem)" }}>{t("mission")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:"linear-gradient(135deg,#1e1e2e,#2d2b4e)", color:"rgba(255,255,255,.82)", textAlign:"center", padding:"clamp(1.5rem,4vw,2.2rem) 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px" }}>
          <p style={{ fontSize:"clamp(.85rem,2vw,.95rem)", margin:0 }}>{t("footerText")} {year}</p>
          <div style={{ marginTop:12, display:"flex", alignItems:"center", justifyContent:"center", gap:12, opacity:.75 }}>
            <span>👁</span>
            <div style={{ display:"flex", alignItems:"center", gap:12, borderRadius:50, border:"1px solid rgba(255,255,255,.2)", padding:"6px 16px", background:"rgba(255,255,255,.12)", fontSize:"1rem", color:"rgba(255,255,255,.85)" }}>
              <img src="https://mahmodfaqe.goatcounter.com/counter/TOTAL.svg" alt="visitors" style={{ height:40, width:"auto", verticalAlign:"middle" }} />
              <span>{t("visitorLabel")}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button id="scrollTopBtn" className={showTop ? "visible" : ""} onClick={() => window.scrollTo({ top:0, behavior:"smooth" })} aria-label="scroll to top">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Goat counter */}
      <script data-goatcounter="https://mahmodfaqe.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
    </div>
  );
}