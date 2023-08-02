import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-5">
        <div className="flex w-full md:w-[30%] md:flex-col md:flex justify-center md:justify-start items-center gap-x-10">
          <img src="" className="rounded-full" alt="..." />
          <div className="flex justify-start">
            <div>Email</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>ORCiD</div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </>
  );
};

export default Page;
