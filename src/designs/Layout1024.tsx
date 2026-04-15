import svgPaths from "./svg-mcbjuj6jma";
import imgOriginalLogo from "figma:asset/c2b10a66c9a06b0bf91cd7f627bcbb337569e1e6.png";
import uploadVideoDealership from "../assets/upload-video-dealership.jpg";
import imgImg3 from "figma:asset/a06262fe2ea05c8beb973d432f11447dacfa4019.png";
import imgFrame127 from "figma:asset/1c0e6d432e99c6163cfacb6b675968b38bdded57.png";
import imgImgPlaceholder from "figma:asset/d1ce0c8ed4ba32b0cb22f4484e4c90649ff6e50b.png";
import imgTopContainer from "figma:asset/4082fab549dc89b83375e04762877da0d51b6d60.png";
import imgImgPlaceholder1 from "figma:asset/e280a99005b9bb91b1d04d38ce2c62feeae447bb.png";
import imgImgPlaceholder2 from "figma:asset/c06da22c98853aa9dd4ede926c7f56cbf166968e.png";
import { HeroVideo } from "../components/HeroVideo";
import { IndustriesSection } from "../components/IndustriesSection";
import { PricingModeToggle } from "../components/PricingModeToggle";
import { PricingPlanCard } from "../components/PricingPlanCard";
import { FooterPromoflixGradient } from "../components/FooterPromoflixGradient";
import { FooterLinkColumns } from "../components/FooterLinkColumns";
import { PRICING_CARD_META, PRICING_PLANS, PricingMode, PricingPlan } from "../components/promo-flix-landing/constants";

type LayoutProps = {
  pricingMode?: PricingMode;
  onPricingModeChange?: (mode: PricingMode) => void;
};

function Logo() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Logo">
      <div className="absolute left-0 size-[39.481px] top-0" data-name="Original logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[201.08%] left-[-395.7%] max-w-none top-[-55.91%] w-[732.26%]" src={imgOriginalLogo} />
        </div>
      </div>
      <div className="absolute left-[0.52px] size-[39.481px] top-0">
        <div className="absolute inset-[0_-6.33%_-12.66%_-6.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.4805 44.4805">
            <g filter="url(#filter0_ddiii_1_5500)" id="Ellipse 1">
              <mask fill="white" id="path-1-inside-1_1_5500">
                <path d={svgPaths.p35349600} />
              </mask>
              <path d={svgPaths.p35349600} fill="var(--fill-0, #3D70F2)" />
              <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_1_5500)" stroke="url(#paint0_linear_1_5500)" strokeWidth="3.33333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_1_5500" width="44.4805" x="-1.19209e-07" y="-2.5">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.833333" />
                <feGaussianBlur stdDeviation="0.416667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_5500" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_1_5500" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_1_5500" mode="normal" result="effect2_dropShadow_1_5500" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_5500" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_1_5500" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                <feBlend in2="effect3_innerShadow_1_5500" mode="normal" result="effect4_innerShadow_1_5500" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_1_5500" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect4_innerShadow_1_5500" mode="normal" result="effect5_innerShadow_1_5500" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5500" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
                <stop stopColor="white" stopOpacity="0.12" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoWrap() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[40px]" data-name="Logo wrap">
      <Logo />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Login</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Try for free →</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0" data-action="open-login-modal" data-login-mode="login" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <TextPadding />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-action="open-login-modal" data-login-mode="signup" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[8px] relative rounded-[inherit]">
          <TextPadding1 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function NavWrap() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav wrap">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-action="scroll-to-section" data-section-target="how-it-works" data-name="Button">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">How it works</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-action="scroll-to-section" data-section-target="pricing" data-name="Button">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Pricing</p>
      </div>
      <Actions />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#18181b] text-[48px] tracking-[-0.96px] w-full">Turn one video into hundreds of personal conversations</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full">PromoFlix turns personalized video outreach into a scalable, automated workflow — boosting response rates by 3x.</p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Try it free</p>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">See real example</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-action="open-login-modal" data-login-mode="signup" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
          <TextPadding2 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-action="scroll-to-section" data-section-target="industries" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit]">
          <TextPadding3 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[510px]" data-name="text">
      <Frame48 />
      <Actions1 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1240px] relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[32px] items-center max-w-[inherit] px-[32px] relative w-full">
          <Text />
          <div className="aspect-[720/463] flex-[1_0_0] min-h-px min-w-px relative" data-name="img">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[160px] relative shrink-0 w-full z-[9]" data-name="Hero section">
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p285d6000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <Frame />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full">“Personal” emails that fool no one</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#70707b] text-[15px] w-full">Your emails feel “personalized,” but everyone can tell they’re mass produced.</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative size-full">
          <Frame60 />
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p35212100} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full">Opened, skimmed… and forgotten</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#70707b] text-[15px] w-full">Leads open your messages, skim for a second, and forget you immediately.</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          <Frame62 />
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[22.49%_8.41%_24.99%_12.87%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.894 12.6036">
        <g id="Group">
          <path d={svgPaths.p1cc33100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <Frame2 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full">Personal video doesn’t scale</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#70707b] text-[15px] w-full">Personal videos convert better, but recording one by one doesn’t scale at all.</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-2 self-start shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          <Frame64 />
          <Frame65 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p355a2800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[8px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full">{`Automation that kills authenticity `}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#70707b] text-[15px] w-full">Automation saves time, but it strips away the authenticity people respond to.</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-2 self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative size-full">
          <Frame66 />
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full">
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-between gap-[16px] relative shrink-0 w-full" data-name="Content">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] whitespace-nowrap">You should not have to choose between scale and being human</p>
      <div
        className="bg-[#1d4ed8] relative rounded-[8px] shrink-0"
        data-action="scroll-to-section"
        data-name="Button"
        data-section-target="pricing"
      >
        <div className="content-stretch flex items-center justify-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit] w-full">
          <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Choose Promoflix</p>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame53 />
      <Frame71 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="container">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[32px] relative w-full">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">The problem with modern outreach</p>
        <Frame72 />
      </div>
    </div>
  );
}

function PainPointsSection() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex items-center justify-center overflow-clip py-[88px] relative shrink-0 w-full z-[8]" data-name="Pain points section">
      <Container1 />
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Watch demo video</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-[693px]">Record one video, let AI personalize and deliver it to every lead</p>
      <div className="bg-white relative rounded-[8px] shrink-0 w-[182px]" data-action="open-login-modal" data-login-mode="signup" data-name="Button">
        <div className="content-stretch flex items-center overflow-clip px-[18px] py-[12px] relative rounded-[inherit] w-full">
          <TextPadding4 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">How it works</p>
      <Frame78 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21.711px] not-italic relative shrink-0 text-[#181d27] text-[15.198px] whitespace-nowrap">Beth</p>
    </div>
  );
}

