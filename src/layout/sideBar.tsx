import Logo from "@/components/logo";
import React from "react";
import { BsDisc } from "react-icons/bs";
import { RiDiscLine } from "react-icons/ri";
import { HiOutlineRadio } from "react-icons/hi2";
import { MdLibraryMusic } from "react-icons/md";
import { TbMusic } from "react-icons/tb";
import { FiGrid } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

// bg-[#393142] border-[#9B4DE0]

const SideBar = () => {
  const router = useRouter();

  const activeLink = (pathname: string): string => {
    return router.pathname === pathname ? "bg-[#393142] border-[#9B4DE0]" : "";
  };

  return (
    <div className="md:max-w-[240px] max-w-[60px] w-full bg-sidebar fixed min-h-screen z-50">
      <div className="px-0 md:px-6 flex items-center h-[70px] justify-center md:justify-normal">
        <Logo />
      </div>
      <div>
        <ul className="text-sm font-medium text-white">
          <Link
            href="/"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/"
            )}`}
          >
            <BsDisc className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">Khám Phá</span>
          </Link>
          <Link
            href="/zingchart"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/zingchart"
            )}`}
          >
            <RiDiscLine className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">#zingchart</span>
          </Link>
          <Link
            href="/radio"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/radio"
            )}`}
          >
            <HiOutlineRadio className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">Radio</span>
            <span className="px-1 ml-2 text-xs font-bold uppercase bg-red-600 rounded border-l-[3px] border-transparent hidden md:inline">
              Live
            </span>
          </Link>
          <Link
            href="/library"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/library"
            )}`}
          >
            <MdLibraryMusic className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">Thư Viện</span>
          </Link>
        </ul>
        <div className="mx-6 border-t border-[#3A3344] my-4"></div>
        <ul className="text-white">
          <Link
            href="/new-music"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/new-music"
            )}`}
          >
            <TbMusic className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">Nhạc Mới</span>
          </Link>
          <Link
            href="/theme-and-type"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/theme-and-type"
            )}`}
          >
            <FiGrid className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">Chủ Đề & Thể Loại</span>
          </Link>
          <Link
            href="/top-100"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/top-100"
            )}`}
          >
            <BsStar className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">Top 100</span>
          </Link>
        </ul>
        <div className="mx-6 border-t border-[#3A3344] my-4"></div>
        <ul className="text-white">
          <Link
            href="/playlist"
            className={`px-0 md:px-5 py-[14px]  hover:bg-[#393142] cursor-pointer border-l-[3px]  flex items-center justify-center md:justify-normal border-transparent ${activeLink(
              "/playlist"
            )}`}
          >
            <IoAddOutline className="w-5 h-5 mr-0 md:mr-3" />
            <span className="hidden md:inline">Tạo playlist mới</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
