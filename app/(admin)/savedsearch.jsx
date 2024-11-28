import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useSession } from "../../lib/cts";
import { getSavedSearches } from "../../apiService";

const AdminHome = () => {
  const { session } = useSession();
  const [searches, setSearches] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getSavedSearches(session);
        // console.log(data.result.data);
        setSearches(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView className=" bg-white ">
      <View className="px-5 mt-5 flex flex-row justify-between items-center ">
        <Text className=" font-poppins font-semibold  text-[24px]  leading-[36px]">
          Saved Search
        </Text>

        <Text
          className="  font-poppins text-[14px] font-semibold "
          style={{ color: "#E64E1F" }}
        >
          REMOVE ALL
        </Text>
      </View>

      {!searches || searches.length > 0 ? (
        <View
          className=" py-[14px] px-[10px]   mx-4  mt-4 rounded-lg"
          style={{ backgroundColor: "#737373" }}
        >
          <Text className=" font-poppins font-semibold text-[14px] text-white ">
            No Saved Search found!
          </Text>
        </View>
      ) : (
        <>
          <View
            className=" mt-5  mx-4  flex flex-row  "
            style={{
              paddingVertical: 13,
              paddingHorizontal: 29,
              backgroundColor: "#F2FBFE",
            }}
          >
            <Text
              className="   text-[#00AEF0]  font-poppins font-semibold text-[16px]"
              style={{ width: "30%" }}
            >
              NO.
            </Text>
            <View
              className=" flex flex-row items-center"
              style={{ width: "30%" }}
            >
              <MaterialIcons name="favorite" size={18} color="#00AEF0" />
              <Text className=" ml-3 text-[#00AEF0]  font-poppins font-semibold text-[16px]">
                SEARCHES
              </Text>
            </View>
            <View
              className="flex flex-row justify-end "
              style={{ width: "40%" }}
            >
              <Text className="text-[#00AEF0]  font-poppins font-semibold text-[16px]">
                ACTION
              </Text>
            </View>
          </View>

          <View
            className="mx-4  flex flex-row  "
            style={{
              paddingVertical: 13,
              paddingHorizontal: 29,
              backgroundColor: "#ECECEC",
            }}
          >
            <Text
              className="   text-[#00AEF0]  font-poppins font-semibold text-[16px]"
              style={{ width: "30%" }}
            >
              1.
            </Text>
            <View
              className=" flex flex-row items-center"
              style={{ width: "30%" }}
            >
              <MaterialIcons name="favorite" size={18} color="#00AEF0" />
              <Text className=" ml-3 text-[#00AEF0]  font-poppins font-semibold text-[16px]">
                Favourite
              </Text>
            </View>
            <View
              className="flex flex-row justify-end "
              style={{ width: "40%" }}
            >
              <Entypo name="cross" size={24} color="#061B3B" />
            </View>
          </View>

          <View
            className="mx-4  flex flex-row  "
            style={{
              paddingVertical: 13,
              paddingHorizontal: 29,
              backgroundColor: "#F2FBFE",
            }}
          >
            <Text
              className="   text-[#00AEF0]  font-poppins font-semibold text-[16px]"
              style={{ width: "30%" }}
            >
              2.
            </Text>
            <View
              className=" flex flex-row items-center"
              style={{ width: "30%" }}
            >
              <MaterialIcons name="favorite" size={18} color="#00AEF0" />
              <Text className=" ml-3 text-[#00AEF0]  font-poppins font-semibold text-[16px]">
                Car
              </Text>
            </View>
            <View
              className="flex flex-row justify-end "
              style={{ width: "40%" }}
            >
              <Entypo name="cross" size={24} color="#061B3B" />
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default AdminHome;
