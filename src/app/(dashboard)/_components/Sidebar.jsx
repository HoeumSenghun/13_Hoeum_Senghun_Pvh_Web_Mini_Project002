import React from "react";
import { LogOut, MoreVertical, Plus } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo";

function SidebarComponent({ workspace }) {
  return (
    <div className="container ">
      <div className="flex h-screen w-60 flex-col p-4">
        <Logo />

        {/* Workspace Section */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500">Workspace</h2>
            <button className="rounded-full p-1 hover:bg-gray-100">
              <Plus className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <ul className="space-y-2">
            {workspace?.payload?.map((items) => (
              <li key={items.id}>
                <Link
                  href="/workspace"
                  className="flex items-center justify-between rounded-md py-2 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <span
                      className={`mr-2 h-2 w-2 rounded-full bg-red-500 ${items.color}`}
                    ></span>
                    <span className="text-sm ">{items.workspaceName}</span>
                  </div>
                  <MoreVertical className="h-4 w-4 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Favorite Section */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500">Favorite</h2>
            <button className="rounded-full p-1 hover:bg-gray-100">
              <span className="text-gray-500">★</span>
            </button>
          </div>
          <ul className="space-y-2">
          {
            workspace?.payload?.filter(items=> items.isFavorite).map(items =>(
                <li>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md py-2 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <span className={`mr-2 h-2 w-2 rounded-full bg-red-500 ${items.color}`}></span>
                    <span className="text-sm">{items.workspaceName}</span>
                  </div>
                  <MoreVertical className="h-4 w-4 text-gray-400" />
                </Link>
              </li>
            ))
          }
          </ul>
        </div>

        {/* Spacer to push logout to bottom */}
        <div className="flex-grow"></div>

        {/* Logout Button */}
        <button className="flex items-center text-emerald-600 hover:text-emerald-700">
          <LogOut className="mr-2 h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarComponent;
