import React from 'react';

let getTotal = (total, num) => {
		return total + (parseFloat(num) || 0);	
}

const MainTotal = (props) => {
	return(
		<div>
			<h2>INPUT</h2>
			<span>$ {props.amount.reduce(getTotal, 0).toFixed(2)}</span>
		</div>
	)
}

export default MainTotal;