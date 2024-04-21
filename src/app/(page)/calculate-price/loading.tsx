"use client";

import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col h-screenw-full items-center justify-center my-44">
      <ClipLoader color="#3498db" size={50} />;
    </div>
  );
};

export default Loading;
