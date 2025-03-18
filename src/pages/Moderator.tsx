import { useEffect, useState } from "react"
import api from "../api/axiosConfig"
import { useMyContext } from "../Context/Provider"

interface CardModeratorProp {
    name: string
    email: string
}

interface ModeratorModel {
    id: string
    email: string
    name: string
    passwordHash: string
    passwordSalt: string
}

function CardModerator({ name, email }: CardModeratorProp) {
    return (
        <div className="bg-slate-200 w-full h-fit p-4 rounded-md text-center">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default function Moderator() {
    const { addModal } = useMyContext()
    const [moderators, setModerators] = useState<ModeratorModel[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getModerators = async () => {
            try {
                const response = await api.get("/moderator")

                if (response.status === 200) {
                    setModerators(response.data)
                } else {
                    addModal("We didn't get moderators successfully", "error")
                }
            } catch (error: any) {
                console.error("Error fetching moderators:", error)
                addModal("We didn't get moderators successfully", "error")
            } finally {
                setLoading(false)
            }
        }

        getModerators()
    }, [addModal])

    if (loading) {
        return (
            <main className="w-full h-[87%] flex justify-center items-center">
                <h1 className="text-6xl font-bold text-center">Loading...</h1>
            </main>
        )
    }

    return (
        <main className="h-full w-full p-10">
            <h1 className="text-3xl font-bold mb-4">List of moderators of the store</h1>
            <div className="flex gap-1 flex-wrap">
                {moderators.length > 0 ? (
                    moderators.map((moderator) => (
                        <CardModerator key={moderator.id} name={moderator.name} email={moderator.email} />
                    ))
                ) : (
                    <p className="text-2xl">No moderator found</p>
                )}
            </div>
        </main>
    )
}
