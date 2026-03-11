import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const links = navigationData.map(items =><li key={items.id} className="lg:mr-10 px-6 hover:bg-amber-600"><a href={items.path}>{items.name}</a> </li>)
  return (
    <nav className="flex justify-between mx-10 mt-6">

      <span className="flex" onClick={() => setOpen(!open)}>
        {  open ?
             <X className="md:hidden"></X> : 
                 <Menu className="md:hidden"></Menu>
         }
         <ul className={`md:hidden absolute duration-1000
              ${open ? "top-8" : "-top-30"} bg-gray-200 text-black
          `}>
          {links}
         </ul>
        
         <h3 className="ml-4">Pricing</h3>
      </span>

      
       <ul className="md:flex hidden">
          {
            links
          }
        </ul>
        <button>Sing In</button>
    </nav>
  );
};

export default NavBar;
