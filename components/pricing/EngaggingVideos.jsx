import { View, Text, ImageBackground } from "react-native"
import BoostBrand from "../shared/BoostBrand"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const EngaggingVideos = () => {
    return (
        <View className="flex-row justify-center">
            <View className="max-w-[350px] flex gap-[30px]">
                <View className="max-w-[326px] flex items-center justify-center">
                    <BoostBrand />
                    <View className="flex-row flex-wrap items-center justify-center gap-y-[3px] mt-[30px]">
                        <ImageBackground
                            source={require("../../assets/images/questionbg.png")}
                            className="flex-row items-center justify-center"
                        >
                            <Text className="uppercase font-BebasNeue text-[#00AEF0] text-[20px] tracking-[.66px]">
                                showcase
                            </Text>
                        </ImageBackground>
                        <Text className="text-wrap text-[#010101] font-BebasNeue text-[21px]">
                            YOUR PRODUCTS AND SERVICES WITH
                        </Text>
                        <Text className="font-BebasNeue text-[21px]">
                            CONFIDENCE & ADVERTISE EFFECTIVELY
                        </Text>
                    </View>
                    <View className="mt-10">
                        <TouchableOpacity
                            className="flex-row items-center bg-primary px-4 py-3
                            gap-1
                            rounded-lg"
                        >
                            <Text className="capitalize text-white font-poppins">
                                Explore our plans
                            </Text>
                            <AntDesign
                                name="arrowright"
                                size={20}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="mt-10">
                        <BoostBrand
                            text={"Pricing"}
                            textClass="text-primary"
                            mt={40}
                        />
                    </View>
                    <View>
                        <Text className="text-[#010101] text-[22px] mt-[14px] font-poppins">
                            CHOOSE YOUR RIGHT PLAN!
                        </Text>
                        <Text className="text-[#061B3B] text-[12px] mt-[10px] font-poppins">
                            Select from best plans, ensuring a perfect match.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EngaggingVideos
