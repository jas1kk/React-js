import TableRow from "../components/TableRow"
import { useAppSelector } from "../hooks"

const Table = () => {
    const products = useAppSelector((state) => state.products.products)
    return(
        <div className="table">
            <table>
                <thead>
                    <tr className="tr">
                        <th>Name |</th>
                        <br />
                        <br />
                        <th>Amount |</th>
                        <br />
                        <br />
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => <TableRow key={product.id} {...product}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;