import React, { Component } from 'react';
import { View, Button, ActivityIndicator, FlatList } from 'react-native';

import { StockItem } from './StockItem';

export default class AllStocks extends React.Component {
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
					dataSource: responseJson.stock
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
	_keyExtractor = (item, index) => '' + index;
	_renderItem = ({ item }) => <StockItem item={item} />;

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
				<FlatList
					data={this.state.dataSource}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>
				{/* <Button title="Get" onPress={() => console.log(this.state.dataSource)} /> */}
			</View>
		);
	}
}
