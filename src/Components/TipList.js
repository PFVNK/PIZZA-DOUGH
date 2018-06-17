import React from 'react';


const TipList = (props) => {
	const tips = props.amount;
	const addresss = props.address;
	return (
		<div>
		<h2>TRACK</h2>
			 {addresss.map((address, i) =>
			 	<li key={i}>
			 		{(i + 1) + address + tips[i]}
			 		<button onClick={() => {props.removeItem(i)}}>Remove</button>
			 	</li>
			 	)}
		</div>
		);
}


export default TipList;





