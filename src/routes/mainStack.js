import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import ExpenseScreen from '_screens/expenseScreen';
import DetailScreen from '_screens/detailScreen';
import TransactionScreen from '_screens/transactionScreen';

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'#ffffff'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <Navigator screenOptions={{headerShown: false}}>
        <Screen
          name={'expense'}
          initialParams={{formTrans: null}}
          component={ExpenseScreen}
        />
        <Screen name={'transaction'} component={TransactionScreen} />
        <Screen name={'detail'} component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
