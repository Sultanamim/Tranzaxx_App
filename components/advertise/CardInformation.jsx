import { View, Text, TextInput, Image } from "react-native"

const CardInformation = () => {
    return (
        <View className="mt-[26px]">
            <View className="flex-row items-center gap-[10px]">
                <Image
                    source={require("../../assets/images/advertise/cardinfos.png")}
                />
                <Text className="text-primary text-[22px] translate-y-1 font-semibold font-poppins uppercase">
                    Card Information
                </Text>
            </View>

            <View className="mt-[10px] flex-row items-center justify-between">
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        Card Number *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Card Number"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        Card Expiry Month *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Expiry Month"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
            </View>

            <View className="mt-[10px] flex-row items-center justify-between">
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        Card Expiry Year *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Expiry Year"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        Card CVV *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="CVV"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                            secureTextEntry
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardInformation
