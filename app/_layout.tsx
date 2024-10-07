import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarStyle: 'light', statusBarColor: Colors.primaryColor }}>
      <Stack.Screen  name="index" />
    </Stack>
  );
}
