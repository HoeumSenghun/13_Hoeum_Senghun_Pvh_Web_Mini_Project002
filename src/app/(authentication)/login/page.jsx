import React from "react";
import LoginComponent from "../_components/login";

export default function LoginPage() {
  return (
    <main>
      <div className="space-y-6 w-1/3 mx-auto bg-white drop-shadow-light-steel-blue p-12 rounded-3xl ">
        <h1 className="font-bold text-3xl text-center">
          Welcome to Plan<span className="text-watermelon-red">I</span>t{" "}
        </h1>
        <LoginComponent />

        {/* copyright */}
        <p className="text-center text-light-steel-blue">
          &copy; Copyright | 2025 Monster
        </p>
      </div>
    </main>
  );
}
