import { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(
        'https://n8n.srv954053.hstgr.cloud/webhook/get-syllabus',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'download_syllabus' }),
        }
      );
      
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'n8n-automation-syllabus.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert('Failed to download syllabus.');
    }
  };

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
    <div className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Course Curriculum
          </h2>
          <p className="text-xl text-gray-600">
            A comprehensive journey from basics to advanced automation
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {module.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-purple-600 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-4 flex-shrink-0"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Full Syllabus PDF
          </button>
        </div>
      </div>
    </div>
  );
}
