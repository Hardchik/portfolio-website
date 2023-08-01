"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "./classNames";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex p-5">
        <div className="w-[35%] flex justify-center">
          <Link href="/" className="font-bold text-xl">
            HARDIK CHHABRA
          </Link>
        </div>
        <div className="flex max-[1000px]:justify-center w-full gap-5">
          <Link
            href={"/"}
            className={classNames(
              pathname === "/" ? "border-black" : "border-white",
              "border-b"
            )}
          >
            ABOUT ME
          </Link>
          <Link
            href={"/resume"}
            className={classNames(
              pathname === "/resume" ? "border-black" : "border-white",
              "border-b"
            )}
          >
            RESUME
          </Link>
          <Link
            href={"/publications"}
            className={classNames(
              pathname === "/publications" ? "border-black" : "border-white",
              "border-b"
            )}
          >
            PUBLICATIONS
          </Link>
          <Link
            href={"/projects"}
            className={classNames(
              pathname === "/projects" ? "border-black" : "border-white",
              "border-b"
            )}
          >
            PROJECTS
          </Link>
          <Link
            href={"/awards"}
            className={classNames(
              pathname === "/awards" ? "border-black" : "border-white",
              "border-b"
            )}
          >
            AWARDS
          </Link>
          <Link href={"https://blogsbyhc.netlify.app"}>BLOGS</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
