import footerSvgPaths from "../designs/svg-8f2va8j35u";
import { imgVector as footerMaskImage } from "../designs/svg-3pr3x";

type FooterPromoflixGradientProps = {
  className?: string;
};

export function FooterPromoflixGradient({
  className = "absolute bottom-0 left-px right-0 aspect-[1238.39/209.505] overflow-clip z-[1]",
}: FooterPromoflixGradientProps) {
  return (
    <div className={className} data-name="Promoflix gradient">
      <div
        className="absolute inset-[0.27%_0.04%_-0.15%_0.01%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-0.078px_-0.572px] mask-size-[1239px_210.784px]"
        data-name="Vector"
        style={{ maskImage: `url('${footerMaskImage}')` }}
      >
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1238.39 209.505">
          <path d={footerSvgPaths.p23833f00} fill="url(#footer-promoflix-gradient)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="footer-promoflix-gradient" x1="596.797" x2="596.797" y1="214.325" y2="-4.68455">
              <stop offset="0.134615" stopColor="#131316" />
              <stop offset="1" stopColor="#A0A0AB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
