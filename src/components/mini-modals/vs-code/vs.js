import React, { useState, useEffect, useRef } from "react";
import { 
  File, 
  Folder, 
  Search, 
  GitBranch, 
  Bug, 
  Package, 
  Settings, 
  Play, 
  Square,
  RotateCcw,
  Save,
  Copy,
  Scissors,
  Clipboard,
  ChevronRight,
  ChevronDown,
  X,
  Plus,
  MoreHorizontal,
  Terminal,
  Code,
  FileText,
  Image,
  Database,
  Globe,
  Palette,
  Zap,
  Download,
  Upload,
  RefreshCw,
  Eye,
  EyeOff,
  Maximize,
  Minimize,
  Volume2,
  VolumeX
} from "lucide-react";

function VSCodeClone() {
  const [files, setFiles] = useState([
    { 
      id: 1,
      name: "app.js", 
      language: "javascript", 
      content: `// Welcome to VS Code Clone!\nfunction greetUser(name) {\n  console.log(\`Hello, \${name}!\`);\n  return \`Welcome to the enhanced editor!\`;\n}\n\ngreetUser('Developer');\n\n// Try exploring the features:\n// - File explorer\n// - Search functionality\n// - Git integration\n// - Terminal\n// - Extensions panel\n// - Settings\n// - And much more!`,
      unsaved: false,
      type: 'file'
    },
    { 
      id: 2,
      name: "styles.css", 
      language: "css", 
      content: `/* Enhanced VS Code Clone Styles */\n.container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: #1e1e1e;\n}\n\n.editor {\n  flex: 1;\n  font-family: 'Monaco', 'Menlo', monospace;\n  color: #d4d4d4;\n}\n\n.sidebar {\n  width: 250px;\n  background: #252526;\n  border-right: 1px solid #3c3c3c;\n}`,
      unsaved: false,
      type: 'file'
    },
    { 
      id: 3,
      name: "README.md", 
      language: "markdown", 
      content: `# Enhanced VS Code Clone\n\n## Features\n\n- 🎨 **Syntax Highlighting** - Support for multiple languages\n- 📁 **File Explorer** - Navigate and manage files\n- 🔍 **Search** - Find text across files\n- 🌿 **Git Integration** - Version control features\n- 🐛 **Debug Panel** - Debugging tools\n- 🧩 **Extensions** - Extensible architecture\n- ⚙️ **Settings** - Customizable preferences\n- 📱 **Terminal** - Integrated terminal\n\n## Supported Languages\n\n- JavaScript\n- TypeScript\n- Python\n- CSS/SCSS\n- HTML\n- JSON\n- Markdown\n- And many more!\n\n---\n\n*Built with React and Monaco Editor*`,
      unsaved: false,
      type: 'file'
    }
  ]);
  
  const [currentFile, setCurrentFile] = useState(0);
  const [activePanel, setActivePanel] = useState('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(14);
  const [showMinimap, setShowMinimap] = useState(true);
  const [wordWrap, setWordWrap] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    '$ Welcome to VS Code Clone Terminal',
    '$ Type "help" for available commands'
  ]);
  const [folderStructure, setFolderStructure] = useState({
    name: 'project-root',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'src',
        type: 'folder',
        expanded: true,
        children: [
          { name: 'app.js', type: 'file', fileId: 1 },
          { name: 'styles.css', type: 'file', fileId: 2 },
          {
            name: 'components',
            type: 'folder',
            expanded: false,
            children: [
              { name: 'Header.jsx', type: 'file' },
              { name: 'Footer.jsx', type: 'file' }
            ]
          }
        ]
      },
      { name: 'README.md', type: 'file', fileId: 3 },
      { name: 'package.json', type: 'file' },
      {
        name: 'node_modules',
        type: 'folder',
        expanded: false,
        children: []
      }
    ]
  });

  const [gitStatus, setGitStatus] = useState({
    branch: 'main',
    changes: 3,
    commits: 12
  });

  const [extensions, setExtensions] = useState([
    { name: 'Prettier', description: 'Code formatter', enabled: true, icon: '🎨' },
    { name: 'ESLint', description: 'JavaScript linter', enabled: true, icon: '🔍' },
    { name: 'Live Server', description: 'Local development server', enabled: false, icon: '🌐' },
    { name: 'GitLens', description: 'Git supercharged', enabled: true, icon: '🌿' },
    { name: 'Auto Rename Tag', description: 'Auto rename paired HTML tags', enabled: true, icon: '🏷️' },
    { name: 'Bracket Pair Colorizer', description: 'Colorize matching brackets', enabled: false, icon: '🌈' }
  ]);

  const editorRef = useRef(null);

  // Language options
  const languages = [
    'javascript', 'typescript', 'python', 'java', 'cpp', 'csharp', 
    'css', 'scss', 'html', 'json', 'xml', 'markdown', 'sql', 'php'
  ];

  // Theme options
  const themes = [
    { value: 'vs-dark', name: 'Dark+ (default dark)' },
    { value: 'vs-light', name: 'Light+ (default light)' },
    { value: 'hc-black', name: 'High Contrast Dark' }
  ];

  // File icons mapping
  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    const iconMap = {
      'js': '📜', 'jsx': '⚛️', 'ts': '🔷', 'tsx': '⚛️',
      'css': '🎨', 'scss': '🎨', 'html': '🌐', 'json': '📋',
      'md': '📝', 'py': '🐍', 'java': '☕', 'cpp': '⚙️',
      'png': '🖼️', 'jpg': '🖼️', 'svg': '🎭', 'gif': '🖼️'
    };
    return iconMap[ext] || '📄';
  };

  // Handle editor change
  const handleEditorChange = (value) => {
    if (currentFile !== null && files[currentFile]) {
      const updatedFiles = [...files];
      updatedFiles[currentFile] = {
        ...updatedFiles[currentFile],
        content: value,
        unsaved: true
      };
      setFiles(updatedFiles);
    }
  };

  // Add new file
  const addFile = () => {
    const newFile = {
      id: Date.now(),
      name: `untitled-${files.length + 1}.js`,
      language: 'javascript',
      content: '// New file\n',
      unsaved: true,
      type: 'file'
    };
    setFiles([...files, newFile]);
    setCurrentFile(files.length);
  };

  // Close file
  const closeFile = (index, e) => {
    e.stopPropagation();
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    if (currentFile >= updatedFiles.length) {
      setCurrentFile(Math.max(0, updatedFiles.length - 1));
    }
  };

  // Save file
  const saveFile = () => {
    if (currentFile !== null && files[currentFile]) {
      const updatedFiles = [...files];
      updatedFiles[currentFile] = {
        ...updatedFiles[currentFile],
        unsaved: false
      };
      setFiles(updatedFiles);
      addToTerminal(`$ File saved: ${updatedFiles[currentFile].name}`);
    }
  };

  // Search functionality
  const performSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = [];
    files.forEach((file, fileIndex) => {
      const lines = file.content.split('\n');
      lines.forEach((line, lineIndex) => {
        if (line.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            file: file.name,
            fileIndex,
            line: lineIndex + 1,
            content: line.trim(),
            preview: line
          });
        }
      });
    });
    setSearchResults(results);
  };

  // Terminal commands
  const addToTerminal = (text) => {
    setTerminalHistory(prev => [...prev, text]);
  };

  const executeCommand = () => {
    const command = terminalInput.trim();
    addToTerminal(`$ ${command}`);
    
    switch (command.toLowerCase()) {
      case 'help':
        addToTerminal('Available commands: help, clear, ls, pwd, git status, npm start, npm build');
        break;
      case 'clear':
        setTerminalHistory(['$ Welcome to VS Code Clone Terminal']);
        break;
      case 'ls':
        addToTerminal('src/  README.md  package.json  node_modules/');
        break;
      case 'pwd':
        addToTerminal('/Users/developer/project-root');
        break;
      case 'git status':
        addToTerminal('On branch main\nChanges not staged for commit:\n  modified: src/app.js\n  modified: src/styles.css');
        break;
      case 'npm start':
        addToTerminal('Starting development server...\nServer running on http://localhost:3000');
        break;
      case 'npm build':
        addToTerminal('Building for production...\nBuild completed successfully!');
        break;
      default:
        addToTerminal(`Command not found: ${command}`);
    }
    setTerminalInput('');
  };

  // Toggle folder expansion
  const toggleFolder = (path) => {
    // Implementation for folder toggle would go here
    console.log('Toggle folder:', path);
  };

  // Render file tree
  const renderFileTree = (node, path = '') => {
    if (node.type === 'folder') {
      return (
        <div key={path + node.name}>
          <div 
            className="flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => toggleFolder(path + node.name)}
          >
            {node.expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            <Folder className="w-4 h-4 mx-1 text-blue-400" />
            <span className="text-sm">{node.name}</span>
          </div>
          {node.expanded && node.children && (
            <div className="ml-4">
              {node.children.map(child => renderFileTree(child, path + node.name + '/'))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div 
          key={path + node.name}
          className="flex items-center py-1 px-6 hover:bg-gray-700 cursor-pointer"
          onClick={() => {
            if (node.fileId) {
              const fileIndex = files.findIndex(f => f.id === node.fileId);
              if (fileIndex !== -1) setCurrentFile(fileIndex);
            }
          }}
        >
          <span className="mr-2">{getFileIcon(node.name)}</span>
          <span className="text-sm">{node.name}</span>
        </div>
      );
    }
  };

  // Panel content renderer
  const renderPanelContent = () => {
    switch (activePanel) {
      case 'explorer':
        return (
          <div className="p-2">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase">Explorer</h3>
            {renderFileTree(folderStructure)}
          </div>
        );

      case 'search':
        return (
          <div className="p-2">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase">Search</h3>
            <div className="flex mb-2">
              <input
                type="text"
                placeholder="Search files..."
                className="flex-1 bg-gray-800 text-white text-sm px-2 py-1 rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && performSearch()}
              />
              <button
                onClick={performSearch}
                className="ml-1 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <Search className="w-3 h-3" />
              </button>
            </div>
            <div className="text-xs">
              {searchResults.map((result, idx) => (
                <div
                  key={idx}
                  className="p-1 hover:bg-gray-700 cursor-pointer rounded"
                  onClick={() => setCurrentFile(result.fileIndex)}
                >
                  <div className="text-blue-400">{result.file}:{result.line}</div>
                  <div className="text-gray-300 truncate">{result.preview}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'git':
        return (
          <div className="p-2">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase">Source Control</h3>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <GitBranch className="w-4 h-4 mr-1" />
                <span className="text-sm">Branch: {gitStatus.branch}</span>
              </div>
              <div className="text-xs text-gray-400">
                {gitStatus.changes} changes • {gitStatus.commits} commits
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-sm py-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span>src/app.js</span>
              </div>
              <div className="flex items-center text-sm py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>src/styles.css</span>
              </div>
              <div className="flex items-center text-sm py-1">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span>README.md</span>
              </div>
            </div>
          </div>
        );

      case 'debug':
        return (
          <div className="p-2">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase">Run and Debug</h3>
            <div className="space-y-2">
              <button className="flex items-center w-full p-2 bg-green-600 hover:bg-green-700 rounded text-sm">
                <Play className="w-4 h-4 mr-2" />
                Start Debugging
              </button>
              <div className="text-xs text-gray-400">
                <div>No configurations</div>
                <div className="mt-2">
                  <div className="font-semibold">Breakpoints</div>
                  <div className="text-gray-500">No breakpoints</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'extensions':
        return (
          <div className="p-2">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase">Extensions</h3>
            <div className="space-y-2">
              {extensions.map((ext, idx) => (
                <div key={idx} className="p-2 hover:bg-gray-700 rounded">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">{ext.icon}</span>
                      <div>
                        <div className="text-sm font-medium">{ext.name}</div>
                        <div className="text-xs text-gray-400">{ext.description}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const updated = [...extensions];
                        updated[idx].enabled = !updated[idx].enabled;
                        setExtensions(updated);
                      }}
                      className={`px-2 py-1 rounded text-xs ${
                        ext.enabled ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                      }`}
                    >
                      {ext.enabled ? 'Enabled' : 'Enable'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div className="p-2 text-gray-400">Select a panel</div>;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Save shortcut
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        saveFile();
      }
      // Terminal shortcut
      if ((e.metaKey || e.ctrlKey) && e.key === '`') {
        e.preventDefault();
        setShowTerminal(!showTerminal);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showTerminal]);

  return (
    <div className="h-full flex flex-col bg-gray-900 font-mono text-white overflow-hidden">
      {/* Top Menu Bar */}
      <div className="bg-gray-800 flex items-center justify-between px-4 h-8 text-xs border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">VS Code Clone</span>
          <div className="flex space-x-3">
            <span className="hover:text-gray-300 cursor-pointer">File</span>
            <span className="hover:text-gray-300 cursor-pointer">Edit</span>
            <span className="hover:text-gray-300 cursor-pointer">View</span>
            <span className="hover:text-gray-300 cursor-pointer">Go</span>
            <span className="hover:text-gray-300 cursor-pointer">Run</span>
            <span className="hover:text-gray-300 cursor-pointer">Terminal</span>
            <span className="hover:text-gray-300 cursor-pointer">Help</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => setShowMinimap(!showMinimap)} className="hover:bg-gray-700 p-1 rounded">
            {showMinimap ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
          </button>
          <button onClick={() => setShowTerminal(!showTerminal)} className="hover:bg-gray-700 p-1 rounded">
            <Terminal className="w-3 h-3" />
          </button>
          <button className="hover:bg-gray-700 p-1 rounded">
            <Settings className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-gray-800 flex flex-col items-center py-2 space-y-4 border-r border-gray-700">
          {[
            { id: 'explorer', icon: File, tooltip: 'Explorer' },
            { id: 'search', icon: Search, tooltip: 'Search' },
            { id: 'git', icon: GitBranch, tooltip: 'Source Control' },
            { id: 'debug', icon: Bug, tooltip: 'Debug' },
            { id: 'extensions', icon: Package, tooltip: 'Extensions' }
          ].map(({ id, icon: Icon, tooltip }) => (
            <button
              key={id}
              onClick={() => setActivePanel(activePanel === id ? null : id)}
              className={`p-2 rounded hover:bg-gray-700 transition-colors ${
                activePanel === id ? 'bg-gray-700 border-l-2 border-blue-500' : ''
              }`}
              title={tooltip}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* Side Panel */}
        {activePanel && (
          <div className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto">
            {renderPanelContent()}
          </div>
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Editor Tabs */}
          <div className="flex bg-gray-700 border-b border-gray-600 overflow-x-auto">
            {files.map((file, idx) => (
              <div
                key={file.id}
                onClick={() => setCurrentFile(idx)}
                className={`flex items-center px-3 py-2 cursor-pointer border-r border-gray-600 min-w-0 ${
                  currentFile === idx 
                    ? 'bg-gray-900 text-white border-t-2 border-t-blue-500' 
                    : 'bg-gray-700 hover:bg-gray-800 text-gray-300'
                }`}
              >
                <span className="mr-2 text-xs">{getFileIcon(file.name)}</span>
                <span className="text-sm truncate mr-2">
                  {file.name}
                  {file.unsaved && <span className="ml-1 text-orange-400">●</span>}
                </span>
                <button
                  onClick={(e) => closeFile(idx, e)}
                  className="ml-auto hover:bg-gray-600 rounded p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <button
              onClick={addFile}
              className="px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 border-r border-gray-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="bg-gray-800 px-4 py-1 text-xs text-gray-400 border-b border-gray-700">
            <span>project-root › src › {files[currentFile]?.name}</span>
          </div>

          {/* Editor Content */}
          <div className="flex-1 relative">
            {files[currentFile] && (
              <div className="h-full">
                {/* Monaco Editor would go here */}
                <div className="h-full bg-gray-900 p-4">
                  <div className="h-full bg-gray-900 text-gray-300 font-mono text-sm overflow-auto">
                    <div className="flex">
                      <div className="w-12 text-right pr-4 text-gray-500 select-none">
                        {files[currentFile].content.split('\n').map((_, i) => (
                          <div key={i} className="leading-6">{i + 1}</div>
                        ))}
                      </div>
                      <div className="flex-1">
                        <textarea
                          ref={editorRef}
                          value={files[currentFile].content}
                          onChange={(e) => handleEditorChange(e.target.value)}
                          className="w-full h-full bg-transparent text-gray-300 resize-none outline-none leading-6"
                          style={{ minHeight: 'calc(100vh - 200px)' }}
                          spellCheck={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Terminal */}
          {showTerminal && (
            <div className="h-64 bg-gray-900 border-t border-gray-700 flex flex-col">
              <div className="flex items-center justify-between bg-gray-800 px-4 py-1 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm">Terminal</span>
                </div>
                <button
                  onClick={() => setShowTerminal(false)}
                  className="hover:bg-gray-700 p-1 rounded"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 p-2 overflow-y-auto">
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className="text-sm font-mono text-gray-300">
                    {line}
                  </div>
                ))}
                <div className="flex items-center text-sm font-mono">
                  <span className="text-green-400 mr-2">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && executeCommand()}
                    className="flex-1 bg-transparent text-gray-300 outline-none"
                    placeholder="Type a command..."
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-blue-600 text-white text-xs px-4 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <GitBranch className="w-3 h-3 mr-1" />
            {gitStatus.branch}
          </span>
          <span className="flex items-center">
            <Bug className="w-3 h-3 mr-1" />
            0 0
          </span>
          <span>{files[currentFile]?.language}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Ln {1}, Col {1}</span>
          <span>UTF-8</span>
          <span>CRLF</span>
          <span className="flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            {extensions.filter(e => e.enabled).length} extensions
          </span>
        </div>
      </div>
    </div>
  );
}

export default VSCodeClone;