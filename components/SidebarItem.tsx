import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  to, 
  active = false, 
  hasSub = false 
}: { 
  icon: React.ElementType, 
  label: string, 
  to: string, 
  active?: boolean, 
  hasSub?: boolean 
}) => {
  return (
    <Link 
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium transition-colors mb-1 group
        ${active ? 'bg-[#e8f0fe] text-[#1967d2]' : 'text-[#444746] hover:bg-google-hover'}`}
    >
      <Icon size={20} strokeWidth={2} className={active ? 'text-[#1967d2]' : 'text-[#444746]'} />
      <span className="flex-1">{label}</span>
      {hasSub && <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600" />}
    </Link>
  );
};

export default SidebarItem;