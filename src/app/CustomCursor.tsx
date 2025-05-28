"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NUM_TRAILS = 8;

const CustomCursorTrail = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  // Initialize trail refs
  useEffect(() => {
    trailRefs.current = trailRefs.current.slice(0, NUM_TRAILS);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trails = trailRefs.current;
    const positions = Array(NUM_TRAILS).fill({ x: 0, y: 0 });

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    trails.forEach((trail) => gsap.set(trail, { xPercent: -50, yPercent: -50 }));

    const moveCursor = (e: MouseEvent) => {
      positions.unshift({ x: e.clientX, y: e.clientY });
      positions.pop();

      // Move main cursor
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });

      // Move trails
      trails.forEach((trail, i) => {
        gsap.to(trail, {
          x: positions[i].x,
          y: positions[i].y,
          duration: 0.2 + i * 0.05,
          ease: "power2.out",
          opacity: 1 - i / NUM_TRAILS,
        });
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "white",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      {Array(NUM_TRAILS)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el!;
            }}
            className="cursor-trail"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "white",
              opacity: 0.5,
              pointerEvents: "none",
              zIndex: 9998,
              filter: "blur(2px)",
            }}
          />
        ))}
    </>
  );
};

export default CustomCursorTrail;
