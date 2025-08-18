'use client'

import { useState } from 'react'
import { Shield, CheckCircle, Award, TrendingUp, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'achievements', label: 'Achievements' },
  ]

  const expertise = [
    'Cybersecurity GRC (Governance, Risk & Compliance)',
    'ISO Standards Implementation (27001, 27701, 22301, 42001)',
    'AI Security & Governance (AIMS)',
    'Data Privacy & Protection (PDPPL, GDPR)',
    'Cloud Security & Compliance',
    'Risk Management & Assessment',
    'Security Audits & Compliance',
    'Incident Response & Management',
  ]

  const achievements = [
    '15+ Industry Certifications including CISSP, CISM, PMP',
    '6+ Years of Cybersecurity Experience',
    'Master\'s in Cybersecurity (NUST)',
    'Active Member of PDPPL Data Privacy Law Working Group',
    'Led Multiple ISO Implementation Projects',
    'Specialized in AI Security & Governance',
    'Extensive Experience in SOC Governance',
    'Proven Track Record in Cybersecurity Consulting',
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                Hameed Afzal
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300">
              Information Security Professional
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                CISSP
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                CISM
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                PMP
              </span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
                SecurityX (CASP+)
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="space-y-4">
            <div className="flex space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    A highly skilled and certified Cybersecurity and AI GRC Professional with a Master's degree and 6+ years of experience specializing in governance, risk management, and compliance (GRC). Proven expertise in developing and implementing cybersecurity strategies, risk management frameworks, and compliance programs aligned with global standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Doha, Qatar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">15+ Certifications</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'expertise' && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Core Expertise</h3>
                  <div className="grid gap-2">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Key Achievements</h3>
                  <div className="grid gap-2">
                    {achievements.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-600 hover:bg-gray-700 text-white"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              View Experience
            </Button>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  <Shield className="w-10 h-10 text-gray-600 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Cybersecurity Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Delivering comprehensive security solutions for modern enterprises
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">ISO Standards</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero