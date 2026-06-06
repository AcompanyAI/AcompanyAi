export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
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
bg-white
text-black
px-4
py-2
rounded-full
text-sm
font-semibold
hover:bg-gray-100
transition-all
">
  Login
</button>

        
        </div>
      </nav>

      {/* <div className="absolute top-20 left-20 text-violet-400 text-4xl animate-bounce">
 ✦
</div>

<div className="absolute top-60 right-32 text-pink-400 text-5xl animate-pulse">
 ✦
</div>

<div className="absolute bottom-20 left-1/3 text-blue-400 text-3xl animate-bounce">
 ✦
</div>

<div className="absolute top-40 right-1/4 text-violet-300 text-2xl animate-ping">
 •
</div> */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-32 overflow-hidden px-4">

        <div className="absolute w-[500px] h-[500px] bg-violet-600/20 blur-[150px] rounded-full"></div>

        <h1 className="z-10 text-6xl md:text-[120px] font-black leading-none tracking-tight">
  <span className="text-white">
    Acompany
  </span>
  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
    AI
  </span>
</h1>

        <h2 className="mt-8 text-5xl font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 bg-clip-text text-transparent z-10">
          Ai Powered by AcompanyAi
        </h2>

       <p className="mt-8 text-gray-400 text-base md:text-xl max-w-3xl z-10 px-4">
          Create stunning posters, logos, banners and more with the power of AI.
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
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
         <h3 className="text-lg md:text-2xl font-bold">AI Powered</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">Easy To Use</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">High Quality</h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">100% Safe</h3>
          </div>

        </div>
      </section>

    </div>
  
  );
}