"use client";

import {
  LayoutDashboard,
  Sparkles,
  Image,
  FileImage,
  FolderOpen,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Sparkles, label: "AI Studio" },
    { icon: Image, label: "Poster Maker" },
    { icon: FileImage, label: "Banner Maker" },
    { icon: FolderOpen, label: "Projects" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white/5 backdrop-blur-xl border-r border-white/10">
      <div className="p-8">
        <h1 className="text-3xl font-black">
          Acompany<span className="text-violet-500">AI</span>
        </h1>
      </div>

      <nav className="px-4 flex-1">
        {menu.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition mb-2"
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}