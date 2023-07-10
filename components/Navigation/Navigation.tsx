import Link from "next/link";
import React from "react";

const routes = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Posts", route: "/posts" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.route}>
              <Link href={route.route}> {route.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
