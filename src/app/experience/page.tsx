"use client";
import { experience } from "@/data/data";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaOrcid, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Page: NextPage = () => {
  const navigate = useRouter();

  return (
    <>
      <div className="flex flex-col md:flex-row p-5">
        <div className="flex w-full md:w-[30%] gap-5 md:flex-col md:flex justify-center md:justify-start items-center">
          <img
            src="https://te-bucket-test.s3.ap-south-1.amazonaws.com/Hardik-Pic.png"
            className="rounded-full w-36 h-36 hidden md:block"
            alt="..."
          />
          <div className="flex md:flex-col md:flex justify-center md:justify-start gap-x-5">
            <Link
              href="mailto:chhabrahardik345@gmail.com"
              className="flex gap-1 items-center"
            >
              <MdEmail /> Email
            </Link>
            <div
              onClick={() =>
                navigate.push("https://www.linkedin.com/in/hardik-chhabra/")
              }
              className="flex gap-1 items-center"
            >
              <FaLinkedin />
              LinkedIn
            </div>
            <div
              onClick={() => navigate.push("https://github.com/Hardchik")}
              className="flex gap-1 items-center"
            >
              <FaGithub />
              GitHub
            </div>
            <div
              onClick={() =>
                navigate.push("https://orcid.org/0000-0003-4943-833X")
              }
              className="flex gap-1 items-center"
            >
              <FaOrcid />
              ORCiD
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[70%] max-[1000px]:w-full gap-5 flex flex-col">
            <div className="flex flex-col gap-5">
              <span className="font-semibold text-3xl">
                Industry Experience
              </span>
              <hr />
              {experience.map(
                (start: (typeof experience)[0], index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 cursor-pointer hover:shadow-lg p-3"
                  >
                    <div className="hidden md:flex">
                      <img className="w-[100px]" src={start.image} />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between">
                        <div className="">
                          <div className="flex gap-3 items-center">
                            <img
                              className="w-[60px] md:hidden"
                              src={start.image}
                            />
                            <span className="font-semibold text-xl">
                              {start.name}
                            </span>
                          </div>

                          <p className="text-xs">
                            <b>Position:</b> {start.role}
                          </p>
                        </div>
                        <div className="flex flex-col text-end">
                          <p className="text-sm">{start.location}</p>
                          <p className="text-xs">{start.date}</p>
                        </div>
                      </div>
                      <p className="text-sm text-justify">
                        {start.description}
                      </p>

                      <Link
                        href={start.link}
                        className="text-sm text-blue-700 hover:text-blue-500 items-center gap-1 flex text-black font-semibold"
                      >
                        Website{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
