export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Fixed header spacing - increased from h-20 to pt-24 */}
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              We value your privacy. This policy describes how your personal data is handled. By using our site, you agree to this policy.
            </p>
            
            <h2>Information Collection</h2>
            <ul>
              <li>We do not sell or share your information.</li>
              <li>Your data is used to improve the site only.</li>
              <li>Contact us for privacy questions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
