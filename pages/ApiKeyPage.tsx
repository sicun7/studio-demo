import React from 'react';
import { AlertCircle, Plus, Copy, Trash2, MoreVertical } from 'lucide-react';

const ApiKeyPage = () => {
  const keys = [
    { id: 1, name: "My First API Key", key: "AIzaSyB...5d9A", created: "Oct 24, 2024", lastUsed: "Today" },
    { id: 2, name: "Test Project Key", key: "AIzaSyC...9s2X", created: "Sep 15, 2024", lastUsed: "3 days ago" },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-[#1f1f1f] mb-2">API Keys</h1>
        <p className="text-gray-600">Manage API keys for your projects. Keep them secret.</p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 mb-8">
        <div className="text-blue-600 mt-0.5">
          <AlertCircle size={20} />
        </div>
        <div className="text-sm text-blue-900">
          <p className="font-medium mb-1">Security Best Practices</p>
          <p>Do not share your API key with others or expose it in client-side code (browsers, apps). Production use requires setting up billing.</p>
        </div>
      </div>

      <button className="mb-6 flex items-center gap-2 px-5 py-2.5 bg-[#1a73e8] text-white rounded-full text-sm font-medium hover:bg-[#155db5] transition-colors shadow-sm">
        <Plus size={18} />
        Create API Key
      </button>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">API Key</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4">Last Used</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {keys.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 text-sm font-mono text-gray-600 flex items-center gap-2">
                  {item.key}
                  <button className="text-gray-400 hover:text-gray-600"><Copy size={14} /></button>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.created}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.lastUsed}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                   <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"><Trash2 size={16} /></button>
                   <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"><MoreVertical size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiKeyPage;