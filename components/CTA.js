export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of satisfied customers who trust Hostilio with their
          websites
        </p>
        <button
          onClick={() =>
            window.open("https://control.hostilio.cloud/", "_blank")
          }
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Start Your Website Today
        </button>
      </div>
    </section>
  );
}
