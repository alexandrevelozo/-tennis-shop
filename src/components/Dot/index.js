import React from 'react'

import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const Dot = ({ color }) => {
  return (
    <TouchableOpacity
      style={
        [styles.container,
        { backgroundColor: color }
        ]
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.050,
    height: Dimensions.get('window').width * 0.050,
    borderRadius: Dimensions.get('window').width * 0.050 / 2,
    marginHorizontal: '2.5%',
    elevation: 5
  }
})

export default Dot;