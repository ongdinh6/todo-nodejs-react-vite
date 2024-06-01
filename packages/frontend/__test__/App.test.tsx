import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "App";

describe("App", () => {
  beforeAll(() => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useContext: jest.fn().mockReturnValue({ basename: "/" }), // Provide a fake basename
    }));
  });

  it("should render App", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
  });
});
