import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <View style={styles.buttonContent}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png' }} style={styles.img} />
              <Text>Login with google</Text>
            </View>
    </View>
  )
}

export default Home