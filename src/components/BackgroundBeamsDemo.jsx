"use client";
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

export function BackgroundBeamsDemo() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let getuserURL = "https://dummyjson.com/auth/me";
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");

      try {
        const userData = await fetch(getuserURL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userInfo = await userData.json();
        if (!userData.ok) {
          throw new Error("User data not found due to network issue");
        }

        if (userData.ok) {
          console.log("User Info: ", userInfo);
        }
        setUserData(userInfo);
      } catch (error) {
        console.error("Error occurred during login:", error);
        // Display a user-friendly error message
      }
    };
    fetchUserData();
  }, []);

  const userImageURL = userData?.image;

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="z-20">
        <Image
          src={userImageURL}
          alt={"image"}
          width={150}
          height={150}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="relative py-6 z-10 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold">
          {userData?.company?.title}
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          dolorum nostrum deserunt, possimus non deleniti reprehenderit
          expedita, quidem quae corporis placeat cupiditate iure eius
          perferendis beatae tempora officia. Sunt, repellat.
        </p>
        <p className="text-neutral-400 text-center  w-full relative z-10 mt-4  bg-neutral-950">
          hi@{userData.firstName}.com
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
