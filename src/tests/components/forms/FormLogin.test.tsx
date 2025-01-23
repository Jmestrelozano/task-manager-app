
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "@/components/forms/FormLogin";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";


jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Form Component", () => {
  const mockPush = jest.fn();
  const mockSearchParams = { get: jest.fn().mockReturnValue("/home") };

  beforeEach(() => {
    jest.mocked(useRouter).mockReturnValue({ push: mockPush } as any);
    jest.mocked(useSearchParams).mockReturnValue(mockSearchParams as any);
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    render(<Form />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("updates email and password fields", () => {
    render(<Form />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  it("submits the form successfully", async () => {
    jest.mocked(signIn).mockResolvedValueOnce({ error: null });

    render(<Form />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(signIn).toHaveBeenCalledWith("credentials", {
      redirect: false,
      email: "test@example.com",
      password: "password123",
      callbackUrl: "/home",
    }));

    await waitFor(() => expect(mockPush).toHaveBeenCalledWith("/home"));
  });

  it("displays an error message when login fails", async () => {
    jest.mocked(signIn).mockResolvedValueOnce({ error: "Invalid email or password" });

    render(<Form />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
    fireEvent.click(loginButton);

    expect(mockPush).not.toHaveBeenCalled();
  });
});
