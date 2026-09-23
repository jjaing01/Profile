// 히어로 서브타이틀 타이핑 효과
// 여러 직무 문구를 순환하며 타이핑/삭제를 반복합니다.
const roles = ['Game Server Developer', 'Game Programmer', 'C++ / Network Engineer'];
const typingEl = document.getElementById('typing-text');

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingEl.textContent = current.substring(0, charIndex);

  let delay = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === current.length) {
    delay = 1500; // 다 타이핑한 뒤 잠시 대기
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }

  setTimeout(typeLoop, delay);
}

if (typingEl) {
  typeLoop();
}

// 스크롤 시 섹션 등장 애니메이션
// .reveal 클래스가 붙은 요소가 화면에 들어오면 visible 클래스를 추가합니다.
const revealTargets = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-link');
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));
