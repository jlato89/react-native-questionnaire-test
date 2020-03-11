import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import UserDetails from './components/UserDetails';
import QuestionList from './components/QuestionList';

export class Questionnaire extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 2,
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
  handleChange = name => (value) => {
    this.setState({ [name]: value });
  }


  render() {
    const { step } = this.state;
    const { firstName, lastName, dob, relapses, substancesUsed, rememberUsing, datesUsedWeed, datesUsedCocaine, datesUsedTobacco, datesUsedAlcohol, profileImg, weedUsedWith, cocaineUsedWith, tobaccoUsedWith, alcoholUsedWith, knownDaysSober, meetingsAttended, recoveryFeeling } = this.state;
    const values = { firstName, lastName, dob, relapses, substancesUsed, rememberUsing, datesUsedWeed, datesUsedCocaine, datesUsedTobacco, datesUsedAlcohol, profileImg, weedUsedWith, cocaineUsedWith, tobaccoUsedWith, alcoholUsedWith, knownDaysSober, meetingsAttended, recoveryFeeling }

    let CurrentQuestions = '';
    switch (step) {
      case 1:
        CurrentQuestions = (
          <UserDetails
            values={values}
            fieldChangeHandler={this.handleChange}
            nextStep={this.nextQuestion}
          />
        );
        break;
      case 2:
        CurrentQuestions = (
          <QuestionList
            values={values}
            fieldChangeHandler={this.handleChange}
            nextStep={this.nextQuestion}
            prevStep={this.prevQuestion}
          />
        );
        break;
      default:
        break;
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Tuesday, March 2</Text>
          <Text style={styles.headerText}>2:30pm</Text>
          <Text style={styles.headerText}>It has been XX days since your last visit</Text>
        </View>
        <View style={styles.questionBox}>
          {CurrentQuestions}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: '5%'
  },
  headerText: {
    fontSize: 25,
    color: 'grey'
  }
})

export default Questionnaire