import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Hero from "../../components/advertise/Hero";
import PersonalInformation from "../../components/advertise/PersonalInformation";
import CardHolderInformationSection from "../../components/advertise/CardHolderInformationSection";
import CardInformation from "../../components/advertise/CardInformation";

const advertise = () => {
  return (
    <ScrollView className="bg-white min-h-screen">
      <View className="mb-20">
        <Hero />
        <View className="mt-6 px-4">
          <PersonalInformation />
          <CardHolderInformationSection />
          <CardInformation />

          <View className="mt-[26px] mb-20">
            <Text className="text-primary font-poppins text-[18px] text-right font-semibold mt-2 uppercase">
              Sub total 1000$
            </Text>
            <Text className="text-primary font-poppins text-[18px] text-right font- mt-2  uppercase">
              Discount os
            </Text>
            <Text className="text-primary font-poppins text-[18px] text-right font-semibold mt-2  uppercase">
              total price 1000s
            </Text>
            <View className="mt-1 flex-row items-center justify-end">
              <TouchableOpacity className="bg-[#00ADEF] w-[168px] p-[10px] rounded-[4px]">
                <Text
                  className="font-poppins text-[18px] text-white text-center"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  Pay now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default advertise;
