import { Network, Share2, BarChart2, Clock, Shield, Users2, Layout, Zap, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Network,
    title: "Predictive Power",
    description: "Harness Neuros's advanced AI algorithms to anticipate market shifts, forecast trends, and make data-driven decisions...",
    tags: ["Finance", "Retail", "E-commerce"]
  },
  {
    icon: Share2,
    title: "Connect with Ease",
    description: "Integrate Neuros with your existing tools and platforms for a unified analytics experience. From CRMs to ERPs, we've...",
    tags: ["Tech", "Healthcare", "Manufacturing"]
  },
  {
    icon: BarChart2,
    title: "Visualize Your Success",
    description: "Craft bespoke dashboards that resonate with your brand's goals. With drag-and-drop functionalities, visualizing your dat...",
    tags: ["Marketing", "Sales", "Operations"]
  },
  {
    icon: Clock,
    title: "Stay Updated, Always",
    description: "With Neuros's real-time data processing, you're always in the know. Make decisions based on the latest data and...",
    tags: ["E-commerce", "Logistics", "Supply Chain"]
  },
  {
    icon: Shield,
    title: "Your Data's Safe Haven",
    description: "Rest easy knowing your data is protected with Neuros's top-tier security protocols. From encryption to access controls, we...",
    tags: ["Finance", "Healthcare", "Legal"]
  },
  {
    icon: Users2,
    title: "Collaborate and Conquer",
    description: "Work together seamlessly with Neuros's collaborative features. Share insights, annotate charts, and drive collective gr...",
    tags: ["Design", "Development", "Project Management"]
  },
  {
    icon: Layout,
    title: "Simplicity Meets Power",
    description: "Neuros offers an intuitive interface that's easy to navigate, ensuring you spend less time figuring things out and more ti...",
    tags: ["All Industries"]
  },
  {
    icon: Zap,
    title: "Let AI Do the Heavy Lifting",
    description: "Receive automated insights and recommendations tailored to your business needs. Let Neuros's AI guide y...",
    tags: ["Retail", "Marketing", "Tech"]
  },
  {
    icon: MessageSquare,
    title: "Collaborate and Conquer",
    description: "Whether you're a startup or an enterprise, Neuros scales with you. Experience robust analytics solutions th...",
    tags: ["All Industries"]
  }
]

export default function FeatureGrid() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:shadow-blue-500"
            >
              <div className="mb-4">
                <feature.icon className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mb-4 text-gray-500">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-sm text-blue-500"
                  >
                    {tagIndex > 0 && <span className="mr-2 text-gray-300">•</span>}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

