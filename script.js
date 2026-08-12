/* ════════════════════════════════════════════════════════════════
   SUMEET KUMAR — PORTFOLIO ANIMATIONS & INTERACTION LOGIC (script.js)
   ════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. Navigation & Mobile Menu ───
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    window.closeMenu = function() {
        if (navLinks) navLinks.classList.remove('active');
    };

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
    });

    // Active Section Highlight
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links li a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = `#${entry.target.id}`;
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === currentId);
                });
            }
        });
    }, { rootMargin: '-30% 0px -50% 0px' });

    sections.forEach(sec => navObserver.observe(sec));

    // ─── 2. General Scroll Reveal ───
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ─── 3. Landing Page Animations ───
    // Social icons pop in one by one
    const socialIcons = document.querySelectorAll('.social-icon-btn');
    socialIcons.forEach((icon, idx) => {
        setTimeout(() => {
            icon.classList.add('pop-in');
        }, 500 + idx * 150);
    });

    // Role Typing Effect
    const typedTextEl = document.getElementById('typed-text');
    if (typedTextEl) {
        const phrases = [
            'Data Analyst',
            'Business Intelligence Specialist',
            'Financial Reporting & Operations Analyst',
            'Power BI & Automation Expert'
        ];
        let phraseIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        function typeLoop() {
            const currentPhrase = phrases[phraseIdx];

            if (isDeleting) {
                typedTextEl.textContent = currentPhrase.substring(0, charIdx - 1);
                charIdx--;
            } else {
                typedTextEl.textContent = currentPhrase.substring(0, charIdx + 1);
                charIdx++;
            }

            let delta = isDeleting ? 35 : 75;

            if (!isDeleting && charIdx === currentPhrase.length) {
                delta = 2200; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                delta = 350;
            }

            setTimeout(typeLoop, delta);
        }

        typeLoop();
    }

    // ─── 4. About Me Animations ───
    const profileCard = document.querySelector('.profile-photo-card');
    const missionCard = document.getElementById('mission-card');
    const visionCard = document.getElementById('vision-card');

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (profileCard) profileCard.classList.add('slide-left');
                    if (missionCard) missionCard.classList.add('flip-in');
                    if (visionCard) {
                        setTimeout(() => visionCard.classList.add('flip-in'), 200);
                    }
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        aboutObserver.observe(aboutSection);
    }

    // ─── 5. Work Experience Animations ───
    const expCards = document.querySelectorAll('.exp-card');
    expCards.forEach((card, idx) => {
        if (idx % 2 === 0) {
            card.classList.add('slide-left-card');
        } else {
            card.classList.add('slide-right-card');
        }

        const expObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stagger bullets
                    const bullets = entry.target.querySelectorAll('.exp-bullets li');
                    bullets.forEach((b, bIdx) => {
                        setTimeout(() => {
                            b.style.opacity = '1';
                            b.style.transform = 'translateY(0)';
                        }, bIdx * 150);
                    });
                    expObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        expObserver.observe(card);
    });

    // ─── 6. Education Animations ───
    const eduCards = document.querySelectorAll('.edu-card');
    eduCards.forEach((card, idx) => {
        if (idx === 0) card.classList.add('drop-down');
        else card.classList.add('rise-up');
    });

    // ─── 7. Projects Animations ───
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(pCard => {
        const pObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const outcomes = entry.target.querySelectorAll('.outcome-box');
                    outcomes.forEach((o, oIdx) => {
                        setTimeout(() => {
                            o.style.opacity = '1';
                            o.style.transform = 'scale(1)';
                        }, oIdx * 120);
                    });
                    pObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        pObserver.observe(pCard);
    });

    // ─── 8. Skills Progress Bar & Counter Animation ───
    const skillCards = document.querySelectorAll('.skill-category-card');
    skillCards.forEach(sCard => {
        const sObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('.skill-bar-fill');
                    const counters = entry.target.querySelectorAll('.skill-percent-num');

                    bars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-value') || '85%';
                        bar.style.width = targetWidth;
                    });

                    counters.forEach(counter => {
                        const targetVal = +counter.getAttribute('data-count') || 85;
                        const duration = 1200;
                        const startTime = performance.now();

                        function updateSkillCount(now) {
                            const elapsed = now - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const current = Math.round(progress * targetVal);
                            counter.textContent = current + '%';

                            if (progress < 1) requestAnimationFrame(updateSkillCount);
                        }

                        requestAnimationFrame(updateSkillCount);
                    });

                    sObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        sObserver.observe(sCard);
    });

    // ─── 9. Certifications 3D Mouse-Follow Tilt ───
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((cCard, idx) => {
        // Random tilt angle on setup
        const rot = (idx % 2 === 0 ? -2 : 2);
        cCard.style.transform = `rotate(${rot}deg)`;

        cCard.addEventListener('mousemove', (e) => {
            const rect = cCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            cCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        cCard.addEventListener('mouseleave', () => {
            cCard.style.transform = `rotate(0deg) translateY(0px)`;
        });
    });

    // ─── 10. Achievements Stat Counters ───
    const statCards = document.querySelectorAll('.stat-counter-num');
    const achievementsSection = document.getElementById('achievements');

    if (achievementsSection) {
        let statsDone = false;
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsDone) {
                    statsDone = true;
                    statCards.forEach(counter => {
                        const target = +counter.getAttribute('data-count');
                        const suffix = counter.getAttribute('data-suffix') || '+';
                        const duration = 2000;
                        const startTime = performance.now();

                        function updateStat(now) {
                            const elapsed = now - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const current = Math.round(eased * target);
                            counter.textContent = current + suffix;

                            if (progress < 1) requestAnimationFrame(updateStat);
                        }

                        requestAnimationFrame(updateStat);
                    });
                }
            });
        }, { threshold: 0.2 });

        statsObserver.observe(achievementsSection);
    }

    // ─── 11. Contact Form Submission ───
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            const mailtoLink = `mailto:sumit.kausik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
            window.location.href = mailtoLink;

            alert('Thank you, ' + name + '! Your mail client has been opened to send the message.');
            contactForm.reset();
        });
    }

    // ─── 12. Scroll to Top Button ───
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
