"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "@/utility/images/ImgExport";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClick = () => {
    router.push("/");
  };

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      // getItem can return actual value or null
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
        alert(userData.name + "You Are Successfully Logged In");
        setTimeout(() => {
          router.push("/OverView");
        }, 2000);
      } else {
        alert("Email or Password is not matching");
      }
    } else {
      alert("Email or Password is not matching");
    }
  };
  return (
    <div className="">
      <div className="w-full h-[70px] bg-[#201F24] lg:hidden flex justify-center ">
      <Image src={Logo} width={121} height={22} alt="logo" />
      </div>
      <div className= " w-full md:flex md:items-center">
        <div className=" w-[35%] h-[95vh] overflow-x-hidden bg-[url('/loginsidebar.png')] bg-cover m-5 rounded-xl flex flex-col justify-between pt-[40px] pb-[40px] pl-[40px] sm:hidden lg:flex">
          <Image src={Logo} width={121} height={22} alt="logo" />
          <div>
            <h3 className="text-[34px] text-white font-bold font-sans">
              Keep track of your money and save for your future
            </h3>
            <p className="mt-6 text-[14px] text-white">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
        <div className="m-auto sm:w-[74%] md:m-auto">
          <div className="md:w-[560px] min-w-[280px] md:m-auto rounded-xl bg-white h-[450px] p-8 gap-[32px] flex flex-col">
            <h2 className="text-[32px] font-bold text-[#201F24]">Login</h2>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Email ..."
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>*Email* is mandatory </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-[#98908B] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  {...register("password")}
                />
              </div>

              <button
                type={"submit"}
                className="w-full text-white bg-[#201F24] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Need to create account ?{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                  onClick={handleClick}
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
