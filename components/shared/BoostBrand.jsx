import { View, Text, Image } from "react-native"

const BoostBrand = ({ text = "", textClass = "", mt = 0 }) => {
    return (
        <View
            className={`border-[1px] border-[#BFBFBF] px-[10px] py-[6px] flex-row items-center gap-2 rounded-[20px]  mt-[${
                mt ? mt : "60px"
            }]`}
        >
            <Image
                source={require("../../assets/images/shared/booststar.png")}
                resizeMode="cover"
                className="w-5  h-5"
            />
            <Text
                className={`${
                    textClass ? textClass : "font-poppins text-[#061B3B]"
                }`}
            >
                {text ? text : "Boost Your Brand with Engaging Videos!"}
            </Text>
        </View>
    )
}

export default BoostBrand
