import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

const Btn = ({ title, handler, textStyle, style }) => {
  return (
    <View>
      <TouchableOpacity
        className="bg-[#00ADEF] py-3 rounded-[8px]"
        onPress={handler}
        style={style && style}
      >
        <Text
          className="font-poppins text-[18px] text-white uppercase text-center"
          style={[textStyle && textStyle, { fontFamily: "Poppins-SemiBold" }]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
