import { View, Text, Button } from 'react-native'

const HomeScreen = (props) => {

    const handleOnPress = () => {
        console.log(props.navigation.navigate)
        props.navigation.navigate("Search")
    }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to SearchScreen" onPress={handleOnPress}/>
    </View>
  )
}

export default HomeScreen
