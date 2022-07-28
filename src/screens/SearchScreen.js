import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useGetBusinesses from '../hooks/useGetBusinesses'
import YelpResults from '../components/YelpResults'
import FilterByPrice from '../utils/FilterByPrice'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchApi, restaurants, errorMessage] = useGetBusinesses()
  
  const handleSetSearchTerm = newTerm => {
    setSearchTerm(newTerm)
  }

  return (
    <ScrollView>
      <SearchBar
        searchTerm={searchTerm}
        onHandleSetSearchTerm={handleSetSearchTerm}
        onHandleSubmitSearch={()=>searchApi(searchTerm)}
      />
      <Text style={styles.title}>SearchScreen</Text>
      <Text># of Restaurants Found: {restaurants.length}</Text>
      {errorMessage ? handleDisplayErrorMessage(errorMessage) : null}
      <YelpResults headerText={"Cost Effective"} restaurants={FilterByPrice(restaurants,'$')}/>
      <YelpResults headerText={"Bit Pricier"} restaurants={FilterByPrice(restaurants,'$$')}/>
      <YelpResults headerText={"High Dollar"} restaurants={FilterByPrice(restaurants,'$$$')}/>
    </ScrollView>
  )

  function handleDisplayErrorMessage(errorMessage) {
    setTimeout(() => {
      setErrorMessage('')
    }, 5000)
    return <Text>{errorMessage}</Text>
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32
  }
})

export default SearchScreen
