import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const items = [
  {
    href: '',
    title: (
      <>
        <HomeOutlined />
        <span>Home</span>
      </>
    ),
  },
]

const RouteStatus: React.FC = () => {

  return (
    <Breadcrumb style={{ margin: '16px 0' }} items={items}>
    </Breadcrumb>
  );
}

export { RouteStatus };
