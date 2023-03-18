import { useAppDispatch } from "../hooks"
import {useState, FormEvent} from 'react'
import { addProduct } from "../Slices/productSlice"

const AddProduct = () => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addProduct({productName: name,productAmount: parseInt(amount),productPrice: parseInt(price)  }));
      };

    return(
        <div>
            <br />
            <p>Add product</p>
            <form onSubmit={handleClick}>
                <input placeholder="Product Name" onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Product Price" onChange={(e) => setPrice(e.target.value)}/>
                <input placeholder="Product Amount" onChange={(e) => setAmount(e.target.value)}/>
                <button className="del">Add</button>
            </form>
        </div>
    )
}

export default AddProduct