import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';

type CounterTargetProps = {
  target: number,
  onClick?: () => void
}

const CounterTarget = ({target, onClick}: CounterTargetProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onClick}> 
        <View style={styles.content}>
          <Text style={styles.textTarget}>{"Target: " + target}</Text>
          <MaterialCommunityIcons name="chevron-down" size={24} color={Colors.basicDarkColor} />
        </View>
      </Pressable>
      <View style={styles.content}>
        <MaterialCommunityIcons name="information-outline" size={12} color={Colors.basicColor} />
        <Text style={styles.textInfo}>Zero means No Target</Text>
      </View>
    </View>
  )
}

export default CounterTarget

const styles = StyleSheet.create({
  container:{
    width: '100%',
    gap: 4
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  textTarget: {
    color: Colors.basicDarkColor,
    fontSize: 20,
    fontWeight: '500'

  },
  textInfo: {
    color: Colors.basicColor,
    fontSize: 12,
    fontWeight: '500'
  }

})