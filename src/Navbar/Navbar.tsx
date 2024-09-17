"use client";
import Button from "@/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar({ onProfileClick }: { onProfileClick: (user: any) => void }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showCard, setShowCard] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshtoken");
    const accessToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    
    if (refreshToken || accessToken) {
      setIsAuthenticated(true);
    }
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    // Clear the token and set authenticated state to false
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    onProfileClick(!user);
    router.push("/Homepage");
  };

  const handleProfileClick = () => {
    if (user) {
      onProfileClick(user); // Pass user data to Homepage
      setShowCard(!showCard);
    }
  };

  return (
    <div className="bg-black flex flex-row content-center gap-3 items-center justify-between pr-2">
      <div className="ml-1">
        <img className="rounded-lg" src="./images/image.png" alt="" width={50} height={50} />
      </div>
      <div>
        {!isAuthenticated && (
          <div className="flex flex-row gap-3 content-center items-center bg-black">
            <div>
              <Link href="/LoginPage">
                <Button
                  spanClassname=""
                  classname="text-white bg-blue-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-green-900 dark:hover:opacity-50 dark:focus:ring-green-800 mt-2"
                  name="Log in"
                  onClick={() => {}}
                />
              </Link>
            </div>
            <div>
              <Link href="/RegistrationForm">
                <Button
                  onClick={() => {}}
                  name="Sign Up"
                  classname="text-red-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-blue-900 dark:hover:opacity-50 dark:focus:ring-blue-800 mt-2"
                  spanClassname=""
                />
              </Link>
            </div>
          </div>
        )}
        {isAuthenticated && (
          <div className="flex flex-row gap-3 content-center items-center bg-black">
            <div className="flex gap-2">
              <div className="text-yellow-400 mt-4">Welcome {user?.fullName}</div>
              <div>
                <Button
                  spanClassname=""
                  classname="text-white bg-orange-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-orange-900 dark:hover:opacity-50 dark:focus:ring-green-800 mt-2"
                  name="Log out"
                  onClick={logout}
                />
              </div>
              <div className="text-yellow-100">
                <img
                  onClick={handleProfileClick}
                  className="mt-3"
                  src="./images/user.png"
                  alt=""
                  width={30}
                  height={50}
                />
              </div>
              <span className="text-yellow-100 mt-4">My profile</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
