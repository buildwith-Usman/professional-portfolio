'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Linkedin } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Hameed Afzal
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                CISSP | CISM | PMP
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-400 ${
                  activeSection === item.id
                    ? 'text-gray-600 dark:text-gray-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:contact@hameedafzal.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/hameed-afzal-826998137/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                <div className="flex items-center space-x-4 px-3 py-2">
                  <a href="mailto:contact@hameedafzal.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/hameed-afzal-826998137/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header