import React, { Component } from "react";
import axios from "axios";

class BitCointPrice extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bitCoinUsd: [],
		};
	}
	componentDidMount() {
		axios
			.get("https://api.coindesk.com/v1/bpi/currentprice.json")
			.then((response) => {
				this.setState({ bitCoinUsd: response.data.bpi.USD });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const { bitCoinUsd } = this.state;
		return (
			<div>
				BitCoin Price in {bitCoinUsd.code} -> {bitCoinUsd.rate_float}
			</div>
		);
	}
}

export default BitCointPrice;
