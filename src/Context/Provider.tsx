import { createContext, useContext, ReactNode, useState } from "react"

interface ModalInfo {
    id: number
    content: string
    type: "success" | "error" | "info"
}

interface MyContextType {
    modals: ModalInfo[]
    addModal: (content: string, type: "success" | "error" | "info") => void
    removeModal: (id: number) => void
}

const MyContext = createContext<MyContextType | undefined>(undefined)

export const MyProvider = ({ children }: { children: ReactNode }) => {
    const [modals, setModals] = useState<ModalInfo[]>([])

    const addModal = (content: string, type: "success" | "error" | "info") => {
        const id = Date.now()
        setModals((prevModals) => [...prevModals, { id, content, type }])
        console.log("add")
    }

    const removeModal = (id: number) => {
        setModals((prevModals) => prevModals.filter(modal => modal.id !== id))
    }

    return (
        <MyContext.Provider value={{ modals, addModal, removeModal }}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => {
    const context = useContext(MyContext)

    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider")
    }
    return context
}
