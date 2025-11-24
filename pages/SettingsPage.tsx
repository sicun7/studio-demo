import React from 'react';

const SettingsPage = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-medium text-[#1f1f1f] mb-8">Settings</h1>
      
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100">
        
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Account</h2>
          <p className="text-sm text-gray-500 mb-6">Manage your profile and preferences</p>
          
          <div className="flex items-center gap-4 mb-6">
             <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-2xl font-bold">I</div>
             <div>
               <div className="font-medium text-gray-900">if.zhangp@gmail.com</div>
               <div className="text-sm text-gray-500">Google Account</div>
             </div>
          </div>
          
          <button className="text-sm text-blue-600 font-medium hover:underline">Manage Google Account</button>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Theme</span>
            <div className="flex bg-gray-100 p-1 rounded-lg">
               <button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-xs font-medium text-gray-900">Light</button>
               <button className="px-4 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">Dark</button>
               <button className="px-4 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900">System</button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Data & Privacy</h2>
          <div className="flex items-start gap-3 mb-4">
             <input type="checkbox" defaultChecked className="mt-1 text-blue-600 focus:ring-blue-500 rounded" />
             <div>
               <label className="text-sm font-medium text-gray-900">Allow Google to improve models</label>
               <p className="text-xs text-gray-500 mt-1">When enabled, Google may use your prompts and responses to improve our products.</p>
             </div>
          </div>
        </div>

      </div>

      <div className="mt-8 flex justify-end">
         <button className="px-6 py-2 bg-[#1a73e8] text-white rounded-full font-medium text-sm hover:bg-[#155db5] transition-colors shadow-sm">
            Save changes
         </button>
      </div>
    </div>
  );
};

export default SettingsPage;