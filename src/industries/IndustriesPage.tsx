import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-g41mun2hic";
import imgOriginalLogo from "figma:asset/c2b10a66c9a06b0bf91cd7f627bcbb337569e1e6.png";
import imgTopContainer from "figma:asset/4082fab549dc89b83375e04762877da0d51b6d60.png";
import imgFrame1000012290 from "figma:asset/147aa6a31c5cf9858284018c7049cfb5cc9b736f.png";
import apexHomeLogo from "../assets/client-logos/apex-home.png";
import heritageRealtyLogo from "../assets/client-logos/heritage-realty.png";
import horizonCollectiveLogo from "../assets/client-logos/horizon-collective.png";
import insightDigitalLogo from "../assets/client-logos/insight-digital.png";
import keystoneMortgageLogo from "../assets/client-logos/keystone-mortgage.png";
import nextGenAutoLogo from "../assets/client-logos/next-gen-auto.png";
import pivotPointStrategiesLogo from "../assets/client-logos/pivot-point-strategies.png";
import pulsepointHealthLogo from "../assets/client-logos/pulsepoint-health.png";
import skylineEstatesLogo from "../assets/client-logos/skyline-estates.png";
import traqcheckLogo from "../assets/client-logos/traqcheck.png";
import vanguardGroupLogo from "../assets/client-logos/vanguard-group.png";
import vertexRenovationsLogo from "../assets/client-logos/vertex-renovations.png";
import { PricingModeToggle } from "../components/PricingModeToggle";
import { PricingPlanCard } from "../components/PricingPlanCard";
import { CONTACT_SALES_URL, PRICING_CARD_META, PRICING_PLANS, type PricingMode } from "../components/promo-flix-landing/constants";
import { imgVector } from "./svg-wzmnz";

const CLIENT_LOGOS = [
  { name: "Apex Home", src: apexHomeLogo },
  { name: "Heritage Realty", src: heritageRealtyLogo },
  { name: "Horizon Collective", src: horizonCollectiveLogo },
  { name: "Insight Digital", src: insightDigitalLogo },
  { name: "Keystone Mortgage", src: keystoneMortgageLogo },
  { name: "Next Gen Auto", src: nextGenAutoLogo },
  { name: "Pivot Point Strategies", src: pivotPointStrategiesLogo },
  { name: "Pulsepoint Health", src: pulsepointHealthLogo },
  { name: "Skyline Estates", src: skylineEstatesLogo },
  { name: "Traqcheck", src: traqcheckLogo },
  { name: "Vanguard Group", src: vanguardGroupLogo },
  { name: "Vertex Renovations", src: vertexRenovationsLogo },
] as const;

const PROCESS_STEPS = [
  {
    eyebrow: "START HERE",
    title: "Record your base video",
    description: "Record or upload one authentic base video. 98% stays the same, so its always the real you on screen.",
    accent: "from-[#dbeafe] to-[#bfdbfe]",
    chip: "Base video ready",
  },
  {
    eyebrow: "MAKE IT YOURS",
    title: "Choose personalization points",
    description: "Pick which words or phrases to swap contact name, company, or any key detail. Tag them once, AI handles every variation.",
    accent: "from-[#dcfce7] to-[#bbf7d0]",
    chip: "{{ first_name }}",
  },
  {
    eyebrow: "IMPORT LEADS",
    title: "Upload your contact list",
    description: "Easily import a CSV of customers or prospects straight from your CRM or spreadsheet. Fields map automatically no manual setup needed.",
    accent: "from-[#fef3c7] to-[#fde68a]",
    chip: "CSV imported",
  },
  {
    eyebrow: "ONE CLICK",
    title: "Click Generate",
    description: "Hit generate and Promoflix renders a unique personalized video for every single contact in minutes, no editing required.",
    accent: "from-[#fce7f3] to-[#fbcfe8]",
    chip: "Rendering variations",
  },
  {
    eyebrow: "GO LIVE",
    title: "Send with build -in-Email",
    description: "Email personalized videos directly from the platform. Watch engagement skyrocket and track every open, play, and click live.",
    accent: "from-[#e0e7ff] to-[#c7d2fe]",
    chip: "Campaign live",
  },
] as const;

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.1] relative shrink-0 text-[#18181b] text-[clamp(40px,5vw,54px)] tracking-[-1.08px] w-full">Real Estate AI Powered Platform</p>
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] w-full">Promoflix empowers real estate agents to effortlessly create and share personalized videos, attracting new clients and impressing buyers with every message.</p>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Try it free</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame48 />
      <a className="relative rounded-[8px] shrink-0" data-name="Button" href="#pricing">
        <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
          <TextPadding />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </a>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.31%_20.31%_23.44%_20.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.48123 8.99982">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pa3d980} fill="var(--fill-0, #17B26A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[14px] w-full">3x email engagement from video</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[20.31%_20.31%_23.44%_20.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.48123 8.99982">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pa3d980} fill="var(--fill-0, #17B26A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame1 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[14px] w-full">40% higher feature adoption</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[20.31%_20.31%_23.44%_20.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.48123 8.99982">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pa3d980} fill="var(--fill-0, #17B26A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group2 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame2 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[14px] w-full">Used by top real estate teams</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame59 />
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-[582px]" data-name="text">
      <Frame62 />
      <Frame58 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[15.73%_17.54%_15.73%_18.75%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6772 38.3819">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p18f0a500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroiconsPlaySolid() {
  return (
    <div className="absolute left-[227px] overflow-clip size-[56px] top-[271px]" data-name="heroicons-play-solid 1">
      <Group3 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="aspect-[510/597] bg-[#e4e4e4] relative rounded-[12px] shrink-0 w-full max-w-[510px]">
      <HeroiconsPlaySolid />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start lg:flex-row lg:gap-[96px] lg:items-center max-w-[1240px] relative shrink-0 w-full px-[20px] md:px-[32px]" data-name="container">
      <Text />
      <Frame54 />
    </div>
  );
}

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
            <g filter="url(#filter0_ddiii_1_1862)" id="Ellipse 1">
              <mask fill="white" id="path-1-inside-1_1_1862">
                <path d={svgPaths.p35349600} />
              </mask>
              <path d={svgPaths.p35349600} fill="var(--fill-0, #2952E8)" />
              <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_1_1862)" stroke="url(#paint0_linear_1_1862)" strokeWidth="3.33333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_1_1862" width="44.4805" x="-1.19209e-07" y="-2.5">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.833333" />
                <feGaussianBlur stdDeviation="0.416667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_1_1862" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_1_1862" mode="normal" result="effect2_dropShadow_1_1862" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_1862" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                <feBlend in2="effect3_innerShadow_1_1862" mode="normal" result="effect4_innerShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_1_1862" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect4_innerShadow_1_1862" mode="normal" result="effect5_innerShadow_1_1862" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1862" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
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

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Login</p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Try for free →</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none rounded-[8px]" />
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <TextPadding1 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[8px] relative rounded-[inherit] size-full">
          <TextPadding2 />
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
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">How it works</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Pricing</p>
      </div>
      <Actions />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center pb-[130px] pt-[160px] relative shrink-0 w-full" data-name="Hero section">
      <Container />
    </div>
  );
}

function Logoipsum2() {
  return (
    <div className="h-[41px] relative shrink-0 w-[106px]" data-name="logoipsum-242">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 41">
        <g id="logoipsum-242">
          <path d={svgPaths.p3645ce80} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p34bb13a0} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p22076b80} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p187fa500} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p111d7580} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function LogoBox() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum2 />
    </div>
  );
}

function Logoipsum4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[171px]" data-name="logoipsum-250">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 32">
        <g clipPath="url(#clip0_1_1990)" id="logoipsum-250">
          <path d={svgPaths.p357c4c80} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p3da74780} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p16c09100} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p352b6d00} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p2ef5ae00} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p1a0ddb00} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.p9b2ce00} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p19137a80} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p8a3000} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.pdee8500} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p12744300} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.p1e59d00} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
          <path d={svgPaths.p24d99bf0} fill="var(--fill-0, #A0A0AB)" id="Vector_13" />
          <path d={svgPaths.p3288a800} fill="var(--fill-0, #A0A0AB)" id="Vector_14" />
          <path d={svgPaths.p2e0683c0} fill="var(--fill-0, #A0A0AB)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_1_1990">
            <rect fill="white" height="32" width="171" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox1() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum4 />
    </div>
  );
}

function Logoipsum8() {
  return (
    <div className="h-[41px] relative shrink-0 w-[170px]" data-name="logoipsum-264">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 41">
        <g clipPath="url(#clip0_1_1747)" id="logoipsum-264">
          <path d={svgPaths.p8699380} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p1e52e720} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p12054a00} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p1cd87c00} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p2ed383f0} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p2a4aae80} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.p38db0b00} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p2e09b000} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p36834780} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p185aed00} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_1_1747">
            <rect fill="white" height="41" width="170" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum8 />
    </div>
  );
}

function Logoipsum7() {
  return (
    <div className="h-[41px] relative shrink-0 w-[170px]" data-name="logoipsum-262">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 41">
        <g clipPath="url(#clip0_1_1832)" id="logoipsum-262">
          <path d={svgPaths.p10d64480} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p290da100} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p11be1fd0} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p1b2aac80} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p2c5b7d00} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p1bc96100} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.p306def00} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p241eda80} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p31e8ba80} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.pab5ce00} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_1_1832">
            <rect fill="white" height="41" width="170" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox3() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum7 />
    </div>
  );
}

function Logoipsum9() {
  return (
    <div className="h-[41px] relative shrink-0 w-[168px]" data-name="logoipsum-265">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 41">
        <g clipPath="url(#clip0_1_1896)" id="logoipsum-265">
          <path d={svgPaths.p36b54800} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p3ace8600} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p109b3780} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p1e04fd00} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p21b7bc40} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p328faf00} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.pa0c4d00} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p3e157100} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p1ea7e600} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.p335f4f00} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p2179f700} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.p3c168730} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
          <path d={svgPaths.p1b5aa880} fill="var(--fill-0, #A0A0AB)" id="Vector_13" />
          <path d={svgPaths.p37f46b00} fill="var(--fill-0, #A0A0AB)" id="Vector_14" />
          <path d={svgPaths.p2cc75500} fill="var(--fill-0, #A0A0AB)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_1_1896">
            <rect fill="white" height="41" width="168" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox4() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum9 />
    </div>
  );
}

function Logoipsum3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[155px]" data-name="logoipsum-244">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 40">
        <g clipPath="url(#clip0_1_1934)" id="logoipsum-244">
          <path d={svgPaths.p17578280} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p23b49f00} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p8b5d300} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p3e280cf0} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p26bd600} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p2e182000} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.p26a3bb80} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p68edb80} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p13c0b180} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.p3fcc0500} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p2bdd0a00} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.pdd38d80} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
          <path d={svgPaths.p20042080} fill="var(--fill-0, #A0A0AB)" id="Vector_13" />
        </g>
        <defs>
          <clipPath id="clip0_1_1934">
            <rect fill="white" height="40" width="155" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox5() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum3 />
    </div>
  );
}

function Logoipsum11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[161px]" data-name="logoipsum-238 (1)">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 44">
        <g id="logoipsum-238 (1)">
          <path d={svgPaths.p6d9f100} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p2fbc9480} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p3982e080} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p19904900} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p3ad85e00} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p38e3a970} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.p2a91c600} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p30549800} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p7742280} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.p13b50700} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p32db9380} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.p7318d00} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function LogoBox6() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum11 />
    </div>
  );
}

function Logoipsum5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[172px]" data-name="logoipsum-254">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 40">
        <g clipPath="url(#clip0_1_1955)" id="logoipsum-254">
          <path d={svgPaths.p14c4200} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p2f071980} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.pe487080} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p1bb4aa00} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p3a423600} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p9934e00} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.p2e995800} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p1b182280} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p27ee1d00} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.p2c221300} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p20d1b00} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.p2b5b580} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
          <path d={svgPaths.p344f6a00} fill="var(--fill-0, #A0A0AB)" id="Vector_13" />
        </g>
        <defs>
          <clipPath id="clip0_1_1955">
            <rect fill="white" height="40" width="172" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox7() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum5 />
    </div>
  );
}

function Logoipsum10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[202px]" data-name="logoipsum-297">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 40">
        <g clipPath="url(#clip0_1_1818)" id="logoipsum-297">
          <path clipRule="evenodd" d={svgPaths.p13744e20} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pabe5900} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p2ad8bb50} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p21c39000} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.pd889700} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.pa82e7f0} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p137b0600} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1be4b200} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.pfc2f200} fill="var(--fill-0, #A0A0AB)" fillRule="evenodd" id="Vector_9" />
          <path d={svgPaths.p3743e780} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p19533d00} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.p23b7a000} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
        </g>
        <defs>
          <clipPath id="clip0_1_1818">
            <rect fill="white" height="40" width="202" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox8() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum10 />
    </div>
  );
}

function Logoipsum1() {
  return (
    <div className="h-[34px] relative shrink-0 w-[154px]" data-name="logoipsum-237">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 34">
        <g id="logoipsum-237">
          <path d={svgPaths.p28fcf640} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p20046900} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p26a93f00} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p16a2de00} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p1c767b00} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p1ed8ec00} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.p194de000} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p3d28d680} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p2474c480} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.p197cd80} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p165f6400} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.p32ba8f00} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function LogoBox9() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum1 />
    </div>
  );
}

function Logoipsum() {
  return (
    <div className="h-[38px] relative shrink-0 w-[177px]" data-name="logoipsum-222">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177 38">
        <g id="logoipsum-222">
          <path d={svgPaths.p19e2e270} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p3b887980} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p725db00} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p3603bb70} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p3a3fe500} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.p3f4bc140} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.pfaf92a0} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p10fd4910} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p293c5d00} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.p38ae7600} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function LogoBox10() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum />
    </div>
  );
}

function Logoipsum6() {
  return (
    <div className="h-[27px] relative shrink-0 w-[154px]" data-name="logoipsum-259">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 27">
        <g clipPath="url(#clip0_1_1791)" id="logoipsum-259">
          <path d={svgPaths.p3aac7c00} fill="var(--fill-0, #A0A0AB)" id="Vector" />
          <path d={svgPaths.p7281e00} fill="var(--fill-0, #A0A0AB)" id="Vector_2" />
          <path d={svgPaths.p8d5ae00} fill="var(--fill-0, #A0A0AB)" id="Vector_3" />
          <path d={svgPaths.p2e314a00} fill="var(--fill-0, #A0A0AB)" id="Vector_4" />
          <path d={svgPaths.p20402380} fill="var(--fill-0, #A0A0AB)" id="Vector_5" />
          <path d={svgPaths.pa688d00} fill="var(--fill-0, #A0A0AB)" id="Vector_6" />
          <path d={svgPaths.pe6a0580} fill="var(--fill-0, #A0A0AB)" id="Vector_7" />
          <path d={svgPaths.p39cc7800} fill="var(--fill-0, #A0A0AB)" id="Vector_8" />
          <path d={svgPaths.p3dd97f40} fill="var(--fill-0, #A0A0AB)" id="Vector_9" />
          <path d={svgPaths.p11aa0ac0} fill="var(--fill-0, #A0A0AB)" id="Vector_10" />
          <path d={svgPaths.p112dd00} fill="var(--fill-0, #A0A0AB)" id="Vector_11" />
          <path d={svgPaths.p36ac600} fill="var(--fill-0, #A0A0AB)" id="Vector_12" />
        </g>
        <defs>
          <clipPath id="clip0_1_1791">
            <rect fill="white" height="27" width="154" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoBox11() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-center justify-center p-[12px] relative shrink-0" data-name="Logo box">
      <Logoipsum6 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Our clients trust us</p>
      <div className="h-[56px] overflow-clip relative shrink-0 w-[1289px]" data-name="Slider logo">
        <div className="absolute content-stretch flex gap-[96px] items-center left-0 top-[-0.25px]" data-name="Change to your logos here">
          <LogoBox />
          <LogoBox1 />
          <LogoBox2 />
          <LogoBox3 />
          <LogoBox4 />
          <LogoBox5 />
          <LogoBox6 />
          <LogoBox7 />
          <LogoBox8 />
          <LogoBox9 />
          <LogoBox10 />
          <LogoBox11 />
        </div>
      </div>
    </div>
  );
}

function ClientLogos() {
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip pb-[60px] pt-[24px] relative shrink-0 w-full" data-name="Client Logos">
      <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full px-[20px] md:px-[32px]">
        <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
          These Companies Trust Promoflix
        </p>
        <div className="overflow-hidden relative shrink-0 w-full max-w-[1240px]" data-name="Client logos marquee">
          <div className="client-logo-marquee-track flex gap-[24px] items-center w-max">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-[88px] items-center justify-center overflow-hidden relative shrink-0 w-[186px]"
                data-name="Logo box"
              >
                <img alt={logo.name} className="block max-h-[72px] max-w-full object-contain opacity-90 w-auto" src={logo.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">See it in action</p>
      <p className="leading-[0] min-w-full relative shrink-0 text-[#18181b] text-[44px] text-center tracking-[-2px] w-[min-content]">
        <span className="leading-[1.3]">{`See How `}</span>
        <span className="leading-[1.3] text-[#2952e8]">Real Estate</span>
        <span className="leading-[1.3]">
          {` Teams`}
          <br aria-hidden="true" />
          Use Video Outreach at Scale
        </span>
      </p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[760px] not-italic relative shrink-0 w-full" data-name="top">
      <Frame45 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] text-center w-full">Real campaigns, real results. See agents turn cold leads into clients.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1240px] relative shrink-0 w-full" data-name="Container">
      <Top />
    </div>
  );
}

function Play() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p933d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[8px] bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center left-[calc(50%-0.33px)] rounded-[40px] size-[64px] top-[calc(50%+0.5px)]" data-name="Button">
      <Play />
    </div>
  );
}

function TopContainer() {
  return (
    <div className="h-[255px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Top container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[12px] rounded-tr-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgTopContainer} />
      </div>
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0 text-[#2952e8] text-[14px] text-center whitespace-nowrap">Listing Acquisition</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">Personalized Listing Pitch</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame74 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame75 />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[11px] rounded-[12px] top-0 w-[390px]">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <TopContainer />
      <Frame76 />
    </div>
  );
}

function Play1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p933d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[8px] bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center left-[calc(50%-0.33px)] rounded-[40px] size-[64px] top-[calc(50%+0.5px)]" data-name="Button">
      <Play1 />
    </div>
  );
}

function TopContainer1() {
  return (
    <div className="h-[255px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Top container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[12px] rounded-tr-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgTopContainer} />
      </div>
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0 text-[#2952e8] text-[14px] text-center whitespace-nowrap">Buyer Follow-Up</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">Open House Recap</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame80 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame79 />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[425px] rounded-[12px] top-0 w-[390px]">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <TopContainer1 />
      <Frame78 />
    </div>
  );
}

function Play2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p933d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[8px] bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center left-[calc(50%-0.33px)] rounded-[40px] size-[64px] top-[calc(50%+0.5px)]" data-name="Button">
      <Play2 />
    </div>
  );
}

