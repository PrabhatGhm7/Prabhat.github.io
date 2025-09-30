// Main JavaScript functionality for the portfolio - Fixed Navbar Version
document.addEventListener('DOMContentLoaded', function() {
    // Critical: Fix navbar first before anything else
    initializeNavbarCritical();
    
    // Then initialize other functionality
    initializeIOSAnimations();
    initializeTypewriter();
    initializeScrollAnimations();
    initializeContactForm();
    initializeSkillCards();
    initializeHapticFeedback();
    initializeSmoothScrolling();
    initializeParallaxEffects();
    optimizeAnimations();
    setViewportUnits();
});

// CRITICAL: Initialize navbar with immediate state management
function initializeNavbarCritical() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    // Apply critical styles immediately to prevent flash
    nav.style.opacity = '1';
    nav.style.visibility = 'visible';
    nav.style.transition = 'none'; // Disable transitions initially
    
    // Set initial state based on current scroll position
    if (window.scrollY > 20) {
        nav.classList.add('nav-glass');
        nav.style.backdropFilter = 'blur(20px) saturate(180%)';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        nav.classList.remove('nav-glass');
        nav.style.backdropFilter = 'blur(0px)';
        nav.style.backgroundColor = 'transparent';
    }
    
    // Force synchronous reflow to apply styles
    nav.offsetHeight;
    
    // Re-enable transitions after initial state is set
    setTimeout(() => {
        nav.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    }, 50);
    
    // Initialize scroll behavior
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        // Glass morphism effect
        if (currentScrollY > 20) {
            nav.classList.add('nav-glass');
            nav.style.backdropFilter = 'blur(20px) saturate(180%)';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        } else {
            nav.classList.remove('nav-glass');
            nav.style.backdropFilter = 'blur(0px)';
            nav.style.backgroundColor = 'transparent';
        }
        
        // Hide/show navbar with scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
    
    // Enhanced CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.disabled) {
                createRippleEffect(e, this, 'rgba(255, 255, 255, 0.6)');
                
                // iOS-style button press
                anime({
                    targets: this,
                    scale: 0.95,
                    duration: 100,
                    easing: 'easeOutCubic',
                    complete: function() {
                        anime({
                            targets: this.animatables[0].target,
                            scale: 1,
                            duration: 100,
                            easing: 'easeOutCubic'
                        });
                    }
                });
            }
        });
    });
}

// Enhanced page load animation
window.addEventListener('load', function() {
    // Ensure smooth body reveal after everything is loaded
    document.body.style.opacity = '0';
    document.body.style.visibility = 'visible';
    
    anime({
        targets: document.body,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutCubic',
        complete: function() {
            document.body.classList.add('loaded');
        }
    });
});

// iOS-inspired animations
function initializeIOSAnimations() {
    // Enhanced floating shapes with iOS-like physics
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length > 0) {
        anime({
            targets: '.shape',
            translateY: [-15, 15],
            translateX: [-10, 10],
            rotate: [0, 360],
            scale: [0.95, 1.05],
            opacity: [0.1, 0.25, 0.1],
            duration: 8000,
            easing: 'easeInOutSine',
            loop: true,
            delay: anime.stagger(1500)
        });
    }
}

// Enhanced typewriter with iOS styling
function initializeTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement && typeof Typed !== 'undefined') {
        const typed = new Typed('#typewriter', {
            strings: [
                'Hello, I\'m Prabhat',
                'Python Developer',
                'ML Engineer',
                'AI Enthusiast',
                'AvGeek ✈️'
            ],
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 2500,
            startDelay: 800,
            loop: true,
            showCursor: true,
            cursorChar: '',
            contentType: 'html',
            onStringTyped: function() {
                // iOS-like completion haptic
                if (navigator.vibrate) navigator.vibrate(10);
            }
        });
    }
}
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                    // Toggle the hidden class
                    mobileMenu.classList.toggle('hidden');
                    
                    // Change icon between hamburger and X
                    const paths = mobileMenuButton.querySelector('svg').getElementsByTagName('path');
                    if (mobileMenu.classList.contains('hidden')) {
                        // Show hamburger icon
                        paths[0].setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                    } else {
                        // Show X icon
                        paths[0].setAttribute('d', 'M6 18L18 6M6 6l12 12');
                    }
                });

                // Close menu when clicking on links
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        mobileMenu.classList.add('hidden');
                        const paths = mobileMenuButton.querySelector('svg').getElementsByTagName('path');
                        paths[0].setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                    });
                });

                // Close menu when clicking outside
                document.addEventListener('click', function(event) {
                    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                        mobileMenu.classList.add('hidden');
                        const paths = mobileMenuButton.querySelector('svg').getElementsByTagName('path');
                        paths[0].setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                    }
                });
            }
        });

