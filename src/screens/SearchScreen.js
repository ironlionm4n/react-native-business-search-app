import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Modal } from 'react-native'
import SearchBar from '../components/SearchBar'
import useGetBusinesses from '../hooks/useGetBusinesses'
import YelpResults from '../components/YelpResults'
import FilterByPrice from '../utils/FilterByPrice'
import Divider from '../components/Divider'

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, restaurants, errorMessage] = useGetBusinesses()

  const handleSetSearchTerm = newTerm => {
    setSearchTerm(newTerm)
  }

  return (
    <>
      {console.log(navigation)}
      <SearchBar
        searchTerm={searchTerm}
        onHandleSetSearchTerm={handleSetSearchTerm}
        onHandleSubmitSearch={() => {
          searchApi(searchTerm)
        }}
      />
      <ScrollView style={{ marginVertical: 20, flex: 1 }}>
        <Text style={styles.title}>SearchScreen</Text>
        <Text style={styles.title}>
          # of Restaurants Found: {restaurants.length}
        </Text>
        {errorMessage ? handleDisplayErrorMessage(errorMessage) : null}
        <Divider />
        <View style={styles.yelpResults}>
          <YelpResults
            headerText={'Cost Effective'}
            restaurants={FilterByPrice(restaurants, '$')}
            style={styles.yelpResults}
            navigation={navigation}
          />
        </View>
        <Divider />
        <View style={styles.yelpResults}>
          <YelpResults
            headerText={'Bit Pricier'}
            restaurants={FilterByPrice(restaurants, '$$')}
            style={styles.yelpResults}
            navigation={navigation}
          />
        </View>
        <Divider />
        <View style={styles.yelpResults}>
          <YelpResults
            headerText={'High Dollar'}
            restaurants={FilterByPrice(restaurants, '$$$')}
            style={styles.yelpResults}
            navigation={navigation}
          />
        </View>
        <Divider />
      </ScrollView>
    </>
  )

  function handleDisplayErrorMessage (errorMessage) {
    setTimeout(() => {
      setErrorMessage('')
    }, 5000)
    return <Text>{errorMessage}</Text>
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    margin: 10
  },
  yelpResults: { marginVertical: 20 }
})

export default SearchScreen
