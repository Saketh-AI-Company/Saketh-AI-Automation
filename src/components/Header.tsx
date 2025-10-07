// src/components/Header.tsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center space-x-2">
          <img src="/logo.png" alt="Saketh AI Logo" className="w-20 h-20" />
          {/*<span className="font-bold text-lg text-gray-900">Saketh AI Automation</span>*/}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={handleNavClick}
              className={`text-sm font-medium transition ${
                location.pathname === item.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
          >
            <Phone className="w-4 h-4" />
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
)
}
