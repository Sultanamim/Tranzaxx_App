import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function AdminLayout() {
  return (
    <Stack>

      {/* <Stack.Screen name="admin-home" options={{ headerShown: false }} /> */}

      <Stack.Screen name="admin-home" options={{ headerShown: false }} />

      <Stack.Screen name="my-ads" options={{ headerShown: false }} />

      <Stack.Screen name="featured-ads" options={{ headerShown: false }} />

      <Stack.Screen name="archived-ads" options={{ headerShown: false }} />

      <Stack.Screen name="favourite-ads" options={{ headerShown: false }} />

      <Stack.Screen name="pending-approval" options={{ headerShown: false }} />

      <Stack.Screen name="savedsearch" options={{ headerShown: false }} />


      {/* <Stack.Screen name="menu" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
