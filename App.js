//import liraries
import React, {Component, useEffect} from 'react';
import {Provider} from 'react-redux';
import FirebaeAuthPorvider from './src/Components/FirebaseAuthProvider';
import Routes from './src/navigation/Routes';
import actions from './src/redux/actions';
import {store} from './src/redux/store';
import {getItem} from './src/utils/utils';

// create a component
const App = () => {
  
  useEffect(() => {
    //Chck intro's locally stored value
    getItem('introdata').then(res => {
      console.log('locally stored inro value', res);
      if (res != null) {
        actions.Intro(res);
      }
    });
  });

  return (
    <FirebaeAuthPorvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </FirebaeAuthPorvider>
  );
};

//make this component available to the app
export default App;
