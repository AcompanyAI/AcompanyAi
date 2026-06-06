export default function Dashboard() {
  const tools = [
    "AI Poster Maker",
    "AI Banner Maker",
    "AI Logo Maker",
    "AI Invitation",
  ];

  return (
    <main className="min-h-screen bg-[#F6F5FF] pb-24">
      
      {/* Header */}
      <div className="max-w-[430px] mx-auto px-5 pt-6">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              Welcome Back
            </p>

            <h1 className="text-2xl font-bold">
              Prashant 👋
            </h1>
          </div>

          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            P
          </div>
        </div>

        {/* Credits Card */}

        <div className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">

          <p className="text-sm opacity-80">
            Free Plan
          </p>

          <h2 className="text-5xl font-bold mt-2">
            10
          </h2>

          <p className="opacity-80">
            Credits Remaining
          </p>

          <button className="mt-5 bg-white text-purple-700 px-5 py-3 rounded-2xl font-semibold">
            Upgrade Plan
          </button>

        </div>

        {/* AI Prompt */}

        <div className="mt-6 bg-white rounded-3xl p-5 shadow">

          <h3 className="font-semibold text-lg">
            What do you want to create?
          </h3>

          <textarea
            placeholder="Create a modern sweet shop banner..."
            className="w-full mt-4 h-28 border rounded-2xl p-4 outline-none resize-none"
          />

          <button className="mt-4 w-full bg-purple-600 text-white py-4 rounded-2xl font-semibold">
            Generate Design
          </button>

        </div>

        {/* AI Tools */}

        <div className="mt-8">

          <h2 className="text-xl font-bold mb-4">
            AI Studio
          </h2>

          <div className="grid grid-cols-2 gap-4">

            {tools.map((tool) => (
              <div
                key={tool}
                className="bg-white rounded-3xl p-5 shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-2xl mb-4"></div>

                <h3 className="font-semibold">
                  {tool}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Create instantly
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Recent Projects */}

        <div className="mt-8">

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              Recent Projects
            </h2>

            <button className="text-purple-600">
              View All
            </button>
          </div>

          <div className="mt-4 flex gap-4 overflow-x-auto pb-2">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="min-w-[180px] bg-white rounded-3xl p-4 shadow"
              >
                <div className="h-28 rounded-2xl bg-purple-100"></div>

                <h3 className="mt-3 font-semibold">
                  Project {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-8">

          <h2 className="text-xl font-bold mb-4">
            Statistics
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white rounded-3xl p-5 shadow">
              <p className="text-gray-500">
                Total Designs
              </p>

              <h3 className="text-3xl font-bold mt-2">
                128
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow">
              <p className="text-gray-500">
                Downloads
              </p>

              <h3 className="text-3xl font-bold mt-2">
                432
              </h3>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Navigation */}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">

        <div className="max-w-[430px] mx-auto flex justify-around py-4">

          <button className="text-purple-600 font-semibold">
            Home
          </button>

          <button>
            Studio
          </button>

          <button>
            Projects
          </button>

          <button>
            Profile
          </button>

        </div>

      </div>

    </main>
  );
}