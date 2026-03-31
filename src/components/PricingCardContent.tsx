import { PricingPlan } from './promo-flix-landing/constants';

type PricingCardContentProps = {
  plan: PricingPlan;
};

export function PricingCardContent({ plan }: PricingCardContentProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Main text">
          <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">{plan.name}</p>
          <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">{plan.description}</p>
        </div>
        <div className="content-stretch flex font-['Geist:semibold',sans-serif] items-baseline relative shrink-0 whitespace-nowrap" data-name="Price">
          <p className="leading-[1.3] relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">{plan.price}</p>
          {plan.suffix ? <p className="leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[20px]">{plan.suffix}</p> : null}
        </div>
      </div>
    </div>
  );
}
