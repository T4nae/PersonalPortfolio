"use client";
import { mode } from "../../types";
import Clouds from "./clouds";
import Mode from "./mode";

export default function Nav({ DarkMode, setDarkMode }: mode) {
    return (
        <nav>
            <Mode DarkMode={DarkMode} setDarkMode={setDarkMode} />
            <Clouds />
        </nav>
    );
}
