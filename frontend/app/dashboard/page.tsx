"use client";

import { useState } from "react";
import { Plus, Mic } from "lucide-react";
export default function Dashboard() {
  const [showProjects, setShowProjects] = useState(false);
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

       <h1 className="text-4xl md:text-6xl font-black text-white">
  What can I help with today?
</h1>
        
        
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

          
<label className="cursor-pointer">
  <input
    type="file"
    accept="image/*"
    className="hidden"
  />

  <div
    className="
    
  
    flex
    items-center
    justify-center
    hover:bg-white/[0.08]
    transition-all
    duration-300
    "
  >
    <Plus size={30

    } />
  </div>
</label>
          <input
            placeholder="Ask AcompanyAI"
            className="
            flex-1
            bg-transparent
            outline-none
            "
          />
<button
  className="
 "
>
   <button
  className="
  px-5
  py-2
  rounded-full
  bg-white
  text-black
  font-semibold
  hover:scale-105
  transition-all
  duration-300
  "
>
  Send
</button>
 
</button>       
        </div>

      </div>

    </div>
  );
}