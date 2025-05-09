"use client";
import UIGenerator from "@/components/UIGenerator";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Settings from "@/components/Settings";
import { useState } from "react";

export default function MyProjectsPage() {
  // 0: UI Generator, 1: My Projects, 2: Settings
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        selectedIndex={selectedIndex}
        onSelect={(idx) => setSelectedIndex(idx)}
      />
      <div className="flex-1 h-screen overflow-y-auto bg-gradient-to-br from-yellow-50 via-white to-purple-100">
        {selectedIndex === 2 ? (
          <Settings />
        ) : selectedIndex === 1 ? (
          <UIGenerator />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}