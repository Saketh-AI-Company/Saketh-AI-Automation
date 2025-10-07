import { useState } from 'react'
import { Mail, Phone, MessageCircle, Send, MapPin, Loader2 } from 'lucide-react'

interface ContactProps {
  onNavigate: (page: string) => void
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  role: string
  companyName: string
  website: string
  countryCode: string
  phoneNumber: string
  companySize: string
  annualRevenue: string
  projectBudget: string
  message: string
  agreeToTerms: boolean
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    companyName: '',
    website: '',
    countryCode: '+91',
    phoneNumber: '',
    companySize: '',
    annualRevenue: '',
    projectBudget: '',
    message: '',
    agreeToTerms: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // N8N webhook URL
  const N8N_WEBHOOK_URL = 'https://n8n.srv954053.hstgr.cloud/webhook/contact-form'

  // Country codes with shorter labels for better UI
  const countryCodes = [
    // India
    { code: '+91', label: '+91', fullLabel: 'India (+91)' },
    
    // USA
    { code: '+1', label: '+1', fullLabel: 'USA (+1)' },
    
    // UK
    { code: '+44', label: '+44', fullLabel: 'UK (+44)' },
    
    // Europe
    { code: '+49', label: '+49', fullLabel: 'Germany (+49)' },
    { code: '+33', label: '+33', fullLabel: 'France (+33)' },
    { code: '+39', label: '+39', fullLabel: 'Italy (+39)' },
    { code: '+34', label: '+34', fullLabel: 'Spain (+34)' },
    { code: '+31', label: '+31', fullLabel: 'Netherlands (+31)' },
    { code: '+32', label: '+32', fullLabel: 'Belgium (+32)' },
    { code: '+41', label: '+41', fullLabel: 'Switzerland (+41)' },
    { code: '+43', label: '+43', fullLabel: 'Austria (+43)' },
    { code: '+46', label: '+46', fullLabel: 'Sweden (+46)' },
    { code: '+47', label: '+47', fullLabel: 'Norway (+47)' },
    { code: '+45', label: '+45', fullLabel: 'Denmark (+45)' },
    { code: '+358', label: '+358', fullLabel: 'Finland (+358)' },
    
    // Australia & New Zealand
    { code: '+61', label: '+61', fullLabel: 'Australia (+61)' },
    { code: '+64', label: '+64', fullLabel: 'New Zealand (+64)' },
    
    // Singapore
    { code: '+65', label: '+65', fullLabel: 'Singapore (+65)' },
    
    // Middle East
    { code: '+971', label: '+971', fullLabel: 'UAE (+971)' },
    { code: '+966', label: '+966', fullLabel: 'Saudi Arabia (+966)' },
    { code: '+974', label: '+974', fullLabel: 'Qatar (+974)' },
    { code: '+973', label: '+973', fullLabel: 'Bahrain (+973)' },
    { code: '+965', label: '+965', fullLabel: 'Kuwait (+965)' },
    { code: '+968', label: '+968', fullLabel: 'Oman (+968)' },
    { code: '+962', label: '+962', fullLabel: 'Jordan (+962)' },
    { code: '+961', label: '+961', fullLabel: 'Lebanon (+961)' },
  ]

