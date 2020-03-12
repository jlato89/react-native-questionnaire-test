import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import NavBtns from '../NavBtns';

const RememberUsed = ({ values, fieldChangeHandler, nextStep, prevStep }) => {
  const buttons = ['YES', 'NO']
  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>The more we know about when you used, the better we can help you stay sober.</Text>
      <Text style={styles.questionTitle}>Do you remember when you use these substances?</Text>
      <View style={styles.choicesRootContainer}>
        <ButtonGroup
          buttons={buttons}
          containerStyle={styles.choicesContainer}
          buttonStyle={styles.btnStyle}
          textStyle={styles.btnTitleStyle}
          onPress={fieldChangeHandler}
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
    paddingVertical: '2%'
  },
  questionTitle: {
    flex: 2,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingBottom: '1%'
  },
  choicesRootContainer: {
    flex: 8,
    flexDirection: 'row'
  },
  choicesContainer: {
    flexDirection: 'column',
    height: 150,
    borderWidth: 0
  },
  btnStyle: {
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    width: 250,
    marginVertical: 10
  },
  btnTitleStyle: {
    color: 'black',
    fontSize: 20
  }
});

export default RememberUsed
