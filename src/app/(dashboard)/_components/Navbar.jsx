import React from "react";
import { Bell } from "lucide-react"
import Link from "next/link"

function NavBarComponent({workspace}) {
  console.log(workspace)
  return (
    <div className="container bg-yellow-300">
      <header className="flex h-16 items-center justify-between bg-white px-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center">
          <Link href="/workspace" className="text-sm text-gray-600 hover:text-gray-900">
            Workspace
          </Link>
          <span className="mx-2 text-gray-400">
            <svg
              xmlns=""
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
          <Link
            href="#"
            className="relative text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {/* {workspace?.payload?.workspaceName} */}HRD Design
            <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600"></span>
          </Link>
        </div>

        {/* User Profile and Notifications */}
        <div className="flex items-center gap-4">
          <button className="rounded-full p-1 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-blue-100">
              {/* <img
                src=""
                alt="Profile"
                className="h-full w-full object-cover"
              /> */}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Monster</span>
              <span className="text-xs text-gray-500">
                blackmonster@gmail.com
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBarComponent;
