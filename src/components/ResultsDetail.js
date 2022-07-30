import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetail = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
      <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
      <Text>Love you</Text>
    </View>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 10,
    shadowColor: 'rgba(0,0,0, .9)',
    shadowOffset: { height: 1, width: 2 },
    shadowOpacity: 1,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
  }
})
