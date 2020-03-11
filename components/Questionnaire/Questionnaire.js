import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserDetails from './components/UserDetails';

export class Questionnaire extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    dob: '',
    relapses: '', // boolean
    substancesUsed: [], // array
    rememberUsing: '',  // boolean
    datesUsedWeed: [], // array
    datesUsedCocaine: [], // array
    datesUsedTobacco: [], // array
    datesUsedAlcohol: [], // array
    profileImg: '',
    weedUsedWith: '',
    cocaineUsedWith: '',
    tobaccoUsedWith: '',
    alcoholUsedWith: '',
    knownDaysSober: '',
    meetingsAttended: '',
    recoveryFeeling: ''
  }

  // Next Question
  nextQuestion = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Previous Question
  prevQuestion = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // Handle Field Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, dob, relapses, substancesUsed, rememberUsing, datesUsedWeed, datesUsedCocaine, datesUsedTobacco, datesUsedAlcohol, profileImg, weedUsedWith, cocaineUsedWith, tobaccoUsedWith, alcoholUsedWith, knownDaysSober, meetingsAttended, recoveryFeeling } = this.state;
    const values = { firstName, lastName, dob, relapses, substancesUsed, rememberUsing, datesUsedWeed, datesUsedCocaine, datesUsedTobacco, datesUsedAlcohol, profileImg, weedUsedWith, cocaineUsedWith, tobaccoUsedWith, alcoholUsedWith, knownDaysSober, meetingsAttended, recoveryFeeling }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Tuesday, March 2</Text>
          <Text style={styles.headerText}>2:30pm</Text>
          <Text style={styles.headerText}>It has been XX days since your last visit</Text>
        </View>
        <View style={styles.box}>
          {/* <Text>This will be the Question box</Text> */}
          <UserDetails
            values={values}
            onChangeHander={this.handleChange}
            nextStep={this.nextQuestion}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: '5%'
  },
  headerText: {
    fontSize: 30,

  },
  box: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
    // height: '85%',
    width: '98%',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingVertical: '2%'
  }
})

export default Questionnaire