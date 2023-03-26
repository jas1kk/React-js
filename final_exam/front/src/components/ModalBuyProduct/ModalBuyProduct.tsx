import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchProducts, fetchCash } from "../../slices/productSlice";

const ModalBuyProduct = (props: any) => {
  const dispatch = useAppDispatch();
  const cashAmount = useAppSelector((state) => state.products.cashAmount);
  const sellingProduct = useAppSelector((state) =>
    state.products.data.filter((product) => product._id === props._id)
  );
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [summ, setSumm] = useState("");

  function UpdateData() {
    if (sellingProduct.length !== 0) {
      setPrice(sellingProduct[0].buy_price.toString());
    }
  }
  useEffect(() => {
    UpdateData();
  }, []);

  useEffect(() => {
    setSumm((parseInt(amount) * parseInt(price)).toString());
  }, [amount, price]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/products/buy/` + sellingProduct[0]._id, {
        buyAmount: parseInt(amount),
        newBuyPice: parseInt(price),
      })
      .then(() => alert("Покупка совершена"))
      .then(() => dispatch(fetchProducts()).then(() => dispatch(fetchCash())).then(props.close));
  };
  return (
    <div>
      <p>Купить продукт</p>
      <form onSubmit={handleClick}>
        <input
          placeholder="Product name"
          disabled
          value={sellingProduct[0].product_name}
        />
        <input
          type={"number"}
          placeholder="Product price"
          min={1}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Product amount"
          min={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input disabled placeholder="Итого" value={NaN ? 0 : summ} />
        <button disabled={parseInt(summ) > cashAmount}>Купить</button>
      </form>
      <input type="button" value="отмена" onClick={props.close} />
    </div>
  );
};

export default ModalBuyProduct;
