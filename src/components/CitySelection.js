import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import cities from '../api/cities'

const CitySelection = ({ handleSetCity }) => {
  const [toggleScroll, setToggleScroll] = useState(false)
  const [newCityName, setNewCityName] = useState('atlanta')
  const citiesList = cities

  useEffect(() => {
    handleSetCity(newCityName)
  }, [newCityName])

  // must return the map - as well as each component in the map execution
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          borderColor: 'black',
          borderWidth: 2,
          marginVertical: 15,
          shadowColor: 'rgba(0,0,0,1)',
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 1
        }}
        onPress={() => setToggleScroll(!toggleScroll)}
      >
        <Text style={{ fontSize: 22 }}>Select City</Text>
      </TouchableOpacity>
      {toggleScroll && (
        <ScrollView>
          {citiesList.map(city => {
            const newCity = city.name
            return (
              <TouchableOpacity
                key={city.name}
                style={{
                  backgroundColor: 'rgba(90,100, 250, 0.9)',
                  padding: 15,
                  margin: 5,
                  marginVertical: 10,
                  borderColor: 'black',
                  borderWidth: 2,
                  borderRadius: 15,
                  shadowColor: 'rgba(0,0,0,1)',
                  shadowOffset: { height: 1, width: 2 },
                  shadowOpacity: 1
                }}
                onPress={() => {
                  setNewCityName(newCity)
                  setToggleScroll(!toggleScroll)
                }}
              >
                <Text
                  style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}
                >
                  City{' '}
                  {newCity.slice(0, 1).toUpperCase() +
                    newCity.slice(1, newCity.length)}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      )}
    </View>
  )
}

export default CitySelection

const styles = StyleSheet.create({})
