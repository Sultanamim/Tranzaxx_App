import { Platform } from "react-native";
import { View, Text, Image } from "react-native";

const BoostBrand = ({ text = "", textClass = "", mt = 0 }) => {
  return (
    <View
      className={`border-[1px] border-[#BFBFBF] px-[10px]  flex-row items-center gap-2 rounded-[20px]  mt-[${
        mt ? mt : "60px"
      }]`}
      style={{
        paddingTop: Platform.OS === "ios" ? 8 : 6,
        paddingBottom: Platform.OS === "ios" ? 8 : 6,
        // paddingHorizontal: 14,
      }}
      //style={mt && { marginTop: mt }}
    >
      <Image
        source={require("../../assets/images/shared/booststar.png")}
        resizeMode="cover"
        className="w-5  h-5"
      />
      <Text
        className={`${textClass ? textClass : "text-[#061B3B]"}`}
        style={{ fontFamily: "Poppins-Regular" }}
      >
        {text ? text : "Boost Your Brand with Engaging Videos!"}
      </Text>
    </View>
  );
};

export default BoostBrand;
