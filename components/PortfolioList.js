import React, { Component } from 'react';
import { View, Button, FlatList, ActivityIndicator, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { StockItem } from './StockItem';
import GLOBAL from '../global';

export default class PortfolioList extends React.Component {
	static navigationOptions = {
		title: 'Stock Watch List'
	};
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			stocks: []
		};

		GLOBAL.homeScreen = this;
	}

	// async getStockDetail(stock) {
	// 	return fetch('http://phisix-api.appspot.com/stocks/' + stock + '.json')
	// 		.then((response) => response.json())
	// 		.then((responseJson) => {
	// 			this.setState({
	// 				isLoading: false,
	// 				stocks: [ ...this.state.stocks, responseJson.stock[0] ]
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }

	_willBlur = (payload) => {
		// console.log('Will blur ', payload);
	};

	_didBlur = (payload) => {
		// console.log('Did blur ', payload);
	};

	_willFocus = (payload) => {
		// console.log('Will focus ', payload);
	};

	_didFocus = (payload) => {
		// console.log('Did focus ', payload);
		// this.state.stocks = [];
		// for (var stock of this.state.stocks) {
		// 	this.getStockDetail(stock); // Call one time at the beginning
		// 	// this.timer = setInterval(() => this.getStockDetail(), 30000); // 60 seconds
		// }
	};

	_showDetail = (item) => {
		this.props.navigation.navigate('Details', {
			symbol: item.symbol,
			item: item
		});
	};

	_keyExtractor = (item, index) => '' + index;

	_renderItem = ({ item }) => {
		return <StockItem item={item} onPressItem={this._showDetail} />;
	};

	render() {
		if (this.state.stocks.length == 0) {
			return (
				<View style={{ flex: 1, padding: 20 }}>
					<NavigationEvents
						onWillFocus={this._willFocus}
						onDidFocus={this._didFocus}
						onWillBlur={this._willBlur}
						onDidBlur={this._didBlur}
					/>
					<Button title="Add" onPress={() => this.props.navigation.navigate('AllStocks')} />
				</View>
			);
		}

		// if (this.state.isLoading) {
		// 	return (
		// 		<View style={{ flex: 1, padding: 20 }}>
		// 			<NavigationEvents
		// 				onWillFocus={this._willFocus}
		// 				onDidFocus={this._didFocus}
		// 				onWillBlur={this._willBlur}
		// 				onDidBlur={this._didBlur}
		// 			/>
		// 			<ActivityIndicator />
		// 		</View>
		// 	);
		// }
		// console.log(this.state.stocks);
		return (
			<View style={{ flex: 1 }}>
				{/* <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} /> */}
				<NavigationEvents
					onWillFocus={this._willFocus}
					onDidFocus={this._didFocus}
					onWillBlur={this._willBlur}
					onDidBlur={this._didBlur}
				/>
				<FlatList data={this.state.stocks} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />

				<Button title="Add" onPress={() => this.props.navigation.navigate('AllStocks')} />
			</View>
		);
	}
}

// class PortfolioItem extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		<View style={styles.item}>Hello</View>;
// 	}
// }

// export default class PortfolioList extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	_onPress = (item, index) => {
// 		console.log(item);
// 		console.log(index);
// 	};
// 	render() {
// 		return (
// 			<View style={{ backgroundColor: '#444' }}>
// 				{/* <FlatList
// 					data={[
// 						{ key: 'a', value: 'test1assaaasdfasdfasdfasasdfasdfasdfasdfdfa' },
// 						{ key: 'b', value: 'test2qwerqwerqwerqwewerqeqewqweqrqre' }
// 					]}
// 					renderItem={({ item }) => <Text>{item.value}</Text>}
// 				/> */}
// 				<FlatList
// 					// ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
// 					// <View style={[style.separator, highlighted && {marginLeft: 0}]} />
// 					// )}
// 					ItemSeparatorComponent={({ highlighted }) => (
// 						<View style={[ style.separator, highlighted && { marginLeft: 0 } ]} />
// 					)}
// 					data={[ { title: 'Item 1 here', key: 'item1' }, { title: 'Item 2 here', key: 'item2' } ]}
// 					renderItem={({ item, index, separators }) => (
// 						<TouchableHighlight
// 							onPress={() => this._onPress(item, index)}
// 							onShowUnderlay={separators.highlight}
// 							onHideUnderlay={separators.unhighlight}
// 						>
// 							<View style={style.content}>
// 								<Text>{item.title}</Text>
// 							</View>
// 						</TouchableHighlight>
// 					)}
// 				/>
// 			</View>
// 		);
// 	}
// }

// const style = StyleSheet.create({
// 	separator: {
// 		borderBottomColor: '#AAAAAA',
// 		borderBottomWidth: 1
// 	},
// 	content: {
// 		backgroundColor: 'white',
// 		padding: 10
// 	}
// 	// container: {
// 	// 	flex: 1,
// 	// 	justifyContent: 'center',
// 	// 	position: 'relative'
// 	// 	// alignItems: 'center'
// 	// 	// backgroundColor: '#F5FCFF'
// 	// },
// 	// welcome: {
// 	// 	fontSize: 20,
// 	// 	textAlign: 'center',
// 	// 	margin: 10,
// 	// 	backgroundColor: '#444'
// 	// },
// 	// instructions: {
// 	// 	textAlign: 'center',
// 	// 	color: '#333333',
// 	// 	marginBottom: 5
// 	// }
// });
