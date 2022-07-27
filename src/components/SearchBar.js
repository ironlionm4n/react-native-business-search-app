import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, createRef } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const SearchBar = () => {
  const [textInput, setTextInput] = useState('Search')
  let searchInputRef = createRef()

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.content}>
          <MaterialCommunityIcons name='store-search' size={40} color='black' onPress={()=>{
            console.log("Search Icon pressed")
            searchInputRef.focus()
          }}/>
          <TextInput style={styles.text} placeholder='Search' ref={(ref) => {searchInputRef = ref}}></TextInput>
        </View>
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  background: {
    height: 50,
    width: '90%',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 15,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingTop: 3,
  },
  container: {
    marginTop: 10
  },
  text: { fontSize: 20, paddingLeft: 5, display: 'flex', flex: 1, borderColor: 'black', borderWidth: 2, height: 44}
})
