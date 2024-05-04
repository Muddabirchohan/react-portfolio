import React, { useEffect, useState } from 'react'
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


function MainSection({ theme, changeTheme }) {

  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(`
    
 const InfoTextSection = () => {
    
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



  if(loader){
    return <AppLoader/>
  }


  return (
    <>

    

      <Header theme={theme} changeTheme={changeTheme} />

      <div className={`main-parent`}>

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

      <div className='technician' id='story'>
        <TechAnimation />
      </div>

      <div className='projects' id='projects'>
        <Projects />
      </div> 

       {/* <div className='' id="footer">  
        <Footer/>
      </div> */}

      
    </>
  )
}

export default MainSection