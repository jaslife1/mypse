import React, { Component } from 'react';
import { View, Button, FlatList, Text, StyleSheet, TouchableHighlight, Platform } from 'react-native';

export default class StockDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: this.props.navigation.getParam('item', 'no item specified')
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => this.getStockDetail(), 30000); // 60 seconds
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	async getStockDetail() {
		return fetch('http://phisix-api.appspot.com/stocks/MEG.json')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					item: responseJson.stock[0]
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		const item = this.state.item;
		console.log(item);
		return (
			<View style={{ flex: 1, padding: 10 }}>
				{/* <Button title="Back Home" onPress={() => this.props.navigation.navigate('Home')} /> */}
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, margin: 10, paddingLeft: 10 }}>
						<Text>{item.name}</Text>
					</View>
					<View style={{ flex: 1, margin: 10, paddingRight: 10 }}>
						<Text style={{ paddingRight: 10, textAlign: 'right' }}>{item.symbol}</Text>
					</View>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, margin: 10, paddingLeft: 10 }}>
						<Text>Price:</Text>
					</View>
					<View style={{ flex: 1, margin: 10, paddingRight: 10 }}>
						<Text style={{ paddingRight: 10, textAlign: 'right' }}>{item.price.amount.toFixed(2)}</Text>
					</View>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, margin: 10, paddingLeft: 10 }}>
						<Text>Change:</Text>
					</View>
					<View style={{ flex: 1, margin: 10, paddingRight: 10 }}>
						<Text style={{ paddingRight: 10, textAlign: 'right' }}>{item.percent_change.toFixed(2)}%</Text>
					</View>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, margin: 10, paddingLeft: 10 }}>
						<Text>Volume:</Text>
					</View>
					<View style={{ flex: 1, margin: 10, paddingRight: 10 }}>
						<Text style={{ paddingRight: 10, textAlign: 'right' }}>
							{item.volume.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
