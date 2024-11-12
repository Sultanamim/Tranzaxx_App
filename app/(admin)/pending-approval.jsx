import React from "react";
import { ScrollView, Text, View } from "react-native";
import AdminTopSelectArea from "../../components/Header/adminSelectArea copy";


const PendingApproval = () => {

  return (
    <ScrollView className=" bg-white ">
      {/* <FilterForm /> */}
      <AdminTopSelectArea />
      <View className="px-5 mt-5">
        <Text className=" font-poppins font-semibold  text-[24px]  leading-[36px]">Pending Approval</Text>
      </View>
      <View className=" py-[14px] px-[10px]   mx-4  mt-4 rounded-lg" style={{ backgroundColor: "#737373" }}>
        <Text className=" font-poppins font-semibold text-[14px] text-white ">No Ads found!</Text>
      </View>
    </ScrollView>

  );
};

export default PendingApproval;

