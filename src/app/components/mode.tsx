import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { ModeMotion } from "@/motion/config";
import { mode } from "../../types";

export default function Mode({ DarkMode, setDarkMode }: mode) {
    const [animateTo, setAnimateTo] = useState("rest");

    const switchMode = () => {
        if (animateTo == "reset") {
            setDarkMode(!DarkMode);
            setAnimateTo("rest");
        }
    };

    const transition = () => {
        setAnimateTo("reset");
    };

    return (
        <Tilt
            tiltEnable={true}
            transitionEasing="cubic-bezier(.03,.98,.52,.99)"
            scale={1}
            perspective={1000}
            className={`md:w-36 sm:w-28 w-20 bg-no-repeat bg-center bg-cover ${
                DarkMode ? "bg-stars" : "bg-cloud z-2"
            }`}
        >
            <motion.button
                initial="start"
                animate={animateTo}
                variants={ModeMotion}
                type="button"
                onClick={transition}
                onAnimationComplete={switchMode}
            >
                {DarkMode ? (
                    <Image
                        className="w-2/3 sm:pt-2 hover:brightness-110 hover:scale-105 parallax"
                        id="moon"
                        src="/assets/moon.svg"
                        height={0}
                        width={0}
                        alt="moon"
                        priority={true}
                    />
                ) : (
                    <Image
                        className="w-full sm:pt-1 hover:brightness-110 hover:scale-105 parallax"
                        id="sun"
                        src="/assets/sun.svg"
                        height={0}
                        width={0}
                        alt="sun"
                        priority={true}
                    />
                )}
            </motion.button>
        </Tilt>
    );
}
