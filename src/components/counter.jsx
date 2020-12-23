import React, { Component } from "react";
class Counter extends Component {
	state = {
		buttonText: "Start",
	};
	render() {
		const buttonColor = this.state.buttonText === "Stop" ? "danger" : "success";
		return (
			<React.Fragment>
				<h4>Counter #{this.props.counter.id}</h4>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-warning btn-sm m-2"
				>
					Delete
				</button>
				<button
					onClick={() => this.flipStartStop()}
					className={`btn btn-${buttonColor}`}
				>
					{this.state.buttonText}
				</button>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-22 badge-";
		classes += this.props.counter === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? "Zero" : count;
	}

	flipStartStop() {
		if (this.state.buttonText == "Start") {
			const buttonText = "Stop";
			this.setState({ buttonText });
		} else {
			const buttonText = "Start";
			this.setState({ buttonText });
		}
	}
}

export default Counter;
