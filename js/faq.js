const faqBtn = document.querySelectorAll('.questions__faq-btn');
const answer = document.querySelectorAll('.questions__faq-answer');

faqBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < answer.length; i++) {
      if (index === i) {
        answer[i].classList.toggle('faq-active');
      } else {
        answer[i].classList.remove('faq-active');
      }
    }
  });
});
