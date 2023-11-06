import React from "react";
import "./Example.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { Breadcrumb } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Example1() {
  return (
    <div className="one">
      <Breadcrumb
        items={[
          {
            icon: <AiFillHome />,
            title: "Home",
          },
          {
            title: <Link to="ApplicationCenter"> Application Center</Link>,
          },
          {
            title: <Link to="Applist">Application List</Link>,
          },
          {
            title: "An Application",
          },
        ]}
      />
    </div>
  );
}
export default Example1;
