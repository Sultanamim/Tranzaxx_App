import { View, Text, ImageBackground, Image } from "react-native"
const Hero = () => {
    return (
        <View>
            <ImageBackground
                source={require("../../assets/images/advertise/advertisehero.png")}
                className="px-[10px] min-h-[168px]"
            >
                <View className="max-w-[216px] mb-2 relative flex-row ">
                    <View className="py-[10px]">
                        <View className="flex-row items-center mt-[15px]">
                            <View className="bg-black px-[21px] py-[10px]">
                                <Text className="text-white uppercase font-BebasNeue text-[28px]">
                                    Advertise now
                                </Text>
                            </View>
                        </View>
                        <Text className="uppercase font-BebasNeue text-[14px] mt-5 text-[#000100]">
                            BY PLACING YOUR VIDEO ON TRANZAXX HOMEPAGE, YOU WILL
                            REACH MILLIONS OF PEOPLE AND CAPTURE THEIR ATTENTION
                        </Text>
                        <View className="flex-row items-center">
                            <Text className="uppercase text-black font-BebasNeue">
                                Only
                            </Text>
                            <Text className="uppercase text-white font-BebasNeue">
                                499$ PER DAY
                            </Text>
                        </View>
                    </View>
                    <Image
                        className="-translate-x-5"
                        source={require("../../assets/images/advertise/advertisegirl.png")}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Hero
