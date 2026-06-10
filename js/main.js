/**
 * HY Jewelry Box — 主脚本 / Main Script
 */
document.addEventListener('DOMContentLoaded', () => {

  // ========== 语言切换 / Language Toggle ==========
  let currentLang = localStorage.getItem('lang') || 'en';
  const langBtn = document.getElementById('langToggle');

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    if (langBtn) langBtn.innerHTML = lang === 'en'
      ? '<span>🌐</span> EN ▾'
      : '<span>🌐</span> 中文 ▾';

    document.querySelectorAll('[data-en][data-cn]').forEach(el => {
      el.textContent = el.getAttribute(lang === 'en' ? 'data-en' : 'data-cn');
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => setLang(currentLang === 'en' ? 'cn' : 'en'));
  }
  setLang(currentLang);

  // ========== 移动端菜单 / Mobile Menu ==========
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    });
  });

  // ========== Header 滚动效果 / Header Scroll Effect ==========
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 40;
    header?.classList.toggle('scrolled', scrolled);
    backToTop?.classList.toggle('visible', window.scrollY > 500);
  });

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ========== Nav Active State on Scroll ==========
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset + 100;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = nav?.querySelector(`a[href="#${id}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        nav?.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        link?.classList.add('active');
      }
    });
  });

  // ========== Contact Form / 联系表单 ==========
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // 模拟提交 (替换为真实的 API 端点)
    setTimeout(() => {
      btn.textContent = 'Sent! ✓';
      btn.style.background = '#5B8C5A';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 2500);
    }, 1200);
  });

  // ========== 滚动动画 / Scroll Reveal ==========
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1.2)';
    observer.observe(el);
  });
});
