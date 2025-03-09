export default function Toolbar() {
    return (
        <aside className="bg-slate-300 h-screen w-fit p-6">
            <div className="flex gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="mb-2">Name</label>
                    <input className="bg-slate-100 p-2 rounded"
                    type="text"/>
                </div>
                <div className="flex flex-col">
                    <label className="mb-2">Price</label>
                    <input className="bg-slate-100 p-2 rounded"
                    type="number"/>
                </div>
            </div>
            <div className="flex flex-col mb-6">
                <label className="mb-2">Description</label>
                <textarea className="bg-slate-100 min-h-10 max-h-80 p-2 rounded"/>
            </div>
            <div className="flex w-full h-12 gap-4">
                <button className="bg-purple-700 w-full text-slate-50 rounded-md cursor-pointer">Add</button>
                <button className="bg-slate-400 w-full text-slate-50 rounded-md cursor-pointer">Clear</button>
            </div>
        </aside>
    )
}