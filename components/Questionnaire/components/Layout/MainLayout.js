import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'

const MainLayout = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Tuesday, March 2</Text>
          <Text style={styles.headerText}>2:30pm</Text>
          {props.lastVisit &&
            <Text style={styles.headerText}>It has been {props.lastVisit} days since your last visit</Text>}
        </View>
        <View style={styles.mainContent}>
          {props.children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    paddingBottom: '10%', //? Temp solution for tablet nav bar
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  headerText: {
    fontSize: 25,
  },
  mainContent: {
    flex: 6,
  }
});


export default MainLayout
