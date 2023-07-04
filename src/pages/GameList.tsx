import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GameList = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={{ color: 'red' }}>Game list</Text>
		</SafeAreaView>
	);
};

export default GameList;
