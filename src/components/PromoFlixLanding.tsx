import { useEffect, useState } from 'react';
import Layout1440 from '../designs/Layout1440';
import Layout1024 from '../designs/Layout1024';
import Layout768 from '../designs/Layout768';
import Layout375 from '../designs/Layout375';
import { LoginModal } from './LoginModal';

function getSectionTarget(label: string) {
  if (label.includes('How it works')) {
    return document.getElementById('how-it-works');
  }

  if (label.includes('See real example')) {
    return document.getElementById('industries');
  }

  if (label.includes('Pricing')) {
    return document.getElementById('pricing');
  }

  return null;
}

function setupLoopingTrack(section: HTMLElement, track: HTMLElement, cardSelector: string, trackClass: string) {
  track.classList.add(trackClass);
  const cards = Array.from(track.children).filter((child) => {
    return child instanceof HTMLElement && child.matches(cardSelector);
  });

  const computedStyle = window.getComputedStyle(track);
  const gapValue = Number.parseFloat(computedStyle.gap || computedStyle.columnGap || '0') || 0;

  if (track.dataset.marqueeReady !== 'true') {
    cards.forEach((child) => {
      const clone = child.cloneNode(true);
      if (clone instanceof HTMLElement) {
        clone.setAttribute('aria-hidden', 'true');
        clone.dataset.clone = 'true';
        track.appendChild(clone);
      }
    });

    track.dataset.marqueeReady = 'true';
  }

  const originalWidth = cards.reduce((total, card, index) => {
    return total + card.getBoundingClientRect().width + (index > 0 ? gapValue : 0);
  }, 0);

  section.dataset.hasMarquee = 'true';
  track.style.setProperty('--loop-distance', `${originalWidth}px`);
  return originalWidth;
}

