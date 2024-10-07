import Counter from "@/components/Counter";
import TitleText from "@/components/TitleText";
import { Colors } from "@/constants/Colors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <TitleText />
        <Counter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 12,
    alignItems: "center",
    gap: 8
  }
})
