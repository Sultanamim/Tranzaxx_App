import { AntDesign } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import { Image, ScrollView, TouchableOpacity } from "react-native"
import { View, Text } from "react-native"

const onboard = () => {
    return (
        <ScrollView className="flex-1">
            <View className="flex-row justify-end mt-1 pr-5">
                <Link
                    href={"login"}
                    className="text-[#21212] text-[20px] font-medium font-uppercase"
                >
                    Skip
                </Link>
            </View>
            <View className="mt-[30px]">
                <Image
                    source={require("../../assets/images/onboard.png")}
                    className="w-full"
                    resizeMode="cover"
                />
            </View>
            <View className="px-5">
                <Text className="font-poppins text-[#000] text-center text-capitalize text-[28px] font-semibold">
                    DISCOVER, BUY & SELL WITH TRANZAXX
                </Text>
                <Text
                    className="font-poppins text-[#616161] leading-[29px] 
                text-center text-[16px] tracking-[.3px] mt-3"
                >
                    Explore a new way of buying and selling with video
                    classified ads. Showcase your products with engaging videos,
                    making it easier to connect with buyers.
                </Text>
                <View>
                    <View className="flex-row justify-end mt-10 mb-8">
                        <TouchableOpacity
                            className="flex-row items-center bg-[#00ADEF] py-[3px] px-[30px] rounded-lg"
                            onPress={() => router.replace("/login")}
                        >
                            <Text className="text-[20px] font-poppins text-white font-bold text-capitalize">
                                Next
                            </Text>
                            <AntDesign
                                name="arrowright"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default onboard
