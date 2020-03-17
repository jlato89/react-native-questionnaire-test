import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import NavBtns from '../NavBtns';

const Relapsed = ({ values, handleButtonOption, nextStep, prevStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>Since your last visit, have you had any relapse?</Text>
      <View style={styles.choicesContainer}>
        <Button
          title='YES'
          type='outline'
          buttonStyle={styles.btnStyle}
          titleStyle={styles.btnTitleStyle}
          onPress={fieldChangeHandler}
          ref={answer => handleButtonOption(answer)}
        />
        <Button
          title='NO'
          type='outline'
          buttonStyle={styles.btnStyle}
          titleStyle={styles.btnTitleStyle}
          onPress={fieldChangeHandler}
          ref={answer => handleButtonOption(answer)}
        />
      </View>
      <NavBtns nextStep={nextStep} prevStep={prevStep} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    width: '95%',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },
  questionTitle: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingBottom: '1%',
  },
  choicesContainer: {
    flex: 4,
    flexDirection: 'column',
    width: 500,
  },
  btnStyle: {
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    marginVertical: 15
  },
  btnTitleStyle: {
    color: 'black',
    fontSize: 20
  }
});

export default Relapsed
