import { ToasterProvider } from "@/providers/ToasterProvider";
import { render } from "@testing-library/react";
import { Toaster } from "react-hot-toast";

jest.mock("react-hot-toast", () => ({
  Toaster: jest.fn(() => <div data-testid="toaster-mock" />),
}));

describe("ToasterProvider", () => {
  it("should render the Toaster component", () => {
    const { getByTestId } = render(<ToasterProvider />);

    expect(getByTestId("toaster-mock")).toBeInTheDocument();
  });

  it("should pass correct props to the Toaster component", () => {
    render(<ToasterProvider />);

    expect(Toaster).toHaveBeenCalled();
  });
});
