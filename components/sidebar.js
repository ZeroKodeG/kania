import Link from "next/link"
import { PlusCircle, FolderPlus, Download, Globe } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-72 bg-black text-white flex flex-col h-screen">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center">
            <span className="text-white">K</span>
          </div>
          <span>KanIA</span>
        </Link>
      </div>

      <div className="p-4 flex-1">
        <button className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-4 text-white flex items-center justify-center gap-2 mb-4">
          <PlusCircle size={18} />
          <span>Nuevo chat</span>
        </button>

        <button className="w-full bg-transparent border border-gray-700 rounded-md py-2 px-4 text-white flex items-center justify-center gap-2">
          <FolderPlus size={18} />
          <span>Nueva carpeta</span>
        </button>
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <span>ES</span>
          </div>
          <div className="text-sm">▼</div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm">AI Scholar</span>
        </div>

        <div className="flex items-center gap-2">
          <Download size={18} />
          <span className="text-sm">Descargar app</span>
        </div>
      </div>
    </div>
  )
}

