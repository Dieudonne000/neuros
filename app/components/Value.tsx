import SparklesBadge from "./SparklesBadge"
import { BarChart3, Users2, Zap } from 'lucide-react'

export default function ValueSection() {
  const features = [
    {
      icon: BarChart3,
      title: "AI-Driven Forecasts",
      description:
        "Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trend...",
    },
    {
      icon: Users2,
      title: "Connect & Streamline",
      description:
        "Neuros seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform that...",
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description:
        "In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you're always working w...",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-400 bg-white px-3 py-1 shadow-md">
            <SparklesBadge />
            <span className="ml-2 text-sm text-gray-600">Our strategies</span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Improve your Continuous Design Data workflow
          </h2>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-gray-600">
            Specify helps you gain control of your design system across teams and products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              Get a demo
            </button>
            <button className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              Research
            </button>
          </div>
        </div>

        {/* Feature Cards */}
      
       
<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-blue-200 hover:shadow-2xl hover:border-blue-600"
            >

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

