import React, { Component } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import TipList from './Components/TipList'
import MainTotal from './Components/MainTotal'
import Facebook from './Components/Facebook'
import MapWithASearchBox from './Components/MapWithASearchBox'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SetValues from './SetValues/SetValues'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: [],
      amount: []
    }

    this.handleTipArray = this.handleTipArray.bind(this)
    this.handleAddressArray = this.handleAddressArray.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.clearState = this.clearState.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    console.log(this.state.address)
    console.log(this.state.amount)
  }

  // retrieves data from localstorage and updates the state
  componentDidMount () {
    let address = JSON.parse(localStorage.getItem('address'))
    let amount = JSON.parse(localStorage.getItem('amount'))

    this.setState({
      address: address,
      amount: amount
    })
  }

  // handles amount input, pushes data to array in state 
  handleTipArray(event) {
    let tipArray = this.state.amount.slice()
    tipArray.push(event.target.value || '')
    this.setState({
      amount: tipArray
    })
  }

  // handles address input, pushes data to array in state 
  handleAddressArray(event) {
    let addArray = this.state.address.slice()
    addArray.push(event.target.value || '')
    this.setState({
      address: addArray
    })
  }

  // sets address and amount data in localstorage
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.amount)
    console.log(this.state.address)
    localStorage.setItem('address', JSON.stringify(this.state.address))
    localStorage.setItem('amount', JSON.stringify(this.state.amount))
  }

  // removes item from array and resets state
  removeItem(i) {
    let address = [...this.state.address]
    let amount = [...this.state.amount]

    address.splice(i, 1)
    amount.splice(i, 1)

    this.setState({
      address: address,
      amount: amount
    })

    localStorage.setItem('address', JSON.stringify(address))
    localStorage.setItem('amount', JSON.stringify(amount))

    console.log(this.state.amount)
    console.log(this.state.address)
  }

  // clears all state and localstorage
  clearState() {
    this.setState({
      address: [],
      amount: []
    })

    localStorage.clear()
  }


  render() {
    return (
      <Router>
        <div className='App'>
          <Route
            path='/' exact
            component={Facebook}
          />
          <Route
            path='/'
            render={(props) => (props.location.pathname !== '/') && (<NavBar {...props}
              clearState={ this.clearState }
            />)}
          />
          <Route
            path='/input' exact
            render={(props) => <MainTotal {...props} amount={this.state.amount}/>}
          />
          <Route
            path='/input' exact
            render={(props) => (<SetValues {...props} 
              handleSubmit={ this.handleSubmit } 
              handleAddressArray={ this.handleAddressArray } 
              handleTipArray={ this.handleTipArray }
              handleChange={this.handleChange}
              amount={this.state.amount}
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
