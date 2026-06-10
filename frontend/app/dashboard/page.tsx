"use client";
import { useState, useEffect } from "react";

import {
  Menu,
  Plus,
  ArrowUp,
  PenSquare,
  Search,
  Library,
  FolderKanban,
  Grid3X3,
  Code2,
  MoreHorizontal,
} from "lucide-react";

export default function Dashboard()

 {const [prompt, setPrompt] = useState("");
  
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

const [heroText] = useState(
  welcomeMessages[
    Math.floor(Math.random() * welcomeMessages.length)
  ]
);
const [messages, setMessages] = useState<any[]>([]);

const [selectedImages, setSelectedImages] = useState<File[]>([]);

const [loading, setLoading] = useState(false);
const [showProjects, setShowProjects] = useState(false);

const [projects, setProjects] = useState<string[]>([]);

useEffect(() => {
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

const themes = [
  "black",
  "blue",
  "orange",
  "gradient",
  "blackblue",
  "navyblack",
];

const [theme] = useState(
  themes[Math.floor(Math.random() * themes.length)]
);
  return (
    
  <div className="min-h-screen text-black dark:text-white relative overflow-hidden">
<div className="absolute inset-0 -z-10">

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

        <h1 className="text-3xl font-black text-white">
  Acompany
  <span
    className="
    bg-gradient-to-r
    from-[#A78BFA]
    via-[#8B7CF8]
    to-[#60A5FA]
    bg-clip-text
    text-transparent
    "
  >
    AI
  </span>
</h1>

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

  <button
    onClick={() => setShowProjects(false)}
    className="
    w-10
    h-10
    rounded-lg
    hover:bg-black/5
    flex
    items-center
    justify-center
    transition-all
    "
  >
    <Menu size={20} />
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
       bg-white/[0.03]
        backdrop-blur-2xl
        border
        border-white/5
        rounded-full
        px-6
        py-4
        flex
        items-center
        gap-1
        ">

         {selectedImages.length > 0 && (
  <div
   className="
flex
flex-wrap
gap-3
mb-4
"
  >
    {selectedImages.map((image, index) => (
      <div
        key={index}
        className="relative"
      >
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          className="
          w-20
          h-20
          rounded-xl
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
          w-5
          h-5
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
    <Plus size={35} />
  </div>
</label>

          <input
  placeholder="Ask AcompanyAI"
  className="
  flex-1
  text-2xl
  pl-0
  "
/>
<button
  onClick={async () => {
     console.log("SEND CLICKED");
     
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
     const res = await fetch("http://127.0.0.1:5000/chat");
      const data = await res.json();
await new Promise((resolve) =>
  setTimeout(resolve, 2500)
);

setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) { 
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
w-15
h-15
rounded-full
bg-black
text-white
flex
items-center
justify-center
"
><ArrowUp size={30} />
  
</button>
        </div>

      </div>

    </div>
  );
}