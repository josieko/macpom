import type { Story } from "@ladle/react";
import { linkTo } from "@ladle/react";

export const Link: Story = () => {
  return (
    <button onClick={linkTo("buttons--control-buttons--start-button")}>
      Controls
    </button>
  );
};
