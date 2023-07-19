"use client";

import home from "../../../public/content/home";
import useScreen from "@/lib/screen";
import { scrollOffset, Section, Tech } from "../../types";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useMemo } from "react";
import Technology from "./technology";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { createPositions, createPosition } from "@/lib/positions";
import { SmallIslandPos } from "@/motion/config";

const Island = ({
    position,
    rotation,
    scrollY,
    index,
    tech,
    Section,
}: {
    position: number[][];
    rotation: number[];
    index: number;
} & scrollOffset &
    Tech &
    Section) => {
    const { scene } = useLoader(GLTFLoader, "/models/small_island/scene.glb");
    const copiedScene = useMemo(() => scene.clone(), [scene]);

    position.push([-100, position[0][1], position[0][2]]);
    const Positions = createPositions(index, position, [
        Section.start,
        Section.end,
    ]);

    const { Scale, posX, posY, posZ, scaleTech } = SmallIslandPos(
        scrollY,
        Positions,
        tech
    );

    return tech.title !== "" ? (
        <Float floatIntensity={2} rotationIntensity={0.1}>
            <motion.group
                scale={Scale}
                rotation={[rotation[0], rotation[1], rotation[2]]}
                position={[posX, posY, posZ]}
            >
                <primitive object={copiedScene} />
                <Technology tech={tech} scaleTech={scaleTech} />
            </motion.group>
        </Float>
    ) : null;
};

export default function SmallIslands({
    scrollY,
    Section,
}: Section & scrollOffset) {
    const { isTab, isMobile } = useScreen();

    const radius = isTab ? 30 : isMobile ? 20 : 45;
    const center = {
        x: isTab ? -10 : isMobile ? -5 : -15,
        y: isTab ? 3 : isMobile ? 5 : 0,
        z: 0,
    };
    const numPoints = home.Technologies.length;

    return (
        <>
            {home.Technologies.map((tech, i) => (
                <Island
                    Section={Section}
                    key={i}
                    index={i}
                    position={createPosition(radius, center, numPoints)}
                    rotation={[0.3, 0, 0]}
                    scrollY={scrollY}
                    tech={tech}
                />
            ))}
        </>
    );
}
