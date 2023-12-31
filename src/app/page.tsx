"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaOrcid, FaLinkedin, FaGithub, FaPenSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
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

        <div className="w-full flex max-[1000px]:justify-center">
          <div className="w-full flex flex-col max-[1000px]:items-center">
            <span className="font-bold text-5xl">About Me</span>
            <div className="w-[70%] max-[1000px]:w-full">
              <div className="flex items-center">
                <p>
                  This is Hardik Chhabra. I am a senior majoring in Electronics
                  and Communication Engineering at Netaji Subhas University of
                  Technology. I am extremely fortunate to be advised by{" "}
                  <Link
                    className="border-b hover:border-black"
                    href="https://sites.google.com/site/kpsrana1/home"
                  >
                    Prof. K.P.S. Rana
                  </Link>
                  ,{" "}
                  <Link
                    className="border-b hover:border-black"
                    href="https://scholar.google.co.in/citations?user=1Lo3PZwAAAAJ&hl=en"
                  >
                    Prof. Vineet Kumar
                  </Link>
                  , and{" "}
                  <Link
                    className="border-b hover:border-black"
                    href="https://scholar.google.co.in/citations?hl=en&user=emqfUEAAAAAJ"
                  >
                    Dr. Aarti Jain
                  </Link>
                  . This is my{" "}
                  <Link href="/resume" className="border-b hover:border-black">
                    resume
                  </Link>
                  .
                </p>
                <img
                  className="w-48 h-48 p-5"
                  src="https://te-bucket-test.s3.ap-south-1.amazonaws.com/logos/profile.jpg"
                  alt="..."
                />
              </div>
              <hr />

              <div className="mt-12">
                <p className="text-3xl font-semibold">Academic Background</p>
                <span className="font-semibold">
                  <span className="text-red-500">[Highlight]</span> I am looking
                  for MS to start in 2024 Fall. <br />
                  Contact me if you have any leads! <br />
                </span>
                <ul className="pl-5 pt-2 list-[square]">
                  <li>
                    {" "}
                    <span className="font-semibold">
                      June 2020 - May 2024:
                    </span>{" "}
                    Netaji Subhas University of Technology (BEng)
                  </li>
                  <li>
                    <span className="font-semibold">May 2023 - Feb 2024:</span>{" "}
                    Indian Institute of Technology (IIT) Delhi (Intern)
                  </li>
                  <li>
                    <span className="font-semibold">June 2022 - Dec 2022:</span>{" "}
                    Netaji Subhas University of Technology (Intern)
                  </li>
                  Looking for MS admissions!{" "}
                  <Link className="border-b hover:border-black" href="#contact">
                    Contact me
                  </Link>
                  .
                </ul>
              </div>
              <hr />

              <div className="mt-12">
                <p className="text-3xl font-semibold">Research Interests</p>
                <ul className="pl-5 pt-2 list-[square]">
                  <li>Electromagnetics</li>
                  <li>Quantum Computing</li>
                  <li>Applied Machine Learning</li>
                  <li>Communication Engineering</li>
                </ul>
                My current research focuses on electronics (core) domain on
                which artificial intelligence can be applied. My interests are
                on the Machine Learning and its applications in communication
                domain. In a word, advanced technologies like ML and Electronics
                to positively influence the life of everybody. I wish to devote
                my talent to this meaningful cause and bring well-being to
                society.
              </div>
              <hr />

              <div className="mt-12">
                <p className="text-3xl font-semibold">News & Updates</p>
                <ul className="pl-5 pt-2 list-[square]">
                  <li>
                    {" "}
                    <span className="font-semibold">May 2023:</span> Research
                    Associate at Indian Institute of Technology (IIT) Delhi,
                    advised by Prof. Monica Aggarwal
                  </li>
                  <li>
                    <span className="font-semibold">Dec 2022:</span> Happy to
                    win the special mention in{" "}
                    <Link
                      className="border-b hover:border-black"
                      href="https://spacefaculty.asia/isc-2024/"
                    >
                      International Space Challenge
                    </Link>
                    .
                  </li>
                  <li>
                    <span className="font-semibold">June 2022:</span> Happy to
                    secure a World Rank #8 in the prestigious{" "}
                    <Link
                      className="border-b hover:border-black"
                      href="https://www.cansatcompetition.com/"
                    >
                      CanSat Competition
                    </Link>
                    .
                  </li>
                </ul>
              </div>
              <hr />

              <div className="mt-12">
                <p id="contact" className="text-3xl font-semibold">
                  Contact Me
                </p>
                <div className="flex flex-col gap-1 justify-start">
                  <input
                    placeholder="Your email"
                    className="px-1 w-full md:w-[70%] lg:w-[60%] xl:w-[40%] border border-black"
                    type="email"
                  />
                  <textarea
                    className="px-1 w-full md:w-[70%] lg:w-[60%] xl:w-[40%] border border-black"
                    placeholder="Your message"
                  />
                  <button className="text-white w-full md:w-[70%] lg:w-[60%] xl:w-[40%] border border-black bg-black hover:text-black hover:bg-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
