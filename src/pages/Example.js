import React, { useState } from "react";
import "./Example.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Chart from "react-apexcharts";
import { Breadcrumb, Badge, Descriptions } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Button, message } from "antd";

function Example1() {
  const items = [
    {
      key: "1",
      label: "Product",
      children: "Cloud Database",
    },
    {
      key: "2",
      label: "Billing Mode",
      children: "Prepaid",
    },
    {
      key: "3",
      label: "Automatic Renewal",
      children: "YES",
    },
    {
      key: "4",
      label: "Order time",
      children: "2018-04-24 18:00:00",
    },
    {
      key: "5",
      label: "Usage Time",
      children: "2019-04-24 18:00:00",
      span: 2,
    },
    {
      key: "6",
      label: "Status",
      children: <Badge status="processing" text="Running" />,
      span: 3,
    },
    {
      key: "7",
      label: "Negotiated Amount",
      children: "$80.00",
    },
    {
      key: "8",
      label: "Discount",
      children: "$20.00",
    },
    {
      key: "9",
      label: "Official Receipts",
      children: "$60.00",
    },
    {
      key: "10",
      label: "Config Info",
      children: (
        <>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
          <br />
        </>
      ),
    },
  ];
  const items1 = [
    {
      label: "Product",
      children: "Cloud Database",
    },
    {
      label: "Billing",
      children: "Prepaid",
    },
    {
      label: "Time",
      children: "18:00:00",
    },
    {
      label: "Amount",
      children: "$80.00",
    },
    {
      label: "Discount",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: "$20.00",
    },
    {
      label: "Official",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: "$60.00",
    },
    {
      label: "Config Info",
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: (
        <>
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
        </>
      ),
    },
    {
      label: "Hardware Info",
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: (
        <>
          CPU: 6 Core 3.5 GHz
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
        </>
      ),
    },
  ];
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Login Successfully");
  };

  return (
    <>
      <div className="one">
        <Breadcrumb
          items={[
            {
              href: "/",
              title: (
                <>
                  <AiFillHome />
                  &nbsp;
                  <span>Home</span>
                </>
              ),
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
        {contextHolder}
        <Button
          type="primary"
          onClick={info}
          style={{ marginLeft: "1500px", backgroundColor: "#e6c63a" }}
        >
          Login
        </Button>
        <div className="three">
          {" "}
          <FontAwesomeIcon icon={faUser} /> &nbsp; User Info
        </div>
        <Descriptions
          bordered
          items={items}
          className="two"
          labelStyle={{ color: "tomato", fontFamily: "cursive" }}
        />
        <Descriptions
          className="two"
          bordered
          column={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          items={items1}
          labelStyle={{ color: "tomato", fontFamily: "cursive" }}
        />
      </div>
    </>
  );
}
export default Example1;
