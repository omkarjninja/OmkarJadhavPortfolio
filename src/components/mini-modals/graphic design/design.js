import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import img1 from "../../../assets/graphic/a.jpg";import img2 from "../../../assets/graphic/b.png";
import img3 from "../../../assets/graphic/c.jpg";import img4 from "../../../assets/graphic/d.jpg";
import img5 from "../../../assets/graphic/e.jpg";import img7 from "../../../assets/graphic/g.jpg";
import img6 from "../../../assets/graphic/f.jpg";import img8 from "../../../assets/graphic/h.jpg";
import img9 from "../../../assets/graphic/i.jpg";import a from "../../../assets/graphic/j.jpg";
import b from "../../../assets/graphic/k.jpg";import c from "../../../assets/graphic/l.png";
import d from "../../../assets/graphic/m.png";import e from "../../../assets/graphic/n.jpg";
import f from "../../../assets/graphic/o.jpg";import g from "../../../assets/graphic/4.png";
import h from "../../../assets/graphic/3.jpg";import i from "../../../assets/graphic/5.jpg";
import j from "../../../assets/graphic/6.png";import k from "../../../assets/graphic/7.png";
import l from "../../../assets/graphic/8.jpg";import m from "../../../assets/graphic/9.jpg";
import n from "../../../assets/graphic/aot.png";import o from "../../../assets/graphic/aot2.png";
import p from "../../../assets/graphic/p.jpeg";


function Design(){
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    img1,img2,img3,img4,
    img5,img6,img7,img8,
    img9,a,b,c,
    d,e,f,g,
    h,i,j,k,
    l,m,n,o,p
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };




  return(
    <>
    <div className='flex flex-wrap'>
      {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="200"
          height="100"
          key={ index }
          style={{ margin: '10px' }}
          alt=""
          className='grid-cols-5'
        />
        
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </div>


    </>
  )
}
export default Design;