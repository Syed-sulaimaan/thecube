import Image from "next/image";
import DraggableCube from "./Cube";

export default function Home() {

  return (
    
    <div className="flex flex-col items-center gap-8 align-middle justify-center min-h-screen px-4 sm:px-8 font-[family-name:var(--font-geist-sans)] text-white bg-black text-center">
      <Image
        className="z-10"
        src="/Logo.png"
        alt="The Cube Studio"
        width={300}
        height={300}
        priority
      />
      <div className="relative z-30 px-3 py-3 rounded-full text-sm sm:text-base font-medium glowing-border">
          <span className="spantxt opacity-75 text-sm">Website under construction. Greatness takes time.</span>
      </div>
      
      <div className="relative flex flex-col items-center justify-center gap-2 text-gray-400">
        <span className="text-3xl font-thin tracking-tight">
          Where creativity meets clarity.
        </span>
        <span className="text-xl sm:text-2xl font-bold text-gray-300">
          Design. Strategy. Impact.
        </span>
        <div className="flex items-center gap-1 text-gray-400">
            <span>Contact:</span>
            <span className="text-sm sm:text-base">info@thecubestudio.in</span>
        </div>
      </div>


      <div className="mt-4">
        <DraggableCube />
        <DraggableCube />
        <DraggableCube />
        <DraggableCube />
      </div>
    </div>
  );
}
