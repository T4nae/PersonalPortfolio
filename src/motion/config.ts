import useScreen from "@/lib/screen";
import {
    MotionValue,
    cubicBezier,
    useSpring,
    useTransform,
} from "framer-motion";

export const CloudMotion = {
    float: {
        y: [0, 3, 0],
        x: [0, -3, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
        },
    },
};

export const ModeMotion = {
    start: {
        x: 100,
        y: -100,
        rotate: 90,
    },
    rest: {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 2,
        },
    },
    reset: {
        x: [-130, -130, 100, 100],
        y: [100, -150, -150, -150],
        rotate: [-90, 0, 90, 90],
        opacity: [1, 0, 0, 1],
    },
};

export const HeroMotion = {
    raise: {
        y: -10,
        transition: {
            type: "spring",
            duration: 2,
        },
    },
    float: {
        y: -20,
        scale: 1.2,
        transition: {
            yoyo: Infinity,
            duration: 0.5,
        },
    },
    bounce: {
        y: [-30, -20, -30],
        transition: {
            repeat: Infinity,
            duration: 1,
            delay: 2,
        },
    },
    disappear: {
        opacity: 0,
        scale: 2,
        transition: {
            type: "spring",
        },
    },
};

export const percentage = {
    rest: {
        opacity: 0,
    },
    onHover: {
        opacity: 1,
    },
};

export const levelMotion = {
    rest: { scaleX: 0, originX: 0 },
    InView: {
        scaleX: 1,
        originX: 0,
        transition: {
            duration: 2,
            type: "spring",
        },
    },
    onHover: {
        borderWidth: 1,
        transition: {
            duration: 0.1,
        },
    },
    onTap: {
        scaleY: 1.2,
        transition: {
            duration: 0.2,
            type: "spring",
        },
    },
};

export const Camera = (
    scrollY: MotionValue<number>,
    Sections: {
        name: string;
        start: number;
        end: number;
    }[]
) => {
    const { isMobile, isTab } = useScreen();
    return {
        cameraPosY: useTransform(
            scrollY,
            [0, Sections[2].start, Sections[4].start, Sections[4].end],
            [
                0,
                isTab ? 40 : isMobile ? 50 : 20,
                isTab ? 40 : isMobile ? 50 : 20,
                isTab ? 10 : isMobile ? 10 : 10,
            ],
            {
                ease: cubicBezier(0.5, 0, 0.75, 0),
            }
        ),
        cameraLookAtY: useTransform(
            scrollY,
            [
                0,
                Sections[2].start,
                Sections[2].end - 0.1,
                Sections[2].end + 0.2,
            ],
            [
                11.5,
                isTab ? -20 : isMobile ? -10 : -28,
                isTab ? -20 : isMobile ? -10 : -28,
                isTab ? -58 : isMobile ? -58 : -58,
            ],
            {
                ease: cubicBezier(0.5, 0, 0.75, 0),
            }
        ),
        cameraLookAtZ: useTransform(
            scrollY,
            [0, Sections[4].end - 0.02, Sections[4].end],
            [0, 0, 25],
            {
                ease: cubicBezier(0.5, 0, 0.75, 0),
            }
        ),
        cameraScale: useTransform(
            scrollY,
            [
                0,
                Sections[2].start,
                Sections[2].end,
                Sections[2].end + 0.2,
                Sections[3].end,
            ],
            [1, 0.9, 0.9, 0.6, 0.5],
            {
                ease: cubicBezier(0.61, 1, 0.88, 1),
            }
        ),
    };
};

export const SmallIslandPos = (
    scrollY: MotionValue<number>,
    Positions: {
        x: {
            pos: number[];
            inp: number[];
        };
        y: {
            pos: number[];
            inp: number[];
        };
        z: {
            pos: number[];
            inp: number[];
        };
    },
    tech: {
        title: string;
        icon: string;
        color: string;
        level: number;
    }
) => {
    const { isMobile, isTab } = useScreen();
    return {
        posX: useTransform(scrollY, Positions.x.inp, Positions.x.pos, {
            ease: cubicBezier(0.5, 1, 0.89, 1),
        }),
        posY: useTransform(scrollY, Positions.y.inp, Positions.y.pos, {
            ease: cubicBezier(0.5, 1, 0.89, 1),
        }),
        posZ: useTransform(scrollY, Positions.z.inp, Positions.z.pos, {
            ease: cubicBezier(0.5, 1, 0.89, 1),
        }),
        Scale: useTransform(
            scrollY,
            [
                0,
                Positions.x.inp[Positions.x.inp.length - 3],
                Positions.x.inp[Positions.x.inp.length - 2],
            ],
            [
                isMobile ? 0.4 : isTab ? 0.6 : 0.8,
                isMobile ? 0.4 : isTab ? 0.6 : 0.8,
                isMobile ? 1 : isTab ? 1.2 : 1.4,
            ],
            {
                ease: cubicBezier(0.16, 1, 0.3, 1),
            }
        ),
        scaleTech: useSpring(
            useTransform(
                scrollY,
                [
                    Positions.x.inp[Positions.x.inp.length - 3] - 0.01,
                    Positions.x.inp[Positions.x.inp.length - 3],
                ],
                [0, (tech.level / 100) * 5]
            ),
            {
                damping: 100,
                stiffness: 1000,
                restDelta: 0.01,
            }
        ),
    };
};

