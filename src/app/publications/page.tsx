"use client";
import { conference, journal, patents, underReview } from "@/data/data";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const navigate = useRouter();
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
        <div className="w-full">
          <div className="w-[70%] max-[1000px]:w-full flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <span className="text-3xl font-semibold">Patents</span>
              <hr />
              {patents.map((pat: (typeof patents)[0], index: number) => (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg p-3 flex gap-5 justify-between items-center"
                >
                  <div>
                    <span className="font-semibold text-xl">{pat.title}</span>
                    <p className="text-xs">
                      <b>Authors:</b> Hardik Chhabra
                    </p>
                    <p className="text-sm text-justify">{pat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-3xl font-semibold">Journals</span>
              <hr />
              {journal.map((pub: (typeof journal)[0], index: number) => (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg p-3 flex gap-5 justify-between items-center"
                >
                  <div>
                    <span className="font-semibold text-xl">{pub.title}</span>
                    <p className="text-md">{pub.journalName}</p>
                    <p className="text-xs">
                      <b>Authors:</b> {pub.authors}
                    </p>
                    <p className="text-sm text-justify">{pub.description}</p>
                    <p className="text-sm font-semibold">doi:{pub.doi}</p>
                  </div>
                  <div className="flex flex-col gap-3">
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
                  className="cursor-pointer hover:shadow-lg p-3 flex gap-5 justify-between items-center"
                >
                  <div>
                    <span className="font-semibold text-xl">{conf.title}</span>
                    <p className="text-md">{conf.confName}</p>
                    <p className="text-xs">
                      <b>Authors:</b> {conf.authors}
                    </p>
                    <p className="text-sm text-justify">{conf.description}</p>
                    <p className="text-sm font-semibold">doi: {conf.doi}</p>
                  </div>
                  <div className="flex flex-col gap-3">
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
