import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack, usePathname } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useContext, useEffect, useState } from "react"
import "react-native-reanimated"
import "../global.css"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import Navbar from "../components/Header/Navbar"
import { AppProvider } from "../store/store"
import Menu from "./(auth)/humber"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [isShowMenu, setIsShowMenu] = useState(false)

    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        "Poppins-Regular": require("../assets/fonts/poppins/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
        "Poppins-Light": require("../assets/fonts/poppins/Poppins-Light.ttf"),
        BebasNeue: require("../assets/fonts/Bebas/BebasNeue-Regular.ttf"),
    })

    const pathname = usePathname()

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }
    return (
        <AppProvider>
            <View className="flex-1">
                <SafeAreaView className="flex-1">
                    <StatusBar style="light" backgroundColor="#010101" />

                    {pathname !== "/welcome" && pathname !== "/onboard" && (
                        <View>
                            <Navbar setIsShowMenu={setIsShowMenu} />
                            <View>
                                {isShowMenu && (
                                    <Menu setIsShowMenu={setIsShowMenu} />
                                )}
                            </View>
                        </View>
                    )}

                    <Stack>
                        <Stack.Screen
                            name="index"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="(root)"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="(auth)"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name="+not-found" />
                    </Stack>
                </SafeAreaView>
            </View>
        </AppProvider>
    )
}
