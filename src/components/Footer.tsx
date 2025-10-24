// src/components/Footer.tsx
import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, Instagram, Sparkles } from 'lucide-react'

export default function Footer() {
  const handleNavClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-gradient-to-br from-primary-800 via-primary-900 to-dark-900 text-white mt-auto overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh-strong opacity-30 animate-gradient"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Footer CTA Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">Ready to Get Started?</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span> Together
          </h3>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and discover how AI automation can transform your business
          </p>
          <a
            href="https://wa.me/918187889752"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-green to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-accent-green/50 transition-all duration-300 hover:-translate-y-1"
          >
            <span>Book a Free Call</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center group">
              <img 
                src="/footer-logo.png" 
                alt="Saketh AI Logo" 
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <p className="text-dark-300 text-sm leading-relaxed">
              Empowering businesses with AI automation solutions that scale operations and drive growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:contact@sakethaiautomation.com"
                className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors group"
              >
                <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm">contact@sakethaiautomation.com</span>
              </a>
              <a 
                href="tel:+918187889752"
                className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors group"
              >
                <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm">+91 81878 89752</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Training', path: '/training' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={handleNavClick} 
                    className="text-dark-300 hover:text-primary-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-dark-300">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                <span>Web Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                <span>Mobile Apps</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                <span>AI Automation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                <span>Consulting</span>
              </li>
            </ul>
          </div>

              {/* Social & Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
                  <span>Connect</span>
                </h3>
                
                {/* Social Links - WhatsApp & Instagram only */}
                <div className="flex space-x-3 mb-8">
                  {[
                    { icon: MessageCircle, href: 'http://wa.me/918187889752', label: 'WhatsApp', gradient: 'from-accent-green to-emerald-500' },
                    { icon: Instagram, href: 'https://www.instagram.com/saketh.ai?igsh=bDQ3MmpqanNzMDhv', label: 'Instagram', gradient: 'from-pink-500 to-purple-600' },
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="relative p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <social.icon className="relative w-5 h-5 text-dark-300 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>

                {/* Legal Links */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-3">Legal</h4>
                  {[
                    { name: 'Privacy Policy', path: '/privacy-policy' },
                    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
                    { name: 'Disclaimer', path: '/disclaimer' },
                  ].map((link) => (
                    <Link 
                      key={link.name}
                      to={link.path} 
                      className="block text-sm text-dark-300 hover:text-primary-400 transition-colors group"
                      onClick={handleNavClick}
                    >
                      <span className="inline-flex items-center">
                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
        </div>

        {/* Bottom Bar - Simplified */}
        <div className="pt-12 mt-12 border-t border-white/10">
          <div className="text-center">
            <p className="text-dark-300 text-sm">
              © 2025 Saketh AI Automation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
