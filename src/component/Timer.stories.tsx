import type { Story, StoryDefault } from "@ladle/react";
import React from "react";
import Timer from "./Timer";

export default {
  decorators: [
    (Component) => (
      <div
        style={{
          border: "solid",
          borderWidth: "3px",
        }}
      >
        <Component />
      </div>
    ),
  ],
} satisfies StoryDefault;

export const TimerInactive: Story = () => <Timer isActive={false} />;
export const TimerActive: Story = () => <Timer isActive={true} />;
