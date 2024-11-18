import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Home/HeroSection";
import Categories from "../../components/Home/Categories";
import FeaturedAds from "../../components/Home/FeaturedAds";
import SellersDetails from "../../components/Home/SellersDetails";
import RegisterNow from "../../components/Home/RegisterNow";
import Search from "../../components/Home/Search";
import { getHomeSections } from "../../apiService";

export default function Home() {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getHomeSections();
        // console.log(data.result.data);
        setSections(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView>
      <View>
        <HeroSection />
        <View>
          <View className="px-4">
            <Search searches={sections?.getSearchForm || null} />
          </View>
          <View className="px-4">
            <Categories categories={sections?.getCategories || null} />
          </View>
          <View className="px-4">
            <FeaturedAds ads={sections?.getLatestPosts || null} />
          </View>
          <SellersDetails stats={sections?.getStats || null} />
          <View className="px-4">
            <RegisterNow />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
