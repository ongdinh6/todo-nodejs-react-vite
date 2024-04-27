// frontend/__test__/App.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("Should render App", async () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
