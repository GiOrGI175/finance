"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "@/utility/images/ImgExport";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Spinner from "@/components/__molecules/Spinner";
import axios from "axios";
import { LoginFormData, loginSchema } from "@/commons/hooks/LoginValidation"; // Import the schema and type
import { yupResolver } from "@hookform/resolvers/yup";
import { setCookie } from "nookies";

// interface ApiResponse {
//   status: number;
//   data: any;
// }

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const handleClick = () => {
    router.push("/");
  };

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setError(null);
    try {
      const res = await axios.post("http://localhost:3001/auth/sign-in", data);
      console.log(res);
      if (res.status === 200) {
        setCookie(null, "auth_token", res.data.token, {
          maxAge: 60 * 60, 
        });
        alert("You have Logged successfully!");

        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          router.push("/OverView");
        }, 3000);
      }
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setError("Password or Email Incorrect, Please try again.");
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="w-full h-[70px] bg-[#201F24] lg:hidden flex justify-center ">
        <Image src={Logo} width={121} height={22} alt="logo" />
      </div>
      <div className="flex items-center w-full h-[100vh]">
        <div className="w-[35%] h-[95vh] overflow-x-hidden bg-[url('/loginsidebar.png')] bg-cover m-5 rounded-xl flex flex-col justify-between pt-[40px] pb-[40px] pl-[40px] sm:hidden lg:flex">
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
                  {...register("email")}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
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
                {errors.password && (
                  <span style={{ color: "red" }}>
                    {errors.password.message}
                  </span>
                )}
              </div>
              {error && (
                <p className="text-red-700 text-center mt-2">{error}</p>
              )}

              <button
                type="submit"
                className="w-full text-white bg-[#201F24] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Need to create an account?{" "}
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