function AvatarAndText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar and text">
      <TextAndSupportingText />
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white content-stretch flex items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[76px]" data-name="Table cell">
      <AvatarAndText />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">2026 RAV4</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[117.24px]" data-name="Table cell">
      <TextAndSupportingText1 />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">bethn@gmail.com</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[156.321px]" data-name="Table cell">
      <TextAndSupportingText2 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[8.684px] items-center relative shrink-0 w-full">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21.711px] not-italic relative shrink-0 text-[#181d27] text-[15.198px] whitespace-nowrap">Anna</p>
    </div>
  );
}

function AvatarAndText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar and text">
      <TextAndSupportingText3 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white content-stretch flex items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[76px]" data-name="Table cell">
      <AvatarAndText1 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">2026 Camry</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[117.24px]" data-name="Table cell">
      <TextAndSupportingText4 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">annajones@fastmail.com</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[156.321px]" data-name="Table cell">
      <TextAndSupportingText5 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[8.684px] items-center relative shrink-0 w-full">
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21.711px] not-italic relative shrink-0 text-[#181d27] text-[15.198px] whitespace-nowrap">Alex</p>
    </div>
  );
}

function AvatarAndText2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar and text">
      <TextAndSupportingText6 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white content-stretch flex items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[75px]" data-name="Table cell">
      <AvatarAndText2 />
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">2026 Tacoma</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[118.326px]" data-name="Table cell">
      <TextAndSupportingText7 />
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">alexki@kihomes.com</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[156.321px]" data-name="Table cell">
      <TextAndSupportingText8 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[8.684px] items-center relative shrink-0 w-full">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21.711px] not-italic relative shrink-0 text-[#181d27] text-[15.198px] whitespace-nowrap">John</p>
    </div>
  );
}

function AvatarAndText3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar and text">
      <TextAndSupportingText9 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white content-stretch flex items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[75px]" data-name="Table cell">
      <AvatarAndText3 />
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">2026 Prius</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[118.326px]" data-name="Table cell">
      <TextAndSupportingText10 />
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.711px] not-italic relative shrink-0 text-[#535862] text-[15.198px] whitespace-nowrap">john821@proton.me</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white content-stretch flex gap-[13.027px] items-center p-[8.684px] relative rounded-[8.684px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[156.321px]" data-name="Table cell">
      <TextAndSupportingText11 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[8.684px] items-center relative shrink-0 w-full">
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[8.733px] items-start left-[calc(50%+0.5px)] top-[calc(50%-0.16px)] w-[367px]">
      <Frame84 />
      <Frame85 />
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function Img() {
  return (
    <div className="bg-[#f4f4f5] h-[286px] overflow-clip relative shrink-0 w-full" data-name="img">
      <Frame98 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-full" data-name="top">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">02</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Upload your contacts</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[24px] relative w-full">
        <Top />
        <p className="font-['Geist:regular',sans-serif] h-[48px] leading-[1.5] overflow-hidden relative shrink-0 text-[#70707b] text-[16px] text-ellipsis w-full">Import a list of people you want to reach. Just upload a spreadsheet with names and emails.</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-[400px]" data-name="Card 1">
      <Img />
      <Text1 />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[12.675px]" data-name="play">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6754 12.6754">
        <g id="play">
          <path d={svgPaths.p101e4280} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.88" strokeWidth="1.05628" />
        </g>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[1.056px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-[calc(50%-0.97px)] p-[6.338px] rounded-[527.614px] top-1/2">
      <Play />
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#cbcbcb] h-[126.754px] overflow-clip relative rounded-[4.225px] shrink-0 w-full">
      <div className="absolute h-[146.452px] left-0 right-[-0.13px] top-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={uploadVideoDealership} />
      </div>
      <Frame91 />
    </div>
  );
}

function PreviewBadge() {
  return (
    <div className="absolute right-[14px] top-[14px] rounded-[999px] bg-[rgba(255,255,255,0.65)] px-[10px] py-[6px] backdrop-blur-[8px]">
      <p className="font-['Geist:semibold',sans-serif] text-[12px] text-white whitespace-nowrap">Hi Chloe</p>
    </div>
  );
}

function PreviewTimer() {
  return (
    <div className="absolute bottom-[16px] left-1/2 flex -translate-x-1/2 items-center gap-[8px] rounded-[999px] bg-[rgba(24,24,27,0.58)] px-[12px] py-[7px] backdrop-blur-[8px]">
      <div className="size-[12px] rounded-full border border-white bg-[#ef4444]" />
      <p className="font-['Geist:semibold',sans-serif] text-[12px] text-white whitespace-nowrap">00.00.00</p>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="absolute left-1/2 top-[18px] h-[206px] w-[304px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-white shadow-[0px_18px_40px_rgba(15,23,42,0.16)]">
      <img alt="" className="size-full object-cover" src={uploadVideoDealership} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0)_26%,rgba(15,23,42,0.18)_100%)]" />
      <PreviewBadge />
      <PreviewTimer />
    </div>
  );
}

function IconAndStatus() {
  return (
    <div className="content-stretch flex gap-[2.63px] items-center relative shrink-0" data-name="Icon and status">
      <div className="overflow-clip relative shrink-0 size-[10.52px]" data-name="upload-cloud-02">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.25%_-5.63%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75267 8.87602">
              <path d={svgPaths.p25243100} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.986225" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.15px] not-italic overflow-hidden relative shrink-0 text-[#717680] text-[9.205px] text-ellipsis whitespace-nowrap">Uploading...</p>
    </div>
  );
}

function SupportingTextAndStatus() {
  return (
    <div className="content-stretch flex gap-[5.26px] items-center relative shrink-0 w-full" data-name="Supporting text and status">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.15px] not-italic overflow-hidden relative shrink-0 text-[#535862] text-[9.205px] text-ellipsis whitespace-nowrap">200 KB of 200 KB</p>
      <div className="h-[7.89px] relative shrink-0 w-0" data-name="Divider">
        <div className="absolute inset-[-4.17%_-0.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.657483 8.54728">
            <path d="M0.328742 0.328742V8.21854" id="Divider" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeWidth="0.657483" />
          </svg>
        </div>
      </div>
      <IconAndStatus />
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col gap-[1.315px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.15px] not-italic overflow-hidden relative shrink-0 text-[#414651] text-[9.205px] text-ellipsis w-full whitespace-nowrap">car-features.mp4</p>
      <SupportingTextAndStatus />
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="flex-[1_0_0] h-[5.26px] min-h-px min-w-px relative rounded-[5.26px]" data-name="Progress bar">
      <div className="absolute bg-[#e9eaeb] h-[5.26px] left-0 right-[0.67px] rounded-[2.63px] top-0" data-name="Background" />
      <div className="absolute bg-[#2952e8] h-[5.26px] left-0 right-[62.22%] rounded-[2.63px] top-0" data-name="Progress" />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex gap-[7.89px] items-center relative shrink-0 w-full" data-name="Progress bar">
      <ProgressBar1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#414651] text-[9.205px] whitespace-nowrap">
        <p className="leading-[13.15px]">35%</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.63px] items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText12 />
      <ProgressBar />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Content2 />
    </div>
  );
}

function FileUploadItemBase() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2.63px] h-[195px] items-start p-[10.52px] relative rounded-[7.89px] w-[224px]" data-name="_File upload item base">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-[0.657px] border-solid inset-0 pointer-events-none rounded-[7.89px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" />
      <Frame92 />
      <Content1 />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[286px] overflow-clip relative shrink-0 w-full" data-name="img">
      <div className="-translate-x-1/2 absolute border border-[#6397f7] border-dashed bottom-[22px] h-[230px] left-1/2 rounded-[20px] top-[18px] w-[328px]" />
      <div className="absolute left-1/2 top-1/2 flex h-[205.301px] w-[232.908px] -translate-x-1/2 -translate-y-1/2 items-center justify-center" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "152" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.69deg]">
          <FileUploadItemBase />
        </div>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-full" data-name="top">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">01</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Upload Video</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[24px] relative w-full">
        <Top1 />
        <p className="font-['Geist:regular',sans-serif] h-[72px] leading-[1.5] overflow-hidden relative shrink-0 text-[#70707b] text-[16px] text-ellipsis w-full">Record or upload a short sales video once. Promoflix will personalize it for every recipient using AI voice synthesis and lip sync technology.</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] self-stretch shrink-0 w-[400px]" data-name="Card 2">
      <Img1 />
      <Text2 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bg-[#e7e5e4] content-stretch flex h-[167.105px] items-start justify-end left-0 pb-[43.234px] pl-[10.809px] pr-[14.411px] pt-[7.206px] rounded-tl-[14.411px] rounded-tr-[14.411px] top-[2.87px] w-[254px]">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#726762] text-[6.707px] uppercase whitespace-nowrap">Video transcript</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#18181b] content-stretch flex items-center justify-center px-[3.188px] py-[1.594px] relative rounded-[1.594px] shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#fafafa] text-[12.111px] whitespace-nowrap">{`{Beth}`}</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[#18181b] content-stretch flex items-center justify-center px-[3.188px] py-[1.594px] relative rounded-[1.594px] shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#fafafa] text-[12.111px] whitespace-nowrap">2026 RAV4</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-center flex flex-wrap gap-[6px_3.46px] items-center relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[12.111px] whitespace-nowrap">Hello</p>
      <Frame82 />
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[12.111px] whitespace-nowrap">,</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[12.111px] whitespace-nowrap">I wanted to talk about some new</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#717680] text-[12.111px] whitespace-nowrap">{`features on the `}</p>
      <Frame83 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[147.053px] items-start px-[25.22px] py-[28.823px] relative rounded-tl-[14.411px] rounded-tr-[14.411px] shrink-0 w-[250.18px]">
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l-[1.49px] border-r-[1.49px] border-solid border-t-[1.49px] inset-0 pointer-events-none rounded-tl-[14.411px] rounded-tr-[14.411px]" />
      <Frame28 />
      <div className="-translate-x-1/2 absolute bg-gradient-to-t bottom-[-1.41px] from-[#f4f4f5] h-[54px] left-[calc(50%+1.11px)] to-[rgba(244,244,245,0)] w-[304px]" />
    </div>
  );
}

function Frame99() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[9.007px] h-[169.97px] items-start left-1/2 px-[1.801px] py-[22.518px] top-[calc(50%+15px)] w-[254px]">
      <Frame86 />
      <Frame29 />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[286px] overflow-clip relative shrink-0 w-full" data-name="img">
      <Frame99 />
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-full" data-name="top">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">03</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Personalize what you say</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[24px] relative w-full">
        <Top2 />
        <p className="font-['Geist:regular',sans-serif] h-[47px] leading-[1.5] overflow-hidden relative shrink-0 text-[#70707b] text-[16px] text-ellipsis w-full">Highlight words like the person’s name or city. We’ll automatically enhance the videos to match each recipient.</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] self-stretch shrink-0 w-[400px]" data-name="Card 3">
      <Img2 />
      <Text3 />
    </div>
  );
}

function Logomark() {
  return (
    <div className="h-[15.604px] relative shrink-0 w-[14.304px]" data-name="Logomark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3038 15.6038">
        <g id="Logomark">
          <path d={svgPaths.p2a5678b0} fill="var(--fill-0, #66C61C)" id="Shape" />
          <path d={svgPaths.p574f900} fill="var(--fill-0, #4CA30D)" id="Shape_2" />
          <path d={svgPaths.p9e84500} fill="var(--fill-0, #3B7C0F)" id="Shape_3" />
          <path d={svgPaths.p2956e800} fill="var(--fill-0, #66C61C)" id="Shape_4" />
          <path d={svgPaths.pa2e9530} fill="var(--fill-0, #4CA30D)" id="Shape_5" />
          <path d={svgPaths.p3de8d880} fill="var(--fill-0, #3B7C0F)" id="Shape_6" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="bg-[#ecf4e1] content-stretch flex items-center justify-center p-[1.3px] relative rounded-[32507.631px] shrink-0 size-[18.204px]" data-name="Company logo">
      <div aria-hidden="true" className="absolute border-[0.569px] border-[rgba(0,0,0,0.03)] border-solid inset-0 pointer-events-none rounded-[32507.631px]" />
      <Logomark />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[3.413px] items-baseline leading-[1.3] relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[7.964px] text-black">Apex Motors</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#70707b] text-[6.827px]">Apr 22</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[1.138px] items-center relative shrink-0">
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#70707b] text-[6.827px] whitespace-nowrap">to me</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[6.827px]" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-name="icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.41333 2.10489">
                <path d={svgPaths.p2c2be780} fill="var(--fill-0, #70707B)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame88 />
      <Frame87 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[3.413px] items-start relative shrink-0">
      <CompanyLogo />
      <Frame89 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[4.551px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[13.653px] text-black w-full">Hello Beth, I wanted to talk about some new features on the 2026 RAV4</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#70707b] text-[7.964px] w-full">We’ve added a few upgrades I think you’ll really like.</p>
    </div>
  );
}

function Play1() {
  return (
    <div className="relative shrink-0 size-[13.653px]" data-name="play">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6533 13.6533">
        <g id="play">
          <path d={svgPaths.p290bde00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.88" strokeWidth="1.13778" />
        </g>
      </svg>
    </div>
  );
}

function Frame96() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[1.138px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-1/2 p-[6.827px] rounded-[568.32px] top-1/2">
      <Play1 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#cbcbcb] h-[136.533px] overflow-clip relative rounded-[4.551px] shrink-0 w-full">
      <div className="absolute h-[149.618px] left-0 top-0 w-[208.213px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={uploadVideoDealership} />
      </div>
      <Frame96 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9.102px] items-start left-[11.38px] top-[15.36px] w-[208.213px]">
      <Frame90 />
      <Frame95 />
      <Frame93 />
    </div>
  );
}

function Var() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[-0.23px] h-[204.231px] left-[calc(50%+0.35px)] rounded-tl-[17.039px] rounded-tr-[17.039px] w-[228.693px]" data-name="var1_1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame94 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e5e4] border-l-[6.827px] border-r-[6.827px] border-solid border-t-[6.827px] inset-[-6.827px_-6.827px_0_-6.827px] pointer-events-none rounded-tl-[23.866px] rounded-tr-[23.866px]" />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[286px] overflow-clip relative shrink-0 w-full" data-name="img">
      <Var />
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-full" data-name="top">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">04</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[20px] tracking-[-1px] w-full">Record &amp; Write Once, Personalize for All</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[24px] relative w-full">
        <Top3 />
        <p className="font-['Geist:regular',sans-serif] h-[72px] leading-[1.5] overflow-hidden relative shrink-0 text-[#70707b] text-[16px] text-ellipsis w-full">Compose your message and send personalized videos by email, LinkedIn, or text. It’s that easy with Promoflix!</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-[400px]" data-name="Card 4">
      <Img3 />
      <Text4 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Card2 />
      <Card1 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center max-w-[1240px] relative shrink-0 w-full" data-name="container">
      <Frame73 />
      <Frame97 />
    </div>
  );
}

function HowItWorksAkaSolution() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[7]" data-name="How it works aka solution" id="how-it-works">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[32px] py-[88px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Industries</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">See how teams like yours use Promoflix</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center min-h-px min-w-px relative">
      <Frame77 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[16px] w-[400px] whitespace-pre-wrap">{`100+  industries. Any business that relies on outreach can transform with personalized video.`}</p>
    </div>
  );
}

function Top4() {
  return (
    <div className="content-stretch flex items-center max-w-[1240px] relative shrink-0 w-full" data-name="top">
      <Frame58 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame100 />
    </div>
  );
}

function Img4() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame32 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame101 />
    </div>
  );
}

function Img5() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame33 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="backdrop-blur-[1.111px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[16.867px] pr-[13.494px] py-[16.867px] relative rounded-[842.527px] shrink-0 w-[60.723px]">
      <div className="overflow-clip relative shrink-0 size-[26.988px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4417 22.9397">
              <path d={svgPaths.p1fed3f00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.69878" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame102 />
    </div>
  );
}

