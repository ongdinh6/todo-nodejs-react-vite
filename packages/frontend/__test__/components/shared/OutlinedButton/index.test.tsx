import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import OutlinedButton from "components/shared/OutlinedButton";

describe("OutlinedButton", () => {
  it("should render correctly", () => {
    const { getByRole } = render(<OutlinedButton />);
    expect(getByRole("button", { name: "Outlined" })).toBeDefined();
  });
});
