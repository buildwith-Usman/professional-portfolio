'use client'

import { useState } from 'react'
import { Award, Shield, CheckCircle, Star, Filter } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Certifications', count: 15 },
    { id: 'core', label: 'Core Security', count: 4 },
    { id: 'iso', label: 'ISO Standards', count: 6 },
    { id: 'management', label: 'Management', count: 2 },
    { id: 'technical', label: 'Technical', count: 3 },
  ]

  const certifications = [
    {
      id: 'cissp',
      name: 'Certified Information Systems Security Professional',
      acronym: 'CISSP',
      category: 'core',
      issuer: 'ISC²',
      description: 'Globally recognized standard of achievement in the information security profession.',
      icon: <Shield className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'cism',
      name: 'Certified Information Security Manager',
      acronym: 'CISM',
      category: 'core',
      issuer: 'ISACA',
      description: 'Management-focused certification that promotes international security practices.',
      icon: <Shield className="w-6 h-6" />,
      color: 'green'
    },
    {
      id: 'securityx',
      name: 'CompTIA SecurityX (CASP+)',
      acronym: 'SecurityX',
      category: 'core',
      issuer: 'CompTIA',
      description: 'Advanced-level cybersecurity certification for security architects and senior security engineers.',
      icon: <Shield className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 'pmp',
      name: 'Project Management Professional',
      acronym: 'PMP',
      category: 'management',
      issuer: 'PMI',
      description: 'Most important industry-recognized certification for project managers.',
      icon: <Star className="w-6 h-6" />,
      color: 'orange'
    },
    {
      id: 'iso27001',
      name: 'ISMS-ISO 27001 Lead Auditor',
      acronym: 'ISO 27001 LA',
      category: 'iso',
      issuer: 'ISO',
      description: 'Lead Auditor certification for Information Security Management Systems.',
      icon: <Award className="w-6 h-6" />,
      color: 'red'
    },
    {
      id: 'iso22301',
      name: 'BCMS-ISO 22301 Lead Auditor',
      acronym: 'ISO 22301 LA',
      category: 'iso',
      issuer: 'ISO',
      description: 'Lead Auditor certification for Business Continuity Management Systems.',
      icon: <Award className="w-6 h-6" />,
      color: 'red'
    },
    {
      id: 'iso27701',
      name: 'PIMS-ISO 27701 Lead Auditor',
      acronym: 'ISO 27701 LA',
      category: 'iso',
      issuer: 'ISO',
      description: 'Lead Auditor certification for Privacy Information Management Systems.',
      icon: <Award className="w-6 h-6" />,
      color: 'red'
    },
    {
      id: 'iso20000',
      name: 'ITSM-ISO 20000 Lead Auditor',
      acronym: 'ISO 20000 LA',
      category: 'iso',
      issuer: 'ISO',
      description: 'Lead Auditor certification for IT Service Management Systems.',
      icon: <Award className="w-6 h-6" />,
      color: 'red'
    },
    {
      id: 'iso9001',
      name: 'QMS-ISO 9001 Lead Auditor',
      acronym: 'ISO 9001 LA',
      category: 'iso',
      issuer: 'ISO',
      description: 'Lead Auditor certification for Quality Management Systems.',
      icon: <Award className="w-6 h-6" />,
      color: 'red'
    },
    {
      id: 'iso42001',
      name: 'AIMS-ISO 42001 Lead Auditor',
      acronym: 'ISO 42001 LA',
      category: 'iso',
      issuer: 'ISO',
      description: 'Lead Auditor certification for Artificial Intelligence Management Systems.',
      icon: <Award className="w-6 h-6" />,
      color: 'red'
    },
    {
      id: 'soc2',
      name: 'SOC2 Implementer',
      acronym: 'SOC2',
      category: 'management',
      issuer: 'AICPA',
      description: 'Implementation expertise for SOC 2 compliance frameworks.',
      icon: <Star className="w-6 h-6" />,
      color: 'orange'
    },
    {
      id: 'ceh',
      name: 'Certified Ethical Hacker',
      acronym: 'CEH',
      category: 'technical',
      issuer: 'EC-Council',
      description: 'Comprehensive ethical hacking and network security training program.',
      icon: <Shield className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 'chfi',
      name: 'Digital Forensics Certification',
      acronym: 'CHFI',
      category: 'technical',
      issuer: 'EC-Council',
      description: 'Computer Hacking Forensic Investigator certification.',
      icon: <Shield className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 'cisa',
      name: 'Certified Information Systems Auditor',
      acronym: 'CISA',
      category: 'core',
      issuer: 'ISACA',
      description: 'World-renowned certification for IS audit control, assurance and security professionals.',
      icon: <Shield className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'crisc',
      name: 'Certified in Risk and Information Systems Control',
      acronym: 'CRISC',
      category: 'core',
      issuer: 'ISACA',
      description: 'Certification for IT risk management and control professionals.',
      icon: <Shield className="w-6 h-6" />,
      color: 'blue'
    }
  ]

  const filteredCertifications = activeCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory)

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Professional Certifications
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          A comprehensive collection of industry-recognized certifications demonstrating expertise across cybersecurity, governance, risk management, and compliance domains.
        </p>
      </div>

      {/* Certification Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Certifications</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">6</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">ISO Standards</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Core Security</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">5</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Active</div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 ${
              activeCategory === category.id 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>{category.label}</span>
            <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 rounded-full text-xs">
              {category.count}
            </span>
          </Button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map((cert) => (
          <Card 
            key={cert.id} 
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`p-2 rounded-lg ${getColorClasses(cert.color)}`}>
                  {cert.icon}
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-800 dark:text-white">
                    {cert.acronym}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </div>
                </div>
              </div>
              <CardTitle className="text-lg text-slate-800 dark:text-white">
                {cert.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {cert.description}
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                  Active Certification
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certification Journey */}
      <Card className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Certification Journey
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              My certification journey reflects a commitment to continuous learning and professional excellence. Each certification represents a milestone in mastering different aspects of cybersecurity, from technical implementation to strategic governance and risk management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white">Technical Expertise</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white">Standards Compliance</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white">Strategic Leadership</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Certifications