function Img6() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame34 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex h-[257.937px] items-center justify-center ml-0 mt-[5.2px] relative row-1 w-[362.047px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.99deg]">
          <Img4 />
        </div>
      </div>
      <div className="col-1 flex h-[267.554px] items-center justify-center ml-[4.24px] mt-0 relative row-1 w-[368.285px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.64deg]">
          <Img5 />
        </div>
      </div>
      <div className="col-1 flex h-[264.615px] items-center justify-center ml-[18.93px] mt-0 relative row-1 w-[366.396px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.14deg]">
          <Img6 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#18181b] text-[20px] whitespace-nowrap">Welcoming a New Policyholder</p>
      <div className="font-['Geist:regular',sans-serif] min-w-full relative shrink-0 text-[#70707b] text-[16px] w-[min-content]">
        <p className="mb-0">{`Personally thank clients and reassure them you'll be`}</p>
        <p>there for every step ahead.</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">Mortgage Brokers</p>
      <Frame74 />
    </div>
  );
}

function CardForNow() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[385px]" data-name="CARD (for now)">
      <Group1 />
      <Frame54 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame103 />
    </div>
  );
}

function Img7() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame35 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame104 />
    </div>
  );
}

function Img8() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame36 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="backdrop-blur-[1.03px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[15.636px] pr-[12.509px] py-[15.636px] relative rounded-[781.029px] w-[56.29px]">
      <div className="overflow-clip relative shrink-0 size-[25.018px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0956 21.2652">
              <path d={svgPaths.p32df3640} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.50179" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[60.723px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.71deg]">
          <Frame105 />
        </div>
      </div>
    </div>
  );
}

function Img9() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame37 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex h-[257.937px] items-center justify-center ml-0 mt-[5.2px] relative row-1 w-[362.047px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.99deg]">
          <Img7 />
        </div>
      </div>
      <div className="col-1 flex h-[267.554px] items-center justify-center ml-[4.24px] mt-0 relative row-1 w-[368.285px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.64deg]">
          <Img8 />
        </div>
      </div>
      <div className="col-1 flex h-[264.615px] items-center justify-center ml-[18.93px] mt-0 relative row-1 w-[366.396px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.14deg]">
          <Img9 />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#18181b] text-[20px] whitespace-nowrap">Welcoming a New Policyholder</p>
      <div className="font-['Geist:regular',sans-serif] min-w-full relative shrink-0 text-[#70707b] text-[16px] w-[min-content]">
        <p className="mb-0">{`Personally thank clients and reassure them you'll be`}</p>
        <p>there for every step ahead.</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">Mortgage Brokers</p>
      <Frame75 />
    </div>
  );
}

function CardForNow1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[385px]" data-name="CARD (for now)">
      <Group2 />
      <Frame55 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame107 />
    </div>
  );
}

function Img10() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame38 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame108 />
    </div>
  );
}

function Img11() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame39 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="backdrop-blur-[1.073px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[16.294px] pr-[13.035px] py-[16.294px] relative rounded-[813.865px] shrink-0 w-[58.657px]">
      <div className="overflow-clip relative shrink-0 size-[26.07px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8143 22.1593">
              <path d={svgPaths.p154f4f00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.60697" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame109 />
    </div>
  );
}

function Img12() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame40 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex h-[257.937px] items-center justify-center ml-0 mt-[5.2px] relative row-1 w-[362.047px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.99deg]">
          <Img10 />
        </div>
      </div>
      <div className="col-1 flex h-[267.554px] items-center justify-center ml-[4.24px] mt-0 relative row-1 w-[368.285px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.64deg]">
          <Img11 />
        </div>
      </div>
      <div className="col-1 flex h-[264.615px] items-center justify-center ml-[18.93px] mt-0 relative row-1 w-[366.396px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.14deg]">
          <Img12 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#18181b] text-[20px] whitespace-nowrap">Welcoming a New Policyholder</p>
      <div className="font-['Geist:regular',sans-serif] min-w-full relative shrink-0 text-[#70707b] text-[16px] w-[min-content]">
        <p className="mb-0">{`Personally thank clients and reassure them you'll be`}</p>
        <p>there for every step ahead.</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">Mortgage Brokers</p>
      <Frame76 />
    </div>
  );
}

function CardForNow2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[385px]" data-name="CARD (for now)">
      <Group3 />
      <Frame56 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame110 />
    </div>
  );
}

function Img13() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame41 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="backdrop-blur-[1.5px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[22.778px] pr-[18.222px] py-[22.778px] relative rounded-[1137.75px] shrink-0 w-[82px]">
      <div className="overflow-clip relative shrink-0 size-[36.444px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9037 30.9778">
              <path d={svgPaths.pb9bc380} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.64444" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame111 />
    </div>
  );
}

function Img14() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame42 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="backdrop-blur-[1.051px] bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center pl-[15.953px] pr-[12.762px] py-[15.953px] relative rounded-[796.838px] shrink-0 w-[57.43px]">
      <div className="overflow-clip relative shrink-0 size-[25.524px]" data-name="Play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4416 21.6957">
              <path d={svgPaths.p629d300} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.55243" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex h-[240px] items-start pb-[75px] pt-[83px] px-[134px] relative shrink-0 w-[350px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-18.43%] max-w-none top-0 w-[119.88%]" src={imgFrame127} />
      </div>
      <Frame112 />
    </div>
  );
}

