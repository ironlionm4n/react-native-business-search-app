import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native'

const YelpResults = ({ headerText, restaurants }) => {
  return (
    <ScrollView>
      <Text style={styles.titleText}>{headerText}</Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({item}) => {
            return (
                <View>

                <Text>{item.name}</Text>
                <Image source={{uri: item.image_url}} style={styles.tinyLogo}/>
                </View>
            )
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
})

export default YelpResults
