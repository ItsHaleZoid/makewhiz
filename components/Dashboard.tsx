"use client";
import React from "react";
import RecentActivity from "./RecentActivity";  
import UserUIs from "./UserUIs";
const stats = [
  {
    label: "Total Projects",
    value: 12,
    color: "bg-yellow-100 text-yellow-800 border-yellow-300",
  },
  {
    label: "Active Users",
    value: 87,
    color: "bg-purple-100 text-purple-800 border-purple-300",
  },
  {
    label: "UIs Generated",
    value: 154,
    color: "bg-blue-100 text-blue-800 border-blue-300",
  },
];



export default function Dashboard() {
    const recentActivities = [
        {
          time: "2 min ago",
          activity: "Generated a new login page UI",
        },
        {
          time: "10 min ago",
          activity: "Created a dashboard layout",
        },
        {
          time: "1 hour ago",
          activity: "Updated project settings",
        },
      ];
  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold text-indigo-800 mb-6 font-heading">
        Welcome back! 👋
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl border-2 shadow-lg p-6 flex flex-col items-center ${stat.color}`}
          >
            <span className="text-4xl font-black mb-2">{stat.value}</span>
            <span className="text-lg font-semibold">{stat.label}</span>
            
            

          </div>
          
        ))}
        
        
            
        
      </div>
       <RecentActivity recentActivities={recentActivities} />
       <UserUIs />
    </div>
  );
}
