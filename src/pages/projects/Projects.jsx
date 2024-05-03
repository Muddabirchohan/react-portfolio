import React, { useCallback } from 'react';
import "./Projects.scss"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarazUI from "./../../assets/daraz-ui-1.png"
import DarazUI2 from "./../../assets/daraz-ui-2.png"
import DarazUI3 from "./../../assets/daraz-ui-4.png"
import DarazUI4 from "./../../assets/daraz-ui-5.png"
import Adroid1 from "./../../assets/android-1.png"
import Adroid2 from "./../../assets/android-2.png"
import Adroid3 from "./../../assets/adroid-4.png"
import Adroid4 from "./../../assets/android-5.png"
import Adroid5 from "./../../assets/android-6.png"
import Adroid6 from "./../../assets/adroid-7.png"
import Adroid7 from "./../../assets/adroid-8.png"



import ImageViewer from 'react-simple-image-viewer';


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};




export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [[page, direction], setPage] = useState([0, 0]);

  const projects = [
    {
      title: "Daraz ui",
      images: [DarazUI, DarazUI2, DarazUI3],
      imagesAndroid: [Adroid1, Adroid2, Adroid3, Adroid4, Adroid5, Adroid6, Adroid7]
    },

  ]


  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };


  const openImageViewer = useCallback((index) => {
    console.log("index", index)
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  const iamges = projects.map(item => item.images)[0]


  return (
    <div className='projectsContainer'>



      {projects.map((item, index) => {
        return (
          <>
            {/* {index ==0 && <h2> Project Snapshots </h2>} */}
            <div className='imagesContainer'>


              {/* <p> {item.title} </p> */}
              <div className='web'>
                <h2
                  className='header'
                > Web Snapshots </h2>
                {item.images && item.images.map((item, index) =>



                  <img src={item}
                    onClick={() => openImageViewer(index)}

                  />

                )

                }
              </div>

              <div className='android'>
                <h2
                  className='header'
                > Android Snapshots </h2>
                {item.imagesAndroid && item.imagesAndroid.map((item, index) =>

                  <img src={item}
                    onClick={() => openImageViewer(index)}

                  />

                )

                }
              </div>


            </div>
          </>
        )
      })}

      {isViewerOpen && (
        <ImageViewer
          src={iamges}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}

    </div>
  )
}





