import { View, Text, Image, ScrollView } from "react-native"
import PopupMessage from "../../components/Country/PopupMessage"
import { countriesDetails } from "../../constant/data"

const Country = () => {
    return (
        <ScrollView className="px-4">
            <View className="mt-4">
                <PopupMessage />
            </View>
            <Text className="text-primaryBlk font-poppins text-[24px] font-semibold mt-[33px]">
                Countries
            </Text>
            <View className="flex-row flex-wrap -mx-1.5 gap-x-3 gap-y-2 mt-4">
                {countriesDetails.map((country) => (
                    <View
                        key={country.name}
                        className="w-[48%] border-[1px] border-[#EAE8E8] p-4 rounded-lg flex-row items-center gap-3"
                    >
                        <Image source={country.img} />
                        <Text className="font-poppins text-[#010101] font-bold uppercase">
                            {country.name}
                        </Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default Country
