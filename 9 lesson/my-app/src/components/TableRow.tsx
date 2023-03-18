import {FC } from 'react'
import { IProducts } from '../types'
import DeleteLine from './DeleteLine'
import EditLine from './EditLine'

const TableRow :FC<IProducts> = (props) => {
    return(
        <tr className='products-inf'>
            <td>{props.productName}</td>
            <br />
            <br />
            <td>{props.productAmount}</td>
            <br />
            <br />
            <td>{props.productPrice}</td>
            <td><DeleteLine id={props.id}/> / <EditLine id={props.id}/></td>
        </tr>
    )
}

export default TableRow