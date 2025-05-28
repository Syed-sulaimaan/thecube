"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Cube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cubeRef.current) return;

    const cube = cubeRef.current;
    const windowHeight = window.innerHeight;

    const draggableInstance = Draggable.create(cube, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: window,
      inertia: true, // Enables inertia plugin effect
      throwProps: true, // enables throw/throwing inertia
      onDrag: function () {
        // Rotate the cube based on drag velocityX (or velocityY) 
        gsap.to(cube, {
          duration: 0.1,
          overwrite: "auto",
        });
      },
      onDragEnd: function () {
        // Animate cube falling to bottom
        gsap.to(cube, {
          y: windowHeight - cube.getBoundingClientRect().height - 20,
          rotation: 0, // Reset rotation on drop
          duration: 1,
          ease: "bounce.out",
        });
      },
    })[0];

    // Start cube at bottom
    gsap.set(cube, {
      y: windowHeight - cube.getBoundingClientRect().height - 20,
    });

    return () => {
      draggableInstance.kill();
    };
  }, []);

  return (
    <div
      ref={cubeRef}
      style={{
        width: 45,
        height: 45,
        backgroundColor: "purple",
        position: "fixed",
        top: 0,
        left: 20,
        cursor: "grab",
        borderRadius: 8,
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        userSelect: "none",
        zIndex: 1000,
      }}
    ></div>
  );
}
