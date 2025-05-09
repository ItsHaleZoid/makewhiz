import React from "react";

type RecentActivityItem = {
  time: string;
  activity: string;
};

type RecentActivityProps = {
  recentActivities: RecentActivityItem[];
};

export default function RecentActivity({ recentActivities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-black p-6 px-20 max-w-6xl mx-auto mb-10">
      <h2 className="text-xl font-bold text-purple-700 mb-4">
        Recent Activity
      </h2>
      <ul className="divide-y divide-purple-50">
        {recentActivities.map((item, idx) => (
          <li key={idx} className="py-3 flex items-center justify-between">
            <span className="text-gray-700">{item.activity}</span>
            <span className="text-xs text-gray-400">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 