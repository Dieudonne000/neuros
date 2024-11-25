'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-6">
        <div className="flex h-10 items-center justify-between space-x-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button className="flex items-center gap-1 text-base text-gray-600 hover:text-gray-900">
                English
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <Link 
              href="/support" 
              className="text-base text-gray-600 hover:text-gray-900"
            >
              Support
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/blog" 
              className="text-base text-gray-600 hover:text-gray-900"
            >
              Blog
            </Link>

            <div className="relative">
              <button className="flex items-center gap-1 text-base text-gray-600 hover:text-gray-900">
                About us
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center gap-0.5 text-2xl font-semibold text-gray-900"
              >
                Neuros
                <Plus className="h-4 w-4 text-[#387FF5]" />
              </Link>
              
              <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
                <div className="relative">
                  <button 
                    className="flex items-center gap-1 text-base text-gray-600 hover:text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Features
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="relative">
                  <button 
                    className="flex items-center gap-1 text-base text-gray-600 hover:text-gray-900"
                  >
                    Case Studies
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>

                <Link 
                  href="/pricing" 
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>

                <Link 
                  href="/applications" 
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Applications
                </Link>
              </div>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                href="/demo"
                className="rounded-lg px-8 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 border border-[#387FF5]"
              >
                Get a demo
              </Link>
              <Link
                href="/trial"
                className="rounded-lg bg-[#387FF5] px-8 py-2.5 text-base font-medium text-white hover:bg-[#2563eb]"
              >
                Start your free trial
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/features"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/case-studies"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Case Studies
            </Link>
            <Link
              href="/pricing"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/applications"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Applications
            </Link>
            <Link
              href="/support"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Support
            </Link>
            <Link
              href="/blog"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About us
            </Link>
            <Link
              href="/demo"
              className="block rounded-md px-8 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 border border-[#387FF5]"
            >
              Get a demo
            </Link>
            <Link
              href="/trial"
              className="block rounded-md bg-[#387FF5] px-8 py-2.5 text-base font-medium text-white hover:bg-[#2563eb]"
            >
              Start your free trial
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}