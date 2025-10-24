// src/components/Header.tsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center space-x-2 group">
          <img 
            src="/logo.png" 
            alt="Saketh AI Logo" 
            className="w-16 h-16 transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleNavClick}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                location.pathname === item.path 
                  ? 'text-primary-600' 
                  : 'text-dark-700 hover:text-primary-600 hover:bg-primary-50/50'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Get Started</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-dark-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-light border-t border-white/20 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-dark-700 hover:bg-primary-50/50 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-6 py-3 rounded-lg mt-4 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
