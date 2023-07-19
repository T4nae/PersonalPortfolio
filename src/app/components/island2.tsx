"use client";

import useScreen from "@/lib/screen";
import { scrollOffset, Section } from "../../types";
import { A11y, useA11y } from "@react-three/a11y";
import { Text3D, useScroll, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Suspense } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Link3D from "../../lib/Link3D";
import { Island2Pos } from "@/motion/config";

function Scene({ Section, scrollY }: Section & scrollOffset) {
    /* This 3d Model is based on "Low poly floating island"
    (https://sketchfab.com/3d-models/low-poly-floating-island-c5ab040730c24832895acfa0000af9cc)
    by JavierG (https://sketchfab.com/JavierG) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/) */
    const island = useLoader(
        GLTFLoader,
        "/models/floating_island2/scene.glb"
    ).scene;
    const formScreen = useLoader(
        GLTFLoader,
        "/models/floating_island2/screen.glb"
    ).scene.children[0] as Mesh;
    const [roughnessMap, normalMap, map, displacementMap, aoMap] = useTexture([
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/materials/stylized-crystal/Stylized_Crystal_001_roughness.jpg",
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/materials/stylized-crystal/Stylized_Crystal_001_normal.jpg",
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/materials/stylized-crystal/Stylized_Crystal_001_basecolor.jpg",
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/materials/stylized-crystal/Stylized_Crystal_001_height.png",
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/materials/stylized-crystal/Stylized_Crystal_001_ambientOcclusion.jpg",
    ]);
    const { isMobile, isTab } = useScreen();
    const { posY, posZ, rot } = Island2Pos(scrollY, Section);

    const el = useScroll().el;
    return (
        <motion.group
            key="island2"
            position={[0, posY, posZ]}
            rotation={[rot, 0, 0]}
            scale={isMobile ? 0.6 : isTab ? 0.6 : 0.8}
        >
            <primitive object={island} rotation={[Math.PI / -2, 0, 0]}>
                <mesh
                    geometry={formScreen.geometry}
                    position={[0, 10.1, 2.3]}
                    rotation={[0, 0, 0]}
                    scale={[2.5, 2.8, 0.2]}
                >
                    <meshPhysicalMaterial
                        aoMap={aoMap}
                        map={map}
                        displacementMap={displacementMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        displacementScale={0}
                    />
                </mesh>

                <Link3D
                    string="CONTACT ME"
                    description="email"
                    scale={[-1, 1, 1]}
                    size={0.4}
                    rotation={[-0.7, 0, 0]}
                    position={[-1.75, 12, 3]}
                    BoundHeight={0.5}
                    BoundWidth={3.5}
                    actionCall={() => {
                        window.open("mailto:tan.b63000@gmail.com");
                    }}
                />

                <Link3D
                    string="LINKEDIN"
                    description="Linkedin"
                    scale={[-1, 1, 1]}
                    size={0.4}
                    rotation={[-0.7, 0, 0]}
                    position={[-1.25, 11, 3]}
                    BoundHeight={0.5}
                    BoundWidth={2.4}
                    actionCall={() => {
                        window.open(
                            "https://www.linkedin.com/in/tanyam-baweja/"
                        );
                    }}
                />
                <A11y
                    role="button"
                    description="Home Nav"
                    dragThreshold={10}
                    actionCall={() => {
                        el.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <Arrow />
                </A11y>
            </primitive>
        </motion.group>
    );
}

export default function FloatingIsland2({
    Section,
    scrollY,
}: Section & scrollOffset) {
    return (
        <Suspense fallback={null}>
            <Scene Section={Section} scrollY={scrollY} />
        </Suspense>
    );
}

const Arrow = () => {
    const arrow = useLoader(
        GLTFLoader,
        "/models/floating_island2/arrow.glb"
    ).scene;
    const a11y = useA11y();
    return (
        <>
            <primitive
                object={arrow}
                scale={0.5}
                rotation={[0, Math.PI / 2, 0]}
                position={[1.6, 8, 5.8]}
            />
            <Text3D
                scale={1}
                size={0.5}
                position={[-0.95, 8, 5.7]}
                rotation={[Math.PI / -2 + 0.5, 0, 0]}
                font="./fonts/Roboto_Regular.json"
            >
                <meshBasicMaterial color={a11y.hover ? "#94a3b8" : "white"} />
                Home
            </Text3D>
        </>
    );
};
