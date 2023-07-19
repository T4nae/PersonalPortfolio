"use client";

import useScreen from "@/lib/screen";
import { useSpring, useTransform, cubicBezier } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Suspense } from "react";
import { scrollOffset, Sections } from "../../types";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import Link3D from "../../lib/Link3D";
import { useScroll } from "@react-three/drei";
import { Island1Pos, TreePos } from "@/motion/config";

function Scene({
    scrollY,
    Sections,
    Pages,
}: scrollOffset & Sections & { Pages: number }) {
    const island = useLoader(
        GLTFLoader,
        "/models/floating_island1/scene.glb"
    ).scene;
    const tree = useLoader(
        GLTFLoader,
        "/models/floating_island1/tree.glb"
    ).scene;
    const { isMobile, isTab } = useScreen();

    const { posY, positionX, positionZ, rotation } = Island1Pos(
        scrollY,
        Sections
    );
    const { treePositionX, treePositionY, treePositionZ, treeRotation } =
        TreePos(scrollY, Sections);
    const scrollContainer = useScroll().el;
    const scrollHeight = (start: number) => {
        const totalVh = Pages * scrollContainer.clientHeight;
        const height = totalVh * start;
        return height;
    };

    const textRot = useTransform(
        scrollY,
        [0, Sections[2].start],
        [0, Math.PI / 2]
    );
    return (
        <motion.group
            scale={isMobile ? 0.7 : isTab ? 0.8 : 1}
            initial={{ y: -5 }}
            rotation={[0.35, rotation, 0]}
            position={[positionX, posY, positionZ]}
            transition={{
                duration: 1,
                type: "spring",
                stiffness: 500,
                damping: 50,
            }}
        >
            <primitive object={island} />
            <motion.primitive
                object={tree}
                position={[treePositionX, treePositionY, treePositionZ]}
                rotation={[treeRotation, 0, 0]}
            />

            <Link3D
                string="HOME"
                description="Home nav"
                rotation={[0, Math.PI / -3, 0]}
                position={[7, 4.5, 3]}
                BoundHeight={1.5}
                BoundWidth={5}
                actionCall={() => {
                    scrollContainer.scrollTo({
                        top: scrollHeight(Sections[0].start),
                        left: 0,
                        behavior: "smooth",
                    });
                }}
            />

            <Link3D
                string="OVERVIEW"
                description="Overview nav"
                rotation={[0, Math.PI / 4, 0]}
                position={[-6, 4.5, -8.5]}
                BoundHeight={1.5}
                BoundWidth={8.5}
                actionCall={() => {
                    scrollContainer.scrollTo({
                        top: scrollHeight(Sections[1].start),
                        left: 0,
                        behavior: "smooth",
                    });
                }}
            />

            <Link3D
                string="SKILLS"
                description="technologies nav"
                rotation={[0, Math.PI / -4, 0]}
                position={[10.5, 4.5, -5.5]}
                BoundHeight={1.5}
                BoundWidth={5.3}
                actionCall={() => {
                    scrollContainer.scrollTo({
                        top: scrollHeight(Sections[2].start),
                        left: 0,
                        behavior: "smooth",
                    });
                }}
            />

            <group scale={0.9}>
                <Link3D
                    string="SHOWCASE"
                    description="SHOWCASE nav"
                    rotation={[textRot, 0, 0]}
                    position={[11.5, 1.5, -19.5]}
                    BoundHeight={1.5}
                    BoundWidth={8.8}
                    actionCall={() => {
                        scrollContainer.scrollTo({
                            top: scrollHeight(Sections[3].start),
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                />
            </group>

            <group scale={0.9}>
                <Link3D
                    string="CONTACT"
                    description="Contact nav"
                    rotation={[0, Math.PI / 4, 0]}
                    position={[-6, -1, -19]}
                    BoundHeight={1.5}
                    BoundWidth={7.6}
                    actionCall={() => {
                        scrollContainer.scrollTo({
                            top: scrollHeight(Sections[4].end),
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                />
            </group>
        </motion.group>
    );
}

export default function FloatingIsland1({
    scrollY,
    Sections,
    Pages,
}: Sections & scrollOffset & { Pages: number }) {
    return (
        <Suspense fallback={null}>
            <Scene Pages={Pages} Sections={Sections} scrollY={scrollY} />
        </Suspense>
    );
}
