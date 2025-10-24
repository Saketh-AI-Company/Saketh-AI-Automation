import { Target, Lightbulb, Users, Award, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description:
        'We measure success by your outcomes, not our output. Every solution is designed to deliver measurable ROI.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Educational',
      description:
        'We believe in teaching you how everything works. You should understand and control your technology.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Partnership',
      description:
        'We work as an extension of your team, not just a vendor. Your success is our success.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality First',
      description:
        'We never cut corners. Every line of code, every design decision is made with excellence in mind.',
    },
  ]

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description:
        'Started as a solo consultant helping local businesses automate their workflows.',
    },
    {
      year: '2021',
      title: 'First Major Client',
      description:
        'Landed first enterprise client and delivered a custom CRM integration that saved them $100K annually.',
    },
    {
      year: '2022',
      title: 'Team Growth',
      description:
        'Expanded to a team of specialists in AI, mobile development, and automation.',
    },
    {
      year: '2023',
      title: 'AI Revolution',
      description:
        'Pivoted to focus on AI-powered automation, helping 50+ businesses transform their operations.',
    },
    {
      year: '2024',
      title: 'Scaling Impact',
      description:
        'Now serving clients across multiple industries, with a focus on education and long-term partnerships.',
    },
  ]

  return (
    <div>
      {/* Hero Section - Modern */}
      <section className="relative section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            About <span className="text-gradient">Saketh AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-200 max-w-4xl mx-auto leading-relaxed font-light">
            We're on a mission to help businesses leverage AI and automation to work smarter, scale faster, and achieve more
          </p>
        </div>
      </section>

      {/* Story Section - Modern */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-8">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-dark-700 leading-relaxed">
                <p>
                  Saketh AI Automation was born from a simple observation: too many businesses are
                  held back by manual processes and outdated technology. I saw brilliant founders
                  spending their time on repetitive tasks instead of growing their business.
                </p>
                <p>
                  As a developer and entrepreneur, I knew there was a better way. AI and automation
                  have the power to transform operations, but most businesses don't know where to
                  start or who to trust.
                </p>
                <p>
                  That's why I founded this company with a different approach: build solutions that
                  work, teach clients how they work, and focus relentlessly on results. No jargon,
                  no vendor lock-in, no hidden complexities.
                </p>
                <p>
                  Today, we've helped over 80 businesses automate their operations, generate more
                  leads, and scale their revenue. Every project is a partnership, and every client
                  becomes part of our story.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-dark-900 via-dark-950 to-black rounded-3xl p-10 text-white">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mb-6 shadow-xl">
                    SA
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Saketh</h3>
                  <p className="text-dark-300">Founder & Lead Engineer</p>
                </div>
                <p className="text-dark-200 text-lg leading-relaxed mb-8 italic">
                  "I believe technology should empower people, not confuse them. Every solution we
                  build is designed to be understandable, maintainable, and scalable. My goal is to
                  help you automate the boring stuff so you can focus on what matters: growing your
                  business and serving your customers."
                </p>
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-accent-green to-primary-400 bg-clip-text text-transparent mb-2">150+</div>
                    <div className="text-sm text-dark-300">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-accent-green to-primary-400 bg-clip-text text-transparent mb-2">80+</div>
                    <div className="text-sm text-dark-300">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Modern */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative bg-white border-2 border-dark-100 rounded-2xl p-8 card-hover">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Modern */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              From solo consultant to trusted automation partner
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary-400 via-accent-purple to-accent-cyan"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-8 relative">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 glass rounded-2xl p-8 card-hover">
                    <h3 className="text-2xl font-bold text-dark-900 mb-3">{item.title}</h3>
                    <p className="text-dark-700 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section - Modern */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white border-2 border-dark-100 rounded-2xl p-10 card-hover text-center">
              <div className="text-6xl font-extrabold text-gradient mb-6">100%</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                Transparent Process
              </h3>
              <p className="text-dark-600 leading-relaxed text-lg">
                You'll always know exactly what we're building, why we're building it, and how it works
              </p>
            </div>

            <div className="group relative bg-white border-2 border-dark-100 rounded-2xl p-10 card-hover text-center">
              <div className="text-6xl font-extrabold text-gradient mb-6">240%</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                Average ROI
              </h3>
              <p className="text-dark-600 leading-relaxed text-lg">
                Our clients see an average 240% return on their investment within the first year
              </p>
            </div>

            <div className="group relative bg-white border-2 border-dark-100 rounded-2xl p-10 card-hover text-center">
              <div className="text-6xl font-extrabold text-gradient mb-6">0</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4 group-hover:text-primary-600 transition-colors">
                Vendor Lock-In
              </h3>
              <p className="text-dark-600 leading-relaxed text-lg">
                We build systems you own and control. No proprietary platforms or hidden dependencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Modern */}
      <section className="relative section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-30"></div>
        
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Ready to Work <span className="text-gradient">Together?</span>
          </h2>
          <p className="text-xl md:text-2xl text-dark-200 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help you automate smarter and scale faster
          </p>
          
          <button
            onClick={() => window.open('https://wa.me/918187889752', '_blank')}
            className="group relative px-10 py-5 bg-gradient-to-r from-accent-green to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-accent-green/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden inline-flex items-center space-x-2"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Book a Free Call</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  )
}
