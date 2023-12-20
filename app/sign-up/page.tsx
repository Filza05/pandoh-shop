"use client"

import React, { useState } from "react";
import axios from "../axios/axios";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const {handleSignUpFormSubmit} = useSignUp()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-row w-full h-screen items-center justify-center">
      <img
        className="hidden md:flex md:w-1/3 mr-8"
        src="/images/sign-up.jpg"
        alt=""
      />
      <div className="w-full max-w-xs relative z-10">
        <form
          className="bg-white shadow-lg shadow-slate-400 rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(event) => {
            event.preventDefault()
            handleSignUpFormSubmit(formData)
          }}
        >
          <h2 className="text-2xl font-semibold text-center text-blue-500 ">
            Sign up
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-6"
              htmlFor="username"
            >
              Username
            </label>
            <input
              required
              value={formData.username}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  username: event.target.value,
                });
              }}
              className="shadow appearance-none border rounded w-full mb-4 border-b-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              required
              value={formData.email}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  email: event.target.value,
                });
              }}
              className="shadow appearance-none border rounded w-full border-b-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={formData.password}
              required
              onChange={(event) => {
                setFormData({
                  ...formData,
                  password: event.target.value,
                });
              }}
              className="shadow appearance-none border rounded w-full border-b-4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic hidden">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
        &copy;2023 Pandoh Corp. All rights reserved.
        </p>
      </div>
      <div className="md:hidden blur-sm absolute inset-0 z-0">
      <img
        className="object-cover w-full h-full rounded-md"
        src="/images/sign-up.jpg"
        alt=""
      />
    </div>
    </div>
  );
};

export default SignUpPage;