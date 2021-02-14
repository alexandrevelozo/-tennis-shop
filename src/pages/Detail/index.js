import React from 'react'
import { View, Text } from 'react-native'

const Detail = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'TÊNIS'
  })

  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}

export default Detail;