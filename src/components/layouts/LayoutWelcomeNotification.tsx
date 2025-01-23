"use client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNotificationStore } from "@/store/useNotificationStore";

export const LayoutWelcomeNotification = ({ children, session }: any) => {
  const {
    hasShownWelcomeNotification,
    setNotificationShown,
  } = useNotificationStore((state) => state);

  useEffect(() => {
    !hasShownWelcomeNotification &&
      session.user?.name &&
      toast.custom((t: any) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1643768479891-ea1066aadc6f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {session.user?.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">Welcome</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));

    setNotificationShown(true);
  }, [hasShownWelcomeNotification, session, setNotificationShown]);

  return <>{children}</>;
};
