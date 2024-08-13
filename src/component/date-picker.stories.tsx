export const DatePicker = () => {
  const date = new Date();
  return <h1>{date.toLocaleDateString("en-US")}</h1>;
};

DatePicker.argTypes = {
  background: {
    name: "Canvas background",
    control: { type: "background" },
    options: ["green", "yellow", "pink"],
    defaultValue: "green",
  },
};
