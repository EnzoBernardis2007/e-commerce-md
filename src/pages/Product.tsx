import { useEffect, useState } from "react"
import Toolbar from "../components/Toolbar"
import api from "../api/axiosConfig"
import { useMyContext } from "../Context/Provider"

interface ProductsModel {
    id: number
    name: string
    description: string
    price: number,
    quantity: number
    registration: string
}

export default function Product() {
    const { addModal } = useMyContext()
    const [products, setProducts] = useState<ProductsModel[]>([])

    useEffect(() => {
        const getAllProducts = async () => {
            const response = await api.get("/product")

            if(response.status == 200) {
                const data = response.data
                setProducts(data)
            } else {
                addModal("Failed to get products data", "error")
            }
        }

        getAllProducts()
    }, [products])

    return (
        <main className="h-full w-full flex">
            <Toolbar />
            <div className="h-[94%] w-full p-6 overflow-hidden"> {/* Container principal sem scroll */}
                <div className="h-[96%] overflow-y-auto"> {/* Container dos produtos com scroll */}
                    {products.map((product, index) => (
                        <div key={index} className="bg-slate-200 w-full h-fit p-4 mb-4 rounded-md">
                            <p><strong>Name:</strong> {product.name}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Description:</strong> {product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}