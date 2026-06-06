"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-white/10 flex items-center justify-between px-6">
      
      <div className="hidden md:flex items-center bg-white/5 rounded-2xl px-4 py-3 w-[420px]">
        <Search size={18} />
        <input
          placeholder="Search projects..."
          className="bg-transparent outline-none ml-3 w-full"
        />
      </div>

      <div className="flex items-center gap-4 ml-auto">
        
        <button className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
          <Bell size={20} />
        </button>

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center font-bold">
          P
        </div>

      </div>

    </header>
  );
}