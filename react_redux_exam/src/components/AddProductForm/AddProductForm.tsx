import { useDispatch, useSelector } from "react-redux";
import { createProductAction, editProductAction } from "../../actions/productsActions";
import { FormEvent, useState } from "react";
import { RootState } from "../../store";
import { IProduct } from "../../types";

const AddProductForm = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.list
  );


  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createProductAction({ name, quantity: parseInt(quantity), purchasePrice: parseInt(purchasePrice), sellingPrice: parseInt(sellingPrice) }));

  };

  return (
    <div>
      <form className="block-add" onSubmit={handleClick}>
        <div className="form-row">
          <label htmlFor="name"></label>
          <input
            id="name"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="quantity"></label>
          <input
            id="quantity"
            placeholder="Кол-во"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="purchasePrice"></label>
          <input
            id="purchasePrice"
            placeholder="Закупочная цена"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="sellingPrice"></label>
          <input
            id="sellingPrice"
            placeholder="Цена продажи"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </div>

        <button>Добавить</button>
      </form>
      <style>{`
        .block-add {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .form-row {
          display: flex;
          align-items: center;
        }

        label {
          margin-right: 0px;
        }

        input {
          padding: 5px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
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
    </div>
  );
};

export default AddProductForm;
