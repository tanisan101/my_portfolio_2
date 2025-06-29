// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Cherry blossom animation
    createCherryBlossoms();
    
    // Floating label animations
    setupFloatingLabels();
    
    // Intersection Observer for animations
    setupScrollAnimations();
});

// Cherry blossom animation
function createCherryBlossoms() {
    const container = document.querySelector('.sakura-container');
    if (!container) return;
    
    const petalsCount = 15;
    
    for (let i = 0; i < petalsCount; i++) {
        createPetal(container);
    }
}

function createPetal(container) {
    const petal = document.createElement('div');
    petal.className = 'sakura';
    
    // Random starting position
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (Math.random() * 10 + 10) + 's';
    petal.style.animationDelay = Math.random() * 10 + 's';
    
    container.appendChild(petal);
    
    // Remove and recreate after animation
    petal.addEventListener('animationend', function() {
        this.remove();
        createPetal(container);
    });
}

// Download resume functionality
function downloadResume() {
    window.open('https://drive.google.com/file/d/1ycpRRSdiY5FdXB9JnZ2uEtgOjeGwgM51/view?usp=sharing', '_blank');
    showNotification('Opening resume in new tab!', 'success');
}

// Project opening functionality
function openProject(githubUrl, demoUrl) {
    if (githubUrl) {
        window.open(githubUrl, '_blank');
        showNotification('Opening GitHub repository!', 'info');
    }
    if (demoUrl && demoUrl !== '') {
        setTimeout(() => {
            window.open(demoUrl, '_blank');
        }, 500);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Floating label animations
function setupFloatingLabels() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', () => {
                label.classList.add('active');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.classList.remove('active');
                }
            });
            
            // Check if input has value on load
            if (input.value) {
                label.classList.add('active');
            }
        }
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.about-card, .timeline-card, .experience-card, .achievement-card, .project-card, .contact-form-container'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Project card interactions
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const viewButton = card.querySelector('.view-project');
        
        if (viewButton) {
            viewButton.addEventListener('click', function() {
                const projectName = card.querySelector('h3').textContent;
                showNotification(`Opening ${projectName} repository!`, 'info');
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const heroName = document.querySelector('.hero-title .name');
    if (heroName) {
        const originalText = heroName.textContent;
        typeWriter(heroName, originalText, 150);
    }
});

// Skills rotation animation
function rotateSkills() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = 'bounceIn 0.6s ease-out';
        }, index * 200);
    });
}

// Trigger skills animation when about section is visible
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rotateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    });
    
    skillsObserver.observe(aboutSection);
}

// Make functions globally available
window.scrollToSection = scrollToSection;
window.downloadResume = downloadResume;
window.openProject = openProject;