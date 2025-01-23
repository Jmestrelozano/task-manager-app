import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonIcon } from "@/components/common/buttons/ButtonIcon";

describe("ButtonIcon Component", () => {
  it("renders the button with label and icon", () => {
    const mockIcon = <svg data-testid="icon" />;
    render(
      <ButtonIcon
        label="Click me"
        icon={mockIcon}
        className="custom-class"
        type="button"
      />
    );

    const button = screen.getByRole("button", { name: "Click me" });
    const icon = screen.getByTestId("icon");

    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent("Click me");

    expect(icon).toBeInTheDocument();

    expect(button).toHaveClass("custom-class");
  });

  it("calls the onClick handler when clicked", async () => {
    const onClickMock = jest.fn();
    render(
      <ButtonIcon
        label="Click me"
        className="custom-class"
        type="button"
        onClick={onClickMock}
      />
    );

    const button = screen.getByRole("button", { name: "Click me" });

    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders without an icon when none is provided", () => {
    render(
      <ButtonIcon label="Click me" className="custom-class" type="button" />
    );

    const button = screen.getByRole("button", { name: "Click me" });
    const icon = screen.queryByTestId("icon");

    expect(button).toBeInTheDocument();

    expect(icon).not.toBeInTheDocument();
  });

  it("applies default type 'button' if type is not provided", () => {
    render(
      <ButtonIcon label="Click me" className="custom-class" type="button" />
    );

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toHaveAttribute("type", "button");
  });
});
