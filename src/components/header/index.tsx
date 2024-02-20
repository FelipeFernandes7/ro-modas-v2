"use client";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "./desktop";
import { HeaderMobile } from "./mobile";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
}
