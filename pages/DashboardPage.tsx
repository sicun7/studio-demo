import React from 'react';
import { ChevronRight, Activity, AlertCircle, SlidersHorizontal } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium text-[#1f1f1f]">Dashboard</h1>
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white">
          <span>Last 30 Days</span>
          <ChevronRight size={14} className="rotate-90" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
             <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
               <Activity size={20} />
             </div>
             <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">+12%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Total Requests</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">1,248</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
             <div className="p-2 bg-red-50 rounded-lg text-red-600">
               <AlertCircle size={20} />
             </div>
             <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded">0%</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Error Rate</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">0.8%</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
             <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
               <SlidersHorizontal size={20} />
             </div>
             <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">-5ms</span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Avg. Latency</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">420ms</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Requests over time</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {[35, 45, 30, 60, 75, 50, 65, 80, 55, 40, 70, 90, 65, 55, 85, 95, 70, 60, 75, 85, 65, 50, 70, 80, 90, 100, 85, 75, 65, 80].map((h, i) => (
             <div key={i} className="w-full bg-blue-100 rounded-t-sm hover:bg-blue-200 transition-colors relative group" style={{ height: `${h}%` }}>
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                 {h} reqs
               </div>
             </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>Oct 1</span>
          <span>Oct 30</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;