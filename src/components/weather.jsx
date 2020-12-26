import React, { Component } from "react";
class Weather extends Component {
	state = {};
	render() {
		return (
			<div class="dropdown">
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					Select City
				</button>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a class="dropdown-item" href="#">
						this.props.cities[0]
					</a>
					<a class="dropdown-item" href="#">
						Auckland
					</a>
					<a class="dropdown-item" href="#">
						Christchurch
					</a>
				</div>
			</div>
		);
	}
}

export default Weather;
