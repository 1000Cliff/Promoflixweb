type FooterGradientLineProps = {
  className: string;
};

export function FooterGradientLine({ className }: FooterGradientLineProps) {
  return (
    <div
      aria-hidden="true"
      className={`${className} pointer-events-none`}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#b4b4be] to-transparent opacity-95" />
      <div className="absolute inset-x-[10%] top-[-6px] h-[20px] bg-gradient-to-r from-transparent via-[rgba(180,180,190,0.22)] to-transparent blur-[10px]" />
    </div>
  );
}
