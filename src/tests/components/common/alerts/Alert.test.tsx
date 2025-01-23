import { render, screen } from "@testing-library/react";
import { Alert } from "@/components/common/alerts/Alert";

describe("Alert Component", () => {
  it("renders the children content correctly", () => {
    const testMessage = "This is an alert message!";
    render(<Alert>{testMessage}</Alert>);

    const alertElement = screen.getByText(testMessage);
    expect(alertElement).toBeInTheDocument();

    expect(alertElement).toHaveClass("p-2", "rounded", "bg-red-200");
  });
});
