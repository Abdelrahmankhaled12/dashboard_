import React from 'react'

const CellOrderID = ({order}) => {
    return (
        <>
            <td className='cellOrderId'>
                #{+order.id + 6501}
            </td>
        </>)
}

export default CellOrderID