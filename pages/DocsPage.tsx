import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const DocsPage = () => (
  <div className="flex-1 flex flex-col h-full items-center justify-center text-gray-500">
     <BookOpen size={64} className="mb-4 text-gray-200" />
     <h2 className="text-xl font-medium text-gray-900 mb-2">Documentation</h2>
     <p className="mb-6">External documentation would load here.</p>
     <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
       Visit ai.google.dev <ExternalLink size={14} />
     </a>
  </div>
);

export default DocsPage;