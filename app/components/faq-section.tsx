"use client"

import { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import SparklesBadge from './SparklesBadge'

const faqs = [
  {
    question: "What is Neuros and how does it differ from other analytics platforms?",
    answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes."
  },
  {
    question: "How does the AI-driven predictive analytics feature work?",
    answer: "Our AI-driven predictive analytics uses advanced machine learning algorithms to analyze historical data, identify patterns, and generate accurate forecasts. The system continuously learns from new data to improve its predictions and provide actionable insights for your business decisions."
  },
  {
    question: "Is my data secure with Neuros?",
    answer: "Yes, your data security is our top priority. We employ industry-leading encryption standards, regular security audits, and strict access controls. All data is stored in secure, compliant facilities with continuous monitoring and backup systems."
  },
  {
    question: "Can I integrate Neuros with other tools and platforms I currently use?",
    answer: "Neuros offers seamless integration with popular business tools, CRMs, ERPs, and other platforms. Our extensive API and pre-built connectors make it easy to incorporate Neuros into your existing workflow."
  },
  {
    question: "How is the pricing structured for Neuros? Are there any hidden fees?",
    answer: "We offer transparent, tiered pricing based on your needs. All features are clearly listed for each tier, with no hidden fees. Contact our sales team for a detailed quote tailored to your business requirements."
  },
  {
    question: "I'm new to business analytics. Does Neuros offer any support or tutorials?",
    answer: "Yes! We provide comprehensive onboarding support, video tutorials, documentation, and a dedicated customer success team. Our learning resources cater to users of all experience levels."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1); // Initialize to -1 to indicate no open FAQ

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1">
              <SparklesBadge />
              <span className="ml-2 text-sm text-gray-600">FAQ</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500">
              Explore our frequently asked questions to learn more about Neuros&apos;s features, security, integration capabilities, and more
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-400">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <h3 className="text-lg font-semibold text-blue-900">
                    {faq.question}
                  </h3>
                  <ChevronUp
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-0' : 'rotate-180'
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}