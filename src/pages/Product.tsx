import Toolbar from "../components/Toolbar";

const productsMockup = [
    {
        name: "tablet",
        price: 100,
        description: "a fun description"
    },
    {
        name: "smartphone",
        price: 500,
        description: "stay connected everywhere"
    },
    {
        name: "laptop",
        price: 1200,
        description: "powerful and portable"
    },
    {
        name: "headphones",
        price: 150,
        description: "immersive sound experience"
    },
    {
        name: "smartwatch",
        price: 250,
        description: "track your fitness and more"
    },
    {
        name: "camera",
        price: 800,
        description: "capture your best moments"
    }
];

export default function Product() {
    return (
        <main className="h-full w-full flex">
            <Toolbar />
            <div className="h-[94%] w-full p-6 overflow-hidden"> {/* Container principal sem scroll */}
                <div className="h-[96%] overflow-y-auto"> {/* Container dos produtos com scroll */}
                    {productsMockup.map((product, index) => (
                        <div key={index} className="bg-slate-200 w-full h-fit p-4 mb-4 rounded-md">
                            <p><strong>Name:</strong> {product.name}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Description:</strong> {product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}