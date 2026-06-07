import {
  Zap,
  Palette,
  CloudDownload,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
   <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px] animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>

  <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[150px] animate-pulse"></div>
</div>

      {/* Navbar */}
     <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 md:px-8 py-4 flex items-center justify-between">
       <h1 className="text-2xl md:text-4xl font-black tracking-tight">
  <span className="
    bg-gradient-to-r
    from-white
    via-violet-200
    to-violet-500
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]
  ">
    AcompanyAI
  </span>
</h1>

        <div className="hidden md:flex gap-10 text-gray-300">
          <a href="#">Features</a>
          <a href="#">Templates</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
        </div>

        <div className="flex gap-5 items-center">
       <button className="
bg-white/90
backdrop-blur-xl
text-black
px-6
py-2.5
rounded-full
font-semibold
shadow-lg
hover:scale-105
transition-all
duration-300
">
  Login
</button>

        
        </div>
      </nav>

      {<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-violet-900/30 via-violet-800/20 to-[#050816]"></div>

  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-violet-600/20 rounded-full blur-[300px]"></div>

  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/15 rounded-full blur-[250px]"></div>

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-600/10 rounded-full blur-[300px]"></div>

</div>}
      <section className="relative flex flex-col items-center justify-center min-h-[75vh] text-center px-4 max-w-6xl mx-auto">

        <div className="absolute inset-0 -z-10">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-violet-600/20 rounded-full blur-[250px]"></div>
</div>
       <h1 className="z-10 text-6xl md:text-[140px] font-black leading-none tracking-tight text-center mx-auto">
  <span className="text-white">
    Acompany
  </span>
  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
    AI
  </span>
</h1>

       <p className="mt-8 text-gray-400 text-base md:text-xl max-w-3xl z-10 px-4">
          Ai Powered by AcompanyAi
        </p>

        <button
  className="
  mt-10
  px-7
  py-2.5
  rounded-xl
  text-base
  font-semibold
  text-white
  bg-white/5
  backdrop-blur-xl
  border
  border-white/20
  shadow-[0_0_20px_rgba(139,92,246,0.25)]
  hover:bg-white/10
  transition-all
  duration-300
  "
>
  Start Free
</button>

      </section>

      {/* Features */}
      
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 md:mt-32 pb-20">
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">

    <div className="grid grid-cols-1 md:grid-cols-4">

      <div className="p-6 flex gap-4 items-start border-b md:border-b-0 md:border-r border-white/10">
        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
          <Zap className="w-6 h-6 text-violet-400" />
        </div>

        <div>
          <h3 className="font-semibold">AI Powered</h3>
          <p className="text-sm text-gray-400">
            Generate unique designs using advanced AI.
          </p>
        </div>
      </div>

      <div className="p-6 flex gap-4 items-start border-b md:border-b-0 md:border-r border-white/10">
        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
          <Palette className="w-6 h-6 text-violet-400" />
        </div>

        <div>
          <h3 className="font-semibold">Easy To Use</h3>
          <p className="text-sm text-gray-400">
            Simple editor, drag & drop and done.
          </p>
        </div>
      </div>

      <div className="p-6 flex gap-4 items-start border-b md:border-b-0 md:border-r border-white/10">
        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
          <CloudDownload className="w-6 h-6 text-violet-400" />
        </div>

        <div>
          <h3 className="font-semibold">High Quality</h3>
          <p className="text-sm text-gray-400">
            Download high-resolution designs instantly.
          </p>
        </div>
      </div>

      <div className="p-6 flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-violet-400" />
        </div>

        <div>
          <h3 className="font-semibold">100% Safe</h3>
          <p className="text-sm text-gray-400">
            Your data is secure and private.
          </p>
        </div>
      </div>

    </div>
  </div>
</section></div>
);
}