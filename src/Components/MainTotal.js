import React from 'react'

let getTotal = (total, num) => {
  return total + (parseFloat(num) || 0)
}

const MainTotal = (props) => {
  return(
    <div className='TotalDisplay'>
      <div className='TotalNum'>
        <span>Total: $ {props.amount.reduce(getTotal, 0).toFixed(2)}</span>
      </div>
    </div>
  )
}

export default MainTotal