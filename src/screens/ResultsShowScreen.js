import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'
import * as Linking from 'expo-linking'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null)
  const { id } = route.params

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  const formatTime = time => {

    if(time === '0000') return 'Midnight'

    const suffix = +time >= 1200 ? 'PM' : 'AM'
    const colonPosition = +time.length - 2
    if (time < 1300) {
      const returnString = time.toString()
      return (
        returnString.slice(0, colonPosition) +
        ':' +
        returnString.slice(colonPosition, returnString.length) +
        ' ' +
        suffix
      )
    } else if (time >= 1300) {
      let returnString = (+time - 1200).toString()
      if (+returnString < 1000) {
        returnString = `0${returnString}`
      }
      return (
        returnString.slice(0, colonPosition) +
        ':' +
        returnString.slice(colonPosition, returnString.length) +
        ' ' +
        suffix
      )
    }
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
    <ScrollView style={{ display: 'flex', flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>{result.name}</Text>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.details}>
            {address}, {cityStateZip} {result.location.country}
          </Text>
          {phone && formatPhone(phone)}
          <Text style={styles.details}>
            {result.rating} Stars, {result.review_count} Reviews
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (Linking.canOpenURL(result.url)) {
              Linking.openURL(result.url)
            }
          }}
          style={{
            backgroundColor: 'gray',
            width: 150,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10
          }}
        >
          <Text style={styles.details}>Visit Website</Text>
        </TouchableOpacity>
        {result.hours &&
          result.hours[0].open.map(day => {
            return (
              <View key={day.day}>
                <Text style={styles.hoursTitle}>{checkDayOfWeek(day.day)}</Text>
                <Text style={styles.details}>
                  Open: {formatTime(day.start)}
                </Text>
                <Text style={styles.details}>Close: {formatTime(day.end)}</Text>
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
          return (<View style={styles.imageContainer}><Image source={{ uri: item }} style={styles.image} /></View>)
        }}
      />
    </ScrollView>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    

  },
  imageContainer: {
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 50,
    marginBottom: 150,
    marginHorizontal: 10,
    padding: 2,
    backgroundColor: 'gray',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: .75,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    fontSize: 16,
    paddingVertical: 5,
  },
  hoursTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
})
