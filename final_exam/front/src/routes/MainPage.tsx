import StockInfo from "../components/StockInfo/StockInfo";
import StockInfoBarChart from "../components/StockInfoBarChart/StockInfoBarChart";

const MainPage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <StockInfo />
      <div style={{ maxWidth: 500 }}>
        <StockInfoBarChart />
      </div>
    </div>
  );
};

export default MainPage;
