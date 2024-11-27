export default function PartnerSection() {
  const logos = [
    // First row
    [
      { src: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg", alt: "Google" },
      { src: "https://img.shields.io/badge/Microsoft-0078D4?style=for-the-badge&logo=microsoft&logoColor=white", alt: "Microsoft" },
      { src: "https://img.shields.io/badge/Amazon-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white", alt: "Amazon" },
      { src: "https://img.shields.io/badge/Apple-000000?style=for-the-badge&logo=apple&logoColor=white", alt: "Apple" },
      { src: "https://img.shields.io/badge/Meta-0467DF?style=for-the-badge&logo=meta&logoColor=white", alt: "Meta" },
    ],
    // Second row
    [
      { src: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white", alt: "Slack" },
      { src: "https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white", alt: "Spotify" },
      { src: "https://img.shields.io/badge/Netflix-E50914?style=for-the-badge&logo=netflix&logoColor=white", alt: "Netflix" },
      { src: "https://img.shields.io/badge/Uber-000000?style=for-the-badge&logo=uber&logoColor=white", alt: "Uber" },
      { src: "https://img.shields.io/badge/Airbnb-FF5A5F?style=for-the-badge&logo=airbnb&logoColor=white", alt: "Airbnb" },
    ],
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-lg text-gray-600">
          160,000+ customers in over 120 countries grow their businesses with Neuros
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
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}