import { Stack } from "expo-router"

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="onboard" options={{ headerShown: false }} />
            {/* <Stack.Screen name="humber" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="+not-found" /> */}
        </Stack>
    )
}
