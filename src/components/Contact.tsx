'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Linkedin, MessageSquare, Send, Clock, Globe, Shield, Users, Code } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'contact@hameedafzal.com',
      href: 'mailto:contact@hameedafzal.com',
      color: 'gray'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/hameed-afzal-826998137/',
      color: 'gray'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Languages',
      value: 'English, Urdu, Punjabi',
      href: null,
      color: 'gray'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Availability',
      value: 'Open for opportunities',
      href: null,
      color: 'gray'
    }
  ]

  const services = [
    {
      title: 'Cybersecurity Consulting',
      description: 'Expert guidance on security strategy, risk management, and compliance',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'ISO Implementation',
      description: 'Complete implementation support for ISO 27001, 27701, 22301, 42001',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments and gap analysis',
      icon: <Send className="w-6 h-6" />
    },
    {
      title: 'Training & Awareness',
      description: 'Customized cybersecurity training programs for organizations',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Social Service Initiatives',
      description: 'Community-focused cybersecurity awareness and education programs',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Open Source Contributions',
      description: 'Active contributor to cybersecurity open source projects and tools',
      icon: <Code className="w-6 h-6" />
    }
  ]

  const schedulingOptions = [
    {
      title: '15-Minute Discovery Call',
      description: 'Quick consultation to discuss your cybersecurity needs',
      duration: '15 min',
      color: 'blue'
    },
    {
      title: '30-Minute Strategy Session',
      description: 'In-depth discussion about your security challenges and solutions',
      duration: '30 min',
      color: 'green'
    },
    {
      title: '1-Hour Consultation',
      description: 'Comprehensive security assessment and planning session',
      duration: '60 min',
      color: 'purple'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
    
    alert('Thank you for your message! I will get back to you soon.')
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      green: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      orange: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      purple: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      red: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      gray: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.gray
  }

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Let's connect to discuss how I can help your organization strengthen its cybersecurity posture and achieve compliance goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="w-8 h-8 text-gray-600" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Contact Information
            </h3>
          </div>

          <div className="grid gap-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${getColorClasses(info.color)}`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-slate-800 dark:text-white">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="space-y-4 mt-8">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
              Services I Offer
            </h4>
            <div className="grid gap-3">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-gray-600 dark:text-gray-400 mt-1">
                        {service.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-1">
                          {service.title}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <Send className="w-8 h-8 text-gray-600" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Send Message
            </h3>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Response */}
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800">
            <CardContent className="p-6">
              <div className="text-center space-y-3">
                <h4 className="font-semibold text-slate-800 dark:text-white">
                  Quick Response
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I typically respond to inquiries within 24-48 hours. For urgent matters, please feel free to call me directly.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>Response time: 24-48 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">
              Ready to Enhance Your Security Posture?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's work together to build a robust cybersecurity framework that protects your organization and drives business success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-600 hover:bg-gray-100"
              >
                Start a Conversation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                href="https://www.linkedin.com/in/hameed-afzal-826998137/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white text-white hover:bg-white hover:text-gray-600"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule a Call Section */}
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Schedule a Consultation
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Book a personalized consultation to discuss your cybersecurity needs and explore how I can help your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {schedulingOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  option.color === 'blue' ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400' :
                  option.color === 'green' ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400' :
                  'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}>
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {option.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {option.description}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Duration: {option.duration}
                  </div>
                  <Button 
                    size="sm"
                    className={`w-full ${
                      option.color === 'blue' ? 'bg-gray-600 hover:bg-gray-700' :
                      option.color === 'green' ? 'bg-gray-600 hover:bg-gray-700' :
                      'bg-gray-600 hover:bg-gray-700'
                    } text-white`}
                  >
                    Schedule Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Inquiries Section */}
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Service Inquiries
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have specific questions about my services? Send me your inquiries and I'll get back to you with detailed information.
          </p>
        </div>

        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Service Type *
                </label>
                <select
                  id="service-type"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option value="">Select a service</option>
                  <option value="Cybersecurity Consulting">Cybersecurity Consulting</option>
                  <option value="ISO Implementation">ISO Implementation</option>
                  <option value="Security Audits">Security Audits</option>
                  <option value="Risk Management">Risk Management</option>
                  <option value="AI Governance">AI Governance</option>
                  <option value="Third-Party Risk Management">Third-Party Risk Management</option>
                  <option value="Training & Awareness">Training & Awareness</option>
                  <option value="Social Service Initiatives">Social Service Initiatives</option>
                  <option value="Open Source Contributions">Open Source Contributions</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="inquiry-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Inquiry Details *
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 resize-none"
                  placeholder="Please describe your requirements, challenges, or questions..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Inquiry...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Contact