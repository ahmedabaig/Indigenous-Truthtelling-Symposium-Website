import React from "react";
import Paragraphs from "../paragraphs";

interface ArtPiecesProps {
  name: string;
  paragraphs: string[];
  children: React.ReactNode;
}

function ArtPieces({ name, paragraphs, children }: ArtPiecesProps) {
  return (
    <div className="flex flex-col mb-16">
      <h3 className="italic font-extrabold text-center text-4xl md:text-7xl text-creme mb-6">{name}</h3>
      <div className="mb-12">
        <Paragraphs paragraphs={paragraphs}></Paragraphs>
      </div>
      {children}
    </div>
  )
}

export default ArtPieces;