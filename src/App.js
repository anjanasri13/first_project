import "./App.css";
import { useState } from "react";
import {
  Button,
  DatePicker,
  Divider,
  Cascader,
  App,
  ColorPicker,
  Rate,
} from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";

const { SHOW_CHILD } = Cascader;
const options = [
  {
    label: "Light",
    value: "light",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function App1() {
  const onChange = (value) => {
    console.log(value);
  };
  // const { message } = App.useApp();
  const [value, setValue] = useState("#1677ff");
  const [value1, setValue1] = useState(3);
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <DatePicker placeholder="select date" />
      <DoubleLeftOutlined />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="right">Left Text</Divider>
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Cascader
        style={{
          width: "100%",
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ["bamboo", "little", "fish"],
          ["bamboo", "little", "cards"],
          ["bamboo", "little", "bird"],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{
          width: "100%",
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={["bamboo"]}
      />
      <App>
        <ColorPicker
          value={value}
          onChangeComplete={(color) => {
            setValue(color);
            // message.success(`The selected color is ${color.toHexString()}`);
          }}
        />
      </App>
      <span>
        <Rate tooltips={desc} onChange={setValue1} value={value1} />
        {value ? <span className="ant-rate-text">{desc[value1 - 1]}</span> : ""}
      </span>
    </div>
  );
}

export default App1;
