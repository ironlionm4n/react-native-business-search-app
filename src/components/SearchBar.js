import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, createRef } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const SearchBar = props => {
  const { searchTerm, onHandleSetSearchTerm, onHandleSubmitSearch } = props
  let searchInputRef = createRef()

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.content}>
          <MaterialCommunityIcons
            name='store-search'
            size={40}
            color='black'
            onPress={() => {
              searchInputRef.focus()
            }}
          />
          <TextInput
            style={styles.text}
            placeholder='Search'
            ref={ref => {
              searchInputRef = ref
            }}
            value={searchTerm}
            onChange={(event) => onHandleSetSearchTerm(event.nativeEvent.value)}
            autoCorrect={false}
            onEndEditing={onHandleSubmitSearch}
          />
          <MaterialIcons
            name='clear'
            size={24}
            color='black'
            onPress={() => onHandleSetSearchTerm('')}
            style={{paddingRight: 5}}
          />
        </View>
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  background: {
    height: 40,
    width: '90%',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingTop: 5
  },
  container: {
    marginTop: 6
  },
  text: {
    fontSize: 24,
    paddingLeft: 5,
    display: 'flex',
    flex: 1,
    height: 44,
  }
})
