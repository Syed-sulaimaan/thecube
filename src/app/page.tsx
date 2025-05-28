import Image from "next/image";
import DraggableCube from "./Cube";

// import "./styles.css"; // we'll create this file for styles

export default function Home() {

  return (
    <div className="flex-col items-center align-middle justify-items-center min-h-screen px-4 sm:px-8 font-[family-name:var(--font-geist-sans)] text-white bg-black text-center">
      <Image
        className="mt-24 z-10"
        src="/Logo.png"
        alt="The Cube Studio"
        width={300}
        height={300}
        priority
      />
      <div className="relative z-30 px-3 py-1 rounded-full text-sm sm:text-base font-medium glowing-border">
          <span className="opacity-75 text-sm">Website under construction. Greatness takes time.</span>
      </div>
      
      <main className="mt-12 flex flex-col items-center gap-4 max-w-xl">
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
          Where creativity meets clarity.
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-300">
          Design. Strategy. Impact.
        </h2>
      </main>
      <div className="mt-12 flex items-center gap-1 text-gray-400">
        <span>Contact:</span>
        <span className="text-sm sm:text-base">info@thecubestudio.in</span>
      </div>
      <DraggableCube />
      <DraggableCube />
      <DraggableCube />
      <DraggableCube />
    </div>
  );
}
