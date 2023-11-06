import React from "react";
import { Card, List } from "antd";

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

export default function Applist() {
  return (
    <div>
      <List
        style={{ marginTop: "50px" }}
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </div>
  );
}
