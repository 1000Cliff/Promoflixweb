export function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
      <video
        aria-label="Promoflix hero video"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover object-center bg-white"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
