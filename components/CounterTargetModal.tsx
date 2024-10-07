import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from './ui/Button';
import { Colors } from '@/constants/Colors';

type CounterTargetModalProps = {
  target: number;
  onSave?: (value: number) => void
  onCancel?: () => void
}


const CounterTargetModal = ({ target: InitialTarget, onCancel, onSave }: CounterTargetModalProps) => {
  const [target, setTarget] = useState<string>(InitialTarget.toString())

  const handleSave = () => {
    onSave?.(target=== ''? 0 : parseInt(target))
  }


  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <Text style={styles.textHeader}>Set Target</Text>
        <Pressable onPress={onCancel}>
          <MaterialCommunityIcons name="close" size={32} color="black" />
        </Pressable>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons name="information-outline" size={14} color={Colors.basicColor} />
        <Text style={styles.textInfo}>Set to Zero for No Target</Text>
      </View>
      <TextInput placeholder='Enter Target' autoFocus keyboardType='numeric' style={styles.input} value={target} onChangeText={setTarget} />
      <View style={styles.row}>
        <Button onPress={() => setTarget('')} style={styles.button} type='basic'>Clear</Button>
        <Button onPress={handleSave} style={styles.button}>Save</Button>
      </View>
    </View>
  )
}

export default CounterTargetModal

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    padding: 16,
    gap: 8
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.basicLightColor
  },
  row: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center'
  },
  header: {
    justifyContent: 'space-between'
  },
  button: {
    flexGrow: 1
  },
  textInfo: {
    color: Colors.basicDarkColor,
    fontSize: 12,
    fontWeight: '500'
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '500'
  }
  
})