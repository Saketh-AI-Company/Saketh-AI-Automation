import { Check, ArrowRight, HelpCircle } from 'lucide-react'

interface PricingProps {
  onNavigate: (page: string) => void
}

export default function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and MVPs',
      price: 'Custom',
      features: [
        'Landing page or simple website',
        'Basic automation setup (1-2 workflows)',
        'Mobile responsive design',
        'SEO basics',
        '1 month support',
        'Documentation & training',
      ],
      notIncluded: ['Mobile app', 'Advanced AI features', 'Dedicated support'],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      description: 'For scaling businesses ready to automate',
      price: 'Custom',
      features: [
        'Full website or mobile app',
        'AI agent integration (3-5 workflows)',
        'CRM & tool integrations',
        'Analytics & reporting dashboard',
        'Email & SMS automation',
        '3 months support',
        'Priority support',
        'Team training sessions',
      ],
      notIncluded: ['White-glove onboarding', 'Dedicated account manager'],
      cta: 'Contact Sales',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      price: 'Custom',
      features: [
        'Custom architecture & design',
        'Unlimited automation workflows',
        'Advanced AI & machine learning',
        'Multi-platform applications',
        'Dedicated support team',
        '12 months support',
        'White-glove onboarding',
        'Quarterly strategy reviews',
        'SLA guarantees',
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  const faqs = [
    {
      question: 'How do you determine pricing?',
      answer:
        'We price based on project scope, complexity, and timeline. After understanding your needs, we provide a detailed proposal with fixed pricing and deliverables.',
    },
    {
      question: 'What payment terms do you offer?',
      answer:
        'We typically work with milestone-based payments: 30% upfront, 40% at midpoint, and 30% on completion. For enterprise clients, we can discuss custom terms.',
    },
    {
      question: 'Do you offer ongoing maintenance?',
      answer:
        'Yes! All plans include support periods, and we offer monthly retainers for ongoing maintenance, updates, and optimization.',
    },
    {
      question: 'Can I start small and scale up?',
      answer:
        'Absolutely. Many clients start with a Starter project and expand as they see results. We design systems to be scalable from day one.',
    },
    {
      question: 'What if I need changes during development?',
      answer:
        'We include reasonable revisions in our scope. Major changes are handled via change orders to keep projects on track and transparent.',
    },
    {
      question: 'Do you work with startups?',
      answer:
        'Yes! We love working with startups and understand the need for speed and budget consciousness. We can help you build MVPs quickly.',
    },
  ]

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All pricing is customized based on your specific requirements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.highlighted ? 'ring-2 ring-[#0EA5E9] scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-[#0EA5E9] text-white text-center py-2 font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#071130] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-[#0EA5E9]">{plan.price}</div>
                    <div className="text-sm text-gray-600">Based on project scope</div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-[#071130] mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div className="mb-8 pb-8 border-b border-gray-200">
                      <h4 className="font-semibold text-[#071130] mb-4">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400">×</div>
                            <span className="text-gray-500 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-[#0EA5E9] text-white hover:bg-[#0284C7]'
                        : 'bg-gray-100 text-[#0EA5E9] hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">
              What's Included in Every Project
            </h2>
            <p className="text-xl text-gray-600">
              Regardless of the plan you choose, you always get
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Discovery & Planning',
                description: 'In-depth consultation to understand your goals and requirements',
              },
              {
                title: 'Custom Development',
                description: 'Tailored solutions built specifically for your business',
              },
              {
                title: 'Quality Assurance',
                description: 'Thorough testing to ensure everything works perfectly',
              },
              {
                title: 'Documentation',
                description: 'Clear documentation so you understand how everything works',
              },
              {
                title: 'Training',
                description: 'Hands-on training for your team to use and maintain the system',
              },
              {
                title: 'Post-Launch Support',
                description: 'Support period to ensure smooth operation after launch',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Check className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#071130] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-[#0EA5E9] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#071130] mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-colors font-semibold"
            >
              <span>Schedule a Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free consultation and we'll create a custom proposal for your project
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
