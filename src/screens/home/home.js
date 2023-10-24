import { Image, Dimensions, View, Text, StyleSheet } from 'react-native';
import React from 'react'
const image = { uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' };
const Home = () => {
  return (
    <View style={style.body}>
      <View style = {{ }}>
        <Image source={image} resizeMode="cover" style={style.image}>
        </Image>
      </View>
      <Text style={style.text}>Touch to screens</Text>
    </View >
  )
}

export default Home
const style = StyleSheet.create({
  body: {
    flex:1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    width: Dimensions.get('screen').width,
  },
  text: {
    width: 350,
    height: 50,
    position: 'absolute',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 500,
    justifyContent: 'center',
  }
});