  // Dropdown options based on screenshots
  const companySizeOptions = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-500 employees",
    "501+ employees"
  ]

  const annualRevenueOptions = [
    "Less than $1M",
    "$1M - $10M",
    "$10M - $50M", 
    "$50M - $100M",
    "$100M+"
  ]

  const projectBudgetOptions = [
    "Less than $20K",
    "$20K - $50K",
    "$50K - $100K",
    "$100K - $200K",
    "$200K - $500K",
    "$500K+"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    // Validation for required fields
    if (!formData.agreeToTerms) {
      setSubmitError('Please agree to terms and conditions')
      setIsSubmitting(false)
      return
    }

    try {
      // Send data to N8N webhook
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          fullName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          role: formData.role,
          companyName: formData.companyName,
          website: formData.website,
          countryCode: formData.countryCode,
          phoneNumber: formData.phoneNumber,
          fullPhoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
          companySize: formData.companySize,
          annualRevenue: formData.annualRevenue,
          projectBudget: formData.projectBudget,
          message: formData.message,
          agreeToTerms: formData.agreeToTerms,
          timestamp: new Date().toISOString(),
          source: 'contact-form'
        }),
      })

      if (response.ok) {
        // Success - show success message
        setSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            companyName: '',
            website: '',
            countryCode: '+91',
            phoneNumber: '',
            companySize: '',
            annualRevenue: '',
            projectBudget: '',
            message: '',
            agreeToTerms: false,
          })
        }, 3000)
      } else {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI automation? Let's talk about your project
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#071130] mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out through any of these channels. We typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071130] mb-1">Phone</h3>
                    <a
                      href="tel:+918187889752"
                      className="text-gray-600 hover:text-[#0EA5E9] transition-colors"
                    >
                      +91 8187889752
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071130] mb-1">Email</h3>
                    <a
                      href="mailto:contact@saketh.ai"
                      className="text-gray-600 hover:text-[#0EA5E9] transition-colors"
                    >
                      contact@sakethaiautomation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071130] mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/918187889752"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#22C55E] transition-colors"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#071130] mb-1">Location</h3>
                    <p className="text-gray-600">
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#0EA5E9]/10 to-[#22C55E]/10 rounded-xl border border-[#0EA5E9]/20">
                <h3 className="font-bold text-[#071130] mb-3">Quick Response Guarantee</h3>
                <p className="text-sm text-gray-700">
                  We respond to all inquiries within 24 hours on business days. For urgent matters,
                  call or WhatsApp us directly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#071130] mb-6">Let's get to know you</h2>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 text-sm">{submitError}</p>
                  </div>
                )}

                {submitted ? (
                  <div className="bg-[#22C55E]/10 border border-[#22C55E] rounded-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#22C55E] text-white rounded-full mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#071130] mb-2">Message Sent!</h3>
                    <p className="text-gray-700">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-[#071130] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                          placeholder="Jane"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-[#071130] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#071130] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="example@gmail.com"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-[#071130] mb-2">
                        Your Role within Organization *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="e.g., CTO, Project Manager, etc."
                      />
                    </div>

                    {/* Company Name and Website */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-semibold text-[#071130] mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-sm font-semibold text-[#071130] mb-2">
                          Website <span className="text-gray-500">(Optional)</span>
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>

                    {/* Phone Number - Fixed Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#071130] mb-2">
                          Phone Number *
                        </label>
                        <div className="flex">
                          {/* Country Code Dropdown - Fixed Width */}
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-28 px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed bg-white text-sm border-r-0"
                          >
                            {countryCodes.map((country) => (
                              <option key={country.code} value={country.code} title={country.fullLabel}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                          {/* Phone Number Input - Flex Grow */}
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed border-l-0"
                            placeholder="1234567890"
                          />
                        </div>
                      </div>

                      {/* Company Size */}
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-semibold text-[#071130] mb-2">
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                          <option value="">Select company size</option>
                          {companySizeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Annual Revenue and Project Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="annualRevenue" className="block text-sm font-semibold text-[#071130] mb-2">
                          Annual Revenue <span className="text-gray-500">(Optional)</span>
                        </label>
                        <select
                          id="annualRevenue"
                          name="annualRevenue"
                          value={formData.annualRevenue}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                          <option value="">Select annual revenue</option>
                          {annualRevenueOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="projectBudget" className="block text-sm font-semibold text-[#071130] mb-2">
                          Project Budget *
                        </label>
                        <select
                          id="projectBudget"
                          name="projectBudget"
                          required
                          value={formData.projectBudget}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                        >
                          <option value="">Select project budget</option>
                          {projectBudgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#071130] mb-2">
                        How Can We Help? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Please describe your project needs and how we can assist you"
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        required
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="mt-1 h-4 w-4 text-[#0EA5E9] focus:ring-[#0EA5E9] border-gray-300 rounded disabled:cursor-not-allowed"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                        I agree to the terms and conditions of the company{' '}
                        {/*<a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0EA5E9] hover:underline"
                        >
                          terms and conditions
                        </a>*/}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[#22C55E] text-white rounded-lg hover:bg-[#16A34A] transition-colors font-semibold text-lg flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className="py-20 bg-gradient-to-br from-[#071130] via-[#0A1A4A] to-[#071130] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#22C55E] mb-2">&lt; 24hrs</div>
              <p className="text-gray-300">Average Response Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#22C55E] mb-2">100%</div>
              <p className="text-gray-300">Free Consultations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#22C55E] mb-2">No Obligation</div>
              <p className="text-gray-300">Just Honest Advice</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}