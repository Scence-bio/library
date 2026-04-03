import { useEffect } from 'react';

const SocialIcons = () => (
  <div className="social-icons-container">
    <a href="https://t.me/mahmod_faqe" target="_blank" title="Telegram" className="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0088cc" width="30" height="30"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.299z"/></svg>
    </a>
    <a href="https://www.facebook.com/Mahmod.Faqe" target="_blank" title="Facebook" className="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877f2" width="30" height="30"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
    </a>
    <a href="https://wa.me/9647704692000" target="_blank" title="WhatsApp" className="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" width="30" height="30"><path d="M12.004 0C5.374 0 .006 5.367.006 11.997c0 2.117.554 4.103 1.522 5.83L0 24l6.335-1.507a11.964 11.964 0 0 0 5.669 1.43h.005C18.634 23.923 24 18.557 24 11.928 24 5.368 18.634 0 12.004 0zm0 21.887a9.916 9.916 0 0 1-5.058-1.383l-.362-.215-3.757.984 1.003-3.651-.236-.374a9.884 9.884 0 0 1-1.517-5.251c0-5.455 4.439-9.893 9.894-9.893 5.455 0 9.893 4.438 9.893 9.893 0 5.456-4.438 9.89-9.86 9.89zm5.422-7.403c-.297-.149-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.457.13-.605.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51a12.1 12.1 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
    </a>
    <a href="tel:+9647507087901" title="Phone" className="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4CAF50" width="30" height="30"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/></svg>
    </a>
    <a href="https://snapchat.com/add/mahmod.faqe" target="_blank" title="Snapchat" className="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="#FFFC00" width="30" height="30"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"/></svg>
    </a>
    <a href="https://www.tiktok.com/@mahmod.faqe" target="_blank" title="TikTok" className="social-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="30" height="30"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
    </a>
  </div>
);

const VISITOR_LABELS = {
  'ku-sorani': 'سەردانکەر', 'ku-badini': 'سەردانکار',
  'ku-badini-lat': 'Serdankar', 'ku-hawrami': 'سەردانکەر',
  'en': 'Visitors', 'ar': 'زائر', 'fa': 'بازدیدکننده', 'tr': 'Ziyaretçi'
};

const LTR_LANGS = ['en', 'tr', 'ku-badini-lat'];
const KU_DIALECTS = ['ku-sorani', 'ku-badini', 'ku-badini-lat', 'ku-hawrami'];

