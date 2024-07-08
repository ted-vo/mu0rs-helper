import Layout, { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import { Flex, Radio } from "antd";
import { BoldOutlined } from '@ant-design/icons';

interface CharBuilderProps {
  charKey: string
}

const CharBuilder: React.FC<CharBuilderProps> = ({ charKey }) => {
  const [hp, setHP] = useState<number>(0);
  const [sd, setSD] = useState<number>(0);
  const [ag, setAG] = useState<number>(0);
  const [mp, setMP] = useState<number>(0);

  useEffect(() => {
    setHP(100);
    setSD(100);
    setAG(100);
    setMP(100);
  }, []);

  return (
    <Content>
      <div>Builder {charKey}</div>

      <div style={{ flexDirection: "row" }}>
        <span>test 1</span>
        <span>test 2</span>
        <span>test 3</span>
      </div>

      <Flex vertical={false}>
        <div style={{ padding: '12px 12px', background: "red", color: "white", fontWeight: "bold" }}>HP {hp}</div>
        <div style={{ padding: '12px 12px', background: "orange", color: "white", fontWeight: "bold" }}>SD {sd}</div>
        <div style={{ padding: '12px 12px', background: "purple", color: "white", fontWeight: "bold" }}>AG {ag}</div>
        <div style={{ padding: '12px 12px', background: "blue", color: "white", fontWeight: "bold" }}>MP {mp}</div>
      </Flex>
    </Content>
  );
};

export { CharBuilder };
