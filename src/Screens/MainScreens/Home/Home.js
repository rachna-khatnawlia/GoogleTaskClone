//import liraries
import React, {Component, useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../../../Components/FirebaseAuthProvider';
import WrapperContainer from '../../../Components/WrapperContainer';

// create a component
const Home = () => {
  const {logout} = useContext(AuthContext);

  return (
    <WrapperContainer>
      <Button title="Logout" onPress={logout} />
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Home;
