"use client";

import Image from "next/image";

export default function PartnerSection() {
  const logos = [
    // First row
    [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        alt: "Google",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        alt: "Microsoft",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        alt: "Apple",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        alt: "Meta",
      },
    ],
    // Second row
    [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
        alt: "Slack",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
        alt: "Spotify",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        alt: "Netflix",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg",
        alt: "Uber",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
        alt: "Airbnb",
      },
    ],
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-lg text-gray-600">
          160,000+ customers in over 120 countries grow their businesses with
          Neuros
        </h2>

        <div className="mx-auto max-w-6xl space-y-8">
          {logos.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-5"
            >
              {row.map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex items-center justify-center px-4"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100} // Set appropriate width
                    height={32} // Set appropriate height
                    className="h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
