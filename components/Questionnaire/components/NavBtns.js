import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';

const NavBtns = ({ prevStep, nextStep }) => {
  return (
    <View style={styles.btnWrapper}>
      <Button
        title='Previous'
        type='outline'
        buttonStyle={{ borderColor: 'black', borderWidth: 1, width: 180, height: 60 }}
        titleStyle={{ color: 'black', fontSize: 20 }}
        onPress={prevStep}
      />
      <Button
        title='Next'
        type='outline'
        buttonStyle={{ borderColor: 'black', borderWidth: 1, width: 180, height: 60 }}
        titleStyle={{ color: 'black', fontSize: 20 }}
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
    width: 500
  }
});


export default NavBtns
