import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useGetBusinesses from '../hooks/useGetBusinesses'
import YelpResults from '../components/YelpResults'
import FilterByPrice from '../utils/FilterByPrice'
import Divider from '../components/Divider'
import CitySelection from '../components/CitySelection'

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('pizza')
  const [newCity, setCity] = useState('atlanta')
  const [searchApi, restaurants, errorMessage] = useGetBusinesses()

  console.log('Restaurants', restaurants)
  const handleSetSearchTerm = newTerm => {
    console.log('newTerm', newTerm)
    setSearchTerm(newTerm)
  }

  const handleSetCity = newCity => {
    setCity(newCity)
  }
  useEffect(() => {
    searchApi(searchTerm, newCity)
  }, [searchTerm, newCity])

  return (
    <>
      <CitySelection handleSetCity={handleSetCity} />
      <SearchBar
        searchTerm={searchTerm}
        onHandleSetSearchTerm={handleSetSearchTerm}
        onHandleSubmitSearch={handleSetSearchTerm}
      />
      <ScrollView style={{ marginVertical: 20, flex: 1 }}>
        <Text style={styles.title}>
          # of Restaurants Found: {restaurants.length}
        </Text>
        <Text style={styles.title}>
          Searching {newCity.slice(0, 1).toUpperCase() +
                    newCity.slice(1, newCity.length)}
        </Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
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
    return <Text>{errorMessage}</Text>
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    margin: 10
  },
  yelpResults: {
    marginVertical: 20,
    marginHorizontal: 20,

  }
})

export default SearchScreen
