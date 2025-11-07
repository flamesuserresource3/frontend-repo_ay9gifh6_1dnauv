import { Zap, Shield, Globe, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI Product Copy',
    desc: 'Generate SEO titles, descriptions and pricing with one click.'
  },
  {
    icon: Globe,
    title: 'Supplier Integrations',
    desc: 'Connect free APIs and import products in seconds.'
  },
  {
    icon: Shield,
    title: 'Order Simulation',
    desc: 'Test checkout and fulfillment flows risk‑free.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Track imports, clicks and conversion trends.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Why Dropship.ai</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <f.icon className="text-blue-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
