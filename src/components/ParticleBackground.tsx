import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "floating-particle";
      
      // Random positioning
      particle.style.left = Math.random() * 100 + "%";
      particle.style.bottom = "-10px";
      
      // Random colors from our theme
      const colors = [
        "hsl(270 100% 70% / 0.6)",
        "hsl(320 100% 65% / 0.6)", 
        "hsl(195 100% 60% / 0.6)"
      ];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
      
      // Random animation duration
      particle.style.animationDuration = (6 + Math.random() * 4) + "s";
      particle.style.animationDelay = Math.random() * 2 + "s";
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 12000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 800);
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="particle-bg" />;
};

export default ParticleBackground;