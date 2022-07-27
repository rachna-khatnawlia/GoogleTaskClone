//import liraries
import React from 'react';
import {Intro} from '../Screens';
import navigationStrings from './navigationStrings';

// create a component
const IntroStack = Stack => {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.INTRO}
        component={Intro}
        options={{headerShown: false}}
      />
    </>
  );
};

//make this component available to the app
export default IntroStack;
