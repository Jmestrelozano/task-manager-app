import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface NotificationState {
  hasShownWelcomeNotification: boolean;
  setNotificationShown: (shown: boolean) => void;
  resetNotificationState: () => void;
}

export const useNotificationStore = create<NotificationState>()(
  devtools((set) => ({
    hasShownWelcomeNotification: typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("welcomeNotificationShown") || "false")
      : false,
    setNotificationShown: (shown) => {
      set({ hasShownWelcomeNotification: shown });
      sessionStorage.setItem("welcomeNotificationShown", JSON.stringify(shown));
    },
    resetNotificationState: () => {
      set({ hasShownWelcomeNotification: false });
      sessionStorage.removeItem("welcomeNotificationShown");
    },
  }))
);
