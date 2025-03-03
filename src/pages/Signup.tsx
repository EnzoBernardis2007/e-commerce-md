import { useState } from "react"
import api from "../api/axiosConfig"
import { useMyContext } from "../Context/Provider"

interface SignupInfo {
    name: string,
    email: string,
    password: string
}

export default function Signup() {
    const { addModal } = useMyContext()
    const [info, setInfo] = useState<SignupInfo>({ name: "", email: "", password: ""})
    
    const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({
        ...info,
        [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        try {
            const response = await api.post("/moderator", info)
            
            if(response.status == 200) {
                addModal("Added new moderator successfully!", "success")
            } else {
                addModal("Error triyng to add a new moderator", "error")
            }
        } catch {
            addModal("Error triyng to add a new moderator", "error")
        }
    }

    return (
        <div className="h-screen bg-slate-200 flex justify-center items-center">
            <form className="bg-slate-50 p-4 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-3">
                    <label>Nome de usuário</label>
                    <input
                        className="bg-slate-200 px-3 py-1 mb-3 rounded focus:ring-2 focus:ring-purple-700"
                        type="text"
                        name="name"
                        value={info.name}
                        onChange={handleTyping}
                        
                    />
                </div>
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
                        Submit
                    </button>
                    <button
                        className="bg-slate-200 w-full rounded"
                        type="button"
                        onClick={() => setInfo({ name: "", email: "", password: "" })}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}