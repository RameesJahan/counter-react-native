import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { PropsWithChildren, useCallback, useMemo } from 'react'
import { Colors } from '@/constants/Colors'

type ButtonType = 'primary' | 'basic' | 'danger'

interface ButtonProps extends PropsWithChildren{
  type?: ButtonType,
  children?: string,
  onPress?: () => void,
  style?: StyleProp<ViewStyle>
}


const Button = ({type , children, style, onPress}: ButtonProps) => {
  
  const typeStyle = useMemo(() => {
    switch(type){
      case 'basic':
        return { backgroundColor: Colors.basicColor }
      case 'danger':
        return { backgroundColor: Colors.dangerColor }
      default: 
        return { backgroundColor: Colors.primaryColor }
    }
  },[type])

  const pressedTypeStyle = useMemo(() => {
    switch(type){
      case 'basic':
        return { backgroundColor: Colors.basicDarkColor }
      case 'danger':
        return { backgroundColor: Colors.dangerDarkColor }
      default: 
        return { backgroundColor: Colors.primaryDarkColor }
    }
  },[type])

  


  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button, style, typeStyle, pressed && pressedTypeStyle]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 20,
    fontWeight: '500',
    color: 'white'
  }
})