"use client";

import { JSX } from "react";
import Button from "./Button";

interface DownloadImageProps {
  children: JSX.Element;
  fileName: string;
  downloadLink: string;
}

function DownloadImage({ children, downloadLink, fileName }: DownloadImageProps) {
  async function handleClick() {
    const response = await fetch(`/api/download?url=${downloadLink}&fileName=${fileName}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col items-center relative">
      {children}
      <Button className="-translate-y-1/2" onClick={handleClick} borderColor="border-red-300" text="Download"></Button>
    </div>
  );
}

export default DownloadImage;