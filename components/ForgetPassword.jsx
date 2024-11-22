import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native"
import Btn from "./shared/Btn"
import { useState } from "react"

const ForgetPassword = ({ setIsLogin }) => {
    const [fromdata, setFromdata] = useState("")
    const goLogin = () => {
        setIsLogin(true)
    }

    const handlerPass = async () => {
        try {

            const response = await fetch(`https://tranzaxx.com/api/auth/password/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: fromdata,
                })
            })

            if (!response.ok) {
                alert('Something went wrong')
            }

            const data = await response.json();
            if (!data.success) {
                if (data.message === "passwords.throttled") {
                    alert('Please wait a few seconds then try again')
                    return;
                }
                alert(`${data.message}`)
            }
            if (data.success) {
                alert('Check your email for password reset link')
            }

        } catch (e) {
            console.log(e)
        }

    }
    return (
        <ScrollView className="px-4">
            <View className="shadow-loginShadow rounded-[12px]  bg-white pb-6 mt-[50px]">
                <View className="pt-6 pl-6 pr-6">
                    <Text className="text-capitalize font-poppins  text-[#010101] font-semibold text-[24px] text-center uppercase">
                        Forgot Password{" "}
                    </Text>
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
                                value={fromdata}
                                onChangeText={(e) => setFromdata(e)}
                            />
                            <Image
                                source={require("../assets/images/form/men.png")}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View className="flex-1 gap-5 mt-5">
                        <Btn title={"submit"} handler={handlerPass} />
                        <Btn title={"Back To Login"} handler={goLogin} />
                    </View>
                </View>
                <View className="mt-5">{/* <Btn title={Login} /> */}</View>
                <View className="mt-5 text-[#999] font-poppins flex-row items-center justify-center">
                    <Text>DO NOT HAVE AN ACCOUNT?</Text>
                    <TouchableOpacity className="">
                        <Text className="text-[#010101] font-semibold text-[14px]">
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ForgetPassword
