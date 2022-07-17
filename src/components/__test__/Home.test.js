import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";
const mockFunc = () => jest.fn();

const MockHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
describe("Home testing ", () => {
  it("Input field and Search Button should be in Document", () => {
    render(<MockHome />);
    const inputElement = screen.getByLabelText(/Enter Country Name/i);
    const buttonElement = screen.getByText(/Search/i);
    expect(inputElement).toBeInTheDocument("");
    expect(buttonElement).toBeInTheDocument("");
  });

  it("Search Button should be disabled when input field is empty", () => {
    render(<MockHome />);
    const inputElement = screen.getByLabelText(/Enter Country Name/i);
    const buttonElement = screen.getByText(/Search/i);
    fireEvent.change(inputElement, { target: { value: '   ' } });
    expect(buttonElement).toBeDisabled();
  });

  it("Input field should have some value when text entered to input field", () => {
    render(<MockHome />);
    const inputElement = screen.getByLabelText(/Enter Country Name/i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "Japan" } });
    expect(inputElement.value).toBe("Japan");
  });

  it("If input field have some value then Button should be enabled", () => {
    render(<MockHome />);
    const inputElement = screen.getByLabelText(/Enter Country Name/i);
    const buttonElement = screen.getByText(/Search/i);
    fireEvent.change(inputElement, { target: { value: "Japan" } });
    expect(inputElement.value).toBe("Japan");
    expect(buttonElement).toBeEnabled();
  });
});
