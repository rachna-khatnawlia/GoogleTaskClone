//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../../../Components/ButtonComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import strings from '../../../constants/lang';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';

// create a component
const Intro = () => {
  const introSliderState = () => {
    actions.Intro(false);
  };

  return (
    <WrapperContainer>
      <Image
        source={imagePath.IntroImage}
        style={styles.introImg}
        resizeMode="cover"
      />
      <View style={styles.welcometextBox}>
        <Text style={styles.introWelcomeText}>{strings.introWelcome}</Text>
        <Text style={styles.introDescText}>{strings.introWelcomeDesc}</Text>
        <Button onPress={introSliderState} buttonText={strings.getStated}/>
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  introImg: {
    width: '100%',
    height: '75%',
    flex:0.8,
  },
  welcometextBox: {
    paddingHorizontal: moderateScale(40),
    flex:0.2,
    justifyContent:'center',
  },
  introWelcomeText: {
    fontSize: textScale(20),
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: moderateScale(10),
  },
  introDescText: {
    fontSize: textScale(13),
    color: colors.darkGreyText,
    textAlign: 'center',
    lineHeight: 18,
  },
});

//make this component available to the app
export default Intro;
