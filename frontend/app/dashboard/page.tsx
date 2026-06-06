export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      <div className="max-w-7xl mx-auto p-4 md:p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">
            Acompany<span className="text-violet-500">AI</span>
          </h1>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-xl bg-[#131A2B]">
              🔔
            </button>

            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold">
              P
            </div>
          </div>
        </div>

        {/* Create Section */}
        <div className="bg-[#131A2B] rounded-3xl p-6 md:p-8 border border-white/10">

          <h2 className="text-3xl font-bold mb-2">
            Create with AI
          </h2>

          <p className="text-slate-400 mb-6">
            Turn your ideas into Posters, Logos, Banners & Invitations
          </p>

          <textarea
            placeholder="Create a premium sweet shop opening banner..."
            className="w-full h-40 rounded-2xl bg-[#0B1020] border border-white/10 p-4 outline-none resize-none"
          />

          <button className="mt-4 bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-xl font-semibold">
            Generate
          </button>

        </div>

        {/* Quick Tools */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Quick Tools
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              "🎨 Poster",
              "📢 Banner",
              "🏷️ Logo",
              "💌 Invitation",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#131A2B] rounded-2xl p-6 border border-white/10 hover:border-violet-500 transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Recent Projects */}
        <div className="mt-8">

          <h3 className="text-xl font-semibold mb-4">
            Recent Projects
          </h3>

          <div className="bg-[#131A2B] rounded-3xl border border-white/10">

            <div className="p-5 border-b border-white/10">
              Sweet Shop Banner
            </div>

            <div className="p-5 border-b border-white/10">
              Meera Sweets Logo
            </div>

            <div className="p-5">
              Opening Invitation Card
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}