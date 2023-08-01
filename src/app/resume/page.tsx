"use client";
import { NextPage } from "next";
import Resume from "./pdf";

const Page: NextPage = () => {
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
          <Resume />
        </div>
      </div>
    </>
  );
};

export default Page;
