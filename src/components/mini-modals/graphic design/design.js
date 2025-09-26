import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
// --- Image Imports (Keep your existing imports) ---
import img1 from "../../../assets/graphic/a.jpg"; import img2 from "../../../assets/graphic/b.png";
import img3 from "../../../assets/graphic/c.jpg"; import img4 from "../../../assets/graphic/d.jpg";
import img5 from "../../../assets/graphic/e.jpg"; import img7 from "../../../assets/graphic/g.jpg";
import img6 from "../../../assets/graphic/f.jpg"; import img8 from "../../../assets/graphic/h.jpg";
import img9 from "../../../assets/graphic/i.jpg"; import a from "../../../assets/graphic/j.jpg";
import b from "../../../assets/graphic/k.jpg"; import c from "../../../assets/graphic/l.png";
import d from "../../../assets/graphic/m.png"; import e from "../../../assets/graphic/n.jpg";
import f from "../../../assets/graphic/o.jpg"; import g from "../../../assets/graphic/4.png";
import h from "../../../assets/graphic/3.jpg"; import i from "../../../assets/graphic/5.jpg";
import j from "../../../assets/graphic/6.png"; import k from "../../../assets/graphic/7.png";
import l from "../../../assets/graphic/8.jpg"; import m from "../../../assets/graphic/9.jpg";
import n from "../../../assets/graphic/aot.png"; import o from "../../../assets/graphic/aot2.png";
import p from "../../../assets/graphic/p.jpeg";

// --- Enriched Data Structure ---
const imageFiles = [
  { src: img1, name: "Sunset_Vibes.jpg", date: "01/05/2021" },
  { src: img2, name: "Modern_Logo_A.png", date: "03/10/2021" },
  { src: img3, name: "Abstract_Poster.jpg", date: "05/18/2021" },
  { src: img4, name: "Web_Mockup_V2.jpg", date: "06/22/2021" },
  { src: img5, name: "Product_Ad.jpg", date: "07/01/2021" },
  { src: img6, name: "Branding_Guide.jpg", date: "07/15/2021" },
  { src: img7, name: "Infographic_Data.jpg", date: "08/01/2021" },
  { src: img8, name: "Magazine_Cover.jpg", date: "08/20/2021" },
  { src: img9, name: "Illustration_Art.jpg", date: "09/05/2021" },
  { src: a, name: "Typography_Test.jpg", date: "09/12/2021" },
  { src: b, name: "App_UI_Screen.jpg", date: "10/01/2021" },
  { src: c, name: "Mascot_Design.png", date: "10/15/2021" },
  { src: d, name: "Vector_Art.png", date: "11/01/2021" },
  { src: e, name: "Social_Post_1.jpg", date: "11/10/2021" },
  { src: f, name: "Geometric_Pattern.jpg", date: "11/25/2021" },
  { src: g, name: "Game_Asset_4.png", date: "12/01/2021" },
  { src: h, name: "Food_Photography.jpg", date: "12/08/2021" },
  { src: i, name: "Color_Palette.jpg", date: "12/15/2021" },
  { src: j, name: "Icon_Set_6.png", date: "01/01/2022" },
  { src: k, name: "Character_Sheet_7.png", date: "01/15/2022" },
  { src: l, name: "Book_Layout.jpg", date: "02/01/2022" },
  { src: m, name: "Texture_Test.jpg", date: "02/10/2022" },
  { src: n, name: "AOT_Fanart_1.png", date: "03/01/2022" },
  { src: o, name: "AOT_Fanart_2.png", date: "03/10/2022" },
  { src: p, name: "Portrait_Mockup.jpeg", date: "03/20/2022" },
];

const GridIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
);
const ListIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
);
const FileIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 flex-shrink-0 text-yellow-400">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
  </svg>
);

// Extract just the sources for the image viewer
const imageSources = imageFiles.map(file => file.src);


// --- Sub-Component for Grid View ---
const GridView = ({ files, openViewer }) => (
  <div className='flex flex-wrap p-4 gap-6 overflow-y-auto h-full content-start'>
    {files.map((file, index) => (
      <div
        key={index}
        // Consistent size and OS-like hover/active states
        className='w-28 h-32 flex flex-col items-center justify-start p-1.5 rounded-lg cursor-pointer text-white text-opacity-90 transition-colors bg-transparent hover:bg-white/10 active:bg-blue-500/30'
        // Simulating the double-click action with a single click
        onClick={() => openViewer(index)}
      >
        <img
          src={file.src}
          alt={file.name}
          // Thumbnail styling
          className='w-full h-20 object-cover rounded-md shadow-md border border-white/10'
        />
        {/* File name with overflow truncation */}
        <span className='mt-1 text-xs text-center w-full truncate' title={file.name}>
          {file.name}
        </span>
      </div>
    ))}
  </div>
);


// --- Sub-Component for List View ---
const ListView = ({ files, openViewer }) => (
  <div className='p-4 text-white overflow-y-auto h-full'>
    {/* List Header */}
    <div className='grid grid-cols-[1fr_100px_100px] border-b border-gray-500 pb-2 mb-2 font-semibold text-sm sticky top-0 bg-gray-800/80 backdrop-blur-sm z-10'>
      <span>Name</span>
      <span>Type</span>
      <span className='text-right'>Date Created</span>
    </div>
    {/* List Items */}
    {files.map((file, index) => (
      <div
        key={index}
        // List item styling and OS-like hover/active states
        className='grid grid-cols-[1fr_100px_100px] py-1.5 px-1 cursor-pointer hover:bg-white/10 active:bg-blue-500/30 rounded transition-colors'
        onClick={() => openViewer(index)}
      >
        <div className='flex items-center'>
          <FileIcon />
          <span className='truncate' title={file.name}>{file.name}</span>
        </div>
        {/* File Type */}
        <span className='text-sm'>{file.name.split('.').pop().toUpperCase()} File</span>
        {/* Date Modified */}
        <span className='text-sm text-right'>{file.date}</span>
      </div>
    ))}
  </div>
);


// --- Main Design Component ---
function Design(){
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return(
    <div className='flex flex-col h-full bg-gray-800 rounded-b-lg'>
      
      {/* --- File Explorer Header/Toolbar --- */}
      <div className='flex justify-end p-2 border-b border-gray-600/50 flex-shrink-0'>
        <button 
          onClick={() => setViewMode('grid')} 
          className={`p-1 rounded transition-colors ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-600/50'}`}
          title="Grid View"
        >
          <GridIcon />
        </button>
        <button 
          onClick={() => setViewMode('list')} 
          className={`p-1 rounded ml-2 transition-colors ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-600/50'}`}
          title="List View"
        >
          <ListIcon />
        </button>
      </div>

      {/* --- File/Gallery Content Area --- */}
      <div className='flex-grow overflow-hidden'> 
        {viewMode === 'grid' ? (
          <GridView files={imageFiles} openViewer={openImageViewer} />
        ) : (
          <ListView files={imageFiles} openViewer={openImageViewer} />
        )}
      </div>

      {/* --- Image Viewer Modal --- */}
      {isViewerOpen && (
        <ImageViewer
          src={ imageSources } // Use the array of sources
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>
  )
}

export default Design;