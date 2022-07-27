//import liraries
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {Component, useContext, useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../../../Components/FirebaseAuthProvider';

// create a component
const Login = () => {
  const {googleLogin} = useContext(AuthContext);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '775249111086-krhn6id339qji38e1s24ejbbp0k7k9la.apps.googleusercontent.com',
    });
  }, []);
  return (
    <View style={styles.container}>
      <Button title="login with google" onPress={googleLogin} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Login;
