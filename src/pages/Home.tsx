import MarqueeVideoCarousel from '../components/MarqueeVideoCarousel';
import TrustedCompaniesCarousel from '../components/TrustedCompaniesCarousel';
import SearchHero from '../components/SearchHero';
import { Check, Zap, Target, Eye, MessageCircle, Sparkles, TrendingUp } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'AI Agents & Automation',
      description: 'Intelligent automation that scales your business',
      features: [
        'Lead capture & qualification',
        'Workflow automation',
        'Custom AI integrations',
      ],
    },
    {
      title: 'Websites',
      description: 'Fast, responsive, conversion-optimized websites',
      features: [
        'Custom design & development',
        'SEO optimization',
        'Analytics & tracking',
      ],
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform applications',
      features: [
        'iOS & Android development',
        'Cloud integration',
        'Push notifications & analytics',
      ],
    },
  ]

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Custom Architecture',
      description: 'Tailored solutions designed for your specific business needs',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Fast MVPs',
      description: 'Get to market quickly with rapid prototyping and iteration',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Outcome-Driven',
      description: 'Focused on measurable results and ROI, not just features',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Transparent & Educational',
      description: 'We teach you how everything works so you stay in control',
    },
  ]

  const caseStudies = [
    {
      title: 'E-commerce Revenue Growth',
      problem: 'Manual order processing causing delays',
      solution: 'AI-powered automation for order management',
      result: '300% increase in order processing speed',
      metric: '+300%',
    },
    {
      title: 'Lead Generation System',
      problem: 'Low conversion rates from website traffic',
      solution: 'Custom chatbot with intelligent lead qualification',
      result: '85% improvement in qualified leads',
      metric: '+85%',
    },
    {
      title: 'Mobile App Launch',
      problem: 'Needed native app to reach mobile customers',
      solution: 'Cross-platform app with cloud backend',
      result: '50K downloads in first 3 months',
      metric: '50K+',
    },
  ]

  const process = [
    { step: '1', title: 'Discovery', description: 'Understand your goals and pain points' },
    { step: '2', title: 'Prototype', description: 'Build and validate a working MVP' },
    { step: '3', title: 'Integrate', description: 'Connect to your existing systems' },
    { step: '4', title: 'Scale', description: 'Optimize for growth and performance' },
    { step: '5', title: 'Train', description: 'Empower your team to maintain it' },
  ]

  return (
    <div>
      <SearchHero />

      {/* Services Section - Modern Cards */}
      <section className="section-padding bg-gradient-to-b from-white to-dark-50">
        <div className="section-container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              End-to-end digital solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white border-2 border-dark-100 rounded-3xl p-8 card-hover overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-accent-green/10 rounded-lg flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-accent-green" />
                        </div>
                        <span className="text-dark-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Modern Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
              Why Choose <span className="text-gradient">Saketh AI</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              Our approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative bg-white border-2 border-dark-100 rounded-2xl p-8 card-hover text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <TrustedCompaniesCarousel />

      {/* Case Studies Section - Modern Cards */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
        <div className="section-container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-green/10 border border-accent-green/20 rounded-full mb-6 animate-fade-in">
              <TrendingUp className="w-4 h-4 text-accent-green" />
              <span className="text-sm font-medium text-accent-green">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
              Real <span className="text-gradient">Results</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              Measurable impact from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const gradients = [
                'from-primary-600 via-primary-700 to-primary-800',
                'from-accent-purple via-purple-700 to-purple-900',
                'from-dark-700 via-dark-800 to-dark-900'
              ];
              const metricGradients = [
                'from-accent-cyan to-primary-400',
                'from-accent-pink to-accent-purple',
                'from-accent-green to-emerald-400'
              ];
              
              return (
                <div 
                  key={index} 
                  className={`group relative bg-gradient-to-br ${gradients[index]} text-white rounded-3xl p-8 card-hover overflow-hidden shadow-2xl`}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`text-5xl font-extrabold bg-gradient-to-r ${metricGradients[index]} bg-clip-text text-transparent mb-6`}>
                      {study.metric}
                    </div>
                    <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-white/70 text-sm font-semibold uppercase tracking-wide">Problem</span>
                        <p className="text-white/90 mt-1">{study.problem}</p>
                      </div>
                      <div>
                        <span className="text-white/70 text-sm font-semibold uppercase tracking-wide">Solution</span>
                        <p className="text-white/90 mt-1">{study.solution}</p>
                      </div>
                      <div>
                        <span className="text-white/70 text-sm font-semibold uppercase tracking-wide">Result</span>
                        <p className={`bg-gradient-to-r ${metricGradients[index]} bg-clip-text text-transparent font-bold mt-1 text-lg`}>{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Modern Timeline */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              From concept to deployment in 5 clear steps
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-accent-purple/30 to-accent-cyan/30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl text-3xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-3">{item.title}</h3>
                  <p className="text-dark-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Note - Modern Card */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
              A Note from the <span className="text-gradient">Founder</span>
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative glass rounded-3xl p-10 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl">
                    SA
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-xl text-dark-700 mb-8 leading-relaxed italic">
                    "I started Saketh AI Automation because I saw too many businesses struggling with manual processes that technology could easily solve. My mission is simple: build tools that work, teach you how they work, and make sure you get real results. Every project we take on is focused on creating measurable value for your business."
                  </p>
                  <div className="border-t border-dark-200 pt-6">
                    <div className="font-bold text-dark-900 text-lg">Saketh</div>
                    <div className="text-dark-600">Founder & Lead Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <MarqueeVideoCarousel />

      {/* Final CTA - Modern & Engaging */}
      <section className="relative section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-30 animate-gradient"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">Let's Build Something Amazing</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-primary-400 via-accent-cyan to-accent-purple bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-dark-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book a free consultation and let's discuss how AI automation can scale your operations and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open('https://wa.me/918187889752', '_blank')}
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-green to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-accent-green/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Book a Free Call</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <a
              href="https://wa.me/918187889752"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 glass-dark border-2 border-white/30 rounded-xl hover:border-white/50 font-semibold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-gradient mb-2">&lt; 24hrs</div>
                <p className="text-dark-300">Average Response Time</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-gradient mb-2">100%</div>
                <p className="text-dark-300">Free Consultations</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-gradient mb-2">No Obligation</div>
                <p className="text-dark-300">Just Honest Advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}




