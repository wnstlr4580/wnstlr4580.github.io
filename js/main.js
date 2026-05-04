// 모바일 네비게이션 토글
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 네비 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// 스크롤 진입 애니메이션
const fadeTargets = document.querySelectorAll(
  '.about-card, .work-card, .contact-item, .section-header'
);
fadeTargets.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

fadeTargets.forEach(el => observer.observe(el));

// 네비 스크롤 활성화 표시
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    if (
      scrollY >= section.offsetTop &&
      scrollY < section.offsetTop + section.offsetHeight
    ) {
      navItems.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === `#${section.id}`) {
          a.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { passive: true });
