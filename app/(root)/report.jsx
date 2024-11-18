import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { productsCategories } from "../../constant/newData";
import { useState } from "react";

const Report = () => {
  const [selectedCategory, setSelectedCategory] = useState("SELECT A CATEGORY");
  const [showDropdown, setShowDropdown] = useState(false);

  const selectingProduct = productsCategories;
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mx-[16px] font-BebasNeue"
    >
      <View className="bg-black rounded-[12px] mt-[10px] w-full h-[38px] ">
        <View className="flex-row mt-[7px] items-center justify-between mx-[10px] ">
          <Text className="text-[13px] font-BebasNeue mb-[-4px] text-[white] ">
            TRANZAXX is also available in your country{" "}
            <TouchableOpacity className="mt-[7px]">
              {" "}
              <Text className="text-[13px]  font-BebasNeue text-[#00AEF0] ">
                Click here
              </Text>{" "}
            </TouchableOpacity>{" "}
            now!
          </Text>
          <TouchableOpacity className="bg-[#00AEF0] p-[6px] rounded-2xl ">
            <Image
              source={require("../../assets/images/listing/cross.png")}
              resizeMode="cover"
              className="w-3  h-3"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-[28px] font-BebasNeue text-[#00AEF0] mt-[10px] ">
        Report for "Luxurious Beachfront Hotel & Resort"
      </Text>
      <View className="border-t-[1px] border-[#BFBFBF] w-full pt-[8px] mt-[10px] ">
        <Text className="text-[20px] font-BebasNeue ">
          There is something wrong with this ad?
        </Text>
      </View>

      <View
        className=" mt-[20px] rounded-[8px] bg-white px-[20px] pb-[15px] "
        style={{
          shadowColor: "#acacad",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 4.65,
          elevation: 8,
        }}
      >
        <View className="flex-row flex justify-between items-center pt-[15px] ">
          <Text className=" text-[16px] font-BebasNeue">Reason *</Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowDropdown(!showDropdown)}
          className="border-[1px] border-[#00AEF0] rounded-[4px] p-[5px] mt-[10px]"
        >
          <View className=" flex-row mt-[4px] flex justify-between">
            <Text className="text-[14px] font-BebasNeue  text-[#BFBFBF]">
              {selectedCategory}
            </Text>
            <Image
              source={require("../../assets/images/listing/vector-dwon.png")}
              resizeMode="cover"
              className="w-7  h-7"
            />
          </View>
        </TouchableOpacity>
        <Text className=" text-[16px] mt-[20px] font-BebasNeue font-semibold">
          Your e-maill *
        </Text>
        <TextInput
          className="border-[1px] border-[#00AEF0] text-[16px] font-BebasNeue rounded-[4px] p-[10px] mt-[10px]"
          placeholder="E-mail"
        />
        <View className=" mt-[20px] ">
          <Text className=" text-[16px] font-BebasNeue font-semibold">
            Message *
          </Text>
          <TextInput
            className="border-[1px] border-[#00AEF0] font-BebasNeue text-[16px] rounded-[4px] p-[8px] pb-[50px] mt-[10px]"
            placeholder="Message"
          />
        </View>
        <View className=" flex-row items-center justify-between">
          <TouchableOpacity className=" mt-[10px] rounded-[4px] py-[10px]items-center">
            <Text className="font-BebasNeue text-[20px]">Back</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#00ADEF] mt-[10px] w-[125px] rounded-[4px] py-[10px] px-[15px] items-center">
            <Text className="font-BebasNeue text-[18px]  text-[#FFFFFF]">
              Send Report
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Report;
