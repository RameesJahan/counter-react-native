import AsyncStorage from "@react-native-async-storage/async-storage"

export const setStorageData = async (key: string,data: any) => {
  try{
    const jsonData = JSON.stringify(data)
    await AsyncStorage.setItem(key, jsonData)
  }catch(e: any){
    console.log(e.message)
  }
}

export const getStorageData = async (key: string) => {
  try{
    const jsonData = await AsyncStorage.getItem(key);
    return jsonData !== null? JSON.parse(jsonData): null;
  }catch(e: any){
    console.log(e)
    return null
  }
}