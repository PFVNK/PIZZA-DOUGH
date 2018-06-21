import React from 'react';
import '../App.css';
const SetValues = (props) => {

    return (
    	<div className='ValueInputs'>
      		<form onSubmit={props.handleSubmit}>
      			<div className='AddressValue'>
	      			<label>
	          			Address(optional)
	          			<br />
	          			<input name='address' type='text' onBlur={props.handleAddressArray} />
	       		 	</label>
	       		</div> 	
	        		<br />
	        	<div className='TipValue'>	
	        		<label>
	          			Tip
	         			<br />
	          			<input name='amount' type='number' onBlur={props.handleTipArray} />
	        		</label>
	        	</div>	
	        		<br />
	        	<div className='ValueSubmit'>	
	        		<input type='submit' value='Enter' />
	        	</div>		
      		</form>
      </div>
    )
  }


export default SetValues;


