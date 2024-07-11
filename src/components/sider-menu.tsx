import React, { useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { Layout, theme } from 'antd';
import { IeOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Characters',
    key: 'characters',
    icon: <UserOutlined />,
    children: [
      { key: 'dw', label: 'Dark Wizard' },
      { key: 'dk', label: 'Dark Knight' },
      { key: 'elf', label: 'Fairy Elf' },
      { key: 'mg', label: 'Magic Gladiator' },
      { key: 'dl', label: 'Dark Lord' },
      { key: 'sum', label: 'Summoner' },
      { key: 'rf', label: 'Rage Fighter' },
    ]
  },
  {
    label: 'Items',
    key: 'items',
    icon: <ShoppingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    label: 'Elements',
    key: 'elements',
    icon: <IeOutlined />,
    children: []
  }
];


export interface AppMenuProps {
  setResult: (e: any) => void
}

const AppMenu: React.FC<AppMenuProps> = ({ setResult }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [_current, setCurrent] = useState('dw');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    setResult(e.key);
  };

  return (
    <Sider style={{ background: colorBgContainer }} width={200}>
      <Menu
        onClick={onClick}
        style={{ height: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export { AppMenu };
