import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import { Col, Row, Flex, InputNumber } from "antd";

import type { InputNumberProps } from 'antd';

import { Char } from '../model/char';
import { BorderOutlined, BugOutlined } from '@ant-design/icons';
//import { BoldOutlined } from '@ant-design/icons';

interface CharBuilderProps {
  charKey: string
}

const CharBuilder: React.FC<CharBuilderProps> = ({ charKey }) => {
  const char = new Char(charKey);

  const [level, setLevel] = useState(1);
  const [hp, setHP] = useState(0);
  const [sd, setSD] = useState(0);
  const [ag, setAG] = useState(0);
  const [mp, setMP] = useState(0);

  const onLevelChange: InputNumberProps['onChange'] = (value: any) => {
    setLevel(value);
  };

  useEffect(() => {
    setLevel(1)
    setHP(100);
    setSD(100);
    setAG(100);
    setMP(100);
  }, []);

  return (
    <Content>
      <div>Builder {charKey}</div>

      <Row>
        <Col flex={10}>
          <h1>Inventory</h1>
          <Flex style={{ background: "green" }}>
            <span>left</span>
          </Flex>
        </Col>
        <Col flex={1}>
          <h1>Stat</h1>
          <Flex vertical={true} style={{ padding: "16px 16px", background: "gray" }}>
            <Flex vertical={false} style={{ alignItems: "center", justifyContent: "space-around" }}>
              <div>
                <span>Master: </span><InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onLevelChange} />
              </div>
              <div>
                <span>Level: </span><InputNumber style={{ marginLeft: "10px" }} min={1} max={400} defaultValue={1} onChange={onLevelChange} />
              </div>
              <div>
                <span>Fruit Create: </span><InputNumber style={{ marginLeft: "10px" }} min={0} max={127} defaultValue={0} onChange={onLevelChange} />
              </div>
              <div>
                <span>Point: 0</span>
              </div>
            </Flex>

            <Row style={{ alignItems: "center" }}>
              <Col style={{ minWidth: '60px' }}>
                <span>Strength</span>
              </Col>
              <Col flex={3}>
                <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onLevelChange} />
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col style={{ minWidth: '60px' }}>
                <span>Agility</span>
              </Col>
              <Col flex={3}>
                <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onLevelChange} />
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col style={{ minWidth: '60px' }}>
                <span>Stamina</span>
              </Col>
              <Col>
                <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onLevelChange} />
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col style={{ minWidth: '60px' }}>
                <span>Energy</span>
              </Col>
              <Col>
                <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onLevelChange} />
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col style={{ minWidth: '60px' }}>
                <span>Command</span>
              </Col>
              <Col>
                <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onLevelChange} />
              </Col>
            </Row>
          </Flex>
        </Col>
      </Row>

      <Flex vertical={false} style={{ padding: "16px 0", background: "cyan", justifyContent: "space-evenly" }}>
        <div style={{ padding: '12px 12px', background: "red", color: "white", fontWeight: "bold" }}>HP {hp}</div>
        <div style={{ padding: '12px 12px', background: "orange", color: "white", fontWeight: "bold" }}>SD {sd}</div>
        <div style={{ padding: '12px 12px', background: "purple", color: "white", fontWeight: "bold" }}>AG {ag}</div>
        <div style={{ padding: '12px 12px', background: "blue", color: "white", fontWeight: "bold" }}>MP {mp}</div>
      </Flex>
    </Content >
  );
};

export { CharBuilder };
