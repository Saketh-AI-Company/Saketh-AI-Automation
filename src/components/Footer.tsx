// src/components/Footer.tsx
import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const handleNavClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info - Changed Logo Only */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/footer-logo.png" alt="Saketh AI Logo" className="w-20 h-20" />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with AI automation solutions that scale operations and drive growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">contact@sakethaiautomation.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">+91 81878 89752</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Fixed Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/training" onClick={handleNavClick} className="text-gray-400 hover:text-white transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Automation</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Social & Legal - Fixed Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="space-y-2">
              <Link 
                to="/privacy-policy" 
                className="block text-sm text-gray-400 hover:text-white transition-colors"
                onClick={handleNavClick}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-and-conditions" 
                className="block text-sm text-gray-400 hover:text-white transition-colors"
                onClick={handleNavClick}
              >
                Terms & Conditions
              </Link>
              <Link 
                to="/disclaimer" 
                className="block text-sm text-gray-400 hover:text-white transition-colors"
                onClick={handleNavClick}
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Saketh AI Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
