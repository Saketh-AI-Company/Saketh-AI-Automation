import { Check, ArrowRight, Zap, Smartphone, Bot } from 'lucide-react'

interface ServicesProps {
  onNavigate: (page: string) => void
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
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
  ]

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end digital solutions designed to automate operations and accelerate growth
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gray-50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0EA5E9] text-white rounded-xl mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">{service.description}</p>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#071130] mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-colors font-semibold"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#071130] mb-4">Deliverables</h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-[#071130] mb-2">Timeline</h3>
                    <p className="text-2xl font-bold text-[#0EA5E9]">{service.timeline}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#071130] mb-4">Expected Outcomes</h3>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create a custom solution for your business
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-all font-semibold text-lg"
          >
            Book a Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
