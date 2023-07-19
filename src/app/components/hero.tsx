"use client";

import { motion } from "framer-motion";
import { HeroMotion } from "@/motion/config";
import home from "../../../public/content/home";

export default function Hero() {
    return (
        <div className="relative z-20 w-screen">
            <div className="flex flex-col sm:flex-row justify-center">
                {home.HeroText.map((words, key) => (
                    <motion.section
                        className="flex gap-1 justify-center select-none"
                        key={key}
                        variants={HeroMotion}
                        whileHover="raise"
                    >
                        {words.map((letter, key2) => (
                            <motion.p
                                className="heroText"
                                key={key2}
                                variants={HeroMotion}
                                whileHover={["float", "bounce"]}
                                whileTap="disappear"
                            >
                                {letter}
                            </motion.p>
                        ))}
                        <p>&nbsp;&nbsp;</p>
                    </motion.section>
                ))}
            </div>
        </div>
    );
}
