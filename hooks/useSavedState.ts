import { getStorageData, setStorageData } from "@/helpers/storage"
import { useEffect, useState } from "react"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"

type UpdateStateType<T> = T | ((val: T) => T)
type SetStateActionType<T> = (val:UpdateStateType<T>) => void

const useSavedState = <T>(key: string, initialValue: T | (() => T)): [T, SetStateActionType<T>] => {
  const [state, setState] = useState(initialValue)

  const setSavedState = (updateState: UpdateStateType<T>) => {
    setState(updateState)
    if(updateState instanceof Function){
      const data = updateState(state);
      setStorageData(key, data)
    }else{
      setStorageData(key, updateState)
    }
  }

  useEffect(() => {
    const loadData = async() => {
      const value = await getStorageData(key)
      if(value !== null){
        setState(value)
      }
    }

    loadData()
  }, [])
  

  return [state, setSavedState]
}

export default useSavedState