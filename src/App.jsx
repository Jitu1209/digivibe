import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Verification from './pages/Verification';
import AdminDashboard from './pages/AdminDashboard';
import { Mail, Sparkles, X } from 'lucide-react';

// Scroll to top on navigation change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// App shell wrapper to optionally hide header/footer on portal interfaces
function LayoutWrapper({ children }) {
  const location = useLocation();
  
  // Hide headers/footers on specific onboarding/checkout paths if desired
  const isPortal = ['/checkout', '/onboarding'].includes(location.pathname);
  
  return (
    <div id="glow-bg-container" className="flex flex-col min-h-screen bg-white text-slate-900 relative">
      <div className="bg-grid-pattern"></div>
      {!isPortal && <Header />}
      <main className="flex-grow z-10 relative">
        {children}
      </main>
      {!isPortal && <Footer />}
    </div>
  );
}

export default function App() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById('glow-bg-container');
      if (container) {
        container.style.setProperty('--mouse-x', `${e.clientX}px`);
        container.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleToast = (e) => {
      setToast(e.detail);
      // Auto dismiss after 7 seconds
      const timer = setTimeout(() => {
        setToast(null);
      }, 7000);
      return () => clearTimeout(timer);
    };

    window.addEventListener('beyondskills_toast', handleToast);
    return () => window.removeEventListener('beyondskills_toast', handleToast);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Toast Notification for email simulated alert / SLA responses */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-gray-900 border border-brand-purple/40 rounded-xl shadow-2xl p-4 animate-fade-in backdrop-blur-xl">
          <div className="flex items-start space-x-3">
            <div className="bg-brand-purple/20 p-2 rounded-lg text-brand-purple">
              <Mail className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-brand-purple uppercase tracking-wider">Simulated SLA Email Alert</p>
                <button onClick={() => setToast(null)} className="text-gray-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm font-semibold text-white mt-1">{toast.subject}</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed whitespace-pre-line">{toast.body}</p>
              <span className="text-[10px] text-brand-purple font-mono mt-2 block">
                ⚡ Received within 5 seconds of submission (Target SLA: 5 minutes)
              </span>
            </div>
          </div>
        </div>
      )}

      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
