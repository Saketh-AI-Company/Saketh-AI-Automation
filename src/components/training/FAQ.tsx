import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need coding knowledge?',
      answer: 'No, absolutely not! This course is 100% beginner-friendly. n8n is a visual workflow builder, which means you create automation using a drag-and-drop interface. Anyone can learn, regardless of their technical background.'
    },
    {
      question: 'Will recordings be available?',
      answer: 'Yes! All live sessions will be recorded and made available to you for 1 year access. You can revisit any topic, watch at your own pace, and never miss out on any content.'
    },
    {
      question: 'Can I pay in installments?',
      answer: 'We understand financial flexibility matters. Please contact us directly at +91 8187889752 or email info@sakethaiautomation.com to discuss installment options that work for you.'
    },
    {
      question: 'What if I miss a live class?',
      answer: 'No worries! Since all sessions are recorded, you can catch up anytime. However, we highly recommend attending live sessions for real-time interaction and doubt clearing.'
    },
    {
      question: 'Is this course only in Telugu?',
      answer: 'Yes, this batch is specifically designed for Telugu-speaking learners. All live sessions, explanations, and Q&A will be conducted in Telugu for better understanding.'
    },
    {
      question: 'What kind of certification will I receive?',
      answer: 'Upon successful completion of the course and final project, you will receive a course completion certificate from Saketh AI Automation that you can add to your resume and LinkedIn profile.'
    },
    {
      question: 'Do I need any specific software or tools?',
      answer: 'You only need a computer with internet access and a web browser. n8n can be used online, and we will guide you through the entire setup process in the first session.'
    },
    {
      question: 'Can I get refund if I am not satisfied?',
      answer: 'No, we do not provide any refunds once the course has started. We encourage you to review the course details, syllabus, and connect with us for any questions before enrolling to ensure this course is the right fit for you.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the course
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
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
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}
