import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import { TouchableOpacity } from "react-native"
import { View, Text, Image } from "react-native"

const welcome = () => {
    return (
        <View className="px-4 flex-1 justify-center pb-20">
            <View className="flex gap-12 mt-32">
                <Image
                    source={require("../../assets/images/tranzazz.png")}
                    className="w-[320px]"
                    resizeMode="cover"
                />
                <View>
                    <Text className="text-[#1A1A1A] font-semibold text-[28px] font-poppins text-center">
                        WELCOME TO TRANZAXX!
                    </Text>
                    <Text className="text-center text-[#666] font-poppins mt-5 text-[15px] leading-[24px]">
                        Experience the future of classified ads. With Tranzaxx,
                        showcase your products confidently using videos, attract
                        more buyers, and maximize your sales potential.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        className="bg-[#00ADEF] py-4 rounded-[12px]"
                        onPress={() => router.push("/login")}
                    >
                        <Text className="font-poppins text-[18px] text-white font-semibold text-center">
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="py-4 rounded-[12px] mt-6"
                        onPress={() => router.push("/register")}
                    >
                        <Text className="font-poppins text-[18px] text-primary font-semibold text-center">
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                className="py-4 rounded-[12px] flex-row items-center gap-2 justify-center mt-6"
                onPress={() => router.replace("onboard")}
            >
                <Text className="font-poppins text-[18px] text-[#333] font-medium text-center">
                    Skip for now
                </Text>
                <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default welcome
