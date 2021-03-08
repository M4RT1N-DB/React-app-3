import React, { Fragment } from "react";

import { PageHeader } from "antd";
import styled from "@emotion/styled";

import "./header.css";

export interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  const CustomTitle = (
    <div className="title-header">
      <h1>{title}</h1>
    </div>
  );
  const CustomStylesHeader: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    backgroundColor:'#1890FF',
    padding:0,
    margin:0,
    border:'none',
  };
  return (
    <Fragment>
      <div className="header-component">
        <PageHeader
          className="site-page-header"
          title={CustomTitle}
          style={CustomStylesHeader}
        />
      </div>
    </Fragment>
  );
};

export default Header;
