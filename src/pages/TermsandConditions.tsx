export default function TermsandConditions() {
  return (
    <div className="bg-white">
      {/* Fixed header spacing */}
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              By using this website, you agree to these terms. Please review them regularly. The website, its content, and its services may change at any time.
            </p>
            
            <h2>Terms</h2>
            <ul>
              <li>Content is for general information only.</li>
              <li>No liability is accepted for use of information.</li>
              <li>Intellectual property rights remain with the site owner.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
