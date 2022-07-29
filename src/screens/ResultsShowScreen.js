import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ route, navigation }) => {
  const [result, setResult] = useState(null)
  const { id } = route.params

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  const formatPhone = phone => {
    const countryCode = phone.slice(0, 1)
    const areaCode = phone.slice(1, 4)
    const telephoneNumber =
      phone.slice(4, 7) + '-' + phone.slice(7, phone.length)

    return (
      <View>
        <Text>
          Phone Number: {countryCode}-{areaCode}-{telephoneNumber}
        </Text>
      </View>
    )
  }

  const checkDayOfWeek = day => {
    switch (day) {
      case 0: {
        return 'Sunday'
      }
      case 1: {
        return 'Monday'
      }
      case 2: {
        return 'Tuesday'
      }
      case 3: {
        return 'Wednesday'
      }
      case 4: {
        return 'Thursday'
      }
      case 5: {
        return 'Friday'
      }
      case 6: {
        return 'Saturday'
      }
      default: {
        return 'Invalid Day Value'
      }
    }
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }
  console.log(result)
  const [address, cityStateZip] = result.location.display_address
  const phone = result.phone.replace('+', '')
  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text>{result.name}</Text>
        <Text>
          {address}, {cityStateZip} {result.location.country}
        </Text>
        {phone && formatPhone(phone)}
        {result.hours &&
          result.hours[0].open.map(day => {
            return (
              <View>
                <Text>{checkDayOfWeek(day.day)}</Text>
                <Text>Open: {day.start}</Text>
                <Text>Close: {day.end}</Text>
              </View>
            )
          })}
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />
        }}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
})
