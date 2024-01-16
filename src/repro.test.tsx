import { Popover } from "devextreme-react/popover";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

test("popover", async () => {
  render(
    <Popover visible>
      <div>Content</div>
    </Popover>
  );

  await expect(screen.findByText("Content")).resolves.toBeTruthy();
});
