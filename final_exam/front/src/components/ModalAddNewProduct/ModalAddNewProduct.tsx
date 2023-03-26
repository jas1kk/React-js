import axios from "axios";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { fetchProducts, fetchCash } from "../../slices/productSlice";

const ModalAddNewProduct = (props: any) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");


  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/products`, {
        product_name: name,
        sell_price: parseInt(sellPrice),
        buy_price: parseInt(buyPrice),
      })
      .then(() => alert("Товар добавлен"))
      .then(() => dispatch(fetchProducts()).then(props.close));
  };
  return (
    <div>
      <p>Добавить новый продукт</p>
      <form onSubmit={handleClick}>
        <input
          placeholder="Наименование товара"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"number"}
          placeholder="Цена продажи"
          min={1}
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <input
          placeholder="Цена покупки"
          min={1}
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        />
        <button>Добавить</button>
      </form>
      <input type="button" value="отмена" onClick={props.close} />
    </div>
  );
};

export default ModalAddNewProduct;
