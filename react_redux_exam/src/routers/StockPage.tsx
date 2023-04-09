import React from 'react'
import ProductList from "../components/ProductList/ProductList"
import { Link } from "react-router-dom"
import {Chart} from "../components/index"

const StockPage = () => {

  return (
    <>
      <div className="header-page df jc-sa ai-c">
      <Link to='/'>
          <div>
            <b> Склад </b>
          </div>
        </Link>
        <Link to='/sale'>
          <div>
            <b> Продажа </b>
          </div>
        </Link>
        <Link to='/purchase'>
          <div>
            <b> Покупка </b>
          </div>
        </Link>
        <Link to='/data'>
          <div>
            <b> Операции </b>
          </div>
        </Link>
      </div>
      {/* @ts-ignore */}
      <ProductList />
      <Chart />
    </>
  );
};

export default StockPage;