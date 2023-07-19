import { A11y, useA11y } from "@react-three/a11y";
import { Text3D } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";

function Text({
    string,
    position,
    rotation,
    scale = [1, 1, 1],
    size = 1.2,
    BoundHeight = 1,
    BoundWidth = 1,
    BoundVisible = false,
}: {
    string: string;
    position?: [
        number | MotionValue<number>,
        number | MotionValue<number>,
        number | MotionValue<number>
    ];
    scale?: [
        number | MotionValue<number>,
        number | MotionValue<number>,
        number | MotionValue<number>
    ];
    rotation?: [
        number | MotionValue<number>,
        number | MotionValue<number>,
        number | MotionValue<number>
    ];
    size?: number;
    BoundHeight?: number;
    BoundWidth?: number;
    BoundVisible?: boolean;
}) {
    const a11y = useA11y();

    return (
        <motion.group rotation={rotation} position={position} scale={scale}>
            <group scale={[BoundWidth, BoundHeight, 1]}>
                <mesh position={[-0.5, 0.5, 0]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial
                        transparent
                        color="green"
                        opacity={BoundVisible ? 0.5 : 0}
                        side={2}
                    />
                </mesh>
            </group>
            <Text3D
                scale={[-1, 1, 2]}
                size={size}
                font="./fonts/Roboto_Regular.json"
            >
                <meshBasicMaterial color={a11y.hover ? "#94a3b8" : "white"} />
                {string}
            </Text3D>
        </motion.group>
    );
}
export default function Link3D({
    string,
    position,
    rotation,
    scale = [1, 1, 1],
    size = 1.2,
    BoundHeight = 1,
    BoundWidth = 1,
    BoundVisible = false,
    description = "Link",
    actionCall,
}: {
    string: string;
    position?: [
        number | MotionValue<number>,
        number | MotionValue<number>,
        number | MotionValue<number>
    ];
    scale?: [
        number | MotionValue<number>,
        number | MotionValue<number>,
        number | MotionValue<number>
    ];
    rotation?: [
        number | MotionValue<number>,
        number | MotionValue<number>,
        number | MotionValue<number>
    ];
    size?: number;
    BoundHeight?: number;
    BoundWidth?: number;
    BoundVisible?: boolean;
    description?: string;
    actionCall: () => void;
}) {
    return (
        <A11y
            role="button"
            description={description}
            dragThreshold={10}
            actionCall={actionCall}
        >
            <Text
                string={string}
                position={position}
                rotation={rotation}
                scale={scale}
                size={size}
                BoundHeight={BoundHeight}
                BoundWidth={BoundWidth}
                BoundVisible={BoundVisible}
            />
        </A11y>
    );
}
