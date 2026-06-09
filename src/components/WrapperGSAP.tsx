"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { type ReactNode, useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin);
}

export default function WrapperGSAP({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
