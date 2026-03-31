export function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
      <video
        aria-label="Promoflix hero video"
        autoPlay
        className="absolute inset-0 h-full w-full object-contain object-center bg-white"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute bg-white bottom-0 left-0 top-0 w-[8px]" />
      <div aria-hidden="true" className="absolute bg-white bottom-0 right-0 top-0 w-[8px]" />
    </div>
  );
}
