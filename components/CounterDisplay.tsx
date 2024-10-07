import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type CounterDisplayProps = {
  count: number
}

const CounterDisplay = ({count}: CounterDisplayProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{count}</Text>
      </View>
    </View>
  )
}

export default CounterDisplay

const styles = StyleSheet.create({
  container:{
    width: '100%',
    marginTop: 12
  },
  content: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.basicLightColor,
    borderRadius: 8,
    padding: 8,
    paddingVertical: 16,
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    fontWeight: '500'
  }
})