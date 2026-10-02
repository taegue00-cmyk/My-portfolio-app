// 카드가 화면에 보일 때 살짝 떠오르는 느낌으로 나타나게 합니다.
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.work-card');

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card, index) => {
    setTimeout(() => observer.observe(card), index * 80);
  });
});
