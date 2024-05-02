import React from "react";
import "./Header.scss";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import SideBar from "../SideBar/SideBar";

function Header({theme,changeTheme}) {


  const handleClickScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const handleClickScrollStory = () => {
    const element = document.getElementById("story");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`header-parent`}>

     
      <div>
        <p> Home </p>
      </div>

      <div>
        <p onClick={handleClickScroll}>About</p>
      </div>

      <div>
        <p onClick={handleClickScrollStory}> Tech Stack </p>
      </div>

      <div>
        <p> Projects </p>
      </div>

      {/* <div> 
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={changeTheme}/>
</div>
      </div> */}
    </div>
  );
}

export default Header;
