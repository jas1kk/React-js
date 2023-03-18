import { useAppDispatch, useAppSelector } from "../hooks";
import { useState, FormEvent, useEffect } from "react";
import { EditOneProduct, unSetChangeId } from "../Slices/productSlice";

const EditProduct = () => {
  const dispatch = useAppDispatch();
  const changeID = useAppSelector((state) => state.products.changeId);
  const product = useAppSelector((state) =>
    state.products.products.filter((product) => product.id === changeID)
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  function UpdateData() {
    if (product.length !== 0) {
      setName(product[0].productName);
      setPrice(product[0].productPrice.toString())
      setAmount(product[0].productAmount.toString())
    }
  }
  useEffect(() => {
    UpdateData()
  }, [changeID]);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      EditOneProduct({
        id: changeID,
        productName: name,
        productAmount: parseInt(amount),
        productPrice: parseInt(price),
      })
    );
    dispatch(unSetChangeId());
  };

  return (
    <div>
      {changeID ? (
        <div>
          <p>Edit</p>
          <form onSubmit={handleClick}>
            <input
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              placeholder="Product Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="del">Edit</button>
          </form>
          <button onClick={() => dispatch(unSetChangeId())} className="del">Cancel</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditProduct;
