import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Scroll listener for background glassmorphism elevation
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to track active section while scrolling
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // active trigger window
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-gray-200/90 shadow-sm'
            : 'bg-white/60 backdrop-blur-sm border-gray-200/50'
        }`}
      >
        {/* Favicon Logo Mark */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 pr-2 text-left group cursor-pointer focus:outline-none"
          aria-label="Scroll to top"
        >
          <img
            src="/Portfolio_Favicon.svg"
            alt="Logo"
            className="w-7 h-7 transition-transform group-hover:scale-105"
          />
          <span className="font-['Saira_Semi_Condensed'] font-semibold text-sm text-[#111827] hidden xl:inline">
            Mustafa Yeşil
          </span>
        </button>

        {/* Nav Items with Animated Active Pill */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider font-['Saira_Semi_Condensed'] transition-colors cursor-pointer rounded-full focus:outline-none ${
                  isActive ? 'text-[#111827]' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#FFD070]/30 border border-[#FFD070]/60 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
