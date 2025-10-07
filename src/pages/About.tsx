import { Target, Lightbulb, Users, Award } from 'lucide-react'

interface AboutProps {
  onNavigate: (page: string) => void
}

export default function About({ onNavigate }: AboutProps) {
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
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Saketh AI Automation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to help businesses leverage AI and automation to work smarter, scale faster, and achieve more
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
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

            <div className="bg-gradient-to-br from-[#071130] to-[#0A1A4A] rounded-xl p-8 text-white">
              <div className="mb-6">
                <div className="w-24 h-24 bg-[#0EA5E9] rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4">
                  SA
                </div>
                <h3 className="text-2xl font-bold mb-2">Saketh</h3>
                <p className="text-gray-300">Founder & Lead Engineer</p>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "I believe technology should empower people, not confuse them. Every solution we
                build is designed to be understandable, maintainable, and scalable. My goal is to
                help you automate the boring stuff so you can focus on what matters: growing your
                business and serving your customers."
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#22C55E]">100+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#22C55E]">95+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0EA5E9] text-white rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#071130] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From solo consultant to trusted automation partner
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#0EA5E9] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#071130] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0EA5E9] mb-4">100%</div>
              <h3 className="text-xl font-bold text-[#071130] mb-2">Transparent Process</h3>
              <p className="text-gray-600">
                You'll always know exactly what we're building, why we're building it, and how it works
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[#0EA5E9] mb-4">240%</div>
              <h3 className="text-xl font-bold text-[#071130] mb-2">Average ROI</h3>
              <p className="text-gray-600">
                Our clients see an average 240% return on their investment within the first year
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[#0EA5E9] mb-4">0</div>
              <h3 className="text-xl font-bold text-[#071130] mb-2">Vendor Lock-In</h3>
              <p className="text-gray-600">
                We build systems you own and control. No proprietary platforms or hidden dependencies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you automate smarter and scale faster
          </p>
          <button
  onClick={() => window.open('https://wa.me/918187889752', '_blank')}
  className="px-8 py-4 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-all font-semibold text-lg"
>
  Book a Free Call
</button>

        </div>
      </section>
    </div>
  )
}
