import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IProduct, IMany, ITotal } from "../../types";
import { useDispatch } from "react-redux";
import React, { FC, useEffect, useState } from 'react'
import { iteratorSymbol } from "immer/dist/internal";

interface IProductList {
  isLoading: boolean
}

const ProductList: FC<IProductList> = () => {
  const dispatch = useDispatch();

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );

  const total = useSelector<RootState, ITotal[]>(
    (state) => state.products.total
  );

  const many = useSelector<RootState, IMany[]>(
    (state) => state.products.many
  );

  return (
    <div className="block-products">
      
      <div className='dengi-main'>
      <div className='dengi'>
      <h1>Деньги на складе:&nbsp;</h1>
        {many?.map((item) => (
          <div key={item.manyState}>
            <div className='many'>{item.manyState}тг</div>
          </div>
        ))}
      </div>
      </div>
      <h1>Товары:</h1>

      <table>
        <thead>

          <tr>

            <th>
              №
            </th>

            <th>
              Имя
            </th>

            <th>
               Количество
            </th>

            <th>
              Закупочная цена
            </th>

            <th>
              Цена продажи
            </th>

          </tr>
        </thead>
        <tbody >
          {products.map((item) => (

            <tr key={item.id}>

              <td>
                {item.id}
              </td>

              <td>
                {item.name}
              </td>

              <td>
                {item.quantity}шт
              </td>

              <td>
                {item.purchasePrice}тг
              </td>

              <td>
                {item.sellingPrice}тг
              </td>
            </tr>
          ))}

          {total.map((item) => (
            <tr key={item.quantity}>
              <th>
                Итого:
              </th>
              <th>

              </th>
              <th>
                {item.quantity}шт
              </th>

              <th>
                {item.purchasePrice}тг
              </th>
              <th>
                {item.sellingPrice}тг
              </th>
            </tr>

          ))}

        </tbody>
      </table>
    </div>
  )
}

export default ProductList;
