export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* Top Bar */}
      <div className="flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold">
          Acompany<span className="text-violet-400">AI</span>
        </h1>

        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full bg-white/10">
            🔔
          </button>

          <button className="w-12 h-12 rounded-full bg-violet-600">
            P
          </button>
        </div>
      </div>

      {/* Main Box */}
      <div className="mx-6 mt-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        <h2 className="text-5xl font-bold">
          What's can I help with today?
        </h2>

        <p className="mt-3 text-gray-400">
          Posters, Logos, Banners & Invitations
        </p>

        {/* Glass Text Area */}
        <div className="mt-8">
          <textarea
            placeholder="Ask AcompanyAI..."
            className="
            w-full
            h-52
            rounded-3xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            p-6
            text-white
            outline-none
            "
          />
        </div>

        {/* Bottom Input */}
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4">

          <button className="text-2xl">
            +
          </button>

          <input
            placeholder="Ask AcompanyAI"
            className="bg-transparent flex-1 mx-4 outline-none"
          />

          <button>
            🎤
          </button>

        </div>

      </div>

    </div>
  );
}