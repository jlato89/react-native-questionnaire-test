import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const UserDetails = ({ values, fieldChangeHandler, nextStep }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>Please use your full legal name</Text>
      <View>
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
      </View>
      <Button style={styles.submitBtn} title='CHECK IN' onPress={nextStep} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // padding: 40,
  },
  questionTitle: {
    fontSize: 40,
    paddingBottom: '3%'
  },
  inputBox: {
    fontSize: 40,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  submitBtn: {
    width: '50%'
  }
})

export default UserDetails
