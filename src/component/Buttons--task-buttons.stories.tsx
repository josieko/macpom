import type { Story, StoryDefault } from "@ladle/react";
import TaskList from "./TaskList";

export default {
  title: "Buttons / Add task section / Third level",
} satisfies StoryDefault;
/* This is another way of defining the file structure in Ladle
Instead of changing the file name, to organise the structure, within ieach file you can use StoryDefault like:
export default {
    title: "<First level> / <nested level>", ---> "/" is used to define nesting 
} satisfies StoryDefault;
*/

export const TaskListSection: Story = () => <TaskList isActive={false} />;
TaskListSection.storyName = "Add task";
// <name>.storyName = "<new story name>" ---> name changing syntax
