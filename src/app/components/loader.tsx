import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Loader() {
    const { progress } = useProgress();
    const progressPercent = parseInt(progress.toFixed(10)) / 100;

    return (
        <div className="w-screen overflow-hidden">
            <h1 className="text-center text-4xl font-bold mt-[25%]">
                Loading...
            </h1>
            <motion.section className="relative w-[80%] h-4 rounded-xl bg-gray-200 mt-5 mx-auto">
                <motion.section
                    className="w-full h-full rounded-xl bg-black"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{
                        scaleX: progressPercent,
                        originX: 0,
                    }}
                />
            </motion.section>
        </div>
    );
}
