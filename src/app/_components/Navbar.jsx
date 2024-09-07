"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth-provider";

export function Navbar({ className }) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const [active, setActive] = useState(null);
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="flex">
      <div
        className={cn("fixed top-5 inset-x-0 max-w-xl mx-auto z-50", className)}
      >
        <div className="border rounded-full dark:bg-black dark:border-white/[0.4] bg-white">
          <Menu setActive={setActive}>
            <Link href={"/products"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Products"
              ></MenuItem>
            </Link>
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
      </div>
      <div>
        <div className="absolute top-0 right-5">
          <Menu setActive={setIsMenuVisible}>
            <MenuItem
              setActive={setIsMenuVisible}
              active={isMenuVisible}
              item={user ? "Go to" : "Login"}
              src={user ? user?.image : "/images/profile.jpg"}
            >
              <div className="flex flex-col space-y-4 text-sm">
                {user ? (
                  <>
                    <HoveredLink href="/profile">Profile</HoveredLink>
                    <HoveredLink href="/home">Logout</HoveredLink>
                  </>
                ) : (
                  <HoveredLink href="/login">Login</HoveredLink>
                )}
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
