"use client"

import React, { useState } from "react";
import { SignInFormData } from "../types/types";
import useSignIn from "../hooks/useSignIn";

export default function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { handleSignInFormSubmit } = useSignIn();

  return (
    <section className="h-screen">
      <div className="flex w-full h-screen items-center justify-center">
        <img
          className="hidden md:flex md:w-1/3 mr-8"
          src="/images/sign-in.jpg"
          alt=""
        />
        <div className="w-full max-w-xs relative z-10">
          <form
            className="bg-white shadow-lg shadow-slate-400 rounded px-8 pt-6 pb-8 mb-4"
            onSubmit = {(event) => {
              event.preventDefault()
              handleSignInFormSubmit(formData)
            }}
          >
            <h2 className="text-2xl font-semibold text-center mb-8 text-blue-500 ">
            Sign In
          </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full border-b-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                onChange={(e) => {formData.email = e?.target.value}}
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
                required
                className="shadow appearance-none border rounded w-full border-b-4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => {formData.password = e?.target.value}}
              />
              <p className="text-red-700 text-xs italic hidden">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
              <a
                className="inline-block font-bold text-lg text-blue-500 hover:text-blue-700"
                href="/sign-up"
              >
                Sign up
              </a>
            </div>
            <div className="flex flex-col items-center">
              {/* Add the GoogleLogin component */}
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Pandoh Corp. All rights reserved.
          </p>
        </div>
         {/* Image container for small screens */}
    <div className="md:hidden blur-sm absolute inset-0 z-0">
      <img
        className="object-cover w-full h-full rounded-md"
        src="/images/sign-in.jpg"
        alt=""
      />
    </div>
      </div>
    </section>
  );
}
