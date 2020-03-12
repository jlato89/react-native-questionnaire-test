import React, { Component } from 'react';
import Layout from './components/Layout/MainLayout';
import UserDetails from './components/Questions/UserDetails';
import Relapsed from './components/Questions/Relapsed';
import UsedSubstances from './components/Questions/UsedSubstances';
import RememberUsed from './components/Questions/RememberUsed';

export class Questionnaire extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

    let CurrentQuestion = '';
    switch (step) {
      case 1:
        CurrentQuestion = (
          <UserDetails
            values={values}
            fieldChangeHandler={this.handleChange}
            nextStep={this.nextQuestion} />
        );
        break;
      case 2:
        CurrentQuestion = (
          <Relapsed
            values={values}
            fieldChangeHandler={this.handleChange}
            nextStep={this.nextQuestion}
            prevStep={this.prevQuestion} />
        );
        break;
      case 3:
        CurrentQuestion = (
          <UsedSubstances
            values={values}
            fieldChangeHandler={this.handleChange}
            nextStep={this.nextQuestion}
            prevStep={this.prevQuestion} />
        );
        break;
      case 4:
        CurrentQuestion = (
          <RememberUsed
            values={values}
            fieldChangeHandler={this.handleChange}
            nextStep={this.nextQuestion}
            prevStep={this.prevQuestion} />
        );
        break;
    }

    return (
      <Layout lastVisit={7}>
        {CurrentQuestion}
      </Layout>
    )
  }
}

export default Questionnaire