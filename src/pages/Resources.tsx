import { BookOpen, Video, FileText, ArrowRight } from 'lucide-react'

interface ResourcesProps {
  onNavigate: (page: string) => void
}

export default function Resources({ onNavigate }: ResourcesProps) {
  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'videos', label: 'Videos' },
    { id: 'guides', label: 'Guides' },
  ]

  const resources = [
    {
      type: 'tutorial',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Building AI Agents with n8n',
      description:
        'Step-by-step guide to creating your first AI automation workflow using n8n and OpenAI',
      category: 'AI Automation',
      readTime: '15 min read',
      featured: true,
    },
    {
      type: 'video',
      icon: <Video className="w-6 h-6" />,
      title: 'Lead Qualification Bot Demo',
      description:
        'Watch how we built an intelligent chatbot that qualifies leads and routes them to sales',
      category: 'AI Agents',
      duration: '12 min',
      featured: true,
    },
    {
      type: 'guide',
      icon: <FileText className="w-6 h-6" />,
      title: 'Choosing the Right Tech Stack',
      description:
        'A comprehensive guide to selecting technologies for your web or mobile application',
      category: 'Development',
      readTime: '20 min read',
      featured: false,
    },
    {
      type: 'tutorial',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Automating Customer Support with AI',
      description:
        'Learn how to build a customer support system that handles 80% of common questions',
      category: 'AI Automation',
      readTime: '18 min read',
      featured: false,
    },
    {
      type: 'video',
      icon: <Video className="w-6 h-6" />,
      title: 'n8n + Slack Integration Tutorial',
      description:
        'Connect n8n to Slack and automate team notifications, data collection, and more',
      category: 'Integrations',
      duration: '15 min',
      featured: false,
    },
    {
      type: 'guide',
      icon: <FileText className="w-6 h-6" />,
      title: 'ROI of Business Automation',
      description:
        'Calculate the financial impact of automating your business processes',
      category: 'Strategy',
      readTime: '10 min read',
      featured: false,
    },
    {
      type: 'tutorial',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Webhook Automation for E-commerce',
      description:
        'Set up webhooks to automate order processing, inventory updates, and customer notifications',
      category: 'E-commerce',
      readTime: '12 min read',
      featured: false,
    },
    {
      type: 'video',
      icon: <Video className="w-6 h-6" />,
      title: 'Building a Custom CRM Integration',
      description:
        'Step-by-step walkthrough of connecting your automation to HubSpot, Salesforce, or custom CRM',
      category: 'Integrations',
      duration: '20 min',
      featured: false,
    },
    {
      type: 'guide',
      icon: <FileText className="w-6 h-6" />,
      title: 'Mobile App Development Best Practices',
      description:
        'Essential principles for building mobile apps that users love',
      category: 'Development',
      readTime: '15 min read',
      featured: false,
    },
  ]

  const featuredResources = resources.filter((r) => r.featured)
  const otherResources = resources.filter((r) => !r.featured)

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Hub</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Free tutorials, guides, and videos to help you master AI automation and build better digital products
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#071130] mb-8">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center">
                    <div className="text-white">{resource.icon}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-xs font-semibold uppercase">
                        {resource.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {resource.duration || resource.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#071130] mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <button className="inline-flex items-center space-x-2 text-[#0EA5E9] hover:text-[#0284C7] font-semibold">
                      <span>{resource.type === 'video' ? 'Watch Now' : 'Read More'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#071130] mb-8">All Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-lg mb-4">
                    {resource.icon}
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold uppercase">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#071130] mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.duration || resource.readTime}
                    </span>
                    <button className="text-[#0EA5E9] hover:text-[#0284C7] font-semibold text-sm">
                      {resource.type === 'video' ? 'Watch' : 'Read'} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#071130] to-[#0A1A4A] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly tutorials, automation tips, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
              />
              <button className="px-6 py-3 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071130] mb-6">
            Need Custom Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can build custom automation solutions tailored to your business
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0284C7] transition-all font-semibold text-lg"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
