import { useState } from "react"
import api from "../api/axiosConfig"
import { useMyContext } from "../Context/Provider"

interface ProductProp {
    name: string
    description: string
    price: number
    quantity: number
}

export default function Toolbar() {
    const { addModal } = useMyContext()
    const [form, setForm] = useState<ProductProp>({
        name: "",
        description: "",
        price: 0,
        quantity: 0,
    })

    const handleTyping = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setForm((prevForm) => ({
            ...prevForm,
            [name]: name === "price" || name === "quantity" ? Number(value) : value,
        }))
    }

    const clearForm = () => {
        setForm({ name: "", description: "", price: 0, quantity: 0 })
    }

    const handleSubmit = async () => {
        const response = await api.post("/product", form)

        if(response.status == 200) {
            addModal("Succeffuly added a new product", "success")
        } else {
            addModal("Error triyng to add a new product", "error")
        }
    }

    return (
        <aside className="bg-slate-300 h-full w-fit p-6">
            <div className="flex flex-col mb-6">
                <label className="mb-2">Name</label>
                <input
                    className="bg-slate-100 p-2 rounded"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleTyping}
                />
            </div>
            <div className="flex gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="mb-2">Quantity</label>
                    <input
                        className="bg-slate-100 p-2 rounded"
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleTyping}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2">Price</label>
                    <input
                        className="bg-slate-100 p-2 rounded"
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleTyping}
                    />
                </div>
            </div>

            <div className="flex flex-col mb-6">
                <label className="mb-2">Description</label>
                <textarea
                    className="bg-slate-100 min-h-10 max-h-60 p-2 rounded"
                    name="description"
                    value={form.description}
                    onChange={handleTyping}
                />
            </div>
            <div className="flex w-full h-12 gap-4">
                <button className="bg-purple-700 w-full text-slate-50 rounded-md cursor-pointer"
                onClick={handleSubmit}>Add</button>
                <button
                    className="bg-slate-400 w-full text-slate-50 rounded-md cursor-pointer"
                    onClick={clearForm}
                >
                    Clear
                </button>
            </div>
        </aside>
    )
}
