import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from 'react-native-button';

const UserDetails = ({ values, fieldChangeHandler, nextStep }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>Please use your full legal name</Text>
      <TextInput
        style={styles.inputBox}
        placeholder='FirstName'
        onChangeText={fieldChangeHandler('firstName')}
        value={values.firstName}
      />
      <TextInput
        style={styles.inputBox}
        placeholder='LastName'
        onChangeText={fieldChangeHandler('lastName')}
        value={values.lastName}
      />
      <TextInput
        style={styles.inputBox}
        placeholder='Date of Birth'
        onChangeText={fieldChangeHandler('dob')}
        value={values.dob}
      />
      <View style={styles.btnWrapper}>
        <Button style={styles.btnText} onPress={nextStep}>CHECK IN</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    // width: '98%',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingVertical: '2%',
    paddingHorizontal: '5%'
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

export default UserDetails
