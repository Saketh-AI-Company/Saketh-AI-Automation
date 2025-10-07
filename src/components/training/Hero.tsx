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
    <section className="relative bg-gradient-to-br from-purple-600 to-indigo-600">
      {/* Spacer to offset fixed header */}
      <div className="h-16 md:h-20 lg:h-24" />

      {/* Hero content filling viewport minus header */}
      <div className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center px-4 text-center">
        {/* Telugu Batch badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 bg-white/20 text-white text-xs sm:text-sm font-medium py-1 px-3 rounded-full backdrop-blur-sm">
            <Sparkles />
            Telugu Batch Starting Soon
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          n8n AI Automation{' '}
          <span className="text-yellow-300">Telugu Batch</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
          Learn 15+ Real-Time AI Automation Projects
          <br />
          No Coding Required. 100% Beginner Friendly.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/Contact"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Join Now
          </a>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition"
          >
            <Download />
            Download Syllabus PDF
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 max-w-4xl">
          {[
            { value: '15+', label: 'Projects' },
            { value: '1', label: 'Month' },
            { value: '100%', label: 'Practical' },
            { value: '∞', label: 'Lifetime Access' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {item.value}
              </div>
              <div className="text-sm sm:text-base text-white/90">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
