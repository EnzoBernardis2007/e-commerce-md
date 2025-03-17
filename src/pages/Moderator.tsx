interface CardModeratorProp {
    name: string
    email: string
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
    let mockupModerators: CardModeratorProp[] = [
        {
            name: "nome 0",
            email: "email 0"
        },
        {
            name: "nome 1",
            email: "email 1"
        },
        {
            name: "nome 2",
            email: "email 2"
        },
        {
            name: "nome 3",
            email: "email 3"
        },
        {
            name: "nome 0",
            email: "email 0"
        },
        {
            name: "nome 1",
            email: "email 1"
        },
        {
            name: "nome 2",
            email: "email 2"
        },
        {
            name: "nome 3",
            email: "email 3"
        },
        {
            name: "nome 0",
            email: "email 0"
        },
        {
            name: "nome 1",
            email: "email 1"
        },
        {
            name: "nome 2",
            email: "email 2"
        },
        {
            name: "nome 3",
            email: "email 3"
        },
        {
            name: "nome 0",
            email: "email 0"
        },
        {
            name: "nome 1",
            email: "email 1"
        },
        {
            name: "nome 2",
            email: "email 2"
        },
        {
            name: "nome 3",
            email: "email 3"
        },
        {
            name: "nome 0",
            email: "email 0"
        },
        {
            name: "nome 1",
            email: "email 1"
        },
        {
            name: "nome 2",
            email: "email 2"
        },
        {
            name: "nome 3",
            email: "email 3"
        }
    ]

    return (
        <main className="h-full w-full p-10">
            <h1 className="text-3xl font-bold mb-4">List of moderators of the store</h1>
            <div className="flex gap-1 flex-wrap">
                {mockupModerators.map((moderator) => (
                    <CardModerator name={moderator.name} email={moderator.email} />
                ))}
            </div>
        </main>
    )
}