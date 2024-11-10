import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native"
import React, { useState } from "react"
import Btn from "../../components/shared/Btn"
import { Ionicons } from "@expo/vector-icons"
import { registerInputData } from "../../constant/data"
import { router } from "expo-router"

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [hidePhoneNumber, setHidePhoneNumber] = useState(false)
    const [receiveMarketingEmail, setReceiveMarketingEmail] = useState(false)
    // const toggleCheckbox = () => {}

    return (
        <ScrollView className="px-4">
            <View className="shadow-loginShadow rounded-[12px]  bg-white pb-6 mt-[50px]">
                <View className="pt-6 pl-6 pr-6">
                    <Text className="text-capitalize font-poppins  text-[#010101] font-semibold text-[16px] text-center uppercase">
                        CREATE YOUR ACCOUNT, IT'S 100% FREE{" "}
                    </Text>
                    <View className="flex gap-5 py-[] mt-[50px]">
                        {registerInputData.map((data, index) => {
                            return (
                                <View key={index}>
                                    <Text className="uppercase text-[#010101] font-poppins text-[16px] font-medium">
                                        {data.name}
                                    </Text>
                                    <View className="px-[14px] py-[10px] border-[1px] border-[#BFBFBF] mt-[10px] rounded-[4px]">
                                        <View className=" flex-row items-center gap-2 ">
                                            <Image source={data.firstIcon} />
                                            <TextInput
                                                placeholder={data.placeholder}
                                                className="text-[#BFBFBF] text-[16px] font-poppins min-w-[80%]"
                                            />
                                            {data.thirdIcon !== "" && (
                                                <Image
                                                    source={data.thirdIcon}
                                                />
                                            )}
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View className="px-4">
                    <View className="mt-4 flex-row items-center">
                        <TouchableOpacity
                            onPress={() => setAgree(!agree)}
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {agree && <View className="w-3 h-3 bg-[#000]" />}
                        </TouchableOpacity>
                        <View className="flex-row items-center">
                            <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                                I HAVE READ AND AGREE TO THE
                            </Text>
                            <Text className="text-primary font-poppins text-[12px] uppercase">
                                {" "}
                                TERMS & CONDITIONS
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="px-4">
                    <View className="mt-3 flex-row items-center">
                        <TouchableOpacity
                            onPress={() => setHidePhoneNumber(!hidePhoneNumber)}
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {agree && <View className="w-3 h-3 bg-[#000]" />}
                        </TouchableOpacity>
                        <View className="flex-row items-center">
                            <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                                HIDE THE PHONE NUMBER ON THE ADS.
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="px-4">
                    <View className="mt-3 flex-row items-center">
                        <TouchableOpacity
                            onPress={() =>
                                setReceiveMarketingEmail(!receiveMarketingEmail)
                            }
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {agree && <View className="w-3 h-3 bg-[#000]" />}
                        </TouchableOpacity>
                        <View className="flex-row items-center">
                            <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                                I ACCEPT TO RECEIVE MARKETING EMAILS{" "}
                            </Text>
                        </View>
                    </View>
                    <View className="mt-5">
                        <View className="">
                            <Btn
                                title={"Register"}
                                handler={() => router.push("(root)/home")}
                            />
                        </View>
                        <View className="mt-5 text-[#999] font-poppins flex-row items-center justify-center">
                            <Text>Already Have Account?</Text>
                            <TouchableOpacity
                                className=""
                                onPress={() => router.replace("/login")}
                            >
                                <Text className="text-[#010101] font-semibold text-[14px]">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register
