import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    return (
        <View>
            <SearchBar />        
            <Text style={styles.title} >SearchScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32
    }
})

export default SearchScreen