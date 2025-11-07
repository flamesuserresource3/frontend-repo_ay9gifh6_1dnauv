import { useEffect, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';

const mockProducts = [
  {
    id: '1',
    title: 'Wireless Earbuds Pro',
    price: 14.99,
    supplier: 'AliExpress',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.aliexpress.com/',
  },
  {
    id: '2',
    title: 'RGB Gaming Mouse',
    price: 9.49,
    supplier: 'CJ Dropshipping',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200&auto=format&fit=crop',
    link: 'https://cjdropshipping.com/',
  },
  {
    id: '3',
    title: 'Minimal Smart Watch',
    price: 22.99,
    supplier: 'Alibaba',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.alibaba.com/',
  },
];

function ProductCard({ p }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-video overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">{p.title}</h3>
          <span className="text-blue-600 font-bold">${p.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
          <span className="inline-flex items-center gap-1"><Star size={14} className="text-amber-500" /> {p.rating}</span>
          <span>•</span>
          <span>{p.supplier}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:underline">
            View Supplier <ExternalLink size={14} />
          </a>
          <button className="ml-auto px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Import to Store</button>
        </div>
      </div>
    </div>
  );
}

export default function TrendingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real app, fetch from your backend which proxies free APIs.
    setProducts(mockProducts);
  }, []);

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trending Products</h2>
            <p className="text-slate-600">Curated from AliExpress, CJ Dropshipping and Alibaba</p>
          </div>
          <a href="#" className="text-blue-700 hover:underline">Browse all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
