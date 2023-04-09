import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { RootState } from "../store";
import { IProduct } from "../types";
import { saleProductAction } from "../actions/productsActions";

const DataPage = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if(products.find(item => item.name.toLowerCase() === name.toLowerCase())){
      dispatch(
        saleProductAction({
          name,
          quantity: parseInt(quantity),
        })
        )
    }else{
      alert(`Товара ${name} на складе нет!`)
      }
    setName("");
    setQuantity("");
  };

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
      <div>
      <h1>Продажа товара:</h1>
      <form className="block-add" onSubmit={handleClick}>
        <input
          placeholder="Наименование"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Количество"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button disabled={quantity.length === 0}>Добавить</button>
      </form>
      {products.length >= 1 ? (
        <div>
          <h1>Весь товар на складе:</h1>
          <div className="table-block">
            <table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Наименование</th>
                  <th>Количество</th>
                  <th>Цена продажи</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}шт</td>
                    <td>{item.sellingPrice}тг</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h2 className='tovar'>Товара на складе нет!</h2>
      )}
    </div>
    <style>{`
        .block-add {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }
        .tovar{
          text-align: center;
        }
        .form-row {
          display: flex;
          align-items: center;
        }

        label {
          margin-right: 5px;
        }

        input {
          padding: 5px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 16%;
        }

        button {
          height: 30px;
          font-size: 16px;
          border-radius: 5px;
          border: none;
          background-color: #007bff;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default DataPage;