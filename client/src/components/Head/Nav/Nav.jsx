import { React, useState } from "react";

const Nav = () => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return <nav className={"nav-bar"}>
  <div>
    <img src="" alt={"Logo"} />
  </div>
  <div>
  <input type="search" name="search" onChange={onChange} placeholder="Search" />
  </div>
  <div>
        <a href={"ruta-de-inicio-de-sesion"}>Login</a>
  </div>
</nav>
};

export default Nav;
