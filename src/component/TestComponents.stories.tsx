import type { Story } from "@ladle/react";
import React from "react";
import Timer from "./Timer";

export const Button: Story = () => <button>Button</button>;
export const MainHeader: Story = () => <h1>Main title</h1>;
export const ActiveTimer: Story = () => <Timer isActive={true} />;
export const InactiveTimer: Story = () => <Timer isActive={false} />;
