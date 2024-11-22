import React from "react";
import { ScrollView } from "react-native";
import AdminTopSelectArea from "../../components/Header/adminSelectArea copy";
import { Text } from "react-native";


const AdminHome = () => {
  return (
    <ScrollView className=" bg-white ">
      <AdminTopSelectArea />
      <Text>Home</Text>
    </ScrollView>
  );
};

export default AdminHome;
