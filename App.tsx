import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import PlaygroundPage from './pages/PlaygroundPage';
import BuildPage from './pages/BuildPage';
import DashboardPage from './pages/DashboardPage';
import ApiKeyPage from './pages/ApiKeyPage';
import SettingsPage from './pages/SettingsPage';
import DocsPage from './pages/DocsPage';

const App = () => {
  return (
    <HashRouter>
      <div className="flex h-screen w-full bg-white text-[#1f1f1f]">
        <Sidebar />
        <main className="flex-1 ml-[280px] overflow-y-auto h-full bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/build" element={<BuildPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/apikey" element={<ApiKeyPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;