import React from 'react'
import '../App.css'
import MainTotal from './MainTotal'


const TipList = (props) => {
  const tips = props.amount
  const addresss = props.address
  return (
	 <div>
	  <div className='ListTitle'>
	    <h2>TRACK</h2>
	  </div>

	 <div className='Deliverylist'>
	  <div>
	   <h4>#</h4>
	   {(tips || []).map((address, i) =>
	   	(<li key={i}>
			    {(i + 1) + '.'}
		    </li>
		    ))}
	  </div>
	  <div>
	    <h4>Address</h4>
	    {(addresss || []).map((address, i) =>
		    (<li key={i}>
			    {address}
		    </li>
		    ))}
	  </div>
	  <div>
	    <h4>Tips</h4>
	    {(tips || []).map((address, i) =>
	    	(<li key={i}>
	    		{tips[i]}
		    </li>
		    ))}
	  </div>
	  <div>
	    <h4>Edit</h4>
	 	{(tips || []).map((address, i) =>
	 		(<li key={i}>
	 			<button onClick={() => {props.removeItem(i)}}>Remove</button>
	 		</li>
		    ))}
	 </div>
	 </div>
	 	<MainTotal className='TipListTotal' amount={tips}/>	
    </div>
  )
}


export default TipList

