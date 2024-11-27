import SparklesBadge from "./SparklesBadge"

export default function InsightsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 shadow-lg">
            <SparklesBadge />
            <span className="ml-2 text-sm text-gray-600">Applications</span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Insights and predictions made easy
          </h2>

          {/* Subtitle */}
          <p className="text-lg leading-relaxed text-gray-500">
            Advanced business intelligence tools enhance efficiency across your entire operation. By predicting 
            future revenue and dissecting marketing effectiveness, these tools provide you with the critical 
            insights needed for informed decision-making.
          </p>
        </div>
      </div>
    </section>
  )
}

