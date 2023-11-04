import StockMarketChart from "./component/StockMarketChart";

function App() {
  const companies = [
    { symbol: "AAPL", title: "Apple Inc. (AAPL)" },
    { symbol: "MSFT", title: "Microsoft Corp. (MSFT)" },
    { symbol: "TSLA", title: "Tesla, Inc. (TSLA)" },
    { symbol: "AMZN", title: "Amazon.com, Inc. (AMZN)" },
    { symbol: "META", title: "Meta Platforms, Inc. (META)" },
  ];
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {companies.map((data) => {
            return (
              <StockMarketChart
                key={data.symbol}
                symbol={data.symbol}
                title={data.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
