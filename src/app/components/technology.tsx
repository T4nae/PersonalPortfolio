import { Tech } from "../../types";
import { MotionValue } from "framer-motion";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import {
    MeshBasicMaterial,
    ExtrudeGeometry,
    Mesh,
    Group,
    Material,
} from "three";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Text3D } from "@react-three/drei";
import { A11y, useA11y } from "@react-three/a11y";

export default function Technology({
    tech,
    scaleTech,
}: {
    scaleTech: MotionValue;
} & Tech) {
    const { scene } = useLoader(GLTFLoader, "/models/small_island/bar.glb");
    const bar = useMemo(() => scene.clone(), [scene]);
    const loader = new SVGLoader();
    const svg = new Group();

    loader.load(
        `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tech.icon}.svg`,
        function (data) {
            const paths = data.paths;

            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];

                const material = new MeshBasicMaterial({
                    color: tech.color,
                    depthWrite: false,
                });

                const shapes = SVGLoader.createShapes(path);

                for (let j = 0; j < shapes.length; j++) {
                    const shape = shapes[j];
                    const geometry = new ExtrudeGeometry(shape, {
                        steps: 20,
                        depth: 4,
                        bevelEnabled: false,
                    }).translate(0, -4, 0);
                    const mesh = new Mesh(geometry, material);
                    svg.add(mesh);
                }
            }
        }
    );
    const bottomBar = bar.children[0] as Mesh;
    const topBar = bar.children[1] as Mesh;

    bottomBar.material = new MeshBasicMaterial({
        color: "#ffffff",
    });

    topBar.material = new MeshBasicMaterial({
        color: tech.color,
    });

    return (
        <>
            <primitive
                object={svg}
                scale={[0.1, 0.1, 0.1]}
                rotation={[Math.PI / 2 + 0.2, 0, 0]}
                position={[-2.15, 1.8, 0]}
            />
            <motion.mesh
                position={[-6, 1.91, 3.8]}
                geometry={topBar.geometry}
                material={topBar.material}
                scale={[3.5, scaleTech, 2]}
                rotation={[Math.PI / 2 + 0.2, 0, Math.PI / 2]}
            />
            <mesh
                position={[-6, 1.8, 3.74]}
                scale={[3.5, 5, 2]}
                geometry={bottomBar.geometry}
                material={bottomBar.material}
                rotation={[Math.PI / 2 + 0.2, 0, Math.PI / 2]}
            />
            <Text3D
                rotation={[-1, 0, 0]}
                position={[-6, 1.5, 3.15]}
                scale={[1, 1, 2]}
                size={0.6}
                font={"./fonts/Roboto_Regular.json"}
            >
                {tech.title}
            </Text3D>
            <Percent level={tech.level} />
        </>
    );
}

const Percent = ({ level }: { level: number }) => {
    const a11y = useA11y();
    return (
        <Text3D
            rotation={[-1, 0, 0]}
            position={[2.8, a11y.hover ? 1.5 : 0, 3.15]}
            scale={[1, 1, 2]}
            size={0.4}
            font={"./fonts/Roboto_Regular.json"}
        >
            {level}%
        </Text3D>
    );
};
