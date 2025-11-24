import React, { useState } from 'react';
import { Code, Save, Play, ChevronRight, Mic, Image as ImageIcon } from 'lucide-react';

const PlaygroundPage = () => {
  const [systemOpen, setSystemOpen] = useState(true);

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Toolbar */}
      <div className="h-14 border-b border-gray-200 flex items-center justify-between px-4 bg-white shrink-0">
        <div className="flex items-center gap-4">
          <input 
            type="text" 
            defaultValue="Untitled prompt" 
            className="text-lg font-medium text-gray-800 focus:outline-none hover:bg-gray-50 px-2 py-1 rounded border border-transparent focus:border-gray-300 focus:bg-white transition-colors w-64"
          />
          <div className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600 font-medium border border-gray-200">Draft</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors" title="Code">
             <Code size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 text-gray-700 hover:bg-gray-100 rounded-full font-medium text-sm transition-colors">
            <Save size={18} />
            Save
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-[#1a73e8] hover:bg-[#155db5] text-white rounded-full font-medium text-sm shadow-sm transition-colors">
            <Play size={16} fill="currentColor" />
            Run
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Center Canvas */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-[#f8f9fa] p-4 gap-4">
          
          {/* System Instructions */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden shrink-0">
             <div 
               className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
               onClick={() => setSystemOpen(!systemOpen)}
             >
               <h3 className="text-sm font-medium text-gray-700">System Instructions</h3>
               <ChevronRight size={16} className={`text-gray-400 transition-transform ${systemOpen ? 'rotate-90' : ''}`} />
             </div>
             {systemOpen && (
               <div className="p-4 pt-0 border-t border-transparent">
                 <textarea 
                   className="w-full min-h-[80px] p-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none font-mono"
                   placeholder="Optional: Give the model a persona or set of rules..."
                 ></textarea>
               </div>
             )}
          </div>

          {/* Chat / Prompt Area */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex-1 flex flex-col min-h-[300px]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <span className="text-sm font-medium text-gray-700">User input</span>
              <button className="text-xs text-blue-600 hover:underline">Add variable</button>
            </div>
            <div className="flex-1 p-4 relative group">
               <textarea 
                  className="w-full h-full resize-none focus:outline-none text-base text-gray-800 font-sans leading-relaxed bg-transparent"
                  placeholder="Type your prompt here or type @ to add a file..."
               ></textarea>
               <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600">
                   <Mic size={18} />
                 </button>
                 <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600">
                   <ImageIcon size={18} />
                 </button>
               </div>
            </div>
          </div>

           {/* Output Area Placeholder */}
           <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 min-h-[100px] flex items-center justify-center text-gray-400 text-sm border-dashed">
              Click Run to generate content
           </div>

        </div>

        {/* Right Settings Sidebar */}
        <div className="w-[300px] border-l border-gray-200 bg-white flex flex-col overflow-y-auto">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Run Settings</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-md leading-tight focus:outline-none focus:border-blue-500 text-sm">
                  <option>Gemini 2.5 Flash</option>
                  <option>Gemini 3 Pro (Preview)</option>
                  <option>Gemini 1.5 Pro</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
               <div className="flex justify-between mb-1">
                 <label className="text-sm text-gray-700">Temperature</label>
                 <span className="text-sm text-gray-500">1.0</span>
               </div>
               <input type="range" min="0" max="2" step="0.1" defaultValue="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            
            <div className="mb-4">
               <div className="flex justify-between mb-1">
                 <label className="text-sm text-gray-700">Safety Settings</label>
                 <span className="text-xs text-blue-600 cursor-pointer">Edit</span>
               </div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Advanced</h3>
            <div className="mb-4">
               <div className="flex justify-between mb-1">
                 <label className="text-sm text-gray-700">Output length</label>
                 <span className="text-sm text-gray-500">8192</span>
               </div>
               <input type="range" min="1" max="8192" defaultValue="8192" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div className="flex items-center justify-between mb-2">
               <label className="text-sm text-gray-700">JSON Mode</label>
               <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundPage;