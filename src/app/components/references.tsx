import { Section } from "../../types";
import home from "../../../public/content/home";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function References({
    Section,
    Pages,
}: Section & { Pages: number }) {
    const References = home.References;

    return (
        <div
            className="w-screen"
            style={{
                marginTop: `${Pages * 100 * Section.start - 250}vh`,
            }}
        >
            <div className="lg:ml-[3%] md:ml-[1%]">
                {References.Projects.map((item, index) =>
                    item.title !== "" ? (
                        <div
                            className="flex flex-col md:w-2/5 w-3/5 mb-[2%]"
                            key={index}
                        >
                            <Tilt tiltAxis="y" tiltAngleYInitial={-10}>
                                <div className="bg-sky-100 rounded-xl p-[1%]">
                                    <h2 className="text-center mb-2">
                                        CaseStudy: {item.title}
                                    </h2>
                                    <h3 className="text-center">
                                        {item.description}
                                    </h3>
                                    <div className="relative hover:cursor-pointer">
                                        <Link
                                            href={`/case-study/${item.title}`}
                                        >
                                            <Image
                                                className="w-full rounded-xl"
                                                src={item.image}
                                                alt={item.title}
                                                height={500}
                                                width={500}
                                            />
                                            {item.preview !== "" ? (
                                                <video
                                                    className="w-full h-full absolute top-0 object-cover rounded-xl opacity-0 hover:opacity-100 transition duration-500 ease-in-out"
                                                    autoPlay={true}
                                                    loop
                                                    controls={false}
                                                    muted
                                                >
                                                    <source
                                                        src={item.preview}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            ) : null}
                                        </Link>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    ) : null
                )}
            </div>

            <div
                className="w-screen md:ml-[55%]"
                style={{
                    marginTop: `${
                        (50 * (Pages * (Section.end - Section.start) + 1)) / 2
                    }vh`,
                }}
            >
                {References.Testimonials.map((item, index) =>
                    item.name !== "" ? (
                        <div className="md:w-2/5 w-3/5 " key={index}>
                            <Tilt
                                tiltAxis="y"
                                tiltAngleYInitial={10}
                                key={index}
                            >
                                <div className="border-2 bg-offwhite border-slate-900/20 dark:bg-slate-900 dark:border-offwhite/20 p-[1%] rounded-xl">
                                    <section className="flex flex-row w-full">
                                        <Image
                                            className="w-[5%] h-full"
                                            src={item.icon}
                                            alt={item.company}
                                            height={20}
                                            width={20}
                                        />

                                        <h2 className="ml-2">
                                            {item.name} : {item.company}
                                        </h2>
                                    </section>
                                    <section className="m-[1%]">
                                        <Image
                                            className="w-[5%] h-full"
                                            src="/assets/Quotes.svg"
                                            alt="Quote"
                                            height={0}
                                            width={0}
                                        />
                                        <h3 className="text-center text-black dark:text-white">
                                            {item.review}
                                        </h3>
                                        <Image
                                            className="w-[5%] h-full ml-[95%] rotate-180"
                                            src="/assets/Quotes.svg"
                                            alt="Quote"
                                            height={0}
                                            width={0}
                                        />
                                    </section>

                                    <section className="flex justify-center border-t-2 border-slate-900/20 dark:border-offwhite/20">
                                        {item.rating.map((rating, index) => (
                                            <svg
                                                key={index}
                                                className="h-[5%] w-[5%] fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <defs>
                                                    <linearGradient
                                                        id={`gradient-${index}`}
                                                        x1="0%"
                                                        y1="0%"
                                                        x2="100%"
                                                        y2="0%"
                                                    >
                                                        <stop
                                                            offset={`${
                                                                rating * 100
                                                            }%`}
                                                            stopColor="yellow"
                                                        />
                                                        <stop
                                                            offset={`${
                                                                rating * 100
                                                            }%`}
                                                            stopColor="gray"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    d="M12 14.472l4.306 2.618-.82-4.766 3.486-3.392-4.82-.7L12 5.028 9.828 8.132l-4.82.7 3.486 3.392-.82 4.766L12 14.472z"
                                                    fill={`url(#gradient-${index})`}
                                                    stroke="black"
                                                    strokeWidth="0.1"
                                                />
                                            </svg>
                                        ))}
                                        <p className="absolute opacity-20 ml-[50%] md:text-[90%] text-[55%] ">
                                            Testimonial
                                        </p>
                                    </section>
                                </div>
                            </Tilt>
                        </div>
                    ) : null
                )}
            </div>
            <div
                className="lg:ml-[3%] md:ml-[1%]"
                style={{
                    marginTop: `${
                        (50 * (Pages * (Section.end - Section.start) + 1)) / 2
                    }vh`,
                }}
            >
                {References.WorkExperience.map((item, index) =>
                    item.jobTitle !== "" ? (
                        <div
                            className="flex flex-col md:w-2/5 w-3/5"
                            key={index}
                        >
                            <Tilt tiltAxis="y" tiltAngleYInitial={-10}>
                                <div className="bg-sky-100 rounded-xl p-[1%]">
                                    <h2 className="text-center">
                                        Job Title : {item.jobTitle}
                                    </h2>
                                    <h2 className="text-center mb-2">
                                        Duration : {item.duration}
                                    </h2>
                                    <h3 className="text-center">
                                        {item.description}
                                    </h3>
                                </div>
                            </Tilt>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}
