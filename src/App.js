import 'react-native-gesture-handler';
import React, { useState } from 'react';
import NotificationScreen from './screens/Notification';
import BackgroundChangeScreen from './screens/BackgroundChange';
import CounterScreen from './screens/Counter';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/Day8/SignIn/index';
import HomeScreen from './screens/Day8/Home/index';
import AccountScreen from './screens/Day8/Account';

import { AuthContext } from './contexts';
import RootRouter from './routers';

const Stack = createStackNavigator();

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // return (
  //   <AuthContext.Provider value={{ setIsLoggedIn }}>
  //     <NavigationContainer>
  //       {!isLoggedIn ? (
  //         <Stack.Navigator headerMode="none">
  //           <Stack.Screen name="SignIn" component={SignInScreen} />
  //         </Stack.Navigator>
  //       ) : (
  //           <Stack.Navigator>
  //             <Stack.Screen name="Home" component={HomeScreen} />
  //           </Stack.Navigator>
  //         )}
  //     </NavigationContainer>
  //   </AuthContext.Provider>
  // );

  return (
    // <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
    <RootRouter />
    //</AuthContext.Provider>
  )
};

export default App;
