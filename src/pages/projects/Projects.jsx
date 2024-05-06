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
import ImageCustom from '../../components/ImageComp/ImageCustom';
import { useInView } from "react-intersection-observer";


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
  const [deviceType, setDeviceType] = useState("");


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


  const openImageViewer = useCallback((index, type) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    setDeviceType(type)
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };



  const iamges = projects.map(item => item.images)[0]

  const imagesAndroid = projects.map(item => item.imagesAndroid)[0]

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when the section is 50% in view
  });

  const [refAndroid, inViewAndroid] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when the section is 50% in view
  });


  return (
    <div className='projectsContainer'>



      {projects.map((item, index) => {
        return (
          <>
            {/* {index ==0 && <h2> Project Snapshots </h2>} */}
            <div className='imagesContainer'>


              {/* <p> {item.title} </p> */}
              <div className='web'>
              
                  <div ref={ref}>
                    <motion.h1
                                      className='header'

                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                      transition={{ duration: 2 }}
                    >
                      Web Snapshots
                    </motion.h1>
                  </div>



                {item.images && item.images.map((item, index) =>


                  <ImageCustom
                    src={item}
                    onClick={() => openImageViewer(index, "web")}
                  />

                  // <img src={item}
                  //   onClick={() => openImageViewer(index,"web")}

                  // />

                )

                }
              </div>

              <div className='android'>
          

                  <span ref={refAndroid}>
                    <motion.h1
                                      className='header'

                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: inViewAndroid ? 1 : 0, y: inViewAndroid ? 0 : -50 }}
                      transition={{ duration: 2 }}
                    >
                      Android Snapshots
                    </motion.h1>
                  </span>

                {item.imagesAndroid && item.imagesAndroid.map((item, index) =>

                  <img src={item}
                    onClick={() => openImageViewer(index, "android")}

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
          src={deviceType == "web" ? iamges : imagesAndroid}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}

    </div>
  )
}





