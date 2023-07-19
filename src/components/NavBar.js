import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{<div className="navbarMenu">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
</div>}
</nav>;
}

export default NavBar;
