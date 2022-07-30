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

const YelpResults = ({ headerText, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null
  }

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
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                shadowColor: 'rgba(0,0,0, .9)',
                shadowOffset: { height: 1, width: 2 },
                shadowOpacity: 1,
                margin: 15,
                borderRadius:5,
              }}
              onPress={() =>
                navigation.navigate('ResultsShow', {
                  id: item.id
                })
              }
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
