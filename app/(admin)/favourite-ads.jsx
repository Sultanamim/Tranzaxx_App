import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import DynamicCard from "../../components/ads/DynamicCard";
import { adsCategories } from "../../constant/data";
import AdminTopSelectArea from "../../components/Header/adminSelectArea copy";
import { getSavedPost } from "../../apiService";
import { useSession } from "../../lib/cts";

const FavouriteAds = () => {
  const { session } = useSession();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getSavedPost(session);
        // console.log(data.result.data);
        setPosts(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  // console.log(session);

  return (
    <ScrollView className=" bg-white ">
      {/* <FilterForm /> */}
      <AdminTopSelectArea />
      <View className="px-5 mt-5">
        <Text className=" font-poppins font-semibold  text-[24px]  leading-[36px]">
          Favorite Ads
        </Text>
      </View>
      {!posts || !posts.length > 0 ? (
        <View
          className=" py-[14px] px-[10px]   mx-4  mt-4 rounded-lg"
          style={{ backgroundColor: "#737373" }}
        >
          <Text className=" font-poppins font-semibold text-[14px] text-white ">
            No Ads found!
          </Text>
        </View>
      ) : (
        <View className="px-4 flex gap-5 mt-5 mb-20">
          {posts.map((ads) => (
            <DynamicCard key={ads.title} ads={ads} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default FavouriteAds;
