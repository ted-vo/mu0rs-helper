import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => {

  return (
    <Footer style={{ textAlign: 'center' }}>
      MuOrs ©{new Date().getFullYear()} Created by DUNE aka Ted
    </Footer>
  );
};

export { AppFooter };
