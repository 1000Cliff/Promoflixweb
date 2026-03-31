import { PRICING_LABELS, PricingMode } from './promo-flix-landing/constants';

type PricingModeToggleProps = {
  pricingMode: PricingMode;
  onPricingModeChange?: (mode: PricingMode) => void;
};

function ToggleButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[10px] shrink-0 ${
        active ? 'bg-white shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]' : ''
      }`}
      onClick={onClick}
    >
      <p
        className={`font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] whitespace-nowrap ${
          active ? 'text-black' : 'text-[#5b5c5e]'
        }`}
      >
        {label}
      </p>
    </button>
  );
}

export function PricingModeToggle({ pricingMode, onPricingModeChange }: PricingModeToggleProps) {
  return (
    <div className="bg-[#dce7fd] content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shrink-0" data-name="Monthly/yearly toggle">
      <ToggleButton active={pricingMode === 'monthly'} label={PRICING_LABELS[0]} onClick={() => onPricingModeChange?.('monthly')} />
      <ToggleButton
        active={pricingMode === 'yearly'}
        label={PRICING_LABELS[1]}
        onClick={() => onPricingModeChange?.('yearly')}
      />
    </div>
  );
}
