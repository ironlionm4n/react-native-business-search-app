import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [restaurants, setRestaurants] = useState([])

  const handleSetSearchTerm = newTerm => {
    setSearchTerm(newTerm)
  }

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'atlanta'
      }
    })
    console.log(response.data.businesses)
    setRestaurants(response.data.businesses)
  }

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onHandleSetSearchTerm={handleSetSearchTerm}
        onHandleSubmitSearch={searchApi}
      />
      <Text style={styles.title}>SearchScreen</Text>
      <Text># of Restaurants Found: {restaurants.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32
  }
})

export default SearchScreen
