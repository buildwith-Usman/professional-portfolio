'use client'

import { useState } from 'react'
import { Code, Shield, Brain, Users, Target, Settings, Cloud, Lock, FileText, BarChart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Target className="w-4 h-4" /> },
    { id: 'grc', label: 'GRC', icon: <Shield className="w-4 h-4" /> },
    { id: 'technical', label: 'Technical', icon: <Code className="w-4 h-4" /> },
    { id: 'cloud', label: 'Cloud', icon: <Cloud className="w-4 h-4" /> },
    { id: 'soft', label: 'Soft Skills', icon: <Users className="w-4 h-4" /> },
  ]

  const skills = {
    grc: [
      {
        title: 'Governance Frameworks',
        items: ['NIST CSF', 'ISO 27001', 'Qatar NIA', 'AIMS', 'PDPPL', 'SOC 2'],
        icon: <Shield className="w-5 h-5" />,
        color: 'blue'
      },
      {
        title: 'Risk Management',
        items: ['ISO 31000', 'Risk Assessments', 'Risk Treatment Plans', 'Third-Party Risk Management', 'AI Impact Assessment', 'AI Risk Assessment'],
        icon: <BarChart className="w-5 h-5" />,
        color: 'orange'
      },
      {
        title: 'Compliance & Audits',
        items: ['ISO 27001', 'ISO 27701', 'ISO 22301', 'ISO 20000', 'ISO 42001', 'ISO 9001', 'SOC 2', 'CCC (Saudi Aramco)'],
        icon: <FileText className="w-5 h-5" />,
        color: 'green'
      },
      {
        title: 'Data Privacy & Protection',
        items: ['PDPPL (Qatar)', 'GDPR', 'ISO 27701', 'Data Classification', 'Protection Strategies'],
        icon: <Lock className="w-5 h-5" />,
        color: 'purple'
      },
      {
        title: 'Security Policy Development',
        items: ['ISMS', 'IT Security Policies', 'Data Protection Policies', 'Access Control Policies'],
        icon: <Settings className="w-5 h-5" />,
        color: 'red'
      },
      {
        title: 'Business Continuity & Disaster Recovery',
        items: ['ISO 22301', 'Business Impact Analysis (BIA)', 'Crisis Management'],
        icon: <Target className="w-5 h-5" />,
        color: 'indigo'
      }
    ],
    technical: [
      {
        title: 'Cybersecurity Strategy Development',
        items: ['IT & OT Security Roadmaps', 'Risk-Based Security Planning'],
        icon: <Brain className="w-5 h-5" />,
        color: 'blue'
      },
      {
        title: 'Threat Modeling & Risk Assessment',
        items: ['Application Security', 'Network Security', 'Cloud Security'],
        icon: <Shield className="w-5 h-5" />,
        color: 'red'
      },
      {
        title: 'Incident Management & Response',
        items: ['Root Cause Analysis', 'Security Incident Handling', 'Playbook Development'],
        icon: <Target className="w-5 h-5" />,
        color: 'orange'
      },
      {
        title: 'SOC Governance & Metrics',
        items: ['Security Operations Center Oversight', 'SIEM Use Cases', 'Incident Analysis'],
        icon: <BarChart className="w-5 h-5" />,
        color: 'green'
      },
      {
        title: 'Gap Assessments & Maturity Models',
        items: ['NIST CSF', 'ISO 27001', 'SOC CMM', 'NCA ECC', 'OT Security Risk Assessments'],
        icon: <FileText className="w-5 h-5" />,
        color: 'purple'
      }
    ],
    cloud: [
      {
        title: 'Cloud Security Compliance',
        items: ['ISO 27017', 'ISO 27018', 'CSA CCM', 'CIS Cloud Benchmarks'],
        icon: <Shield className="w-5 h-5" />,
        color: 'blue'
      },
      {
        title: 'Cloud Security Implementation',
        items: ['AWS Security', 'Azure Security', 'GCP Security', 'Secure Configuration'],
        icon: <Cloud className="w-5 h-5" />,
        color: 'orange'
      },
      {
        title: 'Identity & Access Management',
        items: ['Role-Based Access Control (RBAC)', 'Multi-Factor Authentication (MFA)'],
        icon: <Lock className="w-5 h-5" />,
        color: 'green'
      },
      {
        title: 'Configuration Management & Hardening',
        items: ['CIS Benchmarks', 'Secure Baselines', 'Server Hardening'],
        icon: <Settings className="w-5 h-5" />,
        color: 'purple'
      },
      {
        title: 'Application Security & Secure SDLC',
        items: ['OWASP Top 10', 'Secure Coding Practices', 'Code Review'],
        icon: <Code className="w-5 h-5" />,
        color: 'red'
      }
    ],
    soft: [
      {
        title: 'Leadership & Management',
        items: ['Team Leadership', 'Project Management', 'Strategic Planning', 'Decision Making'],
        icon: <Users className="w-5 h-5" />,
        color: 'blue'
      },
      {
        title: 'Communication',
        items: ['Presentation Skills', 'Technical Writing', 'Stakeholder Management', 'Cross-functional Collaboration'],
        icon: <Users className="w-5 h-5" />,
        color: 'green'
      },
      {
        title: 'Problem Solving',
        items: ['Analytical Thinking', 'Risk Assessment', 'Troubleshooting', 'Creative Solutions'],
        icon: <Brain className="w-5 h-5" />,
        color: 'orange'
      },
      {
        title: 'Business Acumen',
        items: ['Budgeting', 'Planning', 'Negotiation', 'Conflict Management'],
        icon: <Target className="w-5 h-5" />,
        color: 'purple'
      },
      {
        title: 'Training & Development',
        items: ['Cybersecurity Awareness Programs', 'Training Development', 'Knowledge Transfer', 'Mentoring'],
        icon: <Users className="w-5 h-5" />,
        color: 'red'
      }
    ]
  }

  const getAllSkills = () => {
    return [...skills.grc, ...skills.technical, ...skills.cloud, ...skills.soft]
  }

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills()
    }
    return skills[activeCategory as keyof typeof skills] || []
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Skills & Expertise
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          A comprehensive skill set spanning governance, risk management, compliance, technical security, cloud computing, and essential soft skills for cybersecurity leadership.
        </p>
      </div>

      {/* Skills Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">GRC Skills</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Technical Skills</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Cloud Skills</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Soft Skills</div>
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
            {category.icon}
            <span>{category.label}</span>
          </Button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredSkills().map((skill, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getColorClasses(skill.color)}`}>
                  {skill.icon}
                </div>
                <CardTitle className="text-lg text-slate-800 dark:text-white">
                  {skill.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Comprehensive Skill Portfolio
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              My diverse skill set combines technical expertise with strategic governance knowledge, enabling me to address complex cybersecurity challenges from multiple perspectives. This holistic approach ensures comprehensive security solutions that align with business objectives and regulatory requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="font-medium text-slate-800 dark:text-white">Strategic Governance</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Framework implementation & compliance</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="font-medium text-slate-800 dark:text-white">Technical Excellence</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Hands-on security implementation</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="font-medium text-slate-800 dark:text-white">Leadership</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Team management & stakeholder engagement</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Skills