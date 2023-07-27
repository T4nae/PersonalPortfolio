import Nav from "./components/nav";

export const metadata = {
    title: "Tanyam Project's Case Study",
    description: "Case Study's of projects by Tanyam",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-screen h-full bg-[#FBFBFB] dark:bg-slate-900 transition-colors duration-500 overflow-x-hidden">
            <Nav>{children}</Nav>
        </main>
    );
}
