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


        <div className="flex gap-5 items-center">
       <a
href="/login"
  className="
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
  "
>
  Login
</a>
        
        </div>
      </nav>

      {<div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-600/10 rounded-full blur-[300px]"></div>

</div>}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 max-w-7xl mx-auto">

        <div className="absolute inset-0 -z-10">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-violet-600/20 rounded-full blur-[250px]"></div>
</div>

<div className="flex justify-center mb-8">
  <div className="relative w-40 h-40">

    {/* Outer Gradient Ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-yellow-400 to-pink-500 p-[1px]">

      {/* 3D Black Orb */}
      <div className="relative w-full h-full rounded-full bg-black overflow-hidden">

        {/* Top Light Reflection */}
        <div className="absolute top-4 left-6 w-16 h-8 bg-white/25 rounded-full blur-md rotate-[-20deg]" />

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
         <svg
  width="180"
  height="90"
  viewBox="0 0 120 40"
>
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8122ee" />
                <stop offset="50%" stopColor="#f3dc0e" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            <path
              d="
                M0 20
                C10 5,20 5,30 20
                S50 35,60 20
                S80 5,90 20
                S110 35,120 20
              "
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>

      </div>
    </div>

  </div>
</div>

    <h1 className="mt-4 z-10 text-6xl md:text-[115px] font-semibold leading-[0.95] tracking-[-0.06em] text-center mx-auto">
  <span className="text-white">
    Acompany
  </span>

  <span className="bg-gradient-to-r from-violet-600 via-yellow-400 to-pink-500 bg-clip-text text-transparent">
    AI
  </span>
</h1>
       <p className="mt-8 text-gray-400 text-base md:text-xl max-w-3xl z-10 px-4">
          Ai Powered by AcompanyAi
        </p>

      <a
  href="/dashboard"
 className="relative mt-10 inline-flex rounded-2xl p-[1px] overflow-hidden border border-white/20"
>
  <span className="gemini-border"></span>

  <span
    className="
      relative z-10
      px-12 py-4
      rounded-2xl
      text-lg font-semibold text-white
     bg-black/40
      backdrop-blur-xl
    "
  >
    Start Free
  </span>
</a>
</section></div>
);
}