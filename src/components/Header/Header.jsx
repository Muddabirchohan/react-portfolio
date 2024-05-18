import React, { useEffect, useState, useRef } from 'react';
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";
import { Hamburger } from "../Navigation/RootHamburgder";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaFolderOpen } from "@react-icons/all-files/fa/FaFolderOpen";

import { FaListAlt } from '@react-icons/all-files/fa/FaListAlt';

function Header({ theme, changeTheme, sectionRefs }) {
  const [activeSection, setActiveSection] = useState("home");

  const handleClickScroll = (id) => {
    const element = sectionRefs[id].current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);



  return (
    <div
    style={{display: activeSection == "contact" ? "none" : null}}
    className={window.innerHeight >= 320 && window.innerWidth <= 546 && activeSection !== "contact"  ? "" : `${activeSection}Header`}>
      {window.innerHeight >= 320 && window.innerWidth <= 546 ?
        <Hamburger />
        :
        < >
          <div>
            <p onClick={() => handleClickScroll("home")}> 
            <FaHome size={26}/>
            {/* Home */}
             </p>
          </div>

          <div>
            <p onClick={() => handleClickScroll("story")}> 
            <FaCode size={26}/>
            {/* Tech Stack */}
             </p>
          </div>

          <div>
            <p onClick={() => handleClickScroll("projects")}>
              <FaListAlt size={26}/>
              {/* Projects */}
              </p>
          </div>

          <div>
            <p onClick={() => handleClickScroll("contacts")}>
              <FaPhone size={26}/>
              {/* Projects */}
              </p>
          </div>
        </>
      }
    </div>
  );
}

export default Header;
