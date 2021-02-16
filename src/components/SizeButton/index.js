import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const SizeButton = ({ bgColor, color, children }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: bgColor || '#FFF' }]}>
      <Text style={[styles.text, { color: color || '#c9c' }]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 10
  },

  text: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default SizeButton;