function Img15() {
  return (
    <div className="content-stretch flex flex-col h-[240px] items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.1)] w-[350px]" data-name="img_3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#f9f9f9] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImg3} />
      </div>
      <Frame43 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex h-[257.937px] items-center justify-center ml-0 mt-[5.2px] relative row-1 w-[362.047px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.99deg]">
          <Img13 />
        </div>
      </div>
      <div className="col-1 flex h-[267.554px] items-center justify-center ml-[4.24px] mt-0 relative row-1 w-[368.285px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.64deg]">
          <Img14 />
        </div>
      </div>
      <div className="col-1 flex h-[264.615px] items-center justify-center ml-[18.93px] mt-0 relative row-1 w-[366.396px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.14deg]">
          <Img15 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#18181b] text-[20px] whitespace-nowrap">Welcoming a New Policyholder</p>
      <div className="font-['Geist:regular',sans-serif] min-w-full relative shrink-0 text-[#70707b] text-[16px] w-[min-content]">
        <p className="mb-0">{`Personally thank clients and reassure them you'll be`}</p>
        <p>there for every step ahead.</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">Mortgage Brokers</p>
      <Frame79 />
    </div>
  );
}

function CardForNow3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[385px]" data-name="CARD (for now)">
      <Group4 />
      <Frame57 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[56px] items-center relative shrink-0">
      <CardForNow />
      <CardForNow1 />
      <CardForNow2 />
      <CardForNow3 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full">Get a real example of a Promoflix-enhanced email for your industry</p>
    </div>
  );
}

function TextPadding5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Send me example</p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[12px] shrink-0 w-full" data-name="bottom">
      <div aria-hidden="true" className="absolute border border-[#3a6ef2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <Frame59 />
          <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-action="open-external-url" data-external-url="https://promoflix.ai/roi-calculator/" data-name="Button">
            <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
              <TextPadding5 />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[1240px] relative shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center justify-center max-w-[inherit] px-[32px] relative w-full">
          <Top4 />
          <Frame106 />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function HowTeamsUsePromoflix() {
  return <IndustriesSection />;
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">BY THE NUMBERS</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">Small lifts, Massive impact</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[560px] relative shrink-0 w-[327px]" data-name="Text">
      <Frame45 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[20px] w-full">Personalized video dramatically outperforms standard email outreach.</p>
    </div>
  );
}

function TextColumn() {
  return (
    <div className="bg-white relative rounded-[16px] self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-[359px]" data-name="text column">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#18181b] text-[20px] w-full whitespace-pre-wrap">{`Response Rate  `}</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] w-full" data-name="card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[32px] py-[16px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col font-['Geist:semibold',sans-serif] gap-[12px] items-start justify-center min-h-px min-w-px not-italic overflow-clip relative" data-name="numbers: typical">
            <p className="leading-[1.3] relative shrink-0 text-[#d92d20] text-[44px] tracking-[-2px] whitespace-nowrap">1.6%</p>
            <p className="leading-[1.5] min-w-full relative shrink-0 text-[#18181b] text-[20px] w-[min-content]">Email conversion</p>
          </div>
          <div className="bg-[#f4f4f5] h-full shrink-0 w-px" />
          <div className="content-stretch flex flex-[1_0_0] flex-col font-['Geist:semibold',sans-serif] gap-[12px] items-start justify-center min-h-px min-w-px not-italic relative" data-name="numbers: promoflix">
            <p className="leading-[1.3] relative shrink-0 text-[#079455] text-[44px] tracking-[-2px] whitespace-nowrap">6-8%</p>
            <p className="leading-[1.5] min-w-full relative shrink-0 text-[#18181b] text-[20px] w-[min-content]">Promoflix conversion</p>
          </div>
          <div className="bg-[#f4f4f5] h-full shrink-0 w-px" />
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="numbers: engagement">
            <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#2952e8] text-[44px] tracking-[-2px] w-full">3-6x</p>
            <Frame31 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextPadding6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Estimate your ROI</p>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[112px] relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[32px] relative size-full">
          <p className="flex-[1_0_0] font-['Geist:semibold',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#18181b] text-[20px]">Typical Promoflix campaigns generate about $5,000 in ROI</p>
          <div className="bg-[#2952e8] relative rounded-[8px] shrink-0" data-name="Button">
            <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit]">
              <TextPadding6 />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative self-stretch">
      <Card />
      <Card5 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#2952e8] h-[325px] relative rounded-[24px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[12px] items-start px-[32px] py-[12px] relative size-full">
        <TextColumn />
        <Frame68 />
      </div>
    </div>
  );
}

function ByTheNumbers() {
  return (
    <div className="bg-[#2952e8] content-stretch flex flex-col items-center justify-center py-[88px] relative shrink-0 w-full z-[5]" data-name="By the numbers">
      <Content3 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-full">
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">What our clients say</p>
    </div>
  );
}

function Top5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[560px] not-italic relative shrink-0 text-center w-full" data-name="top">
      <Frame46 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] w-full">Real stories from businesses that use Promoflix.AI to scale faster and achieve measurable results.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] w-full">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function TopContainer() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="Top container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Container6 />
        <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] w-full">
          <p className="leading-[1.5]">{`"Promoflix helped us personalize email responses at a scale we couldn't have imagined before. Our reply rate tripled in the first week."`}</p>
        </div>
      </div>
    </div>
  );
}

function ImageWrap() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[9999px] shrink-0 size-[47px]" data-name="Image wrap">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]" data-name="img placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <div className="absolute bg-[#e5e7eb] inset-0 rounded-[999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgImgPlaceholder} />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] text-[16px]">
        <p className="leading-[1.5]">Lucas Bennett</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] text-[14px]">
        <p className="leading-[1.5]">CEO, Acme Corp</p>
      </div>
    </div>
  );
}

function Author() {
  return (
    <div className="relative shrink-0 w-full" data-name="Author">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <ImageWrap />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-[#eff4ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Testimonial card">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <TopContainer />
        <Author />
      </div>
    </div>
  );
}

function Play2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p933d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[calc(50%+0.5px)]" data-name="Button">
      <Play2 />
    </div>
  );
}

