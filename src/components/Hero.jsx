import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 py-20">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-4">
            <Sparkles size={14} /> AI-Powered Dropshipping Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Source products, automate copy, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">launch free</span>
          </h1>
          <p className="mt-5 text-slate-600 text-lg">
            Discover trending items from AliExpress, CJ Dropshipping, and Alibaba. Import to your store, simulate orders, and scale with built-in AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow">
              <Rocket size={18} /> Start Dropshipping Free
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-blue-200 text-blue-700 hover:bg-blue-50">
              View Features
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
