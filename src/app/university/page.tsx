"use client";
import { university } from "@/data/data";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaOrcid,
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";
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

        <div className="w-full flex max-[1000px]:justify-center">
          <div className="w-full flex flex-col max-[1000px]:items-center">
            <span className="font-bold text-5xl">Life at NSUT</span>
            <div className="w-[70%] max-[1000px]:w-full">
              <div className="flex flex-col w-full gap-4">
                {university.map(
                  (uni: (typeof university)[0], index: number) => (
                    <div
                      key={index}
                      className="shadow-xl p-5 max-w-[550px] rounded-lg bg-white flex flex-col gap-3"
                    >
                      <div className="flex justify-between">
                        <div
                          onClick={() =>
                            navigate.push(
                              "https://www.instagram.com/chhabra_hardik01/"
                            )
                          }
                          className="flex cursor-pointer items-center gap-3"
                        >
                          <img
                            className="w-10 rounded-full"
                            src={
                              "https://media.licdn.com/dms/image/C4D03AQGJlZ1CWd5cvg/profile-displayphoto-shrink_800_800/0/1641390433017?e=1696464000&v=beta&t=vahmEr7MJuFPVxE5051heDi_q7oL6Y4mCUrFPMmoBDc"
                            }
                            alt="..."
                          />{" "}
                          <p className="font-semibold">chhabra_hardik01</p>
                        </div>
                        <a
                          href="https://www.instagram.com/chhabra_hardik01/"
                          className="text-2xl"
                        >
                          <FaInstagramSquare />
                        </a>
                      </div>
                      <div
                        className="cursor-pointer self-start"
                        onClick={() => navigate.push(uni.orgLink)}
                      >
                        <span className="font-semibold">Organisation:</span>{" "}
                        <span className="border-b border-gray-300 hover:border-gray-700">
                          {uni.organisation}
                        </span>
                      </div>
                      <img className="rounded-md" src={uni.image} />
                      <div>
                        <p>
                          <span className="font-semibold">Position:</span>{" "}
                          {uni.title}
                        </p>
                      </div>
                      <p className="text-sm text-justify">{uni.desc}</p>
                      <div
                        onClick={() => navigate.push(uni.link)}
                        className="cursor-pointer text-blue-600 hover:text-blue-400"
                      >
                        View on Instagram
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