function TopContainer2() {
  return (
    <div className="h-[255px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Top container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[12px] rounded-tr-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[12px] rounded-tr-[12px] size-full" src={imgTopContainer} />
      </div>
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium relative shrink-0 text-[#2952e8] text-[14px] text-center whitespace-nowrap">Expired Listings</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">Win-Back Outreach</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame84 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame83 />
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[839px] rounded-[12px] top-0 w-[390px]">
      <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <TopContainer2 />
      <Frame82 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[352px] max-w-[1240px] relative shrink-0 w-full" data-name="Container">
      <Frame73 />
      <Frame77 />
      <Frame81 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center overflow-clip px-[20px] md:px-[32px] lg:px-[100px] py-[88px] relative shrink-0 w-full" data-name="Testimonials">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-center relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">See it in action</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">Launch Your First Video Campaign</p>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center max-w-[760px] not-italic relative shrink-0 w-full" data-name="top">
      <Frame88 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] w-[436px]">Everything you need to launch your first personalized campaign!</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[32.82%] left-1/4 right-[24.88%] top-[37.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0271 7.15207">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39d4200} fill="var(--fill-0, #131316)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative size-[24px]" data-name="Frame">
      <Group4 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#18181b] text-[20px] whitespace-nowrap">Campaign Ideas</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#f4f4f5] h-[2px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[389px] relative size-full">
        <div className="bg-[#131316] flex-[1_0_0] min-h-px w-[542px]" />
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame91 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#70707b] text-[16px] w-full">Proven re-engagement campaigns for dental, real estate, recruiting, and 10+ more industries.</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[32.82%] left-1/4 right-[24.88%] top-[37.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0271 7.15207">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39d4200} fill="var(--fill-0, #70707B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group5 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#131316] text-[20px] whitespace-nowrap">Email Templates</p>
      <Frame4 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#f4f4f5] h-[2px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[389px] relative size-full">
        <div className="h-[3px] shrink-0 w-[207px]" />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[32.82%] left-1/4 right-[24.88%] top-[37.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0271 7.15207">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39d4200} fill="var(--fill-0, #70707B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group6 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#131316] text-[20px] whitespace-nowrap">Video scripts</p>
      <Frame5 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#f4f4f5] h-[2px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pr-[389px] relative size-full">
        <div className="h-[3px] shrink-0 w-[207px]" />
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function SampleAccordion() {
  const [openKey, setOpenKey] = useState<"campaign" | "email" | "scripts">("campaign");

  const items = [
    {
      key: "campaign" as const,
      title: "Campaign Ideas",
      content: "Proven re-engagement campaigns for dental, real estate, recruiting, and 10+ more industries.",
    },
    {
      key: "email" as const,
      title: "Email Templates",
      content: "Sample test: New listing follow-up, no-show reactivation, and referral outreach templates ready to customize.",
    },
    {
      key: "scripts" as const,
      title: "Video scripts",
      content: "Sample test: 30-second opener, objection handling, and call-to-action close scripts for personalized outreach.",
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      {items.map((item) => {
        const isOpen = openKey === item.key;
        return (
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" key={item.key}>
            <button
              className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 text-left w-full"
              onClick={() => setOpenKey(isOpen ? "campaign" : item.key)}
              type="button"
            >
              <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[20px] whitespace-nowrap ${isOpen ? "text-[#18181b]" : "text-[#131316]"}`}>
                {item.title}
              </p>
              <span className={`inline-flex size-[24px] items-center justify-center text-[14px] transition-transform ${isOpen ? "rotate-180 text-[#131316]" : "rotate-0 text-[#70707b]"}`}>
                ▾
              </span>
            </button>
            <div className="bg-[#f4f4f5] h-[2px] relative shrink-0 w-full">
              <div className="h-[2px] transition-all duration-300" style={{ width: isOpen ? "100%" : "0%", backgroundColor: isOpen ? "#131316" : "transparent" }} />
            </div>
            {isOpen && (
              <p className="font-['Geist:regular',sans-serif] leading-[1.5] mt-[16px] not-italic relative shrink-0 text-[#70707b] text-[16px] w-full">
                {item.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Top1 />
      <SampleAccordion />
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Start your campaign</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <a className="relative rounded-[8px] shrink-0" data-name="Button" href="#pricing">
        <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
          <TextPadding3 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </a>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[650px] items-start justify-between min-w-px relative">
      <Frame87 />
      <Frame100 />
    </div>
  );
}

function Frame71() {
  return <div className="bg-[#d9d9d9] h-full rounded-[12px] shrink-0 w-[650px]" />;
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center justify-center min-w-px relative">
      <Frame85 />
      <div className="flex flex-row items-center self-stretch">
        <Frame71 />
      </div>
    </div>
  );
}

function Testimonials1() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip px-[20px] md:px-[32px] lg:px-[100px] py-[88px] relative shrink-0 w-full" data-name="Testimonials">
      <Frame86 />
    </div>
  );
}

function Play3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p933d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[calc(50%+0.5px)]" data-name="Button">
      <Play3 />
    </div>
  );
}

function TopContainer3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[267px] items-start left-0 p-[16px] rounded-[16px] top-0 w-[397.333px]" data-name="Top container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgTopContainer} />
      </div>
      <Button3 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-0 top-0">
      <TopContainer3 />
    </div>
  );
}

function Play4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="play">
          <path clipRule="evenodd" d={svgPaths.p933d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[calc(50%+0.5px)]" data-name="Button">
      <Play4 />
    </div>
  );
}

function TopContainer4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[267px] items-start left-[144px] p-[16px] rounded-[16px] top-[197px] w-[397.333px]" data-name="Top container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgTopContainer} />
      </div>
      <Button4 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[144px] top-[197px]">
      <TopContainer4 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="h-[464px] relative shrink-0 w-[541.333px]">
      <Group30 />
      <Group31 />
    </div>
  );
}

function GzjeBfu2CzDw5ENjKmiPWlTq7KPng() {
  return <div className="absolute bg-[rgba(115,140,231,0.42)] inset-0 rounded-[999px]" data-name="GzjeBfu2CzDw5eNjKmiPWlTq7k.png" />;
}

function Check() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="check 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check 1">
          <path d="M12 5L6.5 11L4 8.27273" id="Vector" stroke="var(--stroke-0, #2952E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[4px] top-[4px]">
      <Check />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg fill">
      <Group22 />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill />
    </div>
  );
}

function Group23() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg />
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 ml-0 mt-0 overflow-clip relative rounded-[999px] row-1 size-[24px]" data-name="Container">
      <GzjeBfu2CzDw5ENjKmiPWlTq7KPng />
      <Group23 />
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[273px] place-items-start relative row-1">
      <Container3 />
    </div>
  );
}

function GzjeBfu2CzDw5ENjKmiPWlTq7KPng1() {
  return <div className="absolute bg-[rgba(115,140,231,0.42)] inset-0 rounded-[999px]" data-name="GzjeBfu2CzDw5eNjKmiPWlTq7k.png" />;
}

function Check1() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="check 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check 1">
          <path d="M12 5L6.5 11L4 8.27273" id="Vector" stroke="var(--stroke-0, #2952E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[4px] top-[4px]">
      <Check1 />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill1() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg fill">
      <Group25 />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill1 />
    </div>
  );
}

function Group24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-1 ml-0 mt-0 overflow-clip relative rounded-[999px] row-1 size-[24px]" data-name="Container">
      <GzjeBfu2CzDw5ENjKmiPWlTq7KPng1 />
      <Group24 />
    </div>
  );
}

function Group33() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[385px] place-items-start relative row-1">
      <Container4 />
    </div>
  );
}

function GzjeBfu2CzDw5ENjKmiPWlTq7KPng2() {
  return <div className="absolute bg-[rgba(115,140,231,0.42)] inset-0 rounded-[999px]" data-name="GzjeBfu2CzDw5eNjKmiPWlTq7k.png" />;
}

function Check2() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="check 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check 1">
          <path d="M12 5L6.5 11L4 8.27273" id="Vector" stroke="var(--stroke-0, #2952E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[4px] top-[4px]">
      <Check2 />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill2() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg fill">
      <Group27 />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill2 />
    </div>
  );
}

function Group26() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="col-1 ml-0 mt-0 overflow-clip relative rounded-[999px] row-1 size-[24px]" data-name="Container">
      <GzjeBfu2CzDw5ENjKmiPWlTq7KPng2 />
      <Group26 />
    </div>
  );
}

function Group32() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[329px] place-items-start relative row-1">
      <Container5 />
    </div>
  );
}

function GzjeBfu2CzDw5ENjKmiPWlTq7KPng3() {
  return <div className="absolute bg-[rgba(115,140,231,0.42)] inset-0 rounded-[999px]" data-name="GzjeBfu2CzDw5eNjKmiPWlTq7k.png" />;
}

function Check3() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="check 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check 1">
          <path d="M12 5L6.5 11L4 8.27273" id="Vector" stroke="var(--stroke-0, #2952E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[4px] top-[4px]">
      <Check3 />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill3() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg fill">
      <Group29 />
    </div>
  );
}

function CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="cI6c5diYPfHXoWrZ6wMyhJ0IGs.svg">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvgFill3 />
    </div>
  );
}

function Group28() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <CI6C5DiYPfHXoWrZ6WMyhJ0IGsSvg3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="col-1 ml-0 mt-0 overflow-clip relative rounded-[999px] row-1 size-[24px]" data-name="Container">
      <GzjeBfu2CzDw5ENjKmiPWlTq7KPng3 />
      <Group28 />
    </div>
  );
}

function Group34() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[441px] place-items-start relative row-1">
      <Container6 />
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-pre">{`Start Your Free Trial  →`}</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center ml-[36px] mt-[273px] relative row-1 text-[#70707b] text-[16px] w-[464px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`Engage leads with personalized video messages that `}</p>
        <p className="leading-[1.5]">feel 1-on-1</p>
      </div>
      <div className="col-1 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center ml-[36px] mt-[385px] relative row-1 text-[#70707b] text-[16px] w-[464px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`Increase response and conversion rates across `}</p>
        <p className="leading-[1.5]">every channel</p>
      </div>
      <Group21 />
      <Group33 />
      <Group32 />
      <Group34 />
      <div className="col-1 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center ml-[36px] mt-[329px] relative row-1 text-[#70707b] text-[16px] w-[464px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`Build trust with human, face-to-face communication `}</p>
        <p className="leading-[1.5]">at scale</p>
      </div>
      <div className="col-1 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center ml-[36px] mt-[441px] relative row-1 text-[#70707b] text-[16px] w-[464px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`Deliverable scalable outreach without ever losing `}</p>
        <p className="leading-[1.5]">authenticity</p>
      </div>
      <div className="col-1 h-[48px] ml-0 mt-[529px] relative rounded-[8px] row-1 w-[253px]" data-name="Button">
        <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
          <TextPadding4 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="col-1 font-['Geist:SemiBold',sans-serif] font-semibold ml-0 mt-[25px] relative row-1 text-[#18181b] text-[44px] tracking-[-2px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[1.3] mb-0">{`Video helps you stand out `}</p>
        <p className="leading-[1.3]">in a crowded market</p>
      </div>
      <p className="col-1 font-['Geist:semibold',sans-serif] leading-[1.5] ml-0 mt-0 not-italic relative row-1 text-[#2952e8] text-[14px] uppercase whitespace-nowrap">WHY VIDEO WORKS</p>
      <p className="col-1 font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.5] ml-0 mt-[151px] relative row-1 text-[#70707b] text-[20px] w-[505px]">Cut through noise and connect with your audience using personalized video outreach that feels human-every single time.</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white content-stretch flex h-auto min-h-[777px] items-center justify-between px-[20px] md:px-[32px] lg:px-[112px] py-[100px] relative shrink-0 w-full">
      <Frame72 />
      <Group35 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-[656px]">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">HOW IT WORKS</p>
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Personalization Made Simple</p>
      <div className="font-['Geist:regular',sans-serif] leading-[0] relative shrink-0 text-[#70707b] text-[20px] w-full">
        <p className="leading-[1.5] mb-[8px]">From one authentic video to thousands of personal conversation- in just</p>
        <p className="leading-[1.5]">five steps!</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Start here</p>
      <p className="leading-[1.3] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Record your base video</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[473px]">
      <Frame104 />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#70707b] text-[24px] w-full">Record or upload one authentic base video. 98% stays the same, so its always the real you on screen.</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex h-[424px] items-start overflow-clip relative shrink-0 w-full">
      <div className="absolute bg-[#cdd7f0] h-[424px] left-0 rounded-[16px] top-0 w-[473px]" />
      <div className="absolute bg-[#cdd7f0] h-[424px] left-0 rounded-[16px] top-0 w-[473px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-[121px]">IMPORT LEADS</p>
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[44px] text-black tracking-[-2px] w-[473px]">Upload your contact list</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#70707b] text-[24px] w-[473px]">Easily import a CSV of customers or prospects straight from your CRM or spreadsheet. Fields map automatically no manual setup needed.</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">GO LIVE</p>
      <p className="leading-[1.3] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Send with build -in-Email</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start ml-0 mt-0 relative row-1 w-[473px]">
      <Frame108 />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#70707b] text-[24px] w-full">Email personalized videos directly from the platform. Watch engagement skyrocket and track every open, play, and click — live.</p>
    </div>
  );
}

function Group46() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame107 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[149px] items-start relative shrink-0 w-full">
      <Frame106 />
      <Frame52 />
      <div className="bg-[#cdd7f0] h-[424px] rounded-[16px] shrink-0 w-full" />
      <Group46 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[167px] items-start relative shrink-0 w-[473px]">
      <Frame50 />
      <Frame105 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute left-0 size-[47px] top-[209px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="Group 195">
          <circle cx="23.5" cy="23.5" fill="var(--fill-0, #9CB1FF)" fillOpacity="0.36" id="Ellipse 19" r="23.5" />
          <circle cx="24" cy="24" fill="var(--fill-0, white)" id="Ellipse 18" r="11" stroke="var(--stroke-0, #2952E8)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute left-0 size-[47px] top-[209px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="Group 195">
          <circle cx="23.5" cy="23.5" fill="var(--fill-0, #9CB1FF)" fillOpacity="0.36" id="Ellipse 19" r="23.5" />
          <circle cx="24" cy="24" fill="var(--fill-0, white)" id="Ellipse 18" r="11" stroke="var(--stroke-0, #2952E8)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute left-0 size-[47px] top-[629px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="Group 220">
          <circle cx="23.5" cy="23.5" fill="var(--fill-0, #9CB1FF)" fillOpacity="0.36" id="Ellipse 19" r="23.5" />
          <circle cx="24" cy="24" fill="var(--fill-0, #2952E8)" id="Ellipse 18" r="11" stroke="var(--stroke-0, #2952E8)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute left-0 size-[47px] top-[1177px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="Group 195">
          <circle cx="23.5" cy="23.5" fill="var(--fill-0, #9CB1FF)" fillOpacity="0.36" id="Ellipse 19" r="23.5" />
          <circle cx="24" cy="24" fill="var(--fill-0, white)" id="Ellipse 18" r="11" stroke="var(--stroke-0, #2952E8)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute left-0 size-[47px] top-[1635px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="Group 195">
          <circle cx="23.5" cy="23.5" fill="var(--fill-0, #9CB1FF)" fillOpacity="0.36" id="Ellipse 19" r="23.5" />
          <circle cx="24" cy="24" fill="var(--fill-0, white)" id="Ellipse 18" r="11" stroke="var(--stroke-0, #2952E8)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute left-0 size-[47px] top-[2145px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="Group 195">
          <circle cx="23.5" cy="23.5" fill="var(--fill-0, #9CB1FF)" fillOpacity="0.36" id="Ellipse 19" r="23.5" />
          <circle cx="24" cy="24" fill="var(--fill-0, white)" id="Ellipse 18" r="11" stroke="var(--stroke-0, #2952E8)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col h-[2360px] items-start overflow-clip relative shrink-0 w-[47px]">
      <div className="absolute bg-[#2952e8] h-[2360px] right-[23px] top-0 w-[2px]" />
      <Group43 />
      <Group44 />
      <Group49 />
      <Group45 />
      <Group48 />
      <Group47 />
    </div>
  );
}

function Frame112() {
  return <div className="bg-[#cdd7f0] h-[424px] rounded-[12px] shrink-0 w-full" />;
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#2952e8] text-[14px] uppercase w-[121px]">MAKE IT YOURS</p>
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[44px] text-black tracking-[-2px] w-[473px]">Choose personalization points</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#70707b] text-[24px] w-[473px]">Pick which words or phrases to swap — contact name, company, or any key detail. Tag them once, AI handles every variation.</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[138.5px] items-start relative shrink-0 w-full">
      <Frame112 />
      <Frame51 />
      <div className="bg-[#cdd7f0] h-[424px] rounded-[16px] shrink-0 w-full" />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">ONE CLICK</p>
      <p className="leading-[1.3] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Click generate</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame115 />
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#70707b] text-[24px] w-full">Hit generate and Promoflix renders a unique personalized video for every single contact — in minutes, no editing required.</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[171px] items-start relative shrink-0 w-full">
      <Frame114 />
      <div className="bg-[#cdd7f0] h-[424px] rounded-[16px] shrink-0 w-full" />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[167px] items-start min-w-px relative">
      <Frame111 />
      <Frame113 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[101px] items-center relative shrink-0 w-full">
      <Frame103 />
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Frame6() {
  return (
    <section className="bg-[#eff4ff] relative shrink-0 w-full" data-name="Process section">
      <div className="px-[20px] pb-[72px] pt-[88px] md:px-[32px]">
        <div className="content-stretch flex flex-col gap-[4px] items-center mx-auto max-w-[656px] text-center">
          <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#2952e8] text-[14px] uppercase w-full">HOW IT WORKS</p>
          <p className="font-['Geist:semibold',sans-serif] leading-[1.3] text-[44px] text-black tracking-[-2px] w-full">Personalization Made Simple</p>
          <div className="font-['Geist:regular',sans-serif] text-[#70707b] text-[20px] w-full">
            <p className="leading-[1.5] mb-[8px]">From one authentic video to thousands of personal conversation- in just</p>
            <p className="leading-[1.5]">five steps!</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] w-full px-[20px] pb-[112px] md:px-[32px]">
        <div className="flex flex-col gap-[40px] lg:gap-[32px]">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.title}
              className="grid grid-cols-1 items-center gap-[28px] lg:grid-cols-[minmax(0,380px)_minmax(0,440px)] lg:justify-between lg:gap-[80px]"
            >
              <div className="max-w-[380px]">
                <p className="font-['Geist:semibold',sans-serif] leading-[1.5] text-[#2952e8] text-[10px] uppercase tracking-[0.08em]">
                  {step.eyebrow}
                </p>
                <p className="mt-[12px] font-['Geist:semibold',sans-serif] leading-[1.12] text-[clamp(30px,3.5vw,44px)] text-black tracking-[-1.6px]">
                  {step.title}
                </p>
                <p className="mt-[12px] font-['Geist:regular',sans-serif] leading-[1.5] text-[#70707b] text-[18px] lg:text-[20px]">
                  {step.description}
                </p>
              </div>
              <div className={`relative h-[248px] w-full max-w-[440px] overflow-hidden rounded-[20px] bg-gradient-to-br ${step.accent}`}>
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.24)]" />
                <div className="absolute -left-[18px] -top-[12px] h-[148px] w-[148px] rounded-full bg-[rgba(255,255,255,0.18)] blur-[8px]" />
                <div className="absolute bottom-[22px] right-[22px] h-[124px] w-[124px] rounded-full bg-[rgba(255,255,255,0.22)] blur-[2px]" />
                <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[rgba(255,255,255,0.32)] bg-[rgba(255,255,255,0.18)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start relative shrink-0 w-full">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Testimonials/case studies</p>
      <p className="leading-[1.3] relative shrink-0 text-[#18181b] text-[44px] tracking-[-2px] w-full">What our clients say</p>
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[560px] not-italic relative shrink-0 text-center w-full" data-name="top">
      <Frame46 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] relative shrink-0 text-[#70707b] text-[20px] w-full">Real stories from brands that use Promoflix.AI to scale faster and achieve measurable results.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1240px] relative shrink-0 w-full" data-name="Container">
      <Top2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] whitespace-nowrap">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[16px] w-[256px]">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] w-full">
        <p className="leading-[1.5]">Incredibly useful product</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] w-full whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`"Promoflix helped us personalize email responses at a scale we couldn't have imagined before. `}</p>
        <p className="leading-[1.5]">{`Our reply rate tripled in the first week. Our reply rate tripled in the first week."`}</p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame42 />
      <Frame118 />
    </div>
  );
}

function FWam59KKaIaReCvIx5ZdmQ2EgC4Png() {
  return (
    <div className="absolute bg-[#c9cdf5] inset-0 overflow-clip" data-name="fWam59KKaIaReCvIX5zdmQ2egC4.png">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] left-[13px] text-[#2952e8] text-[16px] top-[24px] whitespace-nowrap">
        <p className="leading-[1.5]">FN</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e8e4f7] overflow-clip relative rounded-[999px] shrink-0 size-[48px]" data-name="Background">
      <FWam59KKaIaReCvIx5ZdmQ2EgC4Png />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5.79px] items-start leading-[0] min-w-px relative">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[20px] justify-center relative shrink-0 text-[#060b13] text-[14px] tracking-[-0.09px] w-full">
        <p className="leading-[23.8px]">Fig Nelson</p>
      </div>
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[15px] justify-center relative shrink-0 text-[#2952e8] text-[12px] tracking-[0.01px] w-full">
        <p className="leading-[20.4px]">@fignel_sooon</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Background />
      <Frame119 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-[#fbfbfb] content-stretch flex flex-col h-[331px] items-start justify-between p-[24px] relative rounded-[8px] shrink-0 w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#c3cfff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame117 />
      <Frame7 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white content-stretch flex h-[347px] items-start p-[8px] relative rounded-[12px] shrink-0 w-[336px]">
      <Frame116 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame44 />
    </div>
  );
}

function Group36() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-white col-1 h-[347px] ml-0 mt-0 rounded-[16px] row-1 w-[336px]" />
    </div>
  );
}

function Group38() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group36 />
    </div>
  );
}

function Group37() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="col-1 h-[134px] ml-0 mt-0 rounded-tl-[16px] rounded-tr-[16px] row-1 w-[336px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 336 134\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(21.55 14.65 -36.734 54.036 261 290.5)\\'><foreignObject x=\\'-120.99\\' y=\\'-120.99\\' width=\\'241.99\\' height=\\'241.99\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgb(255, 255, 255) 0%, rgb(202, 212, 249) 11.769%, rgb(148, 169, 244) 23.537%, rgb(95, 125, 238) 35.306%, rgb(68, 104, 235) 41.19%, rgb(41, 82, 232) 47.074%, rgb(68, 104, 235) 53.69%, rgb(95, 125, 238) 60.306%, rgb(148, 169, 244) 73.537%, rgb(202, 212, 249) 86.769%, rgb(255, 255, 255) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')" }} />
    </div>
  );
}

