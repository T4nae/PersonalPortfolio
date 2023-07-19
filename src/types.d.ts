import { MotionValue } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type mode = {
    DarkMode: boolean | undefined;
    setDarkMode: Dispatch<SetStateAction<boolean | undefined>>;
};

type Section = {
    Section: {
        name: string;
        start: number;
        end: number;
    };
};
type Sections = {
    Sections: {
        name: string;
        start: number;
        end: number;
    }[];
};

type scrollOffset = {
    scrollY: MotionValue;
};

type Tech = {
    tech: {
        title: string;
        icon: string;
        color: string;
        level: number;
    };
};
