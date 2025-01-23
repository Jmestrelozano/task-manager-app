import { SessionWrapper } from "@/providers/SessionProvider";
import { render } from "@testing-library/react";


jest.mock("next-auth/react", () => ({
  SessionProvider: jest.fn(({ children }) => <div data-testid="session-provider-mock">{children}</div>),
}));

describe("SessionWrapper", () => {
  it("should render children within the SessionProvider", () => {
    const childText = "Test Child Component";
    const { getByText, getByTestId } = render(
      <SessionWrapper>
        <div>{childText}</div>
      </SessionWrapper>
    );

    expect(getByTestId("session-provider-mock")).toBeInTheDocument();
    expect(getByText(childText)).toBeInTheDocument();
  });
});
