import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center mt-20 h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Page not found</h1>
      <p className="text-lg text-gray-700 mb-4">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Oops! Looks like the page you're looking for does not exist.
      </p>
      <div className="text-lg text-gray-700">
        Return to{" "}
        <Link href="/" className="text-blue-700 underline">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
