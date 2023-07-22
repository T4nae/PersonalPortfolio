"use client";

import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import Scene from "./components/scene";
import Hero from "./components/hero";
import Nav from "./components/nav";
import useDarkMode from "@/lib/darkmode";
import Overview from "./components/overview";
import { useMotionValue } from "framer-motion";
import { A11yAnnouncer } from "@react-three/a11y";
import home from "../../public/content/home";
import Loader from "./components/loader";
import References from "./components/references";
import { Analytics } from "@vercel/analytics/react";

export default function HomePage() {
    const { DarkMode, setDarkMode } = useDarkMode();

    const Pages =
        4 +
        Math.ceil(home.Technologies.length * 0.9) +
        Math.ceil(
            (home.References.Projects.length +
                home.References.Testimonials.length +
                home.References.WorkExperience.length) *
                0.9
        );
    const scrollYProgress = useMotionValue(0);
    const Sections = useMemo(
        () => [
            {
                name: "Island1",
                start: 0,
                end: 0.9,
            },
            {
                name: "overview",
                start: 0.06,
                end: 0.2,
            },
            {
                name: "SmallIslands",
                start: 0.2,
                end: 0.5,
            },
            {
                name: "References",
                start: 0.6,
                end: 0.9,
            },
            {
                name: "Island2",
                start: 0.9,
                end: 1,
            },
        ],
        []
    );

    return (
        <>
            <Suspense fallback={<Loader />}>
                <Canvas
                    frameloop="demand"
                    style={{ background: DarkMode ? "#0B2447" : "#7DE5ED" }}
                >
                    <ScrollControls pages={Pages}>
                        <Scene
                            Pages={Pages}
                            Sections={Sections}
                            scrollY={scrollYProgress}
                            DarkMode={DarkMode}
                            setDarkMode={setDarkMode}
                        />
                        <Scroll html>
                            <div className="h-screen">
                                <Nav
                                    DarkMode={DarkMode}
                                    setDarkMode={setDarkMode}
                                />
                                <Hero />
                            </div>
                            <div className="h-screen w-screen flex flex-row justify-end">
                                <Overview
                                    Section={Sections[1]}
                                    scrollY={scrollYProgress}
                                />
                            </div>
                            <References Section={Sections[3]} Pages={Pages} />
                        </Scroll>
                    </ScrollControls>
                </Canvas>
                <A11yAnnouncer />
            </Suspense>
            <Analytics />
        </>
    );
}
