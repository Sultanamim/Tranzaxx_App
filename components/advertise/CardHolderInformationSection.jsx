import { View, Text, Image, TextInput } from "react-native"
import {} from "react-native-web"

const CardHolderInformationSection = () => {
    return (
        <View className="mt-[26px]">
            <View className="flex-row items-center gap-[10px]">
                <Image
                    source={require("../../assets/images/advertise/cardinfo.png")}
                />
                <Text className="text-primary text-[22px] translate-y-1 font-semibold font-poppins uppercase">
                    Card Holder Information
                </Text>
            </View>

            <View className="mt-[10px] flex-row items-center justify-between">
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        First Name *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Card Holder's First Name"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        Last Name *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Card Holder's Last Name"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
            </View>

            {/* Address Information */}
            <View className="mt-[10px]">
                <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                    Address *
                </Text>
                <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                    <TextInput
                        placeholder="Card Holder's Address"
                        className="placeholder:text-[#999] font-poppins text-[12px]"
                    />
                </View>
            </View>

            {/* City and State */}
            <View className="mt-[10px] flex-row items-center justify-between">
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        City *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="City"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        State/Province *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="State / Province"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
            </View>

            {/* Postal Code and Country */}
            <View className="mt-[10px] flex-row items-center justify-between">
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        Postal Code *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Postal Code"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
                <View className="w-[48%]">
                    <Text className="text-[#061B3B] text-[12px] font-semibold font-poppins uppercase">
                        Country *
                    </Text>
                    <View className="px-[10px] py-[17px] mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white">
                        <TextInput
                            placeholder="Country"
                            className="placeholder:text-[#999] font-poppins text-[12px]"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardHolderInformationSection
