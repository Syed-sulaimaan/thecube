"use client";

export default function ContactSection() {
  return (
    <div className="flex items-center gap-1 text-gray-400">
        <span>Contact:</span>
        <span onClick={() => window.open('mailto:thaminayasmin@thecubestudios.in', '_blank')} className="text-sm sm:text-base cursor-pointer">thaminayasmin@thecubestudios.in</span>
    </div>
  );
} 