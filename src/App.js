import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';
import Weather from './components/weather';
import BitCointPrice from './components/bitCoin Price';

class App extends Component {
  	state = {
		counters: [
			{
				id: 1,
				value: 10,
			},
			{
				id: 2,
				value: 20,
			},
			{
				id: 3,
				value: 30,
			},
			{
				id: 4,
				value: 40,
			},
			],
		cities: [
				"Wellington",
				"Auckland",
				"Christchurch"
			]
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counters[index] };
		counters[index].value++;
		this.setState({ counters });
	};
  render() {
    return (
    <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
		<main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
				/>
			<Weather
			cities={this.state.cities}
				/>
			</main>
			<h1>
				<BitCointPrice />
			</h1>
        </React.Fragment>
  );
  }
}

export default App;
