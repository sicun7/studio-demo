import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, 
  TerminalSquare, 
  Hammer, 
  LayoutDashboard, 
  BookOpen, 
  Key, 
  Settings, 
  Menu 
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const location = useLocation();
  const p = location.pathname;
  
  return (
    <div className="w-[280px] bg-[#f9f9fa] h-screen flex flex-col border-r border-google-border fixed left-0 top-0 z-20">
      {/* Header */}
      <div className="h-16 flex items-center px-4 gap-2">
        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <Menu size={20} className="text-[#444746]" />
        </button>
        <Link to="/" className="text-lg font-medium text-[#444746] hidden md:block">Google AI Studio</Link> 
      </div>

      {/* Navigation */}
      <div className="flex-1 px-2 py-2 overflow-y-auto custom-scrollbar">
        <div className="mb-6">
          <Link to="/" className={`flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium transition-colors mb-1 ${p === '/' ? 'bg-[#e8f0fe] text-[#1967d2]' : 'text-[#444746] hover:bg-google-hover'}`}>
            <Home size={20} />
            <span>Home</span>
          </Link>
          
          <div className="mt-4 mb-2 px-4 text-xs font-medium text-gray-500">QUICK ACCESS</div>
          <SidebarItem icon={TerminalSquare} label="Playground" to="/playground" active={p.startsWith('/playground')} />
        </div>

        <div className="mt-4">
          <div className="px-4 mb-2 text-xs font-medium text-gray-500">LIBRARY</div>
          <SidebarItem icon={Hammer} label="My Library" to="/build" active={p.startsWith('/build')} hasSub />
          <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/dashboard" active={p.startsWith('/dashboard')} />
          <SidebarItem icon={BookOpen} label="Documentation" to="/docs" active={p.startsWith('/docs')} />
        </div>
      </div>

      {/* Footer */}
      <div className="p-2 mb-2 border-t border-gray-200 pt-3">
        <SidebarItem icon={Key} label="Get API key" to="/apikey" active={p === '/apikey'} />
        <SidebarItem icon={Settings} label="Settings" to="/settings" active={p === '/settings'} />
        <div className="flex items-center gap-3 px-4 py-2 mt-2 text-[#444746] text-sm font-medium cursor-pointer hover:bg-google-hover rounded-full transition-colors">
          <div className="w-6 h-6 rounded-full bg-green-700 text-white flex items-center justify-center text-xs font-bold">I</div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-xs text-gray-700">if.zhangp@gmail.com</span>
            <span className="text-[10px] text-gray-500">Free plan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;