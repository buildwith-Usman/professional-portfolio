'use client'

import { GraduationCap, Globe, Users, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  const education = [
    {
      degree: "MS/MPhil (Cyber Security)",
      institution: "National University of Science and Technology (NUST)",
      period: "2022-2023",
      details: "QS Ranking #350-360, CGPA: 3.75/4.00",
      description: "A two years masters degree in cyber security with thesis."
    },
    {
      degree: "BS (Information Technology)",
      institution: "University of the Punjab - PUCIT",
      period: "2016-2020",
      details: "QS Ranking #571-575",
      description: "A four-year bachelor's degree in information technology."
    }
  ]

  const profileHighlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Vision",
      description: "Expert in developing comprehensive cybersecurity strategies aligned with business objectives and regulatory requirements."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      description: "Proven ability to lead cross-functional teams and drive security initiatives across organizations."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      description: "Extensive experience implementing international standards including ISO, NIST, and regional frameworks."
    }
  ]

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          A dedicated cybersecurity professional with a strong academic background and extensive industry experience in governance, risk management, and compliance.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Education
            </h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-white">
                    {edu.degree}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">
                      {edu.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {edu.details}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Profile */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Professional Profile
            </h3>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  A highly skilled, qualified, certified, and experienced Cybersecurity and AI GRC Professional with master's degree and 6 years of experience specializing in governance, risk management, and compliance (GRC).
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Holds multiple industry-recognized certifications, including CISSP, CISM, PMP, Security X (CASP+), and Lead Auditor credentials for ISO 27001, 27701, 22301, 20000, 9001, and 42001, as well as expertise in SOC 2.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Active member of the PDPPL Data Privacy Law of Qatar's working group, contributing to regulatory discussions and implementation strategies for data protection and privacy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Profile Highlights */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
              Core Strengths
            </h4>
            <div className="grid gap-4">
              {profileHighlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-600 dark:text-blue-400">
                        {highlight.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-800 dark:text-white mb-1">
                          {highlight.title}
                        </h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              With a strong foundation in cybersecurity principles and extensive hands-on experience in implementing security frameworks, I bring a unique blend of technical expertise and strategic thinking to help organizations build robust security postures. My specialization in AI governance and emerging security technologies positions me at the forefront of modern cybersecurity challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                Strategic Thinker
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                Team Leader
              </span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm">
                Continuous Learner
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default About