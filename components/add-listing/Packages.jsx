import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { getALLPackages } from "../../apiService";
import { Entypo } from "@expo/vector-icons";

export default function Packages() {
  const [packages, setPackages] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getALLPackages();
        //console.log(data.result.data);
        setPackages(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <>
      {/* Packages title */}
      <View className="border-[#00AEF0] border-b-[1px]  ">
        <View className=" mt-[25px] mb-[10px] flex-row items-center">
          <Image
            source={require("../../assets/images/packages.png")}
            resizeMode="cover"
            className="w-5  h-5"
          />
          <Text
            className=" text-[#00AEF0] text-[18px] font-semibold pl-[10px] "
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            PACKAGES
          </Text>
        </View>
      </View>

      {/* All packages */}
      {packages && (
        <View className="my-3">
          {packages?.map((item, index) => (
            <View
              className="flex flex-row items-center justify-between"
              style={styles.items}
            >
              <View
                className="flex flex-row items-center"
                style={{ width: 230 }}
              >
                <Entypo
                  name="circle"
                  size={17}
                  color="#00AEF0"
                  style={styles.icon}
                />
                <Text className="uppercase" style={styles.name}>
                  {item.name}
                </Text>
                {item.recommended === "1" && (
                  <Text className="uppercase" style={styles.recommend}>
                    Recommended
                  </Text>
                )}
              </View>
              <Text style={[styles.price]}>${item.price}</Text>
            </View>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  items: {
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
  },
  name: {
    fontFamily: "Poppins-Medium",
    color: "#8F8F8F",
    fontSize: 16,
    marginLeft: 10,
    // width: 90,
    //textTransform: "uppercase",
  },
  icon: {
    marginTop: -3,
  },
  price: {
    fontFamily: "Poppins-Medium",
    color: "#00AEF0",
    fontSize: 16,
  },
  recommend: {
    fontSize: 13,
    fontFamily: "BebasNeue",
    marginLeft: 5,
    backgroundColor: "#00AEF0",
    color: "#F9F9F9",
    padding: 3,
    borderRadius: 3,
    marginTop: -5,
  },
});
