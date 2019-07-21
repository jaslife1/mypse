/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PortfolioList from './components/PortfolioList';
import AllStocks from './components/AllStocks';
import StockDetails from './components/StockDetails';

const MainNavigator = createStackNavigator({
	Home: { screen: PortfolioList },
	AllStocks: { screen: AllStocks },
	Details: { screen: StockDetails }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

// const instructions = Platform.select({
// 	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
// 	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
// });

// type Props = {};
// export default class App extends Component<Props> {
// 	addStockToPortfolioHandler = () => {
// 		fetch('http://phisix-api3.appspot.com/stocks/SSP.json')
// 			.then((response) => response.json())
// 			.then((responseJson) => {
// 				console.log(responseJson);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<StatusBar barStyle={'default'} hidden={false} />
// 				<PortfolioList />
// 				<Button title="Hello" onPress={this.addStockToPortfolioHandler} />
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		// flex: 1,
// 		marginTop: 70,
// 		justifyContent: 'center',
// 		position: 'relative'
// 		// alignItems: 'center'
// 		// backgroundColor: '#F5FCFF'
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 		backgroundColor: '#444'
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5
// 	}
// });
