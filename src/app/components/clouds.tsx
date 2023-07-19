import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CloudMotion } from "@/motion/config";
import Tilt from "react-parallax-tilt";

export default function Clouds() {
    return (
        <motion.div
            variants={CloudMotion}
            animate="float"
            className="relative z-10"
        >
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
            >
                <motion.section
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ opacity: 0, y: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[25%] lg:-mt-[5%] md:-mt-[7%] -mt-[10%]"
                        alt="cloud"
                        src="/assets/clouds/cloud1.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
            >
                <motion.section
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ opacity: 0, y: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[46%] lg:-mt-[10%] md:-mt-[12%] -mt-[14%]"
                        id="cloud2"
                        alt="cloud"
                        src="/assets/clouds/cloud2.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
                tiltReverse={true}
            >
                <motion.section
                    initial={{ opacity: 0, x: 50, y: -50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    whileHover={{ opacity: 0, x: 50, y: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[67%] lg:mt-[6%] md:mt-[4%] mt:mt-[2%]"
                        id="cloud3"
                        alt="cloud"
                        src="/assets/clouds/cloud3.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
                tiltReverse={true}
            >
                <motion.section
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ opacity: 0, y: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud sm:ml-[88%] ml-[85%] lg:-mt-[8%] md:-mt-[10%] -mt-[12%]"
                        id="cloud4"
                        alt="cloud"
                        src="/assets/clouds/cloud4.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
            >
                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ opacity: 0, x: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[8%] lg:mt-[5%] md:mt-[3%] mt-[1%]"
                        id="cloud5"
                        alt="cloud"
                        src="/assets/clouds/cloud5.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
            >
                <motion.section
                    initial={{ opacity: 0, x: -50, y: -50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    whileHover={{ opacity: 0, x: -50, y: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[28%] md:mt-[7%] sm:mt-[5%] mt-[18%]"
                        id="cloud6"
                        alt="cloud"
                        src="/assets/clouds/cloud6.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
            >
                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ opacity: 0, x: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[4%] lg:mt-[18%] md:mt-[16%] mt-[14%]"
                        id="cloud7"
                        alt="cloud"
                        src="/assets/clouds/cloud7.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
                tiltReverse={true}
            >
                <motion.section
                    initial={{ opacity: 0, x: 50, y: -50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    whileHover={{ opacity: 0, x: 50, y: -50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[54%] lg:mt-[14%] md:mt-[12%] sm:mt-[10%] mt-[17%]"
                        id="cloud8"
                        alt="cloud"
                        src="/assets/clouds/cloud8.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
            <Tilt
                perspective={5000}
                trackOnWindow={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={5}
                tiltReverse={true}
            >
                <motion.section
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        className="cloud ml-[80%] lg:mt-[18%] md:mt-[16%] mt-[14%]"
                        id="cloud9"
                        alt="cloud"
                        src="/assets/clouds/cloud9.svg"
                        width={0}
                        height={0}
                    />
                </motion.section>
            </Tilt>
        </motion.div>
    );
}
