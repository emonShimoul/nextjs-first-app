import Link from "next/link";
import React from "react";

export default async function NotFoundPage404() {
  return (
    <div className="flex justify-center items-center gap-2 h-full w-full">
      <div>
        <h1>404 NOT FOUND</h1>
        <Link href="/">Go Back to Home</Link>
      </div>
    </div>
  );
}
