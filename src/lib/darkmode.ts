"use client";

import { mode } from "../types";
import { useState, useEffect } from "react";

export default function useDarkMode(): mode {
    const [DarkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (DarkMode) {
            localStorage.setItem("DarkMode", "true");
            window.document.documentElement.classList.add("dark");
        } else if (DarkMode === false) {
            localStorage.setItem("DarkMode", "false");
            window.document.documentElement.classList.remove("dark");
        } else {
            setDarkMode(localStorage.getItem("DarkMode") === "true");
        }
    }, [DarkMode, setDarkMode]);
    return {DarkMode, setDarkMode};
}
