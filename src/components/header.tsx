import React from 'react';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

const headers = [
  { key: 0, label: "MuOrs" }
]

const AppHeader: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={headers}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export { AppHeader };
