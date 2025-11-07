import { ShoppingCart, Bot, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-blue-700">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-inner" />
          <span>Dropship.ai</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a className="hover:text-blue-600" href="#home">Home</a>
          <a className="hover:text-blue-600" href="#products">Products</a>
          <a className="hover:text-blue-600" href="#features">Features</a>
          <a className="hover:text-blue-600" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50">
            <User size={16} /> Login
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow">
            <Bot size={16} /> Start Free
          </button>
          <button className="ml-1 p-2 rounded-lg hover:bg-blue-50 text-blue-700">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
