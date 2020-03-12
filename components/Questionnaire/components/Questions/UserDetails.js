import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

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
      <Button
        title='CHECK IN'
        type='outline'
        titleStyle={{ color: 'black', fontSize: 20 }}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        onPress={nextStep}
      />
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
    color: 'black',
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
  btnContainer: {
    flex: 5,
    justifyContent: 'center'
  },
  btnStyle: {
    borderColor: 'black',
    borderWidth: 1,
    width: 180,
    height: 60
  }
});

export default UserDetails
