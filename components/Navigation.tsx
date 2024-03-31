"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRoute, setIsRoute] = useState(false);
  const path = usePathname();

  const [prevPath, setPrevPath] = useState("/");
  useEffect(() => {
    if (path !== prevPath) {
      setIsRoute(true);
    } 
  }, [path, prevPath]);
  useEffect(() => {
    if (isRoute) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRoute(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isRoute]);
  return (
    <div
      style={{ left: "20%" }}
      className='absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border py-7 border-white'
    >
      {isRoute && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className='mb-16 pl-4 min-w-[20%]'>
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
