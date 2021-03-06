import React, { Component } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import TipList from './Components/TipList'
import MainTotal from './Components/MainTotal'
import Facebook from './Components/Facebook'
import MapWithASearchBox from './Components/MapWithASearchBox'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SetValues from './Components/SetValues'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressValue: '',
      address: [],
      amountValue: '',
      amount: [],
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    }

    this.handleTipArray = this.handleTipArray.bind(this)
    this.handleAddressArray = this.handleAddressArray.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.clearState = this.clearState.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  // retrieves data from localstorage and updates the state
  componentDidMount() {
    let address = JSON.parse(localStorage.getItem('address'))
    let amount = JSON.parse(localStorage.getItem('amount'))
    let picture = JSON.parse(localStorage.getItem('picture'))
    let name = JSON.parse(localStorage.getItem('name'))
    let driver = JSON.parse(localStorage.getItem('driver'))

    this.setState({
      address,
      amount,
      picture,
      name,
      driver
    })

    console.log(this.state.driver)
  }

  responseFacebook = response => {

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });

    localStorage.setItem('picture', JSON.stringify(this.state.picture))
    localStorage.setItem('name', JSON.stringify(this.state.name))
  }

  // handles amount input, pushes data to array in state 
  handleTipArray(event) {
    this.setState({ amountValue: event.target.value || ' ' })
  }

  // handles address input, pushes data to array in state 
  handleAddressArray(event) {
    this.setState({ addressValue: event.target.value || ' ' })
  }

  // sets address and amount data in localstorage
  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      address: [...this.state.address || [], this.state.addressValue || '-'],
      amount: [...this.state.amount || [], parseFloat(this.state.amountValue) || 0],
      addressValue: '',
      amountValue: ''
    },
      () => {
        localStorage.setItem('address', JSON.stringify(this.state.address))
        localStorage.setItem('amount', JSON.stringify(this.state.amount))
      }
    )
  }

  // removes item from array and resets state
  removeItem(index) {
    this.setState({
      address: [...this.state.address].filter((_, i) => i !== index),
      amount: [...this.state.amount].filter((_, i) => i !== index)
    },
      () => {
        localStorage.setItem('address', JSON.stringify(this.state.address))
        localStorage.setItem('amount', JSON.stringify(this.state.amount))
      }
    )
  }

  // clears localstorage and deletes db document
  logOut() {
    localStorage.clear()
  }

  // Resets Application
  clearState() {
    this.setState({
      address: [],
      amount: []
    },
      () => {
        localStorage.setItem('address', JSON.stringify(this.state.address))
        localStorage.setItem('amount', JSON.stringify(this.state.amount))
      }
    )
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Route
            path='/' exact
            render={(props) => (<Facebook {...props}
              isLoggedIn={this.state.isLoggedIn}
              picture={this.state.picture}
              name={this.state.name}
              responseFacebook={this.responseFacebook}
            />)}
          />
          <Route
            path='/'
            render={(props) => (props.location.pathname !== '/') && (<NavBar {...props}
              clearState={this.clearState}
              logOut={this.logOut}
              picture={this.state.picture}
              name={this.state.name}
            />)}
          />
          <Route
            path='/input' exact
            render={(props) => <MainTotal {...props} amount={this.state.amount} />}
          />
          <Route
            path='/input' exact
            render={(props) => (<SetValues {...props}
              handleSubmit={this.handleSubmit}
              handleAddressArray={this.handleAddressArray}
              handleTipArray={this.handleTipArray}
              handleChange={this.handleChange}
              amount={this.state.amount}
              addressValue={this.state.addressValue}
              amountValue={this.state.amountValue}
            />)}
          />
          <Route
            path='/tiplist' exact
            render={(props) => (<TipList {...props}
              amount={this.state.amount}
              address={this.state.address}
              removeItem={this.removeItem}
            />)}
          />
          <Route
            path='/map' exact
            render={() => <MapWithASearchBox />}
          />
        </div>
      </Router>
    )
  }
}

export default App
