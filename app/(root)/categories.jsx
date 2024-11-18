import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import ReacState from "../../assets/images/listing/real-state.png";
import { Entypo } from "@expo/vector-icons";
import { getCategoryList } from "../../apiService";
import { imageUrlAppend } from "../../constant/newData";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getCategoryList();
        // console.log(data.result.data);
        setCategories(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const subCategoryTxt = [
    "HOUSES & APARTMENTS FOR RENT",
    "HOUSES & APARTMENTS FOR SALE",
    "LAND & PLOTS FOR RENT",
    "LAND & PLOTS FOR SALE",
    "COMMERCIAL PROPERTY FOR SALE",
    "EVENT CENTRES, VENUES AND WORKSTATIONS",
    "SHORT RENTAL",
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mx-[16px] text-[poppins] "
      //style={{ backgroundColor: "#fff" }}
    >
      <View className="bg-black w-full h-[38px] ">
        <View className="flex-row mt-[7px] items-center justify-between mx-[10px] ">
          <Text className="text-[12px] text-[white] ">
            YOUR ACCOUNT HAS BEEN CREATED.
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
      <Text
        className="text-[30px] font-semibold text-center mt-[25px] "
        style={{ fontFamily: "Poppins-SemiBold" }}
      >
        Categories
      </Text>
      <Text
        className="text-[15px] font-medium text-center mt-[10px] text-[#061B3B] "
        style={{ fontFamily: "Poppins-Medium" }}
      >
        LIST OF CATEGORIES AND SUB-CATEGORIES
      </Text>
      {/*  All categories */}
      {categories?.map((item, index) => (
        <View className="mt-[30px] pb-[10px] border-[1px] border-[#DADADA] rounded-[8px] ">
          <View style={styles.catItem}>
            <View className="items-center mt-[10] ">
              <View className=" bg-[#FAFBFF] p-[16px] rounded-full ">
                <Image
                  source={{ uri: `${imageUrlAppend}${item.picture}` }}
                  resizeMode="cover"
                  className="w-[32px]  h-[32px] "
                />
              </View>
            </View>
            <Text
              className="text-[18px] font-semibold text-center mt-[20px] mb-[10px] "
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              {item.name}
            </Text>
          </View>

          {subCategoryTxt.map((txt, index) => (
            <View key={txt} className=" ml-[5px] flex-row mt-[10px] ">
              <Entypo name="dot-single" size={24} color="#737373" />
              <Text
                className="text-[16px] font-medium  text-[#737373]"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                HOUSES & APARTMENTS FOR RENT
              </Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  catItem: {
    backgroundColor: "#f2f3f5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 4,
    paddingTop: 15,
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 12,
    paddingBottom: 15,
  },
});
