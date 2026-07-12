"use client";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050809]">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e9dbd18_0%,transparent_45%),linear-gradient(to_bottom,#071013_0%,#050809_35%,#030405_100%)]" />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-[-260px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#1e9dbd]/15 blur-[160px]" />

      {/* Left Glow */}
      <div className="absolute -left-32 top-24 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute -right-24 bottom-16 h-[320px] w-[320px] rounded-full bg-teal-400/10 blur-[120px]" />

      {/* Perspective Dots */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#8eefff 1px,transparent 1.3px)",
          backgroundSize: "22px 22px",
          clipPath: "polygon(15% 100%,85% 100%,60% 0%,40% 0%)",
          transform: "perspective(900px) rotateX(72deg) scale(2.2)",
          transformOrigin: "bottom",
        }}
      />

      {/* Fade over dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#050809_0%,transparent_35%,transparent_70%,#050809_100%)]" />

      {/* Top vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_20%,rgba(0,0,0,.15)_60%,rgba(0,0,0,.65)_100%)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050809] to-transparent" />
    </div>
  );
};

export default HeroBackground;