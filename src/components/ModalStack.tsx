import { useMyContext } from "../Context/Provider"
import { FaXmark } from "react-icons/fa6"
import { useEffect, useState, useRef } from "react"

interface ModalInfo {
    id: number
    content: string
    type: "success" | "error" | "info"
}

interface ModalComponentProps {
    modal: ModalInfo
    removeModal: (id: number) => void
}

export default function ModalStack() {
    const { modals, removeModal } = useMyContext()

    return (
        <div className="absolute top-0 right-0 z-50">
            {modals.map((modal) => (
                <Modal key={modal.id} modal={modal} removeModal={removeModal} />
            ))}
        </div>
    )
}

function Modal({ modal, removeModal }: ModalComponentProps) {
    const [progress, setProgress] = useState<number>(0)
    const progressRef = useRef<number>(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    let styleByType = {
        success: "#05df72",
        error: "#fb2c36",
        info: "oklch(0.879 0.169 91.605)",
    }[modal.type]

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            progressRef.current += 2
            setProgress(progressRef.current)
            
            if (progressRef.current >= 100) {
                clearInterval(intervalRef.current!)
                removeModal(modal.id)
            }
        }, 100)

        return () => clearInterval(intervalRef.current!)
    }, [modal.id, removeModal]) 

    return (
        <div className="relative overflow-hidden min-w-36 w-fit h-10 p-4 m-4 flex items-center align-middle justify-between rounded-md"
            style={{ backgroundColor: styleByType }}>
            <p className="text-[12px] pr-6">{modal.content}</p>
            <FaXmark className="size-[12px]" onClick={() => removeModal(modal.id)} />
            <div className="absolute bottom-0 right-0 w-full bg-gray-200 h-1 dark:bg-gray-700">
                <div
                    className="bg-slate-50 h-1 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    )
}
