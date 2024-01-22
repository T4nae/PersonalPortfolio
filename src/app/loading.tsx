import Link from "next/link";

export default function Loading() {
    return (
        <div className="h-screen w-screen dark:bg-sky-300 bg-sky-50 pd-10">
            If you find yourself stuck, consider refreshing the page. If the
            issue persists check your internet connection. or try visiting
            static version of the
            <Link href="/static.html">site</Link>
        </div>
    );
}
