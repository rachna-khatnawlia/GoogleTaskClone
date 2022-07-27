import {store} from '../store';
import types from '../types';

const {dispatch} = store;

export const Intro = data => {
  console.log('Intro Action Data>>>>>>>', data);
  dispatch({
    type: types.introSlider,
    payload: data
  })
};
