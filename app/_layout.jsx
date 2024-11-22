import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useContext, useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navbar from "../components/Header/Navbar";
import { AppProvider } from "../store/store";
import Menu from "./(auth)/humber";
import AdminMenu from "./(admin)/humber";
import { SessionProvider } from "../lib/cts";
// import { SessionProvider } from "../lib/cts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Regular": require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("../assets/fonts/poppins/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    BebasNeue: require("../assets/fonts/Bebas/BebasNeue-Regular.ttf"),
  });

  const pathname = usePathname();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const isPathnameExit = [
    "/admin-home",
    "/archived-ads",
    "/favourite-ads",
    "/featured-ads",
    "/my-ads",
    "/pending-approval",
    "/savedsearch",
    "/admin-personalhome",
    "/transaction",
    "/message",
    "/messageid",
  ];

  return (
    <SessionProvider>
      <AppProvider>
        <View className="flex-1" style={{ backgroundColor: "#fff" }}>
          <SafeAreaView className="flex-1">
            <StatusBar style="light" backgroundColor="#010101" />

            {pathname !== "/welcome" && pathname !== "/onboard" && (
              <View>
                <Navbar setIsShowMenu={setIsShowMenu} />
                <View>
                  {!isPathnameExit.includes(pathname) && isShowMenu && (
                    <Menu setIsShowMenu={setIsShowMenu} />
                  )}

                  {isPathnameExit.includes(pathname) && isShowMenu && (
                    <AdminMenu setIsShowMenu={setIsShowMenu} />
                  )}
                </View>
              </View>
            )}

            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(root)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(admin)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </SafeAreaView>
        </View>
      </AppProvider>
    </SessionProvider>
  );
}
