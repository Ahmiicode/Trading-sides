"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let particles = [];

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const settings = {
      particleCount: 95,

      // Distance between particles for normal lines
      connectionDistance: 165,

      // Cursor influence area
      mouseDistance: 180,

      // Faster floating
      minSpeed: 0.22,
      maxSpeed: 0.55,

      // How strongly cursor pushes particles away
      repelStrength: 1.8,
    };

    const createParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const count = Math.min(
        settings.particleCount,
        Math.max(55, Math.floor(width / 16))
      );

      particles = Array.from({ length: count }, () => {
        const speed =
          settings.minSpeed +
          Math.random() *
            (settings.maxSpeed - settings.minSpeed);

        const angle = Math.random() * Math.PI * 2;

        return {
          x: Math.random() * width,
          y: Math.random() * height,

          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,

          radius: Math.random() * 1.3 + 1,

          opacity: Math.random() * 0.25 + 0.7,
        };
      });
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createParticles();
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const updateParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      particles.forEach((particle) => {
        // Normal continuous movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // =========================
        // CURSOR REPEL EFFECT
        // =========================

        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (
            distance < settings.mouseDistance &&
            distance > 0
          ) {
            const force =
              (settings.mouseDistance - distance) /
              settings.mouseDistance;

            /*
              Notice:
              dx = particle - mouse

              Isliye particle cursor se
              DOOR move karega.
            */

            particle.x +=
              (dx / distance) *
              force *
              settings.repelStrength;

            particle.y +=
              (dy / distance) *
              force *
              settings.repelStrength;
          }
        }

        // Wrap around screen

        if (particle.x < -30) {
          particle.x = width + 30;
        }

        if (particle.x > width + 30) {
          particle.x = -30;
        }

        if (particle.y < -30) {
          particle.y = height + 30;
        }

        if (particle.y > height + 30) {
          particle.y = -30;
        }
      });
    };

    const drawConnections = () => {
      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const first = particles[i];
          const second = particles[j];

          const dx =
            first.x - second.x;

          const dy =
            first.y - second.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (
            distance <
            settings.connectionDistance
          ) {
            const strength =
              1 -
              distance /
                settings.connectionDistance;

            ctx.beginPath();

            ctx.moveTo(
              first.x,
              first.y
            );

            ctx.lineTo(
              second.x,
              second.y
            );

            // BRIGHTER GOLD LINES
            ctx.strokeStyle = `rgba(
              255,
              195,
              55,
              ${strength * 0.28}
            )`;

            ctx.lineWidth = 0.75;

            ctx.stroke();
          }
        }
      }
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        /*
          Outer glow
        */

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius + 2.5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(255, 187, 40, 0.08)";

        ctx.fill();

        /*
          Main bright particle
        */

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(
          255,
          199,
          62,
          ${particle.opacity}
        )`;

        ctx.shadowBlur = 12;

        ctx.shadowColor =
          "rgba(255, 187, 35, 0.9)";

        ctx.fill();

        ctx.shadowBlur = 0;
      });
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      updateParticles();
      drawConnections();
      drawParticles();

      animationFrame =
        requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080a0e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,190,45,0.045),transparent_55%)]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(3,4,6,0.20)_100%)]" />
    </div>
  );
}