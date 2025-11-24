import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  MessageSquare, 
  LayoutDashboard, 
  Sparkles, 
  Image as ImageIcon, 
  Video, 
  Mic, 
  Copy 
} from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-6">
      {/* Top Notification */}
      <div className="flex justify-center mb-8">
        <div className="bg-white border border-gray-200 rounded-full shadow-sm pl-1 pr-2 py-1 flex items-center gap-2 text-sm animate-fade-in">
          <span className="bg-[#e7fbf2] text-[#0f5223] text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wide border border-[#c4eed0]">New</span>
          <span className="text-gray-600">Gemini 3: Our most intelligent model to date.</span>
          <button className="ml-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Try it
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-xl font-medium text-[#1f1f1f] flex items-center gap-2">
            <span className="font-bold">Google</span> AI Studio
          </h1>
          <p className="text-[#444746] mt-1 text-sm">The fastest way from prompt to production with Gemini</p>
        </div>
        <Link to="/playground" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-[#444746] hover:bg-gray-50 transition-colors bg-white">
           <span className="text-lg leading-none font-light mr-1">+</span> Create new
        </Link>
      </div>

      {/* Primary Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Link to="/playground" className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer bg-white flex items-center gap-4 group">
           <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
             <Code size={20} />
           </div>
           <div>
             <h3 className="text-sm font-medium text-gray-900">Vibe code GenAI apps</h3>
             <p className="text-xs text-gray-500 mt-1">Generate code with Gemini</p>
           </div>
        </Link>
        <Link to="/playground" className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer bg-white flex items-center gap-4 group">
           <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
             <MessageSquare size={20} />
           </div>
           <div>
             <h3 className="text-sm font-medium text-gray-900">Chat with models</h3>
             <p className="text-xs text-gray-500 mt-1">Design conversational agents</p>
           </div>
        </Link>
        <Link to="/dashboard" className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer bg-white flex items-center gap-4 group">
           <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
             <LayoutDashboard size={20} />
           </div>
           <div>
             <h3 className="text-sm font-medium text-gray-900">Monitor usage</h3>
             <p className="text-xs text-gray-500 mt-1">View analytics and projects</p>
           </div>
        </Link>
      </div>

      {/* What's New */}
      <div className="mb-8">
        <h2 className="text-sm font-medium text-[#1f1f1f] mb-4">What's new</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors cursor-pointer bg-white">
            <div className="p-2 rounded-full bg-gray-100 text-gray-600">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Try Gemini 3</h3>
              <p className="text-xs text-gray-500 mt-1">Our most intelligent model to date.</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors cursor-pointer bg-white">
            <div className="p-2 rounded-full bg-gray-100 text-gray-600">
              <ImageIcon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Try Nano Banana</h3>
              <p className="text-xs text-gray-500 mt-1">State-of-the-art image generation and editing</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors cursor-pointer bg-white">
            <div className="p-2 rounded-full bg-gray-100 text-gray-600">
              <Video size={20} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Veo 3.1</h3>
              <p className="text-xs text-gray-500 mt-1">Our best video generation model, now with sound effects.</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors cursor-pointer bg-white">
            <div className="p-2 rounded-full bg-gray-100 text-gray-600">
              <Mic size={20} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Text to speech with Gemini</h3>
              <p className="text-xs text-gray-500 mt-1">Generate high quality text to speech with Gemini</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started / Code Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-medium text-[#1f1f1f]">Get started with Gemini</h2>
          <div className="flex gap-4 text-sm font-medium text-[#444746]">
            <button className="hover:text-blue-600 transition-colors">View API keys</button>
            <button className="hover:text-blue-600 transition-colors">Explore docs</button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-white">
             <div className="flex items-center gap-2">
               <div className="px-3 py-1 rounded bg-gray-100 text-xs font-medium text-gray-700 flex items-center gap-1 cursor-pointer hover:bg-gray-200 transition-colors">
                 Python <span className="text-gray-400 text-[10px]">▼</span>
               </div>
             </div>
             <button className="text-gray-400 hover:text-gray-600 transition-colors">
               <Copy size={16} />
             </button>
          </div>
          <div className="p-6 font-mono text-sm overflow-x-auto custom-scrollbar bg-white">
            <pre className="text-[#1f1f1f]">
              <span className="text-[#d0155e]">from</span> google <span className="text-[#d0155e]">import</span> genai<br/><br/>
              client = genai.Client()<br/><br/>
              response = client.models.generate_content(<br/>
              &nbsp;&nbsp;model=<span className="text-[#188038]">"gemini-3-pro-preview"</span>,<br/>
              &nbsp;&nbsp;contents=<span className="text-[#188038]">"Explain how AI works in a few words"</span>,<br/>
              )<br/><br/>
              print(response.text)
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;