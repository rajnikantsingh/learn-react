import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		const { onReset, counters, onDelete, onIncrement } = this.props;
		// Destructuring arguments
		return (
			<div>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						// value={counter.value}
						// id={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;