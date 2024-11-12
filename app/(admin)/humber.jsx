import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons, FontAwesome5, Octicons, Fontisto, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { router } from "expo-router"


export default function Menu() {
  return (
    <View className=" mx-4 my-2 ">
      <View className=" px-[10px] py-[10px] flex flex-row items-center">
        <View>
          <View className=" flex flex-row">
            <Octicons name="square-fill" size={14} color="#767C89" />
            <Octicons name="square-fill" size={14} color="#767C89" className="ml-1" />
          </View>
          <View className=" flex flex-row -mt-1">
            <Octicons name="square-fill" size={14} color="#767C89" />
            <Octicons name="square-fill" size={14} color="#767C89" className="ml-1" />
          </View>
        </View>
        <Text className="ml-3 font-poppins  font-semibold text-lg  text-grey-100">PERSONAL HOME</Text>
      </View>
      <TouchableOpacity onPress={() => {
        router.push('/my-ads')
      }} className=" px-[10px] py-[10px] flex flex-row items-center bg-blue-100 ">
        <AntDesign name="menuunfold" size={20} color="#00AEF0" />
        <Text className="ml-3 font-poppins  font-semibold text-lg   text-blue-200">MY ADS (37)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        router.push('/featured-ads')
      }} className=" px-[10px] py-[10px] flex flex-row items-center ">
        <FontAwesome5 name="medal" size={18} color="#767C89" />
        <Text className=" ml-3 font-poppins  font-semibold text-lg  text-grey-100">FEATURED ADS (1)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        router.push('/favourite-ads')
      }} className=" px-[10px] py-[10px] flex flex-row items-center ">
        <MaterialIcons name="favorite" size={20} color="#767C89" />
        <Text className=" ml-3 font-poppins  font-semibold text-lg  text-grey-100">FAVOURITE ADS (0)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        router.push('/archived-ads')
      }} className=" px-[10px] py-[10px]  flex flex-row items-center">
        <FontAwesome5 name="archive" size={18} color="#767C89" />
        <Text className="ml-3  font-poppins  font-semibold text-lg  text-grey-100">ARCHIVED ADS (1)</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        router.push('/savedsearch')
      }} className=" px-[10px] py-[10px] flex flex-row items-center">
        <Octicons name="star-fill" size={20} color="#767C89" />
        <Text className="ml-3  font-poppins  font-semibold text-lg  text-grey-100">SAVED SEARCHES (2)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        router.push('/pending-approval')
      }} className=" px-[10px] py-[10px] flex flex-row items-center">
        <MaterialIcons name="account-balance-wallet" size={21} color="#767C89" />
        <Text className="ml-3 font-poppins  font-semibold text-lg  text-grey-100">PENDING APPROVAL (0)</Text>
      </TouchableOpacity>

      <View className=" px-[10px] py-[10px]  flex flex-row items-center">
        <Fontisto name="messenger" size={18} color="#767C89" />
        <Text className="ml-3 font-poppins  font-semibold text-lg  text-grey-100">MESSENGER</Text>
      </View>
      <View className=" px-[10px] py-[10px] flex flex-row items-center">
        <MaterialCommunityIcons name="text-box-multiple" size={20} color="#767C89" />
        <Text className="ml-3 font-poppins  font-semibold text-lg  text-grey-100">TRANSATIONS (0)</Text>
      </View>

      <View className=" px-[10px] py-[10px]  flex flex-row items-center">
        <MaterialIcons name="logout" size={20} color="#767C89" />
        <Text className="ml-3  font-poppins  font-semibold text-lg  text-grey-100">LOG OUT</Text>
      </View>
    </View>
  )
}