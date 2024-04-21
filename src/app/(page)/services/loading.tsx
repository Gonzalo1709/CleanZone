"use client";

import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <ClipLoader color="#3498db" size={50} />;
    </div>
  );
};

export default Loading;
