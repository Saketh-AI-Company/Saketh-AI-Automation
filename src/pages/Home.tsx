import MarqueeVideoCarousel from '../components/MarqueeVideoCarousel';
import TrustedCompaniesCarousel from '../components/TrustedCompaniesCarousel';
import SearchHero from '../components/SearchHero';
import { ArrowRight, Check, TrendingUp, Users, Award, Zap, Target, Eye, MessageCircle } from 'lucide-react'

interface HomeProps {
  onNavigate: (page: string) => void
}

export default function Home({ onNavigate }: HomeProps) {
  const stats = [
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Active Clients', value: '80+' },
    { label: 'Avg ROI Increase', value: '240%' },
  ]

  const services = [
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
    {
      title: 'AI Agents & Automation',
      description: 'Intelligent automation that scales your business',
      features: [
        'Lead capture & qualification',
        'Workflow automation',
        'Custom AI integrations',
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
    <div className="pt-16">
      <SearchHero />

      

      


      

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">What We Build</h2>
            <p className="text-xl text-gray-600">End-to-end digital solutions for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-[#071130] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">Why Saketh AI</h2>
            <p className="text-xl text-gray-600">Our approach to delivering exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0EA5E9] text-white rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#071130] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <TrustedCompaniesCarousel />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-[#071130] to-[#0A1A4A] text-white rounded-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="text-4xl font-bold text-[#22C55E] mb-4">{study.metric}</div>
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-400">Problem:</span>
                    <p className="text-gray-200">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Solution:</span>
                    <p className="text-gray-200">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Result:</span>
                    <p className="text-[#22C55E] font-semibold">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('case-studies')}
              className="inline-flex items-center space-x-2 text-[#0EA5E9] hover:text-[#0284C7] font-semibold"
            >
             {/*<span>View All Case Studies</span>*/}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">From concept to deployment in 5 clear steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0EA5E9] text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#071130] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/*<section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">Learning Hub</h2>
            <p className="text-xl text-gray-600">Free resources to help you automate smarter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-[#0EA5E9] font-semibold text-sm mb-2">TUTORIAL</div>
              <h3 className="text-xl font-bold text-[#071130] mb-2">Building AI Agents with n8n</h3>
              <p className="text-gray-600 mb-4">Learn how to create custom automation workflows</p>
              <button className="text-[#0EA5E9] hover:text-[#0284C7] font-semibold">Read More →</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-[#0EA5E9] font-semibold text-sm mb-2">VIDEO</div>
              <h3 className="text-xl font-bold text-[#071130] mb-2">Lead Qualification Automation</h3>
              <p className="text-gray-600 mb-4">Watch how we automate lead scoring and routing</p>
              <button className="text-[#0EA5E9] hover:text-[#0284C7] font-semibold">Watch Now →</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-[#0EA5E9] font-semibold text-sm mb-2">GUIDE</div>
              <h3 className="text-xl font-bold text-[#071130] mb-2">Choosing the Right Tech Stack</h3>
              <p className="text-gray-600 mb-4">Make informed decisions for your project</p>
              <button className="text-[#0EA5E9] hover:text-[#0284C7] font-semibold">Read More →</button>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('resources')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors font-semibold"
            >
              <span>Browse All Resources</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>*/}

      

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">A Note from the Founder</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              "I started Saketh AI Automation because I saw too many businesses struggling with manual processes that technology could easily solve. My mission is simple: build tools that work, teach you how they work, and make sure you get real results. Every project we take on is focused on creating measurable value for your business."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#0EA5E9] rounded-full flex items-center justify-center text-white font-bold text-xl">
                SA
              </div>
              <div>
                <div className="font-bold text-[#071130]">Saketh</div>
                <div className="text-gray-600">Founder & Lead Engineer</div>
              </div>
            </div>
          </div>

          
        </div>
      </section>


      <MarqueeVideoCarousel />

      <section className="py-20 bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free consultation and let's discuss how AI automation can scale your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-all font-semibold text-lg"
            >
              Book a Free Call
            </button>
            <a
              href="https://wa.me/918187889752"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all font-semibold text-lg border border-white/20 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}