function Group40() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group37 />
    </div>
  );
}

function Group41() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group38 />
      <Group40 />
      <div className="col-1 flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center ml-[24px] mt-[152px] relative row-1 text-[#18181b] text-[16px] w-[256px]">
        <p className="leading-[1.5]">Scalepath was live in 2 days- and never went back to cold email</p>
      </div>
      <p className="[text-decoration-skip-ink:none] col-1 decoration-solid font-['Geist:SemiBold',sans-serif] font-semibold leading-[24px] ml-[24px] mt-[291px] not-italic relative row-1 text-[#2952e8] text-[16px] underline whitespace-nowrap">Read Case Study →</p>
      <div className="col-1 flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center ml-[24px] mt-[208px] relative row-1 text-[#70707b] text-[14px] w-[288px]">
        <p className="leading-[1.5]">From CRM sync to first send in under 48 hours. Their team adopted it before anyone even asked.</p>
      </div>
      <p className="col-1 font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.5] ml-[24px] mt-[103px] relative row-1 text-[10px] text-center text-white uppercase whitespace-nowrap">case stuDY</p>
      <div className="col-1 ml-[316px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[4px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[316px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[40px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[316px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[76px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[316px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[112px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[316px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[22px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[316px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 117" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[58px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[316px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[94px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[316px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[130px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[32px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[254px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[68px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[192px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[294px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[108px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[10px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[232px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[170px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[272px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[86px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[210px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[148px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
      <div className="col-1 ml-[50px] mt-[130px] relative row-1 size-[2px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, white)" fillOpacity="0.48" id="Ellipse 22" r="1" />
        </svg>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[16px] tracking-[2px] whitespace-nowrap">
        <p className="leading-[normal]">★★★★★</p>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[16px] w-[256px]">
      <div className="flex flex-col font-['Geist:medium',sans-serif] justify-center relative shrink-0 text-[#18181b] w-full">
        <p className="leading-[1.5]">Incredibly useful product</p>
      </div>
      <div className="flex flex-col font-['Geist:regular',sans-serif] justify-center relative shrink-0 text-[#70707b] w-full whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`"Promoflix helped us personalize email responses at a scale we couldn't have imagined before. `}</p>
        <p className="leading-[1.5]">{`Our reply rate tripled in the first week. Our reply rate tripled in the first week."`}</p>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame43 />
      <Frame122 />
    </div>
  );
}

function FWam59KKaIaReCvIx5ZdmQ2EgC4Png1() {
  return (
    <div className="absolute bg-[#b5eccf] inset-0 overflow-clip" data-name="fWam59KKaIaReCvIX5zdmQ2egC4.png">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] left-[13px] text-[#0b7a14] text-[16px] top-[24px] whitespace-nowrap">
        <p className="leading-[1.5]">FN</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e8e4f7] overflow-clip relative rounded-[999px] shrink-0 size-[48px]" data-name="Background">
      <FWam59KKaIaReCvIx5ZdmQ2EgC4Png1 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5.79px] items-start leading-[0] min-w-px relative">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[20px] justify-center relative shrink-0 text-[#060b13] text-[14px] tracking-[-0.09px] w-full">
        <p className="leading-[23.8px]">Fig Nelson</p>
      </div>
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium h-[15px] justify-center relative shrink-0 text-[#0b7a14] text-[12px] tracking-[0.01px] w-full">
        <p className="leading-[20.4px]">@fignel_sooon</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[200px]" data-name="Frame">
      <Background1 />
      <Frame123 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#fbfbfb] col-1 content-stretch flex flex-col h-[331px] items-start justify-between ml-[8px] mt-[8px] p-[24px] relative rounded-[8px] row-1 w-[320px]">
      <div aria-hidden="true" className="absolute border border-[#c3cfff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame121 />
      <Frame8 />
    </div>
  );
}

function Group39() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-white col-1 h-[347px] ml-0 mt-0 rounded-[16px] row-1 w-[336px]" />
      <div className="bg-[#fbfbfb] border border-[#c3cfff] border-solid col-1 h-[331px] ml-[8px] mt-[8px] rounded-[16px] row-1 w-[320px]" />
      <Frame120 />
    </div>
  );
}

function Group42() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group39 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0">
      <Frame47 />
      <Group41 />
      <Group42 />
    </div>
  );
}

function Testimonials2() {
  return (
    <div className="bg-[#eff4ff] content-stretch flex flex-col gap-[48px] h-auto min-h-[725px] items-center overflow-clip py-[88px] px-[20px] md:px-[32px] relative shrink-0 w-full" data-name="Testimonials">
      <Container7 />
      <Frame49 />
    </div>
  );
}

function TopText() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="top text">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">OUR PRICING</p>
      <p className="leading-[1.3] relative shrink-0 text-[44px] text-black tracking-[-2px] w-full">Simple, transparent pricing</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[10px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px] whitespace-nowrap">Monthly</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[10px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#70707b] text-[16px] tracking-[-0.32px] whitespace-nowrap">Yearly (save 10%)</p>
    </div>
  );
}

function MonthlyYearlyToggle() {
  return (
    <div className="bg-[#dce7fd] content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[12px] shrink-0" data-name="Monthly/yearly toggle">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[9.38%_9.38%_15.63%_9.38%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 18">
        <g id="Group">
          <path d={svgPaths.p254a6e00} fill="var(--fill-0, #2952E8)" id="Vector" opacity="0.2" />
          <path d={svgPaths.pf124d80} fill="var(--fill-0, #2952E8)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[9.38%_9.38%_15.63%_9.38%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group7 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#dce7fd] content-stretch flex flex-col items-center p-[10px] relative rounded-[6px] shrink-0 w-[44px]">
      <div aria-hidden="true" className="absolute border border-[#95bbfb] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
      <Frame9 />
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-start justify-center not-italic relative shrink-0 text-center w-full" data-name="Price">
      <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">eNTERPRISE</p>
      <p className="leading-[1.3] relative shrink-0 text-[#111] text-[20px] tracking-[-1px] w-full">Need a custom solution?</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Frame37 />
      <Price />
    </div>
  );
}

function CheckItemText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Check item text">
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#18181b] text-[16px] text-center">Tailored video volume, dedicated support, custom integrations, and flexible billing for large teams.</p>
    </div>
  );
}

function CheckItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative size-full">
        <Content />
        <CheckItemText />
      </div>
    </div>
  );
}

function TextPadding5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Contact sales</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center pl-[12px] pr-[18px] py-[8px] relative size-full">
              <TextPadding5 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="bg-[#dce7fd] col-4 h-[643px] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Pricing card">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[493px] left-[150px] top-[-28px] w-[443px]">
          <div className="absolute inset-[0_31.36%_59.69%_6.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.297 198.73">
              <g id="Rectangle 243">
                <path d={svgPaths.p19ae0e00} fill="var(--fill-0, #2952E8)" fillOpacity="0.15" style={{ mixBlendMode: "multiply" }} />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[493px] left-[221px] top-[396px] w-[443px]">
          <div className="absolute inset-[0_31.36%_59.69%_6.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.297 198.73">
              <g id="Rectangle 243">
                <path d={svgPaths.p19ae0e00} fill="var(--fill-0, #2952E8)" fillOpacity="0.15" style={{ mixBlendMode: "multiply" }} />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[493px] left-[-248px] top-[164px] w-[443px]">
          <div className="absolute inset-[0_31.36%_59.69%_6.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.297 198.73">
              <g id="Rectangle 243">
                <path d={svgPaths.p19ae0e00} fill="var(--fill-0, #2952E8)" fillOpacity="0.15" style={{ mixBlendMode: "multiply" }} />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[274px] left-[-152px] top-[404px] w-[417.5px]">
          <div className="absolute inset-[34.85%_22.55%_0_13.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 265.854 178.505">
              <g id="Rectangle 247">
                <path d={svgPaths.p264792f0} fill="var(--fill-0, #2952E8)" fillOpacity="0.15" style={{ mixBlendMode: "multiply" }} />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute backdrop-blur-[22px] bg-[rgba(255,255,255,0.15)] h-[643px] left-[-1px] top-0 w-[302px]" />
        <CheckItems />
        <Footer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c0d5fe] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]" />
    </div>
  );
}

function MainText() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full" data-name="Main text">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Explorer</p>
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">Great for getting started with scalable outreach.</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex font-['Geist:semibold',sans-serif] items-baseline relative shrink-0 whitespace-nowrap" data-name="Price">
      <p className="leading-[1.3] relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">$59</p>
      <p className="leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[20px]">/mo</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[24px] relative size-full">
        <MainText />
        <Price1 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p5c05eb0} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame10 />
    </div>
  );
}

