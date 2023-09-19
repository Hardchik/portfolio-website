"use client";
import { conference, journal, underReview } from "@/data/data";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaOrcid, FaLinkedin, FaGithub, FaPenSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { classNames } from "../classNames";

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
          <div className="flex md:flex-col md:flex justify-center md:justify-start gap-x-3">
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
              className="flex gap-1 items-center cursor-pointer"
            >
              <FaLinkedin />
              LinkedIn
            </div>
            <div
              onClick={() => navigate.push("https://github.com/Hardchik")}
              className="flex gap-1 items-center cursor-pointer"
            >
              <FaGithub />
              GitHub
            </div>
            <div
              onClick={() =>
                navigate.push("https://orcid.org/0000-0003-4943-833X")
              }
              className="flex gap-1 items-center cursor-pointer"
            >
              <FaOrcid />
              ORCiD
            </div>
            <div
              onClick={() => navigate.push("https://blogsbyhc.netlify.app")}
              className="flex gap-1 items-center cursor-pointer"
            >
              <FaPenSquare />
              Blogs
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[70%] max-[1200px]:w-full flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <span className="text-3xl font-semibold">Journals</span>
              <hr />
              {journal.map((pub: (typeof journal)[0], index: number) => (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg p-3 flex flex-col md:flex-row gap-5 justify-between items-center"
                >
                  <div className="hidden md:flex">
                    <img
                      src={pub.image}
                      className={classNames(
                        pub.image.includes("ATBM")
                          ? "w-[750px] h-[170px] lg:w-[670px] xl:w-[610px]"
                          : pub.image.includes("rspa")
                          ? "w-[750px] h-[170px] lg:w-[670px] xl:w-[610px]"
                          : "w-[750px] h-[130px] lg:w-[670px] xl:w-[610px]"
                      )}
                      alt="..."
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xl">{pub.title}</span>
                    <img
                      src={pub.image}
                      className="self-center block md:hidden"
                    />
                    <p className="text-md">{pub.journalName}</p>
                    <p className="text-xs">
                      <b>Authors:</b> {pub.authors}
                    </p>
                    <p className="text-sm text-justify">{pub.description}</p>
                    <p className="text-sm font-semibold">doi:{pub.doi}</p>
                  </div>
                  <div className="flex md:flex-col self-end md:self-center gap-3">
                    <button
                      onClick={() => navigate.push(pub.pdf)}
                      className="border border-black py-1 px-2 hover:bg-black hover:text-white"
                    >
                      Read
                    </button>
                    <button
                      onClick={() => navigate.push(pub.link)}
                      className="border border-black bg-black text-white py-1 px-2 hover:bg-white hover:text-black"
                    >
                      Visit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-3xl font-semibold">Conference</span>
              <hr />
              {conference.map((conf: (typeof conference)[0], index: number) => (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg p-3 flex flex-col md:flex-row gap-5 justify-between items-center"
                >
                  <div className="hidden md:flex ">
                    <img
                      src={conf.image}
                      className={classNames(
                        "w-[300px] lg:w-[290px] xl:w-[280px]"
                      )}
                      alt="..."
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xl">{conf.title}</span>
                    <img
                      src={conf.image}
                      className="self-center block md:hidden"
                    />
                    <p className="text-md">{conf.confName}</p>
                    <p className="text-xs">
                      <b>Authors:</b> {conf.authors}
                    </p>
                    <p className="text-sm text-justify">{conf.description}</p>
                    {conf.doi && (
                      <p className="text-sm font-semibold">doi: {conf.doi}</p>
                    )}
                    {conf.status && (
                      <p className="text-sm font-semibold">
                        Status: {conf.status}
                      </p>
                    )}
                  </div>
                  {conf.doi != null && (
                    <div className="flex md:flex-col self-end md:self-center gap-3">
                      <button
                        onClick={() => navigate.push(conf.pdf)}
                        className="border border-black py-1 px-2 hover:bg-black hover:text-white"
                      >
                        Read
                      </button>
                      <button
                        onClick={() => navigate.push(conf.link)}
                        className="border border-black bg-black text-white py-1 px-2 hover:bg-white hover:text-black"
                      >
                        Visit
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-3xl font-semibold">Under Review</span>
              <hr />
              {underReview.map(
                (under: (typeof underReview)[0], index: number) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:shadow-lg p-3 flex justify-between items-center"
                  >
                    <div>
                      <span className="font-semibold text-xl">
                        {under.title}
                      </span>
                      <p className="text-md">{under.journalName}</p>
                      <p className="text-xs">
                        <b>Authors:</b> {under.authors}
                      </p>
                      <p className="text-sm text-justify">
                        {under.description}
                      </p>
                    </div>
                    {/* <div className="flex flex-col gap-3">
                    <button
                      onClick={() => navigate.push(under.pdf)}
                      className="border border-black py-1 px-2 hover:bg-black hover:text-white"
                    >
                      Read
                    </button>
                    <button
                      onClick={() => navigate.push(under.link)}
                      className="border border-black bg-black text-white py-1 px-2 hover:bg-white hover:text-black"
                    >
                      Visit
                    </button>
                  </div> */}
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
