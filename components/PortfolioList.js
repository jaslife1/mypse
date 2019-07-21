import React, { Component } from 'react';
import { View, Button, FlatList, ActivityIndicator, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import { StockItem } from './StockItem';

export default class PortfolioList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}

	componentDidMount() {
		this.getStockDetail(); // Call one time at the beginning
		this.timer = setInterval(() => this.getStockDetail(), 60000); // 60 seconds
	}

	async getStockDetail() {
		return fetch('http://phisix-api.appspot.com/stocks/SSP.json')
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

	_showDetail = (item) => {
		this.props.navigation.navigate('Details', {
			item: item
		});
	};

	_keyExtractor = (item, index) => '' + index;

	_renderItem = ({ item }) => <StockItem item={item} onPressItem={this._showDetail} />;

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
				{/* <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} /> */}
				<FlatList
					data={this.state.dataSource}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>

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
