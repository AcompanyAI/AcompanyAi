import { Fingerprint } from "lucide-react";

export default function LoginPage() {
  return (
    
  <div className="min-h-screen relative overflow-hidden bg-black flex flex-col items-center justify-center px-4">

      {/* Background Glow */}

<div className="absolute top-[15%] left-[20%] w-1 h-1 bg-violet-400 rounded-full" />
<div className="absolute top-[30%] left-[70%] w-1 h-1 bg-blue-400 rounded-full" />
<div className="absolute top-[10%] left-[55%] w-1 h-1 bg-violet-300 rounded-full" />
<div className="absolute top-[40%] left-[15%] w-1 h-1 bg-cyan-300 rounded-full" />
<div className="absolute top-[22%] left-[85%] w-1 h-1 bg-violet-400 rounded-full" />
<div className="absolute top-[12%] left-[18%] w-1 h-1 bg-violet-300 rounded-full" />
<div className="absolute top-[18%] left-[70%] w-1 h-1 bg-blue-300 rounded-full" />
<div className="absolute top-[25%] left-[85%] w-1 h-1 bg-violet-400 rounded-full" />
<div className="absolute top-[35%] left-[10%] w-1 h-1 bg-cyan-300 rounded-full" />
<div className="absolute top-[8%] left-[55%] w-1 h-1 bg-violet-300 rounded-full" />
<div className="absolute top-[28%] left-[32%] w-1 h-1 bg-blue-300 rounded-full" />

      {/* Background Glow */}

<div className="absolute inset-0 overflow-hidden">

  {/* Violet Glow */}

  <div
    className="
    absolute
    top-[-350px]
    left-1/2
    -translate-x-1/2
    w-[1400px]
    h-[1400px]
    rounded-full
   from-violet-500
    blur-[250px]
    "
  />

  {/* Blue Glow */}

  <div
    className="
    absolute
    bottom-[-300px]
    right-[-200px]
    w-[900px]
    h-[900px]
    rounded-full
    to-cyan-400
    blur-[220px]
    "
  />

  {/* Center Glow */}

  <div
    className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[600px]
    h-[600px]
    rounded-full
    bg-violet-500/10
    blur-[180px]
    "
  />

</div>
     {/* HUD Scanner */}

<div className="relative z-10 flex justify-center items-center mb-4">

  <div className="relative w-[380px] h-[380px] flex items-center justify-center">

    {/* Outer Rotating Ring */}

    <svg
      className="absolute inset-0 w-full h-full animate-spin"
      style={{ animationDuration: "30s" }}
      viewBox="0 0 400 400"
    >
      <circle
        cx="200"
        cy="200"
        r="180"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeDasharray="120 30"
        opacity="0.4"
      />

      <circle
        cx="200"
        cy="200"
        r="160"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="60 20"
        opacity="0.4"
      />
    </svg>

    {/* Reverse Ring */}

    <svg
      className="absolute inset-0 w-full h-full animate-spin"
      style={{
        animationDuration: "20s",
        animationDirection: "reverse",
      }}
      viewBox="0 0 400 400"
    >
      <circle
        cx="200"
        cy="200"
        r="135"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="3"
        strokeDasharray="40 15"
        opacity="0.5"
      />
    </svg>

    {/* Inner Rings */}

    <div className="absolute w-[220px] h-[220px] rounded-full border border-violet-500/40" />
    <div className="absolute w-[180px] h-[180px] rounded-full border border-blue-400/40" />

    {/* Glow */}

    <div
      className="
      absolute
      w-[170px]
      h-[170px]
      rounded-full
      bg-violet-500/10
      blur-3xl
      "
    />

    {/* Fingerprint */}

    <Fingerprint
      size={120}
      className="
      text-violet-300
      drop-shadow-[0_0_80px_rgba(139,92,246,1)]
      z-10
      "
    />

    {/* HUD Dots */}

    <div className="absolute top-10 left-20 w-2 h-2 bg-violet-400 rounded-full" />
    <div className="absolute top-20 right-16 w-2 h-2 bg-blue-400 rounded-full" />
    <div className="absolute bottom-16 left-10 w-2 h-2 bg-cyan-300 rounded-full" />
    <div className="absolute bottom-10 right-24 w-2 h-2 bg-violet-300 rounded-full" />

        </div>

      </div>

<div className="relative z-10 text-center mb-4">

  <h1 className="text-3xl font-bold text-white tracking-tight">
    Acompany
    <span className="text-violet-400">AI</span>
  </h1>

  <p className="text-white/60 mt-3 text-lg">
   Your AI Companion
  </p>

</div>

      {/* Login Card */}

      <div
        className="
        relative
        z-10
        w-full
     max-w-md
       bg-white/[0.04]
        backdrop-blur-3xl
        border
        border-violet-500/20
        rounded-[30px]
        p-8
        shadow-[0_0_80px_rgba(139,92,246,0.15)]
        "
      >

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-white/60 text-center mb-2">
          Login to continue
        </p>

        <input
          type="email"
          placeholder="Email or Username"
          className="
          w-full
          h-14
          px-5
          mb-4
          rounded-xl
          bg-black/30
          border
          border-violet-500/20
          text-white
          outline-none
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          h-14
          px-5
          mb-5
          rounded-xl
          bg-black/30
          border
          border-violet-500/20
          text-white
          outline-none
          "
        />

        <button
          className="
          w-full
          h-14
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-blue-500
          text-white
          font-semibold
          mb-4
          "
        >
          Login
        </button>

        <button
          className="
          w-full
          h-14
          rounded-xl
          border
          border-violet-500/20
          text-white
          "
        >
         Login with Fingerprint
        </button>

      </div>

    </div>
  );
}