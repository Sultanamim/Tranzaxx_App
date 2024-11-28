import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import Btn from "../shared/Btn";

export default function PersonalInformation() {
  return (
    <View>
      {/* Personal Information Section */}
      <View>
        <View className="flex-row items-center gap-[10px]">
          <Image
            source={require("../../assets/images/advertise/personalinfoicon.png")}
          />
          <Text
            className="text-primary text-[22px] translate-y-1"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Personal Information
          </Text>
        </View>

        <View className="mt-[10px] flex-row items-center justify-between">
          <View className="w-[48%]">
            <Text
              className="text-[#061B3B] text-[12px] capitalize"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Full Name *
            </Text>
            <View
              className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
              style={{
                paddingVertical: Platform.OS === "ios" ? 15 : 8,
                paddingHorizontal: 14,
              }}
            >
              <TextInput
                placeholder="Your Name"
                className="placeholder:text-[#999] font-poppins text-[12px]"
              />
            </View>
          </View>
          <View className="w-[48%]">
            <Text
              className="text-[#061B3B] text-[12px] capitalize"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Email Address *
            </Text>
            <View
              className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
              style={{
                paddingVertical: Platform.OS === "ios" ? 15 : 8,
                paddingHorizontal: 14,
              }}
            >
              <TextInput
                placeholder="Email Address"
                className="placeholder:text-[#999] font-poppins text-[12px]"
              />
            </View>
          </View>
        </View>

        <View className="mt-[10px]">
          <Text
            className="text-[#061B3B] text-[12px] "
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Full Address *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{
              paddingVertical: Platform.OS === "ios" ? 15 : 8,
              paddingHorizontal: 14,
            }}
          >
            <TextInput
              placeholder="Type your address"
              className="placeholder:text-[#999] font-poppins text-[12px]"
            />
          </View>
        </View>

        <View className="mt-[10px] flex-row items-center justify-between">
          <View className="w-[50%]">
            <Text
              className="text-[#061B3B] text-[12px] uppercase"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Date *
            </Text>

            <TouchableOpacity className="flex flex-row items-center">
              <View
                className="bg-[#00AEF0]"
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 15,
                  borderRadius: 5,
                }}
              >
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: "Poppins-Regular" }}
                >
                  Show all date
                </Text>
              </View>
              <View
                className="mt-[6px] border-[1px] border-[#DEE2E6] bg-white"
                style={{
                  paddingVertical: Platform.OS === "ios" ? 14 : 4,
                  paddingHorizontal: 38,
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                  marginTop: -1,
                  marginLeft: -2,
                }}
              >
                <TextInput
                  placeholder=""
                  className="placeholder:text-[#999] font-poppins text-[12px]"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="w-50%]">
            <Text
              className="text-[#061B3B] text-[12px] uppercase"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Upload video.mp4 only *
            </Text>
            <TouchableOpacity className="flex flex-row items-center">
              <View
                className="bg-[#00AEF0]"
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 15,
                  borderRadius: 5,
                }}
              >
                <Text
                  className="text-white text-[12px]"
                  style={{ fontFamily: "Poppins-Regular" }}
                >
                  choose file
                </Text>
              </View>
              <View
                className="mt-[6px] border-[1px] border-[#DEE2E6] bg-white"
                style={{
                  paddingVertical: Platform.OS === "ios" ? 14 : 4,
                  paddingHorizontal: 38,
                  borderBottomRightRadius: 5,
                  borderTopRightRadius: 5,
                  marginTop: -1,
                  marginLeft: -2,
                }}
              >
                <TextInput
                  placeholder=""
                  className="placeholder:text-[#999] font-poppins text-[12px]"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-[10px]">
          <Text
            className="text-[#061B3B] text-[12px]"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Discount *
          </Text>
          <View
            className="mt-[6px] border-[1px] border-[#DEE2E6] rounded-[5px] bg-white"
            style={{
              paddingVertical: Platform.OS === "ios" ? 15 : 8,
              paddingHorizontal: 14,
            }}
          >
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
  );
}
