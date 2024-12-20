import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { useSession } from "../../lib/cts";

const welcome = () => {
  return (
    <View className="px-4 flex-1 " style={{ marginTop: 50 }}>
      <View className="flex gap-12 mt-32">
        <Image
          source={require("../../assets/images/tranzazz.png")}
          className="w-[320px]"
          resizeMode="cover"
        />
        <View>
          <Text
            className="text-[#1A1A1A] text-[28px] text-center"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            WELCOME TO TRANZAXX!
          </Text>
          <Text className="text-center text-[#666] font-poppins mt-5 text-[15px] leading-[24px]">
            Experience the future of classified ads. With Tranzaxx, showcase
            your products confidently using videos, attract more buyers, and
            maximize your sales potential.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            className="bg-[#00ADEF] py-4 rounded-[12px]"
            onPress={() => router.push("/login")}
          >
            <Text
              className=" text-[18px] text-white text-center"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-4 rounded-[12px] mt-6"
            onPress={() => router.push("/register")}
          >
            <Text
              className=" text-[18px] text-center"
              style={{ color: "#00ADEF", fontFamily: "Poppins-SemiBold" }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <TouchableOpacity
        className="py-4 rounded-[12px] flex-row items-center gap-2 justify-center mt-6"
        // onPress={() => router.replace("onboard")}
        onPress={() => router.replace("admin-personalhome")}
      >
        <Text className="font-poppins text-[18px] text-[#333] font-medium text-center">
          Skip for now admin
        </Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity> */}

      <TouchableOpacity
        className="py-4 rounded-[12px] flex-row items-center gap-2 justify-center"
        style={{ marginTop: 120 }}
        onPress={() => router.replace("onboard")}
      >
        <Text className="font-poppins text-[18px] text-[#333] font-medium text-center">
          Skip for now
        </Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default welcome;
