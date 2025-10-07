import { useState } from 'react'
import { ArrowRight, Filter } from 'lucide-react'

interface CaseStudiesProps {
  onNavigate: (page: string) => void
}

export default function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'fintech', label: 'Fintech' },
  ]

  const caseStudies = [
    {
      id: 1,
      category: 'ecommerce',
      title: 'E-commerce Revenue Acceleration',
      client: 'Fashion Retailer',
      industry: 'E-commerce',
      problem: 'The client was processing orders manually, leading to delays, errors, and customer complaints. They were losing sales due to slow fulfillment and had no visibility into inventory or customer behavior.',
      approach: 'We built a custom order management system with AI-powered inventory tracking and automated fulfillment workflows. Integrated with their existing e-commerce platform and shipping providers.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'n8n', 'Shopify API'],
      results: [
        '300% faster order processing',
        '95% reduction in fulfillment errors',
        '$250K+ additional revenue in 6 months',
        '40% improvement in customer satisfaction',
      ],
      metric: '+300%',
      metricLabel: 'Order Processing Speed',
      quote: 'Saketh AI transformed our operations. We went from manual chaos to automated efficiency in weeks.',
      author: 'Sarah Chen, Operations Director',
    },
    {
      id: 2,
      category: 'saas',
      title: 'Lead Qualification Automation',
      client: 'B2B SaaS Platform',
      industry: 'SaaS',
      problem: 'Sales team was spending 60% of their time qualifying low-quality leads. Only 15% of website visitors were converting to qualified opportunities.',
      approach: 'Designed and deployed an AI chatbot with intelligent lead scoring. The bot asks qualifying questions, scores leads based on responses, and routes hot leads directly to sales reps via Slack and CRM.',
      techStack: ['OpenAI GPT-4', 'n8n', 'HubSpot', 'Slack API', 'Python'],
      results: [
        '85% increase in qualified leads',
        '70% reduction in sales team time on qualification',
        '3x improvement in lead-to-customer conversion',
        '50% shorter sales cycle',
      ],
      metric: '+85%',
      metricLabel: 'Qualified Leads',
      quote: 'Our sales team now focuses on closing deals instead of chasing unqualified leads. Game changer.',
      author: 'Mark Peterson, VP of Sales',
    },
    {
      id: 3,
      category: 'healthcare',
      title: 'Patient Appointment System',
      client: 'Medical Clinic Network',
      industry: 'Healthcare',
      problem: 'Clinics were losing 30% of potential appointments due to phone tag and manual scheduling. No-show rates were high, and staff spent hours on administrative tasks.',
      approach: 'Built a mobile app for patients to book, reschedule, and receive reminders. Integrated automated SMS reminders and a waitlist system. Included telehealth video functionality.',
      techStack: ['React Native', 'Firebase', 'Twilio', 'Stripe', 'WebRTC'],
      results: [
        '50K+ app downloads in 3 months',
        '45% reduction in no-show rates',
        '80% of bookings now self-service',
        '25 hours per week saved per clinic',
      ],
      metric: '50K+',
      metricLabel: 'App Downloads',
      quote: 'The app has been transformational for our clinics and our patients love the convenience.',
      author: 'Dr. James Williams, Medical Director',
    },
    {
      id: 4,
      category: 'fintech',
      title: 'Financial Document Processing',
      client: 'Lending Platform',
      industry: 'Fintech',
      problem: 'Loan applications required manual review of hundreds of documents. Process took 5-7 days and was error-prone. Customers were abandoning applications.',
      approach: 'Implemented AI-powered document extraction and verification system. Automated data extraction, validation, and risk scoring. Built custom dashboard for loan officers.',
      techStack: ['Python', 'OCR API', 'Machine Learning', 'React', 'PostgreSQL'],
      results: [
        '90% reduction in processing time',
        '95% accuracy in document extraction',
        '2x increase in completed applications',
        '$1M+ in operational cost savings',
      ],
      metric: '90%',
      metricLabel: 'Faster Processing',
      quote: 'We can now approve loans in hours instead of days. Our customers are thrilled.',
      author: 'Lisa Anderson, COO',
    },
  ]

  const filteredStudies =
    selectedFilter === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedFilter)

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from businesses that automated with us
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-[#0EA5E9] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-[#071130] to-[#0A1A4A] text-white p-8 lg:p-10">
                    <div className="text-5xl font-bold text-[#22C55E] mb-2">
                      {study.metric}
                    </div>
                    <div className="text-lg text-gray-300 mb-8">{study.metricLabel}</div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <div className="text-sm text-gray-400">{study.industry}</div>
                  </div>

                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#071130] mb-2">The Problem</h4>
                        <p className="text-gray-700">{study.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#071130] mb-2">Our Approach</h4>
                        <p className="text-gray-700">{study.approach}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#071130] mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#071130] mb-3">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-[#22C55E] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0EA5E9]">
                        <p className="text-gray-700 italic mb-2">"{study.quote}"</p>
                        <p className="text-sm text-gray-600 font-medium">{study.author}</p>
                      </div>

                      <button
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-colors font-semibold"
                      >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can deliver similar results for your business
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-all font-semibold text-lg"
          >
            Book a Free Strategy Call
          </button>
        </div>
      </section>
    </div>
  )
}
