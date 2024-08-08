import type { Story, StoryDefault } from "@ladle/react";
import ControlButtons from "./ControlButtons";

export default {
  title: "Buttons / Control buttons",
} satisfies StoryDefault;

export const StartButton: Story = () => <ControlButtons isOn={false} />;
export const PauseButton: Story = () => <ControlButtons isOn={true} />;
