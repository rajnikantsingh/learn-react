import React, { Component } from "react";
class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="sdfs">
					Total Number of Non-Empty Counters
					<span className="badge badge-pill badge-secondary">
						{this.props.totalCounters}
					</span>
				</a>
				<a className="navbar-brand" href="sdfs">
					Weather for Wellington
				</a>
			</nav>
		);
	}
}

export default NavBar;
