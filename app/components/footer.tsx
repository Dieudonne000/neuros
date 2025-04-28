import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: "About Neuros",
      links: [
        { label: "Company Overview", href: "/company" },
        { label: "Careers", href: "/careers" },
        { label: "Press & Media", href: "/press" },
        { label: "Testimonials", href: "/testimonials" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Help Center", href: "/help" },
        { label: "Webinars & Events", href: "/events" },
        { label: "Case Studies", href: "/case-studies" },
      ]
    },
    {
      title: "Support & Contact",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Technical Support", href: "/support" },
        { label: "Feedback", href: "/feedback" },
        { label: "Community Forum", href: "/community" },
      ]
    }
  ]

  const socialLinks = [
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "Twitter / X", href: "#", icon: Twitter },
    { label: "LinkedIn", href: "#", icon: Linkedin },
  ]

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-0.5 text-xl font-semibold text-gray-900">
              Neuros
              <span className="text-blue-600">+</span>
            </Link>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
          <p className="mb-4 text-sm text-gray-600 sm:mb-0">
            ©2025 Jean Dieudonne · All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Term of use
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy policy
            </Link>
            <Link href="/security" className="text-sm text-gray-600 hover:text-gray-900">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

