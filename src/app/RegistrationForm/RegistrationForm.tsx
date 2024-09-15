"use client";
import Button from "@/Button/Button";
import React, { use } from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import { url } from "inspector";
import { METHODS } from "http";
type Register = {
  src: string;
  heading: string;
  name: string;
  password: string;
};

const regInformation = [
  {
    src: "./images/image.png",
    heading: "Registration Form",
    password: "Password",
  },
];

const RegistrationForm = () => {
  const [fullname, Setfullname] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverPhoto, setCoverphoto] = useState(null);
  // const [error, setError] = useState("");
  // const isemailvalid = email.includes("a");
  // const [user, setUser] = useState("");

  const handleImageChange = (e: any) => {
    setAvatar(e.target.files?.[0]);
  };

  const handleCOverChange = (e: any) => {
    setCoverphoto(e.target.files?.[0]); // Set image state to the selected file
  };

  const handleOnclick = async (e: any) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (!fullname || !userName || !email || !password || !avatar) {
      alert("All fields are required, including avatar.");
      return;
    }

    try {
      // Use FormData to send both files and form fields
      const formData = new FormData();
      formData.append("fullName", fullname);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar); // Add avatar image
      if (coverPhoto) {
        formData.append("coverImage", coverPhoto); // Add cover image only if provided
      }

      // Send the request using fetch
      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        {
          method: "POST",
          body: formData, // Send the formData object
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const result = await response.json();
      console.log("Register: ", result);

      // Optionally, reset form fields after successful registration
      Setfullname("");
      setUsername("");
      setemail("");
      setpassword("");
      setAvatar(null);
      setCoverphoto(null);

      alert("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      // alert("Error during registration. Please try again.");
    }
  };

  return (
    <div className="flex bg-zinc-900 flex-col flex-wrap">
 

   <div className="bg-black flex flex-col items-center text-yellow-50 justify-center align-middle">
        {regInformation.map((Element, index) => {
          return (
            <React.Fragment key={index}>
              <div className="mt-1">
                <img
                  className="rounded-lg"
                  src={Element.src}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h2>{Element.heading}</h2>
              </div>
            </React.Fragment>
          );
        })}
      </div> 

      <div className="bg-zinc-900 text-green-50 flex flex-col  items-center">
        <h1 className="pt-3 pb-3">
          Please kindly fill this form to procced forward
        </h1>
        {/* <h2 className="text-red-500">{error}</h2> */}

        <form className="max-w-sm mx-auto " encType="multipart/form-data">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full-Name
            </label>

            <input
              type="text"
              id="fullName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please Enter your full name"
              value={fullname}
              onChange={(e) => Setfullname(e.target.value)}
            />
            {/* {error && !fullname && (
              <p className="text-red-500">write full name</p>
            )} */}
          </div>

          <div className="mt-3">
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              UserName
            </label>

            <input
              type="text"
              id="userName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* {error && !userName && (
              <p className="text-red-500">write user name</p>
            )} */}
          </div>

          <div className="mt-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {/* {error && !email && <p className="text-red-500">write email</p>} */}
          </div>

          <div className="mt-3">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Password"
              onChange={(e) => setpassword(e.target.value)}
              minLength={6}
            />
            {/* {error && !password && (
              <p className="text-red-500">write password</p>
            )} */}
          </div>

          {password.length < 6 && password.length > 0 ? (
            <p className="text-red-600">
              The minimum length of the password must be 6
            </p>
          ) : (
            ""
          )}

          <h1 className="mt-2">Select the avatar</h1>

          <div className="mt-5 display flex flex-row gap-2">
            <div>
              <input
                type="file"
                placeholder="Please select the avatar "
                onChange={handleImageChange}
              />
            </div>

            <div>
              {avatar && (
                <div>
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
              )}
              {/* {error && !avatarimage && (
                <p className="text-red-500">select avatar</p>
              )} */}
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="coverphoto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select the cover photo:
            </label>
          </div>

          <div className="mt-5 display flex flex-row gap-2">
            <div>
              <input
                type="file"
                id="coverphoto"
                name="coverphoto"
                onChange={handleCOverChange}
              />
            </div>

            <div>
              {coverPhoto && (
                <div>
                  {" "}
                  <img
                    src={URL.createObjectURL(coverPhoto)}
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
              )}
              {/* // URL.createObjectURL("") create a URL for the selected file */}
            </div>
          </div>

          <div className="flex items-start mt-5 mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm  font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          {/* <h2 className="text-red-500">{error}</h2> */}

          <Button
            onClick={handleOnclick}
            name="Submit"
            classname="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            spanClassname=""
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
