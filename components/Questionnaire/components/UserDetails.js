import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from 'react-native-button';

const UserDetails = ({ values, fieldChangeHandler, nextStep }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>Please use your full legal name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder='FirstName'
          onChangeText={fieldChangeHandler('firstName')}
          value={values.firstName}
        />
        <TextInput
          style={styles.inputField}
          placeholder='LastName'
          onChangeText={fieldChangeHandler('lastName')}
          value={values.lastName}
        />
        <TextInput
          style={styles.inputField}
          placeholder='Date of Birth'
          onChangeText={fieldChangeHandler('dob')}
          value={values.dob}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Button style={styles.btnText} onPress={nextStep}>CHECK IN</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },
  questionTitle: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
    paddingBottom: '1%',
  },
  inputContainer: {
    flex: 4,
    width: 500,
  },
  inputField: {
    fontSize: 25,
    textAlign: 'center',
    borderWidth: 1,
    margin: 2
  },
  btnWrapper: {
    flex: 5,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 25,
    color: 'grey',
    borderWidth: 1,
    paddingHorizontal: 35,
    paddingVertical: 15,
  }
})

export default UserDetails