// Enhanced download with iOS-style feedback
function downloadResume() {
    // iOS-style haptic feedback
    if (navigator.vibrate) navigator.vibrate(50);
    
    // Create download animation
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<span class="download-spinner">⬇️</span> Downloading...';
    button.disabled = true;
    
    // iOS-style progress indication
    anime({
        targets: button.querySelector('.download-spinner'),
        rotate: 360,
        duration: 800,
        loop: true,
        easing: 'linear'
    });
    
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'Prabhat Resume.pdf';
        link.target = '_blank';
        link.download = 'Prabhat_Ghimire_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Success feedback
        button.innerHTML = '<span class="success-check">✓</span> Downloaded!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 2000);
    }, 1000);
}

// iOS-inspired scroll animations
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // iOS-style staggered reveal
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [40, 0],
                    scale: [0.95, 1],
                    duration: 600,
                    easing: 'easeOutCubic',
                    delay: anime.stagger(100, {start: 100}),
                    complete: function() {
                        entry.target.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// iOS-style contact form
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        // iOS-style input interactions
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
                anime({
                    targets: this.parentElement,
                    scale: 1.02,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
                anime({
                    targets: this.parentElement,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutCubic'
                });
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // iOS-style loading state
            submitButton.innerHTML = '<span class="button-spinner"></span>Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitButton.innerHTML = '<span class="success-icon">✓</span>Sent!';
                submitButton.style.background = '#10b981';
                
                // Haptic feedback on success
                if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
                
                setTimeout(() => {
                    form.reset();
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 2000);
            }, 1500);
        });
    }
}

// Enhanced skill cards with iOS interactions
function initializeSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        // iOS-style touch interactions
        card.addEventListener('touchstart', function() {
            anime({
                targets: this,
                scale: 0.95,
                duration: 150,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('touchend', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 150,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                translateY: -5,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                translateY: 0,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('click', function(e) {
            // Enhanced ripple effect
            createRippleEffect(e, this, 'rgba(245, 158, 11, 0.6)');
            
            // iOS-style navigation delay
            setTimeout(() => {
                if (window.location.href.includes('skills.html')) {
                    return;
                }
                window.location.href = 'skills.html';
            }, 400);
        });
    });
}

// Haptic feedback simulation
function initializeHapticFeedback() {
    // Simple haptic feedback for interactions
    window.hapticFeedback = function(type) {
        if (!navigator.vibrate) return;
        
        const patterns = {
            light: 10,
            medium: 30,
            heavy: 50,
            success: [30, 50, 30],
            error: [100, 50, 100]
        };
        
        navigator.vibrate(patterns[type] || patterns.medium);
    };
}

// Enhanced smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                anime({
                    targets: document.documentElement,
                    scrollTop: target.offsetTop - 80,
                    duration: 800,
                    easing: 'easeInOutCubic'
                });
            }
        });
    });
}

// Parallax effects for depth
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Utility function for ripple effects
function createRippleEffect(event, element, color) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = (event.clientX || (event.touches && event.touches[0].clientX)) - rect.left - size / 2;
    const y = (event.clientY || (event.touches && event.touches[0].clientY)) - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: ${color};
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentElement === element) {
            element.removeChild(ripple);
        }
    }, 600);
}

// Performance optimizations
function optimizeAnimations() {
    // Hardware acceleration for animations
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .shape');
    animatedElements.forEach(el => {
        el.style.transform = 'translateZ(0)';
    });
    
    // Reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const reducedMotionStyle = document.createElement('style');
        reducedMotionStyle.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        `;
        document.head.appendChild(reducedMotionStyle);
    }
}

// Add viewport units for mobile
function setViewportUnits() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportUnits);

// Enhanced CSS animations - Add this to your existing CSS
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    /* Critical: Prevent navbar flash with initial styles */
    nav {
        opacity: 1 !important;
        visibility: visible !important;
        transition: opacity 0.1s ease, visibility 0.1s ease;
    }
    
    /* iOS-inspired animations */
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes gentleBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }
    
    @keyframes buttonSpinner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Enhanced component styles */
    .cta-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-glass {
        background: rgba(255, 255, 255, 0.8) !important;
        backdrop-filter: blur(20px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .button-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: buttonSpinner 0.8s linear infinite;
        margin-right: 8px;
    }
    
    .success-icon {
        display: inline-block;
        margin-right: 8px;
        font-weight: bold;
    }
    
    .download-spinner {
        display: inline-block;
        margin-right: 8px;
        animation: gentleBounce 1s ease-in-out infinite;
    }
    
    /* iOS-style form inputs */
    .form-group {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .form-group.focused {
        transform: translateY(-2px);
    }
    
    /* Smooth transitions for all interactive elements */
    .skill-card, .project-card, .timeline-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
    
    /* Enhanced touch targets for mobile */
    @media (max-width: 768px) {
        .cta-button, .skill-card {
            min-height: 44px;
            min-width: 44px;
        }
    }
    
    /* Ensure body doesn't flash during load */
    body {
        opacity: 0;
        visibility: hidden;
    }
    
    body.loaded {
        opacity: 1;
        visibility: visible;
    }
`;
document.head.appendChild(enhancedStyle);
