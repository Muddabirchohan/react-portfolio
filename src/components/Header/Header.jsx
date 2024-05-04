import React from "react";
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";
import { Hamburger } from "../Navigation/RootHamburgder";

function Header({ theme, changeTheme }) {


  const handleClickScroll = (id) => {
    console.log("id", id)
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };




  return (
    <div className={`header-parent`}>
      {/* <Navigation/> */}


      {window.innerHeight >= 320 && window.innerWidth <= 546 ?

        <Hamburger />
        :
        <>
          <div>
            <p> Home </p>
          </div>

          <div>
            <p onClick={() => handleClickScroll("story")}> Tech Stack </p>
          </div>

          <div>
            <p onClick={() => handleClickScroll("projects")}>Projects</p>
          </div>
        </>
      }
    </div>
  );
}

export default Header;
