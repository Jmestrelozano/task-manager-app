"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { ButtonIcon } from "../common/buttons/ButtonIcon";

export const Navbar = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <nav className="bg-white shadow-md p-4 h-20 fixed w-full">
      <ul className="flex flex-row justify-between items-center h-full">
        <li className="text-2xl font-semibold capitalize">Tasks Manager</li>
        <li>
          <ButtonIcon
            icon={<BiLogOut />}
            className={
              "px-5 flex flex-row justify-center items-center gap-2 bg-indigo-500 rounded-md text-white"
            }
            label={"Logout"}
            type={"button"}
            onClick={handleLogout}
          />
        </li>
      </ul>
    </nav>
  );
};
