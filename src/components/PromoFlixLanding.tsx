import { lazy, Suspense, useState, type MouseEvent } from 'react';
import { useScrollTopVisibility, useViewportWidth } from './promo-flix-landing/hooks';
import { PricingMode } from './promo-flix-landing/constants';

const Layout1440 = lazy(() => import('../designs/Layout1440'));
const Layout1024 = lazy(() => import('../designs/Layout1024'));
const Layout768 = lazy(() => import('../designs/Layout768'));
const Layout375 = lazy(() => import('../designs/Layout375'));

const INTERACTIVE_SELECTOR = '[data-action], [data-name="Button"], [data-name*="Button"], button, a, [role="button"]';
const LOGIN_URL = 'https://app.promoflix.ai/auth/login';
const SIGNUP_URL = 'https://app.promoflix.ai/auth/signup';
const PLAN_URL = 'https://app.promoflix.ai/home/plan';

export function PromoFlixLanding() {
  const width = useViewportWidth();
  const showScrollTop = useScrollTopVisibility(500);
  const [pricingMode, setPricingMode] = useState<PricingMode>('yearly');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLandingClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const interactiveTarget = target.closest(INTERACTIVE_SELECTOR);
    if (!(interactiveTarget instanceof HTMLElement)) {
      return;
    }

    const { action, externalUrl, loginMode: nextLoginMode, sectionTarget } = interactiveTarget.dataset;
    const label = interactiveTarget.textContent?.replace(/\s+/g, ' ').trim() ?? '';

    if (action === 'scroll-to-section' && sectionTarget) {
      const section = document.getElementById(sectionTarget);
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    if (action === 'open-login-modal') {
      event.preventDefault();
      if (label === 'Choose Plan') {
        window.location.assign(PLAN_URL);
        return;
      }

      window.location.assign(nextLoginMode === 'login' ? LOGIN_URL : SIGNUP_URL);
      return;
    }

    if (action === 'open-external-url' && externalUrl) {
      event.preventDefault();
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (label === 'Choose Plan') {
      event.preventDefault();
      window.location.assign(PLAN_URL);
    }
  };

  const currentLayout =
    width >= 1440 ? <Layout1440 pricingMode={pricingMode} onPricingModeChange={setPricingMode} /> :
    width >= 1024 ? <Layout1024 pricingMode={pricingMode} onPricingModeChange={setPricingMode} /> :
    width >= 768 ? <Layout768 pricingMode={pricingMode} onPricingModeChange={setPricingMode} /> :
    <Layout375 pricingMode={pricingMode} onPricingModeChange={setPricingMode} />;

  return (
    <div className="min-h-screen bg-white" onClick={handleLandingClick}>
      <Suspense fallback={<div className="min-h-screen bg-white" />}>{currentLayout}</Suspense>

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