export function PromoFlixLanding() {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginMode, setLoginMode] = useState<'login' | 'signup'>('login');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const cleanupFns: Array<() => void> = [];

    const applySectionIds = () => {
      const howItWorks = document.querySelector('[data-name="How it works aka solution"]');
      const industries = document.querySelector('[data-name="How teams use promoflix"]');
      const pricing = document.querySelector('[data-name="Pricing"]');

      if (howItWorks instanceof HTMLElement) {
        howItWorks.id = 'how-it-works';
      }

      if (industries instanceof HTMLElement) {
        industries.id = 'industries';
      }

      if (pricing instanceof HTMLElement) {
        pricing.id = 'pricing';
      }
    };

    const setupIndustriesMarquee = () => {
      const section = document.querySelector('[data-name="How teams use promoflix"]');
      if (!(section instanceof HTMLElement)) {
        return;
      }

      const container = section.querySelector('[data-name="container"]');
      if (!(container instanceof HTMLElement)) {
        return;
      }

      const track = Array.from(container.children).find((child, index) => {
        return index === 1 && child instanceof HTMLElement;
      });

      if (!(track instanceof HTMLElement)) {
        return;
      }

      const originalWidth = setupLoopingTrack(section, track, '[data-name="CARD (for now)"]', 'industries-marquee-track');
      if (track.dataset.autoMarqueeReady === 'true' || originalWidth <= 0) {
        return;
      }

      let rafId = 0;
      let lastTimestamp = 0;
      let offset = 0;
      const pxPerSecond = 36;
      const pauseUntil = { value: 0 };

      const pause = () => {
        pauseUntil.value = Date.now() + 2000;
      };

      const step = (timestamp: number) => {
        if (!track.isConnected) {
          return;
        }

        if (!lastTimestamp) {
          lastTimestamp = timestamp;
        }

        if (!track.matches(':hover') && Date.now() > pauseUntil.value) {
          const delta = timestamp - lastTimestamp;
          offset -= (pxPerSecond * delta) / 1000;

          if (Math.abs(offset) >= originalWidth) {
            offset += originalWidth;
          }

          track.style.transform = `translate3d(${offset}px, 0, 0)`;
        }

        lastTimestamp = timestamp;
        rafId = window.requestAnimationFrame(step);
      };

      track.dataset.autoMarqueeReady = 'true';
      track.addEventListener('mouseenter', pause);
      track.addEventListener('wheel', pause, { passive: true });
      track.addEventListener('touchstart', pause, { passive: true });
      rafId = window.requestAnimationFrame(step);

      cleanupFns.push(() => {
        window.cancelAnimationFrame(rafId);
        track.style.transform = '';
        track.removeEventListener('mouseenter', pause);
        track.removeEventListener('wheel', pause);
        track.removeEventListener('touchstart', pause);
      });
    };

    const setupTestimonialsScroller = () => {
      const section = document.querySelector('[data-name="Testimonials"]');
      if (!(section instanceof HTMLElement)) {
        return;
      }

      const containers = Array.from(section.querySelectorAll('[data-name="Container"]'));
      const track = containers.at(-1);
      if (!(track instanceof HTMLElement)) {
        return;
      }

      const cards = Array.from(track.children).filter((child) => {
        return child instanceof HTMLElement && child.matches('[data-name="Testimonial card"]');
      }) as HTMLElement[];

      if (cards.length === 0) {
        return;
      }

      const originalWidth = setupLoopingTrack(section, track, '[data-name="Testimonial card"]', 'testimonials-loop-track');
      if (track.dataset.testimonialsAutoScrollReady === 'true' || originalWidth <= 0) {
        return;
      }

      let rafId = 0;
      let lastTimestamp = 0;
      const pxPerSecond = 32;
      const pauseUntil = { value: 0 };

      const pauseAutoScroll = () => {
        pauseUntil.value = Date.now() + 3000;
      };

      const step = (timestamp: number) => {
        if (!track.isConnected) {
          return;
        }

        if (!lastTimestamp) {
          lastTimestamp = timestamp;
        }

        if (!track.matches(':hover') && Date.now() > pauseUntil.value) {
          const delta = timestamp - lastTimestamp;
          track.scrollLeft += (pxPerSecond * delta) / 1000;

          if (track.scrollLeft >= originalWidth) {
            track.scrollLeft -= originalWidth;
          }
        }

        lastTimestamp = timestamp;
        rafId = window.requestAnimationFrame(step);
      };

      track.dataset.testimonialsAutoScrollReady = 'true';
      track.addEventListener('mouseenter', pauseAutoScroll);
      track.addEventListener('wheel', pauseAutoScroll, { passive: true });
      track.addEventListener('touchstart', pauseAutoScroll, { passive: true });
      track.addEventListener('pointerdown', pauseAutoScroll);
      rafId = window.requestAnimationFrame(step);

      cleanupFns.push(() => {
        window.cancelAnimationFrame(rafId);
        track.removeEventListener('mouseenter', pauseAutoScroll);
        track.removeEventListener('wheel', pauseAutoScroll);
        track.removeEventListener('touchstart', pauseAutoScroll);
        track.removeEventListener('pointerdown', pauseAutoScroll);
      });
    };

    const setupPricingToggle = () => {
      const section = document.querySelector('[data-name="Pricing"]');
      if (!(section instanceof HTMLElement)) {
        return;
      }

      const toggle = section.querySelector('[data-name="Monthly/yearly toggle"]');
      const cards = Array.from(section.querySelectorAll('[data-name="Pricing card"]')).filter((card) => card instanceof HTMLElement) as HTMLElement[];
      if (!(toggle instanceof HTMLElement) || cards.length < 4) {
        return;
      }

      const buttons = Array.from(toggle.children).filter((child) => child instanceof HTMLElement) as HTMLElement[];
      if (buttons.length < 2) {
        return;
      }

      buttons[0].dataset.pricingMode = 'monthly';
      buttons[1].dataset.pricingMode = 'yearly';

      const plans = {
        monthly: [
          { name: 'Free forever', price: '$0', suffix: '' },
          { name: 'Explorer Plan', price: '$49', suffix: '/mo' },
          { name: 'Rainmaker Plan', price: '$149', suffix: '/mo' },
          { name: 'Titan Plan', price: '$399', suffix: '/mo' },
        ],
        yearly: [
          { name: 'Free forever', price: '$0', suffix: '' },
          { name: 'Explorer Plan', price: '$44', suffix: '/mo' },
          { name: 'Rainmaker Plan', price: '$134', suffix: '/mo' },
          { name: 'Titan Plan', price: '$359', suffix: '/mo' },
        ],
      } as const;

      const renderPlanState = (mode: keyof typeof plans) => {
        cards.forEach((card, index) => {
          const plan = plans[mode][index];
          const title = card.querySelector('[data-name="Main text"] > p:first-child');
          if (title instanceof HTMLElement) {
            title.textContent = plan.name;
          }

          const priceBlock = card.querySelector('[data-name="Price"]');
          if (!(priceBlock instanceof HTMLElement)) {
            return;
          }

          let price = priceBlock.querySelector('p:first-child');
          if (!(price instanceof HTMLElement)) {
            price = document.createElement('p');
            priceBlock.prepend(price);
          }

          price.textContent = plan.price;
          price.style.display = 'block';
          price.style.visibility = 'visible';
          price.style.opacity = '1';

          let suffix = priceBlock.querySelector('p:last-child');
          if (!(suffix instanceof HTMLElement) || suffix === price) {
            suffix = document.createElement('p');
            priceBlock.appendChild(suffix);
          }

          suffix.textContent = plan.suffix;
          suffix.style.display = plan.suffix ? 'block' : 'none';
          suffix.style.visibility = plan.suffix ? 'visible' : 'hidden';
          suffix.style.opacity = plan.suffix ? '1' : '0';

          priceBlock.style.display = 'flex';
          priceBlock.style.alignItems = 'baseline';
          priceBlock.style.gap = '0';
          priceBlock.style.visibility = 'visible';
          priceBlock.style.opacity = '1';
        });

        const labels = ['Monthly', 'Yearly (Save 10%)'];
        buttons.forEach((button, index) => {
          const isActive = (mode === 'monthly' && index === 0) || (mode === 'yearly' && index === 1);
          button.style.background = isActive ? '#ffffff' : 'transparent';
          button.style.boxShadow = isActive ? '0px 1px 4px rgba(12,12,13,0.05)' : 'none';
          button.style.cursor = 'pointer';

          const text = button.querySelector('p');
          if (text instanceof HTMLElement) {
            text.textContent = labels[index];
            text.style.color = isActive ? '#000000' : '#5b5c5e';
            text.style.visibility = 'visible';
            text.style.opacity = '1';
          }
        });

        toggle.dataset.activePricingMode = mode;
      };

      if (toggle.dataset.pricingReady !== 'true') {
        toggle.addEventListener('click', (event) => {
          const target = event.target;
          if (!(target instanceof HTMLElement)) {
            return;
          }

          const selected = target.closest('[data-pricing-mode]');
          if (!(selected instanceof HTMLElement)) {
            return;
          }

          const mode = selected.dataset.pricingMode;
          if (mode === 'monthly' || mode === 'yearly') {
            renderPlanState(mode);
          }
        });

        toggle.dataset.pricingReady = 'true';
      }

      renderPlanState('yearly');
    };

    const setupInteractivity = () => {
      applySectionIds();
      setupIndustriesMarquee();
      setupTestimonialsScroller();
      setupPricingToggle();

      const targets = document.querySelectorAll('[data-name="Button"], [data-name*="Button"], button, a, [role="button"]');

      targets.forEach((target) => {
        if (!(target instanceof HTMLElement) || target.dataset.interactiveAdded === 'true') {
          return;
        }

        target.dataset.interactiveAdded = 'true';
        target.style.cursor = 'pointer';

        target.addEventListener('click', (event) => {
          const label = target.textContent?.replace(/\s+/g, ' ').trim() ?? '';
          const sectionTarget = getSectionTarget(label);

          if (sectionTarget) {
            event.preventDefault();
            sectionTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }

          if (label.includes('Login')) {
            event.preventDefault();
            setLoginMode('login');
            setShowLoginModal(true);
            return;
          }

          if (label.includes('Estimate your ROI')) {
            event.preventDefault();
            window.open('https://promoflix.ai/roi-calculator/', '_blank', 'noopener,noreferrer');
            return;
          }

          if (
            label.includes('Try') ||
            label.includes('Choose Plan') ||
            label.includes('Get a real example') ||
            label.includes('See real example') ||
            label.includes('Watch demo')
          ) {
            event.preventDefault();
            setLoginMode('signup');
            setShowLoginModal(true);
          }
        });
      });
    };

    let timeoutId = 0;
    const frameId = window.requestAnimationFrame(() => {
      setupInteractivity();
      timeoutId = window.setTimeout(setupInteractivity, 0);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, [width]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLayout =
    width >= 1440 ? <Layout1440 /> :
    width >= 1024 ? <Layout1024 /> :
    width >= 768 ? <Layout768 /> :
    <Layout375 />;

  return (
    <div className="min-h-screen bg-white">
      {currentLayout}

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} initialMode={loginMode} />
      )}

      {showScrollTop && (
        <button
          aria-label="Scroll to top"
          className="fixed bottom-8 left-8 z-50 rounded-full bg-black p-4 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
          onClick={scrollToTop}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
