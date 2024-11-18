import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AdminTopSelectArea = () => {
  const [globallangshow, setGloballangShow] = useState(false);

  return (
    <>
      <View className="flex-1 bg-white">
        <View className="mt-2 mx-4 flex flex-row items-center ">
          <View
            className="py-2 border-[1px] border-[#DEE2E6] rounded flex flex-row items-center flex-1 flex-grow"
            style={{
              paddingLeft: 10,
              marginRight: 5,
              paddingRight: 5,
            }}
          >
            <AntDesign name="calendar" size={11} color="#737373" />
            <TextInput
              placeholder="academic year: 2024/2025"
              className="ml-1 placeholder:text-[#737373] font-poppins font-medium text-[12px] w-full"
              placeholderTextColor="#737373"
            />
          </View>

          <View
            className="border-[1px] border-[#DEE2E6] rounded-sm bg-white py-2  flex justify-center items-center"
            style={{ marginRight: 5, paddingHorizontal: 5 }}
          >
            <SimpleLineIcons name="bell" size={14} color="#DEE2E6" />
          </View>

          <TouchableOpacity
            onPress={() => setGloballangShow((prev) => !prev)}
            className="border-[1px] border-[#DEE2E6] rounded-sm bg-white py-2 flex justify-center items-center mx-1"
            style={{ marginRight: 5, paddingHorizontal: 5 }}
          >
            <SimpleLineIcons name="globe" size={14} color="#DEE2E6" />
          </TouchableOpacity>

          <View
            className="border-[1px] border-[#DEE2E6] rounded-sm bg-white py-2  flex justify-center items-center mx-1"
            style={{ marginRight: 5, paddingHorizontal: 5 }}
          >
            <AntDesign name="message1" size={14} color="#DEE2E6" />
          </View>

          <View>
            <Image
              className="rounded w-full h-full"
              source={require("../../assets/images/human.jpg")}
              resizeMode="cover"
              style={{ height: 30, width: 27 }}
            />
          </View>
        </View>
        <View className="relative z-10 mt-[10px] mx-4 py-2 border-[1px] border-[#DEE2E6] rounded flex flex-row items-center px-[10px]">
          <AntDesign name="search1" size={13} color="#737373" />
          <TextInput
            placeholder="Search"
            className="ml-3 mt-1 placeholder:text-[#737373] font-poppins font-medium text-[12px] w-full"
            placeholderTextColor="#737373"
          />
        </View>
      </View>
      {globallangshow && (
        <View className="absolute w-full   z-50 " style={{ marginTop: 70 }}>
          <View
            className=" relative bg-white border-[1px] border-black rounded-xl px-5 py-5"
            style={{ marginHorizontal: 38 }}
          >
            <View
              className=" absolute bg-white border-[1px] border-black"
              style={{
                width: 28,
                height: 25,
                top: -10,
                right: 65,
                transform: [{ rotate: "50deg" }],
              }}
            ></View>
            <View
              className=" absolute bg-white "
              style={{
                width: 50,
                height: 25,
                right: 49,
              }}
            ></View>
            <Text className="font-poppins font-semibold text-base mb-4 text-grey-300">
              Select a language
            </Text>
            <Text className="font-poppins font-normal text-sm text-grey-300 mb-2">
              English
            </Text>
            <Text className="font-poppins font-normal text-sm text-grey-300 mb-2">
              France
            </Text>
            <Text className="font-poppins font-normal text-sm text-grey-300 mb-2">
              Dutch
            </Text>
            <Text className="font-poppins font-normal text-sm text-grey-300 mb-2">
              Greek
            </Text>
            <Text className="font-poppins font-normal text-sm text-grey-300 mb-2">
              Faroese
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default AdminTopSelectArea;
