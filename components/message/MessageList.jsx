import { AntDesign, Feather, SimpleLineIcons, Octicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import { router } from "expo-router"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { View, Text } from "react-native"

const MessageList = ({ isImportant }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <TouchableOpacity onPress={() => router.push('./messageid')} className=" flex flex-row items-center bg-[#F5F5F5] my-[7px] px-[10px] py-3 rounded-xl ">
      <View className=" w-[25%]   flex flex-row  items-center">
        <Checkbox color={isChecked ? '#00AEF0' : undefined} style={{ borderColor: '#000000' }} value={isChecked} onValueChange={setChecked} />
        <Image
          className="w-[52px]  h-[52px] rounded-full ml-2 mr-3"
          source={require("../../assets/images/human2.png")}
          resizeMode="cover"
        />
      </View>
      <View className=" w-[75%] ">
        <View className=" flex flex-row justify-between">
          <View className="flex flex-row items-center">
            <Text className="font-poppins font-semibold text-[15px] text-[#010101] ">Jane Doe</Text>
            <View className="bg-[#00AEF0] px-[6px] py-1 rounded-[4px]  ml-3">
              <Text className=" font-poppins font-normal text-[12px] text-white">10</Text>
            </View>
          </View>
          <Text className="font-poppins font-semibold text-[15px] text-[#010101] ">2034, 4:15 PM</Text>
        </View>
        <Text className=" mt-1 font-poppins font-normal text-[12px] text-[#061B3B]">2024 Mercedes-Maybach S 680 4Matic</Text>
        <View className=" mt-1 flex flex-row justify-between ">
          <Text className=" font-poppins  font-normal text-[14px] text-[#434343]">Lorem ipsum dolor sit....</Text>


          <View className=" flex flex-row">
            {
              isImportant ? <Octicons name="star-fill" size={17} color="#FC8A00" /> : <SimpleLineIcons name="star" size={17} color="black" />
            }

            <Feather name="mail" size={17} color="black" className="ml-3" />
            <AntDesign name="delete" size={17} color="black" className="ml-3" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MessageList