import { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const modules = [
    {
      title: 'Module 1: Introduction to n8n',
      topics: [
        'What is n8n and why automation matters',
        'Setting up your n8n environment',
        'Understanding workflows and nodes',
        'Your first automation project'
      ]
    },
    {
      title: 'Module 2: AI Integrations',
      topics: [
        'Connecting ChatGPT and other LLMs',
        'Working with AI APIs',
        'Building intelligent automation workflows',
        'Text generation and processing'
      ]
    },
    {
      title: 'Module 3: WhatsApp Automation',
      topics: [
        'Setting up WhatsApp Business API',
        'Automated message responses',
        'Customer engagement workflows',
        'Integration with CRM systems'
      ]
    },
    {
      title: 'Module 4: Social Media Automation',
      topics: [
        'Auto-posting to multiple platforms',
        'Content scheduling and management',
        'Analytics and reporting automation',
        'Social listening workflows'
      ]
    },
    {
      title: 'Module 5: Lead Generation',
      topics: [
        'Automated lead capture systems',
        'Form submissions and data processing',
        'Email marketing automation',
        'Lead nurturing workflows'
      ]
    },
    {
      title: 'Module 6: Final Project & Certification',
      topics: [
        'End-to-end automation project',
        'Best practices and optimization',
        'Deployment and maintenance',
        'Course completion certificate'
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Course <span className="gradient-text">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive journey from basics to advanced automation
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {module.title}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 pt-2">
                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Full Syllabus PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
