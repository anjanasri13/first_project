import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Carousel } from "antd";

const props = {
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "uploading",
      url: "http://www.baidu.com/xxx.png",
      percent: 33,
    },
    {
      uid: "2",
      name: "yyy.png",
      status: "done",
      url: "http://www.baidu.com/yyy.png",
    },
    {
      uid: "3",
      name: "zqq.png",
      status: "error",
      response: "Server Error 500",
      // custom error message to show
      url: "http://www.baidu.com/zzz.png",
    },
  ],
};

const contentStyle = {
  margin: 0,
  height: "150px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Example = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <Carousel afterChange={onChange} effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};
export default Example;
