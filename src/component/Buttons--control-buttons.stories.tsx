import type { Story, StoryDefault } from "@ladle/react";
import React from "react";
import ControlButtons from "./ControlButtons";

export default {
  title: "Buttons / Control buttons",
} satisfies StoryDefault;

export const StartButton: Story = () => <ControlButtons isOn={false} />;

StartButton.decorators = [
  (Component) => (
    <div
      style={{
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Component />
    </div>
  ),
];

export const PauseButton: Story = () => <ControlButtons isOn={true} />;

PauseButton.decorators = [
  (Component) => (
    <div
      style={{
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Component />
    </div>
  ),
];
