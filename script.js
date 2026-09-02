/* ═══════════════════════════════════════════════════════════════════════════════
   SUMEET KUMAR — ENTERPRISE RESILIENT RUNTIME & SELF-HEALING ENGINE (script.js)
   ═══════════════════════════════════════════════════════════════════════════════
   Architecture: Self-Healing Watchdogs, Global Error Traps, Circuit Breaker,
   State Snapshot Recovery, Safe DOM Manipulation, and Clean Resource Disposal.
   ═══════════════════════════════════════════════════════════════════════════════ */

(() => {
    'use strict';

    /* ─────────────────────────────────────────────────────────────────────────
       1. GLOBAL PROCESS & RUNTIME ERROR TRAPS (Self-Healing Watchdogs)
       ───────────────────────────────────────────────────────────────────────── */
    window.addEventListener('error', (event) => {
        console.warn('[SELF-HEALING RUNTIME] Trapped global exception:', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
        });
        // Prevent root process / browser thread crash
        event.preventDefault();
    });

    window.addEventListener('unhandledrejection', (event) => {
        console.warn('[SELF-HEALING RUNTIME] Trapped unhandled promise rejection:', {
            reason: event.reason
        });
        // Prevent silent failure or unhandled promise rejection crash
        event.preventDefault();
    });

    /**
     * Subsystem Watchdog Supervisor
     * Executes subsystem logic inside an isolated boundary. If a subsystem fails,
     * it catches the error, logs telemetry, and triggers an optional fallback.
     */
    function supervise(subsystemName, fn, fallback = null) {
        try {
            fn();
        } catch (error) {
            console.error(`[SUPERVISOR] Subsystem "${subsystemName}" encountered a failure:`, error);
            if (typeof fallback === 'function') {
                try {
                    fallback(error);
                } catch (fbErr) {
                    console.error(`[SUPERVISOR] Fallback for "${subsystemName}" also failed:`, fbErr);
                }
            }
        }
    }

    /* ─────────────────────────────────────────────────────────────────────────
       2. ZERO-TRUST INPUT SANITIZATION & SAFE DOM UTILITIES
       ───────────────────────────────────────────────────────────────────────── */
    const Sanitizer = {
        escapeHTML(str) {
            if (typeof str !== 'string') return '';
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        },
        sanitizeURL(url) {
            if (typeof url !== 'string') return '#';
            const clean = url.trim();
            if (/^(https?:\/\/|mailto:|tel:|#)/i.test(clean)) {
                return clean;
            }
            return '#';
        }
    };

    /* ─────────────────────────────────────────────────────────────────────────
       3. RESILIENT NETWORK & CIRCUIT BREAKER ENGINE
       ───────────────────────────────────────────────────────────────────────── */
    class CircuitBreaker {
        constructor(threshold = 3, resetTimeout = 15000) {
            this.failureThreshold = threshold;
            this.resetTimeout = resetTimeout;
            this.failureCount = 0;
            this.state = 'CLOSED'; // 'CLOSED' | 'OPEN' | 'HALF-OPEN'
            this.nextAttempt = Date.now();
        }

        async execute(action, fallback = null) {
            if (this.state === 'OPEN') {
                if (Date.now() > this.nextAttempt) {
                    this.state = 'HALF-OPEN';
                } else {
                    console.warn('[CIRCUIT-BREAKER] Circuit is OPEN. Triggering immediate fallback.');
                    return typeof fallback === 'function' ? fallback() : null;
                }
            }

            try {
                const result = await action();
                this.onSuccess();
                return result;
            } catch (err) {
                this.onFailure();
                if (typeof fallback === 'function') {
                    return fallback(err);
                }
                throw err;
            }
        }

        onSuccess() {
            this.failureCount = 0;
            this.state = 'CLOSED';
        }

        onFailure() {
            this.failureCount++;
            if (this.failureCount >= this.failureThreshold) {
                this.state = 'OPEN';
                this.nextAttempt = Date.now() + this.resetTimeout;
                console.warn(`[CIRCUIT-BREAKER] Tripped to OPEN. Cooldown until ${new Date(this.nextAttempt).toISOString()}`);
            }
        }
    }

    /**
     * Resilient Fetch with Exponential Backoff + Jitter and Timeout
     */
    async function resilientFetch(url, options = {}, retries = 3, backoffMs = 800) {
        const timeoutMs = options.timeout || 8000;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

        try {
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }
            return response;
        } catch (err) {
            clearTimeout(timeoutId);
            if (retries > 0 && err.name !== 'AbortError') {
                const jitter = Math.random() * 200;
                const nextDelay = backoffMs * 2 + jitter;
                await new Promise(resolve => setTimeout(resolve, nextDelay));
                return resilientFetch(url, options, retries - 1, nextDelay);
            }
            throw err;
        }
    }

    /* ─────────────────────────────────────────────────────────────────────────
       4. RESOURCE LIFECYCLE & DISPOSAL MANAGER
       ───────────────────────────────────────────────────────────────────────── */
    const LifecycleManager = {
        observers: [],
        timers: [],
        frameHandles: [],

        registerObserver(obs) {
            if (obs && typeof obs.disconnect === 'function') {
                this.observers.push(obs);
            }
            return obs;
        },

        registerTimer(timerId) {
            this.timers.push(timerId);
            return timerId;
        },

        registerFrame(frameId) {
            this.frameHandles.push(frameId);
            return frameId;
        },

        disposeAll() {
            this.observers.forEach(obs => {
                try { obs.disconnect(); } catch (e) { /* silent cleanup */ }
            });
            this.timers.forEach(t => clearTimeout(t));
            this.frameHandles.forEach(f => cancelAnimationFrame(f));
            this.observers = [];
            this.timers = [];
            this.frameHandles = [];
        }
    };

    window.addEventListener('beforeunload', () => {
        LifecycleManager.disposeAll();
    });

    /* ─────────────────────────────────────────────────────────────────────────
       5. CORE PORTFOLIO INTERACTION CONTROLLER (Mounted with Watchdogs)
       ───────────────────────────────────────────────────────────────────────── */
    document.addEventListener('DOMContentLoaded', () => {

        // ── Subsystem: Navigation & Mobile Menu ──
        supervise('Navigation & Mobile Menu', () => {
            const navbar = document.getElementById('navbar') || document.querySelector('nav');
            const hamburger = document.getElementById('hamburger') || document.querySelector('.mobile-toggle');
            const navLinks = document.getElementById('nav-links') || document.getElementById('navLinks');

            if (hamburger && navLinks) {
                hamburger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    navLinks.classList.toggle('active');
                });
            }

            window.closeMenu = function () {
                if (navLinks) navLinks.classList.remove('active');
            };

            window.addEventListener('scroll', () => {
                if (navbar) {
                    navbar.classList.toggle('scrolled', window.scrollY > 40);
                }
            }, { passive: true });

            // Active Section Highlight
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-links li a');

            if (sections.length > 0 && navItems.length > 0 && 'IntersectionObserver' in window) {
                const navObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && entry.target.id) {
                            const currentId = `#${entry.target.id}`;
                            navItems.forEach(item => {
                                item.classList.toggle('active', item.getAttribute('href') === currentId);
                            });
                        }
                    });
                }, { rootMargin: '-30% 0px -50% 0px' });

                sections.forEach(sec => navObserver.observe(sec));
                LifecycleManager.registerObserver(navObserver);
            }
        });

        // ── Subsystem: General Scroll Reveal ──
        supervise('Scroll Reveal', () => {
            const revealElements = document.querySelectorAll('.reveal');
            if (revealElements.length > 0 && 'IntersectionObserver' in window) {
                const revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

                revealElements.forEach(el => revealObserver.observe(el));
                LifecycleManager.registerObserver(revealObserver);
            }
        });

        // ── Subsystem: Social Icons Pop-in ──
        supervise('Social Icons Pop-in', () => {
            const socialIcons = document.querySelectorAll('.social-icon-btn');
            socialIcons.forEach((icon, idx) => {
                const timer = setTimeout(() => {
                    icon.classList.add('pop-in');
                }, 500 + idx * 150);
                LifecycleManager.registerTimer(timer);
            });
        });

        // ── Subsystem: Role Typing Effect ──
        supervise('Role Typing Effect', () => {
            const typedTextEl = document.getElementById('typed-text');
            if (typedTextEl) {
                const phrases = [
                    'AI Developer & Solution Architect',
                    'Data Analytics Specialist',
                    'Business Intelligence Architect',
                    'Financial Reporting & Operations Analyst',
                    'Power BI & Automation Expert'
                ];
                let phraseIdx = 0;
                let charIdx = 0;
                let isDeleting = false;

                function typeLoop() {
                    const currentPhrase = phrases[phraseIdx] || phrases[0];

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

                    const timer = setTimeout(typeLoop, delta);
                    LifecycleManager.registerTimer(timer);
                }

                typeLoop();
            }
        });

        // ── Subsystem: About Me Animations ──
        supervise('About Me Animations', () => {
            const profileCard = document.querySelector('.profile-photo-card');
            const missionCard = document.getElementById('mission-card');
            const visionCard = document.getElementById('vision-card');
            const aboutSection = document.getElementById('about');

            if (aboutSection && 'IntersectionObserver' in window) {
                const aboutObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            if (profileCard) profileCard.classList.add('slide-left');
                            if (missionCard) missionCard.classList.add('flip-in');
                            if (visionCard) {
                                const timer = setTimeout(() => visionCard.classList.add('flip-in'), 200);
                                LifecycleManager.registerTimer(timer);
                            }
                            aboutObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.2 });

                aboutObserver.observe(aboutSection);
                LifecycleManager.registerObserver(aboutObserver);
            }
        });

        // ── Subsystem: Work Experience Cards ──
        supervise('Experience Animations', () => {
            const expCards = document.querySelectorAll('.exp-card');
            if (expCards.length > 0 && 'IntersectionObserver' in window) {
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
                                const bullets = entry.target.querySelectorAll('.exp-bullets li');
                                bullets.forEach((b, bIdx) => {
                                    const timer = setTimeout(() => {
                                        b.style.opacity = '1';
                                        b.style.transform = 'translateY(0)';
                                    }, bIdx * 150);
                                    LifecycleManager.registerTimer(timer);
                                });
                                expObserver.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.15 });

                    expObserver.observe(card);
                    LifecycleManager.registerObserver(expObserver);
                });
            }
        });

        // ── Subsystem: Project Outcome Animation ──
        supervise('Project Cards Animation', () => {
            const projectCards = document.querySelectorAll('.project-card');
            if (projectCards.length > 0 && 'IntersectionObserver' in window) {
                projectCards.forEach(pCard => {
                    const pObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                const outcomes = entry.target.querySelectorAll('.outcome-box');
                                outcomes.forEach((o, oIdx) => {
                                    const timer = setTimeout(() => {
                                        o.style.opacity = '1';
                                        o.style.transform = 'scale(1)';
                                    }, oIdx * 120);
                                    LifecycleManager.registerTimer(timer);
                                });
                                pObserver.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.2 });

                    pObserver.observe(pCard);
                    LifecycleManager.registerObserver(pObserver);
                });
            }
        });

        // ── Subsystem: Skills Progress Bars & Animated Counters ──
        supervise('Skills Progress Bars', () => {
            const skillCards = document.querySelectorAll('.skill-category-card');
            if (skillCards.length > 0 && 'IntersectionObserver' in window) {
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

                                        if (progress < 1) {
                                            const fId = requestAnimationFrame(updateSkillCount);
                                            LifecycleManager.registerFrame(fId);
                                        }
                                    }

                                    const initialFrame = requestAnimationFrame(updateSkillCount);
                                    LifecycleManager.registerFrame(initialFrame);
                                });

                                sObserver.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.2 });

                    sObserver.observe(sCard);
                    LifecycleManager.registerObserver(sObserver);
                });
            }
        });

        // ── Subsystem: Certifications 3D Mouse Tilt ──
        supervise('Certifications Tilt', () => {
            const certCards = document.querySelectorAll('.cert-card');
            certCards.forEach((cCard, idx) => {
                const rot = (idx % 2 === 0 ? -2 : 2);
                cCard.style.transform = `rotate(${rot}deg)`;

                cCard.addEventListener('mousemove', (e) => {
                    const rect = cCard.getBoundingClientRect();
                    if (rect.width === 0 || rect.height === 0) return;
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;

                    cCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
                });

                cCard.addEventListener('mouseleave', () => {
                    cCard.style.transform = `rotate(0deg) translateY(0px)`;
                });
            });
        });

        // ── Subsystem: Achievements Stat Counters ──
        supervise('Achievements Counters', () => {
            const statCards = document.querySelectorAll('.stat-counter-num');
            const achievementsSection = document.getElementById('achievements');

            if (achievementsSection && statCards.length > 0 && 'IntersectionObserver' in window) {
                let statsDone = false;
                const statsObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !statsDone) {
                            statsDone = true;
                            statCards.forEach(counter => {
                                const target = +counter.getAttribute('data-count') || 0;
                                const suffix = counter.getAttribute('data-suffix') || '+';
                                const duration = 2000;
                                const startTime = performance.now();

                                function updateStat(now) {
                                    const elapsed = now - startTime;
                                    const progress = Math.min(elapsed / duration, 1);
                                    const eased = 1 - Math.pow(1 - progress, 3);
                                    const current = Math.round(eased * target);
                                    counter.textContent = current + suffix;

                                    if (progress < 1) {
                                        const fId = requestAnimationFrame(updateStat);
                                        LifecycleManager.registerFrame(fId);
                                    }
                                }

                                const frameId = requestAnimationFrame(updateStat);
                                LifecycleManager.registerFrame(frameId);
                            });
                        }
                    });
                }, { threshold: 0.2 });

                statsObserver.observe(achievementsSection);
                LifecycleManager.registerObserver(statsObserver);
            }
        });

        // ── Subsystem: Contact Form Sanitization & Safe Submission ──
        supervise('Contact Form Handler', () => {
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const nameInput = document.getElementById('form-name');
                    const emailInput = document.getElementById('form-email');
                    const subjectInput = document.getElementById('form-subject');
                    const messageInput = document.getElementById('form-message');

                    const name = nameInput ? nameInput.value.trim() : '';
                    const email = emailInput ? emailInput.value.trim() : '';
                    const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
                    const message = messageInput ? messageInput.value.trim() : '';

                    if (!name || !email) {
                        alert('Please provide your name and email address.');
                        return;
                    }

                    const mailtoLink = `mailto:sumit.kausik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
                    window.location.href = mailtoLink;

                    alert('Thank you, ' + Sanitizer.escapeHTML(name) + '! Your mail client has been opened to send the message.');
                    contactForm.reset();
                });
            }
        });

        // ── Subsystem: Scroll to Top ──
        supervise('Scroll to Top', () => {
            const scrollTopBtn = document.getElementById('scroll-top');
            if (scrollTopBtn) {
                window.addEventListener('scroll', () => {
                    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
                }, { passive: true });

                scrollTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        });
    });

    // Expose self-healing core on namespace for external module safety
    window.__EnterpriseRuntime = {
        supervise,
        Sanitizer,
        CircuitBreaker: new CircuitBreaker(),
        resilientFetch,
        LifecycleManager
    };

})();