function CheckItemText1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap />
      <p className="flex-[1_0_0] font-['Geist:medium',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#18181b] text-[16px]">Expect 1–2 customers back</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame11 />
    </div>
  );
}

function CheckItemText2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap1 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Send up to 100 videos per month</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame12 />
    </div>
  );
}

function CheckItemText3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap2 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">$0.75 per video over the limit</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap3() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame13 />
    </div>
  );
}

function CheckItemText4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap3 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Customize 2 variables</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap4() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame14 />
    </div>
  );
}

function CheckItemText5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap4 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Auto-play thumbnails in inbox</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap5() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame15 />
    </div>
  );
}

function CheckItemText6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap5 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Support via email</p>
    </div>
  );
}

function CheckItems1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <CheckItemText1 />
        <CheckItemText2 />
        <CheckItemText3 />
        <CheckItemText4 />
        <CheckItemText5 />
        <CheckItemText6 />
      </div>
    </div>
  );
}

function TextPadding6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Choose Plan</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[9.38%_9.37%_9.37%_9.37%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Group">
          <path d={svgPaths.p4253100} fill="var(--fill-0, #131316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group9 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0">
      <Frame16 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame126 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#131316] text-[0px]">
        <span className="font-['Geist:Bold',sans-serif] font-bold leading-[1.5] text-[14px]">{`You’ll be charged $59.99/month `}</span>
        <span className="leading-[1.5] text-[14px]">after your trial. Cancel before it ends to avoid charges.</span>
      </p>
    </div>
  );
}

