"use client";
import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import packageJson from "../../../package.json";
import { useRouter } from "next/navigation";

const url =
  "https://te-bucket-test.s3.ap-south-1.amazonaws.com/Hardik_Chhabra_resume.pdf";

export default function Resume() {
  const navigate = useRouter();
  const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];
  const newplugins = defaultLayoutPlugin();
  return (
    <>
      <div className="main">
        <button
          className="my-5 py-1 px-3 hover:text-white hover:bg-black border border-black text-black"
          onClick={() => navigate.push(url)}
        >
          Download Resume
        </button>
        <div className="max-[550px]:hidden w-full lg:w-[70%]">
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={url} plugins={[newplugins]} />
          </Worker>
        </div>
      </div>
    </>
  );
}
