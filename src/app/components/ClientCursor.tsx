"use client";
import dynamic from "next/dynamic";

// Dynamically import CustomCursor with SSR disabled
const CustomCursor = dynamic(() => import("../CustomCursor"), {
  ssr: false,
  loading: () => null,
});

export default function ClientCursor() {
  return <CustomCursor />;
}