import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

const UserDetails = ({ values, onChangeHandler, nextStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>Please use your full legal name</Text>
      <View>
        <TextInput
          style={styles.inputBox}
          placeholder='FirstName'
        />
        <TextInput
          style={styles.inputBox}
          placeholder='LastName'
        />
        <TextInput
          style={styles.inputBox}
          placeholder='Date of Birth'
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
  }
})

export default UserDetails
