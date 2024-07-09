import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { AppHeader } from './components/header';
import { AppFooter } from './components/footer';
import { AppMenu } from './components/menu-sider';
import { RouteStatus } from './components/route-status';
import { CharBuilder } from './components/builder';

import styles from './App.module.css';

const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [pageContent, setPageContent] = useState('');

  const handlePageChanged = (e: any) => {
    console.log('page changed ', e);
    setPageContent(e.key)
  };

  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 48px' }}>
        <RouteStatus />
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <AppMenu setResult={setPageContent} />
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <CharBuilder charKey={pageContent} />
          </Content>
        </Layout>
      </Content>
      <AppFooter />
      <div style={styles} />
    </Layout>
  );
};

export { App };
