import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native"

const HeroSection = () => {
    return (
        <ImageBackground
            source={require("../../assets/images/hero/herobg.png")}
            className="min-h-[180px] pl-4"
        >
            <View className="flex-row w-full justify-between">
                <View className="mt-[20px]">
                    <Text className="text-white text-[24px] font-BebasNeue">
                        DISCOVER. BUY. SELL
                    </Text>

                    <View className="mt-2">
                        <Image
                            source={require("../../assets/images/hero/left-text-bg-black.png")}
                            className="absolute -left-4 h-[34px] max-w-[180px]"
                        />
                        <Text className="text-[15px] font-BebasNeue text-white tracking-[4px] leading-[15px] mt-1">
                            THE NEW VIDEO {"\n"} CLASSIFIED ADS
                        </Text>
                    </View>
                    <View className="mt-2">
                        <Text className="text-white text-[9px] font-BebasNeue text-center max-w-[150px]">
                            A BRAND NEW EXPERIENCE WHERE YOU CAN FULLY {"\n"}
                            VISUALIZE YOUR PRODUCT IN A VIDEO
                        </Text>
                    </View>
                </View>
                <Image
                    source={require("../../assets/images/hero/girl.png")}
                    className="absolute object-cover z-10 left-1/2 b mt-3 -translate-x-1/2 w-[168px] h-[168px]"
                    resizeMode="cover"
                />
                <View className="flex-row flex-1">
                    <ImageBackground
                        source={require("../../assets/images/hero/rightsidebg.png")}
                        className=" w-full items-end min-h-[180px] h-full flex pt-4 pr-4 object-cover"
                        resizeMode="cover"
                    >
                        <Image
                            source={require("../../assets/images/navbar/navlogo.png")}
                            className="z-40 w-[146px] h-[38px]"
                        />
                        <TouchableOpacity className="bg-primary px-5 py-1 rounded-lg mt-4">
                            <Text className="uppe uppercase text-white font-BebasNeue text-[20px]">
                                Shop now
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        </ImageBackground>
    )
}

export default HeroSection
