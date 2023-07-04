import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameList from '../pages/GameList';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
	return (
		<Tab.Navigator
			initialRouteName="GameList"
			screenOptions={{
				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: '500'
				},
				tabBarStyle: {
					backgroundColor: '#242946'
				},
				tabBarActiveTintColor: '#ffffff',
				tabBarInactiveTintColor: '#A4A5AC'
			}}
		>
			<Tab.Screen
				name="GameList"
				component={GameList}
				options={{
					tabBarLabel: 'Game List',
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={GameList}
				options={{
					tabBarLabel: 'Favorite',
					headerShown: false
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabStack;
