import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

const onboard = () => {
  return (
    <ScrollView className="flex-1">
      <View className="flex-row justify-end mt-1 pr-5">
        <Link
          href={"login"}
          className="text-[#21212] text-[20px] font-medium font-uppercase"
          style={{
            marginTop: 25,
            marginBottom: -30,
            fontFamily: "Poppins-Medium",
          }}
        >
          Skip
        </Link>
      </View>
      <View className="mt-[30px]">
        <Image
          source={require("../../assets/images/onboard.png")}
          className="w-full"
          resizeMode="contain"
        />
      </View>
      <View className="px-5">
        <Text
          className="font-poppins text-[#000] text-center text-capitalize text-[28px]"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          DISCOVER, BUY & SELL WITH TRANZAXX
        </Text>
        <Text
          className="text-[#616161] leading-[29px] 
                text-center text-[16px] tracking-[.3px] mt-3"
          style={{ fontFamily: "Poppins-Regular", lineHeight: 29 }}
        >
          Explore a new way of buying and selling with video classified ads.
          Showcase your products with engaging videos, making it easier to
          connect with buyers.
        </Text>
        <View>
          <View
            className="flex-row justify-end  mb-8"
            style={{ marginTop: 25 }}
          >
            <TouchableOpacity
              className="flex-row items-center bg-[#00ADEF] rounded-lg"
              style={{ paddingHorizontal: 40, paddingVertical: 10 }}
              onPress={() => router.replace("/login")}
            >
              <Text
                className="text-[19px] font-poppins text-white text-capitalize"
                style={{ fontFamily: "Poppins-Bold", marginRight: 5 }}
              >
                Next
              </Text>
              <AntDesign
                name="arrowright"
                size={22}
                color="white"
                style={{ marginTop: -3 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default onboard;
