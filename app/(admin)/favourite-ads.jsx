import React from "react";
import { ScrollView, Text, View } from "react-native";
import DynamicCard from "../../components/ads/DynamicCard";
import { adsCategories } from "../../constant/data";
import AdminTopSelectArea from "../../components/Header/adminSelectArea copy";


const FavouriteAds = () => {

  return (
    <ScrollView className=" bg-white ">
      {/* <FilterForm /> */}
      <AdminTopSelectArea />
      <View className="px-5 mt-5">
        <Text className=" font-poppins font-semibold  text-[24px]  leading-[36px]">Favorite Ads</Text>
      </View>
      <View className=" py-[14px] px-[10px]   mx-4  mt-4 rounded-lg" style={{ backgroundColor: "#737373" }}>
        <Text className=" font-poppins font-semibold text-[14px] text-white ">No Ads found!</Text>
      </View>
    </ScrollView>

  );
};

export default FavouriteAds;

