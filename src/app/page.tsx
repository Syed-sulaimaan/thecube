import Image from "next/image";
import DraggableCube from "./Cube";

export default function Home() {

  return (
    
    <div className="flex flex-col items-center align-middle justify-items-center min-h-screen px-4 sm:px-8 font-[family-name:var(--font-geist-sans)] text-white bg-black text-center">
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
      
      <div className="relative top-6 flex flex-col gap-2 mt-6 mb-4 text-gray-400">
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
          Where creativity meets clarity.
        </h1>
        <h2 className="relative text-7xl sm:text-7xl text-gray-300">
          Design. Strategy. Impact.
        </h2>
        <div className="flex items-center gap-1 text-gray-400">
            <span>Contact:</span>
            <span className="text-sm sm:text-base">info@thecubestudio.in</span>
        </div>
      </div>


      <DraggableCube />
      <DraggableCube />
      <DraggableCube />
      <DraggableCube />
    </div>
  );
}
