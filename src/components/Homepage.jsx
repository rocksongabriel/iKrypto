import React from "react";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";

const { Title } = Typography;

function Homepage() {
  return (
    <>
      <Title level={1} className="heading">Crypto Stats Around the Globe</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={5}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={5}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={5}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={5}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={5}/></Col>
      </Row>
    </>
  )
}

export default Homepage;
