import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

import "./style.scss";

const AppLoading: React.FC = () => {
  return <div className="loading">
    <Spin className="spin" indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
  </div>;
};

export default AppLoading;
