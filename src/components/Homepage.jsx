import React from "react";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading ...";

  return (
    <>
      <Title level={1} className="heading">
        Crypto Stats Around the Globe
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
