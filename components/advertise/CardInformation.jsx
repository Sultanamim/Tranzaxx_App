import { View, Text, TextInput, Image, Platform } from "react-native";

const CardInformation = () => {
  return (
    <View className="mt-[26px]">
      <View className="flex-row items-center gap-[10px]">
        <Image
          source={require("../../assets/images/advertise/cardinfos.png")}
        />
        <Text
          className="text-primary text-[22px] translate-y-1 uppercase"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          Card Information
        </Text>
      </View>

      <View className="mt-[10px] flex-row items-center justify-between">
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Card Number *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{
              paddingVertical: Platform.OS === "ios" ? 15 : 8,
              paddingHorizontal: 14,
            }}
          >
            <TextInput
              placeholder="Card Number"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Card Expiry Month *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{
              paddingVertical: Platform.OS === "ios" ? 15 : 8,
              paddingHorizontal: 14,
            }}
          >
            <TextInput
              placeholder="Expiry Month"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
      </View>

      <View className="mt-[10px] flex-row items-center justify-between">
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Card Expiry Year *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{
              paddingVertical: Platform.OS === "ios" ? 15 : 8,
              paddingHorizontal: 14,
            }}
          >
            <TextInput
              placeholder="Expiry Year"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Card CVV *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{
              paddingVertical: Platform.OS === "ios" ? 15 : 8,
              paddingHorizontal: 14,
            }}
          >
            <TextInput
              placeholder="CVV"
              className="placeholder:text-[#999] font-poppins text-[12px]"
              secureTextEntry
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardInformation;
