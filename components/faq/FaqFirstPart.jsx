import { Entypo } from "@expo/vector-icons";
import { ImageBackground, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import BoostBrand from "../shared/BoostBrand";
import ArrowRightImg from "../../assets/images/arrow-right.png";
import { Image } from "react-native";

export default function FaqFirstPart() {
  return (
    <View>
      <View>
        <View
          className="flex-row flex-wrap justify-center items-center"
          // style={{ marginHorizontal: 10 }}
        >
          <Text className="uppercase text-[36px] font-BebasNeue">Got</Text>
          <ImageBackground
            source={require("../../assets/images/questionbg.png")}
            className="p-1 min-w-[143px]"
          >
            <Text className="uppercase text-[36px] font-BebasNeue text-[#00AEF0] text-center">
              question?{" "}
            </Text>
          </ImageBackground>

          <Text className="text-[36px] font-BebasNeue">We've got </Text>
          <Text className="text-[36px] font-BebasNeue uppercase text-center">
            {" "}
            answers!
          </Text>
        </View>
        <Text
          className="text-[#565656] text-center text-[13px] font-poppins mt-[10px]"
          style={{ marginHorizontal: 20, fontFamily: "Poppins-Regular" }}
        >
          Find answers to the most common questions about our platform, pricing
          plans, and services. Whether you're curious about the features or
          looking for detailed support, our FAQs have you covered.
        </Text>
      </View>
      <View>
        <View className="flex-row items-center justify-center mt-[30px]">
          <TouchableOpacity
            className="bg-primary rounded-lg flex-row items-center gap-1 "
            style={{ paddingHorizontal: 20, paddingVertical: 10 }}
          >
            <Text
              className="text-white font-poppins text-[16px] font-medium"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Explore FAQs{" "}
            </Text>
            {/* <Entypo name="arrow-long-right" size={16} color="white" /> */}
            <Image source={ArrowRightImg} className="w-[20px] h-[20px]" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex items-center justify-center mt-10">
        <BoostBrand text={"FAQS"} textClass="text-primary" mt={1} />
      </View>
      <View>
        <Text
          className="text-center text-primaryBlk text-[22px]"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          Frequently asked questions
        </Text>
        <Text
          className="text-center mt-[10px] text-[12px] text-[#061B3B]"
          style={{ fontFamily: "Poppins-Regular" }}
        >
          If you have any question please contact us.
        </Text>
      </View>
    </View>
  );
}
