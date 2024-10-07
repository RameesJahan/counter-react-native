import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './ui/Button'

type CounterActionsProps = {
  onClickMinus?: ()=> void
  onClickReset?: ()=> void
}

const CounterActions = ({onClickMinus, onClickReset}: CounterActionsProps) => {
  return (
    <View style={styles.container}>
      <Button onPress={onClickMinus} type='basic' style={styles.buttonMinus}>-1</Button>
      <Button onPress={onClickReset} type='danger' style={styles.buttonReset}>Reset</Button>
    </View>
  )
}

export default CounterActions

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12
  },
  buttonMinus: {
    width: '20%'
  },
  buttonReset: {
    flexGrow: 1
  }
})