import { View, Text, TouchableOpacity } from "react-native"

const RegisterNow = () => {
    return (
        <View className="bg-primary mt-[50px] rounded-[24px] px-6 py-5 mb-10">
            <View className="flex items-center">
                <Text className="text-uppercase text-white font-poppins text-[36px] font-semibold">
                    Register now!
                </Text>
                <Text className="text-white font-poppins text-[13px] text-center">
                    Build your account and get started today! Start selling on
                    our platform completely FREE!
                </Text>
                <View className="flex-col justify-center mt-[14px]">
                    <TouchableOpacity className="px-4 py-2 bg-white rounded-[20px]">
                        <Text className="font-poppins text-[14px]">
                            Join Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegisterNow
