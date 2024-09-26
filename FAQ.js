const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(faq => {
    faq.addEventListener('click', function() {
      this.classList.toggle('active');
    });
});