import { View, Text, ImageBackground } from "react-native"
import { pricingCategories } from "../../constant/data"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
const PricingCard = () => {
    return (
        <View>
            {pricingCategories.map((category) => (
                <View key={category.name} className="relative">
                    {category.recommended && (
                        <View className="absolute left-0 w-full flex-row justify-center items-center top-[28px] z-10">
                            <View className="w-full text-center flex-row items-center bg-white font-poppins max-w-[130px] border-[1px] border-[#BFBFBF]  rounded-[20px] px-[10px] py-[6px]">
                                <Text className="text-primary text-[14px]">
                                    Recommended
                                </Text>
                            </View>
                        </View>
                    )}
                    <View className="p-7 mt-[50px] rounded-xl bg-white border-t-[1px] border-white shadow-custom-blue">
                        <Text className="font-poppins text-[20px] text-primaryBlk text-center font-medium ">
                            {category.name}
                        </Text>
                        <Text className="text-lightColor text-[12px] text-center mt-[10px]">
                            {category.title}
                        </Text>
                        <View className="flex items-center justify-center">
                            <TouchableOpacity className="px-4 py-2 bg-primary rounded-[30px] mt-4">
                                <Text className="text-white font-poppins font-medium">
                                    Buy Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="mt-[50px]">
                            <Text className="text-lightColor text-[12px]">
                                Features
                            </Text>
                            <View className="mt-4">
                                {category.features.map((feature) => (
                                    <View
                                        key={feature}
                                        className="flex-row items-center gap-[10px] mt-[10px]"
                                    >
                                        <ImageBackground className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                                            <Image
                                                source={require("../../assets/images/pricing/tik.png")}
                                            />
                                        </ImageBackground>
                                        <Text className="text-lightColor text-[12px]">
                                            {feature}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default PricingCard
