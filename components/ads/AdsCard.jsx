import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { View, Text, Image } from "react-native"

//
/*  

 {
        category: "automobile",
        title: "cars",
        img: car,
        icon: carIcon,
        place: "MONTREAL",
        price: "125,000",
        name: "VOITURE DE SPORT EXCEPTIONNELLE",
    },

*/
const AdsCard = ({ ads }) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <View className="p-5 border-[1px] bg-white border-transparent shadow-custom-blue">
            <View className="relative">
                <Image source={ads.img} className="w-full rounded-[4px]" />
                <TouchableOpacity
                    className="absolute bg-white right-[15px] p-[6px] rounded-[2px] top-3"
                    onPress={() => setIsLiked(!isLiked)}
                >
                    <AntDesign
                        name="heart"
                        size={20}
                        color={`${isLiked ? "red" : "#00AEF0"}`}
                    />
                </TouchableOpacity>
            </View>
            <View className="mt-6 flex-row items-center gap-2">
                <Image source={ads.icon} />
                <Text className="text-primaryBlk text-[12px] font-poppins font-medium uppercase">
                    {ads.category}
                </Text>
                <View className="bg-primaryBlk w-[5px] h-[2px]"></View>
                <Text className="text-primaryBlk text-[12px] font-poppins font-medium uppercase">
                    {ads.title}
                </Text>
            </View>
            <View className="mt-[25px] font-poppins text-primaryBlk text-[20px] font-semibold uppercase">
                <Text className="text-primaryBlk text-[17 px] font-semibold font-poppins">
                    {ads.name}
                </Text>
                <View className="mt-2 flex-row gap-2 items-center">
                    <Image
                        source={require("../../assets/images/ads/place.png")}
                    />
                    <Text className="text-primaryBlk font-semibold font-poppins text-[16px] tracking-[-.5px]">
                        {ads.place}
                    </Text>
                </View>
                <View className="mt-2 flex-row gap-2 items-center">
                    <Image
                        source={require("../../assets/images/ads/price.png")}
                    />
                    <Text className="text-primary font-semibold font-poppins text-[20px] tracking-[-.5px]">
                        {ads.price} $
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default AdsCard
