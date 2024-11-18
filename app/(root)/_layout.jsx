import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pricing" />
      <Stack.Screen name="faq" />
      <Stack.Screen name="contact" />
      <Stack.Screen name="country" />
      <Stack.Screen name="advertise" />
      {/* <Stack.Screen name="exceptionelle" /> */}
      <Stack.Screen name="home" />
      <Stack.Screen name="ads" />
    </Stack>
  );
}
