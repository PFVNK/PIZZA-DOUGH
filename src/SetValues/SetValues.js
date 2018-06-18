import React from 'react';
import '../App.css';
const SetValues = (props) => {

    return (
    	<div>
      		<form onSubmit={props.handleSubmit}>
      			<label>
          			Address(optional)
          			<br />
          			<input name="address" type="text" onBlur={props.handleAddressArray} />
       		 	</label>
        		<br />
        		<label>
          			Tip
         			<br />
          			<input name="amount" type="number" onBlur={props.handleTipArray} />
        		</label>
        		<br />
        		<input type="submit" value="Enter" />
      		</form>
      </div>
    )
  }


export default SetValues;


