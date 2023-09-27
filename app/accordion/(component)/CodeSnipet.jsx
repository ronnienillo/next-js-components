"use client"

import { FaCopy } from "react-icons/fa";
import { useState } from "react";

const CodeSnipet = ({ codeSnipet }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnipet);
    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <pre className="text-sm bg-gray-800 text-white relative px-4 mb-4">
      <button
        onClick={copyToClipboard}
        className="absolute top-[15px] right-[15px] text-xl cursor-pointer flex align-center gap-1 z-10"
      >
        <FaCopy />
        <span className="text-xs">Copy</span>
      </button>


      {isCopied && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white z-20">
          Copied!
        </div>
      )}

      <div className="relative overflow-x-auto">
      {codeSnipet}
      </div>
    
      
    </pre>
  );
};

export default CodeSnipet;
