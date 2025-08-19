'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <About />
          </div>
        </section>
        
        <section id="experience" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Experience />
          </div>
        </section>
        
        <section id="certifications" className="py-20">
          <div className="container mx-auto px-4">
            <Certifications />
          </div>
        </section>
        
        <section id="skills" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <Skills />
          </div>
        </section>
        
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  )
}