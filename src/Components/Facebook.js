import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router-dom'

class Facebook extends Component {
	state = {
   		isLoggedIn: false,
	    userID: '',
	    name: '',
	    email: '',
	    picture: ''
	}

	responseFacebook = response => {
	    console.log(response)

	    this.setState({
	    	isLoggedIn: true,
	    	userID: response.userID,
	    	name: response.name,
	    	email: response.email,
	    	picture: response.picture.data.url
	    })

}

	
	componentClicked = () => console.log('clicked')

 		render() {
    	let fbContent

    	if (this.state.isLoggedIn) {
    		return <Redirect to='/input'/>
    	} else {
    		fbContent = 
    			 (<FacebookLogin
    			appId='1849032475173691'
    			autoLoad={true}
    			fields='name,email,picture'
    			onClick={this.componentClicked}
    			callback={this.responseFacebook} 
    			/>
    		)
    	}

	    return (
            <div>
            	{fbContent}
            </div>
        )
   }
}

export default Facebook
