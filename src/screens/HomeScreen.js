import { View, Text, Button } from 'react-native'

const HomeScreen = props => {
  const handleOnPress = () => {
    props.navigation.navigate('Search')
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Go to Restaurant App' onPress={handleOnPress} />
    </View>
  )
}

export default HomeScreen
