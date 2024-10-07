import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CounterDisplay from './CounterDisplay'
import CounterTarget from './CounterTarget'
import CounterButton from './CounterButton'
import CounterActions from './CounterActions'
import Modal from './Modal'
import CounterTargetModal from './CounterTargetModal'
import useCounter from '@/hooks/useCounter'

type CounterProps = {}

const Counter = (props: CounterProps) => {
  const [showSetTarget, setShowSetTarget] = useState(false)

  const { count, limit, increment, decrement, reset, setLimit } = useCounter();

  const handleSave = (value: number) => {
    setLimit(value)
    setShowSetTarget(false)
  }

  return (
    <>
      <CounterDisplay count={count} />
      <CounterTarget onClick={() => setShowSetTarget(true)} target={limit} />
      <CounterButton disabled={(limit != 0 && count >= limit)} onClick={increment} />
      <CounterActions onClickMinus={decrement} onClickReset={reset} />
      <Modal visible={showSetTarget} onRequestClose={() => setShowSetTarget(false)}>
        <CounterTargetModal onSave={handleSave} onCancel={() => setShowSetTarget(false)} target={limit} />
      </Modal>
    </>
  )
}

export default Counter

const styles = StyleSheet.create({})