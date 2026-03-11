import React from "react";

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
  return (
    <nav>
      <ul className="flex">
          {
            navigationData.map(items =>
              <li key={items.id} className="mr-10">
                 <a href={items.path}>{items.name}</a>
              </li>
            )
          }
        </ul>
    </nav>
  );
};

export default NavBar;
