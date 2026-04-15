export type LoginMode = 'login' | 'signup';
export type PricingMode = 'monthly' | 'yearly';
export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  suffix: string;
};

export type PricingCardMeta = {
  features: string[];
  emphasizedFeatureIndexes?: number[];
  ctaLabel: string;
  ctaUrl: string;
  ctaVariant: 'primary' | 'secondary';
  badgeLabel?: string;
};

export const PRICING_PLANS: Record<PricingMode, PricingPlan[]> = {
  monthly: [
    { name: 'Explorer Plan', description: 'Start a 14-day free trial for lightweight outreach.', price: '$49', suffix: '/mo' },
    { name: 'Rainmaker Plan', description: 'Start a 14-day free trial for growing outreach teams.', price: '$149', suffix: '/mo' },
    { name: 'Titan Plan', description: 'Start a 14-day free trial for maximum reach.', price: '$399', suffix: '/mo' },
  ],
  yearly: [
    { name: 'Explorer Plan', description: 'Start a 14-day free trial for lightweight outreach.', price: '$44', suffix: '/mo' },
    { name: 'Rainmaker Plan', description: 'Start a 14-day free trial for growing outreach teams.', price: '$134', suffix: '/mo' },
    { name: 'Titan Plan', description: 'Start a 14-day free trial for maximum reach.', price: '$359', suffix: '/mo' },
  ],
};

export const PRICING_CARD_META: PricingCardMeta[] = [
  {
    features: [
      'Expect 1–2 customers back',
      'Send up to 100 videos per month',
      '$0.75 per video over the limit',
      'Customize 2 variables',
      'Auto-play thumbnails in inbox',
      'Support via email',
    ],
    emphasizedFeatureIndexes: [0],
    ctaLabel: 'Sign up for Free Trial',
    ctaUrl: 'https://tally.so/r/dWDpPq',
    ctaVariant: 'secondary',
  },
  {
    features: [
      'Expect 4-5 customers back',
      'Send up to 400 videos per month',
      '$0.60 per extra video',
      'Customize 2 variables',
      'Auto-play thumbnails in inbox',
      'Dedicated onboarding',
    ],
    emphasizedFeatureIndexes: [0],
    ctaLabel: 'Sign up for Free Trial',
    ctaUrl: 'https://tally.so/r/lb7x7X',
    ctaVariant: 'primary',
    badgeLabel: 'MOST POPULAR',
  },
  {
    features: [
      'Expect 9-10 customers back',
      'Send up to 1500 videos per month',
      '$0.50 per extra video',
      'Customize 2 variables',
      'Auto-play thumbnails in inbox',
      'Dedicated onboarding',
    ],
    emphasizedFeatureIndexes: [0],
    ctaLabel: 'Sign up for Free Trial',
    ctaUrl: 'https://tally.so/r/1AJLD1',
    ctaVariant: 'primary',
  },
];

export const PRICING_LABELS = ['Monthly', 'Yearly (Save 10%)'] as const;
