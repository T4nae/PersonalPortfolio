import { scrollOffset, Section } from "../../types";
import home from "../../../public/content/home";
import { motion } from "framer-motion";
import Image from "next/image";
import useScreen from "@/lib/screen";
import { HeroMotion, levelMotion, percentage } from "@/motion/config";
export default function Overview({ Section, scrollY }: Section & scrollOffset) {
    const { isTab, isMobile } = useScreen();
    const languages = home.overview.languages;
    const softwares = home.overview.Softwares;
    return (
        <motion.div
            className="w-[50%] mr-[5%] mt-[10%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
        >
            <motion.div
                className="sm:ml-0  -ml-[80%]"
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-row justify-center">
                    {home.overview.title.map((word, key) => (
                        <motion.section
                            className="flex gap-1 justify-center select-none heroText"
                            key={key}
                            variants={HeroMotion}
                            whileHover={["float", "bounce"]}
                            whileTap="disappear"
                        >
                            {word}
                        </motion.section>
                    ))}
                </div>
                <h2>{home.overview.description}</h2>
            </motion.div>
            <motion.div
                className="md:mr-[51%] mt-6"
                initial={{ x: isTab ? 150 : isMobile ? 50 : 150, scaleY: 0 }}
                whileInView={{ x: 0, scaleY: 1, originY: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="text-center font-bold">Languages</h2>
                <ul className="bg-sky-100 p-2 rounded-xl">
                    {languages.map((language, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.4 + i * 0.1 }}
                        >
                            <section className="flex h-6 w-full">
                                <Image
                                    style={{ width: "auto", height: "auto", padding: "0.15rem"}}
                                    alt={language.title}
                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${language.icon}.svg`}
                                    width={0}
                                    height={0}
                                />
                                <h3>&nbsp;{language.title}</h3>
                            </section>
                            <motion.section
                                className="relative w-full h-2 rounded-lg bg-gray-200"
                                initial="rest"
                                whileHover="onHover"
                            >
                                <motion.h4
                                    variants={percentage}
                                    className="absolute font-bold text-[70%] -top-[4.5px] right-1 dark:text-black"
                                >
                                    {language.level}%
                                </motion.h4>
                                <motion.section
                                    className={`w-full h-full rounded-lg`}
                                    style={{
                                        width: `${language.level}%`,
                                        backgroundColor: `${language.color}`,
                                    }}
                                    variants={levelMotion}
                                    initial="rest"
                                    whileHover="onHover"
                                    whileInView="InView"
                                    whileTap="onTap"
                                />
                            </motion.section>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
            <motion.div
                className="md:ml-[51%] mt-2 "
                animate={{ y: isTab ? 0 : isMobile ? 0 : -150 }}
                initial={{
                    x: isTab ? 150 : isMobile ? 50 : 150,
                    scaleY: 0,
                }}
                whileInView={{ x: 0, scaleY: 1, originY: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
            >
                <h2 className="text-center font-bold">Softwares</h2>
                <ul className="bg-sky-100 p-2 rounded-xl">
                    {softwares.map((software, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.4 + i * 0.1 }}
                        >
                            <section className="flex h-5 w-full">
                                <Image
                                    style={{ width: "auto", height: "auto", padding: "0.15rem"}}
                                    alt={software.title}
                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${software.icon}.svg`}
                                    width={0}
                                    height={0}
                                />
                                <h3>&nbsp;{software.title}</h3>
                            </section>
                            <motion.section
                                className="relative w-full h-2 rounded-lg bg-gray-200"
                                initial="rest"
                                whileHover="onHover"
                            >
                                <motion.h4
                                    variants={percentage}
                                    className="absolute font-bold text-[70%] -top-[4.5px] right-1 dark:text-black"
                                >
                                    {software.level}%
                                </motion.h4>
                                <motion.section
                                    className={`w-full h-full rounded-lg`}
                                    style={{
                                        width: `${software.level}%`,
                                        backgroundColor: `${software.color}`,
                                    }}
                                    variants={levelMotion}
                                    initial="rest"
                                    whileHover="onHover"
                                    whileInView="InView"
                                    whileTap="onTap"
                                />
                            </motion.section>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}
