import { Stack } from "expo-router"

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="pricing" options={{ headerShown: false }} />
            <Stack.Screen name="faq" options={{ headerShown: false }} />
            <Stack.Screen name="contact" options={{ headerShown: false }} />
            <Stack.Screen name="ads" options={{ headerShown: false }} />
            <Stack.Screen name="country" options={{ headerShown: false }} />
            <Stack.Screen name="advertise" options={{ headerShown: false }} />
        </Stack>
    )
}
