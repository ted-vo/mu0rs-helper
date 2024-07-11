import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import { Col, Row, Flex, InputNumber } from "antd";

import type { InputNumberProps } from 'antd';

import { Char } from '../../model/char';

import styles from './Builder.module.css';

import { BorderOutlined, BugOutlined } from '@ant-design/icons';
//import { BoldOutlined } from '@ant-design/icons';

interface CharBuilderProps {
  charKey: string
}

const CharBuilder: React.FC<CharBuilderProps> = ({ charKey }) => {
  const char = new Char(charKey);

  const [name, setName] = useState('');
  const [master, setMaster] = useState(0);
  const [fruit, setFruit] = useState(0);
  const [point, setPoint] = useState(0);
  const [rPoint, setRPoint] = useState(0);

  const [str, setStr] = useState(0);
  const [agi, setAgi] = useState(0);
  const [vit, setVit] = useState(0);
  const [ene, setEne] = useState(0);
  const [cmd, setCmd] = useState(0);

  const [hp, setHP] = useState(0);
  const [sd, setSD] = useState(0);
  const [ag, setAG] = useState(0);
  const [mp, setMP] = useState(0);

  const onMasterChange: InputNumberProps['onChange'] = (value: any) => {
    setMaster(value);
  };
  const onLevelChange: InputNumberProps['onChange'] = (value: any) => {
    char.level = value;
    setPoint(char.getPoint())
    setName(char.getName())
  };
  const onFruitChange: InputNumberProps['onChange'] = (value: any) => {
    char.fruit = value;
    setRPoint(char.getRPoint())
  };
  const onStrChange: InputNumberProps['onChange'] = (value: any) => {
    char.str = value;
    console.log(char.getRPoint())
    setRPoint(char.getRPoint())
  };
  const onAgiChange: InputNumberProps['onChange'] = (value: any) => {
    char.agi = value;
    setRPoint(char.getRPoint())
  };
  const onVitChange: InputNumberProps['onChange'] = (value: any) => {
    char.vit = value;
    setRPoint(char.getRPoint())
  };
  const onEneChange: InputNumberProps['onChange'] = (value: any) => {
    char.ene = value;
    setRPoint(char.getRPoint())
  };
  const onCmdChange: InputNumberProps['onChange'] = (value: any) => {
    char.cmd = value;
    setRPoint(char.getRPoint())
  };

  useEffect(() => {
    setName(char.getName())
    setHP(100);
    setSD(100);
    setAG(100);
    setMP(100);
  }, [charKey]);

  return (
    <Content>
      <Row>
        <Col span={18}>
          <h3>Inventory {charKey}</h3>
          <Flex style={{ background: "green" }}>
            <span>left</span>
          </Flex>
        </Col>
        <Col span={6} style={{ gap: 0 }}>
          <Flex vertical={true}>
            <img src="bg-item-top.jpg" style={{ width: "100%", height: "50px" }} />
            <div style={{ textAlign: "center", height: "0px", overflow: "visible", zIndex: "9999" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "white", position: "relative", top: "-25px" }}>
                {name}
              </span>
            </div>
            <Flex vertical={false} style={{ gap: 0, backgroundImage: 'url("bg-1.png")', color: "white" }}>
              <img src="bg-item-left.jpg" />
              <Flex flex={1} vertical={true} style={{ padding: "16px 16px" }}>
                <Flex vertical={false} style={{ alignItems: "center", justifyContent: "space-between" }}>
                  <Flex vertical={true}>
                    <span>Master</span>
                    <InputNumber min={0} max={250} defaultValue={0} onChange={onMasterChange} />
                  </Flex>
                  <Flex vertical={true}>
                    <span>Level</span>
                    <InputNumber min={1} max={400} defaultValue={1} onChange={onLevelChange} />
                  </Flex>
                  <Flex vertical={true}>
                    <span>Fruit</span>
                    <InputNumber min={0} max={127} defaultValue={0} onChange={onFruitChange} />
                  </Flex>
                </Flex>
                <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
                  <h4>Total Point: {point}</h4>
                  <h4>Remaning Point: {rPoint}</h4>
                </Row>

                <Row className={styles.charRowHeader}>
                  <Col>
                    <span>Strength</span>
                  </Col>
                  <Col>
                    <InputNumber min={0} max={250} defaultValue={0} onChange={onStrChange} />
                  </Col>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>Dmg(rate): 0~0 (0)</span>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>Attack rate: </span>
                </Row>
                <Row className={styles.charRowHeader}>
                  <Col>
                    <span>Agility</span>
                  </Col>
                  <Col>
                    <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onAgiChange} />
                  </Col>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>Defense (rate): 0 (0)</span>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>Attack speed: 0</span>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>Defense rate: 0</span>
                </Row>
                <Row className={styles.charRowHeader}>
                  <Col>
                    <span>Stamina</span>
                  </Col>
                  <Col>
                    <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onVitChange} />
                  </Col>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>HP: 0/0</span>
                </Row>
                <Row className={styles.charRowHeader}>
                  <Col>
                    <span>Energy</span>
                  </Col>
                  <Col>
                    <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onEneChange} />
                  </Col>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>Mana: 0/0</span>
                </Row>
                <Row className={styles.charRowItem}>
                  <span>Skill Damage: 0%</span>
                </Row>
                <Row className={styles.charRowHeader}>
                  <Col>
                    <span>Command</span>
                  </Col>
                  <Col>
                    <InputNumber style={{ marginLeft: "10px" }} min={0} max={250} defaultValue={0} onChange={onCmdChange} />
                  </Col>
                </Row>
              </Flex>
              <img src="bg-item-right.jpg" />
            </Flex>
            <img src="bg-item-bot.jpg" style={{ width: "100%", height: "50px" }} />
          </Flex>
        </Col>
      </Row>

      <Flex vertical={false} style={{ padding: "8px 0", background: "cyan", justifyContent: "space-evenly" }}>
        <div style={{ padding: '4px 4px', background: "red", color: "white", fontWeight: "bold" }}>HP {hp}</div>
        <div style={{ padding: '4px 4px', background: "orange", color: "white", fontWeight: "bold" }}>SD {sd}</div>
        <div style={{ padding: '4px 4px', background: "purple", color: "white", fontWeight: "bold" }}>AG {ag}</div>
        <div style={{ padding: '4px 4px', background: "blue", color: "white", fontWeight: "bold" }}>MP {mp}</div>
      </Flex>
    </Content >
  );
};

export { CharBuilder };
