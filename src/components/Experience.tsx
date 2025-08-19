'use client'

import { useState } from 'react'
import { Shield, CheckCircle, TrendingUp, Award, Book, Globe, Clock, Users, Target, Settings, Cloud, Lock, FileText, BarChart, Brain, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Experience = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const experienceCategories = [
    {
      id: 'ai-governance',
      title: 'AI Governance & Risk Management',
      icon: <Brain className="w-6 h-6" />,
      color: 'purple',
      description: 'Specialized expertise in Artificial Intelligence governance frameworks and risk assessment methodologies.',
      items: [
        {
          title: 'AI Governance Framework Development',
          description: 'Developed comprehensive AI governance frameworks aligned with international standards and best practices.',
          highlights: ['ISO 42001 AIMS Implementation', 'AI Risk Assessment Methodologies', 'AI System Impact Assessments', 'AI Governance Policies']
        },
        {
          title: 'AI Risk Management',
          description: 'Expert in AI-specific risk management frameworks and assessment techniques.',
          highlights: ['AI RMF Implementation', 'Machine Learning Security', 'Algorithm Bias Assessment', 'AI Supply Chain Risk Management']
        },
        {
          title: 'Author - Third Party Risk Management in the Era of AI',
          description: 'Published author focusing on evolving third-party risk challenges in AI-driven environments.',
          highlights: ['AI Vendor Risk Assessment', 'AI Contract Review Frameworks', 'AI Compliance Monitoring', 'AI Third-Party Due Diligence']
        }
      ]
    },
    {
      id: 'risk-management',
      title: 'Risk Management Frameworks',
      icon: <Target className="w-6 h-6" />,
      color: 'orange',
      description: 'Comprehensive experience across multiple risk management frameworks and methodologies.',
      items: [
        {
          title: 'NIST Cybersecurity Framework (CSF)',
          description: 'Extensive implementation and assessment experience with NIST CSF across various industries.',
          highlights: ['CSF Implementation', 'CSF Maturity Assessments', 'CSF Gap Analysis', 'CSF Continuous Monitoring']
        },
        {
          title: 'Risk Management Framework (RMF)',
          description: 'Deep expertise in RMF implementation for federal and commercial organizations.',
          highlights: ['RMF Process Implementation', 'System Categorization', 'Security Control Selection', 'Risk Assessment & Authorization']
        },
        {
          title: 'Third-Party Risk Management',
          description: 'Specialized in developing and implementing third-party risk management programs.',
          highlights: ['Vendor Risk Assessments', 'Contract Security Reviews', 'Continuous Monitoring', 'Risk Scoring Methodologies']
        }
      ]
    },
    {
      id: 'incident-response',
      title: 'Incident Response & Security Operations',
      icon: <Shield className="w-6 h-6" />,
      color: 'red',
      description: 'Expertise in incident response frameworks and security operations center governance.',
      items: [
        {
          title: 'Incident Response Frameworks',
          description: 'Developed and implemented comprehensive incident response frameworks and procedures.',
          highlights: ['NIST SP 800-61', 'ISO 27035', 'Incident Response Playbooks', 'Tabletop Exercises', 'Root Cause Analysis']
        },
        {
          title: 'SOC Governance & Operations',
          description: 'Led SOC governance initiatives and operational improvements.',
          highlights: ['SOC Metrics Development', 'SIEM Use Cases', 'Incident Analysis Procedures', 'SOC Staff Training', 'Operational Workflows']
        }
      ]
    },
    {
      id: 'compliance-standards',
      title: 'Compliance & Regulatory Standards',
      icon: <FileText className="w-6 h-6" />,
      color: 'green',
      description: 'Extensive experience with global compliance frameworks and regulatory requirements.',
      items: [
        {
          title: 'Data Privacy Regulations',
          description: 'Expert in implementing data privacy frameworks across multiple jurisdictions.',
          highlights: ['GDPR Compliance', 'PDPL Implementation', 'PDPPL Data Privacy Law', 'Data Protection Impact Assessments', 'Privacy by Design']
        },
        {
          title: 'Healthcare Security',
          description: 'Specialized in healthcare security and HIPAA compliance.',
          highlights: ['HIPAA Security Rule', 'HIPAA Privacy Rule', 'Risk Assessments', 'Breach Notification', 'Business Associate Agreements']
        },
        {
          title: 'Service Organization Controls',
          description: 'Expert in SOC 2 implementation and compliance.',
          highlights: ['SOC 2 Type I & II', 'Trust Service Criteria', 'Control Objectives', 'Attestation Readiness', 'Continuous Compliance']
        }
      ]
    },
    {
      id: 'iso-standards',
      title: 'ISO Standards Implementation',
      icon: <Award className="w-6 h-6" />,
      color: 'blue',
      description: 'Lead implementation experience across multiple ISO management system standards.',
      items: [
        {
          title: 'Information Security Management',
          description: 'Led multiple ISO 27001 ISMS implementations and certifications.',
          highlights: ['ISO 27001:2022', 'ISMS Documentation', 'Risk Treatment Plans', 'Statement of Applicability', 'Internal Audits']
        },
        {
          title: 'Business Continuity Management',
          description: 'Implemented comprehensive business continuity management systems.',
          highlights: ['ISO 22301', 'Business Impact Analysis', 'Recovery Strategies', 'Crisis Management', 'BCMS Testing']
        },
        {
          title: 'Privacy Information Management',
          description: 'Specialized in privacy information management systems.',
          highlights: ['ISO 27701', 'PIA Processing', 'Data Subject Rights', 'Consent Management', 'Privacy Compliance']
        },
        {
          title: 'AI Management Systems',
          description: 'Pioneer in AI management system implementation.',
          highlights: ['ISO 42001', 'AI Policy Development', 'AI Risk Assessment', 'AI Impact Assessment', 'AI Governance']
        },
        {
          title: 'Service Management & Quality',
          description: 'Comprehensive experience in service and quality management.',
          highlights: ['ISO 20000', 'ISO 9001', 'Service Level Agreements', 'Quality Management Systems', 'Process Improvement']
        }
      ]
    }
  ]

  const toggleExpand = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      green: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      orange: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      purple: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      red: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getBorderClasses = (color: string) => {
    const borderMap = {
      blue: 'border-l-gray-500',
      green: 'border-l-gray-500',
      orange: 'border-l-gray-500',
      purple: 'border-l-gray-500',
      red: 'border-l-gray-500'
    }
    return borderMap[color as keyof typeof borderMap] || borderMap.blue
  }

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Expertise & Framework Experience
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Comprehensive experience across cybersecurity frameworks, standards, and domains with specialized expertise in AI governance and risk management.
        </p>
      </div>

      {/* Experience Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Frameworks</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">ISO Standards</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Implementations</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">6+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </CardContent>
        </Card>
      </div>

      {/* Experience Categories */}
      <div className="space-y-6">
        {experienceCategories.map((category, index) => (
          <div key={category.id} className="relative">
            <Card 
              className={`hover:shadow-lg transition-all duration-300 ${getBorderClasses(category.color)} border-l-4`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-800 dark:text-white mb-2">
                        {category.title}
                      </CardTitle>
                      <p className="text-gray-600 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(category.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              {expandedCategory === category.id && (
                <CardContent className="space-y-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <span 
                            key={highlightIndex}
                            className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-200 dark:border-gray-600"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </div>

      {/* Featured Publication */}
      <Card className="bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-white/20 rounded-lg">
              <Book className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Featured Publication</h3>
              <p className="text-gray-200">Author of industry-leading cybersecurity publication</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-medium">
              "Third Party Risk Management in the Era of AI"
            </h4>
            <p className="text-gray-200 leading-relaxed">
              A comprehensive guide addressing the evolving challenges of third-party risk management in artificial intelligence-driven environments. This publication provides practical frameworks, methodologies, and best practices for organizations to manage AI-related third-party risks effectively.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">AI Risk Management</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Third-Party Risk</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Vendor Management</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">AI Governance</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expertise Summary */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Framework & Standards Expertise
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              My expertise spans across multiple cybersecurity frameworks and standards, enabling me to provide comprehensive security solutions that address the complex challenges of modern organizations. Specialized focus on AI governance and emerging security technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="font-medium text-gray-800 dark:text-white">AI Governance</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cutting-edge expertise</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="font-medium text-gray-800 dark:text-white">ISO Standards</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">10+ standards</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="font-medium text-gray-800 dark:text-white">Risk Management</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Comprehensive coverage</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Experience