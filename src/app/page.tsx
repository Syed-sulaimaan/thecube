import Image from "next/image";
import DraggableCube from "./Cube";
import ContactSection from "./components/ContactSection";

export default function Home() {

  return (
    
    <div className="flex flex-col items-center gap-8 align-middle justify-center min-h-screen px-4 sm:px-8 font-[family-name:var(--font-geist-sans)] text-white bg-black text-center">
      <Image
        className="z-10"
        src="/Logo.png"
        alt="The Cube Studio"
        width={250}
        height={250}
        priority
      />
      <div className="relative z-30 px-3 py-3 rounded-full text-sm sm:text-base font-medium glowing-border">
          <span className="spantxt opacity-75 text-xs sm:text-sm">Website under construction. Greatness takes time.</span>
      </div>
      
      <div className="relative flex flex-col items-center justify-center gap-4 text-gray-400">
        <span className="text-2xl sm:text-3xl font-light tracking-tightest">
        Where Brands Are Built to Last.<br/>
        <i>Not Just Designed.</i>
        </span>
        <span className="text-xl sm:text-2xl font-bold text-gray-300">
          Design. Strategy. Impact.
        </span>
        <ContactSection />
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
