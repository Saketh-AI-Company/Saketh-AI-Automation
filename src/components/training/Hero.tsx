import { Sparkles, Download } from 'lucide-react'

export default function Hero() {
  // Download syllabus handler with n8n webhook POST
  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(
        'https://n8n.srv954053.hstgr.cloud/webhook/get-syllabus',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'download_syllabus' }),
        }
      )

      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'n8n-automation-syllabus.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      alert('Failed to download syllabus.')
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-dark-900 via-dark-950 to-black overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Hero content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center section-padding">
        {/* Telugu Batch badge */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium py-2 px-5 rounded-full">
            <Sparkles className="w-4 h-4" />
            Telugu Batch Starting Soon
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
          n8n AI Automation{' '}
          <span className="bg-gradient-to-r from-primary-400 via-accent-cyan to-accent-purple bg-clip-text text-transparent">
            Telugu Batch
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-dark-200 max-w-3xl mb-12 leading-relaxed animate-fade-in-up font-light">
          Learn 15+ Real-Time AI Automation Projects
          <br />
          No Coding Required. 100% Beginner Friendly.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up">
          <a
            href="https://wa.me/918187889752"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-accent-green to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-accent-green/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden inline-flex items-center space-x-2"
          >
            <span className="relative z-10">Join Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <button
            onClick={handleDownloadPDF}
            className="group px-8 py-4 glass-dark border-2 border-white/30 rounded-xl hover:border-white/50 text-white font-semibold text-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Syllabus PDF</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl animate-fade-in">
          {[
            { value: '15+', label: 'Projects' },
            { value: '1', label: 'Month' },
            { value: '100%', label: 'Practical' },
            { value: '1 Year', label: 'Access' },
          ].map((item, idx) => (
            <div key={idx} className="group text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gradient mb-3 group-hover:scale-110 transition-transform">
                {item.value}
              </div>
              <div className="text-base sm:text-lg text-dark-200 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