function TopContainer1() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="Top container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Container6 />
        <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] w-full">
          <p className="leading-[1.5]">{`"Promoflix helped us personalize email responses at a scale we couldn't have imagined before. Our reply rate tripled in the first week. Our reply rate tripled in the first week."`}</p>
        </div>
      </div>
    </div>
  );
}

function ImageWrap1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[9999px] shrink-0 size-[47px]" data-name="Image wrap">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]" data-name="img placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <div className="absolute bg-[#e5e7eb] inset-0 rounded-[999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgImgPlaceholder1} />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] text-[16px]">
        <p className="leading-[1.5]">Anna Bennett</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] text-[14px]">
        <p className="leading-[1.5]">CEO, Acme Corp</p>
      </div>
    </div>
  );
}

function Author1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Author">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <ImageWrap1 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex flex-col items-start p-[4px] relative rounded-[20px] shrink-0 w-[405.333px]" data-name="Testimonial card">
      <TopContainer1 />
      <Author1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] w-full">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function TopContainer2() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="Top container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Container9 />
        <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[16px] w-full">
          <p className="leading-[1.5]">{`"Promoflix helped us personalize email responses at a scale we couldn't have imagined before. Our reply rate tripled in the first week. Our reply rate tripled in the first week."`}</p>
        </div>
      </div>
    </div>
  );
}

function ImageWrap2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[9999px] shrink-0 size-[47px]" data-name="Image wrap">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[999px]" data-name="img placeholder">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <div className="absolute bg-[#e5e7eb] inset-0 rounded-[999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgImgPlaceholder2} />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] text-[16px]">
        <p className="leading-[1.5]">Lucas Bennett</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] text-[14px]">
        <p className="leading-[1.5]">CEO, Acme Corp</p>
      </div>
    </div>
  );
}

function Author2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Author">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <ImageWrap2 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div className="bg-[#eff4ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Testimonial card">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <TopContainer2 />
        <Author2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <TestimonialCard />
      <TestimonialCard1 />
      <TestimonialCard2 />
      <div className="absolute bg-gradient-to-l bottom-0 from-[rgba(255,255,255,0)] left-0 to-white top-0 w-[120px]" data-name="gradient left" />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[120px]">
        <div className="-scale-y-100 flex-none h-[346px] rotate-180 w-[120px]">
          <div className="bg-gradient-to-l from-[rgba(255,255,255,0)] size-full to-white" data-name="gradient right" />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1240px] relative shrink-0 w-full" data-name="Container">
      <Top5 />
      <Container5 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip py-[88px] relative shrink-0 w-full z-[4]" data-name="Testimonials">
      <Container4 />
    </div>
  );
}

function TopText() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="top text">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">OUR PRICING</p>
      <p className="leading-[1.3] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Simple, transparent pricing</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] w-full">Choose a plan and start a 14-day free trial.</p>
    </div>
  );
}

function MonthlyYearlyToggle({ pricingMode, onPricingModeChange }: LayoutProps) {
  return (
    <PricingModeToggle onPricingModeChange={onPricingModeChange} pricingMode={pricingMode ?? 'yearly'} />
  );
}

function CardsWrap({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[1056px] relative shrink-0 w-full" data-name="cards wrap">
      <PricingPlanCard
        className="bg-white col-1 content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] row-1 self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0"
        featureContainerClassName="flex-[1_0_0] min-h-px min-w-px relative w-full"
        meta={PRICING_CARD_META[0]}
        plan={plans[0]}
      />
      <PricingPlanCard
        className="bg-white col-2 content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] row-1 self-start shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0"
        featureContainerClassName="relative shrink-0 w-full"
        meta={PRICING_CARD_META[1]}
        plan={plans[1]}
      />
      <PricingPlanCard
        className="bg-white col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] row-2 self-start shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0"
        featureContainerClassName="relative shrink-0 w-full"
        meta={PRICING_CARD_META[2]}
        plan={plans[2]}
      />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b]">{`Need a custom enterprise solution? `}</p>
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-center">Contact sales</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-[20px] whitespace-nowrap">
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b]">{`All plans include our core AI video generation technology. `}</p>
      <Frame70 />
    </div>
  );
}

function Container11({ pricingMode, onPricingModeChange }: LayoutProps) {
  const plans = PRICING_PLANS[pricingMode ?? "yearly"];

  return (
    <div className="max-w-[1240px] relative shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] px-[32px] relative w-full">
          <TopText />
          <MonthlyYearlyToggle onPricingModeChange={onPricingModeChange} pricingMode={pricingMode} />
          <CardsWrap plans={plans} />
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Pricing({ pricingMode, onPricingModeChange }: LayoutProps) {
  return (
    <div className="bg-[#eff4ff] content-stretch flex flex-col items-center overflow-clip py-[88px] relative shrink-0 w-full z-[3]" data-name="Pricing" id="pricing">
      <Container11 onPricingModeChange={onPricingModeChange} pricingMode={pricingMode} />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#fafafa] text-[20px] tracking-[-1px] w-full">{`Still wandering if Promoflix is for you? `}</p>
    </div>
  );
}

function TextWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[250px]" data-name="text wrap">
      <Frame47 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#a0a0ab] text-[16px] w-full">Enter your email and we’ll send you a real example.</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#26272b] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="input">
      <div aria-hidden="true" className="absolute border border-[#3f3f46] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#70707b] text-[16px] text-ellipsis whitespace-nowrap">email@example.com</p>
        </div>
      </div>
    </div>
  );
}

function TextPadding11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">↗</p>
    </div>
  );
}

