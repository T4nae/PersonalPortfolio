"use client";

import Link from "next/link";
import Image from "next/image";
import useDarkMode from "@/lib/darkmode";
import { useEffect, useState } from "react";
import useScreen from "@/lib/screen";
import { index } from "../../../../public/content/caseStudy";

export default function Nav({ children }: { children: React.ReactNode }) {
    const { DarkMode, setDarkMode } = useDarkMode();
    const [OpenSidebar, setOpenSidebar] = useState<boolean | undefined>(
        undefined
    );
    return (
        <>
            <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                <div className="max-w-8xl mx-auto">
                    <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                        <div className="relative flex items-center">
                            <Link className="mr-3 flex" href="/case-study">
                                <Image
                                    className="w-10"
                                    src="/favicon.ico"
                                    alt="logo"
                                    width={0}
                                    height={0}
                                />
                            </Link>
                            <div className="ml-1 text-xl leading-5 font-semibold py-1 px-3 flex items-center space-x-2  dark:highlight-white/5">
                                <Link className="mr-3 flex" href="/case-study">
                                    Tanyam Baweja
                                </Link>
                                <Link
                                    className="mr-3 border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"
                                    href="/"
                                >
                                    Portfolio
                                </Link>
                            </div>
                            <div className="relative hidden lg:flex items-center ml-auto">
                                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setDarkMode(!DarkMode);
                                        }}
                                    >
                                        <span className="dark:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    className="fill-slate-400 dark:fill-slate-500"
                                                    d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="hidden dark:inline">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.5em"
                                                viewBox="0 0 384 512"
                                            >
                                                <path
                                                    className="fill-slate-400 dark:fill-slate-500"
                                                    d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                    <a
                                        href="https://github.com/T4nae"
                                        className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                                    >
                                        <svg
                                            viewBox="0 0 16 16"
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="ml-auto -my-1 lg:hidden">
                                <button
                                    type="button"
                                    className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                                    onClick={() => {
                                        setOpenSidebar(
                                            OpenSidebar === undefined
                                                ? true
                                                : true
                                        );
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                <div
                    className={`${
                        OpenSidebar === undefined
                            ? "hidden"
                            : OpenSidebar
                            ? "block"
                            : "hidden"
                    } lg:block fixed z-20 inset-0 top-[4.7rem] left-0 right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto bg-[#FBFBFB] dark:bg-slate-900 transition-colors duration-500 border-r dark:border-slate-50/[0.06]`}
                >
                    <button
                        className="lg:hidden block absolute right-2 top-2 cursor-pointer"
                        onClick={() => {
                            setOpenSidebar(false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.5em"
                            viewBox="0 0 384 512"
                        >
                            <path
                                className="fill-slate-400 dark:fill-slate-500"
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            />
                        </svg>
                    </button>
                    <div className="lg:text-sm lg:leading-6 relative mt-4">
                        {index().map((el, index) => {
                            return (
                                <section key={index}>
                                    <Link href={`/case-study/${el}`}>
                                        <p className="text-slate-400 dark:text-slate-600 font-semibold text-lg uppercase tracking-wider mb-2">
                                            {el}
                                        </p>
                                    </Link>
                                    <hr className="border-slate-200 dark:border-slate-800 mb-2" />
                                    <hr className="border-slate-200 dark:border-slate-800 mb-6" />
                                </section>
                            );
                        })}
                    </div>
                </div>
                <div className="lg:pl-[19.5rem] mt-20">{children}</div>
            </div>
        </>
    );
}
