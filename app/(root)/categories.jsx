import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  getCanadaCities,
  getCategoryList,
  getSubCategoryList,
} from "../../apiService";
import { imageUrlAppend } from "../../constant/newData";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [canadaCities, setCanadaCities] = useState(null);

  useEffect(() => {
    const fetchCategoriesAndSubcategories = async () => {
      try {
        const categoryData = await getCategoryList();
        const categoriesWithSubcategories = await Promise.all(
          categoryData?.result?.data.map(async (category) => {
            const subcategoryData = await getSubCategoryList(category.id);
            return {
              ...category,
              subcategories: subcategoryData?.result?.data || [],
            };
          })
        );
        setCategories(categoriesWithSubcategories);
      } catch (error) {
        console.error("Failed to fetch categories or subcategories:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchCategoriesAndSubcategories();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getCanadaCities();
        // console.log(data.result.data);
        setCanadaCities(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="mx-[16px] text-[poppins]"
      style={{ marginBottom: 10 }}
    >
      <View className="bg-black w-full h-[38px]">
        <View className="flex-row mt-[7px] items-center justify-between mx-[10px]">
          <Text className="text-[12px] text-[white]">
            YOUR ACCOUNT HAS BEEN CREATED.
          </Text>
          <TouchableOpacity className="bg-[#00AEF0] p-[6px] rounded-2xl">
            <Image
              source={require("../../assets/images/listing/cross.png")}
              resizeMode="cover"
              className="w-3 h-3"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        className="text-[30px] font-semibold text-center mt-[25px]"
        style={{ fontFamily: "Poppins-SemiBold" }}
      >
        Categories
      </Text>
      <Text
        className="text-[15px] font-medium text-center mt-[10px] text-[#061B3B]"
        style={{ fontFamily: "Poppins-Medium" }}
      >
        LIST OF CATEGORIES AND SUB-CATEGORIES
      </Text>
      {/* All categories and their subcategories */}
      <View style={{ marginBottom: 20 }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00AEF0" />
        ) : (
          categories.map((category) => (
            <View
              key={category.id}
              className="mt-[30px] pb-[10px] border-[1px] border-[#DADADA] rounded-[8px]"
            >
              <View style={styles.catItem}>
                <View className="items-center mt-[10]">
                  <View className="bg-[#FAFBFF] p-[16px] rounded-full">
                    <Image
                      source={{ uri: `${imageUrlAppend}${category.picture}` }}
                      resizeMode="cover"
                      className="w-[32px] h-[32px]"
                    />
                  </View>
                </View>
                <Text
                  className="text-[18px] font-semibold text-center mt-[20px] mb-[10px]"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  {category.name}
                </Text>
              </View>

              {/* Subcategories */}
              {category.subcategories.length > 0 ? (
                category.subcategories.map((subCategory) => (
                  <View
                    key={subCategory.id}
                    className="ml-[5px] flex-row mt-[10px]"
                  >
                    <Entypo name="dot-single" size={24} color="#737373" />
                    <Text
                      className="text-[16px] font-medium text-[#737373]"
                      style={{ fontFamily: "Poppins-Medium" }}
                    >
                      {subCategory.name}
                    </Text>
                  </View>
                ))
              ) : (
                <Text className="ml-[5px] mt-[10px] text-[14px] text-[#737373]">
                  No subcategories available.
                </Text>
              )}
            </View>
          ))
        )}
      </View>
      {/* List of cities */}
      <View className="mt-[30px] pb-[10px] border-[1px] border-[#DADADA] rounded-[8px]">
        <Text
          className="text-[22px] font-semibold text-center mt-[20px] mb-[10px]"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          List of Cities in Canada
        </Text>
        <View>
          {canadaCities?.map((item, index) => {
            // Check if the item is the start of a new row
            if (index % 2 === 0) {
              return (
                <View key={index} style={styles.row}>
                  {/* Render the current item */}
                  <View style={styles.item}>
                    <Text style={styles.itemText}>
                      {canadaCities[index].name}
                    </Text>
                  </View>
                  {/* Render the next item in the same row if it exists */}
                  {canadaCities[index + 1] && (
                    <View style={styles.item}>
                      <Text style={styles.itemText}>
                        {canadaCities[index + 1].name}
                      </Text>
                    </View>
                  )}
                </View>
              );
            }
            // Skip rendering this item as it is already included in a row
            return null;
          })}
        </View>
      </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  item: {
    flex: 1,
    marginHorizontal: 5,
    // backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignItems: "flex-start",
    borderRadius: 5,
  },
  itemText: {
    fontSize: 15,
    color: "#737373",
    textTransform: "uppercase",
    fontFamily: "Poppins-SemiBold",
    width: 130,
  },
});
