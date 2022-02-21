import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart, Bar, Line } from "react-chartjs-2";

import { Col, Row, Typography } from "antd";

const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  // console.log(data);

  const options = {
    scales: {
      scales: {
        y: {
          // suggestedMin: 0,
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            {coinName} Current Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
}

export default LineChart;
