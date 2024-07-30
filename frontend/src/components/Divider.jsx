import React from "react";

export default function Divider() {
  return (
    <div className="w-full flex gap-4 items-center justify-between">
      <div className="border-b-2 border-green-600 flex-1"></div>
      <div className="h-5 w-5 rounded-full bg-green-600"></div>
      <div className="border-b-2 border-green-600 flex-1"></div>
    </div>
  );
}
