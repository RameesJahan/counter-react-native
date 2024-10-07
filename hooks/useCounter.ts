import { useCallback, useEffect, useState } from "react"
import useSavedState from "./useSavedState"
import * as Haptics from 'expo-haptics';
import { Audio } from "expo-av";

const useCounter = () => {
  const [count, setCount] = useSavedState("COUNTER_COUNT",0);
  const [limit, setLimit] = useSavedState("COUNTER_LIMIT",0);
  const [beepSound, setBeepSound] = useState<Audio.Sound>()

  const increment = () => {
    if(limit != 0 && count >= limit) return
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    
    setCount(prev => prev > 0? prev - 1 : 0)
  }

  const reset = () => {
    setCount(0)
  }

  const playSound = useCallback(
    () => {
      beepSound?.playFromPositionAsync(0)
    },
    [beepSound],
  )
  

  useEffect(() => {
    const loadSound = async() => {
      const { sound } = await Audio.Sound.createAsync(require('@/assets/audio/beep-3.mp3'))
      setBeepSound(sound)
    }
    loadSound()

    return beepSound
    ? () => {
        beepSound.unloadAsync();
      }
    : undefined;
  }, [])
  

  useEffect(() => {
    if(limit > 0){
      if(count == limit){
        console.log("finished");
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        playSound()
      }
    }
  }, [count])
  
  return { count, limit, increment, decrement, reset, setLimit }
}

export default useCounter