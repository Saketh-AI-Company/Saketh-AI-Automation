import { Check, Zap, Smartphone, Bot, ArrowRight, TrendingUp, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Agents & Automation',
      description: 'Intelligent automation systems that work 24/7 to scale your business',
      features: [
        'Lead capture & qualification bots',
        'Custom workflow automation',
        'CRM & tool integrations',
        'Email & SMS automation',
        'Data processing & reporting',
        'Customer support chatbots',
      ],
      deliverables: [
        'Custom AI agent system',
        'Integration with existing tools',
        'Analytics dashboard',
        'Training & documentation',
      ],
      timeline: '2-6 weeks',
      outcomes: [
        'Reduce manual work by 80%+',
        'Qualify leads automatically',
        'Save 20+ hours per week',
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Website Development',
      description: 'Fast, responsive, and conversion-optimized websites that drive results',
      features: [
        'Custom design tailored to your brand',
        'Mobile-first responsive development',
        'SEO optimization & analytics',
        'CMS integration (WordPress, custom)',
        'E-commerce functionality',
        'Performance optimization',
      ],
      deliverables: [
        'Fully functional website',
        'Admin dashboard',
        'SEO setup & Google Analytics',
        'Documentation & training',
      ],
      timeline: '4-8 weeks',
      outcomes: [
        'Increase organic traffic by 150%+',
        'Improve conversion rates by 40%+',
        'Reduce page load time by 60%+',
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform applications that engage your users',
      features: [
        'iOS & Android native development',
        'Cross-platform (React Native, Flutter)',
        'Cloud backend integration',
        'Push notifications',
        'In-app analytics',
        'App Store deployment',
      ],
      deliverables: [
        'Production-ready mobile app',
        'Backend API & database',
        'Admin panel',
        'App Store listings',
      ],
      timeline: '8-16 weeks',
      outcomes: [
        'Reach mobile-first customers',
        'Increase user engagement by 3x',
        'Generate new revenue streams',
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section - Modern */}
      <section className="relative section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">What We Offer</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-200 max-w-4xl mx-auto leading-relaxed font-light">
            End-to-end digital solutions designed to automate operations and accelerate growth
          </p>
        </div>
      </section>

      {/* Service Sections - Modern Layout */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-dark-50 to-white'}`}
        >
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl mb-8 shadow-xl">
                  {service.icon}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-xl text-dark-600 mb-10 leading-relaxed">{service.description}</p>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-dark-900 mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent-green/10 rounded-lg flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-accent-green" />
                        </div>
                        <span className="text-dark-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => window.open('https://wa.me/918187889752', '_blank')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden inline-flex items-center space-x-2"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                  
                  <div className="relative glass rounded-3xl p-8 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary-600" />
                        </div>
                        <span>Deliverables</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-dark-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-dark-100">
                      <h3 className="text-lg font-semibold text-dark-600 mb-2">Timeline</h3>
                      <p className="text-3xl font-extrabold text-gradient">{service.timeline}</p>
                    </div>

                    <div className="pt-6 border-t border-dark-100">
                      <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center space-x-2">
                        <div className="w-8 h-8 bg-accent-green/10 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-accent-green" />
                        </div>
                        <span>Expected Outcomes</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                            <span className="text-dark-700 font-medium">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA - Modern */}
      <section className="relative section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-30"></div>
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Ready to Get <span className="text-gradient">Started?</span>
          </h2>
          <p className="text-xl md:text-2xl text-dark-200 mb-12 max-w-3xl mx-auto">
            Let's discuss your project and create a custom solution for your business
          </p>
          
          <button
            onClick={() => window.open('https://wa.me/918187889752', '_blank')}
            className="group relative px-10 py-5 bg-gradient-to-r from-accent-green to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-accent-green/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden inline-flex items-center space-x-2"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Book a Free Consultation</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  )
}
