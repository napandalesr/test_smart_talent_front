import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  UploadOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FormOutlined
} from '@ant-design/icons';
import { _Routes } from "../../utils/constans";
import { logout } from "../../utils/api-call";

const { Sider } = Layout;

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const navItemAGENCY = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Mis hoteles',
      onClick: () => { navigate(_Routes.home); }
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Habitaciones',
      onClick: () => { navigate(_Routes.room); }
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'Reservas'
    },
    {
      key: '4',
      icon: <FormOutlined />,
      label: 'Salir',
      onClick: () => { logout(); }
    }
  ];

  const navItemTRAVELER = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Hoteles',
      onClick: () => { navigate(_Routes.home); }
    },
    {
      key: '2',
      icon: <FormOutlined />,
      label: 'Salir',
      onClick: () => { logout(); }
    }
  ];
  return <header style={{ display: 'flex', height: '100vh' }}>
    <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100vh' }}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        style={{ height: '100vh' }}
        defaultSelectedKeys={['1']}
        items={ localStorage.getItem('role') === 'AGENCY' ? navItemAGENCY : navItemTRAVELER }
        />
    </Sider>
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => { setCollapsed(!collapsed); }}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64
      }}
    />
</header>;
};

export default AppHeader;
