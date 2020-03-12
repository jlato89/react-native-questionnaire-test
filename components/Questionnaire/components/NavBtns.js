import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';

const NavBtns = ({ prevStep, nextStep }) => {
  return (
    <View style={styles.btnWrapper}>
      <Button
        title='Previous'
        type='outline'
        buttonStyle={styles.btnStyle}
        titleStyle={styles.btnTitleStyle}
        onPress={prevStep}
      />
      <Button
        title='Next'
        type='outline'
        buttonStyle={styles.btnStyle}
        titleStyle={styles.btnTitleStyle}
        onPress={nextStep}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 500,
    marginBottom: -30
  },
  btnStyle: {
    borderColor: 'black',
    borderWidth: 2,
    width: 180,
    height: 60
  },
  btnTitleStyle: {
    color: 'black',
    fontSize: 20
  }
});


export default NavBtns
