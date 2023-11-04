import { render, screen } from "@testing-library/react";
import StockMarketChart from "./StockMarketChart";
import "@testing-library/jest-dom";

test("renders a chart with correct title", () => {
  const symbol = "AAPL";
  const title = "Apple Inc. (AAPL)";

  render(<StockMarketChart symbol={symbol} title={title} />);

  expect(screen.getByText(`${title} Monthly Chart`)).toBeInTheDocument();
});

test("renders data in the table", () => {
  const symbol = "AAPL";
  const title = "Apple Inc. (AAPL)";
  const testData = [
    { date: "2023-01", value: 150.0 },
    { date: "2023-02", value: 155.0 },
  ];

  render(<StockMarketChart symbol={symbol} title={title} data={testData} />);

  for (const dataPoint of testData) {
    expect(screen.getByText(dataPoint.date)).toBeInTheDocument();
    expect(screen.getByText(dataPoint.value.toString())).toBeInTheDocument();
  }
});
