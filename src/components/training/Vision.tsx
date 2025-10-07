import { Cog, Globe, Bot, ArrowRight } from 'lucide-react';

export default function Vision() {
  const revolutions = [
    {
      icon: Cog,
      era: '1760s',
      name: 'Industrial Revolution',
      description: 'Handmade to machine-driven'
    },
    {
      icon: Globe,
      era: '1990s',
      name: 'Internet Revolution',
      description: 'Letters to one-click emails'
    },
    {
      icon: Bot,
      era: '2020s',
      name: 'AI Revolution',
      description: 'Manual tasks to automated operations'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The AI <span className="gradient-text">Revolution</span> is Here
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Remember, AI is not about replacing jobs — it's about{' '}
                <span className="font-bold text-purple-600">supercharging humans</span>{' '}
                to achieve more in less time.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                A task that once took 95 minutes can now be done in 5 minutes. Imagine the
                scalability your team can bring when they achieve{' '}
                <span className="font-bold">10x more daily</span>.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  History has always been defined by revolutions:
                </h3>
                <div className="space-y-4">
                  {revolutions.map((rev, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-lg">
                        <rev.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {rev.era} – {rev.name}
                        </div>
                        <div className="text-gray-600 text-sm">{rev.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                But AI isn't cold or robotic. It's the opposite. It gives us back what matters
                most: <span className="font-bold text-purple-600">Time.</span>
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Time to think, create, innovate, and spend with loved ones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-10 rounded-3xl shadow-2xl text-white">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">The Future is Now</h3>

                <p className="text-lg leading-relaxed text-white/90">
                  Businesses embracing AI today are preparing to lead tomorrow.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <p className="text-xl font-semibold mb-2">
                    The future isn't about humans vs AI.
                  </p>
                  <p className="text-2xl font-bold">
                    The future is about <span className="text-yellow-300">humans with AI.</span>
                  </p>
                </div>

                <p className="text-lg leading-relaxed text-white/90">
                  Ready to scale into the AI-powered future?
                </p>

               <a
  href="https://wa.me/918187889752"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
>
  Book a Free Call
  <ArrowRight className="w-5 h-5" />
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
