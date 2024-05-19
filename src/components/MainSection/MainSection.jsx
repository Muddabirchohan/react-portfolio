import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import { CopyBlock, dracula } from "react-code-blocks";
import Background from "./../../assets/bg-2.png"
import "./MainSection.scss"
import SideBar from '../SideBar/SideBar';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import TechAnimation from '../Tech/TechAnimation';
import Projects from '../../pages/projects/Projects';
import { Navigation } from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { AppLoader } from '../Loader/AppLoader';
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import ContactForm from '../Contact/Contact';


function MainSection({ theme, changeTheme }) {


  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const sectionRefs = {
    home: useRef(null),
    story: useRef(null),
    projects: useRef(null),
    contacts: useRef(null)
  };




  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(`
    
 const InfoSection = () => {
    
      return (

        <div className='infoText'>
              <span> Hi There I'm a </span>
              <span>  MERN Stack  </span> 
              <span>  Dev  </span> 
        </div>
      
        );    
  }
`);
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    const isFirstLoad = localStorage.getItem('isFirstLoad');

    if (isFirstLoad === null) {

      setTimeout(() => {
        setLoader(false);

        localStorage.setItem('isFirstLoad', 'false');
      }, 1500);
    } else {
      setLoader(false);
    }

    return () => {
      localStorage.removeItem('isFirstLoad');
    };
  }, []);



  if (loader) {
    return <AppLoader />
  }


  return (
    <>



      {isVisible && (
        <div
          className="scroll-to-top">

          <div onClick={scrollToTop}>

            <div class="cell">
              <div class="circle bounce2"></div>
              <FaArrowUp size={20} />
            </div>
            {/* <FaArrowUp /> */}

          </div>
        </div>

      )}


      <div className='headerParent'>
        <Header theme={theme} changeTheme={changeTheme} sectionRefs={sectionRefs} />
      </div>

      <div className={`main-parent`} id="home" ref={sectionRefs.home}>

        <div className='imgContainer'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <div className='infoText'>
              <span> Hi There i'm a </span>
              <span>  MERN Stack  </span>
              <span>  Dev  </span>
            </div>

          </motion.div>
        </div>
        <div>

          <div
            className='centered title'

          >


            <CopyBlock
              language={language}
              text={languageDemo}
              showLineNumbers={lineNumbers}
              theme={dracula}
              wrapLines={true}
              codeBlock
            />



          </div>

        </div>
      </div>

      <div className='technician' id='story' ref={sectionRefs.story}>
        <TechAnimation />
      </div>

      <div className='projects' id='projects' ref={sectionRefs.projects}>
        <Projects />
      </div>

      <div className='contact' id='contact' ref={sectionRefs.contacts}>
      <ContactForm />
      </div>
      <div className='footer' id='footer' >  
      <Footer/>
      </div>
    </>
  )
}

export default MainSection