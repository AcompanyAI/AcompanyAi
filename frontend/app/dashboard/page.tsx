"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import { Video, PanelLeftClose } from "lucide-react";

import {
  Plus,
  Mic,
  ArrowUp,
  PenSquare,
  Search,
  Library,
  FolderKanban,
  Grid3X3,
  Code2,
  MoreHorizontal,
} from "lucide-react";

import SpeechRecognition from "react-speech-recognition";
import { useSpeechRecognition } from "react-speech-recognition";

import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {

  const [prompt, setPrompt] = useState("");
  
const [showAvatarModal, setShowAvatarModal] = useState(false);

const [showTransform, setShowTransform] = useState(false);

const [selectedAvatar, setSelectedAvatar] = useState("");

const welcomeMessages = [
  "Your move, Prashant.",
  "What's on your mind today?",
  "How can AcompanyAI help?",
  "Ready to create something great?",
  "Let's build something amazing.",
  "Need a logo, banner or brand kit?",
  "Start with an idea.",
  "What would you like to create?",
];

const themes = [
  "black",
  "blue",
  "orange",
  "gradient",
  "blackblue",
  "navyblack",
];

const [theme, setTheme] = useState("black");
const [heroText, setHeroText] = useState("");

useEffect(() => {
  setTheme(
    themes[
      Math.floor(Math.random() * themes.length)
    ]
  );

  setHeroText(
    welcomeMessages[
      Math.floor(Math.random() * welcomeMessages.length)
    ]
  );
}, []);

const [messages, setMessages] = useState<any[]>([]);

const [selectedImages, setSelectedImages] = useState<File[]>([]);

const [loading, setLoading] = useState(false);
const [showProjects, setShowProjects] = useState(false);

const [projects, setProjects] = useState<string[]>([]);

const handleSend = () => {
  document.querySelector<HTMLButtonElement>(
    "#send-btn"
  )?.click();
};

const startVoiceAssistant = () => {
  useEffect(() => {
  const text = transcript.toLowerCase();

  if (text.includes("hey acompany ai")) {
    const speech = new SpeechSynthesisUtterance(
      "Hello Prashant, how can I help you today?"
    );

    window.speechSynthesis.speak(speech);

    resetTranscript();
  }
}, [transcript]);
  SpeechRecognition.startListening({
    continuous: true,
    language: "en-US",
  });

  const speech = new SpeechSynthesisUtterance(
    "Acompany AI is now listening"
  );

  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
};

const {
  transcript,
  listening,
  resetTranscript,
} = useSpeechRecognition();

useEffect(() => {

  const speak = (text: string) => {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
};

const startVoiceAssistant = () => {
  resetTranscript();

  SpeechRecognition.startListening({
    continuous: true,
    language: "en-US",
  });

  speak("Acompany AI is now listening");
};

  const savedProjects = localStorage.getItem("projects");

  if (savedProjects) {
    setProjects(JSON.parse(savedProjects));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "projects",
    JSON.stringify(projects)
  );
}, [projects]);

const speak = (text: string) => {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
};

useEffect(() => {
  const text = transcript.toLowerCase();

  if (text.includes("hey acompany ai")) {
    speak("Hello Prashant, how can I help you today?");
    resetTranscript();
  }

}, [transcript]);

  return (
    
  <div className="min-h-screen text-black relative overflow-hidden">
<div className="absolute inset-0 -z-10">

<div className="text-white text-center">
  {transcript}
</div>

{theme === "blue" && (
  <div className="absolute inset-0 bg-[#07111f]"></div>
)}

{theme === "orange" && (
  <>
    <div className="absolute inset-0 bg-[#1a0d00]"></div>

    <div
      className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[1000px]
      h-[600px]
      bg-orange-500/20
      rounded-full
      blur-[220px]
      "
    ></div>
  </>
)}

  {theme === "black" && (
  <div className="absolute inset-0 bg-black"></div>
)}

{theme === "gradient" && (
  <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-blue-900"></div>
)}

{theme === "gradient" && (
  <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-black to-blue-900"></div>
)}

    {theme === "gradient" && (
  <div
    className="
    absolute
    inset-0
    bg-gradient-to-b
    from-[#f8fafc]
    via-[#e2eefb]
    to-[#8ec5f5]
    "
  ></div>
)}
{theme === "gradient" && (
  <>
    <div
      className="
      absolute
      inset-0
      bg-gradient-to-b
      from-[#f8fafc]
      via-[#e2eefb]
      to-[#8ec5f5]
      "
    ></div>

    <div
      className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[1200px]
      h-[400px]
      bg-sky-400/30
      blur-[180px]
      rounded-full
      "
    ></div>
  </>
)}

{theme === "navyblack" && (
  <>
    <div
      className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black
      via-[#020817]
      to-[#0f347d]
      "
    ></div>

    <div
      className="
      absolute
      bottom-[-200px]
      left-1/2
      -translate-x-1/2
      w-[1400px]
      h-[700px]
      bg-blue-600/25
      rounded-full
      blur-[280px]
      "
    ></div>
  </>
)}

</div>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">

       <div className="flex justify-center mb-8">
  <div className="relative w-12 h-12">

    {/* Outer Gradient Ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-yellow-400 to-pink-500 p-[1px]">

      {/* 3D Black Orb */}
      <div className="relative w-full h-full rounded-full bg-black overflow-hidden">

        {/* Top Light Reflection */}
        <div className="absolute top-4 left-6 w-16 h-8 bg-white/25 rounded-full blur-md rotate-[-20deg]" />

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
         <svg
  width="50"
  height="20"
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

<svg width="0" height="0">
  <defs>
    <linearGradient id="videoGradient">
      <stop offset="0%" stopColor="#8122ee" />
      <stop offset="50%" stopColor="#f3dc0e" />
      <stop offset="100%" stopColor="#ec4899" />
    </linearGradient>
  </defs>
</svg>

<button
 onClick={() => {
  setShowTransform(true);

  setTimeout(() => {
    setShowTransform(false);
    setShowAvatarModal(true);
  }, 700);
}}
  className="mt-10 flex justify-center"
>
  <Video
    size={22}
    strokeWidth={1.8}
    style={{
      stroke: "url(#videoGradient)"
    }}
  />
</button>

  </div>
</div>

      </div>

      {/* Recent Projects */}
      <div className="px-6">
     {showProjects && (
  <>
    <div
      onClick={() => setShowProjects(false)}
      className="
      fixed
      inset-0
      bg-black/40
      z-40
      "
    ></div>

    <div
className="
fixed
left-0
top-0
h-screen
w-[260px]
bg-[#f7f7f7]
border-r
border-gray-200
pt-2
px-3
z-50
shadow-sm
"
>

<div className="flex items-center justify-between mb-4">

 <button className="mt-8">
  <PanelLeftClose
    size={22}
    strokeWidth={1.8}
    className="text-white"
  />
</button>

 <button
className="
w-10
h-10
rounded-full
bg-zinc-800
border
border-zinc-700
text-white
font-semibold
hover:bg-zinc-700
transition
"
>
P
</button>


</div>

    <div className="mb-8">

<button

  onClick={() => {
    setMessages([]);
    setShowProjects(false);
  }}
  className="
w-full
flex
items-center
gap-4
px-3
py-2.5
rounded-xl
hover:bg-black/10
transition-all
text-black
"
>
  <>
  <PenSquare size={20} />
  <span>New chat</span> 
</>

</button>

<div className="space-y-1 mb-6 text-black">

 <button
  className="
  w-full
  flex
  items-center
  gap-4
  px-3
  py-2.5
  rounded-xl
  hover:bg-black/10
  transition-all
  text-black
  "
>
  <Search size={20} />
  <span>Search chats</span>
</button>

 <button
  className="
  w-full
  flex
  items-center
  gap-4
  px-3
  py-2.5
  rounded-xl
  hover:bg-black/10
  transition-all
  text-black
  "
>
  <Library size={20} />
  <span>Library</span>
</button>

<button
  className="
  w-full
  flex
  items-center
  gap-4
  px-3
  py-2.5
  rounded-xl
  hover:bg-black/10
  transition-all
  text-black
  "
>
  <FolderKanban size={20} />
  <span>Projects</span>
</button>

  <button
  className="
  w-full
  flex
  items-center
  gap-4
  px-3
  py-2.5
  rounded-xl
  hover:bg-b/10
  transition-all
  text-black
  "
>
  <Grid3X3 size={20} />
  <span>Apps</span>
</button>

<button
  className="
  w-full
  flex
  items-center
  gap-4
  px-3
  py-2.5
  rounded-xl
  hover:bg-black/10
  transition-all
  text-black
  "
>
  <Code2 size={20} />
  <span>Codex</span>
</button>

<button
  className="
  w-full
  flex
  items-center
  gap-4
  px-3
  py-2.5
  rounded-xl
  hover:bg-/10
  transition-all
  text-black
  "
>
  <MoreHorizontal size={20} />
  <span>More</span>
</button>

</div>

  <h2 className="text-sm font-semibold text-black mb-4">
  Recents
</h2>

</div>

    <div className="space-y-3">
      {projects.map((project, index) => (
        <div
          key={index}
        className="
w-full
text-left
px-4
py-4
mb-2
rounded-2xl
bg-[#1f1f1f]
hover:bg-[#2a2a2a]
text-white
transition-all
duration-200
truncate
"
        >
          {project}
        </div>
      ))}
    </div>
   </div>
  </>
)}

<button
  onClick={() => setShowProjects(!showProjects)}
  className="
  text-white
  text-2xl
  hover:text-blue-400
  transition-all
  duration-300
  "
>
  ☰
</button>
      </div>

      {/* Center Content */}
      <div className="
      flex
      flex-col
      items-center
      justify-center
      text-center
      mt-28
      px-4
      ">

       {messages.length === 0 && (
  <h1
  className="
  hero font
  text-2xl
  md:text-5xl
  font-light
  tracking-tight
  text-white/90
  "
>
   {heroText}
  </h1>
)}
<div
  className="
  mt-8
  max-w-5xl
  mx-auto
  space-y-6
  px-4
  pb-40
  "
>

  {messages.map((msg, index) => (
    <div
      key={index}
      className={`

      p-4
      rounded-3xl

      ${
        msg.role === "user"
? "ml-auto bg-white text-black max-w-2xl"
: "mr-auto bg-white/5 backdrop-blur-3xl border border-white/10 max-w-2xl"
      }

      `}
    >
      {msg.content}
    </div>
  ))}
{loading && (
  <div
    className="
    inline-flex
    items-center
    gap-1
    px-1.5
    py-3
    mt-4
    "
  >
    <span className="w-2 h-2 rounded-full bg-white animate-bounce"></span>
    <span
      className="w-2 h-2 rounded-full bg-white animate-bounce"
      style={{ animationDelay: "0.15s" }}
    ></span>
    <span
      className="w-2 h-2 rounded-full bg-white animate-bounce"
      style={{ animationDelay: "0.3s" }}
    ></span>
  </div>
)}
</div>
</div>

  {selectedImages.length > 0 && (
    <div
   className="
fixed
bottom-[95px]
left-1/2
-translate-x-1/2
w-[95%]
max-w-4xl
flex
gap-0
overflow-x-auto
z-50
"
  >
    {selectedImages.map((image, index) => (


      <div
        key={index}
        className="
relative
shrink-0
"
      >
       <img
  src={URL.createObjectURL(image)}
  alt="preview"
  className="
 w-40
h-20
  rounded-full
  object-cover
  "
        />

        <button
          onClick={() =>
            setSelectedImages(
              selectedImages.filter(
                (_, i) => i !== index
              )
            )
          }
          className="
          absolute
          -top-1
          -right-1
          w-8
          h-8
          rounded-full
          bg-black
          text-white
          text-xs
          "
        >
          ✕
        </button>
      </div>
    ))}
  </div>
)}

      {/* Bottom Glass Input */}
      <div className="
      fixed
      bottom-8
      left-1/2
      -translate-x-1/2
      w-[95%]
      max-w-4xl
      ">

       <div className="
bg-white
border
border-gray-200
rounded-full
px-4
h-[64px]
flex
items-center
gap-0
shadow-xl
">

<label className="cursor-pointer shrink-0 mr-2">

  <input
  type="file"
  accept="image/*"
  multiple
    className="hidden"
   onChange={(e) => {
  const files = Array.from(e.target.files || []);

  if (files.length > 0) {
    setSelectedImages((prev) => [
      ...prev,
      ...files,
    ].slice(0, 5));
  }
}}
  />
  <div
  >
    <label className="cursor-pointer shrink-0"></label>
    
  <Plus
  size={32}
  strokeWidth={1.5}
  className="text-gray-1000"
/>

  </div>
</label>
<input
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
 onKeyDown={(e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSend();
  }
}}
  placeholder={
    listening
      ? "Listening..."
      : "Ask AcompanyAI"
  }
  className="
    flex-1
    pr-2
    bg-white
    text-black
    text-[18px]
    md:text-[20px]
    font-normal
    tracking-tight
    outline-none
    placeholder:text-gray-500
  "
/>
{prompt.trim() ? (

<button
  id="send-btn"
  onClick={async () => {

    if (!prompt.trim()) return;

    const userMessage = prompt;

    setProjects((prev) => {
      if (prev.includes(userMessage)) return prev;

      const title =
        userMessage.length > 25
          ? userMessage.slice(0, 25) + "..."
          : userMessage;

      return [title, ...prev].slice(0, 10);
    });

    setMessages([
      ...messages,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setPrompt("");

    try {
      setLoading(true);

      const res = await fetch("https://acompanyai-production.up.railway.app/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    message: userMessage,
  }),
});

const data = await res.json();

console.log("Response:", data);
alert(JSON.stringify(data));

console.log("API Response:", data);

  setLoading(false);

if (data.error) {
  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: data.error,
    },
  ]);
  return;
}

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: data.reply,
    },
  ]);
    } catch {
      setLoading(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Backend connection failed",
        },
      ]);
    }
  }}

  className="
  w-11
  h-11
  rounded-full
  bg-black
  text-white
  flex
  items-center
  justify-center
  "
>
  <ArrowUp size={25} />
</button>

) : (

<button
  onClick={() => {
  SpeechRecognition.startListening({
    continuous: false,
    language: "en-US",
  });
}}
>
 <div
  className="
  relative
  z-10
  w-11
  h-11
  rounded-full
  bg-black
  flex
  items-center
  justify-center
  "
>
 <svg
  width="70"
  height="24"
  viewBox="0 0 120 40"
  className={listening ? "animate-pulse" : ""}
>
  <defs>
    <linearGradient id="voiceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
    stroke="url(#voiceGradient)"
    strokeWidth="6"
    strokeLinecap="round"
  />
</svg>
</div>
</button>
)}

        </div>

      </div>

<AnimatePresence>
  {showTransform && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9998] flex items-center justify-center backdrop-blur-md bg-black/60"
    >
      <motion.div
        initial={{
          scale: 1,
          opacity: 0.8,
        }}
        animate={{
          scale: 8,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        <Video
          size={40}
          strokeWidth={1.8}
          style={{
            stroke: "#ffffff",
          }}
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{showAvatarModal && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center">

    <div className="w-[420px] rounded-3xl border border-white/10 bg-[#0a0a0a] p-6">

      <h2 className="text-center text-white text-xl mb-6">
        Choose Your AI
      </h2>

<div className="text-center text-white/70 mb-4">
  Selected: {selectedAvatar}
</div>

      <div className="grid grid-cols-2 gap-4">

        <button
  onClick={() => setSelectedAvatar("girl")}
  className={`
${
  selectedAvatar === "girl"
  ? "border-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.6)]"
  : "border-white/10"
}
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    hover:border-violet-500
    transition-all
    duration-300
 
   bg-white/[0.02]
`}
>
  <img
    src="/avatars/ai-girl.jpg"
    alt="AI Girl"
    className="w-full h-40 object-cover object-top"
  />

  <div className="p-3 text-center text-white">
    AI Girl
  </div>
</button>

        <button
        onClick={() => setSelectedAvatar("boy")}
  className="
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    hover:border-sky-500
    transition-all
    duration-300
    bg-white/[0.02]
  "
>
  <img
    src="/avatars/ai-boy.jpg"
    alt="AI Boy"
    className="w-full h-40 object-cover object-top"
  />

  <div className="p-3 text-center text-white">
    AI Boy
  </div>
</button>

        <button
        onClick={() => setSelectedAvatar("business")}
  className="
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    hover:border-amber-500
    transition-all
    duration-300
    bg-white/[0.02]
  "
>
  <img
    src="/avatars/business.jpg"
    alt="Business Mentor"
    className="w-full h-40 object-cover"
  />

  <div className="p-3 text-center text-white">
    Business Mentor
  </div>
</button>
       <button
       onClick={() => setSelectedAvatar("teacher")}
  className="
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    hover:border-emerald-500
    transition-all
    duration-300
    bg-white/[0.02]
  "
>
  <img
    src="/avatars/teacher.jpg"
    alt="Teacher"
    className="w-full h-40 object-cover"
  />

  <div className="p-3 text-center text-white">
    Teacher
  </div>
</button>

      </div>

      <button
      onClick={() => {
  if (!selectedAvatar) {
    alert("Please select an avatar");
    return;
  }

  console.log(selectedAvatar);
localStorage.setItem("avatar", selectedAvatar);
setShowAvatarModal(false);
window.location.href = "/video-call";}}

        className="mt-6 w-full py-3 rounded-xl bg-white/10 text-white"
      >
       Continue
      </button>

    </div>

  </div>
)}

    </div>
  );
}