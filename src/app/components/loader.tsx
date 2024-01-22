import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Loader() {
    const { progress } = useProgress();
    const progressPercent = parseInt(progress.toFixed(10)) / 100;

    return (
        <div className="w-screen h-screen bg-sky-50 dark:bg-sky-300 overflow-hidden">
            <h1 className="text-center text-4xl font-bold mt-[25%]">
                Launching Interactive Website
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
                <section className="flex font-mono">
                    <p className="text-bold">Tip-</p>
                    <p>
                        &nbsp;Give a try to scrolling, hovering, and clicking on
                        various elements.
                    </p>
                </section>
                <Link className="text-blue-500" href="/static.html">
                    Try static version of site if gotten stuck
                </Link>
            </motion.section>
        </div>
    );
}