export const Island1Pos = (
    scrollY: MotionValue<number>,
    Sections: {
        name: string;
        start: number;
        end: number;
    }[]
) => {
    const { isMobile, isTab } = useScreen();
    return {
        posY: useTransform(
            scrollY,
            [Sections[0].start, Sections[0].end],
            [isTab ? 0 : isMobile ? 5 : 0, isTab ? 0 : isMobile ? 5 : 0]
        ),
        positionX: useTransform(
            scrollY,
            [
                Sections[0].start,
                Sections[0].start + 0.1,
                Sections[2].end - 0.1,
                Sections[3].start,
            ],
            isTab
                ? [0, -13, -13, 3]
                : isMobile
                ? [0, -7, -7, 1.8]
                : [0, -20, -20, -3],
            {
                ease: cubicBezier(0.32, 0, 0.67, 0),
            }
        ),

        positionZ: useTransform(
            scrollY,
            [
                Sections[2].end,
                Sections[3].start,
                Sections[3].end,
                Sections[4].start,
            ],
            [
                0,
                isTab ? -25 : isMobile ? -20 : -10,
                isTab ? -25 : isMobile ? -20 : -10,
                isTab ? -25 : isMobile ? -20 : -10,
            ],
            {
                ease: cubicBezier(0.32, 0, 0.67, 0),
            }
        ),
        rotation: useTransform(
            scrollY,
            [
                Sections[0].start,
                Sections[0].start + 0.1,
                Sections[2].end - 0.1,
                Sections[2].end + 0.2,
            ],
            [2.6, 4, 4, 3.1],
            {
                ease: cubicBezier(0.16, 1, 0.3, 1),
            }
        ),
    };
};

export const TreePos = (
    scrollY: MotionValue<number>,
    Sections: {
        name: string;
        start: number;
        end: number;
    }[]
) => {
    const { isMobile, isTab } = useScreen();
    return {
        treeRotation: useTransform(
            scrollY,
            [
                Sections[2].end - 0.1,
                Sections[2].end + 0.2,
                Sections[4].end - 0.03,
                Sections[4].end,
            ],
            [0, Math.PI / -2, Math.PI / -2, 0]
        ),
        treePositionX: useTransform(
            scrollY,
            [Sections[2].end, Sections[4].start - 0.1, Sections[4].end],
            isTab ? [-7, -7, -6] : isMobile ? [-7, -7, -8] : [-7, -7, -11.8],
            {
                ease: cubicBezier(0.32, 0, 0.67, 0),
            }
        ),
        treePositionZ: useTransform(
            scrollY,
            [
                Sections[2].end,
                Sections[3].start,
                Sections[3].end - 0.05,
                Sections[4].start,
                Sections[4].end,
            ],
            isTab
                ? [-15, -28, -50, -50, -70.5]
                : isMobile
                ? [-15, -48, -63, -63, -75.2]
                : [-15, -28, -40, -40, -41.8],
            {
                ease: cubicBezier(0.32, 0, 0.67, 0),
            }
        ),
        treePositionY: useTransform(
            scrollY,
            [0, Sections[2].end + 0.2, Sections[3].end],
            isTab ? [-2, -2, 32] : isMobile ? [-2, -2, 30] : [-2, -2, 20],
            {
                ease: cubicBezier(0.32, 0, 0.67, 0),
            }
        ),
    };
};

export const Island2Pos = (
    scrollY: MotionValue<number>,
    Section: {
        name: string;
        start: number;
        end: number;
    }
) => {
    const { isMobile, isTab } = useScreen();
    return {
        posY: useTransform(
            scrollY,
            [
                0,
                Section.start,
                Section.start,
                Section.start + 0.05,
                Section.end,
            ],
            [52, 52, 0, 0, isMobile ? 4 : isTab ? 2 : 0]
        ),
        posZ: useTransform(
            scrollY,
            [0, Section.start, Section.start, Section.end],
            [0, 0, 60, 40]
        ),
        rot: useTransform(scrollY, [Section.start, Section.end], [0.6, 1]),
    };
};
