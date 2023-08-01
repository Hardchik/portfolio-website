"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import "./pdf.css";

//PDFjs worker from an external cdn
const url =
  "https://te-bucket-test.s3.ap-south-1.amazonaws.com/Hardik+Chhabra-Resume+(New).pdf";

export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <>
      <div className="main">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </>
  );
}
