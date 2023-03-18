import AddProduct from "../components/AddProduct"
import Table from "../components/Table"
import EditProduct from "../components/EditProduct"



const MainPage = () => {
    return(
        <div>
            <Table />
            <AddProduct />
            <EditProduct />

        </div>
    )
}

export default MainPage