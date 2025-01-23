import { act, renderHook } from "@testing-library/react";
import { useNotificationStore } from "@/store/useNotificationStore";

describe("useNotificationStore", () => {
  beforeEach(() => {
    // Limpiar sessionStorage antes de cada prueba
    sessionStorage.clear();
  });

  it("should set notification shown state and update sessionStorage", () => {
    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      result.current.setNotificationShown(true);
    });

    expect(result.current.hasShownWelcomeNotification).toBe(true);
    expect(sessionStorage.getItem("welcomeNotificationShown")).toBe("true");
  });

  it("should reset notification state and clear sessionStorage", () => {
    sessionStorage.setItem("welcomeNotificationShown", "true");

    const { result } = renderHook(() => useNotificationStore());

    act(() => {
      result.current.resetNotificationState();
    });

    expect(result.current.hasShownWelcomeNotification).toBe(false);
    expect(sessionStorage.getItem("welcomeNotificationShown")).toBe(null);
  });

  it("should default to false when sessionStorage is empty", () => {
    const { result } = renderHook(() => useNotificationStore());

    expect(result.current.hasShownWelcomeNotification).toBe(false);
  });
});
