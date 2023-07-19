"use client";

import { useEffect, useState } from "react";

const useScreen = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 400px)"); // MOBILE
        const mediaQuery2 = window.matchMedia(
            "(max-width: 768px) and (min-width: 401px)"
        ); // TABLET
        const mediaQuery3 = window.matchMedia("(min-width: 769px)"); // DESKTOP

        setIsMobile(mediaQuery.matches);
        setIsTab(mediaQuery2.matches);
        setIsDesktop(mediaQuery3.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };
        const handleMediaQuery2Change = (event: MediaQueryListEvent) => {
            setIsTab(event.matches);
        };
        const handleMediaQuery3Change = (event: MediaQueryListEvent) => {
            setIsDesktop(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange, {
            passive: true,
        });
        mediaQuery2.addEventListener("change", handleMediaQuery2Change, {
            passive: true,
        });
        mediaQuery3.addEventListener("change", handleMediaQuery3Change, {
            passive: true,
        });
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
            mediaQuery2.removeEventListener("change", handleMediaQuery2Change);
            mediaQuery3.removeEventListener("change", handleMediaQuery3Change);
        };
    }, []);

    return {isMobile, isTab, isDesktop};
};

export default useScreen;
