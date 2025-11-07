import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingProducts from './components/TrendingProducts';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrendingProducts />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
