"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className="flex">
      <div
        className={cn("fixed top-5 inset-x-0 max-w-xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Brands">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">W7</HoveredLink>
              <HoveredLink href="/interface-design">Mac</HoveredLink>
              <HoveredLink href="/seo">Huda Beauty</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Category">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Make Up</HoveredLink>
              <HoveredLink href="/interface-design">Skin Care</HoveredLink>
              <HoveredLink href="/seo">Bath & Body</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Blogs"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
      <div>
        <Link href={"/profile"}>
          <Image
            className="absolute top-5 right-5"
            width={50}
            height={50}
            src={"/images/profile.jpg"}
            alt="Profile Link"
            style={{ borderRadius: "50%" }}
          ></Image>
        </Link>
      </div>
    </div>
  );
}
