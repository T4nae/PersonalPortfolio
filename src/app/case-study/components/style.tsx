import Image from "next/image";
import Link from "next/link";

export const Title1 = ({ children }: { children: string }) => {
    return (
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase my-4 text-slate-900 tracking-tight dark:text-slate-200">
            {children}
        </h1>
    );
};

export const Title2 = ({ children }: { children: string }) => {
    return (
        <h2 className="text-slate-900 text-2xl sm:text-3xl tracking-tight my-2 font-bold mb-2 dark:text-slate-200">
            {children}
        </h2>
    );
};

export const Text = ({ children }: { children: string }) => {
    return (
        <p className="text-lg mb-3 text-slate-700 dark:text-slate-400">
            {children}
        </p>
    );
};

export const Img = ({
    src,
    alt,
    centered = true,
    size = 100,
}: {
    src: string;
    alt: string;
    centered?: boolean;
    size?: number;
}) => {
    return (
        <div className={`flex my-4 ${centered ? "justify-center" : ""}`}>
            <div className={`h-full`} style={{ width: size + "%" }}>
                <Image
                    className={`h-full w-full rounded-3xl`}
                    src={src}
                    alt={alt}
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    );
};

export const BadgesContainer = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return <div className="space-x-2">{children}</div>;
};

export const Badge = ({
    text,
    icon,
    color = "#000000",
    textColor = "#ffffff",
    link,
}: {
    text: string;
    icon: string;
    color?: string;
    textColor?: string;
    link?: string;
}) => {
    return (
        <Link href={link || ""}>
            <section
                style={{ backgroundColor: color, color: textColor }}
                className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium border dark:border-slate-50/[0.06] cursor-pointer`}
            >
                <Image
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${icon}.svg`}
                    alt={text}
                    className="h-6 w-6"
                    width={0}
                    height={0}
                />
                <span className="ml-2">{text}</span>
            </section>
        </Link>
    );
};
