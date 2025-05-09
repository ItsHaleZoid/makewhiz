export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-r from-yellow-50 via-white to-purple-50 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 font-heading">
          Simple, One-Time Pricing
        </h2>
        <p className="text-lg text-purple-700 mb-10">
          Pay once, use forever. No subscriptions, no hidden fees.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Starter Tier */}
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-purple-200 px-8 py-12 max-w-xs w-full flex flex-col items-center">
            <span className="text-xl font-bold text-purple-600 mb-2 block">
              Starter
            </span>
            <div className="flex items-end justify-center mb-6">
              <span className="text-4xl md:text-5xl font-extrabold text-purple-900 font-heading">
                $5
              </span>
              <span className="text-base text-purple-500 ml-2 mb-1 font-medium">
                one-off
              </span>
            </div>
            <ul className="text-purple-800 text-base space-y-2 mb-8 text-left w-full">
              <li>✔️ 25 UI generations</li>
              <li>✔️ Core features</li>
              <li>✔️ Personal use</li>
              <li>✔️ 3 months updates</li>
            </ul>
            <button className="bg-purple-200 hover:bg-purple-300 text-purple-900 font-bold px-6 py-3 rounded-full border-2 border-purple-400 shadow-md transition-all duration-200 text-base w-full">
              Get Starter
            </button>
            <div className="mt-4 text-xs text-purple-500">
              30-day money-back guarantee
            </div>
          </div>
          {/* Pro Tier */}
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-yellow-200 px-10 py-14 max-w-md w-full flex flex-col items-center relative">
            <span className="text-2xl font-bold text-yellow-600 mb-2 block">
              Pro
            </span>
            <div className="flex items-end justify-center mb-6">
              <span className="text-5xl md:text-6xl font-extrabold text-purple-900 font-heading">
                $15
              </span>
              <span className="text-lg text-purple-500 ml-2 mb-2 font-medium">
                one-off
              </span>
            </div>
            <ul className="text-purple-800 text-base space-y-3 mb-8 text-left w-full">
              <li>✔️ Unlimited UI generations</li>
              <li>✔️ All features unlocked</li>
              <li>✔️ Commercial use</li>
              <li>✔️ Lifetime updates</li>
              <li>✔️ Priority support</li>
            </ul>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full border-2 border-blue-700 shadow-md transition-all duration-200 text-lg w-full">
              Get Pro
            </button>
            <div className="mt-4 text-sm text-purple-500">
              30-day money-back guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
