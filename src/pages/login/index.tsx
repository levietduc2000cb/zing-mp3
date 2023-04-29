import React, { ReactElement, useState } from "react";
import Image from "next/image";
import img from "../assets/img/login.png";
import logoGoogle from "../assets/img/google-icon.png";
import Link from "next/link";

export interface pageLayoutProp {
  page: ReactElement;
}

export interface userLogin {
  email: string;
  password: string;
}

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);
  const [body, setBody] = useState<userLogin>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="w-screen min-h-screen bg-[#E5E5E5] flex justify-center items-center">
      <div className="grid w-full max-w-6xl mx-4 lg:grid-cols-2 sm:grid-cols-1 bg-white h-[90vh] rounded-md">
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
        <div className="relative flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-5/6 sm:w-4/6">
            <p className="text-sm sm:text-base">Welcome back</p>
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
              Login to your account
            </h2>
            <div>
              <label
                htmlFor="email"
                className="block mb-3 text-sm sm:text-base text-[#4A5568]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={body.email}
                onChange={(e) => {
                  handleChange(e);
                }}
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
                name="password"
                placeholder="********"
                value={body.password}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="w-full px-5 py-4 text-xs sm:text-sm text-[#2D3748] border boder-[#E8E8E8] rounded-sm"
              ></input>
            </div>
            <div className="flex justify-between text-sm sm:text-base mt-7">
              <div className="flex items-center">
                <div className="sm:w-4 sm:h-4 w-3 h-3 border rounded-full border-[#d9d9d9] mr-[11px] relative">
                  {rememberLogin && (
                    <div className="absolute w-[70%] h-[70%] rounded-full bg-blue-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
                  )}
                </div>
                <p
                  onClick={() => {
                    setRememberLogin(!rememberLogin);
                  }}
                  className="cursor-pointer select-none"
                >
                  Remember me
                </p>
              </div>
              <p className="text-[#2C5282] hover:underline cursor-pointer">
                Forgot password?
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-4 text-sm sm:text-base font-bold text-white bg-[#04C45C] mt-7 rounded-md"
            >
              Login now
            </button>
            <button className="w-full py-4 text-sm sm:text-base font-bold text-white bg-[#2D3748] mt-4 rounded-md flex items-center justify-center">
              <div className="relative w-5 h-5 mr-2">
                <Image
                  priority={true}
                  src={logoGoogle}
                  fill
                  sizes="(max-width: 20px),
                  (max-width: 20px)"
                  alt="login"
                  style={{ objectFit: "contain" }}
                ></Image>
              </div>
              Or sign-in with google
            </button>
          </form>
          <p className="absolute w-full text-sm text-center bottom-5 sm:text-base">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#2B6CB0] hover:underline cursor-pointer"
            >
              Join free today
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.getLayout = function PageLayout({ page }: pageLayoutProp) {
  return page;
};
export default Login;
