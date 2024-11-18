import { AntDesign } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import ArrowRightImg from "../../assets/images/arrow-right.png";

const BtnWithArrow = ({ title, handler, px, py, styles }) => {
  return (
    <TouchableOpacity
      className={`bg-[#00ADEF] rounded-[12px] flex-row items-center gap-1 ${
        px ? px : "px-4"
      } ${py ? py : "py-3"}`}
      style={styles && styles}
      onPress={handler}
    >
      <Text className="font-poppins text-[16px] text-white Capitalise font-semibold text-center mt-1">
        {title}
      </Text>
      {/* <AntDesign name="arrowright" size={20} color="white" /> */}
      <Image source={ArrowRightImg} className="w-[20px] h-[20px]" />
    </TouchableOpacity>
  );
};

export default BtnWithArrow;
