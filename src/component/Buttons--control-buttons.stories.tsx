import type { Story } from "@ladle/react";
import ControlButtons from "./ControlButtons";

export const StartButton: Story = () => <ControlButtons isOn={false} />;
export const PauseButton: Story = () => <ControlButtons isOn={true} />;
