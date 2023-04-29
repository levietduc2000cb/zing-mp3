import React, { ReactElement } from "react";
import Image from "next/image";
import img from "../assets/img/login.png";
import Link from "next/link";

export interface pageLayoutProp {
  page: ReactElement;
}

const Register = () => {
  const handleSubmit = (body: object): void => {
    console.log(body);
  };

  return (
    <div className="w-screen min-h-screen bg-[#E5E5E5] flex justify-center items-center">
      <div className="grid w-full max-w-6xl mx-4 lg:grid-cols-2 sm:grid-cols-1 bg-white h-[90vh] rounded-md">
        <div className="relative flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-5/6 sm:w-4/6">
            <p className="text-sm sm:text-base">Welcome back</p>
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
              Register new account
            </h2>
            <div>
              <label
                htmlFor="name"
                className="block mb-3 text-sm sm:text-base text-[#4A5568]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-5 py-4 text-xs sm:text-sm text-[#2D3748] border boder-[#E8E8E8] rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block my-3 text-sm sm:text-base text-[#4A5568]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full px-5 py-4 text-xs sm:text-sm text-[#2D3748] border boder-[#E8E8E8] rounded-sm"
              ></input>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block my-3 text-sm sm:text-base text-[#4A5568]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-5 py-4 text-xs sm:text-sm text-[#2D3748] border boder-[#E8E8E8] rounded-sm"
              ></input>
            </div>

            <button className="w-full py-4 text-sm sm:text-base font-bold text-white bg-[#04C45C] mt-7 rounded-md">
              Register now
            </button>
          </form>
          <p className="absolute w-full text-sm text-center bottom-5 sm:text-base">
            You have an account?{" "}
            <Link
              href="/login"
              className="text-[#2B6CB0] hover:underline cursor-pointer"
            >
              Login now
            </Link>
          </p>
        </div>
        <div className="relative hidden w-full h-full lg:block">
          <Image
            priority={true}
            src={img}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            alt="login"
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
      </div>
    </div>
  );
};

Register.getLayout = function PageLayout({ page }: pageLayoutProp) {
  return page;
};

export default Register;
