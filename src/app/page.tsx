export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row p-5">
        <div className="flex w-full md:w-[30%] md:flex-col md:flex justify-center md:justify-start items-center gap-x-10">
          <img src="" className="rounded-full" alt="..." />
          <div>Email</div>
          <div>LinkedIn</div>
          <div>GitHub</div>
          <div>ORCiD</div>
        </div>
        <div className="w-full flex max-[1000px]:justify-center">
          <div className="w-full flex flex-col">
            <span className="font-bold text-5xl">About Me</span>
            <div className="w-[70%]">
              <div className="flex">
                <p>
                  Here is Hardik Chhabra. I am a senior majoring in Electronics
                  and Communication Engineering at Netaji Subhas University of
                  Technology. I am extremely fortunate to be advised by Prof.
                  K.P.S. Rana and Dr. Aarti Jain. Here is my Resume.
                </p>
                <img className="" src="" alt="..." />
              </div>
              <hr />
              <div className="mt-12">
                <p className="text-3xl font-semibold">Academic Background</p>
                <p>
                  <span className="font-semibold">
                    <span className="text-red-500">[Highlight]</span> I am
                    looking for PhD to start in 2025 Fall. <br />
                    Contact me if you have any leads! <br />
                  </span>
                  <ul className="pl-5 pt-2 list-[square]">
                    <li>
                      {" "}
                      <span className="font-semibold">
                        Sep 2020 - June 2024:
                      </span>{" "}
                      Fuzhou University (BEng)
                    </li>
                    <li>
                      <span className="font-semibold">
                        Sep 2020 - May 2024:
                      </span>{" "}
                      Maynooth University (BSc)
                    </li>
                    <li>
                      <span className="font-semibold">
                        June 2022 - Nov 2022:
                      </span>{" "}
                      Cambridge University (Intern)
                    </li>
                    <li>
                      Expect to apply for a one-year MSc in the UK and will
                      graduate in 2025. Looking for PhD position after MSc!
                      Online talk with me
                    </li>
                  </ul>
                </p>
              </div>
              <hr />
              <div className="mt-12">
                <p className="text-3xl font-semibold">Research Interests</p>
                <p>
                  <ul className="pl-5 pt-2 list-[square]">
                    <li>Industrial IoT System</li>
                    <li>Bluetooth Low Energy</li>
                    <li>Applied Machine Learning</li>
                  </ul>
                  My current research focuses on practical problems that
                  artificial intelligence faces in real life. My interests are
                  on the Machine Learning and its applications in Industrial
                  IoT. In a word, advanced technologies like ML and IoT
                  positively influence the life of everybody. I wish to devote
                  my talent to this meaningful cause and bring well-being to
                  society.
                </p>
              </div>
              <hr />
              <div className="mt-12">
                <p className="text-3xl font-semibold">News & Updates</p>
                <p>
                  <ul className="pl-5 pt-2 list-[square]">
                    <li>
                      {" "}
                      <span className="font-semibold">March 2023:</span> Happy
                      to be awarded the XiamenAir Scholarship.
                    </li>
                    <li>
                      <span className="font-semibold">May 2024:</span> Happy to
                      win the Finalist Award in MCM 2023.
                    </li>
                    <li>
                      <span className="font-semibold">June 2022:</span> Summer
                      Research Intern at University of Cambridge, advised by
                      Prof. Pietro Liò.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
