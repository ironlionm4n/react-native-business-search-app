import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image
} from 'react-native'
import ResultsDetail from './ResultsDetail'

const renderItem = ({ item }) => {
  return <ResultsDetail item={item} />
}
const YelpResults = ({ headerText, restaurants }) => {
  return (
    <ScrollView>
      <View style={styles.containerText}>
        <Text style={styles.titleText}>{headerText}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={renderItem}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 250,
    height: 250
  },
  containerText: {
    marginBottom: 6,
  }
})

export default YelpResults
