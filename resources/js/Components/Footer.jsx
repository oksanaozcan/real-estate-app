import { Link } from "@inertiajs/react"

export default function Footer() {
    return (
        <footer className="py-16 text-sm text-center text-black dark:text-white/70">
            Laravel footer
            <Link href="/privacy-policy" className="underline"> çerez politikamıza </Link>
            <a href="/data-tools">data tools page</a>
        </footer>
    )
}
