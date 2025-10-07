import { Calendar, Clock, Users, Video } from 'lucide-react';

export default function CourseDetails() {
  const details = [
    {
      icon: Calendar,
      label: 'Duration',
      value: '1 Month',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      label: 'Format',
      value: 'Hands-on Live Classes (Telugu)',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      label: 'Schedule',
      value: 'Monday to Friday | 1 Hour Daily',
      color: 'text-green-600'
    },
    {
      icon: Video,
      label: 'Access',
      value: 'Recorded Sessions for Lifetime',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Course <span className="gradient-text">Details</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our training program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.map((detail, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 group-hover:from-purple-100 group-hover:to-blue-100 transition-all duration-300`}>
                    <detail.icon className={`w-8 h-8 ${detail.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {detail.label}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      {detail.value}
                    </p>
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
