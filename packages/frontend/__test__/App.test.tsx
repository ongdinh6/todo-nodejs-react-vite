// frontend/__test__/App.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import App from "App";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useContext: jest.fn().mockReturnValue({ basename: "/" }), // Provide a fake basename
}));

describe("App", () => {

  it("Should render App", async () => {
    const { container } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);
    expect(container).toBeTruthy();
  });
});
