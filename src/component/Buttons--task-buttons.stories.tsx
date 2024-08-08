import type { Story } from "@ladle/react";
import TaskList from "./TaskList";

export const TaskListSection: Story = () => <TaskList isActive={false} />;
TaskListSection.storyName = "Add task";
// <name>.storyName = "<new story name>" ---> name changing syntax
