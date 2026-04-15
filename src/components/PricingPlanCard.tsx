import { PricingCardMeta, PricingPlan } from './promo-flix-landing/constants';
import { PricingCardContent } from './PricingCardContent';

type PricingPlanCardProps = {
  plan: PricingPlan;
  meta: PricingCardMeta;
  className: string;
  featureContainerClassName: string;
};

const CHECK_ICON_PATH =
  'M4.96938 9.03063C4.89961 8.96086 4.84427 8.87804 4.80651 8.78689C4.76876 8.69573 4.74932 8.59804 4.74932 8.49938C4.74932 8.40071 4.76876 8.30302 4.80651 8.21186C4.84427 8.12071 4.89961 8.03789 4.96938 7.96812C5.03914 7.89836 5.12196 7.84302 5.21311 7.80526C5.30427 7.76751 5.40196 7.74807 5.50063 7.74807C5.59929 7.74807 5.69698 7.76751 5.78814 7.80526C5.87929 7.84302 5.96211 7.89836 6.03188 7.96812L7 8.9375L9.96937 5.9675C10.1103 5.8266 10.3014 5.74745 10.5006 5.74745C10.6999 5.74745 10.891 5.8266 11.0319 5.9675C11.1728 6.1084 11.2519 6.29949 11.2519 6.49875C11.2519 6.69801 11.1728 6.8891 11.0319 7.03L7.53188 10.53C7.4622 10.5999 7.3794 10.6554 7.28824 10.6933C7.19708 10.7311 7.09934 10.7506 7.00063 10.7506C6.90191 10.7506 6.80418 10.7311 6.71301 10.6933C6.62185 10.6554 6.53905 10.5999 6.46938 10.53L4.96938 9.03063ZM14.25 3V13C14.25 13.3315 14.1183 13.6495 13.8839 13.8839C13.6495 14.1183 13.3315 14.25 13 14.25H3C2.66848 14.25 2.35054 14.1183 2.11612 13.8839C1.8817 13.6495 1.75 13.3315 1.75 13V3C1.75 2.66848 1.8817 2.35054 2.11612 2.11612C2.35054 1.8817 2.66848 1.75 3 1.75H13C13.3315 1.75 13.6495 1.8817 13.8839 2.11612C14.1183 2.35054 14.25 2.66848 14.25 3ZM12.75 3.25H3.25V12.75H12.75V3.25Z';
const HIGHLIGHT_ICON_PATH =
  'M10.2741 11.3185C10.7355 10.8668 11.0518 10.2878 11.1828 9.65555C11.3138 9.02327 11.2535 8.3663 11.0095 7.76845C10.7655 7.1706 10.349 6.65897 9.8131 6.29883C9.27716 5.93868 8.64609 5.74634 8.00038 5.74634C7.35467 5.74634 6.7236 5.93868 6.18766 6.29883C5.65172 6.65897 5.23521 7.1706 4.99126 7.76845C4.7473 8.3663 4.68697 9.02327 4.81794 9.65555C4.94891 10.2878 5.26526 10.8668 5.72663 11.3185C4.94547 11.7338 4.29601 12.3592 3.85163 13.1241C3.75646 13.2961 3.7326 13.4986 3.78518 13.6879C3.83776 13.8773 3.96258 14.0385 4.13278 14.1368C4.30298 14.2351 4.50497 14.2626 4.69527 14.2135C4.88558 14.1644 5.049 14.0425 5.15038 13.8741C5.44345 13.379 5.86044 12.9687 6.36029 12.6837C6.86015 12.3987 7.42561 12.2488 8.001 12.2488C8.57639 12.2488 9.14186 12.3987 9.64171 12.6837C10.1416 12.9687 10.5586 13.379 10.8516 13.8741C10.8999 13.9613 10.965 14.038 11.0432 14.0998C11.1215 14.1615 11.2112 14.207 11.3072 14.2337C11.4032 14.2603 11.5036 14.2676 11.6024 14.255C11.7013 14.2424 11.7966 14.2103 11.8829 14.1605C11.9692 14.1106 12.0447 14.0441 12.105 13.9648C12.1653 13.8855 12.2091 13.7949 12.234 13.6984C12.2589 13.6019 12.2644 13.5015 12.25 13.4029C12.2356 13.3043 12.2018 13.2095 12.1504 13.1241C11.7057 12.359 11.0557 11.7336 10.2741 11.3185ZM6.25038 8.99977C6.25038 8.65366 6.35302 8.31531 6.54531 8.02753C6.7376 7.73974 7.01091 7.51544 7.33068 7.38298C7.65045 7.25053 8.00232 7.21588 8.34179 7.2834C8.68125 7.35092 8.99307 7.5176 9.23782 7.76234C9.48256 8.00708 9.64923 8.3189 9.71675 8.65837C9.78428 8.99783 9.74962 9.3497 9.61717 9.66947C9.48472 9.98924 9.26041 10.2626 8.97263 10.4548C8.68484 10.6471 8.3465 10.7498 8.00038 10.7498C7.53625 10.7498 7.09113 10.5654 6.76294 10.2372C6.43475 9.90902 6.25038 9.4639 6.25038 8.99977Z';

function FeatureIcon({ emphasized }: { emphasized: boolean }) {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <div className="relative shrink-0 size-[16px]" data-name="Frame">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={emphasized ? HIGHLIGHT_ICON_PATH : CHECK_ICON_PATH} fill="var(--fill-0, #2952E8)" />
        </svg>
      </div>
    </div>
  );
}

export function PricingPlanCard({ plan, meta, className, featureContainerClassName }: PricingPlanCardProps) {
  const emphasizedIndexes = new Set(meta.emphasizedFeatureIndexes ?? []);
  const isPrimary = meta.ctaVariant === 'primary';

  return (
    <div className={className} data-name="Pricing card">
      <PricingCardContent plan={plan} />

      <div className={featureContainerClassName} data-name="Check items">
        <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
          {meta.features.map((feature, index) => {
            const emphasized = emphasizedIndexes.has(index);
            return (
              <div key={feature} className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
                <FeatureIcon emphasized={emphasized} />
                <p
                  className={
                    emphasized ?
                      "flex-[1_0_0] font-['Geist:medium',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]" :
                      "flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#70707b] text-[16px]"
                  }
                >
                  {feature}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative shrink-0 w-full" data-name="Footer">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <div
            className={isPrimary ? 'bg-[#2952e8] h-[48px] relative rounded-[8px] shrink-0 w-full' : 'bg-white h-[48px] relative rounded-[8px] shrink-0 w-full'}
            data-action="open-external-url"
            data-external-url={meta.ctaUrl}
            data-name="Button"
          >
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className={isPrimary ? 'content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full' : 'content-stretch flex items-center justify-center pl-[12px] pr-[18px] py-[8px] relative size-full'}>
                <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
                  <p className={isPrimary ? "font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap" : "font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap"}>
                    {meta.ctaLabel}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            <div
              aria-hidden="true"
              className={
                isPrimary ?
                  'absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]' :
                  'absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]'
              }
            />
          </div>
        </div>
      </div>

      {meta.badgeLabel ? (
        <div className="absolute bg-[#2952e8] content-stretch flex items-center justify-center pb-[3px] pt-[4px] px-[12px] right-0 rounded-bl-[12px] rounded-tr-[12px] top-0">
          <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#fafafa] text-[14px] uppercase whitespace-nowrap">{meta.badgeLabel}</p>
        </div>
      ) : null}
    </div>
  );
}
