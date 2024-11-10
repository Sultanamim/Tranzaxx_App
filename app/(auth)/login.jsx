import { View, Text, ScrollView, TextInput } from "react-native"
import React, { useState } from "react"
import { Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import Btn from "../../components/shared/Btn"
import ForgetPassword from "../../components/ForgetPassword"
import { router } from "expo-router"

export default function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    const [isChecked, setIsChecked] = useState(false)

    const toggleCheckbox = () => {
        setIsChecked(!isChecked)
    }
    if (!isLogin) return <ForgetPassword setIsLogin={setIsLogin} />
    return (
        <ScrollView className="px-4">
            <View className="shadow-loginShadow rounded-[12px]  bg-white pb-6 mt-[50px]">
                <View className="pt-6 pl-6 pr-6">
                    <Text className="text-capitalize font-poppins  text-[#010101] font-semibold text-[24px] text-center uppercase">
                        Log in
                    </Text>
                    <View>
                        <View className="flex-row items-center mt-[50px]">
                            <Text className=" text-[#010101] uppercase font-poppins text-[16px] font-medium">
                                Login
                            </Text>
                            <Text className="uppercase font-poppins text-[14px]">
                                {" "}
                                (Email or phone)
                            </Text>
                        </View>
                        <View className="px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                            <View className="flex-row-reverse justify-end items-center gap-2 mt-[10px]">
                                <TextInput
                                    placeholder="EMAIL OR PHONE"
                                    className=" placeholder:text-[#BFBFBF] font-poppins text-[16px] "
                                />
                                <Image
                                    source={require("../../assets/images/form/men.png")}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <View className="flex-row items-center mt-5">
                            <Text className=" text-[#010101] uppercase font-poppins text-[16px] font-medium">
                                Password
                            </Text>
                        </View>
                        <View className="px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                            <View className="flex-row items-center gap-2 mt-[10px]s">
                                <Image
                                    source={require("../../assets/images/form/lock.png")}
                                    resizeMode="cover"
                                />
                                <TextInput
                                    placeholder="EMAIL OR PHONE"
                                    className=" placeholder:text-[#BFBFBF] font-poppins text-[16px] w-[80%]"
                                />
                                <Ionicons
                                    name="eye"
                                    size={24}
                                    color="#999999"
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        className="mt-4"
                        onPress={() => setIsLogin(false)}
                    >
                        <Text className="text-[14px] font-medium text-right text-[#999999]">
                            LOST YOUR PASSWORD?
                        </Text>
                    </TouchableOpacity>
                    <View className="mt-[38px] flex-row items-center justify-center">
                        <TouchableOpacity
                            onPress={toggleCheckbox}
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {isChecked && (
                                <View className="w-3 h-3 bg-[#000]" />
                            )}
                        </TouchableOpacity>
                        <Text className="text-[#010101] font-poppins">
                            KEEP ME LOGGED IN
                        </Text>
                    </View>
                </View>
                <View className="mt-5">
                    <Btn
                        title={"Login"}
                        handler={() => router.replace("(root)/home")}
                    />
                </View>
                <View className="mt-5 text-[#999] font-poppins flex-row items-center justify-center">
                    <Text>DO NOT HAVE AN ACCOUNT?</Text>
                    <TouchableOpacity
                        className=""
                        onPress={() => router.replace("/register")}
                    >
                        <Text className="text-[#010101] font-semibold text-[14px]">
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
