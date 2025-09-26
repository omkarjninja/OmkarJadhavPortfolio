import React, { useState, useCallback, useMemo } from 'react';
import ImageViewer from 'react-simple-image-viewer';

function ProjectEach(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Use useMemo to ensure 'images' is only recalculated if props change
  const images = useMemo(() => {
    // Collect all screenshot props, filtering out undefined/null if you have fewer than 4
    const ssArray = [props.ss1, props.ss2, props.ss3, props.ss4].filter(Boolean);
    return ssArray;
  }, [props.ss1, props.ss2, props.ss3, props.ss4]);


  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  // --- Tech Array Cleanup ---
  // The 'props.tech' is already an array of strings (e.g., ['html', 'css', 'js']).
  // Your original logic was unnecessarily wrapping it again.
  const technologies = props.tech || [];
  
  // Define default classes for better consistency with the dark OS modal
  const textWhite = 'text-white';
  const textGray = 'text-gray-300';


  return (
    // Add a padding container and ensure it can scroll if content overflows the modal
    <div className={`p-6 ${textWhite} overflow-y-auto h-full`}>
      
      {/* 1. Project Header (Icon and Name) */}
      <div className='flex items-center mb-6'>
        <img 
          src={props.icon} 
          width="70px" 
          height="70px" 
          className='rounded-xl mr-4 flex-shrink-0 shadow-lg'
          alt={`${props.name} icon`}
        />
        <div>
          <h3 className={`text-3xl font-bold ${textWhite} m-0`}>{props.name}</h3>
          <p className={`${textGray} text-sm m-0 mt-1`}>
            {props.category} / {props.type}
          </p>
        </div>
      </div>

      {/* --- Horizontal Divider Line --- */}
      <div className="my-4 border-t border-white/20"></div>

      {/* 2. About Section */}
      <div className="mt-4">
        <h2 className='text-xl font-semibold mb-2'>About This Project</h2>
        <p className={`text-sm ${textGray} font-medium`}>{props.date}</p>
        <p className={`text-base ${textGray}`}>{props.about}</p>
      </div>

      {/* --- Horizontal Divider Line --- */}
      <div className="my-4 border-t border-white/20"></div>

      {/* 3. Preview Section (Screenshot Gallery) */}
      <div className="mb-6">
        <h2 className='text-xl font-semibold mb-4'>Preview Gallery</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              key={index}
              // Consistent styling for grid items
              className='rounded-lg w-full h-auto object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-xl'
              alt={`Screenshot ${index + 1}`}
            />
          ))}
          
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>

      {/* --- Horizontal Divider Line --- */}
      <div className="my-4 border-t border-white/20"></div>

      {/* 4. More Details & Unique Feature */}
      <p className={`text-base ${textGray} mt-4 mb-4`}>{props.more}</p>

      {/* --- Horizontal Divider Line --- */}
      <div className="my-4 border-t border-white/20"></div>

      {/* 5. Information Table (DL/DT/DD) */}
      <h2 className='text-xl font-semibold mb-3'>Information & Specifications</h2>
      
      <div className="space-y-4"> {/* Use space-y for vertical gap */}

        {/* Info Row 1: Link */}
        <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4 border-b border-white/10">
          <dt className={`font-medium ${textWhite}`}>Website (Link)</dt>
          <dd className={`sm:col-span-2 text-blue-300`}>
            <a href={props.link} target='_blank' rel='noopener noreferrer' className='hover:underline'>
              {props.name} <span className='text-xs'>(External)</span>
            </a>
          </dd>
        </div>

        {/* Info Row 2: Technologies Used */}
        <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4 border-b border-white/10">
          <dt className={`font-medium ${textWhite}`}>Technologies Used</dt>
          <dd className="sm:col-span-2">
            <div className="flex gap-2 flex-wrap">
              {technologies.map((tech, index) => (
                // Use consistent Tailwind styling for chips
                <span 
                  key={index}
                  className='select-none rounded-full bg-indigo-600/80 py-1 px-3 text-xs font-semibold uppercase text-white shadow-md'
                >
                  {tech}
                </span>
              ))}
            </div>
          </dd>
        </div>

        {/* Info Row 3: Uniqueness */}
        <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
          <dt className={`font-medium ${textWhite}`}>Uniqueness of Project</dt>
          <dd className={`sm:col-span-2 ${textGray}`}>
            {props.unique}
          </dd>
        </div>
      </div>
    </div>
  );
}
export default ProjectEach;