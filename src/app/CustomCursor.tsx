"use client";
import React, { useEffect, useRef } from "react";

const NUM_TRAILS = 8;

const CustomCursorTrail = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef(
    Array(NUM_TRAILS + 1)
      .fill(0)
      .map(() => ({ x: 0, y: 0 }))
  );
  const animFrame = useRef<number>(0);

  // Initialize mouse and positions on client
  useEffect(() => {
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    mouse.current = { x: startX, y: startY };
    positions.current = Array(NUM_TRAILS + 1)
      .fill(0)
      .map(() => ({ x: startX, y: startY }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;

      positions.current[0].x += (mouse.current.x - positions.current[0].x) * 0.25 * dt;
      positions.current[0].y += (mouse.current.y - positions.current[0].y) * 0.25 * dt;

      for (let i = 1; i < positions.current.length; i++) {
        positions.current[i].x += (positions.current[i - 1].x - positions.current[i].x) * 0.35 * dt;
        positions.current[i].y += (positions.current[i - 1].y - positions.current[i].y) * 0.35 * dt;
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positions.current[0].x}px, ${positions.current[0].y}px, 0)`;
      }

      trailRefs.current.forEach((trail, i) => {
        if (trail) {
          trail.style.transform = `translate3d(${positions.current[i + 1].x}px, ${positions.current[i + 1].y}px, 0)`;
          trail.style.opacity = `${1 - i / (NUM_TRAILS + 1)}`;
        }
      });

      animFrame.current = requestAnimationFrame(animate);
    };

    animFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
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
          transform: "translate3d(-50%, -50%, 0)",
          transition: "background 0.2s",
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
              transform: "translate3d(-50%, -50%, 0)",
              transition: "background 0.2s",
            }}
          />
        ))}
    </>
  );
};

export default CustomCursorTrail;
