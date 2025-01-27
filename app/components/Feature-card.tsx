"use client";

import { Card } from "@/components/ui/card";

// Remove the unused import if not needed
// import { Card } from "@/components/ui/card";

export default function FeatureCard() {
  return (
    <Card className="bg-white p-8">
      <div className="relative h-[350px] w-full max-w-[1000px] mx-auto overflow-hidden rounded-2xl bg-blue-500">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Trend Lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 400 200"
        >
          <path
            d="M0 160 C100 140, 200 180, 300 140 C400 100, 500 160, 600 100"
            className="stroke-white"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M0 180 C100 220, 200 160, 300 180 C400 200, 500 140, 600 120"
            className="stroke-white/50"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M0 200 C100 180, 200 220, 300 160 C400 100, 500 180, 600 140"
            className="stroke-white/30"
            fill="none"
            strokeWidth="2"
          />
        </svg>

        {/* Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="inline-flex items-center rounded-full bg-white px-8 py-1 shadow-lg
            transition-all duration-300 ease-in-out
            border-[12px] border-[#83ACFA]/60
            hover:scale-105 hover:shadow-xl hover:border-[#83ACFA]/80"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#387FF5] mr-4
              transition-colors duration-300
              hover:bg-[#2563eb]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white transition-transform duration-300 hover:scale-110"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
            </div>
            <div className="text-left">
              <div
                className="text-base font-medium text-gray-900 transition-colors duration-300
                group-hover:text-blue-600"
              >
                AI-Driven Forecasts
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
