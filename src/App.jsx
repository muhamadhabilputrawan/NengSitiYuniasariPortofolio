import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      <Navbar />
      <main className="grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
