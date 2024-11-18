import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import DataForm from "../../components/details/PersonalDetailsForm";


const userForm = [
  {
    name: "Gender",
    placeholder: "Gender",
  },
  {
    name: "First Name",
    placeholder: "Fist Name",
  },
  {
    name: "Name",
    placeholder: "Admin",
  },
  {
    name: "User Name",
    placeholder: "tadmin",
  },
  {
    name: "Email",
    placeholder: "ehipster@gmail.com",
  },
  {
    name: "Phone",
    placeholder: "phone Number",
  },
]

const settingsForm = [
  {
    name: "New password",
    placeholder: "password",
  },
  {
    name: "Confirm password",
    placeholder: "password",
  }, {
    name: "preeerred time zone",
    placeholder: "america/toronto",
  }
]

const PersonalHome = () => {

  return (
    <ScrollView className=" bg-white ">
      <View className="   relative h-[140px] ">
        <View className=" relative mt-5 bg-[#00aef0] w-full h-[77px]  rounded-t-[30px]">
          <View className=" absolute left-4 -bottom-11   w-[90px] h-[90px] flex flex-row justify-center items-center  bg-white rounded-full" >
            <Image
              className="absolute w-[84px]  h-[84px] rounded-full border-[1px] border-[#00AEF0]"
              source={require("../../assets/images/human2.png")}
              resizeMode="cover"
            />
          </View>
        </View>
        <Image
          className="absolute mt-5"
          source={require("../../assets/images/Maskgroup.png")}
          resizeMode="cover"
        />
      </View>

      <View className="  mx-4 mt-[6px]">
        <Text className=" font-poppins font-semibold text-[20px]  text-primaryBlk">Admin</Text>
        <View className=" mt-1 flex flex-row items-center">
          <SimpleLineIcons name="location-pin" size={14} color="#8F8F8F" />
          <Text className=" ml-1 text-[#8F8F8F]  font-poppins font-medium text-[14px]">Ca</Text>
        </View>
      </View>

      <View className=" bg-[#E6F7FE] py-5 px-6 mt-10 flex flex-row  justify-between border-b-[1px] border-b-[#BFBFBF]">
        <View className=" w-[42%] flex flex-col justify-center items-center">
          {/* <View className=" flex flex-col justify-center items-center "> */}
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#00AEF0" />
          <Text className=" font-poppins font-medium text-[14px] text-[#8F8F8F] mt-2  mb-1">Joined</Text>
          <Text className=" font-poppins font-semibold text-[18px] text-[#010101]">May 17th, 2022</Text>
          {/* </View> */}
        </View>
        <View className=" w-[1px] bg-[#BFBFBF]">
          <View className=" h-auto"></View>
        </View>
        <View className=" w-[42%]   flex flex-col justify-center items-center">
          {/* <View className=" flex flex-col justify-center items-center px-8"> */}
          <Feather name="mail" size={24} color="#00AEF0" />
          <Text className=" font-poppins font-medium text-[14px] text-[#8F8F8F] mt-2  mb-1">Mail</Text>
          <Text className=" font-poppins font-semibold text-[18px] text-[#010101]">(0)</Text>
          {/* </View> */}
        </View>

      </View>
      <View className=" bg-[#E6F7FE] py-5 px-6  flex flex-row  justify-between">
        <View className=" w-[42%] flex flex-col justify-center items-center">
          <Image
            source={require("../../assets/images/ads/mike.png")}
            resizeMode="cover"
          />
          <Text className=" font-poppins font-medium text-[14px] text-[#8F8F8F] mt-2  mb-1">ads</Text>
          <Text className=" font-poppins font-semibold text-[18px] text-[#010101]">(38)</Text>

        </View>
        <View className=" w-[1px] bg-[#BFBFBF]">
          <View className=" h-auto"></View>
        </View>
        <View className=" w-[42%]   flex flex-col justify-center items-center">

          <MaterialIcons name="favorite" size={24} color="#00AEF0" />
          <Text className=" font-poppins font-medium text-[14px] text-[#8F8F8F] mt-2  mb-1">Favorite</Text>
          <Text className=" font-poppins font-semibold text-[18px] text-[#010101]">(0)</Text>

        </View>

      </View>

      <View className="  mx-4 mt-10 rounded-xl px-6 py-6  border-[1px] border-[#BFBFBF] ">
        <View className="flex flex-row justify-center pb-4 border-b-[1px] border-b-[#BFBFBF] ">
          <FontAwesome name="id-card" size={24} color="#00AEF0" />
          <Text className="  ml-2 font-poppins font-bold text-[20px] text-[#00AEF0]">Account Details</Text>
        </View>
        <View className=" mt-6">
          <DataForm isCheckboxshow={true} checkboxContent={"Hide"} fromDatas={userForm} />

        </View>
      </View>

      <View className="  mx-4 mt-10 rounded-xl px-6 py-6  border-[1px] border-[#BFBFBF] ">
        <View className="flex flex-row justify-center pb-4 border-b-[1px] border-b-[#BFBFBF] ">
          {/* <FontAwesome name="id-card" size={24} color="#00AEF0" /> */}
          <MaterialCommunityIcons name="lock" size={24} color="#00AEF0" />
          <Text className="  ml-2 font-poppins font-bold text-[20px] text-[#00AEF0]">Settings</Text>
        </View>
        <View className=" mt-6">
          <DataForm fromDatas={settingsForm} >
            <Text className="  leading-5 font-poppins font-medium  text-[14px] text-[#8F8F8F]"> NOTE: If no preferred time  zone is selected, the Country's preferred time {'\n'}
              zone will be used for the front-office dates (e.g. <Text className=" text-[#010101]">"America/Toronto”</Text> for {'\n'}
              <Text className=" text-[#010101]"> Canada</Text>) and <Text className=" text-[#010101]">“utc”</Text> will be used for the admin panel dates.</Text>
          </DataForm>
        </View>
      </View>
    </ScrollView>

  );
};

export default PersonalHome;
