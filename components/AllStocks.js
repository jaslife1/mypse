import React, { Component } from 'react';
import { View, Button, ActivityIndicator, FlatList } from 'react-native';
import { StockItem } from './StockItem';
import GLOBAL from '../global';

export default class AllStocks extends React.Component {
	static navigationOptions = {
		title: 'All PSE Stocks'
	};
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}

	componentDidMount() {
		return fetch('http://phisix-api.appspot.com/stocks.json')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					stocks: responseJson.stock
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	_addStock = (item) => {
		//console.log(item);
		//GLOBAL.stocks = [ ...GLOBAL.stocks, item.symbol ];
		GLOBAL.homeScreen.setState({
			stocks: [ ...GLOBAL.homeScreen.state.stocks, item ]
		});
		// console.log(GLOBAL.homeScreen.state.stocks);
		this.props.navigation.navigate('Home');
	};

	_keyExtractor = (item, index) => '' + index;
	_renderItem = ({ item }) => <StockItem item={item} onPressItem={this._addStock} />;

	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}

		return (
			<View style={{ flex: 1 }}>
				{/* <Button title="Back Home" onPress={() => this.props.navigation.navigate('Home')} /> */}
				<FlatList data={this.state.stocks} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
				{/* <Button title="Get" onPress={() => console.log(this.state.stocks)} /> */}
			</View>
		);
	}
}