function Footer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
        <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <TextPadding6 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame125 />
      </div>
    </div>
  );
}

function PricingCard1() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] row-1 self-start shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0" data-name="Pricing card">
      <Content1 />
      <CheckItems1 />
      <Footer1 />
    </div>
  );
}

function MainText1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full" data-name="Main text">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Rainmaker</p>
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">Ideal for growing outreach with higher volume.</p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex font-['Geist:semibold',sans-serif] items-baseline relative shrink-0 whitespace-nowrap" data-name="Price">
      <p className="leading-[1.3] relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">$159</p>
      <p className="leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[20px]">/mo</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[24px] relative size-full">
        <MainText1 />
        <Price2 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p5c05eb0} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap6() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame17 />
    </div>
  );
}

function CheckItemText7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap6 />
      <p className="flex-[1_0_0] font-['Geist:medium',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#18181b] text-[16px]">Expect 4-5 customers back</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap7() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame18 />
    </div>
  );
}

function CheckItemText8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap7 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Send up to 400 videos per month</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap8() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame19 />
    </div>
  );
}

function CheckItemText9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap8 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">$0.60 per extra video</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap9() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame20 />
    </div>
  );
}

function CheckItemText10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap9 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">{`Customize 2 variables `}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap10() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame21 />
    </div>
  );
}

function CheckItemText11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap10 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Auto-play thumbnails in inbox</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap11() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame22 />
    </div>
  );
}

function CheckItemText12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap11 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Dedicated onboarding</p>
    </div>
  );
}

function CheckItems2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <CheckItemText7 />
        <CheckItemText8 />
        <CheckItemText9 />
        <CheckItemText10 />
        <CheckItemText11 />
        <CheckItemText12 />
      </div>
    </div>
  );
}

function TextPadding7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Choose Plan</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[9.38%_9.37%_9.37%_9.37%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Group">
          <path d={svgPaths.p4253100} fill="var(--fill-0, #131316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group10 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0">
      <Frame23 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame128 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#131316] text-[14px]">A fee of half your remaining commitment applies if you cancel your plan after May 6.</p>
    </div>
  );
}

function Footer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
        <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <TextPadding7 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame127 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute bg-[#2952e8] content-stretch flex items-center justify-center pb-[3px] pt-[4px] px-[12px] right-0 rounded-bl-[12px] rounded-tr-[12px] top-0">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#fafafa] text-[14px] uppercase whitespace-nowrap">MOST POPULAR</p>
    </div>
  );
}

function PricingCard2() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] row-1 self-start shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0" data-name="Pricing card">
      <Content2 />
      <CheckItems2 />
      <Footer2 />
      <Frame38 />
    </div>
  );
}

function MainText2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] relative shrink-0 w-full" data-name="Main text">
      <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">Titan</p>
      <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b] text-[16px] w-full">Best for power users needing maximum reach.</p>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex font-['Geist:semibold',sans-serif] items-baseline relative shrink-0 whitespace-nowrap" data-name="Price">
      <p className="leading-[1.3] relative shrink-0 text-[#111] text-[44px] tracking-[-2px]">$379</p>
      <p className="leading-[1.5] relative shrink-0 text-[#a0a0ab] text-[20px]">/mo</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start not-italic p-[24px] relative size-full">
        <MainText2 />
        <Price3 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p5c05eb0} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap12() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame24 />
    </div>
  );
}

function CheckItemText13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap12 />
      <p className="flex-[1_0_0] font-['Geist:medium',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#18181b] text-[16px]">Expect 4-5 customers back</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap13() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame25 />
    </div>
  );
}

function CheckItemText14() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap13 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Send up to 1500 videos per month</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap14() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame26 />
    </div>
  );
}

function CheckItemText15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap14 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">$0.50 per extra video</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap15() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame27 />
    </div>
  );
}

function CheckItemText16() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap15 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Customize 2 variables</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap16() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame28 />
    </div>
  );
}

function CheckItemText17() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap16 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Auto-play thumbnails in inbox</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p31ccbc00} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap17() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0 size-[24px]" data-name="wrap">
      <Frame29 />
    </div>
  );
}

function CheckItemText18() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Check item text">
      <Wrap17 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#70707b] text-[16px]">Dedicated onboarding</p>
    </div>
  );
}

function CheckItems3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Check items">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <CheckItemText13 />
        <CheckItemText14 />
        <CheckItemText15 />
        <CheckItemText16 />
        <CheckItemText17 />
        <CheckItemText18 />
      </div>
    </div>
  );
}

function TextPadding8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Choose Plan</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[9.38%_9.37%_9.37%_9.37%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Group">
          <path d={svgPaths.p4253100} fill="var(--fill-0, #131316)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group11 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame130 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#131316] text-[14px]">No refunds are available once your plan activates. Cancel before Day 15 if you’d prefer not to continue.</p>
    </div>
  );
}

function Footer3() {
  return (
    <div className="h-[169px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
        <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
              <TextPadding8 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame129 />
      </div>
    </div>
  );
}

function PricingCard3() {
  return (
    <div className="bg-white col-3 content-stretch flex flex-col h-[643px] items-start justify-self-stretch relative rounded-[12px] row-1 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0" data-name="Pricing card">
      <Content3 />
      <CheckItems3 />
      <Footer3 />
    </div>
  );
}

