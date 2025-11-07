export default function Footer() {
  return (
    <footer id="contact" className="border-t border-blue-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-semibold text-blue-700">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-inner" />
            <span>Dropship.ai</span>
          </div>
          <p className="text-slate-600 mt-3 text-sm">A free, AI‑powered dropshipping starter to explore suppliers, import products, and simulate orders.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-slate-900 mb-2">Company</h4>
          <ul className="space-y-1 text-slate-600">
            <li><a href="#about" className="hover:text-blue-700">About</a></li>
            <li><a href="#features" className="hover:text-blue-700">Features</a></li>
            <li><a href="#" className="hover:text-blue-700">Pricing</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-slate-900 mb-2">Contact</h4>
          <ul className="space-y-1 text-slate-600">
            <li>Email: hello@dropship.ai</li>
            <li>Twitter: @dropshipai</li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Dropship.ai — Free starter demo</div>
    </footer>
  );
}
