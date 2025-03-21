import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-purple-700 h-16 gap-4 flex justify-center items-center">
            <Link className="text-slate-50 font-semibold border-b-2"
            to='product'>Products</Link>
            <Link className="text-slate-50 font-semibold border-b-2"
            to='moderator'>Moderators</Link>
        </header>
    )
}