function EmailInputWrap() {
  return (
    <div className="content-center flex flex-wrap gap-[5px] items-center relative shrink-0 w-full" data-name="email input wrap">
      <Input />
      <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0 w-[40px]" data-action="open-external-url" data-external-url="https://tally.so/r/q4K9v9" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <TextPadding11 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function SecondaryCta() {
  return (
    <div className="bg-[#131316] col-3 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="secondary cta">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <TextWrap />
        <EmailInputWrap />
      </div>
    </div>
  );
}

function TextWrap1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[8px] items-start not-italic relative shrink-0 text-[#fafafa] w-full" data-name="text wrap">
      <p className="leading-[1.5] relative shrink-0 text-[14px] uppercase whitespace-nowrap">GET STARTED</p>
      <p className="leading-[1.3] min-w-full relative shrink-0 text-[44px] tracking-[-2px] w-[min-content]">Your customers forgot you. Promoflix helps them remember.</p>
    </div>
  );
}

function TextPadding12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Start free →</p>
    </div>
  );
}

function MainCta() {
  return (
    <div className="bg-[#2952e8] col-[1/span_2] h-[360px] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="main cta">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <TextWrap1 />
        <div className="bg-white content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0" data-action="open-login-modal" data-login-mode="signup" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          <TextPadding12 />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function ContentGrid() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] h-[360px] relative shrink-0 w-full" data-name="content grid">
      <SecondaryCta />
      <MainCta />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white relative rounded-bl-[88px] rounded-br-[88px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[124px] pt-[88px] px-[32px] relative w-full">
          <ContentGrid />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="CTA">
      <Container12 />
    </div>
  );
}

function FooterLinks() {
  return (
    <FooterLinkColumns
      className="col-[2/span_2] content-stretch flex font-['Geist:regular',sans-serif] items-start justify-between justify-self-stretch leading-[1.5] not-italic relative row-1 self-start shrink-0 text-[14px]"
      columns={[
        { title: 'ABOUT', links: ['How it works', 'Pricing'], className: 'content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[84px]' },
        { title: 'LEGAL', links: ['Privacy', 'Terms'], className: 'content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[48px]' },
        { title: 'CONTACT', links: ['hello@promoflix.com'], className: 'content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[135px]' },
      ]}
    />
  );
}

function Logo1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Logo">
      <div className="absolute left-0 size-[39.481px] top-0" data-name="Original logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[201.08%] left-[-395.7%] max-w-none top-[-55.91%] w-[732.26%]" src={imgOriginalLogo} />
        </div>
      </div>
      <div className="absolute left-[0.52px] size-[39.481px] top-0">
        <div className="absolute inset-[0_-6.33%_-12.66%_-6.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.4805 44.4805">
            <g filter="url(#filter0_ddiii_1_5500)" id="Ellipse 1">
              <mask fill="white" id="path-1-inside-1_1_5500">
                <path d={svgPaths.p35349600} />
              </mask>
              <path d={svgPaths.p35349600} fill="var(--fill-0, #3D70F2)" />
              <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_1_5500)" stroke="url(#paint0_linear_1_5500)" strokeWidth="3.33333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_1_5500" width="44.4805" x="-1.19209e-07" y="-2.5">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.833333" />
                <feGaussianBlur stdDeviation="0.416667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_5500" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_1_5500" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_1_5500" mode="normal" result="effect2_dropShadow_1_5500" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_5500" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_1_5500" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                <feBlend in2="effect3_innerShadow_1_5500" mode="normal" result="effect4_innerShadow_1_5500" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_1_5500" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect4_innerShadow_1_5500" mode="normal" result="effect5_innerShadow_1_5500" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5500" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
                <stop stopColor="white" stopOpacity="0.12" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoWrap2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[40px]" data-name="Logo wrap">
      <Logo1 />
    </div>
  );
}

function LogoWrap1() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="logo wrap">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo">
        <LogoWrap2 />
      </div>
      <div className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px] whitespace-pre-wrap">
        <p className="mb-0">{`Record once. `}</p>
        <p>Send personalized videos at scale.</p>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="gap-x-[32px] gap-y-[12px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full z-[3]" data-name="main content">
      <FooterLinks />
      <LogoWrap1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#131316] h-[288px] relative rounded-[32px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-center justify-between pb-[12px] px-[32px] relative size-full">
          <MainContent />
          <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#a0a0ab] text-[14px] whitespace-nowrap z-[2]">© 2026 Promoflix. All rights reserved.</p>
          <FooterPromoflixGradient className="absolute bottom-[-34px] left-px right-0 aspect-[1238.39/209.505] overflow-clip z-[1]" />
        </div>
      </div>
    </div>
  );
}

function Footer4() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-col items-center overflow-clip pt-[80px] px-[32px] relative shrink-0 w-full z-[1]" data-name="Footer">
      <Container13 />
    </div>
  );
}

export default function Component({ pricingMode = 'yearly', onPricingModeChange }: LayoutProps) {
  return (
    <div className="content-stretch flex flex-col isolate items-center relative size-full" data-name="1024">
      <div className="absolute bottom-0 h-[6723.806640625px] left-[calc(50%-2px)] pointer-events-none top-[16px]">
        <div className="-translate-x-1/2 backdrop-blur-[3px] bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between max-w-[1240px] p-[12px] pointer-events-auto rounded-[8px] sticky top-0 w-[988px] z-[10]" data-name="Navbar">
          <div aria-hidden="true" className="absolute border border-[#f4f4f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo">
            <LogoWrap />
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[25px] text-black whitespace-nowrap">Promoflix</p>
          </div>
          <NavWrap />
        </div>
      </div>
      <HeroSection />
      <PainPointsSection />
      <HowItWorksAkaSolution />
      <HowTeamsUsePromoflix />
      <ByTheNumbers />
      <Testimonials />
      <Pricing onPricingModeChange={onPricingModeChange} pricingMode={pricingMode} />
      <Cta />
      <Footer4 />
    </div>
  );
}
