import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Calculator, 
  Clock, 
  Music, 
  FileText, 
  CheckSquare, 
  Cloud, 
  Code, 
  Terminal, 
  Camera, 
  Mail,
  Folder,
  Settings,
  Power,
  Minimize2,
  Maximize2,
  X,
  MoreHorizontal,
  Search,
  Volume2
} from 'lucide-react';

const DesktopOS = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [contextMenu, setContextMenu] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const desktopRef = useRef(null);

  // Desktop backgrounds
  const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  ];

  // Desktop apps configuration
  const apps = [
    { id: 'calculator', name: 'Calculator', icon: Calculator, color: 'bg-blue-500' },
    { id: 'calendar', name: 'Calendar', icon: Calendar, color: 'bg-red-500' },
    { id: 'notes', name: 'Notes', icon: FileText, color: 'bg-yellow-500' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-purple-500' },
    { id: 'todo', name: 'Todo List', icon: CheckSquare, color: 'bg-green-500' },
    { id: 'weather', name: 'Weather', icon: Cloud, color: 'bg-cyan-500' },
    { id: 'vscode', name: 'VS Code', icon: Code, color: 'bg-blue-600' },
    { id: 'terminal', name: 'Terminal', icon: Terminal, color: 'bg-gray-800' },
    { id: 'portfolio', name: 'Portfolio', icon: Folder, color: 'bg-orange-500' }
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle right-click context menu
  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Close context menu when clicking elsewhere
  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Open app function
  const openApp = (appId) => {
    if (!openApps.find(app => app.id === appId)) {
      const app = apps.find(a => a.id === appId);
      const newApp = {
        ...app,
        windowId: Date.now(),
        isMinimized: false,
        isMaximized: false,
        position: { x: 100 + openApps.length * 30, y: 60 + openApps.length * 30 }
      };
      setOpenApps([...openApps, newApp]);
      setActiveApp(newApp.windowId);
    } else {
      const app = openApps.find(app => app.id === appId);
      setActiveApp(app.windowId);
    }
    setShowStartMenu(false);
  };

  // Close app function
  const closeApp = (windowId) => {
    setOpenApps(openApps.filter(app => app.windowId !== windowId));
    if (activeApp === windowId) {
      const remainingApps = openApps.filter(app => app.windowId !== windowId);
      setActiveApp(remainingApps.length > 0 ? remainingApps[remainingApps.length - 1].windowId : null);
    }
  };

  // Minimize app function
  const minimizeApp = (windowId) => {
    setOpenApps(openApps.map(app => 
      app.windowId === windowId ? { ...app, isMinimized: true } : app
    ));
    if (activeApp === windowId) {
      setActiveApp(null);
    }
  };

  // Maximize/restore app function
  const toggleMaximize = (windowId) => {
    setOpenApps(openApps.map(app => 
      app.windowId === windowId ? { ...app, isMaximized: !app.isMaximized } : app
    ));
  };

  // Restore minimized app
  const restoreApp = (windowId) => {
    setOpenApps(openApps.map(app => 
      app.windowId === windowId ? { ...app, isMinimized: false } : app
    ));
    setActiveApp(windowId);
  };

  // Sample app content components
  const AppContent = ({ app }) => {
    switch (app.id) {
      case 'calculator':
        return (
          <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4 text-right text-2xl font-mono">0</div>
            <div className="grid grid-cols-4 gap-2">
              {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '0', '.', '='].map((btn, i) => (
                <button key={i} className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg font-semibold transition-colors">
                  {btn}
                </button>
              ))}
            </div>
          </div>
        );
      case 'notes':
        return (
          <div className="p-4 h-full">
            <textarea 
              className="w-full h-full resize-none border-none outline-none bg-transparent"
              placeholder="Start typing your notes..."
            />
          </div>
        );
      case 'music':
        return (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Music className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Now Playing</h3>
              <p className="text-gray-600">Sample Track - Artist Name</p>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <button className="p-2 rounded-full hover:bg-gray-200">⏮</button>
              <button className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600">▶</button>
              <button className="p-2 rounded-full hover:bg-gray-200">⏭</button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">1:23</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>
              </div>
              <span className="text-sm">3:45</span>
            </div>
          </div>
        );
      case 'weather':
        return (
          <div className="p-6">
            <div className="text-center">
              <Cloud className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold mb-2">San Francisco</h3>
              <p className="text-4xl font-light mb-4">72°F</p>
              <p className="text-gray-600 mb-6">Partly Cloudy</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Wind</p>
                  <p>8 mph</p>
                </div>
                <div>
                  <p className="font-semibold">Humidity</p>
                  <p>65%</p>
                </div>
                <div>
                  <p className="font-semibold">Pressure</p>
                  <p>30.12 in</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'terminal':
        return (
          <div className="p-4 bg-gray-900 text-green-400 font-mono text-sm h-full">
            <div>user@portfolio:~$ Welcome to the terminal!</div>
            <div>user@portfolio:~$ ls -la</div>
            <div>drwxr-xr-x  3 user user  4096 Sep 27 12:00 projects/</div>
            <div>drwxr-xr-x  2 user user  4096 Sep 27 12:00 skills/</div>
            <div>-rw-r--r--  1 user user  1024 Sep 27 12:00 resume.pdf</div>
            <div className="mt-2">user@portfolio:~$ <span className="animate-pulse">|</span></div>
          </div>
        );
      default:
        return (
          <div className="p-6 text-center">
            <app.icon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold mb-2">{app.name}</h3>
            <p className="text-gray-600">This is a demo of the {app.name} application.</p>
          </div>
        );
    }
  };

  return (
    <div 
      ref={desktopRef}
      className="h-screen w-full overflow-hidden relative"
      style={{ 
        background: backgrounds[backgroundIndex],
        transition: 'background 0.5s ease-in-out'
      }}
      onContextMenu={handleContextMenu}
    >
      {/* Desktop Icons */}
      <div className="absolute top-6 left-6 grid grid-cols-1 gap-4">
        {apps.slice(0, 6).map((app) => (
          <div
            key={app.id}
            className="flex flex-col items-center cursor-pointer group"
            onDoubleClick={() => openApp(app.id)}
          >
            <div className={`${app.color} p-4 rounded-xl shadow-lg backdrop-blur-sm bg-opacity-80 
                          group-hover:scale-110 transition-all duration-200 hover:shadow-xl`}>
              <app.icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-white text-sm mt-2 px-2 py-1 rounded-md bg-black bg-opacity-50 backdrop-blur-sm">
              {app.name}
            </span>
          </div>
        ))}
      </div>

      {/* Open Application Windows */}
      {openApps.map((app) => (
        <div
          key={app.windowId}
          className={`absolute bg-white rounded-lg shadow-2xl transition-all duration-300 
                     ${app.isMinimized ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                     ${app.isMaximized ? 'inset-4' : 'w-96 h-80'}
                     ${activeApp === app.windowId ? 'z-50' : 'z-40'}`}
          style={app.isMaximized ? {} : {
            left: `${app.position.x}px`,
            top: `${app.position.y}px`
          }}
        >
          {/* Window Header */}
          <div className={`flex items-center justify-between p-3 ${app.color} rounded-t-lg`}>
            <div className="flex items-center space-x-2">
              <app.icon className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{app.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => minimizeApp(app.windowId)}
                className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Minimize2 className="w-3 h-3" />
              </button>
              <button 
                onClick={() => toggleMaximize(app.windowId)}
                className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
              <button 
                onClick={() => closeApp(app.windowId)}
                className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
          
          {/* Window Content */}
          <div className="h-full pb-12 overflow-auto">
            <AppContent app={app} />
          </div>
        </div>
      ))}

      {/* Context Menu */}
      {contextMenu && (
        <div 
          className="absolute bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 min-w-48"
          style={{ left: contextMenu.x, top: contextMenu.y }}
        >
          <button 
            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2"
            onClick={() => setBackgroundIndex((backgroundIndex + 1) % backgrounds.length)}
          >
            <Settings className="w-4 h-4" />
            <span>Change Background</span>
          </button>
          <button 
            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            <Maximize2 className="w-4 h-4" />
            <span>Toggle Fullscreen</span>
          </button>
        </div>
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-lg border-t border-white border-opacity-20">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Start Button */}
          <button
            onClick={() => setShowStartMenu(!showStartMenu)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
            </div>
            <span>Start</span>
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search apps, files, and more..."
                className="w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Open Apps */}
          <div className="flex items-center space-x-2">
            {openApps.map((app) => (
              <button
                key={app.windowId}
                onClick={() => app.isMinimized ? restoreApp(app.windowId) : setActiveApp(app.windowId)}
                className={`p-2 rounded-lg transition-colors ${
                  activeApp === app.windowId && !app.isMinimized
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 bg-opacity-50 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <app.icon className="w-5 h-5" />
              </button>
            ))}
          </div>

          {/* System Tray */}
          <div className="flex items-center space-x-4 text-white">
            <Volume2 className="w-4 h-4" />
            <div className="text-sm">
              <div>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              <div className="text-xs text-gray-300">{currentTime.toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className="absolute bottom-16 left-4 bg-gray-900 bg-opacity-95 backdrop-blur-lg rounded-lg shadow-2xl w-80 p-4 z-50">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => openApp(app.id)}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className={`${app.color} p-3 rounded-lg mb-2`}>
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-xs text-center">{app.name}</span>
              </button>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-4 flex justify-between">
            <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
              <Power className="w-4 h-4" />
              <span>Power</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopOS;