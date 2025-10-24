import { Rocket, Key, Video, Code, FileText, Sparkles, MessageCircle } from 'lucide-react';

export default function WhatYouGet() {
  const benefits = [
    {
      icon: Rocket,
      title: '15+ Real-Time AI Automation Projects',
      description: 'Build practical automation workflows that you can use in real business scenarios'
    },
    {
      icon: Key,
      title: 'Access to Basic LLM APIs',
      description: 'Get hands-on experience with leading AI APIs and language models'
    },
    {
      icon: Video,
      title: 'Recorded Sessions for 1 Year',
      description: 'Learn at your own pace with 1 year access to all session recordings'
    },
    {
      icon: Code,
      title: 'No Coding Skills Required',
      description: 'Perfect for beginners - learn powerful automation without writing code'
    },
    {
      icon: FileText,
      title: 'Syllabus PDF Available',
      description: 'Comprehensive curriculum document with detailed module breakdowns'
    },
    {
      icon: Sparkles,
      title: 'Interactive & Practical Sessions',
      description: 'Learn by doing with live demonstrations and hands-on exercises'
    },
    {
      icon: MessageCircle,
      title: 'Dedicated Q&A Support',
      description: 'Get your doubts cleared with personalized support throughout the course'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4">What You'll Get</h2>
        <p className="text-lg text-center text-gray-500 mb-16">
          Comprehensive training packed with value
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-start"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-500 text-white mb-4 text-2xl shadow-sm">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
