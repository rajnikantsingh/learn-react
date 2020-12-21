import React, { Component } from "react";
class Counter extends Component {
	state = {
		tags2: [],
		tags: ["tag1", "tag2", "tag3"],
		// imageUrl : 'https://picsum.photos/200'
	};

	styles = {
		fontSize: 130,
		fontWeight: "bold",
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no Tags</p>;
		return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag} </li>
				))}
			</ul>
		);
	}

	render() {
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
					className="btn btn-danger btn-sm m-2"
				>
					Delete
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
}

export default Counter;