function CardsWrap() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="cards wrap">
      <PricingCard />
      <PricingCard1 />
      <PricingCard2 />
      <PricingCard3 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
        <g id="Group">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group12 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame31 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Create up to 10 videos before you pay.</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
        <g id="Group">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group13 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame32 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Cancel anytime, no questions asked.</p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <Frame134 />
      <Frame135 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame133 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
        <g id="Group">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group14 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame33 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Card not charged until Day 15.</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
        <g id="Group">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #2952E8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group15 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame34 />
      <p className="flex-[1_0_0] font-['Geist:regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[16px] text-black text-center">Trial works on every paid tier.</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <Frame137 />
      <Frame138 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <Frame132 />
      <Frame136 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Geist:semibold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[36px] text-black tracking-[-2px] w-full">Not sure yet?</p>
    </div>
  );
}

function TopText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="top text">
      <Frame139 />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#131316] text-[14px] w-[502px]">Start your free 14-day trial on any plan and see exactly what Promoflix can do for your outreach. No charges, no commitment — just results.</p>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="bg-[#eff4ff] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="bottom">
      <div aria-hidden="true" className="absolute border border-[#dce7fd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative size-full">
          <TopText1 />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="bottom">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center p-[24px] relative size-full">
          <Frame131 />
          <Bottom1 />
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <MonthlyYearlyToggle />
      <CardsWrap />
      <Bottom />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1240px] relative shrink-0 w-full" data-name="container">
      <TopText />
      <Frame124 />
    </div>
  );
}

function Pricing() {
  const [pricingMode, setPricingMode] = useState<PricingMode>("monthly");
  const plans = PRICING_PLANS[pricingMode];

  return (
    <div className="bg-[#eff4ff] content-stretch flex flex-col items-center overflow-clip py-[88px] px-[20px] md:px-[32px] relative shrink-0 w-full" data-name="Pricing" id="pricing">
      <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[1240px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col font-['Geist:semibold',sans-serif] gap-[4px] items-center not-italic relative shrink-0 text-center w-full">
          <p className="leading-[1.5] relative shrink-0 text-[#2952e8] text-[14px] uppercase w-full">OUR PRICING</p>
          <p className="leading-[1.22] relative shrink-0 text-[52px] text-black tracking-[-1px] w-full">Try Promoflix free for 14 days. See how it improves outreach. Cancel anytime.</p>
        </div>

        <div className="w-full rounded-[16px] bg-[#f8f8f8] p-[12px] md:p-[16px]">
          <div className="grid grid-cols-1 gap-[12px] lg:grid-cols-[1fr_1fr_0.95fr]">
            <div className="rounded-[12px] bg-white px-[16px] py-[14px] text-center min-h-[158px] flex flex-col justify-center">
              <p className="font-['Geist:regular',sans-serif] text-[#18181b] text-[16px] leading-[1.6]">✓ Create up to 10 videos before you pay.</p>
              <p className="font-['Geist:regular',sans-serif] mt-[10px] text-[#18181b] text-[16px] leading-[1.6]">✓ Cancel anytime, no questions asked.</p>
            </div>
            <div className="rounded-[12px] bg-white px-[16px] py-[14px] text-center min-h-[158px] flex flex-col justify-center">
              <p className="font-['Geist:regular',sans-serif] text-[#18181b] text-[16px] leading-[1.6]">✓ Card not charged until Day 15.</p>
              <p className="font-['Geist:regular',sans-serif] mt-[10px] text-[#18181b] text-[16px] leading-[1.6]">✓ Trial works on every paid tier.</p>
            </div>
            <div className="rounded-[12px] border border-[#d6def5] bg-[#e9eefb] px-[18px] py-[16px]">
              <p className="font-['Geist:semibold',sans-serif] text-[#18181b] text-[30px] leading-[1.1] tracking-[-1px]">Not sure yet?</p>
              <p className="font-['Geist:regular',sans-serif] mt-[8px] text-[#535862] text-[16px] leading-[1.55]">Start your free 14-day trial on any plan and see exactly what Promoflix can do for your outreach. No charges, no commitment, just results.</p>
            </div>
          </div>
        </div>

        <PricingModeToggle onPricingModeChange={setPricingMode} pricingMode={pricingMode} />

        <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-1 lg:grid-cols-[repeat(4,minmax(0,1fr))] h-auto lg:h-[570px] relative shrink-0 w-full">
          <PricingPlanCard
            className="bg-white content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0"
            featureContainerClassName="flex-[1_0_0] min-h-px min-w-px relative w-full"
            meta={PRICING_CARD_META[0]}
            plan={plans[0]}
          />
          <PricingPlanCard
            className="bg-white content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0"
            featureContainerClassName="flex-[1_0_0] min-h-px min-w-px relative w-full"
            meta={PRICING_CARD_META[1]}
            plan={plans[1]}
          />
          <PricingPlanCard
            className="bg-white content-stretch flex flex-col items-start justify-self-stretch relative rounded-[12px] self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0"
            featureContainerClassName="flex-[1_0_0] min-h-px min-w-px relative w-full"
            meta={PRICING_CARD_META[2]}
            plan={plans[2]}
          />
          <div className="bg-[radial-gradient(circle_at_92%_8%,rgba(99,151,247,0.18),transparent_26%),radial-gradient(circle_at_8%_92%,rgba(99,151,247,0.14),transparent_28%),radial-gradient(circle_at_92%_88%,rgba(99,151,247,0.12),transparent_24%),linear-gradient(180deg,#eef4ff_0%,#dfe7ff_100%)] content-stretch flex flex-col items-center justify-center rounded-[12px] self-stretch shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]">
            <div className="content-stretch flex flex-col gap-[20px] items-center px-[28px] py-[32px] w-full">
              <div className="content-stretch flex flex-col gap-[10px] items-center w-full">
                <p className="font-['Geist:semibold',sans-serif] text-[#2952e8] text-[14px] uppercase text-center w-full">Enterprise</p>
                <p className="font-['Geist:semibold',sans-serif] leading-[1.25] text-[#18181b] text-[28px] text-center tracking-[-1px] w-full">Need a custom solution?</p>
                <p className="font-['Geist:regular',sans-serif] leading-[1.55] text-[#535862] text-[16px] text-center w-full">Tailored video volume, dedicated support, custom integrations, and flexible billing for large teams.</p>
              </div>
              <div className="w-full">
                <button className="bg-[#2952e8] font-['Geist:semibold',sans-serif] h-[48px] rounded-[8px] text-white w-full" data-action="open-external-url" data-external-url={CONTACT_SALES_URL}>Contact sales</button>
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-[20px] whitespace-nowrap">
          <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b]">{`All plans include our core AI video generation technology. `}</p>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="font-['Geist:regular',sans-serif] relative shrink-0 text-[#70707b]">{`Need a custom enterprise solution? `}</p>
            <p className="font-['Geist:semibold',sans-serif] relative shrink-0 text-[#2952e8] text-center">Contact sales</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Geist:semibold',sans-serif] leading-[0] min-w-px not-italic relative text-[#18181b] text-[54px] text-center tracking-[-1.08px] whitespace-pre-wrap">
        <p className="leading-[1.1] mb-[8px]">{`Create one video. `}</p>
        <p className="leading-[1.1]">Make it feel personal for everyone.</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute bg-[#fedf89] content-stretch flex gap-[2px] items-center justify-center left-[598px] opacity-40 px-[12px] py-[8px] rounded-[42px] top-[240px]">
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e1d09] text-[16px] whitespace-nowrap">{`{{`}</p>
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e1d09] text-[16px] whitespace-nowrap">Firstname</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative text-[#4e1d09] text-[16px] whitespace-nowrap">{`{{`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute bg-[#dce7fd] content-stretch flex gap-[2px] items-center justify-center left-[768px] px-[12px] py-[8px] rounded-[42px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.16)] top-[206px]">
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2952e8] text-[16px] whitespace-nowrap">{`{{`}</p>
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2952e8] text-[16px] whitespace-nowrap">vehicle</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative text-[#2952e8] text-[16px] whitespace-nowrap">{`{{`}</p>
        </div>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[14.06%_-0.01%_20.31%_3.13%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2529 15.75">
        <g id="Group">
          <path d={svgPaths.p1ae21900} fill="var(--fill-0, #DC6803)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group16 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute bg-[#ffc2a8] content-stretch flex gap-[8px] items-center justify-center left-[807px] px-[12px] py-[8px] rounded-[42px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.16)] top-[372px]">
      <Frame35 />
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#dc6803] text-[16px] whitespace-nowrap">Andrew</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[14.06%_-0.01%_20.31%_3.13%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2529 15.75">
        <g id="Group">
          <path d={svgPaths.p1ae21900} fill="var(--fill-0, #DC6803)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Frame">
      <Group17 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute bg-[#ffe7bc] content-stretch flex gap-[8px] items-center justify-center left-[406px] opacity-80 px-[12px] py-[8px] rounded-[42px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.16)] top-[308px]">
      <Frame36 />
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#dc6803] text-[16px] whitespace-nowrap">Carlos</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute bg-[#75e0a7] content-stretch flex gap-[1.5px] h-[30px] items-center justify-center left-[335.13px] opacity-70 px-[9px] py-[6px] rounded-[31.5px] top-[211px] w-[84.75px]">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#053321] text-[12px] whitespace-nowrap">{`{{`}</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#053321] text-[12px] whitespace-nowrap">email id</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[18px] relative text-[#053321] text-[12px] whitespace-nowrap">{`{{`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute bg-[#75e0a7] content-stretch flex gap-[1.5px] h-[30px] items-center justify-center left-[52px] opacity-70 px-[9px] py-[6px] rounded-[31.5px] top-[329px] w-[84.75px]">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#053321] text-[12px] whitespace-nowrap">{`{{`}</p>
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#053321] text-[12px] whitespace-nowrap">email id</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[18px] relative text-[#053321] text-[12px] whitespace-nowrap">{`{{`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute bg-[#fedf89] content-stretch flex gap-[2px] items-center justify-center left-[161px] opacity-60 px-[12px] py-[8px] rounded-[42px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.16)] top-[129px]">
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e1d09] text-[16px] whitespace-nowrap">{`{{`}</p>
      <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4e1d09] text-[16px] whitespace-nowrap">David</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative text-[#4e1d09] text-[16px] whitespace-nowrap">{`{{`}</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] min-h-[618px] items-start justify-center max-w-[1240px] relative shrink-0 w-full px-[20px] md:px-[32px]" data-name="container">
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame68 />
      <Frame70 />
      <Frame66 />
      <Frame69 />
      <Frame67 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[15.73%_17.54%_15.73%_18.75%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2735 35.7958">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p9e2d180} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroiconsPlaySolid1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[52.227px]" data-name="heroicons-play-solid 1">
      <Group18 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[185.592px] items-center justify-center left-[214px] rounded-[22.383px] shadow-[0px_0.933px_41.035px_0px_rgba(0,0,0,0.25)] top-[452.41px] w-[263px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[22.383px]">
        <div className="absolute bg-[#e4e4e4] inset-0 rounded-[22.383px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[22.383px] size-full" src={imgFrame1000012290} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[22.383px]" />
      </div>
      <HeroiconsPlaySolid1 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[15.73%_17.54%_15.73%_18.75%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4174 26.2684">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3fe78e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroiconsPlaySolid2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[38.326px]" data-name="heroicons-play-solid 1">
      <Group19 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[136.195px] items-center justify-center left-[1047px] opacity-80 rounded-[16.426px] shadow-[0px_0.684px_30.113px_0px_rgba(0,0,0,0.25)] top-[486px] w-[193px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16.426px]">
        <div className="absolute bg-[#e4e4e4] inset-0 rounded-[16.426px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16.426px] size-full" src={imgFrame1000012290} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[16.426px]" />
      </div>
      <HeroiconsPlaySolid2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[15.73%_17.54%_15.73%_18.75%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.4174 26.2684">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3fe78e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroiconsPlaySolid3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[38.326px]" data-name="heroicons-play-solid 1">
      <Group20 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[136.195px] items-center justify-center left-[1009px] opacity-60 rounded-[16.426px] shadow-[0px_0.684px_30.113px_0px_rgba(0,0,0,0.25)] top-[101px] w-[193px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16.426px]">
        <div className="absolute bg-[#e4e4e4] inset-0 rounded-[16.426px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16.426px] size-full" src={imgFrame1000012290} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[16.426px]" />
      </div>
      <HeroiconsPlaySolid3 />
    </div>
  );
}

function Animation() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip py-[88px] relative shrink-0 w-full" data-name="Animation 1">
      <Container9 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[84px]" data-name="column">
      <p className="relative shrink-0 text-[#a0a0ab] w-full">ABOUT</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">How it works</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">Pricing</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[48px]" data-name="column">
      <p className="relative shrink-0 text-[#a0a0ab] w-full">LEGAL</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">Privacy</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">{`Terms `}</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[135px]" data-name="column">
      <p className="relative shrink-0 text-[#a0a0ab] w-full">CONTACT</p>
      <p className="relative shrink-0 text-[#fafafa] w-full">hello@promoflix.com</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="col-3 content-stretch flex font-['Geist:regular',sans-serif] items-start justify-between justify-self-stretch leading-[1.5] not-italic relative row-1 self-start shrink-0 text-[14px]" data-name="footer links">
      <Column />
      <Column1 />
      <Column2 />
    </div>
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
            <g filter="url(#filter0_ddiii_1_1862)" id="Ellipse 1">
              <mask fill="white" id="path-1-inside-1_1_1862">
                <path d={svgPaths.p35349600} />
              </mask>
              <path d={svgPaths.p35349600} fill="var(--fill-0, #2952E8)" />
              <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_1_1862)" stroke="url(#paint0_linear_1_1862)" strokeWidth="3.33333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_1_1862" width="44.4805" x="-1.19209e-07" y="-2.5">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.833333" />
                <feGaussianBlur stdDeviation="0.416667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_1_1862" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_1_1862" mode="normal" result="effect2_dropShadow_1_1862" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_1862" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                <feBlend in2="effect3_innerShadow_1_1862" mode="normal" result="effect4_innerShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_1_1862" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect4_innerShadow_1_1862" mode="normal" result="effect5_innerShadow_1_1862" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1862" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
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
    <div className="col-[1/span_2] content-stretch flex gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="logo wrap">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo">
        <LogoWrap2 />
      </div>
      <div className="font-['Geist:regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[14px] w-[237px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">{`Record once. `}</p>
        <p className="leading-[1.5]">Send personalized videos at scale.</p>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="gap-x-[12px] gap-y-[459px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full z-[3]" data-name="main content">
      <FooterLinks />
      <LogoWrap1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[0_0_-0.49%_0]" data-name="Mask group">
      <div className="absolute inset-[0.27%_0.04%_-0.15%_0.01%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-0.078px_-0.572px] mask-size-[1239px_210.785px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.39 209.505">
          <path d={svgPaths.p23833f00} fill="url(#paint0_linear_1_1721)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1721" x1="596.797" x2="596.797" y1="214.325" y2="-4.68455">
              <stop offset="0.134615" stopColor="#131316" />
              <stop offset="1" stopColor="#A0A0AB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PromoflixGradient() {
  return (
    <div className="absolute bottom-0 h-[209.756px] left-px overflow-clip right-0 z-[1]" data-name="Promoflix gradient">
      <MaskGroup />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-col h-auto min-h-[445px] isolate items-center justify-between max-w-[1240px] overflow-clip pb-[12px] relative rounded-[32px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full mx-[20px] md:mx-[32px]" data-name="container">
      <MainContent />
      <p className="font-['Geist:regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#a0a0ab] text-[14px] whitespace-nowrap z-[2]">© 2026 Promoflix. All rights reserved.</p>
      <PromoflixGradient />
    </div>
  );
}

function Footer4() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-col items-center overflow-clip pt-[80px] relative shrink-0 w-full" data-name="Footer">
      <Container10 />
    </div>
  );
}

function Logo2() {
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
            <g filter="url(#filter0_ddiii_1_1862)" id="Ellipse 1">
              <mask fill="white" id="path-1-inside-1_1_1862">
                <path d={svgPaths.p35349600} />
              </mask>
              <path d={svgPaths.p35349600} fill="var(--fill-0, #2952E8)" />
              <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_1_1862)" stroke="url(#paint0_linear_1_1862)" strokeWidth="3.33333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_1_1862" width="44.4805" x="-1.19209e-07" y="-2.5">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="0.833333" />
                <feGaussianBlur stdDeviation="0.416667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_1_1862" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_1_1862" mode="normal" result="effect2_dropShadow_1_1862" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_1862" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="shape" mode="normal" result="effect3_innerShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.5" />
                <feGaussianBlur stdDeviation="1.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                <feBlend in2="effect3_innerShadow_1_1862" mode="normal" result="effect4_innerShadow_1_1862" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_1_1862" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect4_innerShadow_1_1862" mode="normal" result="effect5_innerShadow_1_1862" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1862" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
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

function LogoWrap3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[40px]" data-name="Logo wrap">
      <Logo2 />
    </div>
  );
}

