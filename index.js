document.addEventListener('DOMContentLoaded', function () {
  // Typed.js for typing animation
  var typed = new Typed('#typed', {
    strings: ['Reality Reboot', 'Decode Your Future'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
    showCursor: false 
  });

  // Load ParticlesJS - default blue
  loadParticles('#00f0ff');

  // 🔥 Portal spin effect
  let angle = 0;
  setInterval(() => {
    angle += 2;
    const modalImage = document.getElementById('modal-image');
    if (modalImage) {
      modalImage.style.transform = `rotate(${angle}deg) scale(1.2)`;
    }
  }, 50);

  // RSVP form logic
  const form = document.getElementById('rsvpForm');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const participantList = document.getElementById('participant-list');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const universeInput = document.getElementById('favoriteUniverse');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const universe = universeInput ? universeInput.value.trim() : '';
  
    // ✨ Email Regex Pattern: something@something.something
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // ✨ Clear previous invalid highlights
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
  
    let isValid = true;
  
    // Check name
    if (name === '') {
      nameInput.classList.add('invalid');
      isValid = false;
    }
  
    // Check email (both not blank and valid format)
    if (email === '' || !emailPattern.test(email)) {
      emailInput.classList.add('invalid');
      isValid = false;
    }
  
    if (isValid) {
      // ✅ Valid RSVP
  
      modalMessage.innerHTML = `Welcome to the glitch, <span style="color:#f0a500">${name}</span>! Prepare to question everything. 🚀`;
      modal.style.display = 'flex';
  
      setTimeout(() => {
        modal.style.display = 'none';
      }, 5000);
  
      const li = document.createElement('li');
      li.textContent = `${name} - ${universe || 'Unknown Dimension'}`;
      participantList.appendChild(li);
  
      form.reset();
    } else {
      // ❌ Invalid RSVP
      alert('Reality check failed. Please enter a valid name and email.');
    }
  });
  

  // ✨ Extra: Clear red highlight while typing
  nameInput.addEventListener('input', function() {
    nameInput.classList.remove('invalid');
  });

  emailInput.addEventListener('input', function() {
    emailInput.classList.remove('invalid');
  });

  // 🔥 Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('purple-theme');

    destroyParticles(); // Kill old particles first

    if (document.body.classList.contains('purple-theme')) {
      loadParticles('#cc00ff'); // load purple particles
    } else {
      loadParticles('#00f0ff'); // load blue particles
    }
  });

  // 🔥 Timeline Fade-In Animation
  const hiddenElements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  hiddenElements.forEach(el => observer.observe(el));
});

// Helper: Destroy old Particles
function destroyParticles() {
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }
}

// Helper: Load ParticlesJS with new color
function loadParticles(color) {
  particlesJS('particles-js', {
    "particles": {
      "number": {"value": 80},
      "size": {"value": 2},
      "move": {"speed": 1},
      "line_linked": {"enable": false},
      "color": {"value": color}
    },
    "interactivity": {
      "events": {
        "onhover": {"enable": true, "mode": "repulse"}
      }
    }
  });
}
