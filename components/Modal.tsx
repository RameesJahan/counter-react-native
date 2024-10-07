import { ModalProps as RNModalProps, Modal as RNModal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ModalProps = RNModalProps

const Modal = ({ children, ...props }: ModalProps) => {
  return (
    <RNModal {...props} transparent animationType='fade' >
      <View  style={styles.backDrop}>
        <View style={styles.container}>
          {children}
        </View>
      </View>
    </RNModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  backDrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#0000008e',
  },
  container: {
    width: '100%',
    height: 'auto'
  }
})