export default function App() {
  useEffect(() => {
    // Footer years
    const y = new Date().getFullYear();
    const toAr = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    document.querySelectorAll('.footer-year-en').forEach(el => el.textContent = y);
    document.querySelectorAll('.footer-year-ar').forEach(el => el.textContent = toAr(y));

    // Scroll progress
    const bar = document.getElementById('scrollProgress');
    const onScroll = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = pct + '%';
      const btn = document.getElementById('scrollTopBtn');
      if (btn) btn.classList.toggle('visible', window.scrollY > 320);
      const hdr = document.getElementById('site-header');
      if (hdr) hdr.style.boxShadow = window.scrollY > 40
        ? '0 6px 36px rgba(60,40,100,0.28)'
        : '0 4px 24px rgba(102,126,234,0.25)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Scroll to top
    const btn = document.getElementById('scrollTopBtn');
    if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Scroll reveal
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Hero background rotation
    const images = ['file/image1.webp', 'file/image2.webp', 'file/image3.webp', 'file/image4.webp'];
    let idx = 0;
    const hero = document.getElementById('hero-section');
    const interval = setInterval(() => {
      idx = (idx + 1) % images.length;
      if (hero) hero.style.backgroundImage = `url('${images[idx]}')`;
    }, 5000);

    // Language system
    const savedLang = sessionStorage.getItem('selectedLanguage') || 'ku-sorani';
    applyLanguage(savedLang);
    restoreButtons(savedLang);

    // Keyboard nav
    const onKey = e => { if (e.key === 'Tab') document.body.classList.add('keyboard-nav'); };
    const onMouse = () => document.body.classList.remove('keyboard-nav');
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onMouse);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onMouse);
    };
  }, []);

  return (
    <div className="bg-[#f8f9ff] text-[#2d2d3a] overflow-x-hidden" dir="rtl">
      <div id="scrollProgress"></div>

      {/* HEADER */}
      <header id="site-header" className="sticky top-0 z-[1000] backdrop-blur-md transition-shadow duration-300"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 4px 24px rgba(102,126,234,0.25)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-4 flex-nowrap">
            <a className="logo-link flex items-center gap-1.5 sm:gap-2.5 flex-shrink min-w-0 no-underline" href="#">
              <img src="file/uor-logo.png" alt="University of Raparin Logo" className="uor-logo object-contain flex-shrink-0" style={{ height: 'clamp(34px,7.5vw,62px)' }} />
              <div className="flex flex-col min-w-0 flex-shrink">
                <span className="logo-title logo-title-el font-bold text-white leading-tight overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontSize: 'clamp(0.72rem,2.8vw,1.4rem)' }}>
                  <span className="lang-content active" data-lang="ku-sorani">زانکۆی ڕاپەڕین</span>
                  <span className="lang-content" data-lang="ku-badini">زانینگەها ڕاپەرین</span>
                  <span className="lang-content" data-lang="ku-badini-lat">Zanîngeha Raperin</span>
                  <span className="lang-content" data-lang="ku-hawrami">زانکۆی ڕاپەڕین</span>
                  <span className="lang-content" data-lang="en">University of Raparin</span>
                  <span className="lang-content" data-lang="ar">جامعة رابەرين</span>
                  <span className="lang-content" data-lang="fa">دانشگاه راپەرین</span>
                  <span className="lang-content" data-lang="tr">Raparin Üniversitesi</span>
                </span>
                <span className="logo-subtitle logo-sub-el block mt-1 overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontSize: 'clamp(0.55rem,1.8vw,0.9rem)', color: 'rgba(255,255,255,0.72)' }}>
                  <span className="lang-content active" data-lang="ku-sorani">کتێبخانەی ئەلیکترۆنی</span>
                  <span className="lang-content" data-lang="ku-badini">پرتوکخانەیا ئەلیکترۆنیک</span>
                  <span className="lang-content" data-lang="ku-badini-lat">Kitêbxaneya Elektronîkî</span>
                  <span className="lang-content" data-lang="ku-hawrami">کتێبخانەی ئەلیکترۆنی</span>
                  <span className="lang-content" data-lang="en">Electronic Library</span>
                  <span className="lang-content" data-lang="ar">المكتبة الإلكترونية</span>
                  <span className="lang-content" data-lang="fa">کتابخانه الکترونیکی</span>
                  <span className="lang-content" data-lang="tr">Elektronik Kütüphane</span>
                </span>
              </div>
            </a>
            <div className="flex-shrink-0 w-px bg-white/30" style={{ height: 'clamp(22px,5vw,36px)' }}></div>
            <div className="flex items-center gap-1 flex-nowrap ms-auto flex-shrink-0">
              <div className="relative" id="kuGroup">
                <button id="kuMainBtn"
                  className="active flex items-center gap-1 px-2 py-1.5 rounded-md text-white border border-white/20 bg-white/15 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:shadow-md font-[inherit]"
                  style={{ fontSize: 'clamp(0.52rem,1.4vw,0.8rem)', minHeight: '30px' }}
                  onClick={() => toggleKuDropdown()}>
                  کوردی <span className="text-[0.5rem] transition-transform duration-300" id="kuArrow">▼</span>
                </button>
                <div className="ku-dropdown" id="kuDropdown">
                  {[
                    { lang: 'ku-sorani', label: 'سۆرانی', sub: 'Soranî' },
                    { lang: 'ku-badini', label: 'بادینی', sub: 'Kurmancî (عەرەبی)' },
                    { lang: 'ku-badini-lat', label: 'Badînî', sub: 'Kurmancî (Latînî)', ltr: true },
                    { lang: 'ku-hawrami', label: 'هەورامی', sub: 'Hewramî' },
                  ].map(d => (
                    <button key={d.lang}
                      className={`ku-dialect-btn block w-full bg-transparent border-0 text-white cursor-pointer transition-colors duration-200 hover:bg-white/15 font-[Rabar,sans-serif] ${d.ltr ? 'text-left' : 'text-right'}`}
                      style={{ padding: 'clamp(0.38rem,1.2vw,0.55rem) clamp(0.6rem,2vw,1rem)', fontSize: 'clamp(0.58rem,1.4vw,0.8rem)', minHeight: '36px' }}
                      data-lang={d.lang}
                      onClick={e => selectDialect(d.lang, e.currentTarget)}>
                      {d.label}<span className="block text-[0.5em] opacity-65 mt-px">{d.sub}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 w-px bg-white/25 mx-1" style={{ height: 'clamp(16px,3.5vw,22px)' }}></div>
              <div className="flex items-center gap-1 flex-nowrap overflow-x-auto" style={{ scrollbarWidth: 'none', maxWidth: 'clamp(100px,40vw,400px)' }}>
                {[{ lang: 'en', label: 'English' }, { lang: 'ar', label: 'العربية' }, { lang: 'fa', label: 'فارسی' }, { lang: 'tr', label: 'Türkçe' }].map(l => (
                  <button key={l.lang}
                    className="lang-btn px-2 py-1.5 rounded-md text-white border border-white/20 bg-white/15 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:shadow-md whitespace-nowrap flex-shrink-0 font-[inherit]"
                    style={{ fontSize: 'clamp(0.52rem,1.4vw,0.8rem)', minHeight: '30px' }}
                    data-lang={l.lang}
                    onClick={() => switchLang(l.lang)}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero-section" className="relative overflow-hidden flex items-center text-white text-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: "url('file/image1.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: 'clamp(6rem,14vw,11rem) 0 clamp(5rem,10vw,9rem)', minHeight: 'clamp(420px,65vh,680px)' }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="mesh-blob" style={{ width:'45vw',height:'45vw',background:'rgba(255,255,255,0.15)',top:'-10%',left:'-8%',animationDelay:'0s' }}></span>
          <span className="mesh-blob" style={{ width:'35vw',height:'35vw',background:'rgba(255,107,107,0.2)',top:'20%',right:'-5%',animationDelay:'-4s' }}></span>
          <span className="mesh-blob" style={{ width:'30vw',height:'30vw',background:'rgba(255,255,255,0.1)',bottom:'-10%',left:'30%',animationDelay:'-8s' }}></span>
        </div>
        <div className="container mx-auto relative z-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="lang-content active" data-lang="ku-sorani" style={{ direction:'rtl' }}>
              <h2 className="opacity-80 tracking-widest mb-2" style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>بەخێربێن بۆ</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>کتێبخانەی ئەلیکترۆنی کۆلێژی زانست</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>بەردەستبوون و کۆکردنەوەی هەزاران سەرچاوە و پەرتووکی زانستی بە شێوەیەکی ئاسان و خێرا.</p>
            </div>
            <div className="lang-content" data-lang="ku-badini" style={{ direction:'rtl' }}>
              <h2 style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>بخێر هاتن بۆ</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>کتێبخانەیا ئەلیکترۆنیکی یا کۆلێژا زانستێ</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>بهێسانی و زو پەیدابوونا بی هەزاران چاوکانی و پەرتوکین زانستی.</p>
            </div>
            <div className="lang-content" data-lang="ku-badini-lat" style={{ direction:'ltr' }}>
              <h2 style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>Bi xêr hatin</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>Kitêbxaneya Elektronîkî ya Kolêja Zanistê</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>Bigihîje hezaran çavkanî û pirtûkên zanistî bi awayekî hêsan û bilez.</p>
            </div>
            <div className="lang-content" data-lang="ku-hawrami" style={{ direction:'rtl' }}>
              <h2 style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>خۆش بگەیەیت بۆ</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>کتێبخانەی ئەلیکترۆنی کۆلێژی زانست</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>دەستڕەسیەتی بە هەزاران سەرچاوە و پەرتووکی زانستی بە شێوەیەکی ئاسان و خێرا.</p>
            </div>
            <div className="lang-content" data-lang="en" style={{ direction:'ltr' }}>
              <h2 style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>Welcome To</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>College of Science Electronic Library</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>Access and gather thousands of scientific resources and books easily and quickly.</p>
            </div>
            <div className="lang-content" data-lang="ar" style={{ direction:'rtl' }}>
              <h2 style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>مرحبا بكم في</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>المكتبة الإلكترونية لكلية العلوم</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>الوصول وتجميع آلاف المصادر والكتب العلمية بسهولة وسرعة.</p>
            </div>
            <div className="lang-content" data-lang="fa" style={{ direction:'rtl' }}>
              <h2 style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>خوش آمدید به</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>کتابخانه الکترونیکی دانشکده علوم</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>دسترسی و گردآوری هزاران منبع و کتاب علمی به آسانی و سرعت.</p>
            </div>
            <div className="lang-content" data-lang="tr" style={{ direction:'ltr' }}>
              <h2 style={{ fontSize:'clamp(1rem,3vw,1.3rem)' }}>Hoş Geldiniz</h2>
              <h1 className="font-bold mb-6 leading-tight" style={{ fontSize:'clamp(2.5rem,8vw,4.5rem)' }}>Fen Fakültesi Elektronik Kütüphanesi</h1>
              <p className="mb-8 opacity-95 mx-auto max-w-3xl" style={{ fontSize:'clamp(0.95rem,2.5vw,1.25rem)' }}>Binlerce bilimsel kaynak ve kitaba kolayca ve hızlıca erişin ve toplayın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white" style={{ padding:'clamp(3rem,8vw,6rem) 0' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <IntroSection />
        </div>
      </section>

      {/* LIBRARY 1 */}
      <section style={{ padding:'clamp(1rem,4vw,0.5rem) 0', background:'linear-gradient(160deg, #f0f2ff 0%, #e8ebff 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            {libBtns.map(b => (
              <div key={b.lang} className={`lang-content${b.active ? ' active' : ''}`} style={{ direction: b.dir }} data-lang={b.lang}>
                <h2 className="font-bold text-[#2d2d3a] mb-6" style={{ fontSize:'clamp(1.7rem,4.5vw,2.4rem)' }}>{b.title1}</h2>
                <a href="https://drive.google.com/drive/folders/12PipzBzMVgfr1tFSy-4bplnVMnNHTy4d"
                  className="main-library-btn relative inline-block font-bold text-white rounded-full no-underline text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03]"
                  style={{ background:'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)', padding:'clamp(0.9rem,3vw,1.15rem) clamp(2rem,6vw,3rem)', fontSize:'clamp(0.95rem,2.5vw,1.15rem)', boxShadow:'0 8px 24px rgba(255,107,107,0.35)', minWidth:'200px' }}
                  target="_blank">{b.btn1}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARY 2 + DEPARTMENTS */}
      <section style={{ padding:'clamp(1rem,4vw,3rem) 0', background:'linear-gradient(160deg, #f0f2ff 0%, #e8ebff 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            {libBtns.map(b => (
              <div key={b.lang} className={`lang-content${b.active ? ' active' : ''}`} style={{ direction: b.dir }} data-lang={b.lang}>
                <a href="https://drive.google.com/drive/folders/1KkvwcZdKCZzV7gjExlnOdl1JnCELHCkC"
                  className="main-library-btn relative inline-block font-bold text-white rounded-full no-underline text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03]"
                  style={{ background:'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)', padding:'clamp(0.9rem,3vw,1.15rem) clamp(2rem,6vw,3rem)', fontSize:'clamp(0.95rem,2.5vw,1.15rem)', boxShadow:'0 8px 24px rgba(255,107,107,0.35)', minWidth:'200px' }}
                  target="_blank">{b.btn2}</a>
              </div>
            ))}
          </div>
          <DepartmentsSection />
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white" style={{ padding:'clamp(3rem,8vw,6rem) 0' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <AboutSection />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center" style={{ background:'linear-gradient(135deg, #1e1e2e 0%, #2d2b4e 100%)', color:'rgba(255,255,255,0.82)', padding:'clamp(1.5rem,4vw,2.2rem) 0' }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="lang-content active" style={{ direction:'rtl' }} data-lang="ku-sorani"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>کتێبخانەی ئەلیکترۆنی کۆلێژی زانست - زانکۆی ڕاپەڕین &nbsp;|&nbsp; هەموو مافەکان پارێزراون © <span className="footer-year-ar"></span></p></div>
          <div className="lang-content" style={{ direction:'rtl' }} data-lang="ku-badini"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>کتێبخانەیا ئەلیکترۆنیکی یا کۆلێژا زانستێ - زانینگەها ڕاپەرین &nbsp;|&nbsp; هەموو ماف پاراستی نە © <span className="footer-year-ar"></span></p></div>
          <div className="lang-content" style={{ direction:'ltr' }} data-lang="ku-badini-lat"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>Kitêbxaneya Elektronîkî ya Kolêja Zanistê - Zanîngeha Raperin &nbsp;|&nbsp; Hemû maf parastî ne © <span className="footer-year-en"></span></p></div>
          <div className="lang-content" style={{ direction:'rtl' }} data-lang="ku-hawrami"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>کتێبخانەی ئەلیکترۆنی کۆلێژی زانست - زانکۆی ڕاپەڕین &nbsp;|&nbsp; هەموو مافەکان پارێزراون © <span className="footer-year-ar"></span></p></div>
          <div className="lang-content" style={{ direction:'ltr' }} data-lang="en"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>College of Science Electronic Library - Raparin University &nbsp;|&nbsp; All rights reserved © <span className="footer-year-en"></span></p></div>
          <div className="lang-content" style={{ direction:'rtl' }} data-lang="ar"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>المكتبة الإلكترونية لكلية العلوم - جامعة رابەرين &nbsp;|&nbsp; جميع الحقوق محفوظة © <span className="footer-year-ar"></span></p></div>
          <div className="lang-content" style={{ direction:'rtl' }} data-lang="fa"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>کتابخانه الکترونیکی دانشکده علوم - دانشگاه راپەرین &nbsp;|&nbsp; تمامی حقوق محفوظ است © <span className="footer-year-ar"></span></p></div>
          <div className="lang-content" style={{ direction:'ltr' }} data-lang="tr"><p style={{ fontSize:'clamp(0.85rem,2vw,0.95rem)' }}>Fen Fakültesi Elektronik Kütüphanesi - Raparin Üniversitesi &nbsp;|&nbsp; Tüm hakları saklıdır © <span className="footer-year-en"></span></p></div>
          <div className="mt-3 flex items-center justify-center gap-3 opacity-75 hover:opacity-100 transition-opacity duration-300">
            <span style={{ fontSize:'1rem' }}>👁</span>
            <div className="flex items-center gap-3 no-underline rounded-full border border-white/20 px-4 py-1.5" style={{ background:'rgba(255,255,255,0.12)', fontSize:'1rem', color:'rgba(255,255,255,0.85)' }}>
              <img src="https://mahmodfaqe.goatcounter.com/counter/TOTAL.svg" alt="visitor count" className="h-[40px] w-auto align-middle" />
              <span id="visitor-label">سەردانکەر</span>
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL TOP */}
      <button id="scrollTopBtn" title="بگەڕێوە سەرەوە" aria-label="بگەڕێوە سەرەوە">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}

// ── helper data ──────────────────────────────────────────────
const libBtns = [
  { lang:'ku-sorani', active:true, dir:'rtl', title1:'کتێبخانەی سەرەکی', btn1:'چونە ناو کتێبخانەی گشتی ١', btn2:'چونە ناو کتێبخانەی گشتی ٢' },
  { lang:'ku-badini', dir:'rtl', title1:'کتێبخانەیا سەرەکە', btn1:'بکەڤن کتێبخانەیا سەرەکە ١', btn2:'بکەڤن کتێبخانەیا سەرەکە ٢' },
  { lang:'ku-badini-lat', dir:'ltr', title1:'Kitêbxaneya Sereke', btn1:'Têkeve Kitêbxaneya Giştî 1', btn2:'Têkeve Kitêbxaneya Giştî 2' },
  { lang:'ku-hawrami', dir:'rtl', title1:'کتێبخانەی سەرەکی', btn1:'بچۆ ناو کتێبخانەی گشتی ١', btn2:'بچۆ ناو کتێبخانەی گشتی ٢' },
  { lang:'en', dir:'ltr', title1:'Main Library', btn1:'Enter General Library 1', btn2:'Enter General Library 2' },
  { lang:'ar', dir:'rtl', title1:'المكتبة الرئيسية', btn1:'دخول إلى المكتبة العامة ١', btn2:'دخول إلى المكتبة العامة ٢' },
  { lang:'fa', dir:'rtl', title1:'کتابخانه اصلی', btn1:'ورود به کتابخانه عمومی ۱', btn2:'ورود به کتابخانه عمومی ۲' },
  { lang:'tr', dir:'ltr', title1:'Ana Kütüphane', btn1:"Genel Kütüphane 1'e Gir", btn2:"Genel Kütüphane 2'ye Gir" },
];

const depts = [
  { emoji:'🧬', links: { ku:'کتێبخانەی بەشی بایۆلۆجی', en:'Biology Department Library', ar:'مكتبة قسم علوم الحياة', fa:'کتابخانه گروه زیست شناسی', tr:'Biyoloji Bölümü Kütüphanesi', badini:'بەشێ بایۆلۆجیێ', badini_lat:'Pirtûkxaneya Beşa Biyolojiyê', hawrami:'کتێبخانەیا بەشی بایۆلۆجی' },
    desc: { ku:'پەرتووک و سەرچاوەکانی بواری بایۆلۆجی، بۆماوە، مایکرۆبایۆلۆجی و زیاتر', en:'Books and resources in life sciences, genetics, microbiology and more', ar:'الكتب والمصادر في علوم الحياة والوراثة والأحياء الدقيقة', fa:'کتاب‌ها و منابع در زمینه علوم زیستی، ژنتیک و میکروبیولوژی', tr:'Yaşam bilimleri, genetik, mikrobiyoloji kaynaklarda', badini:'پرتوک و چاوکانیێن زانستێن ژیانێ', badini_lat:'Pirtûk û çavkaniyên zanistên jiyanê', hawrami:'کتێب و سەرچاوەکانی زانستی ژیان' },
    href:'https://drive.google.com/drive/folders/1daH4QdXeR7IglIiKeTNzjozlrqaRMXiN' },
  { emoji:'⚗️', links: { ku:'کتێبخانەی بەشی کیمیا', en:'Chemistry Department Library', ar:'مكتبة قسم الكيمياء', fa:'کتابخانه دانشکده شیمی', tr:'Kimya Bölümü Kütüphanesi', badini:'بەشێ کیمیایێ', badini_lat:'Pirtûkxaneya Beşa Kimyayê', hawrami:'کتێبخانەیا بەشی کیمیا' },
    desc: { ku:'سەرچاوەکانی کیمیای ئەندامی، نا ئەندامی، فیزیکی و کیمیای تاقیگەیی', en:'Resources for organic, inorganic, physical and laboratory chemistry', ar:'مصادر الكيمياء العضوية وغير العضوية والفيزيائية', fa:'منابع شیمی آلی، معدنی، فیزیکی و آزمایشگاهی', tr:'Organik, inorganik, fiziksel kimya kaynakları', badini:'چاوکانیێن کیمیایا ئەندامی، نائەندامی', badini_lat:'Çavkaniyên kimyaya organîk, neorganîk', hawrami:'سەرچاوەکانی کیمیای ئەندامی، نائەندامی' },
    href:'https://drive.google.com/drive/folders/18Bng-T1WJS7s_WQVKWqsCTFfsdFMFAqh' },
  { emoji:'⚛️', links: { ku:'کتێبخانەی بەشی فیزیا', en:'Physics Department Library', ar:'مكتبة قسم الفيزياء', fa:'کتابخانه دانشکده فیزیک', tr:'Fizik Bölümü Kütüphanesi', badini:'بەشێ فیزیایێ', badini_lat:'Pirtûkxaneya Beşa Fîzîkê', hawrami:'کتێبخانەیا بەشی فیزیکا' },
    desc: { ku:'پەرتووکەکانی فیزیای کلاسیک، مۆدێرن، کوانتەم و فیزیای تاقیگەیی', en:'Books on classical, modern, quantum and experimental physics', ar:'كتب الفيزياء الكلاسيكية والحديثة والكمية', fa:'کتاب‌های فیزیک کلاسیک، مدرن، کوانتوم و تجربی', tr:'Klasik, modern, kuantum ve deneysel fizik kitapları', badini:'پرتوکێن فیزیایا کلاسیک، مودێرن، کوانتوم', badini_lat:'Pirtûkên fîzîka klasîk, modern, kuantum', hawrami:'کتێبەکانی فیزیکای کلاسیک، مۆدێرن، کوانتوم' },
    href:'https://drive.google.com/drive/folders/1BrvmaZTBXwCzPWpp-lFqAxOFXX-NBByW' },
  { emoji:'🔬', links: { ku:'کتێبخانەی بەشی زانستی تاقیگەی پزیشکی', en:'Medical Laboratory Science Department Library', ar:'مكتبة قسم علوم المختبرات الطبية', fa:'کتابخانه گروه علوم آزمایشگاهی پزشکی', tr:'Tıbbi Laboratuvar Bilimleri Kütüphanesi', badini:'زانستێن تاقیگەیا پزیشکی', badini_lat:'Pirtûkxaneya Beşa Zanistên Laboratuwara Bijîşkî', hawrami:'کتێبخانەیا بەشی زانستی تاقیگەی پزیشکی' },
    desc: { ku:'سەرچاوەکانی شیکردنەوەی کلینیکی، میکرۆبایۆلۆجی پزیشکی و ڕێنماییەکان', en:'Resources for clinical analysis, medical microbiology and guidelines', ar:'مصادر التحليل السريري والأحياء الدقيقة الطبية', fa:'منابع آنالیز بالینی، میکروبیولوژی پزشکی و راهنماها', tr:'Klinik analiz, tıbbi mikrobiyoloji kaynakları', badini:'چاوکانیێن تەهلیلێ کلینیکی، مایکرۆبایۆلۆجیا پزیشکی', badini_lat:'Çavkaniyên analîza klînîkî, mîkrobiyolojiya bijîşkî', hawrami:'سەرچاوەکانی تەهلیلی کلینیکی، مایکرۆبایۆلۆجی پزیشکی' },
    href:'https://drive.google.com/drive/folders/1tR1dwkEy9M4yM3CBiwajDRQ4-lCtp13i' },
  { emoji:'🏗️', links: { ku:'کتێبخانەی ئەندازیاری شارستانی', en:'Civil Engineering Library', ar:'مكتبة الهندسة المدنية', fa:'کتابخانه مهندسی عمران', tr:'İnşaat Mühendisliği Kütüphanesi', badini:'پرتوکخانەیا ئەندازیاریا شاری', badini_lat:'Kitêbxaneya Endezyariya Sivîl', hawrami:'کتێبخانەیا ئەندازیاری شارستانی' },
    desc: { ku:'پەرتووکەکانی بواری ئەندازیاری شارستانی', en:'Books and resources in the field of civil engineering', ar:'الكتب والمصادر في مجال الهندسة المدنية', fa:'کتاب‌ها و منابع در حوزه مهندسی عمران', tr:'İnşaat mühendisliği alanındaki kitaplar ve kaynaklar', badini:'پرتوک و چاوکانیێن بوارێ ئەندازیاریا شاری', badini_lat:'Pirtûk û çavkaniyên qada endezyariya sivîl', hawrami:'کتێبەکانی بواری ئەندازیاری شارستانی' },
    href:'https://bio.site/civil.engineer' },
];

const deptLangMap = {
  'ku-sorani': { title:'بەشە زانستییەکان', key:'ku', dir:'rtl', btn:'چونە ناو بەش' },
  'ku-badini': { title:'بەشێن زانستی', key:'badini', dir:'rtl', btn:'بکەڤن بەشێ' },
  'ku-badini-lat': { title:'Beşên Zanistî', key:'badini_lat', dir:'ltr', btn:'Têkeve Beşê' },
  'ku-hawrami': { title:'بەشەکانی زانستی', key:'hawrami', dir:'rtl', btn:'بچۆ ناو بەش' },
  'en': { title:'Scientific Departments', key:'en', dir:'ltr', btn:'Enter Department' },
  'ar': { title:'الأقسام العلمية', key:'ar', dir:'rtl', btn:'دخول القسم' },
  'fa': { title:'بخش‌های علمی', key:'fa', dir:'rtl', btn:'ورود به بخش' },
  'tr': { title:'Bilim Bölümleri', key:'tr', dir:'ltr', btn:'Bölüme Gir' },
};

function DepartmentsSection() {
  return (
    <>
      {Object.entries(deptLangMap).map(([lang, meta]) => (
        <div key={lang} className={`lang-content${lang === 'ku-sorani' ? ' active' : ''}`} style={{ direction: meta.dir }} data-lang={lang}>
          <h2 className="text-center font-bold text-[#2d2d3a] mb-10" style={{ fontSize:'clamp(1.7rem,4.5vw,2.4rem)' }}>{meta.title}</h2>
          <div className="grid gap-5" style={{ gridTemplateColumns:'repeat(auto-fit, minmax(260px,1fr))' }}>
            {depts.map((d, i) => (
              <div key={i} className="section-card card-top-bar card-glow relative flex flex-col justify-between bg-white/85 backdrop-blur-md border border-white/70 rounded-[18px] text-center transition-all duration-300 hover:-translate-y-3 reveal" style={{ padding:'clamp(1.5rem,4vw,2.2rem)', minHeight:'280px', boxShadow:'0 4px 16px rgba(102,126,234,0.10)' }}>
                <div>
                  <span className="block text-5xl mb-4">{d.emoji}</span>
                  <h3 className="font-bold text-[#2d2d3a] mb-3" style={{ fontSize:'clamp(1.1rem,3vw,1.4rem)' }}>{d.links[meta.key]}</h3>
                  <p className="text-[#6b6b80] mb-4" style={{ fontSize:'clamp(0.88rem,2.2vw,0.98rem)', lineHeight:'1.65' }}>{d.desc[meta.key]}</p>
                </div>
                <a href={d.href} className="section-btn relative inline-block font-semibold text-white rounded-full no-underline text-center transition-all duration-300 hover:-translate-y-1 font-[inherit]"
                  style={{ background:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)', padding:'clamp(0.6rem,2.2vw,0.85rem) clamp(1.3rem,3.5vw,1.9rem)', fontSize:'clamp(0.85rem,2.2vw,0.95rem)', minWidth:'130px', boxShadow:'0 4px 14px rgba(102,126,234,0.28)' }}
                  target="_blank">{meta.btn}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

const teamMembers = [
  { ku:'ژیاو یوسف حسێن', en:'ZHYAW YUSF HUSEN', roleKu:'خوێندکاری بەشی بایۆلۆجی - دابینکردنی کتێب', roleEn:'Biology Department Student - Provision of books', social: false },
  { ku:'نیار قادر ڕەسوڵ', en:'NYAR QADR RASUL', roleKu:'خوێندکاری بەشی بایۆلۆجی - ڕێکخستنی کتێبخانە', roleEn:'Biology Department Student - Organization of the library', social: false },
  { ku:'محمود خدر فقێ ڕەسوڵ', en:'MAHMOOD KHDIR FAQE RASUL', roleKu:'خوێندکاری بەشی بایۆلۆجی ـ گەشەپێدەری وێبسایت', roleEn:'Biology Department Student - Web Developer', social: true },
];

function IntroSection() {
  const introLangs = [
    { lang:'ku-sorani', active:true, dir:'rtl', title:'پێشەکی',
      paras:['بەخێربێن بۆ کتێبخانەی ئەلیکترۆنی کۆلێژی زانست - ژینگەیەکی دیجیتاڵییە کە دروستکراوە بۆ ئەوەی گەیشتن بە زانیاری و فێربوون چێژبەخش بێت و توێژینەوە کاراتر بێت بۆ خوێندکاران و ستافی ئەکادیمی.','ئەم کتێبخانە ئەلیکترۆنییە کۆمەڵێک سەرچاوەی زانستی بەرفراوان پێشکەش دەکات، لەوانە کتێبی خوێندن، توێژینەوەی زانستی و ئەکادیمی، گۆڤاری ئەکادیمی، کەرەستەی وانەوتنەوە و ئاماژەی پەروەردەیی، کە هەموویان لە یەک پلاتفۆرمی گونجاودا بەردەستن.','کتێبخانەی ئەلیکترۆنی زیاترە لە تەنها کۆمەڵەیەکی دیجیتاڵی، نیشاندەری پەیوەندی نێوان زانست و تەکنەلۆژیایە.','ئەرکی ئێمە بنیاتنانی بۆشاییەکی ئەکادیمی پشتیوانەیە کە زانیاری بە ئازادی تێدا بەردەست بکرێت.'],
      objTitle:'ئامانجەکانی پڕۆژەکە:', objs:['🎓 پشتگیریکردنی خوێندنی ئۆنلاین لە زانکۆ','⚡ بەردەستبوونی سەرچاوەی زانستی بە خێرایی و ئاسانی','📖 کۆکردنەوەی هەزاران سەرچاوەی زانستی لە یەک شوێن','📱 بەکارهێنانی تەکنەلۆژیای سەردەم QR code بۆ خزمەتی خوێندن','👨‍🏫 سوودمەندبوونی مامۆستایان و خوێندکاران لە پەرتووکخانەی دیجیتاڵی','⏰ پڕکردنەوەی کاتە بەتاڵەکانی خوێندکاران بە پڕۆژەیەکی زانستی','🌐 بەردەستبوونی پەرتووک و سەرچاوەکان بە هەموو زمانەکان'],
      teamTitle:'ئامادەکراوە لەلایەن:', nameKey:'ku', roleKey:'roleKu' },
    { lang:'en', dir:'ltr', title:'Introduction',
      paras:['Welcome to the College of Science e-library - a digital environment designed to make access to information and learning enjoyable and research more efficient for students and academic staff.','This e-library offers a wide range of scientific resources, including textbooks, scientific and academic papers, academic journals, teaching materials and educational references, all available on one convenient platform.','An e-library is more than just a digital collection, it demonstrates the relationship between science and technology.','Our mission is to build a supportive academic space where information is freely available, ideas are developed, and future scientists are empowered.'],
      objTitle:'Project Objectives:', objs:['🎓 Supporting online learning at universities','⚡ Quick and easy access to scientific resources','📖 Gathering thousands of scientific resources in one place','📱 Utilizing modern technology QR code to serve education','👨‍🏫 Benefiting teachers and students from digital library resources','⏰ Filling students free time with scientific projects','🌐 Availability of books and resources in all languages'],
      teamTitle:'Prepared by:', nameKey:'en', roleKey:'roleEn' },
    { lang:'ar', dir:'rtl', title:'مقدمة',
      paras:['أهلاً بكم في المكتبة الإلكترونية لكلية العلوم - بيئة رقمية مصممة لجعل الوصول إلى المعلومات والتعلم ممتعًا والبحث أكثر كفاءة للطلاب وأعضاء هيئة التدريس.','توفر هذه المكتبة الإلكترونية مجموعة واسعة من الموارد العلمية، تشمل الكتب الدراسية، والأوراق العلمية والأكاديمية، والمجلات الأكاديمية.','إن المكتبة الإلكترونية ليست مجرد مجموعة رقمية، بل هي تجسيد للعلاقة بين العلم والتكنولوجيا.','مهمتنا هي بناء مساحة أكاديمية داعمة حيث تتوفر المعلومات بحرية.'],
      objTitle:'أهداف المشروع:', objs:['🎓 دعم التعلم الإلكتروني في الجامعات','⚡ الوصول السريع والسهل إلى الموارد العلمية','📖 جمع آلاف الموارد العلمية في مكان واحد','📱 استخدام التكنولوجيا الحديثة QR code لخدمة التعليم','👨‍🏫 استفادة المدرسين والطلاب من موارد المكتبة الرقمية','⏰ ملء أوقات فراغ الطلاب بمشاريع علمية','🌐 توفر الكتب والموارد بجميع اللغات'],
      teamTitle:'إعداد:', nameKey:'ku', roleKey:'roleKu' },
    { lang:'fa', dir:'rtl', title:'مقدمه',
      paras:['به کتابخانه الکترونیکی دانشکده علوم خوش آمدید - یک محیط دیجیتالی که برای لذت‌بخش کردن دسترسی به اطلاعات و یادگیری طراحی شده است.','این کتابخانه الکترونیکی طیف گسترده‌ای از منابع علمی ارائه می‌دهد.','یک کتابخانه الکترونیکی چیزی بیش از یک مجموعه دیجیتال است.','ماموریت ما ایجاد یک فضای دانشگاهی حمایتی است.'],
      objTitle:'اهداف پروژه:', objs:['🎓 حمایت از یادگیری آنلاین در دانشگاه‌ها','⚡ دسترسی سریع و آسان به منابع علمی','📖 گردآوری هزاران منبع علمی در یک مکان','📱 استفاده از فناوری مدرن QR code','👨‍🏫 بهره‌مندی اساتید و دانشجویان از منابع کتابخانه دیجیتال','⏰ پر کردن اوقات فراغت دانشجویان با پروژه‌های علمی','🌐 در دسترس بودن کتاب‌ها و منابع به همه زبان‌ها'],
      teamTitle:'تهیه شده توسط:', nameKey:'ku', roleKey:'roleKu' },
    { lang:'tr', dir:'ltr', title:'Giriş',
      paras:['Fen Fakültesi e-kütüphanesine hoş geldiniz - öğrenciler ve akademik personel için tasarlanmış dijital bir ortam.','Bu e-kütüphane çok çeşitli bilimsel kaynakları tek bir kullanışlı platformda sunmaktadır.','E-kütüphane, sadece dijital bir koleksiyon olmaktan öte, bilim ve teknoloji arasındaki ilişkiyi gösterir.','Misyonumuz, bilginin özgürce erişilebildiği destekleyici bir akademik alan oluşturmaktır.'],
      objTitle:'Proje Hedefleri:', objs:['🎓 Üniversitelerde çevrimiçi öğrenimi destekleme','⚡ Bilimsel kaynaklara hızlı ve kolay erişim','📖 Binlerce bilimsel kaynağı tek bir yerde toplama','📱 Modern teknolojiyi QR code eğitime hizmet için kullanma','👨‍🏫 Öğretmenlerin ve öğrencilerin dijital kütüphane kaynaklarından yararlanması','⏰ Öğrencilerin boş zamanlarını bilimsel projelerle değerlendirme','🌐 Kitap ve kaynakların tüm dillerde erişilebilir olması'],
      teamTitle:'Hazırlayanlar:', nameKey:'en', roleKey:'roleEn' },
  ];

  return (
    <>
      {introLangs.map(l => (
        <div key={l.lang} className={`lang-content${l.active ? ' active' : ''}`} style={{ direction: l.dir }} data-lang={l.lang}>
          <div className="text-center max-w-[900px] mx-auto">
            <h2 className="font-bold text-[#2d2d3a] mb-8" style={{ fontSize:'clamp(1.7rem,4.5vw,2.4rem)' }}>{l.title}</h2>
            <div className="relative rounded-[18px] overflow-hidden shimmer-border reveal"
              style={{ background:'linear-gradient(145deg, #f5f7ff 0%, #eef0f8 100%)', padding:'clamp(1.5rem,5vw,3rem)', boxShadow:'0 8px 32px rgba(102,126,234,0.15)' }}>
              {l.paras.map((p, i) => <p key={i} className="text-[#6b6b80] leading-[1.9] mb-6 text-justify" style={{ fontSize:'clamp(0.95rem,2.5vw,1.15rem)' }}>{p}</p>)}
              <div className="rounded-[10px] p-6 mb-6 border border-[rgba(102,126,234,0.16)] transition-all duration-300 hover:shadow-md reveal" style={{ background:'rgba(102,126,234,0.08)' }}>
                <h3 className="text-[#667eea] mb-4 font-bold" style={{ fontSize:'clamp(1.1rem,3vw,1.4rem)' }}>{l.objTitle}</h3>
                <ul className="list-none p-0 text-[#6b6b80] leading-loose" style={{ fontSize:'clamp(0.9rem,2.5vw,1.05rem)' }}>
                  {l.objs.map((o, i) => <li key={i} className="mb-1 ps-6">{o}</li>)}
                </ul>
              </div>
              <div className="rounded-[10px] p-6 border border-[rgba(255,107,107,0.15)] transition-all duration-300 hover:shadow-md reveal" style={{ background:'rgba(255,107,107,0.07)' }}>
                <h3 className="text-[#ff6b6b] mb-4 font-bold" style={{ fontSize:'clamp(1.1rem,3vw,1.4rem)' }}>{l.teamTitle}</h3>
                <div className="grid gap-4" style={{ gridTemplateColumns:'repeat(auto-fit, minmax(min(220px,100%),1fr))' }}>
                  {teamMembers.map((m, i) => (
                    <div key={i} className="text-center p-5 bg-white rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <h4 className="text-[#2d2d3a] mb-2 font-bold" style={{ fontSize:'clamp(0.9rem,2.5vw,1.05rem)' }}>{m[l.nameKey]}</h4>
                      <p className="text-center text-[#6b6b80] mb-2" style={{ fontSize:'clamp(0.8rem,2vw,0.95rem)' }}>{m[l.roleKey]}</p>
                      {m.social && <SocialIcons />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function AboutSection() {
  const aboutLangs = [
    { lang:'ku-sorani', active:true, dir:'rtl', title:'👥 دەربارەی ئێمە', para:'ئێمە وەک تیمی BioNova کە سێ خوێندکاری زانکۆین خولیای هاوبەشمان بۆ فێربوون و تەکنەلۆژیا هەیە. لە کاتی خوێندندا تێبینیمان کرد کە دۆزینەوەی سەرچاوەی متمانەپێکراو و باش و ڕێکخراو لە یەک شوێن زۆر ئەستەمە. ئەوەش ئیلهامبەخش بوو بۆ دروستکردنی ئەم پەرتووکخانە ئەلیکترۆنییە.', missionTitle:'ئامانجی ئێمە', mission:'کردنەوەی دەرگای زانیاری بۆ هەموو خوێندکارێک و دابینکردنی یەک پلاتفۆرم کە هەموو پێداویستییەکانی ئەکادیمی دابین بکات بە شێوەیەکی مۆدێرن و سەردەمیانە' },
    { lang:'en', dir:'ltr', title:'👥 About Us', para:'We are three university students as BioNova team who share a passion for learning and technology. During our studies, we noticed that finding reliable, quality, and well-organized resources in one place was very difficult. This inspired us to create this electronic library.', missionTitle:'Our Mission', mission:'Opening the door to information for every student and providing a single platform that meets all academic needs in a modern and contemporary manner' },
    { lang:'ar', dir:'rtl', title:'👥 معلومات عنا', para:'بصفتنا فريق BioNova المكون من ثلاثة طلاب جامعيين، نتشارك شغفًا بالتعلم والتكنولوجيا.', missionTitle:'مهمتنا', mission:'فتح الباب أمام المعلومات لكل طالب وتوفير منصة واحدة تلبي جميع الاحتياجات الأكاديمية بطريقة حديثة ومعاصرة' },
    { lang:'fa', dir:'rtl', title:'👥 درباره ما', para:'به عنوان تیم BioNova متشکل از سه دانشجوی دانشگاه، ما اشتیاق مشترکی به یادگیری و فناوری داریم.', missionTitle:'مأموریت ما', mission:'گشودن دریچه‌ای به سوی اطلاعات برای هر دانش‌آموز و فراهم کردن بستری واحد که تمام نیازهای تحصیلی را به شیوه‌ای مدرن برآورده می‌کند' },
    { lang:'tr', dir:'ltr', title:'👥 Hakkımızda', para:'Üç üniversite öğrencisinden oluşan BioNova ekibi olarak, öğrenmeye ve teknolojiye olan tutkumuzu paylaşıyoruz.', missionTitle:'Misyonumuz', mission:'Her öğrenci için bilgiye erişim kapısını açmak ve tüm akademik ihtiyaçları modern ve çağdaş bir şekilde karşılayan tek bir platform sağlamak' },
  ];

  return (
    <>
      {aboutLangs.map(l => (
        <div key={l.lang} className={`lang-content${l.active ? ' active' : ''}`} style={{ direction: l.dir }} data-lang={l.lang}>
          <h2 className="font-bold text-[#2d2d3a] mb-8 text-center" style={{ fontSize:'clamp(1.7rem,4.5vw,2.4rem)' }}>{l.title}</h2>
          <div className="relative rounded-[18px] overflow-hidden reveal" style={{ background:'linear-gradient(145deg, #f5f7ff 0%, #eef0f8 100%)', padding:'clamp(1.5rem,5vw,3rem)', boxShadow:'0 8px 32px rgba(102,126,234,0.15)' }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background:'linear-gradient(90deg, #667eea, #764ba2)' }}></div>
            <p className="text-[#6b6b80] leading-[1.9] mb-6 text-justify" style={{ fontSize:'clamp(0.95rem,2.5vw,1.15rem)' }}>{l.para}</p>
            <div className="rounded-[10px] p-6 transition-all duration-300 hover:shadow-md" style={{ background:'rgba(102,126,234,0.09)', border:'1px solid rgba(102,126,234,0.16)' }}>
              <h3 className="text-[#667eea] mb-3 text-center font-bold" style={{ fontSize:'clamp(1.1rem,3vw,1.35rem)' }}>{l.missionTitle}</h3>
              <p className="text-[#6b6b80] mb-0 text-justify" style={{ fontSize:'clamp(0.95rem,2.5vw,1.15rem)', fontStyle:'italic' }}>&ldquo;{l.mission}&rdquo;</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// ── Language system (DOM-based, same logic as original) ───────
function applyLanguage(lang) {
  sessionStorage.setItem('selectedLanguage', lang);
  document.querySelectorAll('.lang-content').forEach(el => {
    el.classList.remove('active');
    el.style.opacity = '0';
  });
  document.querySelectorAll(`[data-lang="${lang}"].lang-content`).forEach(el => {
    el.classList.add('active');
    requestAnimationFrame(() => { el.style.opacity = '1'; });
  });
  document.body.style.direction = LTR_LANGS.includes(lang) ? 'ltr' : 'rtl';
  const visLabel = document.getElementById('visitor-label');
  if (visLabel) visLabel.textContent = VISITOR_LABELS[lang] || 'Visitors';
  triggerReveal();
}

function restoreButtons(lang) {
  if (KU_DIALECTS.includes(lang)) {
    document.getElementById('kuMainBtn')?.classList.add('active');
    document.querySelectorAll('.ku-dialect-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  } else {
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  }
}

function toggleKuDropdown() {
  const btn = document.getElementById('kuMainBtn');
  const dd = document.getElementById('kuDropdown');
  const arrow = document.getElementById('kuArrow');
  const open = dd.classList.contains('open');
  closeKuDropdown();
  if (!open) {
    const rect = btn.getBoundingClientRect();
    dd.style.top = (rect.bottom + 6) + 'px';
    dd.style.right = (window.innerWidth - rect.right) + 'px';
    btn.classList.add('active');
    dd.classList.add('open');
    arrow.style.transform = 'rotate(180deg)';
    document.addEventListener('click', outsideClose);
  }
}

function outsideClose(e) {
  const kg = document.getElementById('kuGroup');
  if (kg && !kg.contains(e.target)) {
    closeKuDropdown();
    document.removeEventListener('click', outsideClose);
  }
}

function closeKuDropdown() {
  document.getElementById('kuMainBtn')?.classList.remove('active');
  document.getElementById('kuDropdown')?.classList.remove('open');
  const arrow = document.getElementById('kuArrow');
  if (arrow) arrow.style.transform = '';
}

function selectDialect(lang, btn) {
  closeKuDropdown();
  document.getElementById('kuMainBtn')?.classList.add('active');
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.ku-dialect-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyLanguage(lang);
}

function switchLang(lang) {
  closeKuDropdown();
  document.getElementById('kuMainBtn')?.classList.remove('active');
  document.querySelectorAll('.ku-dialect-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  applyLanguage(lang);
}

function triggerReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) el.classList.add('visible');
  });
}