import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Anasayfa', href: '#anasayfa' },
    { label: 'Köy Hakkında', href: '#hakkinda' },
    { label: 'Tarihçe', href: '#tarihce' },
    { label: 'Geçmişten Bugüne', href: '#gecmisten-bugune' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Ulaşım', href: '#ulasim' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#anasayfa"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#anasayfa');
            }}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95 duration-200"
          >
            <img
              src="/mahmatli-koyu-logo.png"
              alt="Mahmatlı Köyü"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-3 py-2 text-sm text-gray-700 hover:text-[#1B3400] hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#1B3400] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-50 backdrop-blur-sm border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-[#1B3400] hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
