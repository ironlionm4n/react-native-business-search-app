import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native'
import ResultsDetail from './ResultsDetail'

const renderItem = (item, navigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
      <ResultsDetail item={item} />
    </TouchableOpacity>
  )
}
const YelpResults = ({ headerText, restaurants, navigation }) => {
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
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow', {
                id: item.id
              })}
            >
              <ResultsDetail item={item} />
            </TouchableOpacity>
          )
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  containerText: {
    marginBottom: 6
  }
})

export default YelpResults
