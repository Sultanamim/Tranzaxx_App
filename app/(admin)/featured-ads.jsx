import React from "react";
import { ScrollView, Text, View } from "react-native";
import DynamicCard from "../../components/ads/DynamicCard";
import { adsCategories } from "../../constant/data";
import AdminTopSelectArea from "../../components/Header/adminSelectArea copy";


const FeaturedAds = () => {

  return (
    <ScrollView className=" bg-white ">
      {/* <FilterForm /> */}
      <AdminTopSelectArea />
      <View className="px-5 mt-5">
        <Text className=" font-poppins font-semibold  text-[24px]  leading-[36px]">Featured Ads</Text>
      </View>
      <View className="px-4 flex gap-5 mt-5 mb-20">
        {adsCategories.map((ads) => (
          <DynamicCard key={ads.title} ads={ads} />
        ))}
      </View>
    </ScrollView>

  );
};

export default FeaturedAds;

