"use client";
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
          <div className="w-[70%] max-[1000px]:w-full">
            <div className="mt-12">
              <p className="text-3xl font-semibold">Scholarships</p>
              <ul className="pl-5 pt-2 list-[square]">
                <li>
                  <span className="font-semibold">May 2023:</span> Top 5% of
                  student in Academia by NSUT ($1000)
                </li>
                <li>
                  {" "}
                  <span className="font-semibold">June 2023:</span> Premier
                  Research Scholarship from Netaji Subhas University of
                  Technology ($1400)
                </li>
                <li>
                  <span className="font-semibold">May 2022:</span> Top 5% of
                  student in Academia by NSUT ($1000)
                </li>
                <li>
                  <span className="font-semibold">June 2021:</span> Delhi Govt.
                  Scholarship to students who are enrolled in public
                  universities ($2000)
                </li>
              </ul>
            </div>
            <hr />
            <div className="mt-12">
              <p className="text-3xl font-semibold">Competitions</p>
              <ul className="pl-5 pt-2 list-[square]">
                <li>
                  {" "}
                  <span className="font-semibold">Dec 2022:</span> Happy to win
                  the special mention in International Space Challenge.
                </li>
                <li>
                  <span className="font-semibold">June 2022:</span> Happy to
                  secure a World Rank #8 in the prestigious CanSat Competition.
                </li>
                <li>
                  <span className="font-semibold">July 2021:</span> Happy to to
                  be finalist in the prestigious University Rover Challenge.
                </li>
              </ul>
            </div>
            <hr />
            <div className="mt-12">
              <p className="text-3xl font-semibold">Honors</p>
              <ul className="pl-5 pt-2 list-[square]">
                <li>
                  {" "}
                  <span className="font-semibold">Jan 2022:</span> Silver Honors
                  in International Youth Math Challenge
                </li>
                <li>
                  <span className="font-semibold">Aug 2021:</span> Gold Honors
                  in International Astronomy and Astrophysics Competition
                </li>
                <li>
                  <span className="font-semibold">Apr 2020:</span> Bronze Medal
                  at Asia-Pacific Region in International Mathematical Kangaroo
                  Competition
                </li>
                <li>
                  <span className="font-semibold">Dec 2019:</span> Second
                  Position in National Science Fair, hosted by Government of
                  India
                </li>
                <li>
                  <span className="font-semibold">Nov 2019:</span> Outstanding
                  Innovation in Science, Gyan Bharati School
                </li>
              </ul>
            </div>
            <hr />
            <div className="mt-12">
              <p className="text-3xl font-semibold">Services</p>
              <ul className="pl-5 pt-2 list-[square]">
                <li>
                  {" "}
                  <span className="font-semibold">Oct 2022:</span> Vice
                  President of Computer Society of India, NSUT Student Branch
                </li>
                <li>
                  <span className="font-semibold">May 2022:</span> Served as a
                  webmaster in IEEE NSUT Student Branch
                </li>
                <li>
                  <span className="font-semibold">Feb 2022:</span> Co-Software
                  Lead in ARES Robotics Society of NSUT
                </li>
                <li>
                  <span className="font-semibold">Jan 2022:</span> Student
                  volunteer and host of IEEE Delhi Conference
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
