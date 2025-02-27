import { Link } from "react-router-dom"

export default function Landpage() {
    return(
        <div className="h-screen bg-slate-100 flex justify-center items-center gap-6">
            <Link className="w-28 h-12 ring-2 ring-purple-700 font-semibold text-purple-700 flex justify-center items-center rounded" to='signin'>
            Sign In</Link>
            <Link className="w-28 h-12 ring-2 ring-purple-700 bg-purple-700 font-semibold text-white flex justify-center items-center rounded" to='signup'>
            Sign Up</Link>
        </div>
    )
}