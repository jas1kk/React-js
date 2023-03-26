import { useAppSelector, useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { fetchCash, fetchProducts } from "../../slices/productSlice";

const StockInfo = () => {
  const dispatch = useAppDispatch();
  const cashAmount = useAppSelector((state) => state.products.cashAmount);
  const products = useAppSelector((state) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCash());
  }, []);
  if (products.length === 0) {
    return <p>Загрузка данных</p>;
  }
  return (
    <div>
      <div>
        <h3>Информация о складе</h3>
        <p>Количество денег на счету: {cashAmount} тенге</p>
        <p>
          Общая ценность товаров на складе:{" "}
          {products.reduce((acc, product) => {
            return acc + product.sell_price;
          }, 0)}{" "}
          тенге (По цене продажи)
        </p>
        <p>Количество типов товара на складке: {products.length}</p>
        <p>
          Самый дорогой товар на складе:{" "}
          {
            products.reduce((prev, curr) =>
              prev.sell_price > curr.sell_price ? prev : curr
            ).product_name
          }{" "}
          - цена:{Math.max(...products.map((pr) => pr.sell_price))} тенге
        </p>
        <p>
          Самый дешевый товар на складе:{" "}
          {
            products.reduce((prev, curr) =>
              prev.sell_price < curr.sell_price ? prev : curr
            ).product_name
          }{" "}
          - цена:{Math.min(...products.map((pr) => pr.sell_price))} тенге
        </p>
        <p>
          Товар с наибольшим количество:{" "}
          {
            products.reduce((prev, curr) =>
              prev.product_amount > curr.product_amount ? prev : curr
            ).product_name
          }{" "}
          - Количество:{Math.max(...products.map((pr) => pr.product_amount))}{" "}
          шт.
        </p>
        <p>
          Товар с наименьшим количество:{" "}
          {
            products.reduce((prev, curr) =>
              prev.product_amount < curr.product_amount ? prev : curr
            ).product_name
          }{" "}
          - Количество:{Math.min(...products.map((pr) => pr.product_amount))}{" "}
          шт.
        </p>
      </div>
    </div>
  );
};

export default StockInfo;
