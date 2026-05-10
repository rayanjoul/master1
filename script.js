document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  navLinks?.querySelectorAll('a')?.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    revealSections();
  });

  function revealSections() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 120) {
        section.classList.add('revealed');
      }
    });
  }

  // Form validation
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = form.querySelector('input[type="text"]');
      const email = form.querySelector('input[type="email"]');
      const phone = form.querySelector('input[type="tel"]');
      const details = form.querySelector('textarea');
      
      let isValid = true;
      
      // Simple validation
      if (!name.value.trim()) {
        alert('Please enter your name.');
        isValid = false;
      }
      
      if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
      }
      
      if (!phone.value.trim()) {
        alert('Please enter your phone number.');
        isValid = false;
      }
      
      if (!details.value.trim()) {
        alert('Please provide project details.');
        isValid = false;
      }
      
      if (isValid) {
        alert('Thank you for your inquiry! We will contact you soon.');
        form.reset();
      }
    });
  });

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  revealSections();
});
