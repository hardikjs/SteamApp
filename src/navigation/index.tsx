import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabStack from './BottomTabStack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator initialRouteName="AppStack">
			<Stack.Screen
				name="AppStack"
				component={BottomTabStack}
				options={{
					headerShown: false,
					gestureEnabled: false
				}}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
