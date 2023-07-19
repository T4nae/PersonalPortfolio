import "./globals.css";
import home from "../../public/content/home";

export const metadata = {
    title: home.title,
    description: home.description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className="w-screen h-screen">{children}</main>
            </body>
        </html>
    );
}
