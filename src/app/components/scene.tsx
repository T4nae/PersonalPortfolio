import { OrthographicCamera, useScroll } from "@react-three/drei";
import FloatingIsland1 from "./island1";
import FloatingIsland2 from "./island2";
import { useFrame } from "@react-three/fiber";
import { mode, scrollOffset, Sections } from "../../types";
import SmallIslands from "./small_island";
import { motion } from "framer-motion-3d";
import { Camera } from "@/motion/config";

export default function Scene({
    DarkMode,
    scrollY,
    Sections,
    Pages,
}: {
    Pages: number;
} & mode &
    Sections &
    scrollOffset) {
    const data = useScroll();
    const { cameraPosY, cameraScale, cameraLookAtY, cameraLookAtZ } =
        Camera(scrollY, Sections);

    useFrame((state: any) => {
        scrollY.set(data.scroll.current);
        // console.log(data.scroll.current);
        state.camera.lookAt(0, cameraLookAtY.get(), cameraLookAtZ.get());
    });

    return (
        <>
            {/* <OrbitControls/> */}
            <motion.group position={[0, cameraPosY, 0]} scale={cameraScale}>
                <OrthographicCamera
                    makeDefault
                    position={[0, 10, 80]}
                    rotation={[0, 0, 0]}
                    zoom={20}
                />
            </motion.group>
            <hemisphereLight
                intensity={DarkMode ? 1 : 1.5}
                color={"#7DE5ED"}
                groundColor={"#FFC26F"}
            />

            <FloatingIsland1
                Pages={Pages}
                Sections={Sections}
                scrollY={scrollY}
            />

            <SmallIslands Section={Sections[2]} scrollY={scrollY} />

            <FloatingIsland2 Section={Sections[4]} scrollY={scrollY} />
        </>
    );
}
