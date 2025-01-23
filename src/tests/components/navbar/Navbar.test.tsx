import { Navbar } from "@/components/navbar/Navbar";
import { render, screen, fireEvent } from "@testing-library/react";
import { signOut } from "next-auth/react";

jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

describe("Navbar", () => {
  it("should render the navbar with the title and logout button", () => {
    render(<Navbar />);

    expect(screen.getByText("Tasks Manager")).toBeInTheDocument();

    const logoutButton = screen.getByRole("button", { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveTextContent("Logout");
  });

  it("should call signOut when the logout button is clicked", () => {
    render(<Navbar />);

    const logoutButton = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(logoutButton);
    expect(signOut).toHaveBeenCalled();
  });
});
