import React from "react";
import "./Header.scss";

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


      <div>
        <p> Home </p>
      </div>


      <div>
        <p onClick={() => handleClickScroll("story")}> Tech Stack </p>
      </div>
      <div>
        <p onClick={() => handleClickScroll("projects")}>Projects</p>
      </div>


      {/* <div>
        <p> Projects </p>
      </div> */}

      {/* <div> 
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={changeTheme}/>
</div>
      </div> */}
    </div>
  );
}

export default Header;
