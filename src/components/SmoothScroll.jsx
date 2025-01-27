"use client"; // Вказуємо, що це клієнтський компонент

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

const SmoothScroll = () => {
  const pathname = usePathname();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
