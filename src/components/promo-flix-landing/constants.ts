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
  ctaVariant: 'primary' | 'secondary';
  badgeLabel?: string;
};

export const PRICING_PLANS: Record<PricingMode, PricingPlan[]> = {
  monthly: [
    { name: 'Free forever', description: 'Perfect for trying out personalized video at no cost.', price: '$0', suffix: '' },
    { name: 'Explorer Plan', description: 'Great for getting started with scalable outreach.', price: '$49', suffix: '/mo' },
    { name: 'Rainmaker Plan', description: 'Ideal for growing outreach with higher volume.', price: '$149', suffix: '/mo' },
    { name: 'Titan Plan', description: 'Best for power users needing maximum reach.', price: '$399', suffix: '/mo' },
  ],
  yearly: [
    { name: 'Free forever', description: 'Perfect for trying out personalized video at no cost.', price: '$0', suffix: '' },
    { name: 'Explorer Plan', description: 'Great for getting started with scalable outreach.', price: '$44', suffix: '/mo' },
    { name: 'Rainmaker Plan', description: 'Ideal for growing outreach with higher volume.', price: '$134', suffix: '/mo' },
    { name: 'Titan Plan', description: 'Best for power users needing maximum reach.', price: '$359', suffix: '/mo' },
  ],
};

export const PRICING_CARD_META: PricingCardMeta[] = [
  {
    features: [
      'Personalize videos with your prospect’s name',
      'Try sending up to 15 messages',
      'Explore the full system before upgrading',
      'Customize 1 variable',
      'Support via email',
    ],
    ctaLabel: 'Start free',
    ctaVariant: 'secondary',
  },
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
    ctaLabel: 'Choose Plan',
    ctaVariant: 'primary',
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
    ctaLabel: 'Choose Plan',
    ctaVariant: 'primary',
    badgeLabel: 'MOST POPULAR',
  },
  {
    features: [
      'Expect 4-5 customers back',
      'Send up to 1500 videos per month',
      '$0.50 per extra video',
      'Customize 2 variables',
      'Auto-play thumbnails in inbox',
      'Dedicated onboarding',
    ],
    emphasizedFeatureIndexes: [0],
    ctaLabel: 'Choose Plan',
    ctaVariant: 'primary',
  },
];

export const PRICING_LABELS = ['Monthly', 'Yearly (Save 10%)'] as const;
