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
          value: 'Recorded Sessions for 1 Year',
          color: 'text-orange-600'
        }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-dark-50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
              Course <span className="text-gradient">Details</span>
            </h2>
            <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
              Everything you need to know about our training program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {details.map((detail, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-dark-100 p-8 rounded-2xl card-hover"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 group-hover:scale-110 transition-transform duration-300`}>
                    <detail.icon className={`w-8 h-8 ${detail.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark-600 mb-3">
                      {detail.label}
                    </h3>
                    <p className="text-xl font-bold text-dark-900">
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
