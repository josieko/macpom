import type { Story } from "@ladle/react";
import { Button, ConfigProvider, Space } from "antd";

export const Buttons: Story = () => {
  return (
    <div>
      <Button>Hello World</Button>
      <br />
      <br />
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#00b96b",
            borderRadius: 12,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <Space>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
        </Space>
      </ConfigProvider>
    </div>
  );
};
