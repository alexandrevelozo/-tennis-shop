import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Shoes from '../../components/Shoes'

const Footer = () => {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ marginBottom: '2%' }}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/1.png')} cost="110,90">
              Nike Air Max Dia
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/5.png')} cost="360,90">
              Nike Epic React Flyknit 2
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/3.png')} cost="890,90">
              Nike Squidward Tentacles
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%'
  }
})

export default Footer;