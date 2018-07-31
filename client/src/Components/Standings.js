import React, { Component } from 'react'

class Standings extends Component {
	constructor() {
		super();

		this.state = {
			drivers: []
		}
	}

	componentDidMount() {
		fetch('/api/items')
			.then(res => res.json())
			.then(drivers => this.setState({drivers}, () => console.log('drivers fetched...',
			 drivers)))
	}

	render() {
		return (
			<div className='App'>
				<h2>Standings</h2>
				<ul>
					{this.state.drivers.map(driver =>
						<li key={driver.id}>{driver.firstName} {driver.lastName}</li>
					)}
				</ul>
			</div>
		)
	}
}

export default Standings