"use client";
import Button from "@/Button/Button";
import RegistrationForm from "@/RegistrationForm/RegistrationForm";
import { access, link } from "fs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { use, useState } from "react";
import { data } from "autoprefixer";

const LoginPage = () => {
 
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const router=useRouter();

  const updateEmailandUsername=(e:any)=>{
    setEmail(e.target.value);
    setUsername(e.target.value)
  }
  const handleSignin = async (e: any) => {
    e.preventDefault();

    if (!userName || !password || !email) {
      setError("!!Please fill all the required field to continiue!!");
    }

    try {
      const response = await fetch(`http://localhost:8000/api/v1/users/login`, {
        method: "POST",
        body: JSON.stringify({ userName, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("failed to login");
      }

      const result = await response.json();
      router.push("/Homepage");

      console.log("Successfully login", result);

      // Save user data and tokens to localStorage
      localStorage.setItem("user", JSON.stringify(result.data.user));
      // localStorage.setItem("authToken", result.data.accessToken);
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);

    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
    }
  };

 

  return (
    <div className="bg-black w-full h-screen flex flex-col flex-wrap content-center justify-center items-center ">
      <div className="bg-zinc-900 text-green-50 flex flex-col content-center items-center px-6 w-86 py-6 rounded-xl">
        <h1 className="text-green-500">Welcome To The Login Page</h1>
        <img
          className="rounded-lg mt-2"
          src="./images/image.png"
          alt=""
          width={70}
          height={70}
        />

        <form className="max-w-sm mx-auto ">
          <div className="">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="Username"
            >
              Username
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={userName}
              id="Username"
              placeholder="Enter your username"
              onChange={updateEmailandUsername}
            />
          </div>
          <div className="mt-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="password"
              value={password}
              placeholder="Enter your password here"
              minLength={6}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-400">{!error && password.length<6 && password.length>0 ? "Password must be of 6 digit":""}</p>
          </div>

          <Button
            spanClassname=""
            classname="text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-green-600 dark:hover:opacity-50 dark:focus:ring-green-800 mt-3"
            name="Log in"
            onClick={handleSignin}
          />
          <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-600">
            Don't Have an Account?
          </h1>
          <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-600">
            Please Sign up
          </h2>
          <Link href="/RegistrationForm">
            <Button
              onClick={()=>{}}
              name="Sign Up"
              classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-blue-600 dark:hover:opacity-50 dark:focus:ring-blue-800 mt-1"
              spanClassname=""
            />
          </Link>

          <h2 className="text-red-400">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
