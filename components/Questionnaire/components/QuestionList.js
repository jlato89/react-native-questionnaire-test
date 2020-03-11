import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from 'react-native-button';

const QuestionList = ({ values, fieldChangeHandler, nextStep, prevStep }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>Since your last visit, have you had any relapse?</Text>
      <TextInput
        style={styles.inputBox}
        placeholder='relapses'
        onChangeText={fieldChangeHandler('relapses')}
        value={values.relapses}
      />
      <View style={styles.btnWrapper}>
        <Button style={styles.btnText} onPress={prevStep}>Previous</Button>
        <Button style={styles.btnText} onPress={nextStep}>Next</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '5%'
  },
  questionTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
    paddingBottom: '3%'
  },
  inputBox: {
    fontSize: 30,
    textAlign: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    width: 500,
    borderWidth: 1,
    margin: 2
  },
  btnWrapper: {
    alignSelf: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 70
  },
  btnText: {
    fontSize: 30,
    color: 'grey'
  }
})

export default QuestionList
