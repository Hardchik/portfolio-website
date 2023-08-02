"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "./classNames";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex p-5 max-[850px]:justify-between">
        <div className="w-[35%] flex justify-center">
          <Link href="/" className="font-bold text-xl">
            HARDIK CHHABRA
          </Link>
        </div>
        <div className="max-[850px]:hidden flex max-[1000px]:justify-center w-full gap-5">
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
        <div className="min-[850px]:hidden flex">
          <div className="self-end" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {open && (
            <div className="fixed top-0 left-0 flex flex-col h-screen w-screen bg-gray-200">
              <div
                onClick={() => setOpen(false)}
                className="self-end p-10 hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex flex-col p-10 gap-5">
                <Link
                  href={"/"}
                  className={classNames(
                    pathname === "/" ? "font-semibold" : "",
                    "text-xl"
                  )}
                >
                  ABOUT ME
                </Link>
                <Link
                  href={"/resume"}
                  className={classNames(
                    pathname === "/resume" ? "font-semibold" : "",
                    "text-xl"
                  )}
                >
                  RESUME
                </Link>
                <Link
                  href={"/publications"}
                  className={classNames(
                    pathname === "/publications" ? "font-semibold" : "",
                    "text-xl"
                  )}
                >
                  PUBLICATIONS
                </Link>
                <Link
                  href={"/projects"}
                  className={classNames(
                    pathname === "/projects" ? "font-semibold" : "",
                    "text-xl"
                  )}
                >
                  PROJECTS
                </Link>
                <Link
                  href={"/awards"}
                  className={classNames(
                    pathname === "/awards" ? "font-semibold" : "",
                    "text-xl"
                  )}
                >
                  AWARDS
                </Link>
                <Link
                  className="text-xl"
                  href={"https://blogsbyhc.netlify.app"}
                >
                  BLOGS
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