function TextPadding9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Login</p>
    </div>
  );
}

function TextPadding10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Try for free →</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <a className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button" href="https://app.promoflix.ai/auth/login">
        <div aria-hidden="true" className="absolute bg-white inset-0 pointer-events-none rounded-[8px]" />
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <TextPadding9 />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      </a>
      <a className="relative rounded-[8px] shrink-0" data-name="Button" href="#pricing">
        <div aria-hidden="true" className="absolute bg-[#2952e8] inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[8px] relative rounded-[inherit] size-full">
          <TextPadding10 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </a>
    </div>
  );
}

function NavWrap1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav wrap">
      <a className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button" href="/#how-it-works">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">How it works</p>
      </a>
      <a className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button" href="#pricing">
        <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Pricing</p>
      </a>
      <details className="group relative shrink-0">
        <summary className="list-none cursor-pointer font-['Geist:medium',sans-serif] leading-[24px] text-[#2952e8] text-[16px] whitespace-nowrap">
          <span className="inline-flex items-center gap-[6px]">Industries<span className="text-[12px]">▾</span></span>
        </summary>
        <div className="absolute left-0 top-[34px] min-w-[160px] rounded-[10px] border border-[#e4e4e7] bg-white p-[8px] shadow-[0px_8px_24px_rgba(16,24,40,0.12)]">
          <a className="block rounded-[6px] px-[10px] py-[8px] text-[15px] text-[#3f3f46] hover:bg-[#f4f4f5]" href="/industries">
            Sample
          </a>
        </div>
      </details>
      <Actions1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-x-hidden relative w-full" data-name="1441">
      <HeroSection />
      <ClientLogos />
      <Testimonials />
      <Testimonials1 />
      <Frame41 />
      <Frame6 />
      <Testimonials2 />
      <Pricing />
      <Animation />
      <Footer4 />
      <div className="fixed inset-x-0 top-[16px] z-50 pointer-events-none">
        <div className="mx-auto backdrop-blur-[3px] bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between max-w-[1240px] p-[12px] pointer-events-auto rounded-[8px] w-[calc(100vw-32px)]" data-name="Navbar">
          <div aria-hidden="true" className="absolute border border-[#f4f4f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <a className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo" href="/">
            <LogoWrap3 />
            <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[25px] text-black whitespace-nowrap">Promoflix</p>
          </a>
          <NavWrap1 />
        </div>
      </div>
    </div>
  );
}
