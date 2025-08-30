export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2.99",
      period: "/month",
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Free SSL Certificate",
        "24/7 Support",
        "99.9% Uptime",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5.99",
      period: "/month",
      features: [
        "10 Websites",
        "50GB SSD Storage",
        "Free SSL Certificate",
        "24/7 Support",
        "Daily Backups",
        "Free Domain",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "$12.99",
      period: "/month",
      features: [
        "Unlimited Websites",
        "100GB SSD Storage",
        "Free SSL Certificate",
        "24/7 Priority Support",
        "Daily Backups",
        "Free Domain",
        "CDN Included",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect hosting plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.popular ? "border-2 border-blue-600" : "border"
              } rounded-lg p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
