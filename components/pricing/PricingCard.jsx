import { View, Text, ImageBackground } from "react-native";
import { pricingCategories } from "../../constant/data";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
const PricingCard = ({ packages }) => {
  // console.log(packages);
  return (
    <View>
      {packages?.map((pack) => {
        const descriptionParts = pack.description.split("\r\n");
        return (
          <View key={pack.name} className="relative">
            {pack.recommended === "1" && (
              <View className="absolute left-0 w-full flex-row justify-center items-center top-[28px] z-10">
                <View className="w-full text-center flex-row items-center bg-white font-poppins max-w-[130px] border-[1px] border-[#BFBFBF]  rounded-[20px] px-[10px] py-[6px]">
                  <Text className="text-primary text-[14px]">Recommended</Text>
                </View>
              </View>
            )}
            <View className="p-7 mt-[50px] rounded-xl bg-white border-t-[1px] border-white shadow-custom-blue">
              <Text
                className="font-poppins text-[20px] text-[#010101] text-center font-medium "
                style={{ fontFamily: "Poppins-Medium" }}
              >
                {pack.name}
              </Text>
              <Text
                className="text-[#010101] text-[44px] text-center mt-[10px]"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                {pack.price} $
              </Text>
              <Text
                className="text-lightColor text-[12px] text-center"
                style={{ marginTop: 5, marginBottom: 10 }}
              >
                {pack.video_limit} seconds video
              </Text>
              <View className="flex items-center justify-center">
                <TouchableOpacity className="px-4 py-2 bg-primary rounded-[30px] mt-4">
                  <Text className="text-white font-poppins font-medium">
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="mt-[50px]">
                <Text className="text-lightColor text-[12px]">Features</Text>
                <View className="mt-4">
                  <View className="flex-row items-center gap-[10px] mt-[10px]">
                    <ImageBackground className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Image
                        source={require("../../assets/images/pricing/tik.png")}
                      />
                    </ImageBackground>
                    <Text className="text-lightColor text-[12px]">
                      {pack.pictures_limit} Custom Thumbnail
                    </Text>
                  </View>

                  <View className="flex-row items-center gap-[10px] mt-[10px]">
                    <ImageBackground className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Image
                        source={require("../../assets/images/pricing/tik.png")}
                      />
                    </ImageBackground>
                    <Text className="text-lightColor text-[12px]">
                      Video up to {pack.video_limit} seconds allowed
                    </Text>
                  </View>

                  <View className="flex-row items-center gap-[10px] mt-[10px]">
                    <ImageBackground className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Image
                        source={require("../../assets/images/pricing/tik.png")}
                      />
                    </ImageBackground>
                    <Text className="text-lightColor text-[12px]">
                      Up to {pack.views} views for video
                    </Text>
                  </View>

                  {descriptionParts.map((part, index) => (
                    <View className="flex-row items-center gap-[10px] mt-[10px]">
                      <ImageBackground className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <Image
                          source={require("../../assets/images/pricing/tik.png")}
                        />
                      </ImageBackground>
                      <Text className="text-lightColor text-[12px]">
                        {part}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default PricingCard;
