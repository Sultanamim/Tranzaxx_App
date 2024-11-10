import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import Btn from "../shared/Btn"

export default function PersonalInformation() {
    return (
        <View>
            {/* Personal Information Section */}
            <View>
                <View className="flex-row items-center gap-[10px]">
                    <Image
                        source={require("../../assets/images/advertise/personalinfoicon.png")}
                    />
                    <Text className="text-primary text-[22px] translate-y-1 font-semibold font-poppins">
                        Personal Information
                    </Text>
                </View>

                <View className="mt-[10px] flex-row items-center justify-between">
                    <View className="w-[48%]">
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins capitalize">
                            Full Name *
                        </Text>
                        <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                            <TextInput
                                placeholder="Your Name"
                                className="placeholder:text-[#999] font-poppins text-[12px]"
                            />
                        </View>
                    </View>
                    <View className="w-[48%]">
                        <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins capitalize">
                            Email Address *
                        </Text>
                        <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                            <TextInput
                                placeholder="Email Address"
                                className="placeholder:text-[#999] font-poppins text-[12px]"
                            />
                        </View>
                    </View>
                </View>

                <View className="mt-[10px]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                        Full Address *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Type your address"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>

                <View className="mt-[10px]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins">
                        Discount *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="0"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>

            {/* Card Holder Information Section */}

            {/* Card Information Section */}
        </View>
    )
}
