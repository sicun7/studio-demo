import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, MoreVertical } from 'lucide-react';

const BuildPage = () => {
  const libraryItems = [
    { id: 1, name: "Customer Support Agent", type: "Chat", date: "2 mins ago", model: "Gemini 1.5 Pro" },
    { id: 2, name: "Blog Post Generator", type: "Freeform", date: "Yesterday", model: "Gemini 1.5 Flash" },
    { id: 3, name: "Code Reviewer", type: "Chat", date: "Oct 24, 2024", model: "Gemini 1.5 Pro" },
    { id: 4, name: "Image Captioning", type: "Media", date: "Sep 12, 2024", model: "Gemini 1.5 Flash" },
    { id: 5, name: "Data Extraction", type: "Freeform", date: "Aug 30, 2024", model: "Gemini 1.0 Pro" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-[#1f1f1f]">My Library</h1>
        <Link to="/playground" className="flex items-center gap-2 px-4 py-2 bg-[#1a73e8] text-white rounded-full text-sm font-medium hover:bg-[#155db5] transition-colors shadow-sm">
           <Plus size={18} />
           Create new
        </Link>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search prompts..." 
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Model</th>
              <th className="px-6 py-4">Last Modified</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {libraryItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 font-medium text-gray-900 cursor-pointer">{item.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${item.type === 'Chat' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.model}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-all">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuildPage;