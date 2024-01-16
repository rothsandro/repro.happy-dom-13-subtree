import { Popover } from "devextreme-react/popover";
import { render, screen } from "@testing-library/react";
import { test } from "vitest";

test("popover", async () => {
  render(
    <Popover visible>
      <div>Content</div>
    </Popover>
  );

  await screen.findByText("Content");
});
