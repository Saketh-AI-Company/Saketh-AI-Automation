export default function Disclaimer() {
  return (
    <div className="bg-white">
      {/* Fixed header spacing */}
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              The information on this website is general and for your convenience. We do not guarantee accuracy or completeness of any information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
