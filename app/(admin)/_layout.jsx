import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function AdminLayout() {
  return (
    <Stack>
      <Stack.Screen name="admin-home" options={{ headerShown: false }} />
    </Stack>
  );
}