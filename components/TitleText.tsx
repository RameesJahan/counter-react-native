import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const TitleText = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
    </View>
  )
}

export default TitleText

const styles = StyleSheet.create({
  container:{
    width: '100%',
    alignItems: 'flex-start'
  },
  text:{
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'left'
  }
})