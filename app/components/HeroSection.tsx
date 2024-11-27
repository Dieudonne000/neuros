import SparklesBadge from "./SparklesBadge";

function VideoPlayer() {
    return (
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#387FF5]">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
  
        {/* Decorative Circles */}
        <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-white/10" />
        <div className="absolute bottom-20 right-20 h-8 w-8 rounded-full bg-white/10" />
        <div className="absolute right-40 top-20 h-10 w-24 rounded-full bg-white/10" />
  
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="group flex items-center gap-4 rounded-full bg-white px-8 py-4 transition-all hover:bg-opacity-90 border-[12px]  border-[#83ACFA]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#387FF5]">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="translate-x-0.5"
              >
                <path 
                  d="M3 2L11 7L3 12V2Z" 
                  fill="white" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-base font-medium text-gray-900">
                Watch introduce video
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <span>5 mins</span>
                <span>•</span>
                <span className="text-[#387FF5]">Play video</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    )
  }

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-white px-2 py-0.5 shadow-lg">
            <div className="scale-[35%] mr-2">
              <SparklesBadge />
            </div>
            <span className="text-sm text-gray-600">
              Generative Business Intelligence for Analysts
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Revolutionizing Business Decisions with AI-Powered Analytics
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg text-gray-600">
            Harnesses the power of artificial intelligence to transform your
            business data into actionable insights, propelling you to new
            heights of success
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
            <button className="inline-flex min-w-[160px] items-center justify-center rounded-lg bg-[#387FF5] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              Start your free trial
            </button>
            <button className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M3 2.5L13 8L3 13.5V2.5Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Watch video
            </button>
          </div>
        </div>

        {/* Video Player - Increased width */}
        <div className="max-w-5xl mx-auto">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
}