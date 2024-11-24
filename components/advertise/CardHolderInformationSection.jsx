import { View, Text, Image, TextInput } from "react-native";
import {} from "react-native-web";

const CardHolderInformationSection = () => {
  return (
    <View className="mt-[26px]">
      <View className="flex-row items-center gap-[10px]">
        <Image source={require("../../assets/images/advertise/cardinfo.png")} />
        <Text
          className="text-primary text-[22px] translate-y-1 uppercase"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          Card Holder Information
        </Text>
      </View>

      <View className="mt-[10px] flex-row items-center justify-between">
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            First Name *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{ paddingVertical: 3, paddingHorizontal: 10 }}
          >
            <TextInput
              placeholder="Card Holder's First Name"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Last Name *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{ paddingVertical: 3, paddingHorizontal: 10 }}
          >
            <TextInput
              placeholder="Card Holder's Last Name"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
      </View>

      {/* Address Information */}
      <View className="mt-[10px]">
        <Text
          className="text-[#061B3B] text-[12px] uppercase"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          Address *
        </Text>
        <View
          className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
          style={{ paddingVertical: 8, paddingHorizontal: 14 }}
        >
          <TextInput
            placeholder="Card Holder's Address"
            className="placeholder:text-[#999] font-poppins text-[12px]"
          />
        </View>
      </View>

      {/* City and State */}
      <View className="mt-[10px] flex-row items-center justify-between">
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            City *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{ paddingVertical: 8, paddingHorizontal: 14 }}
          >
            <TextInput
              placeholder="City"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            State/Province *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{ paddingVertical: 8, paddingHorizontal: 14 }}
          >
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
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Postal Code *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{ paddingVertical: 8, paddingHorizontal: 14 }}
          >
            <TextInput
              placeholder="Postal Code"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
        <View className="w-[48%]">
          <Text
            className="text-[#061B3B] text-[12px] uppercase"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Country *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{ paddingVertical: 8, paddingHorizontal: 14 }}
          >
            <TextInput
              placeholder="Country"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardHolderInformationSection;
