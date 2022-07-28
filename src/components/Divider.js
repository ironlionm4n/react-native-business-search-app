import { StyleSheet, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return <View style={styles.divider}></View>
}

const styles = StyleSheet.create({
  divider: { width: '100%', backgroundColor: 'black', height: 5 }
})

export default Divider
