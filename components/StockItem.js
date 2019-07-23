import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

export class StockItem extends React.Component {
	_onPress = () => {
		if (this.props.onPressItem) {
			this.props.onPressItem(this.props.item);
		}
	};

	render() {
		// const textColor = this.props.selected ? 'red' : 'black';
		return (
			<TouchableHighlight underlayColor={'#EEEEEE'} onPress={this._onPress}>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						borderBottomColor: '#EEEEEE',
						borderBottomWidth: 1,
						padding: 10
					}}
				>
					<View style={{ flex: 1, paddingLeft: 10 }}>
						<Text>{this.props.item.symbol}</Text>
					</View>
					<View style={{ flex: 1, paddingRight: 10 }}>
						<Text style={{ textAlign: 'right' }}>
							{this.props.item.price.amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}
