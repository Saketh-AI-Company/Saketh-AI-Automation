import { useState } from 'react'
import { Mail, Phone, MessageCircle, Send, MapPin, Loader2, Sparkles } from 'lucide-react'

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

export default function Contact() {
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
    <div>
      {/* Hero Section - Modern */}
      <section className="relative section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        
        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-200 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to transform your business with AI automation? Let's talk about your project
          </p>
        </div>
      </section>

      {/* Contact Form Section - Modern */}
      <section className="section-padding bg-gradient-to-b from-white to-dark-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-dark-900 mb-6">Contact Information</h2>
              <p className="text-dark-600 mb-10 text-lg leading-relaxed">
                Reach out through any of these channels. We typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="group p-6 bg-white border-2 border-dark-100 rounded-2xl hover:border-primary-200 transition-all card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-900 mb-2">Phone</h3>
                      <a
                        href="tel:+918187889752"
                        className="text-dark-600 hover:text-primary-600 transition-colors font-medium"
                      >
                        +91 8187889752
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white border-2 border-dark-100 rounded-2xl hover:border-primary-200 transition-all card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-900 mb-2">Email</h3>
                      <a
                        href="mailto:contact@sakethaiautomation.com"
                        className="text-dark-600 hover:text-primary-600 transition-colors font-medium break-all"
                      >
                        contact@sakethaiautomation.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white border-2 border-dark-100 rounded-2xl hover:border-accent-green/50 transition-all card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-green to-emerald-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-900 mb-2">WhatsApp</h3>
                      <a
                        href="https://wa.me/918187889752"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-600 hover:text-accent-green transition-colors font-medium"
                      >
                        Chat with us instantly
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white border-2 border-dark-100 rounded-2xl hover:border-primary-200 transition-all card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-900 mb-2">Location</h3>
                      <p className="text-dark-600 font-medium">
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative glass rounded-2xl p-6">
                  <h3 className="font-bold text-dark-900 mb-3 text-lg">Quick Response Guarantee</h3>
                  <p className="text-dark-700 leading-relaxed">
                    We respond to all inquiries within 24 hours on business days. For urgent matters,
                    call or WhatsApp us directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan rounded-3xl blur opacity-20"></div>
                <div className="relative glass rounded-3xl p-10">
                  <h2 className="text-3xl font-bold text-dark-900 mb-8">Let's get to know you</h2>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 text-sm">{submitError}</p>
                  </div>
                )}

                {submitted ? (
                  <div className="glass rounded-2xl p-12 text-center animate-scale-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-green to-emerald-500 text-white rounded-2xl mb-6 shadow-xl">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-dark-900 mb-4">Message Sent!</h3>
                    <p className="text-dark-600 text-lg">
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
        </div>
      </section>

      {/* Final Stats Section - Modern */}
      <section className="relative section-padding bg-gradient-to-br from-dark-900 via-dark-950 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-30"></div>
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold text-gradient mb-4 group-hover:scale-110 transition-transform">&lt; 24hrs</div>
              <p className="text-dark-200 text-lg font-medium">Average Response Time</p>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold text-gradient mb-4 group-hover:scale-110 transition-transform">100%</div>
              <p className="text-dark-200 text-lg font-medium">Free Consultations</p>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-extrabold text-gradient mb-4 group-hover:scale-110 transition-transform">No Obligation</div>
              <p className="text-dark-200 text-lg font-medium">Just Honest Advice</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}