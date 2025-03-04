import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Layout() {
    return(
        <div className="h-screen bg-slate-50">
            <Header />
            <Outlet />
        </div>
    )
}