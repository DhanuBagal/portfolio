import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleCopyEmail = (email) => {
    setToastMessage(`Email copied to clipboard: ${email}`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 relative" style={{backgroundColor:'var(--bg-main)', color:'var(--text-primary)'}}>

      {/* Toast Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 p-4 px-5 rounded-2xl shadow-xl flex items-center gap-3 text-xs font-bold"
            style={{backgroundColor:'var(--pill-dark-bg)', color:'var(--pill-dark-text)', border:'1px solid var(--border-accent)'}} >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Header Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onCopyEmail={handleCopyEmail} />

      {/* Main Page Flow */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
