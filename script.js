// Optimized Preloader with Progress Tracking
class PortfolioPreloader {
  constructor() {
    this.preloader = document.getElementById('preloader');
    this.mainContent = document.getElementById('main-content');
    this.minLoadTime = 2000; // Minimum 2 seconds
    this.maxLoadTime = 4000; // Maximum 4 seconds
    this.startTime = Date.now();
    
    this.init();
  }

  init() {
    // Add loading text and spinner to preloader
    this.addLoadingElements();
    
    // Start preloader
    this.startPreloader();
    
    // Handle page load
    window.addEventListener('load', () => {
      this.handlePageLoad();
    });
  }

  addLoadingElements() {
    // Add loading text and spinner if they don't exist
    if (!this.preloader.querySelector('.preloader-text')) {
      const loadingText = document.createElement('div');
      loadingText.className = 'preloader-text';
      loadingText.textContent = 'Loading Portfolio...';
      this.preloader.appendChild(loadingText);

      const spinner = document.createElement('div');
      spinner.className = 'loading-spinner';
      this.preloader.appendChild(spinner);
    }
  }

  startPreloader() {
    // Ensure preloader is visible
    this.preloader.style.display = 'flex';
    this.mainContent.style.display = 'none';
  }

  handlePageLoad() {
    const elapsedTime = Date.now() - this.startTime;
    const remainingTime = Math.max(0, this.minLoadTime - elapsedTime);

    // Wait for minimum time if page loaded too quickly
    setTimeout(() => {
      this.hidePreloader();
    }, remainingTime);

    // Failsafe: Hide preloader after max time regardless
    setTimeout(() => {
      this.hidePreloader();
    }, this.maxLoadTime);
  }

  hidePreloader() {
    // Fade out preloader
    this.preloader.style.opacity = '0';
    
    setTimeout(() => {
      this.preloader.style.display = 'none';
      this.mainContent.style.display = 'block';
      
      // Trigger entrance animations
      this.triggerEntranceAnimations();
    }, 500);
  }

  triggerEntranceAnimations() {
    // Add staggered animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
}

// Portfolio Enhancement Features
class PortfolioEnhancements {
  constructor() {
    this.init();
  }

  init() {
    this.addSmoothScrolling();
    this.addProjectCardInteractions();
    this.addKeyboardNavigation();
    this.addProgressiveEnhancement();
  }

  addSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  addProjectCardInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      // Add hover sound effect (optional)
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });

      // Add click to focus for accessibility
      card.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
          const link = this.querySelector('.project-link');
          if (link) {
            link.focus();
          }
        }
      });
    });
  }

  addKeyboardNavigation() {
    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  addProgressiveEnhancement() {
    // Add intersection observer for scroll animations
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
      });
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioPreloader();
  new PortfolioEnhancements();
});

// Error handling
window.addEventListener('error', (e) => {
  console.warn('Portfolio Error:', e.error);
  // Ensure content is visible even if JS fails
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    if (preloader) preloader.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
  }, 5000);
});
