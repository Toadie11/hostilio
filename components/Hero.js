import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fast & Secure Web Hosting
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Power your website with our premium hosting solutions. 99.9% uptime
            guaranteed.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started Now
            </button>
            <Link href="#pricing" scroll={false}>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                View Plans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
