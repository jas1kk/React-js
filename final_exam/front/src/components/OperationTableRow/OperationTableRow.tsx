import { IOperation } from "../../types"
import { FC } from "react"

const OperationTableRow: FC<IOperation> = (props) => {
    console.log(typeof(props.date))
    return(
        <tr>
            <td>{props.type}</td>
            <td>{props.name}</td>
            <td>{props.type === "delete" ? "---" : props.product_amount}</td>
            <td>{props.type === "delete" ? "---" : props.product_summ}</td>
            <td>{props.type === "delete" ? "---" : props.product_amount * props.product_summ}</td>
            <td>{props.date.toString()}</td>
        </tr>
    )
}

export default OperationTableRow;