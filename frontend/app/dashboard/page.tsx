"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Plus, Mic } from "lucide-react";
export default function Dashboard() {const [prompt, setPrompt] = useState("");

const [messages, setMessages] = useState([
  {
    role: "assistant",
    content: "Welcome to AcompanyAI ",
  },
]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  return (
    
    <div className="min-h-screen text-white relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 -z-1000 bg-black"></div>
 
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-500/5 rounded-full blur-[250px]"></div>

  <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[250px]"></div>

</div>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5">

        <h1 className="text-3xl font-black">
          Acompany
          <span className="text-violet-400">AI</span>
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

        <button className="

">
         
        </button>
<button
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

       <h1 className="text-2xl md:text-6xl font-black text-white">
  What can I help with today?
</h1><div className="mt-8 max-w-4xl mx-auto space-y-4 px-4">

  {messages.map((msg, index) => (
    <div
      key={index}
      className={`

      p-4
      rounded-3xl

      ${
        msg.role === "user"
          ? "ml-auto bg-violet-600 max-w-xl"
          : "bg-white/5 backdrop-blur-xl border border-white/10 max-w-xl"
      }

      `}
    >
      {msg.content}
    </div>
  ))}

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
        gap-4
        ">

          {selectedImage && (
  <div className="mb-3 text-white">
    Selected: {selectedImage.name}
  </div>
)}
<label className="cursor-pointer">

  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={(e) => {
      if (e.target.files?.[0]) {
        setSelectedImage(e.target.files[0]);
      }
    }}
  />

  <div
    className="
    w-7
    h-10
  
    flex items-center justify-center
    "
  >
    <Plus size={35} />
  </div>

</label>
          <input
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Ask AcompanyAI"
  className="
  flex-1
  bg-transparent
  outline-none
  text-white
  "
/>
<button
  onClick={() => {
    if (!prompt.trim()) return;

    setMessages([
      ...messages,
      {
        role: "user",
        content: prompt,
      },
      {
        role: "assistant",
        content: "AI response coming soon...",
      },
    ]);

    setPrompt("");
  }}
  className="
  px-5
  py-2
  rounded-full
  bg-white
  text-black
  font-semibold
  "
>
  Send
</button>
        </div>

      </div>

    </div>
  );
}