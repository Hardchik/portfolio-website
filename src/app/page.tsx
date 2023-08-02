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
          <div className="w-full flex flex-col max-[1000px]:items-center">
            <span className="font-bold text-5xl">About Me</span>
            <div className="w-[70%] max-[1000px]:w-full">
              <div className="flex items-center">
                <p>
                  Here is Hardik Chhabra. I am a senior majoring in Electronics
                  and Communication Engineering at Netaji Subhas University of
                  Technology. I am extremely fortunate to be advised by Prof.
                  K.P.S. Rana and Dr. Aarti Jain. Here is my Resume.
                </p>
                <img
                  className="w-48 h-48 p-5"
                  src="https://media.licdn.com/dms/image/C4D03AQGJlZ1CWd5cvg/profile-displayphoto-shrink_800_800/0/1641390433017?e=1696464000&v=beta&t=vahmEr7MJuFPVxE5051heDi_q7oL6Y4mCUrFPMmoBDc"
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
                  Looking for MS admissions! Online talk with me.
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
                    win the special mention in International Space Challenge.
                  </li>
                  <li>
                    <span className="font-semibold">June 2022:</span> Happy to
                    secure a World Rank #8 in the prestigious CanSat
                    Competition.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
