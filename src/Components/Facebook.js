import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { Redirect } from 'react-router'

export default class Facebook extends Component {

  render() {
    let fbContent

    if (this.props.isLoggedIn) {
      return <Redirect to='/input' />
    } else {
      fbContent = (
      	<div className='Intro'>
      			<div className='IntroElements'>
      				<h1>PIZZA DOUGH</h1>
      		
			        <FacebookLogin
			          appId='1849032475173691'
			          size='small'
			          autoLoad={false}
			          fields='name,email,picture'
			          onClick={this.props.componentClicked}
			          callback={this.props.responseFacebook}
			        />
		        </div>
        </div>
      )
    }

    return <div>{fbContent}</div>
  }
}


