import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from "./navbar-logo-paths";
import imgNavbar from "figma:asset/c2b10a66c9a06b0bf91cd7f627bcbb337569e1e6.png";

interface NavbarProps {
  onLoginClick?: () => void;
  onStartFreeClick?: () => void;
}

export default function Navbar({ onLoginClick, onStartFreeClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setMobileMenuOpen(false);
    onLoginClick?.();
  };

  const handleStartFreeClick = () => {
    setMobileMenuOpen(false);
    onStartFreeClick?.();
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] w-full" data-name="Navbar">
        <div aria-hidden="true" className="absolute border border-[#f4f4f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        
        {/* Logo */}
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 z-10" data-name="logo">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-[40px]" data-name="Logo wrap">
            <div className="relative shrink-0 size-[40px]" data-name="Logo">
              <div className="absolute left-0 size-[39.481px] top-0" data-name="Original logo">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[201.08%] left-[-395.7%] max-w-none top-[-55.91%] w-[732.26%]" src={imgNavbar} />
                </div>
              </div>
              <div className="absolute left-[0.52px] size-[39.481px] top-0">
                <div className="absolute inset-[0_-6.33%_-12.66%_-6.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.4805 44.4805">
                    <g filter="url(#filter0_ddiii_94_192)" id="Ellipse 1">
                      <mask fill="white" id="path-1-inside-1_94_192">
                        <path d={svgPaths.p35349600} />
                      </mask>
                      <path d={svgPaths.p35349600} fill="var(--fill-0, #3D70F2)" />
                      <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_94_192)" stroke="url(#paint0_linear_94_192)" strokeWidth="3.33333" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_94_192" width="44.4805" x="-1.19209e-07" y="-2.5">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="0.833333" />
                        <feGaussianBlur stdDeviation="0.416667" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_94_192" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_94_192" />
                        <feOffset dy="2.5" />
                        <feGaussianBlur stdDeviation="1.66667" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                        <feBlend in2="effect1_dropShadow_94_192" mode="normal" result="effect2_dropShadow_94_192" />
                        <feBlend in="SourceGraphic" in2="effect2_dropShadow_94_192" mode="normal" result="shape" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="-2.5" />
                        <feGaussianBlur stdDeviation="1.25" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend in2="shape" mode="normal" result="effect3_innerShadow_94_192" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="2.5" />
                        <feGaussianBlur stdDeviation="1.25" />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                        <feBlend in2="effect3_innerShadow_94_192" mode="normal" result="effect4_innerShadow_94_192" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_94_192" />
                        <feOffset />
                        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend in2="effect4_innerShadow_94_192" mode="normal" result="effect5_innerShadow_94_192" />
                      </filter>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_94_192" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
                        <stop stopColor="white" stopOpacity="0.12" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[25px] text-black whitespace-nowrap">Promoflix</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex content-stretch gap-[32px] items-center relative shrink-0" data-name="Nav wrap">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
            data-name="Button"
          >
            <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">How it works</p>
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="content-stretch flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" 
            data-name="Button"
          >
            <p className="font-['Geist:medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Pricing</p>
          </button>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
            <button 
              onClick={handleLoginClick}
              className="bg-white content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
              <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
                <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3f3f46] text-[16px] whitespace-nowrap">Login</p>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            </button>
            <button 
              onClick={handleStartFreeClick}
              className="bg-[#2952e8] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#1e3fb8] transition-colors" 
              data-name="Button"
            >
              <div className="content-stretch flex items-center justify-center overflow-clip pl-[18px] pr-[16px] py-[8px] relative rounded-[inherit]">
                <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
                  <p className="font-['Geist:semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] whitespace-nowrap">Start free →</p>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
              <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 relative z-10 cursor-pointer hover:bg-black/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-4">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-[10px] items-center">
              <div className="relative shrink-0 size-[40px]">
                <div className="absolute left-0 size-[39.481px] top-0">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[201.08%] left-[-395.7%] max-w-none top-[-55.91%] w-[732.26%]" src={imgNavbar} />
                  </div>
                </div>
                <div className="absolute left-[0.52px] size-[39.481px] top-0">
                  <div className="absolute inset-[0_-6.33%_-12.66%_-6.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.4805 44.4805">
                      <g filter="url(#filter0_ddiii_mobile)" id="Ellipse 1">
                        <mask fill="white" id="path-1-inside-1_mobile">
                          <path d={svgPaths.p35349600} />
                        </mask>
                        <path d={svgPaths.p35349600} fill="var(--fill-0, #3D70F2)" />
                        <path d={svgPaths.p35349600} mask="url(#path-1-inside-1_mobile)" stroke="url(#paint0_linear_mobile)" strokeWidth="3.33333" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.9805" id="filter0_ddiii_mobile" width="44.4805" x="-1.19209e-07" y="-2.5">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.833333" />
                          <feGaussianBlur stdDeviation="0.416667" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_mobile" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect2_dropShadow_mobile" />
                          <feOffset dy="2.5" />
                          <feGaussianBlur stdDeviation="1.66667" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                          <feBlend in2="effect1_dropShadow_mobile" mode="normal" result="effect2_dropShadow_mobile" />
                          <feBlend in="SourceGraphic" in2="effect2_dropShadow_mobile" mode="normal" result="shape" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="-2.5" />
                          <feGaussianBlur stdDeviation="1.25" />
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                          <feBlend in2="shape" mode="normal" result="effect3_innerShadow_mobile" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="2.5" />
                          <feGaussianBlur stdDeviation="1.25" />
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                          <feBlend in2="effect3_innerShadow_mobile" mode="normal" result="effect4_innerShadow_mobile" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feMorphology in="SourceAlpha" operator="erode" radius="0.833333" result="effect5_innerShadow_mobile" />
                          <feOffset />
                          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                          <feBlend in2="effect4_innerShadow_mobile" mode="normal" result="effect5_innerShadow_mobile" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_mobile" x1="22.2403" x2="22.2403" y1="1.19209e-07" y2="39.4805">
                          <stop stopColor="white" stopOpacity="0.12" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[30px] text-[25px] text-black">Promoflix</p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="bg-[#f4f4f5] text-left px-4 py-3 rounded-lg font-['Geist:medium',sans-serif] text-[16px] text-[#18181b] hover:bg-[#e4e4e7] transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-[#f4f4f5] text-left px-4 py-3 rounded-lg font-['Geist:medium',sans-serif] text-[16px] text-[#18181b] hover:bg-[#e4e4e7] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={handleStartFreeClick}
              className="bg-[#2952e8] px-4 py-3 rounded-lg font-['Geist:semibold',sans-serif] text-[16px] text-white hover:bg-[#1e3fb8] transition-colors flex items-center justify-center gap-2"
            >
              Try for free →
            </button>
            <button
              onClick={handleLoginClick}
              className="bg-white border-2 border-[#e4e4e7] px-4 py-3 rounded-lg font-['Geist:semibold',sans-serif] text-[16px] text-[#52525b] hover:bg-[#fafafa] transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}
