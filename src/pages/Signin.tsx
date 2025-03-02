import { useState } from "react"

interface LoginInfo {
    email: string
    password: string
}

export default function Signin() {
    const [info, setInfo] = useState<LoginInfo>({ email: "", password: "" })

    const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({
        ...info,
        [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(info)
    }

    return (
        <div className="h-screen bg-slate-200 flex justify-center items-center">
            <form className="bg-slate-50 p-4 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-3">
                    <label>Email</label>
                    <input
                        className="bg-slate-200 px-3 py-1 mb-3 rounded focus:ring-2 focus:ring-purple-700"
                        type="email"
                        name="email"
                        value={info.email}
                        onChange={handleTyping}
                        required
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label>Password</label>
                    <input
                        className="bg-slate-200 px-3 py-1 mb-3 rounded focus:ring-2 focus:ring-purple-700"
                        type="password"
                        name="password"
                        value={info.password}
                        onChange={handleTyping}
                        required
                    />
                </div>
                <div className="w-full h-8 gap-4 flex justify-between">
                    <button className="bg-purple-700 w-full text-white rounded" type="submit">
                        Login
                    </button>
                    <button
                        className="bg-slate-200 w-full rounded"
                        type="button"
                        onClick={() => setInfo({ email: "", password: "" })}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}
