import { render, act } from "@testing-library/react";
import { useNotificationStore } from "@/store/useNotificationStore";
import toast from "react-hot-toast";
import { LayoutWelcomeNotification } from "@/components/layouts/LayoutWelcomeNotification";

jest.mock("@/store/useNotificationStore", () => ({
  useNotificationStore: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  ...jest.requireActual("react-hot-toast"),
  custom: jest.fn(),
  dismiss: jest.fn(),
}));

const mockUseNotificationStore = useNotificationStore as jest.MockedFunction<
  typeof useNotificationStore
>;
describe("LayoutWelcomeNotification", () => {
  const mockSetNotificationShown = jest.fn();

  mockUseNotificationStore.mockReturnValue({
    hasShownWelcomeNotification: true,
    setNotificationShown: mockSetNotificationShown,
  });

  afterEach(() => {
    mockSetNotificationShown.mockClear();
    jest.clearAllMocks();
  });

  it("should not show notification if hasShownWelcomeNotification is true", () => {
    render(
      <LayoutWelcomeNotification session={{ user: { name: "John Doe" } }}>
        <div>Children Content</div>
      </LayoutWelcomeNotification>
    );

    expect(toast.custom).not.toHaveBeenCalled();
  });

  it("should show notification if hasShownWelcomeNotification is false and session has a user name", () => {
    mockUseNotificationStore.mockReturnValue({
      hasShownWelcomeNotification: false,
      setNotificationShown: mockSetNotificationShown,
    });

    act(() => {
      render(
        <LayoutWelcomeNotification session={{ user: { name: "John Doe" } }}>
          <div>Children Content</div>
        </LayoutWelcomeNotification>
      );
    });

    expect(toast.custom).toHaveBeenCalled();
    expect(mockSetNotificationShown).toHaveBeenCalledWith(true);
  });

  it("should not show notification if session does not have a user name", () => {
    mockUseNotificationStore.mockReturnValue({
      hasShownWelcomeNotification: false,
      setNotificationShown: mockSetNotificationShown,
    });

    render(
      <LayoutWelcomeNotification session={{ user: {} }}>
        <div>Children Content</div>
      </LayoutWelcomeNotification>
    );

    expect(toast.custom).not.toHaveBeenCalled();
  });

  it("should render children content", () => {
    const { getByText } = render(
      <LayoutWelcomeNotification session={{ user: { name: "John Doe" } }}>
        <div>Children Content</div>
      </LayoutWelcomeNotification>
    );

    expect(getByText("Children Content")).toBeInTheDocument();
  });
});
