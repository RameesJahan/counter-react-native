import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type CounterButtonProps = {
  disabled?: boolean 
  onClick?: () => void
}

const CounterButton = ({ disabled = false, onClick }: CounterButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable disabled={disabled} style={({pressed}) => [styles.button, pressed && styles.pressedButton]} onPress={onClick}>
      </Pressable>
    </View>
  )
}

export default CounterButton

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    width: '100%',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    width: '100%',
    aspectRatio: 1/1,
    backgroundColor: Colors.primaryColor,
    borderRadius: 999999999,
    elevation: 12,
    shadowColor: '#000000',
  },
  pressedButton: {
    backgroundColor: Colors.primaryDarkColor
  }
})