import { Lightbulb, MessageCircle, CreditCard } from 'lucide-react';

export default function BatchFeatures() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Practical & Interactive Learning',
      description: 'No boring theory. Every session is hands-on with real projects you can implement immediately.',
    },
    {
      icon: MessageCircle,
      title: 'Personal Doubt Clearing',
      description: 'Dedicated Q&A sessions and one-on-one support to ensure you understand every concept.',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      description: 'Credit Card, Debit Card, and UPI payments accepted. Easy and secure checkout.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4">Why This <span className="text-violet-500">Batch?</span></h2>
        <p className="text-lg text-center text-gray-500 mb-16">
          We've designed everything with your success in mind
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-500 text-white mb-4 text-2xl shadow-sm">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
