//import liraries
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '../Components/FirebaseAuthProvider';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import IntroStack from './IntroStack';
import MainStack from './MainStack';
const Stack = createStackNavigator();
// create a component
const Routes = () => {
  const introShow =  useSelector(state => state?.introReducer?.introData)
  console.log(introShow, "introShow value")

  const { user, setUser } = useContext(AuthContext)
    const [initializing, setinitializing] = useState(true)

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setinitializing(false)
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

  return (
    <NavigationContainer>
        <Stack.Navigator>
        {
          introShow ?
          IntroStack(Stack)
          : user? MainStack(Stack) : AuthStack(Stack)

        }
        </Stack.Navigator>
    </NavigationContainer>
  );
};


//make this component available to the app
export default Routes;
